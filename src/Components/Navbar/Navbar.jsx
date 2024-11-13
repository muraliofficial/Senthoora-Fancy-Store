import React, { useEffect, useState } from 'react';
import './Navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    CNavbar,
    CNavbarBrand,
    CContainer,
    CNavbarToggler,
    COffcanvas,
    COffcanvasHeader,
    COffcanvasTitle,
    CCloseButton,
    COffcanvasBody,
    CNavbarNav,
    CNavItem,
    CNavLink
} from '@coreui/react';

export default function Navbar() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const [visible, setVisible] = useState(false);

    return (
        <>
            <CNavbar className="bg-body">
                <div className="container-fluid" id='Navbar-max'>
                    <ul>
                        <li className="navlist">Home</li>
                        <li className="navlist">Our Products</li>
                        <li className="navlist">About</li>
                        <li className="navlist">Contact us</li>
                    </ul>
                </div>
                <CContainer fluid id='Navbar-min'>
                    <CNavbarBrand id='NName'>Sri Senthoora Fancy Store</CNavbarBrand>
                    <CNavbarToggler
                        aria-controls="offcanvasNavbar2"
                        aria-label="Toggle navigation"
                        onClick={() => setVisible(!visible)}
                    />
                    <COffcanvas
                        id="offcanvasNavbar2"
                        placement="end"
                        portal={false}
                        visible={visible}
                        onHide={() => setVisible(false)}
                    >
                        <COffcanvasHeader>
                            <COffcanvasTitle>Offcanvas</COffcanvasTitle>
                            <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
                        </COffcanvasHeader>
                        <COffcanvasBody>
                            <CNavbarNav>
                                <CNavItem>
                                    <CNavLink href="#" active>
                                        Home
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">Our Products</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">About</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">Contact us</CNavLink>
                                </CNavItem>
                            </CNavbarNav>
                        </COffcanvasBody>
                    </COffcanvas>
                </CContainer>
            </CNavbar>
        </>
    );
}
