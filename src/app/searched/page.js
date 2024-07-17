import React, { Suspense } from 'react';
import RamFilterComponent from '../Components/Reuseable/RamFilterComponent';
import BrandFilterComponent from '../Components/Reuseable/BrandFilterComponent';
import SsdFilterComponent from '../Components/Reuseable/SsdFilterComponent';
import ScreenFilterComponent from '../Components/Reuseable/ScreenFilterComponent';

export default function SearchedResultsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrandFilterComponent />
            <RamFilterComponent />
            <SsdFilterComponent />
            <ScreenFilterComponent />
        </Suspense>
    );
}
