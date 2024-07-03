"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Row, Col } from 'react-bootstrap';
import ErrorPage from './ErrorPage';
import fetchAllLaptops from '@/app/services/getAllLaptops';
import Image from 'next/image';

function SearchResultsComponent() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query') || '';
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const laptops = await fetchAllLaptops();
                const filteredLaptops = laptops.filter(laptop =>
                    laptop?.name?.toLowerCase().includes(query.toLowerCase()) ||
                    laptop?.brand?.toLowerCase().includes(query.toLowerCase())
                );
                setResults(filteredLaptops);
            } catch (error) {
                console.error('Error fetching search results:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (query) {
            fetchData();
        }
    }, [query]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (results.length === 0) {
        return <ErrorPage />;
    }

    return (
        <div>
            <h2 className='px-4 py-2'>Searched Results</h2>
            {results.map((productData) => (
                <Container key={productData.id}>
                    <Row className="my-4">
                        <Col xs={12} md={8} className="text-center">
                            <Image
                                src={productData.imageUrls[0] || "/images/card3.jpg"}
                                alt={productData.name}
                                className="img-fluid"
                            />
                        </Col>

                        {/* Right section with product details */}
                        <Col xs={12} md={4}>
                            <p className='p-my-store'><sub>MY STORE</sub></p>
                            <h1 className='h1-product-style'>{productData.name}</h1>
                            <h4>{productData.price}</h4>

                            <a
                                href={`https://wa.me/+923000419226?text=${encodeURIComponent(`I'm interested in the product: ${productData.name}`)}`}
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
                                    <li>Processor: {productData.processor}</li>
                                    <li>RAM: {productData.ram}</li>
                                    <li>Hardisk: {productData.hardisk} GB</li>
                                    <li>SSD: {productData.ssd}</li>
                                    <li>Graphics: {productData.graphics}</li>
                                    <li>Year: {productData.year}</li>
                                    <li>Screen Size: {productData.screenSize}</li>
                                    <li>Resolution: {productData.displayResolution}</li>
                                    <li>Backlit Keyboard: {productData.backlitKeyboard}</li>
                                    <li>Battery Capacity: {productData.batteryCapacity}</li>
                                    <li>Camera: {productData.camera}</li>
                                    <li>GPS: {productData.gps}</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            ))}
        </div>
    );
}

export default SearchResultsComponent;
