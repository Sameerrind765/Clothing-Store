import { useParams } from 'react-router-dom';
import { useCart } from "../context/CartContext";
import { useState } from 'react';
import products from '../data/products.json';
import type { Product } from '../types/types';
import arrowLeft from '../assets/arrow-left.svg';
import carticon2 from "../assets/cart-icon-2.svg"
import creditCardIcon from "../assets/credit-card.svg";
import shirtIcon from "../assets/Size-&-Fit.svg";
import freeShippingIcon from "../assets/free-shipping.svg";
import truckIcon from "../assets/truck.svg";
import fiveStarIcon from "../assets/five-star-icon.svg";
import leftArrow from "../assets/nav-arrow.svg";
import arrowUp from "../assets/arrow-up.svg";
import arrowDown from "../assets/arrow-down.svg";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function ProductCard() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const cartItems = useCart();
  
  const productId = Number(id);
  const product: Product | undefined =
  !isNaN(productId) ? products.find((p) => p.id === productId) : undefined;

  
  if (!product) {
    return <h2 className="text-center text-red-500 mt-10">Product not found</h2>;
  }
  
  const [activeImage, setActiveImage] = useState(product.image[0]);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);
  const [showPopup, setShowPopup] = useState(false);
  
  useEffect(() => {
    setActiveImage(product.image[0]);
    // setSelectedSize(undefined);
    // setSelectedColor(undefined);
  }, [product])
  useEffect(() => { 
    console.log(JSON.stringify(cartItems));
  })

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    if (!selectedColor) {
      alert("Please select a color.");
      return;
    }
    // navigate("/cart");
    addToCart({
      id: product.id,
      code: product.code,
      name: product.name,
      price: product.price,
      image: product.image[0],
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
      totalPrice: product.price,
    });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1500);
  };

  return (
    <>
      <div className="w-[100%] h-5 bg-black"></div>
      <div id="product-card" className="container flex justify-center mt-14">

        <div id="productcard-image" className="container flex bg-none w-[30%]">

          <div className="items-baseline m-auto w-fit  manage flex md:m-0 md:flex-row">
            <div className="gap-5 hidden flex-row  md:flex-col md:items-center lg:flex">

              <div className='gap-5 w-[70px] flex-row md:flex md:flex-col md:items-center'>
                {product.image.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Product image ${index + 1}`}
                    className={`cursor-pointer ${activeImage === img ? 'border-2 border-black' : ''}`}
                    onClick={() => setActiveImage(img)}
                    aria-label='open'
                  />
                ))}
              </div>

              <div className="flex flex-col items-center gap-5">

                <button className="updown-button cursor-pointer hover:border-transparent user-select bg-black hidden md:order-2 md:flex" aria-label='next' onClick={() => {
                  setActiveImage((next) => {
                    const currentIndex = product.image.indexOf(next);
                    const nextIndex = (currentIndex + 1) % product.image.length;
                    return product.image[nextIndex];
                  }
                  )
                }} >
                  <img className="h-6 w-6" src={arrowDown} alt="Select photo above" aria-label='next' />
                </button>
                <button className="updown-button hover:border-transparent hidden md:flex" aria-label='prev' onClick={() => {
                  setActiveImage((prev) => {
                    const currentIndex = product.image.indexOf(prev);
                    const prevIndex = (currentIndex - 1 + product.image.length) % product.image.length;
                    return product.image[prevIndex];
                  }
                  )
                }} >
                  <img className="h-6 w-6 cursor-pointer user-select: none" draggable="false" src={arrowUp} alt="Select photo above" />
                </button>

              </div>

            </div>
          </div>

          <img className='m-auto h-4/5 md:ml-5 md:h-auto' src={activeImage} alt={product.alt || "Product image"} />
        </div>

        <div id="productcard-text" className="text gap-5 pr-6 pt-6 pb-6 pl-6 flex flex-col justify-between w-[70%] md:gap-10">
          { /* Breadcrumbs and product details */}
          <div id='heirachy' className="text-gray gap-2.5 hidden md:flex">
            <p>{product.gender ? product.gender.toUpperCase() : "UNISEX"}</p>
            {(
              <>
                <img src={leftArrow} alt="category" />
                <p>{product.category ? product.category.toUpperCase() : "CATEGORY"}</p>
              </>
            )}
            <img src={leftArrow} alt="category" />
            <p>{product.subCategory ? product.subCategory.toUpperCase() : "SUB CATEGORY"}</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl">{product.name}</h2>
            <p>{product.code}</p>
          </div>
          <div className="flex gap-2">
            <img src={fiveStarIcon} alt="" />
            <p className="text-gray block">5.0</p>

            {/* <p className="text-gray">120</p> */}
            <div className="text-gray flex gap-1">
              {/* <img src={messageIcon} alt="messageIcon" /> */}
              <p>120</p>
              <p>COMMENTS</p></div>
          </div>

          <div className='flex flex-col gap-2'>

            <div className="flex gap-4">
              <p className="flex">SELECT SIZE</p>
              <span className="flex gap-2 text-gray">
                <span>SIZE GUIDE</span> <img src={arrowLeft} className="text-black" alt="Next" /></span>
            </div>
            <div id="product-size-selector" className="flex gap-2 product-size-container">
              {product.size && product.size.length > 0 ? (
                product.size.map((sz, idx) => (
                  <div key={idx} className={selectedSize === sz ? 'active box-size' : 'box-size'} onClick={
                    () => setSelectedSize(sz)
                  }>{sz}</div>
                ))
              ) : (
                <div className="text-red-800 font-bold text-2xl">No sizes</div>
              )}
            </div>

          </div>
          <div className='flex flex-col gap-2'>

            <div id="color-picker" className="flex flex-col gap-1">

              <p className="font-bold">COLOURS AVAILABLE</p>
              <div className="color-container container">

                {product.colors && product.colors.length > 0 ? (
                  product.colors.map((color, idx) => (
                    <div
                      key={idx}
                      className={selectedColor === color ? 'color-box-active' : ''}
                      onClick={() => setSelectedColor(color)}
                      style={{ display: 'inline-block', cursor: 'pointer' }}
                    >
                      <div className="box-color" style={{ backgroundColor: color }}></div>
                    </div>
                  ))
                ) : (
                  <div className='text-red-800 font-bold text-2xl'>No Color Available</div>
                )}

              </div>
            </div>

          </div>

          <div className="flex gap-1 order-2 md:order-none">
            <button
              className="h-11 bg-black text-white justify-center text-center flex items-center gap-5 webkitavailable"
              onClick={handleAddToCart}
            >
              <p className='text-[14px]'>ADD TO CART</p>
              <img src={carticon2} alt="" />
            </button>
            <div className="flex border-2 border-black text-center justify-center items-center webkitavailable rounded-[10px]">
              RS. {product.price.toLocaleString()}
            </div>
          </div>
          <Link to="/cart" className='order-1 md:order-none'>
          <button className="h-11 bg-black text-white justify-center text-center flex items-center gap-5 webkitavailable order-2 md:order-none">BUY NOW</button>
          </Link>

          <div className="line h-0.5 bg-gray-300  hidden lg:block"></div>

          <div className="flex features gap-4">

            <div className="flex flex-row md:flex-row lg:flex-col lg:justify-between w-2/3 md:w-auto gap-4">

              <div className="flex flex-row md:flex-col lg:flex-row items-center gap-4">
                <div className="gray flex items-center justify-center rounded-3xl w-11 h-11">
                  <img src={creditCardIcon} alt="credit card icon" />
                </div>
                <p className='tags'>SECURE PAYMENT</p>
              </div>

              <div className="flex flex-row md:flex-col lg:flex-row items-center gap-4">
                <div className="gray flex items-center justify-center rounded-3xl w-11 h-11">
                  <img src={truckIcon} alt="Truck Shipping icon" />
                </div>
                <p className='tags'>FREE SHIPPING</p>

              </div>

            </div>

            <div className="flex flex-row gap-4 lg:flex-col">

              <div className="flex flex-row md:flex-col lg:flex-row items-center gap-4">
                <div className="gray flex items-center justify-center rounded-3xl w-11 h-11">
                  <img src={shirtIcon} alt="Free Shipping icon" />
                </div>
                <p className='tags'>SIZE AND FIT</p>
              </div>

              <div className="hidden flex-row md:flex-col lg:flex-row items-center gap-4 lg:flex">
                <div className="flex-col md:flex-row  gray flex items-center justify-center rounded-3xl w-11 h-11">
                  <img src={freeShippingIcon} alt="Free Shipping icon" />
                </div>
                <p>FREE SHIPPING AND RETURNS</p>
              </div>

            </div>


          </div>
        </div>
      </div>
      {showPopup && (
        <div className="pop-up bg-black text-white p-4 rounded shadow-lg">
          Item added to cart!
        </div>
      )}
    </>
  );
}
export default ProductCard;
