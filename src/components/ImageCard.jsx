function ImageCard({images}){
    return (
        <div className="grid grid-cols-4 gap-4">
            {images.map((image, idx) => (
                <img
                    src={image.src}
                    key={image.title || idx}
                    className="
                        mb-4
                        w-full h-60 
                        object-cover
                        rounded-xl 
                        shadow-[0_10px_10px_rgb(0,0,0,0.2)]
                        hover:shadow-[0_20.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
                        hover:-translate-y-4
                        transition-all duration-100
                        cursor-pointer
                        active:scale-140
                        active:rotate-360
                        active:translate-x-10
                        active:translate-y-10

                    "
                />
            ))}
        </div>
    )   
}

export default ImageCard;