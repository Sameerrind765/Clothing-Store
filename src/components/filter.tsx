import Uparrow from '../assets/up-arrow.svg';
import Close from '../assets/close.svg';


function filter() {
    return (
        <>
        <div id='menu-head' className="filter-col">
            <div className="container mt-1.5 w-full flex justify-between items-center">
                <h2 className="filter-head font-bold text-2xl">
                    Menu
                </h2>
                <img src={Close} alt="Close Button" />
            </div>

        </div>
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
        </>
    )
}

export default filter;