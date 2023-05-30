import React, { useEffect, useState, useContext } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useParams, useNavigate } from 'react-router-dom'
import axiosClient from '../api/axios-client'
import { SearchContext } from '../contexts/SearchContext'

const SearchBar = () => {
    const { query: q } = useParams()
    const [query, setQuery] = useState(q || '')
    const { setSearchQuery, setSearchResults } = useContext(SearchContext)

    const navigate = useNavigate()

    const onSearchClick = async () => {
        if (query.trim() === '') {
            return
        }
        
        try {
            const response = await axiosClient.get(`/products/search/${query}`)
            
            setSearchResults(response.data)

            navigate(`/products/search/${query}`)
        } catch (error) {
            console.error(error)
        } 
    }

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
        setQuery(e.target.value)
    }

    const formSubmit = (e) => {
        e.preventDefault()
        onSearchClick(e)
    }

    useEffect(() => {
        if (q !== undefined && q !== null) {
            setQuery(q)
            setSearchQuery(q)
        }
    }, [q])

    return (
        <>
        <form onSubmit={formSubmit}>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for products" value={query} onChange={handleChange} />
                <div className="input-group-append">
                    <button type='submit' className="input-group-text bg-transparent text-primary">
                        <BsSearch />
                    </button>
                </div>
            </div>
        </form>
        </>
    )
}

export default SearchBar
