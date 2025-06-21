interface ImageProps {
  imageSrc: string;
  altText: string;
}

function Card({imageSrc,altText }: ImageProps) {
    return (
        <div className="most-Selling card flex  items-center  flex-col">
                        <img src={imageSrc} className='w-fit' alt={altText} />
                        <div className="desc flex flex-col  items-center  w-fit">
                            <h2 className="didact-gothic">CUTWORK POPLIN DRESS</h2>
                            <p>Rs. 9950.00</p>
                            <div className="container justify-center gap-1.5 flex">
                                <div className="color-box size-5 bg-gray-500"></div>
                                <div className="color-box size-5 bg-black"></div>
                            </div>
                        </div>
                    </div>
    )
}
export default Card;