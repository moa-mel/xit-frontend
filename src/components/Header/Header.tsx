"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/Icon.png"
import "./Header.css"
import avatar from "@/assets/images/avatar1.webp"
import { useState } from "react";
import { Dropdown } from "react-bootstrap";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header>
            <div className="header">
                <div className="headerContainer">
                    <div className="headerLeftSection">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={15}
                            height={15}
                        />
                        <span className="logoText">Xit</span>
                    </div>
                    <div className="headerRightSection">
                        <Link href="/services" className="navLink">Services</Link>
                        {/* Avatar Dropdown */}
                        <Dropdown align="end">
                            <Dropdown.Toggle
                                id="dropdown-basic"
                                className="avatarDropdown"
                                as="div"  // So it uses the avatar as the toggle
                            >
                                <Image
                                    src={avatar}
                                    alt="Avatar"
                                    width={40}
                                    height={40}
                                    className="avatar"
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdownMenu">
                                <Dropdown.Item className="dropdownItem" as={Link} href="/logout">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <button
                            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="mobileMenu">
                        <Link href="/services" className="mobileNavLink" onClick={toggleMenu}>
                            Services
                        </Link>
                        <Image
                            src={avatar}
                            alt="Avatar"
                            width={40}
                            height={40}
                        />
                        <Link href="/logout" className="mobileNavLink" onClick={toggleMenu}>
                            Log Out
                        </Link>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header;