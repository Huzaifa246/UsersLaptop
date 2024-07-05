"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Row, Col, Dropdown, Form, Button, Badge, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchAllLaptops from '@/app/services/getAllLaptops';
import Loader from '@/app/Components/Reuseable/Loader';
import Image from 'next/image';

const FilterProducts = () => {
    const router = useRouter();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortOption, setSortOption] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const[currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAllLaptops();
                const formattedData = data.map(product => ({
                    ...product,
                }));
                setProducts(formattedData);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        setCurrentPage(1); // Reset to first page when filters change
    }, [sortOption, minPrice, maxPrice, selectedBrands]);

    const handleProductClick = (product) => {
        const productDetailsLink = `/filtered-products/${product._id}`;
        router.push(productDetailsLink);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
    };

    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
    };

    const handlePriceRangeSubmit = (e) => {
        e.preventDefault();
        setShowDropdown(false);
    };

    const handleResetClick = () => {
        setMinPrice('');
        setMaxPrice('');
    };
    const handleResetBrandClick = () => {
        setSelectedBrands([]);
    };

    const handleBrandChange = (e) => {
        const brand = e.target.value;
        setSelectedBrands(
            selectedBrands.includes(brand)
                ? selectedBrands.filter(b => b !== brand)
                : [...selectedBrands, brand]
        );
    };

    const sortProducts = (products, option) => {
        switch (option) {
            case 'priceHighToLow':
                return [...products].sort((a, b) => b.price - a.price);
            case 'priceLowToHigh':
                return [...products].sort((a, b) => a.price - b.price);
            case 'alphabetical':
                return [...products].sort((a, b) => a.name.localeCompare(b.name));
            default:
                return products;
        }
    };

    const filterProductsByPriceRange = (products, minPrice, maxPrice) => {
        return products.filter(product => {
            const price = product.price;
            const isAboveMinPrice = minPrice === '' || price >= parseFloat(minPrice);
            const isBelowMaxPrice = maxPrice === '' || price <= parseFloat(maxPrice);
            return isAboveMinPrice && isBelowMaxPrice;
        });
    };

    const filterProductsByBrand = (products, selectedBrands) => {
        if (selectedBrands.length === 0) return products;
        return products.filter(product => selectedBrands.includes(product.brand));
    };

    const sortedProducts = sortProducts(products, sortOption);
    const filteredProductsByPrice = filterProductsByPriceRange(sortedProducts, minPrice, maxPrice);
    const filteredAndSortedProducts = filterProductsByBrand(filteredProductsByPrice, selectedBrands);

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredAndSortedProducts.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const uniqueBrands = [...new Set(products.map(product => product.brand))];
    return (
        <>
            <Container className='mt-4'>
                <h2>Filtered products</h2>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <div className='d-flex flex-column'>
                        <span className='py-1'>Filter by:</span>
                        <Dropdown className="ml-3 select-dd">
                            <Dropdown.Toggle variant="light" id="priceRangeDropdown">
                                Price Range
                            </Dropdown.Toggle>
                            <Dropdown.Menu show={showDropdown} onMouseLeave={() => setShowDropdown(false)}>
                                <Form onSubmit={handlePriceRangeSubmit} className="px-3 py-3">
                                    <Form.Group controlId="minPrice">
                                        <Form.Label>Min Price:</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={minPrice}
                                            onChange={handleMinPriceChange}
                                            placeholder="Min price"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="maxPrice" className="mt-2">
                                        <Form.Label>Max Price:</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={maxPrice}
                                            onChange={handleMaxPriceChange}
                                            placeholder="Max price"
                                        />
                                    </Form.Group>
                                    <Button variant="danger" className="mt-3" onClick={handleResetClick}>Reset</Button>
                                </Form>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="brandFilter" className="py-1">Filter by Brand:</label>
                        <Dropdown className="ml-3 select-dd">
                            <Dropdown.Toggle variant="light" id="brandDropdown">
                                Select Brands
                            </Dropdown.Toggle>
                            <Dropdown.Menu show={showDropdown} onMouseLeave={() => setShowDropdown(false)}>
                                <Form.Group controlId="brandFilter" className="px-3 py-3">
                                    {uniqueBrands.map(brand => (
                                        <Form.Check
                                            type="checkbox"
                                            label={brand}
                                            value={brand}
                                            key={brand}
                                            checked={selectedBrands.includes(brand)}
                                            onChange={handleBrandChange}
                                            className="m-2"
                                        />
                                    ))}
                                    <Button variant="danger" className="mt-3" onClick={handleResetBrandClick}>Reset</Button>
                                </Form.Group>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="sortOptions" className="py-1">Sort by:</label>
                        <Form.Select id="sortOptions" value={sortOption} onChange={handleSortChange} className='p-2 select-dd'>
                            <option value="">Select</option>
                            <option value="priceHighToLow">Price: High to Low</option>
                            <option value="priceLowToHigh">Price: Low to High</option>
                            <option value="alphabetical">Alphabetical</option>
                        </Form.Select>
                    </div>
                </div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <Row className='d-flex flex-wrap mob-wrap mt-5'>
                        {/* {filteredAndSortedProducts.map((product) => ( */}
                        {currentItems.map((product) => (
                            <Col key={product._id} xs={12} sm={6} md={4} lg={4} className="mb-4 cursor-pointer">
                                <div className="card h-100 shadow-sm" onClick={() => handleProductClick(product)}>
                                    <Badge
                                        bg="danger"
                                        className="position-absolute top-0 start-0 m-2"
                                        style={{ zIndex: 1 }}
                                    >
                                        10% OFF
                                    </Badge>
                                    <Image src={product.imageUrls[0] || "/images/card3.jpg"} alt={product.name} className="card-img-top img-fluid" width={100} height={500}/>
                                    <div className="card-body">
                                        <h5 className="card-title gradient-text">{product.name}</h5>
                                        <p className="card-text">{product.ram} RAM</p>
                                        <p className="card-text">{product.processor}</p>
                                        <p className="card-text">{product.year}</p>
                                        <p className="card-text">Brand: {product.brand}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="text-primary fw-bold">Rs:{product.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                        <Pagination className='mt-4 justify-content-center'>
                            {Array(Math.ceil(filteredAndSortedProducts.length / itemsPerPage))
                                .fill()
                                .map((_, index) => (
                                    <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                                        {index + 1}
                                    </Pagination.Item>
                                ))}
                        </Pagination>
                    </Row>
                )}
            </Container>
        </>
    );
};

export default FilterProducts;
