import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div>
      <div>
        <h3>Category list</h3>
      </div>
      <Link to={'/dashboard/add_category'}>Add Category</Link>
    </div>
  )
}

export default Category