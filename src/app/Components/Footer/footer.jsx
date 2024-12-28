"use client";

import React from 'react';
import Link from 'next/link';

const whatsappNumber = "+923000419226";
const Footer = () => {
    return (
        <footer>
            <div className='d-flex justify-content-around txt-white-75 lh-lg pt-5 px-1'>
                <div className='list-none'>
                    <h4 className='mb-2'>AT ONLINE</h4>
                    <div>
                        <p className='ftSize-16 fw-bold'>
                            Unleash your productivity and
                            <br />
                            creativity with Us!<br />
                            ⚡ Shop #79A, 3rd Floor <br /> Hafeez Center Mall, Lahore<br />
                            📞 +92300 0419226
                        </p>
                    </div>
                </div>
                <div className='list-none'>
                    <h4 className='mb-2'>Brands</h4>
                    <ul className='list-none' style={{ paddingLeft: "0" }}>
                        <li className='ftSize-16 fw-bold'><Link href="/collections/hp" className='txt-white-75 text-decoration-none'>HP</Link></li>
                        <li className='ftSize-16 fw-bold'><Link href="/collections/dell" className='txt-white-75 text-decoration-none'>DELL</Link></li>
                        <li className='ftSize-16 fw-bold'><Link href="/collections/lenovo" className='txt-white-75 text-decoration-none'>LENOVO</Link></li>
                        <li className='ftSize-16 fw-bold'><Link href="/collections/apple" className='txt-white-75 text-decoration-none'>APPLE</Link></li>
                    </ul>
                </div>
                <div className='list-none'>
                    <h4 className='mb-2'>Help</h4>
                    <ul className='list-none'></ul>
                    <li className='ftSize-16 fw-bold'><Link href="/pages/about-us" className='txt-white-75 text-decoration-none'>About Us</Link></li>
                    <li className='ftSize-16 fw-bold'><Link href="/pages/contact" className='txt-white-75 text-decoration-none'>Contact</Link></li>
                </div>
                <div>
                    <Link href="https://web.facebook.com/atonline.com.pk/" className="link list-social__link">
                        <svg
                            aria-hidden="true" focusable="false" className="icon-style" viewBox="0 0 20 20">
                            <path fill="currentColor"
                                d="M18 10.049C18 5.603 14.419 2 10 2c-4.419 0-8 3.603-8 8.049C2 14.067 4.925 17.396 8.75 18v-5.624H6.719v-2.328h2.03V8.275c0-2.017 1.195-3.132 3.023-3.132.874 0 1.79.158 1.79.158v1.98h-1.009c-.994 0-1.303.621-1.303 1.258v1.51h2.219l-.355 2.326H11.25V18c3.825-.604 6.75-3.933 6.75-7.951Z">
                            </path>
                        </svg>
                        <span className="visually-hidden">Facebook</span>
                    </Link>
                    <Link href="" className='px-2'>
                        <svg aria-hidden="true" focusable="false" className="icon-style"
                            viewBox="0 0 20 20">
                            <path fill="currentColor" fillRule="evenodd"
                                d="M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.43 2.43 0 0 0-.912.593 2.486 2.486 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23 0 2.134.01 2.39.046 3.229.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046 2.134 0 2.39-.01 3.23-.046.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23 0-2.134-.01-2.39-.055-3.229-.027-.784-.164-1.204-.274-1.495a2.43 2.43 0 0 0-.593-.913 2.604 2.604 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045 1.1-.014 2.202.001 3.302.045.664.014 1.321.14 1.943.374a3.968 3.968 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.896 3.896 0 0 1-1.415.922c-.51.191-1.095.337-1.943.374-.857.036-1.122.045-3.302.045-2.171 0-2.445-.009-3.302-.055-.849-.027-1.432-.164-1.943-.364a4.152 4.152 0 0 1-1.414-.922 4.128 4.128 0 0 1-.93-1.423c-.183-.51-.329-1.085-.365-1.943C2.009 12.45 2 12.167 2 10.004c0-2.161 0-2.435.055-3.302.027-.848.164-1.432.365-1.942a4.44 4.44 0 0 1 .92-1.414 4.18 4.18 0 0 1 1.415-.93c.51-.183 1.094-.33 1.943-.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805Zm1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93Zm5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355Z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span className="visually-hidden">Instagram</span>
                    </Link>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{ padding: "4% 8% 4% 8%" }}>
                <div>
                    <h4 className='mb-2 txt-white'>Contact via WhatsApp</h4>
                    <Link href={`https://wa.me/${whatsappNumber}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50"
                            style={{ fill: "#40C057" }}
                            className='icon-style'
                            >
                            <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                        </svg>
                    </Link>
                </div>
                <div>
                    <Link href="https://web.facebook.com/atonline.com.pk/" className="link list-social__link">
                        <svg
                            aria-hidden="true" focusable="false" className="icon-style" viewBox="0 0 20 20">
                            <path fill="currentColor"
                                d="M18 10.049C18 5.603 14.419 2 10 2c-4.419 0-8 3.603-8 8.049C2 14.067 4.925 17.396 8.75 18v-5.624H6.719v-2.328h2.03V8.275c0-2.017 1.195-3.132 3.023-3.132.874 0 1.79.158 1.79.158v1.98h-1.009c-.994 0-1.303.621-1.303 1.258v1.51h2.219l-.355 2.326H11.25V18c3.825-.604 6.75-3.933 6.75-7.951Z">
                            </path>
                        </svg>
                        <span className="visually-hidden">Facebook</span>
                    </Link>
                    <Link href="" className='px-2'>
                        <svg aria-hidden="true" focusable="false" className="icon-style"
                            viewBox="0 0 20 20">
                            <path fill="currentColor" fillRule="evenodd"
                                d="M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.43 2.43 0 0 0-.912.593 2.486 2.486 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23 0 2.134.01 2.39.046 3.229.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046 2.134 0 2.39-.01 3.23-.046.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23 0-2.134-.01-2.39-.055-3.229-.027-.784-.164-1.204-.274-1.495a2.43 2.43 0 0 0-.593-.913 2.604 2.604 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045 1.1-.014 2.202.001 3.302.045.664.014 1.321.14 1.943.374a3.968 3.968 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.896 3.896 0 0 1-1.415.922c-.51.191-1.095.337-1.943.374-.857.036-1.122.045-3.302.045-2.171 0-2.445-.009-3.302-.055-.849-.027-1.432-.164-1.943-.364a4.152 4.152 0 0 1-1.414-.922 4.128 4.128 0 0 1-.93-1.423c-.183-.51-.329-1.085-.365-1.943C2.009 12.45 2 12.167 2 10.004c0-2.161 0-2.435.055-3.302.027-.848.164-1.432.365-1.942a4.44 4.44 0 0 1 .92-1.414 4.18 4.18 0 0 1 1.415-.93c.51-.183 1.094-.33 1.943-.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805Zm1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93Zm5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355Z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span className="visually-hidden">Instagram</span>
                    </Link>
                </div>
            </div>
            <hr className='txt-white' />
            <div className='txt-white'>
                <p className='ft-bottom-spacing'>
                    ©Enclair Tech 2024. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer