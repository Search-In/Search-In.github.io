import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";

// import logo from "../../images/Search-In_Logo_Clear_White.png";
import logo from "../../images/Search-In_Logo_Black.png";
// import logo from "../../images/Search-In_logo_white.png";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY > lastScrollY) {
                // if scroll down hide the navbar
                setShow(false);
            } else {
                // if scroll up show the navbar
                setShow(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }
    }, [lastScrollY]);

    // return <nav className={`active ${show && "hidden"}`}>....</nav>;

    return (
        <div className="__navbar">
            <div className="__navbar-links">
                <div className="__navbar-links_logo">
                    <img src={logo} className="logo" />
                </div>
                <div className="__navbar-links_container">
                    <p>
                        <a href="#Home" style={{ color: "#fff", textDecoration: "underline" }}>
                            Home
                        </a>
                    </p>
                    <p>
                        <a href="#About">About</a>
                    </p>
                    <p>
                        <a href="#Internship">Internships</a>
                    </p>
                    <p>
                        <a href="#Contact">Contact</a>
                    </p>
                </div>
            </div>
            <div className="__navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                ) : (
                    <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                )}
                {toggleMenu && (
                    <div className="__navbar-menu_container scale-up-center">
                        <div className="__navbar-menu_container-links">
                            <p>
                                <a href="#Home">Home</a>
                            </p>
                            <p>
                                <a href="#About">About</a>
                            </p>
                            <p>
                                <a href="#Internship">Internships</a>
                            </p>
                            <p>
                                <a href="#Contact">Contact</a>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
