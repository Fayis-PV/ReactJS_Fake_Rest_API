import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const List = () => {
    const [data, setData] = useState([])
    const [deleteId, setDeleteId] = useState(null)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(response => setData(response.data))
        // .then(res => console.log(res)) 
    },[]);
    const handleDelete = async () => {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${deleteId}`)
      .then((response) => {
        setData(data.filter(user => user.id !== deleteId));
        toast.success('User Deleted Successfully')
        document.getElementById('closeModalButton').click(); 
      });
      setDeleteId(null);
    };
    
  return (
    <>
      <h1 className='text-center p-5'>CRUD Table View</h1>
      <Link to={'/create'} className='mb-5 btn btn-primary float-right'>Create</Link>
      <table className="table">
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
          {data?.map((user) => {
            return(
            <tr>
                <td><Link to={`user/${user?.id}`}>{user?.name}</Link></td>
                <td>{user?.phone}</td>
                <td>{user?.email}</td>
                <td>{user?.address?.street}, {user?.address?.suite}, {user?.address?.city} - {user?.address?.zipcode}</td>
                <td style={{width: '40px'}}><Link to={`user/${user?.id}`} className='btn btn-warning'>View</Link></td>
                <td style={{width: '30px'}}><Link to={`user-edit/${user?.id}`} className='btn btn-success'>Edit</Link></td>
                <td style={{width: '50px'}}><button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={()=> setDeleteId(user?.id)}>Delete</button></td>
            </tr>
          )})}
            
            
        </tbody>
        </table>
        <div className="modal fade" id="deleteModal" tabindex="1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-danger text-white">
                        <h5 className="modal-title" id="deleteModalLabel">Confirm Deletion</h5>
                        <button type="button" id="closeModalButton" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="mb-0">Are you sure you want to delete this item? This action cannot be undone.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-danger" id="confirmDelete" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default List
