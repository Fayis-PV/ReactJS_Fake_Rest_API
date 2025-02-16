import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams()
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(json => setData(json))
    },[id])
    
  return (
    <>
      <h1 className='p-4 text-center'>User Profile</h1>
      <h3>Name: {data?.name}</h3>
      <p>Email: {data?.email}</p>
      <p>Phone: {data?.phone}</p>
      <p>Address:</p>
      <div className='px-4'>
        <i>{data?.address?.street}</i><br /><i> {data?.address?.suite}</i><br/><i> {data?.address?.city} </i><br /><i> {data?.address?.zipcode}</i>
        </div>
        <Link to={'/'} className='my-2 btn btn-primary float-right'>Home</Link>
    
    </>
  )
}

export default Detail
