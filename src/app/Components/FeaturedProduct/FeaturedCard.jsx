"use client";

import React, { useState } from 'react';
import { Card, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Image from 'next/image';

const FeaturedCards = ({ imageUrl1, imageUrl2, productName, productLink, price, ram, processor, year, brand }) => {
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 px-2 cursor-pointer">
            <Link href={productLink} className="text-decoration-none text-dark">
                <Card className="h-100 shadow-sm border-0">
                    <div className="position-relative">
                        <Image
                            src={hovered ? imageUrl2 : imageUrl1}
                            alt={productName}
                            className="card-img-top"
                            onMouseEnter={handleHover}
                            onMouseLeave={handleMouseLeave}
                            width={100} height={100}
                        />
                        <Badge
                            bg="danger"
                            className="position-absolute top-0 start-0 m-2"
                            style={{ zIndex: 1 }}
                        >
                            10% OFF
                        </Badge>
                    </div>
                    <Card.Body>
                        <Card.Title>
                            {productName}
                        </Card.Title>
                        <Card.Text className="text-muted">{price}</Card.Text>
                        <Card.Text className="small">
                            <strong>RAM:</strong> {ram}<br />
                            <strong>Processor:</strong> {processor}<br />
                            <strong>Year:</strong> {year}<br />
                            <strong>Brand:</strong> {brand}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default FeaturedCards;
