import React, { useContext } from 'react'
import { SearchContext } from '../../../contexts/SearchContext'
import Product from './Product'

const SearchResult = () => {
    const { searchQuery, searchResults } = useContext(SearchContext)

    const DisplayProduct = () => {
        if (searchQuery !== '') {
            return <Product data={searchResults}  />
        } else {
            return null
        }
    }

    return (
        <>
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="bg-secondary pr-3">Best Results</span>
                </h2>
                <div className="row px-xl-5">
                    <DisplayProduct />
                </div>
            </div>
        </>
    )
}

export default SearchResult
