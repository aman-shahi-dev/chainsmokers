import { Link } from 'react-router-dom'

function Footer(){

    const links = [
        {name: 'MUSIC', to: '/music'},
        {name: 'VIDEOS', to: '/videos'},
        {name: 'SHOWS', to: '/shows'},
        {name: 'GALLERY', to: '/gallery'},
        {name: 'VLOGS', to: '/vlogs'},
        {name: 'INTERESTING FACTS', to: '/facts'}
    ]
    return (
        <div className="flex h-12 mb-4 font-anton mt-2">
            <div className="text-white text-shadow-lg w-150 flex items-center justify-evenly md:text-xl text-xs tracking-wider">
                {links.map((link) => (
                    <Link 
                        key={link.name} 
                        to={link.to} 
                        className="[text-shadow:_2px_2px_5px_#000000] hover:scale-110 transition-transform duration-100 active:scale-95"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Footer;