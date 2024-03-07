import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home/Home';
import LayOut from './Pages/Layout/LayOut';
import React, { Suspense, lazy } from 'react';
import Loading from './Components/Loading/Loading';

// Import Details lazily
const Details = lazy(() => import('./Pages/Details/Details'));
const NotFound = lazy(() => import('./Pages/NotFound/NotFound'));

function App() {
  const routers = createHashRouter([
    {
      path: '', element: <LayOut />, children: [
        { index: true, element: <Home /> },
        { path: "Details", element: <Suspense fallback={<Loading />}><Details /></Suspense> },
        { path: "*", element: <Suspense fallback={<Loading />}><NotFound /></Suspense> }
      ]
    }
  ]);

  return (
    <RouterProvider router={routers}></RouterProvider>
  );
}

export default App;
