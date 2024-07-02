"use client";

import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import fetchAllLaptops from '@/app/services/getAllLaptops';
import Link from 'next/link';
import './header.css';
import { useRouter } from 'next/navigation';

function HeaderComponent() {
    const router = useRouter();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const data = await fetchAllLaptops();
                setLaptops(data);
            } catch (error) {
                console.error('Error fetching laptops:', error);
            }
        };

        fetchLaptops();
    }, []);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const toggleSearchVisibility = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        if (searchQuery.trim()) {
            router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark web-header">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand txt-white">
                    <img src="/logo.jpg" alt="Logo" style={{ height: "50px" }} />
                </Link>
                <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-between ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav d-flex align-items-center">
                        <li className="nav-item">
                            <Link href="/" className={`nav-link txt-white pd-5 ${router.pathname === '/' ? 'active' : ''}`} aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Dropdown>
                                <Dropdown.Toggle className='dd-style ps-1'>
                                    Laptops
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/">HP</Dropdown.Item>
                                    <Dropdown.Item href="/">DELL</Dropdown.Item>
                                    <Dropdown.Item href="/">LENOVO</Dropdown.Item>
                                    <Dropdown.Item href="/">APPLE</Dropdown.Item>
                                    <Dropdown.Item href="/">ASUS</Dropdown.Item>
                                    <Dropdown.Item href="/">ACER</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className="nav-item">
                            <Link href="/gaming-laptops" className={`nav-link txt-white pd-5 ${router.pathname === '/gaming-laptops' ? 'active' : ''}`} aria-current="page">Gaming Laptops</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about-us" className={`nav-link txt-white pd-5 ${router.pathname === '/about-us' ? 'active' : ''}`} aria-current="page">About Us</Link>
                        </li>
                    </ul>
                    <div className="ml-auto d-flex align-items-center justify-content-center">
                        {isSearchVisible && (
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                placeholder="Search Name Or Brand..."
                                className="field__input smooth-transition"
                            />
                        )}
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="cart-icon text-white pd-10"
                            onClick={toggleSearchVisibility}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;
