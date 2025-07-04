import Uparrow from '../assets/up-arrow.svg';
import Close from '../assets/close.svg';
import { useState } from "react";

type FilterProps = {
    display: string;
    onClose: () => void;
    onApply?: (filters: {
        size: string[];
        type: string[];
        price: { min: string; max: string };
        color: string[];
        gender: string[];
    }) => void;
};

function Filter({ display, onClose, onApply }: FilterProps) {
    const [openSections, setOpenSections] = useState({
        size: false,
        type: false,
        price: false,
        color: false,
        gender: false, // Add gender section toggle
    });

    // State for filter values
    const [size, setSize] = useState<string[]>([]);
    const [type, setType] = useState<string[]>([]);
    const [price, setPrice] = useState({ min: '', max: '' });
    const [color, setColor] = useState<string[]>([]);
    const [gender, setGender] = useState<string[]>([]); // <-- Add gender state

    const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    // Checkbox helpers
    const handleTypeChange = (t: string) => {
        setType(prev =>
            prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]
        );
    };
    const handleColorChange = (c: string) => {
        setColor(prev =>
            prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]
        );
    };

    // Gender checkbox helper
    const handleGenderChange = (g: string) => {
        setGender(prev =>
            prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        if (onApply) {
            onApply({ size, type, price, color, gender }); // <-- Include gender
        }
        e.preventDefault();
    };

    return (
        <form className={`filter-container ${display}`} onSubmit={handleSubmit}>
            <div id='menu-head'>
                <div className="container mt-1.5 w-full flex justify-between items-center">
                    <h2 className="filter-head font-bold text-2xl">Menu</h2>
                    <button type="button" onClick={onClose} className="close-btn">
                        <img src={Close} alt="Close Button" />
                    </button>
                </div>
            </div>

            {/* Size */}
            <div className="filter-col">
                <div
                    className="container mt-1.5 w-full flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('size')}
                >
                    <h2 className="filter-head font-bold text-2xl">Size</h2>
                    <img src={Uparrow} alt="EXPAND LESS ARROW ICON" className={`transition-transform ${openSections.size ? 'rotate-180' : ''}`} />
                </div>
                <ul className={`${openSections.size ? '' : 'hidden'} text-gray-600 text-sm font-semibold gap-6 flex mt-4 flex-wrap`}>
                    {[42, 44, 46, 48, 50, 52, 54, 56, 58, 60].map(s => {
                        const isChecked = Array.isArray(size) ? size.includes(String(s)) : false;
                        return (
                            <li key={s}>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        name="size"
                                        value={s}
                                        checked={isChecked}
                                        onChange={() => {
                                            setSize(prev => {
                                                const arr = Array.isArray(prev) ? prev : prev ? [prev] : [];
                                                return arr.includes(String(s))
                                                    ? arr.filter(x => x !== String(s))
                                                    : [...arr, String(s)];
                                            });
                                        }}
                                    />
                                    <div className={`box-size${isChecked ? ' active' : ''}`}>{s}</div>
                                </label>
                            </li>
                        );
                    })}
                    <li className='text-black font-bold'>See all</li>
                </ul>
            </div>

            {/* Product Type */}
            <div className="filter-col">
                <div
                    className="container mt-1.5 w-full flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('type')}
                >
                    <h2 className="filter-head font-bold text-2xl">Product Type</h2>
                    <img src={Uparrow} alt="EXPAND LESS ARROW ICON" className={`transition-transform ${openSections.type ? 'rotate-180' : ''}`} />
                </div>
                <ul className={`${openSections.type ? '' : 'hidden'} text-gray-600 text-sm font-semibold gap-6 flex flex-col mt-4`}>
                    {['HENLEY', 'POLO'].map(t => (
                        <li key={t} className='flex items-center'>
                            <input
                                type="checkbox"
                                name="type"
                                value={t}
                                checked={type.includes(t)}
                                onChange={() => handleTypeChange(t)}
                            />
                            <p className='ml-0.5'>{t}</p>
                        </li>
                    ))}
                    <li className='text-black font-bold'>See all</li>
                </ul>
            </div>

            {/* Price Range */}
            <div className="filter-col">
                <div
                    className="container mt-1.5 w-full flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('price')}
                >
                    <h2 className="filter-head font-bold text-2xl">Price range</h2>
                    <img src={Uparrow} alt="EXPAND LESS ARROW ICON" className={`transition-transform ${openSections.price ? 'rotate-180' : ''}`} />
                </div>
                <ul className={`${openSections.price ? '' : 'hidden'} text-sm font-semibold flex gap-1 flex-col mt-4`}>
                    <li>
                        <div className="flex gap-2">
                            <div className="inputbox flex flex-col gap-2">
                                <p>Min</p>
                                <input
                                    type="number"
                                    placeholder='0'
                                    value={price.min}
                                    onChange={e => setPrice(p => ({ ...p, min: e.target.value }))}
                                />
                            </div>
                            <div className="inputbox flex flex-col gap-2">
                                <p>Max</p>
                                <input
                                    type="number"
                                    placeholder='999999'
                                    value={price.max}
                                    onChange={e => setPrice(p => ({ ...p, max: e.target.value }))}
                                />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Color */}
            <div className="filter-col">
                <div
                    className="container mt-1.5 w-full flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('color')}
                >
                    <h2 className="filter-head font-bold text-2xl">Color</h2>
                    <img src={Uparrow} alt="EXPAND LESS ARROW ICON" className={`transition-transform ${openSections.color ? 'rotate-180' : ''}`} />
                </div>
                <ul className={`${openSections.color ? '' : 'hidden'} text-sm font-semibold items-center flex gap-1 mt-4`}>
                    {['black', 'blue', 'brown', 'red', 'gray', 'white'].map(c => {
                        const isChecked = Array.isArray(color) ? color.includes(c) : false;
                        return (
                            <li key={c} className='flex items-center'>
                                <label className={`cursor-pointer ${isChecked ? ' color-input-active color-box-active' : ''}`}>
                                    <input
                                        type="checkbox"
                                        name="color"
                                        className="hidden"
                                        value={c}
                                        checked={isChecked}
                                        onChange={() => handleColorChange(c)}
                                    />
                                    <div
                                        className={`box-color-input${isChecked ? ' color-input-active color-box-active' : ''}`}
                                        style={{ backgroundColor: c,border: '1px solid black' }}
                                    ></div>
                                </label>
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/* Gender */}
            <div className="filter-col">
                <div
                    className="container mt-1.5 w-full flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('gender')}
                >
                    <h2 className="filter-head font-bold text-2xl">Gender</h2>
                    <img src={Uparrow} alt="EXPAND LESS ARROW ICON" className={`transition-transform ${openSections.gender ? 'rotate-180' : ''}`} />
                </div>
                <ul className={`${openSections.gender ? '' : 'hidden'} text-gray-600 text-sm font-semibold gap-6 flex flex-col mt-4`}>
                    {['male', 'female', 'unisex'].map(g => (
                        <li key={g} className='flex items-center'>
                            <input
                                type="checkbox"
                                name="gender"
                                value={g}
                                checked={gender.includes(g)}
                                onChange={() => handleGenderChange(g)}
                            />
                            <p className='ml-0.5 capitalize'>{g}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <button type="submit" className='w-full bg-black text-white font-bold mt-4'>Apply</button>
        </form>
    );
}

export default Filter;