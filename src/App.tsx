import Dashboard from '@ui/user/pages/Dashboard'
import KYC from '@ui/user/pages/KYC'
import TransferMoney from '@ui/user/pages/TransferMoney'
import Template from '@ui/user/templates/Template'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MyQr from '@ui/user/pages/MyQr'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Template />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: '/transfer-money', element: <TransferMoney /> },
        { path: '/kyc', element: <KYC /> },
        {path:'/my-qr', element:<MyQr/>}
      ],

    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
