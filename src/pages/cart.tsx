import { useCart } from "../context/CartContext";
import UseNavigate from "../utils/navigate";

const Cart = () => {
    const { cartItems } = useCart();
    const navigate = UseNavigate();

    const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

    return (
        <>
            <div className="headline bg-black text-white text-center p-1 h-3.5"></div>
            <div className="cart-head mt-10 mb-10">
                <h1 className="cart-h1">My Cart</h1>
                <div className="cart flex flex-col container gap-10">
                    <div className="cart-head flex">
                        <p className="text-[26px] font-semibold min-w-full border-b-black border-b-[1px] ml-[11px]">PRODUCT</p>
                        <p className="hidden">PRICE</p>
                        <p className="hidden">QTY</p>
                        <p className="hidden">TOTAL</p>
                    </div>
                    {cartItems.length === 0 ? (
                        <p className="text-center py-10">Your cart is empty.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div className="cart-card flex flex-col justify-between" key={item.id + item.size + item.color}>
                                <img src={Array.isArray(item.image) ? item.image[0] : item.image} alt={item.name} className="w-24 h-24 object-cover" />
                                <h2 className="text-[1rem]">{item.name}</h2>
                                <p className="text-gray-600 font-semibold text-[11px]">#{item.code}</p>
                                <p className="text-[11px] font-semibold">Color: {item.color}</p>
                                <p className="text-[11px] font-semibold">Size: {item.size}</p>
                                <p className="text-[14px] text-red-600 font-semibold">Price: Rs.{item.price.toLocaleString()}</p>
                                <div className="quantity flex justify-between">
                                    <p>Quantity</p>
                                    <div className="flex items-center gap-2">
                                        <button className="border border-black rounded-full w-8 h-8 flex items-center justify-center">-</button>
                                        <p>{item.quantity}</p>
                                        <button className="border border-black rounded-full w-8 h-8 flex items-center justify-center">+</button>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <p className="text-[17px] font-semibold">Total Amount: Rs.{item.totalPrice.toLocaleString()}</p>
                                </div>
                            </div>
                        ))
                    )}
                    <div className="flex flex-col order-summary">
                        <h2 className="border-b-black border-b-[1px]">Order Summary</h2>
                        <div className="summary-item flex flex-col gap-3">
                            <div className="border-b-gray-600 wrapper flex justify-between border-b-[1px]">
                                <p>Subtotal</p>
                                <p>Rs. {subtotal.toLocaleString()}</p>
                            </div>
                            <div className="border-b-gray-600 wrapper flex justify-between border-b-[1px]">
                                <p>Discount</p>
                                <p>Rs. 0</p>
                            </div>
                            <div className="border-b-gray-600 wrapper flex justify-between border-b-[1px]">
                                <p>Total</p>
                                <p>Rs. {subtotal.toLocaleString()}</p>
                            </div>
                            <button className="cart-btn" onClick={() => {
                                navigate("/checkout")
                            }}>Proceed To Checkout</button>
                            <button className="cart-btn-2">Continue Shopping</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;