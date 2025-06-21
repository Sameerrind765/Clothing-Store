import image1 from "../assets/image-card-5.jpg";
function ProductCard() {
  return (
    <div className="container">
      <div className="manage"></div>
      <div className="container">
        <img src={image1} alt="Blue color pant cot" />
        <div className="text">
          <p>
            MEN {">"} T-SHIRTS {">"} POLO
          </p>
          <h2>TENCIL BLEND POLO</h2>
          <p>MAS24TP005-SML-BRN</p>
          <p>SELECT SIZE</p>
          <p>SIZE GUIDE</p>
          <p>COLOURS AVAILABLE</p>
          <button>ADD TO CART</button>
          <div className="box">RS. 9,950.00</div>
          <button>BUY NOW</button>
          <p>SECURE PAYMENT</p>
          <p>FREE SHIPPING</p>
          <p>SIZE & FIT</p>
          <p>FREE SHIPPING & RETURNS</p>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
