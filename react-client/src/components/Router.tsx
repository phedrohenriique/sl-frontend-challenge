import React from 'react'
import { Route, Routes } from "react-router-dom"

export default function Router(props: any) {
    return (
        <Routes>
            <Route path="/" element={<>Home Page</>} />
            <Route path='*' element={<>Error 404</>} />
        </Routes>
    )
}
