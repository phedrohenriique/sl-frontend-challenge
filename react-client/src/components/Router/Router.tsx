import { Route, Routes } from "react-router-dom"
import Home from '../../pages/Home'

export default function Router() : JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='*' element={<>Error 404</>} />
        </Routes>
    )
}
