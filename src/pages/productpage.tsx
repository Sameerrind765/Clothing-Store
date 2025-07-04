import { useState, useEffect } from 'react';
import Products from "./products";
import Filter from "../components/filter";
import nextArrow from '../assets/next-arrow.svg';
import filter from '../assets/Filter.svg';
import { useLocation } from "react-router-dom";

function ProductPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const search = params.get("search")?.toLowerCase() || "";
    const genderParam = params.get("gender")?.toLowerCase();

    const [filters, setFilters] = useState({
        size: [] as string[],
        type: [] as string[],
        price: { min: '', max: '' },
        color: [] as string[],
        gender: genderParam ? [genderParam] : [],
    });

    // If the gender param changes (user navigates), update the filter
    useEffect(() => {
        if (genderParam) {
            setFilters(f => ({ ...f, gender: [genderParam] }));
        }
    }, [genderParam]);

    const handleCloseFilter = () => setIsMenuOpen(false);
    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const handleFilterApply = (newFilters: typeof filters) => {
        setFilters(newFilters);
        setIsMenuOpen(false);
        console.log("Filter values:", newFilters);
    };

    return (
        <>
            <div className="headline bg-black text-white text-center p-1"></div>
            <div className="items-center flex">
                <div className="productcontainer w-full flex pt-3">
                    {/* Filter Sidebar (mobile/desktop) */}
                    
                        {/* Pass onClose to Filter so it can close itself */}
                        <Filter display={isMenuOpen ? 'flex' : 'hidden'} onClose={handleCloseFilter} onApply={handleFilterApply} />
                    

                    <div className="w-full">
                        {/* Sort bar (desktop only, always visible) */}
                        <div className="sort border-2 items-center justify-between p-2 hidden">
                            <h2 className='ml-4 text-2xl'>1911 ITEMS IN POLO T SHIRTS</h2>
                            <div className="flex">
                                <select name="Product Type" id="">
                                    <option value="Feature">Featured</option>
                                    <option value="Recent">Most Recents</option>
                                    <option value="Sold">Most Sold</option>
                                </select>
                            </div>
                        </div>
                        {/* Sort bar (mobile only, visible when filter is open) */}
                        {isMenuOpen && (
                            <div className="sort border-2 items-center justify-between p-2 flex">
                                <h2 className='ml-4 text-2xl'>1911 ITEMS IN POLO T SHIRTS</h2>
                                <div className="flex">
                                    <select name="Product Type" id="">
                                        <option value="Feature">Featured</option>
                                        <option value="Recent">Most Recents</option>
                                        <option value="Sold">Most Sold</option>
                                    </select>
                                </div>
                            </div>
                        )}
                        {/* Filter button (mobile only, when menu is closed) */}
                        <div className={`head justify-center flex items-center flex-col gap-4 ${isMenuOpen ? 'hidden' : 'flex'}`}>
                            <button id='filter-btn' className="flex rounded-none justify-between w-30 text-black bg-transparent border-black" onClick={toggleMenu}>
                                <img src={filter} alt="Filter Icon" />
                                <p className='font-bold'>Filter</p>
                            </button>
                        </div>

                        {/* Replace the colors prop value with the appropriate color(s) from your filter state or props */}
                        <Products
                            size={filters.size}
                            type={filters.type}
                            price={filters.price}
                            color={filters.color}
                            gender={filters.gender}
                            search={search}
                        />

                        <div className="container mb-8 justify-center gap-2.5 flex">
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
    );
}

export default ProductPage;