import "./style.css";
import UseNavigation from "../utils/navigate.js";
import Products from "./products.js";

function Home() {
    const navigate = UseNavigation();
    return (
        <>
            <main>
                <div className="headline bg-black text-white text-center p-1"><h2 className=" text-[13px] ">FREE SHIPPING ON ORDER ABOVE RS. 2500</h2></div>
                <div id="hero" className="hero banner justify-center flex">
                    <div className="text-center text-white flex flex-col w-full justify-end items-center gap-4 mb-20">
                        <p className="z-10">SPRING SUMMER</p>
                        <h1 className="text-3xl  font-bold z-10">TELL ME MORE</h1>
                        <div className="cta flex gap-2 z-10">
                            <button className="bg-white text-black z-10" onClick={() => navigate("/product")}>SHOP MEN</button>
                            <button className="bg-white text-black z-10" onClick={() => navigate("/product")}>SHOP WOMEN</button>
                        </div>
                    </div>
                </div>


                <div className="most-selling items-center flex flex-col">
                    <div className="head justify-center items-center flex flex-col m-8 gap-4">
                        <h1 className="text-center">BESTSELLERS</h1>
                        <button className="rounded-none w-40 text-black bg-transparent border-black" onClick={() => navigate("/product")}>VIEW ALL</button>
                    </div>

                    <Products start={0} end={4} />

                </div>

                <div id="friends" className="hero banner hero-2 justify-center flex mb-9">
                    <div className="text-center text-white flex flex-col w-full justify-end items-center gap-4 mb-20">
                        <p className="z-10">SPRING SUMMER</p>
                        <h1 className="text-3xl z-10 font-bold">TELL ME MORE</h1>
                        <button className="bg-white z-10 text-black rounded-none" onClick={() => navigate("/product")}>SHOP MEN</button>
                    </div>
                </div>
                
                    <Products start={5} end={9} />



            </main>
        </>
    );
}

export default Home;