"use client";

import React, { useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from '@/app/Components/Reuseable/Loader';

const SingleProduct = ({ productData }) => {
    const [selectedVariants, setSelectedVariants] = useState([]);
    const [updatedPrice, setUpdatedPrice] = useState(productData.price);
    const [isLoading, setIsLoading] = useState(false);

    const handleVariantClick = (variant) => {
        const isSelected = selectedVariants.includes(variant.name);
        let newSelectedVariants;
        let newPrice = updatedPrice;

        if (isSelected) {
            newSelectedVariants = selectedVariants.filter(v => v !== variant.name);
            newPrice -= variant.additionalPrice;
        } else {
            newSelectedVariants = [...selectedVariants, variant.name];
            newPrice += variant.additionalPrice;
        }

        setSelectedVariants(newSelectedVariants);
        setUpdatedPrice(newPrice);
    };

    if (isLoading) {
        return <Loader />;
    }

    if (!productData) {
        return <div>Product not found.</div>;
    }

    const {
        name,
        processor,
        ram,
        hardisk,
        ssd,
        graphics,
        year,
        imageUrls,
        backlitKeyboard,
        screenSize,
        displayResolution,
        camera,
        gps,
        batteryCapacity,
        variants
    } = productData;

    const whatsappNumber = "+923000419226";
    const whatsappMessage = `I'm interested in the product: ${productData.name}`;

    return (
        <Container>
            <Row className="my-4">
                <Col xs={12} md={8} className="text-center">
                    <img
                        src={imageUrls[0] || "/images/card3.jpg"}
                        alt={productData.name}
                        className="img-fluid"
                    />
                </Col>

                <Col xs={12} md={4}>
                    <p className='p-my-store'><sub>MY STORE</sub></p>
                    <h1 className='h1-product-style gradient-text'>{name}</h1>
                    <h4>Rs. {updatedPrice}</h4>
                    <div className="my-3">
                        <b>Add Ons:</b>
                        {variants?.map((variant, index) => (
                            <Badge
                                key={index}
                                className="m-1"
                                bg={selectedVariants.includes(variant.name) ? 'primary' : 'secondary'}
                                onClick={() => handleVariantClick(variant)}
                                style={{ cursor: 'pointer' }}
                            >
                                {variant.name} +Rs. {variant.additionalPrice}
                            </Badge>
                        ))}
                    </div>
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-decoration-none'
                    >
                        <div className="mb-5 d-flex flex-column">
                            <button className='add-to-cart justify-content-center bg-color txt-white'>Buy it now</button>
                        </div>
                    </a>

                    <div className="my-3">
                        <ul className='list-none lh-lg'>
                            <li>Processor: {processor}</li>
                            <li>RAM: {ram}</li>
                            <li>Hardisk: {hardisk} GB</li>
                            <li>SSD: {ssd}</li>
                            <li>Graphics: {graphics}</li>
                            <li>Year: {year}</li>
                            <li>Screen Size: {screenSize}</li>
                            <li>Resolution: {displayResolution}</li>
                            <li>Backlit Keyboard: {backlitKeyboard}</li>
                            <li>Battery Capacity: {batteryCapacity}</li>
                            <li>Camera: {camera}</li>
                            <li>GPS: {gps}</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SingleProduct;
