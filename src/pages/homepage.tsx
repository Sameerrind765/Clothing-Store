import "./homepage.css";
import Card from '../components/card';
import UseNavigation from "../utils/navigate.js";
import imageCard1 from '../assets/image-card-1.jpg';
import imageCard2 from '../assets/image-card-2.jpg';
import imageCard3 from '../assets/image-card-3.jpg';
import imageCard4 from '../assets/image-card-4.jpg';

function Home() {
    const navigate = UseNavigation();
    return (
        <>
        <main>
            <div className="headline bg-black text-white text-center p-1"><h2>FREE SHIPPING ON ORDER ABOVE RS. 2500</h2></div>
            <div id="hero" className="hero banner justify-center flex">
                <div className="text-center text-white flex flex-col w-full justify-end items-center gap-4 mb-20">
                    <p className="z-10">SPRING SUMMER</p>
                    <h1 className="text-3xl  font-bold z-10">TELL ME MORE</h1>
                    <div className="cta flex gap-2 z-10">
                        <button className="bg-white text-black rounded-none z-10" onClick={() => navigate("/product")}>SHOP MEN</button>
                        <button className="bg-white text-black rounded-none z-10" onClick={() => navigate("/product")}>SHOP WOMEN</button>
                    </div>
                </div>
            </div>


            <div className="most-selling items-center flex flex-col">
                <div className="head justify-center items-center flex flex-col m-8 gap-4">
                    <h1 className="text-center">BESTSELLERS</h1>
                    <button className="rounded-none w-40 text-black bg-transparent border-black" onClick={() => navigate("/product")}>VIEW ALL</button>
                </div>
                <div className="container gap-8 justify-center">
                    <Card imageSrc={imageCard1} altText="Cutwork Poplin Dress in white" />
                    <Card imageSrc={imageCard2} altText="Summer Linen Shirt for men" />
                    <Card imageSrc={imageCard3} altText="Classic Black Trousers" />
                    <Card imageSrc={imageCard4} altText="Lightweight Denim Jacket" />
                </div>
            </div>

            <div id="friends" className="hero banner hero-2 justify-center flex">
                <div className="text-center text-white flex flex-col w-full justify-end items-center gap-4 mb-20">
                    <p className="z-10">SPRING SUMMER</p>
                    <h1 className="text-3xl z-10 font-bold">TELL ME MORE</h1>
                    <button className="bg-white z-10 text-black rounded-none" onClick={() => navigate("/product")}>SHOP MEN</button>
                </div>
            </div>
            <div className="m-auto mt-20 container gap-8 justify-center">
                <Card imageSrc={imageCard1} altText="Cutwork Poplin Dress in white" />
                <Card imageSrc={imageCard2} altText="Summer Linen Shirt for men" />
                <Card imageSrc={imageCard3} altText="Classic Black Trousers" />
                <Card imageSrc={imageCard4} altText="Lightweight Denim Jacket" />
            </div>
        </main>
        </>
    );
}

export default Home;