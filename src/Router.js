import React from 'react'
import List from './Components/List'
import Create from './Components/Create'
import Detail from './Components/Detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Edit from './Components/Edit'

const Router = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes >
          <Route index element={<List />} />
          <Route path='create' element={<Create />} />
          <Route path="/user/:id" element={<Detail />} />
          <Route path="/user-edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Router
