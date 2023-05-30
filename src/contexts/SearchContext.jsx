import React, { createContext, useState } from 'react'

export const SearchContext = createContext(null)

export const SearchContextProvider = (props) => {
    const [searchResults, setSearchResults] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')


  const contextValue =  { 
      searchQuery,
      searchResults,
      setSearchQuery,
      setSearchResults,
    }

  return (
    <SearchContext.Provider value={contextValue}>
        {props.children}
    </SearchContext.Provider>
  )
}