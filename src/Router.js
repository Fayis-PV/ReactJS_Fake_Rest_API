import React from 'react'
import List from './Components/List'
import Create from './Components/Create'
import Detail from './Components/Detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes >
          <Route index element={<List />} />
          <Route path='create' element={<Create />} />
          <Route path="/user/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Router
