import Card from '../components/card';
import imageCard1 from '../assets/image-card-1.jpg';
import imageCard2 from '../assets/image-card-2.jpg';
import imageCard3 from '../assets/image-card-3.jpg';
import imageCard4 from '../assets/image-card-4.jpg';
// import hamburgerIcon from "../assets/hamburger-icon (2).svg"
// import gridIcon from "../assets/grid-icon.svg"
import nextArrow from '../assets/next-arrow.svg';
import filter from '../assets/Filter.svg';
import Uparrow from '../assets/up-arrow.svg';

function ProductPage() {
    return (
        <>
            <div className="headline h-6 bg-black text-white text-center w-full p-1">
            </div>
            <div className="items-center flex">
                <div className="productcontainer w-full flex pt-15">

                    <div className="filter-container">
                        <div className="filter-col">
                            <div className="container mt-1.5 w-full flex justify-between items-center">
                                <h2 className="filter-head font-bold text-2xl">
                                    Size
                                </h2>
                                <img src={Uparrow} alt="EXPAND LESS ARROW ICON" />
                            </div>
                            <ul className='text-gray-600 text-sm font-semibold gap-6 flex flex-col mt-4'>
                                <li>Small</li>
                                <li>Meduim</li>
                                <li>Large</li>
                                <li>X-Large</li>
                                <li className='text-black font-bold'>See all</li>
                            </ul>
                        </div>

                        <div className="filter-col">
                            <div className="container mt-1.5 w-full flex justify-between items-center">
                                <h2 className="filter-head font-bold text-2xl">
                                    Product Type
                                </h2>
                                <img src={Uparrow} alt="EXPAND LESS ARROW ICON" />
                            </div>
                            <ul className='text-gray-600 text-sm font-semibold gap-6 flex flex-col mt-4'>
                                <li className='flex items-center'><input type="checkbox" name="Henley" id="checkbox" /><p className='ml-0.5'>HENLEY</p></li>
                                <li className='flex items-center'><input type="checkbox" name="Polo" id="checkbox" /><p className='ml-0.5'>POLO</p></li>
                                <li className='text-black font-bold'>See all</li>
                            </ul>
                        </div>

                        <div className="filter-col">
                            <div className="container mt-1.5 w-full flex justify-between items-center">
                                <h2 className="filter-head font-bold text-2xl">
                                    Price range
                                </h2>
                                <img src={Uparrow} alt="EXPAND LESS ARROW ICON" />
                            </div>
                            <ul className='text-sm font-semibold flex gap-1 flex-col mt-4'>
                                <li>
                                    <input type="range" min="1" max="100" name='price range' className="slider" id="myRange" />
                                </li>
                                <li className='flex gap-1'>
                                    <div className="inputbox flex flex-col gap-2">
                                        <p>Min</p>
                                        <input type="text" placeholder='0' />
                                    </div>
                                    <div className="inputbox flex flex-col gap-2">
                                        <p>Max</p>
                                        <input type="text" placeholder='999999' />
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="filter-col">
                            <div className="container mt-1.5 w-full flex justify-between items-center">
                                <h2 className="filter-head font-bold text-2xl">
                                    Color
                                </h2>
                            </div>
                            <ul className='text-sm font-semibold flex gap-1 flex-col mt-4'>
                                <li className='flex items-center'>
                                    <input type="checkbox" name="" id="" /> BLACK
                                </li>
                                <li className='flex items-center'>
                                    <input type="checkbox" name="" id="" /> BLUE
                                </li>
                                <li className='flex items-center'>
                                    <input type="checkbox" name="" id="" /> BROWN
                                </li>
                                <li className='flex items-center'>
                                    <input type="checkbox" name="" id="" /> RED
                                </li>
                                <li className='flex items-center'>
                                    <input type="checkbox" name="" id="" /> GRAY
                                </li>
                                <li className='flex items-center'>
                                    <input type="checkbox" name="" id="" /> WHITE
                                </li>
                                <li className='text-black font-bold'>See all</li>
                            </ul>
                            <ul className='text-gray-600 text-sm font-semibold gap-6 flex flex-col mt-4'>
                                <li className='flex items-center'><input type="checkbox" name="Henley" id="checkbox" /><p className='ml-0.5'>HENLEY</p></li>
                                <li className='flex items-center'><input type="checkbox" name="Polo" id="checkbox" /><p className='ml-0.5'>POLO</p></li>
                                <li className='text-black font-bold'>See all</li>
                            </ul>
                        </div>

                        <button className='w-full'>Apply</button>

                    </div>

                    <div className='w-full'>
                        <div className="sort border-2 flex items-center justify-between p-2">
                            <h2 className='ml-4 text-2xl'>1911 ITEMS IN POLO T SHIRTS</h2>
                            <div className="flex">
                                <select name="Product Type" id="">
                                    <option value="Feature">Featured</option>
                                    <option value="Feature">Most Recents</option>
                                    <option value="Feature">Most Sold</option>
                                </select>
                                {/* <div className="button items-center flex">
                                    <div className="box"><img src={hamburgerIcon} alt="button for changing the view of card to grid" /></div>
                                    <div className="box"><img src={gridIcon} alt="button for changing the view of card to row" /></div>
                                </div> */}
                            </div>
                        </div>
                        <div className="head justify-center mt-8 hidden items-center flex-col gap-4">
                            <button id='filter-btn' className="flex rounded-none justify-between w-30 text-black bg-transparent border-black">
                                <img src={filter} alt="Filter Icon" />
                                <p className='font-bold'>Filter</p>
                            </button>
                        </div>
                        <div className="m-5 container flex gap-8 justify-center">
                            <Card imageSrc={imageCard1} altText="Cutwork Poplin Dress in white" />
                            <Card imageSrc={imageCard2} altText="Summer Linen Shirt for men" />
                            <Card imageSrc={imageCard3} altText="Classic Black Trousers" />
                            <Card imageSrc={imageCard4} altText="Lightweight Denim Jacket" />
                        {/* </div>
                        <div className="m-5 container flex gap-8 justify-center"> */}
                            <Card imageSrc={imageCard1} altText="Cutwork Poplin Dress in white" />
                            <Card imageSrc={imageCard2} altText="Summer Linen Shirt for men" />
                            <Card imageSrc={imageCard3} altText="Classic Black Trousers" />
                            <Card imageSrc={imageCard4} altText="Lightweight Denim Jacket" />
                        {/* </div>
                        <div className="m-5 container flex gap-8 justify-center"> */}
                            <Card imageSrc={imageCard1} altText="Cutwork Poplin Dress in white" />
                            <Card imageSrc={imageCard2} altText="Summer Linen Shirt for men" />
                            <Card imageSrc={imageCard3} altText="Classic Black Trousers" />
                            <Card imageSrc={imageCard4} altText="Lightweight Denim Jacket" />
                        </div>
                        <div className="container mb-8 justify-center gap-2.5">
                            <p className='text-gray-500'>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>.</p>
                            <p>.</p>
                            <p>.</p>
                            <p>6</p>
                            <div className='bg-black items-center flex p-1 h-6 w-6'>
                                <img className='icon font-bold' src={nextArrow} alt="Next Button vector icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage;