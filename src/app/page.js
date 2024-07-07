"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Enclair Technologies - Home</title>
        <meta name="description" content="Welcome to Enclair Technologies. We offer a wide range of laptops from top brands. Find the perfect laptop for you, whether you're a student, professional, or gamer." />
        <meta name="keywords" content="laptops, Enclair Technologies, student laptops, professional laptops, gaming laptops" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Dashboard />
    </>
  );
}
