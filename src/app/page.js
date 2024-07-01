"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard/Dashboard';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <Dashboard />
    </>
  );
}
