import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const List = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(response => setData(response.data))
        .then(res => console.log(res)) 
    },[]);
    console.log(data);
    
  return (
    <>
      <h1 className='text-center p-5'>CRUD Table View</h1>
      <div><button className='mb-5 btn btn-primary float-right'>Create</button></div>
      <table class="table">
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Location</th>
            <th scope="col">View</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            return(
            <tr>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.address.street}, {user.address.suite}, {user.address.city} - {user.address.zipcode}</td>
                <td style={{width: '40px'}}><button className='btn btn-warning'>View</button></td>
                <td style={{width: '30px'}}><button className='btn btn-success'>Edit</button></td>
                <td style={{width: '50px'}}><button className='btn btn-danger'>Delete</button></td>
            </tr>
          )})}
            
            
        </tbody>
        </table>
    </>
  )
}

export default List
