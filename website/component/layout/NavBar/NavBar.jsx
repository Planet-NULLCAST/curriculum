import { BeakerIcon, MenuIcon } from '@heroicons/react/solid';
export default function NavBar(){
    return(
        <nav className="sticky top-0 bg-white">
            <div className="flex justify-between p-4">
                <div>
                    <MenuIcon className="h-6 w-6 text-gray-900 inline-block"/>
                    <span className="pl-3 uppercase">js title</span>
                </div>
                <div>
                    <img src="/images/logo.png" alt="Logo"/>
                </div>
                <div className="mt-1">
                    <a className="py-3 px-6 bg-gray-700 text-white rounded-full" href="#">Explore</a>
                </div>
            </div>
        </nav>
    );
}