import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import DashBoard from './component/main/DashBoard';
import Cart from './component/Cart';
import RootLayout from './component/RootLayout';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<DashBoard />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
