import React from 'react'
import { useRoutes } from 'react-router-dom'
import LandingPage from './LandingPage'

const AllRoutes = () => {
    const element = useRoutes([
        {
            path: "/",
            element:<LandingPage />
        }
    ])



  return element
}

export default AllRoutes