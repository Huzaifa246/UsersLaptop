import React, { Suspense } from 'react';
import SearchResultsComponent from "../Components/Reuseable/SearchResultComponent";

export default function SearchResultsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchResultsComponent />
        </Suspense>
    );
}
