import { useState } from "react"

export const SearchContext = createContext(null)

export const SearchContextProvider = (props) => {
    const [query, setQuery] = useState('')

    const searchHandler = (e) => {
        e.preventDefault()

        setQuery(e.target.value)
    }
}