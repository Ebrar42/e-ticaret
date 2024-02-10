import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import PrivateRoot from './PrivateRoot'
import Fav from './pages/Fav'
import PageNotFound from './pages/PageNotFoud'
import Home from './pages/Home'

export default function SiteRoutes({handleLogin,user}) {
  return (
    <Routes>
        <Route path="/" element={<Home user={user}/>} ></Route>
        <Route path="/urunler" element={<ProductTemplate />}>
        <Route index={true} element={<Products user={user}/>}/>
                <Route path="category/:cat" element={<Categories user={user}/>}/>
                <Route path=":productId" element={<Product user={user}/>}/>
         </Route>
         <Route path="/hakkimda" element={<About />} ></Route>
         <Route path="/iletisim" element={<Contact />}></Route>
         <Route path="/login" element={<Login handleLogin={handleLogin} user={user} />}></Route>
         <Route path="/favoriler" element={<PrivateRoot user={user}><Fav user={user}/></PrivateRoot> }></Route>
         <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
  )
}
