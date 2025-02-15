import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h1>Create Page</h1>
      <Link to={'/'} className='my-5 btn btn-primary float-right'>Home</Link>
    </div>
    
  )
}

export default Create
