import { Routes, Route } from "react-router-dom"
import {ProductDetail, CartDetail, PageNotFound} from '../pages'

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<ProductDetail/>} />
            <Route path="/cart" element={<CartDetail/>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </>
  )
}
