import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosClient from '../../../api/axios-client'
import Product from './Product'

const CategoryResult = () => {
  const { category: cat } = useParams()
  const [catData, setCatData] = useState([])

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const response = await axiosClient(`/products/category/${cat}`)
        setCatData(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchCatData()
  }, [cat])

  const DisplayCat = () => {
    if (cat !== 'all') {
        return <Product data={catData}  />
    } else {
        return null
    }
  }

  return (
    <div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">{cat !== 'all' ? cat.toUpperCase() : ''}</span>
    </h2>
    <div className="row px-xl-5">
        <DisplayCat />
    </div>
</div>
  )
}

export default CategoryResult
