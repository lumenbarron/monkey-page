import React from 'react';
import MainNavbar from '../NavBar/Navbar';
import MainBanner from './MainBanner/MainBanner';
import Supplier from './Supplier/Supplier';
import Branding from './BlockBranding/Branding';
import '../../style-globals.scss';

export default function Home() {
    return (
        <div>
            <div className="first-block px-5" >
                <MainNavbar />
                <MainBanner />
            </div>
            <div className="px-5" >
                <Supplier />
                <Branding />
            </div>
        </div>
    )
}
