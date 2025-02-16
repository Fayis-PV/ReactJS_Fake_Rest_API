import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Create = () => {
    // const navigate = useNavigate()
    const [formData, setFormData] = useState({})
    

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
    console.log(formData);
    
  return (
    <div>
      <h1>Create Page</h1>
      <Link to={'/'} className='my-2 btn btn-primary float-right'>Home</Link>
      <form method="post" className='row'>
        <div className='form-group col-sm-6 mt-2'>
            <label for="name" className='form-label'>Name: </label>
            <input type="text" name="name" id="name" className='form-control' placeholder='Enter Name' onChange={handleChange} />
        </div>
        <div className='form-group col-sm-6 mt-2'>
            <label for="name" className='form-label'>Username: </label>
            <input type="text" name="username" id="username" className='form-control' placeholder='Enter Userame' onChange={handleChange} />
        </div>
        <div className='form-group col-sm-6 mt-2'>
            <label for="name" className='form-label'>Email: </label>
            <input type="email" name="email" id="email" className='form-control' placeholder='Enter Email' onChange={handleChange} />
        </div>
        <div className='form-group col-sm-6 mt-2'>
            <label for="name" className='form-label'>Phone: </label>
            <input type="text" name="phone" id="phone" className='form-control' placeholder='Enter Phone' onChange={handleChange} />
        </div>
        <div className='form-group col-sm-6 mt-2'>
            <label for="name" className='form-label'>Address: </label>
            <input type="text" name="street" id="street" className='form-control' placeholder='Enter Street' onChange={handleAddressChange} />
        </div>
        <div className='form-group col-sm-6 mt-2' style={{paddingTop:'32px'}}>
            <input type="text" name="suite" id="suite" className='form-control' placeholder='Enter Suite' onChange={handleAddressChange} />
        </div>
        <div className='form-group col-sm-6 mt-2'>
            <input type="text" name="city" id="city" className='form-control' placeholder='Enter City' onChange={handleAddressChange} />
        </div>
        <div className='form-group col-sm-6 mt-2'>
            <input type="text" name="zipcode" id="zipcode" className='form-control' placeholder='Enter Zipcode' onChange={handleAddressChange} />
        </div>
        <div className='form-group col-sm-6 mt-2'>
        <label for="name" className='form-label'>Website: </label>
            <input type="text" name="website" id="website" className='form-control' placeholder='Enter Website' onChange={handleChange} />
        </div>
        <button type='submit' className='btn btn-success my-3 py-2 px-4'>Create</button>
      </form>
    </div>
    
  )
}

export default Create
