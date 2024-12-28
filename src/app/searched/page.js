"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
import fetchAllLaptops from "@/app/services/getAllLaptops";
import ErrorPage from './../Components/Reuseable/ErrorPage';

export default function SearchedResultsPage() {
    const searchParams = useSearchParams();

    // Extracting all filter query parameters
    const brandQuery = searchParams.get("brand") || "";
    const ramQuery = searchParams.get("ram") || "";
    const ssdQuery = searchParams.get("ssd") || "";
    const screenSizeQuery = searchParams.get("screenSize") || "";

    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const laptops = await fetchAllLaptops();

                // Filter laptops based on the available query parameters
                const filteredLaptops = laptops.filter((laptop) => {
                    const matchesBrand = brandQuery
                        ? laptop?.brand?.toLowerCase().includes(brandQuery.toLowerCase())
                        : true;
                    const matchesRam = ramQuery
                        ? laptop?.ram?.toLowerCase().includes(ramQuery.toLowerCase())
                        : true;
                    const matchesSsd = ssdQuery
                        ? laptop?.ssd?.toLowerCase().includes(ssdQuery.toLowerCase())
                        : true;
                    const matchesScreenSize = screenSizeQuery
                        ? laptop?.screenSize?.toLowerCase().includes(screenSizeQuery.toLowerCase())
                        : true;

                    // Combine all conditions
                    return matchesBrand && matchesRam && matchesSsd && matchesScreenSize;
                });

                setResults(filteredLaptops);
            } catch (error) {
                console.error("Error fetching laptops:", error);
            } finally {
                setIsLoading(false);
            }
        };

        // Fetch data if any query parameter is present
        if (brandQuery || ramQuery || ssdQuery || screenSizeQuery) {
            fetchData();
        } else {
            setIsLoading(false);
        }
    }, [brandQuery, ramQuery, ssdQuery, screenSizeQuery]);

    if (isLoading) {
        return <div>Loading results...</div>;
    }

    if (results.length === 0) {
        return <ErrorPage message="No results found for the selected filters." />;
    }

    return (
        <div>
            <h2 className="px-4 py-2">Search Results</h2>
            {brandQuery && <h4>Brand: {brandQuery.toUpperCase()}</h4>}
            {ramQuery && <h4>RAM: {ramQuery}</h4>}
            {ssdQuery && <h4>SSD: {ssdQuery}</h4>}
            {screenSizeQuery && <h4>Screen Size: {screenSizeQuery}</h4>}
            {results.map((productData) => (
                <Container key={productData.id}>
                    <Row className="my-4">
                        <Col xs={12} md={8} className="text-center">
                            <img
                                src={productData.imageUrls[0] || "/images/card3.jpg"}
                                alt={productData.name}
                                className="img-fluid"
                            />
                        </Col>

                        {/* Right section with product details */}
                        <Col xs={12} md={4}>
                            <p className="p-my-store">
                                <sub>MY STORE</sub>
                            </p>
                            <h1 className="h1-product-style">{productData.name}</h1>
                            <h4>{productData.price}</h4>

                            <a
                                href={`https://wa.me/+923000419226?text=${encodeURIComponent(
                                    `I'm interested in the product: ${productData.name}`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                            >
                                <div className="mb-5 d-flex flex-column">
                                    <button className="add-to-cart justify-content-center bg-color txt-white">
                                        Buy it now
                                    </button>
                                </div>
                            </a>

                            <div className="my-3">
                                <ul className="list-none lh-lg">
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
                                    <li>Products Available: {productData?.noOfPieces}</li>
                                    <li>Sold Products: {productData?.sold}</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            ))}
        </div>
    );
}
