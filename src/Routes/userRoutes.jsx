import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

const Home = React.lazy(() => import('../Components/Pages/Home/Home'))

export const UserRoutes = () => {
  return (
    <React.Suspense fallback={<h1>esta pagina esta cargando</h1>}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
    </React.Suspense>
  )
}
