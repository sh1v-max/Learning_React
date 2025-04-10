import React, { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu'
import UserContext from './utils/UserContext'
import { Provider } from 'react-redux'
import AboutClass from './components/AboutClass'
import appStore from './utils/appStore'
// import Grocery from './components/Grocery'
// now we don't need this

const Grocery = lazy(() => import('./components/Grocery'))
// it's not same import as above, it's dynamic import... a function

const AppLayout = () => {
  const [ userName, setUserName ] = useState([])
  // authentication
  useEffect(() => {
    // make api call and send username and password
    const data = {
      name: 'User',
    }
    setUserName(data.name)
  }, [])

  return (
    <Provider store = {appStore}>
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
        // element: <AboutClass />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {' '}
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)

// lazy loading is a technique in which we load only the required part of the application and not the entire application at once
// we can use lazy loading with react-router-dom by using dynamic import
