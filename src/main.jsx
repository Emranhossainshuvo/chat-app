import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import PrivateRoute from './PrivateRoutes/PrivateRoute';
import { ChatContext } from './context/ChatContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><Home /></PrivateRoute>,
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChatContext>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </ChatContext>
  </React.StrictMode>,
)
