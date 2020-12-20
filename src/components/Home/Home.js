import React from 'react';
import MainNavbar from '../NavBar/Navbar';
import MainBanner from './MainBanner/MainBanner';
import Supplier from './Supplier/Supplier';
import BrandingCustomers from './BlockBranding/BrandingCost';
import BrandingInvestors from './BlockBranding/BrandingInv';
import MainCompany from './Company/MainCompany';
import Investors from './Investors/Investors';
import '../../style-globals.scss';

export default function Home() {
    return (
        <section>
        <div className="canva-geral">
            <div className="first-block px-5" >
                <MainNavbar />
                <MainBanner />
            </div>
            <div className="px-5" >
                <Supplier />
                <BrandingCustomers />
            </div>
        </div>
        <div>
        <MainCompany />
        <BrandingInvestors />
        <Investors />
        </div>
        </section>
    )
}
