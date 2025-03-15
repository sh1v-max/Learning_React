import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
// to create a route, we need to import createBrowserRouter from react-router-dom
// version matters, make sure you are using the correct version
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

// utilize createBrowserRouter to create a router
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error/>,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<AppLayout />)
root.render(<RouterProvider router={appRouter} />)
