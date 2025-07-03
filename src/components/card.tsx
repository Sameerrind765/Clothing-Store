import { useNavigate } from "react-router-dom";

interface Product {
    id: number  ;
    name: string;
    price: number;
    alt: string;
    colors: string[];
    image: string;
}

function Card({ id, name, price, alt, colors, image }: Product) {
    const navigate = useNavigate();

    return (
        <div key={id} className="pb-10 card flex items-center flex-col" onClick={() => navigate("/product/" + id)}>
            <img src={image} className='w-fit' alt={alt} />
            <div className="desc flex flex-col items-center md:w-fit">
                <h2 className="didact-gothic">{name}</h2>
                <p>Rs. {price}</p>
                <div className=" justify-center gap-1.5 flex">
                    {colors.map((color, idx) => (
                        <div key={idx} className={`color-box size-5 border-[0.1px] bg-${color}`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;