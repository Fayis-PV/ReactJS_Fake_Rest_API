import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Create = ({data=null}) => {  
    const navigate = useNavigate()
    const [formData, setFormData] = useState({})
    useEffect(() => {
      if (data !== null){
        setFormData(data);
      }
    },[data])

    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData({
        ...formData,
        [name] : value
      })
    }
    const handleAddressChange = (e) => {
      const {name, value} = e.target;
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [name] : value
        }
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault()      
      axios.post('https://jsonplaceholder.typicode.com/users/',
        formData,
      )
      .then((response)=>{
        if (response.status === 201){
          console.log(response.data);
          data? (toast.success('User Updated Successfully')):(toast.success('User Created Successfully'));
          data? (navigate(`/user/${data?.id}`)) : (navigate('/'));
        }
      })
      .catch((error) => toast.error(`Error: ${error}`))
    }
    
  return (
    <>
      <h1 className='text-center p-3'>{data? 'Edit Page':'Create Page'}</h1>
      <Link to={'/'} className='my-2 btn btn-primary float-right'>Home</Link>
      <form method="post" className='row' onSubmit={handleSubmit}>
        <div className='form-group mt-2'>
            <label htmlFor="name" className='form-label'>Name: </label>
            <input type="text" name="name" id="name" className='form-control' value={formData?.name} placeholder='Enter Name' onChange={handleChange} required />
        </div>
        <div className='form-group col-sm-6 mt-2'>
            <label htmlFor="name" className='form-label'>Email: </label>
            <input type="email" name="email" id="email" className='form-control' value={formData?.email} placeholder='Enter Email' onChange={handleChange} required />
        </div>
        <div className='form-group col-sm-6 mt-2'>
            <label htmlFor="name" className='form-label'>Phone: </label>
            <input type="text" name="phone" id="phone" className='form-control' value={formData?.phone} placeholder='Enter Phone' onChange={handleChange} required />
        </div>
        <div className='form-group mt-2 row pe-0'>
            <label htmlFor="name" className='form-label'>Address: </label>
            <div className='col-sm-6 pe-2'>
              <input type="text" name="street" id="street" className='form-control' value={formData?.address?.street} placeholder='Enter Street' onChange={handleAddressChange} required />
            </div>
            <div className='col-sm-6 pe-0 ps-3'>
              <input type="text" name="suite" id="suite" className='form-control' value={formData?.address?.suite} placeholder='Enter Suite' onChange={handleAddressChange} required />
            </div>
            <div className='col-sm-6 mt-2 pe-2'>
              <input type="text" name="city" id="city" className='form-control' value={formData?.address?.city} placeholder='Enter City' onChange={handleAddressChange} required />
            </div>
            <div className='col-sm-6 mt-2 pe-0 ps-3'>
              <input type="text" name="zipcode" id="zipcode" className='form-control' value={formData?.address?.zipcode} placeholder='Enter Zipcode' onChange={handleAddressChange} required />
            </div>
        </div>  
        <button type='submit' className='btn btn-success my-3 py-2 px-4'>{data? 'Update' : 'Create'}</button>
      </form>

    </>
    
  )
}

export default Create
