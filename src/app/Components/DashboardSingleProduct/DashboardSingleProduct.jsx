"use client";

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fetchAllLaptops from '@/app/services/getAllLaptops';
import Image from 'next/image';
import LinesSkeleton from './../Reuseable/LinesSkeleton';

const DashboardSingleProduct = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAllLaptops();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>
            <LinesSkeleton />
        </div>;
    }

    if (products?.length === 0) {
        return <div>No products found</div>;
    }

    const product = products[0];

    const whatsappNumber = "+923000419226";
    const whatsappMessage = `I'm interested in the product: ${product?.name}`;

    return (
        <Container>
            <Row className="my-4">
                <main className="container_text">
                    <section className="animation">
                        <div className="first"><div>Trending Product 🔥</div></div>
                        <div className="second"><div>Latest Laptop 🔥</div></div>
                        <div className="third"><div>Best Deals 🔥</div></div>
                    </section>
                </main>
                <Col xs={12} md={8} className="text-center">
                    <img
                        src={product.imageUrls[0] || "/images/card3.jpg"}
                        alt={product.name}
                        className="img-fluid h-500 mob-h-100"
                    />
                </Col>

                {/* Right section with product details */}
                <Col xs={12} md={4}>
                    <p className='p-my-store'><sub>MY STORE</sub></p>
                    <h1 className='h1-product-style gradient-text'>{product.name}</h1>
                    <h4>{product.price}</h4>

                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-decoration-none'
                    >
                        <div className="mb-5 d-flex flex-column">
                            <button className='add-to-cart justify-content-center bg-color txt-white' >Buy it now</button>
                        </div>
                    </a>

                    <div className="my-3">
                        <ul className='list-none lh-lg'>
                            <li>Processor: {product.processor}</li>
                            <li>RAM: {product.ram}</li>
                            <li>Hardisk: {product.hardisk} GB</li>
                            <li>SSD: {product.ssd}</li>
                            <li>Graphics: {product.graphics}</li>
                            <li>Year: {product.year}</li>
                            <li>Screen Size: {product.screenSize}</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DashboardSingleProduct;
