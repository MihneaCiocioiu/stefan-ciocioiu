// import ReactDOM from 'react-dom';
import React from "react";
import { SocialIcon } from 'react-social-icons';

export function Header() {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto
        z-20 xl:items-center">
            {/* ReactDom.render(<SocialIcon url="https://www.facebook.com/profile.php?id=100016601654879" />, document.getElementById('root')); */}
            <SocialIcon url="https://www.facebook.com/profile.php?id=100016601654879" />
            {/* <a href = "https://www.facebook.com/profile.php?id=100016601654879" target="_blank">Facebook</a> */}
            <div>Mail</div>
            <div className="absolute top-0 right-0 text-left"><a href = "#contact">Contact</a></div>
        </header>
    );
}