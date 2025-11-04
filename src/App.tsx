import Template from '@ui/landing/templates/Template';
import Dashboard from '@ui/user/pages/Dashboard';
import KYC from '@ui/user/pages/KYC';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

function App() {


    const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: '/kyc', element: <KYC /> },
    ]
  },
  
]);

  return (
    <>

          <RouterProvider router={router} />

   
    </>
  )
}

export default App
