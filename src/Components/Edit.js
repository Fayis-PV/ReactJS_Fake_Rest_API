import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Create from './Create'

const Edit = () => {
    const {id} = useParams()
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(json => setData(json))
    },[id])
  return (
    <>
      <Create data={data} />
    </>
  )
}

export default Edit
