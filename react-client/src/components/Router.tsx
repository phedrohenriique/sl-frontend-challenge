import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from '../pages/Home'

export default function Router(props: any) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='*' element={<>Error 404</>} />
        </Routes>
    )
}
