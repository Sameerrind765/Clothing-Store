import { useState } from 'react';
import Products from "./products";
import Filter from "../components/filter"
import nextArrow from '../assets/next-arrow.svg';
import filter from '../assets/Filter.svg';

function ProductPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    }

    return (
        <>
            <div className="items-center flex">
                <div className="productcontainer w-full flex pt-3">
                    <div className={`filter-container ${isMenuOpen ? 'flex' : 'hidden'}`}>
                        <Filter />
                    </div>

                    <div className='w-full hidden md:block'>
                        <div className={`sort border-2 flex items-center justify-between p-2 ${isMenuOpen ? 'flex' : 'hidden'}`}>
                            <h2 className='ml-4 text-2xl'>1911 ITEMS IN POLO T SHIRTS</h2>
                            <div className="flex">
                                <select name="Product Type" id="">
                                    <option value="Feature">Featured</option>
                                    <option value="Feature">Most Recents</option>
                                    <option value="Feature">Most Sold</option>
                                </select>
                            </div>
                        </div>
                        <div className={`head justify-center flex items-center flex-col gap-4 ${isMenuOpen ? 'hidden' : 'flex'}`}>
                            <button id='filter-btn' className="flex rounded-none justify-between w-30 text-black bg-transparent border-black" onClick={toggleMenu}>
                                <img src={filter} alt="Filter Icon" />
                                <p className='font-bold'>Filter</p>
                            </button>
                        </div>

                        <Products />

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