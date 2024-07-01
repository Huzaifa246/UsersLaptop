"use client"; 
import React from 'react';
import Link from 'next/link';
import Banner from '../Reuseable/Banner';
import DashboardSingleProduct from '../DashboardSingleProduct/DashboardSingleProduct';
import FaqsPage from '../Faqs/FaqsPage';
import Footer from '../Footer/footer';
import FeaturedProducts from '../FeaturedProduct/FeaturedProducts';

const Dashboard = () => {
  return (
    <>
      <Banner imageUrl="/images/Banner6.jpg" buttonText="Shop All" link="/filtered-products" />
      <DashboardSingleProduct />
      <FeaturedProducts />
      <div className='d-flex justify-content-center my-4'>
        <Link href="/filtered-products">
          <button className='view-all-btn'>
            View All
          </button>
        </Link>
      </div>
      <Banner imageUrl="/images/Banner7.jpg" buttonText={false} />
      <FaqsPage />

      <Footer />
    </>
  );
};

export default Dashboard;
