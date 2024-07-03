"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Banner = ({ imageUrl, buttonText, link }) => {
    return (
        <div className='position-relative'>
            <Image src={imageUrl} alt="banner" className='w-100' />
            {buttonText && link &&
                <Link href={link}>
                    <button className='shop-all-btn'>
                        {buttonText}
                    </button>
                </Link>
            }
        </div>
    );
};

export default Banner;
