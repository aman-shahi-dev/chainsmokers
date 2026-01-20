import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div className="flex min-h-16 px-4 py-2 text-white text-shadow-lg">
            <Link
                to='/' 
                className="font-bold font-anton flex flex-col relative text-3xl [text-shadow:_5px_-1px_4px_#000000]">
                <span className="">THE CHAIN</span>
                <span className="absolute top-7.5 ">SMOKERS</span>
            </Link>
        </div>
    )
}

export default Navbar;