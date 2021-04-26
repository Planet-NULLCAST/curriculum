import { BeakerIcon, MenuIcon } from '@heroicons/react/solid';
import { useEffect, useState } from "react";
import Profile from '../../Profile';

export default function NavBar(){
    const [cookies, setCookies] = useState("");
    useEffect(() => {
        let cook = document.cookie;
        cook = cook.split("=");
        cook[0] !== ''  && setCookies(JSON.parse(cook[1]));
    }, []);
    return(
        <nav className="sticky top-0 bg-white z-50 shadow-lg">
            <div className="flex p-2 items-center">
                <div className="flex-1">
                    <MenuIcon className="h-6 w-6 text-gray-900 inline-block"/>
                    <span className="pl-3 uppercase">js title</span>
                </div>
                <div className="flex-1 ml-36">
                    <img src="/images/logo.png" alt="Logo"/>
                </div>
                <div className="flex-none">
                    {cookies ? <Profile fName={cookies.fName} lName={cookies.lName} userName={cookies.username}/>: <a className="py-3 px-6 bg-gray-700 text-white rounded-full" href="/login">Login</a>}
                </div>
            </div>
        </nav>
    );
}