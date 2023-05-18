import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './main/NavBar';
import { Provider } from 'react-redux';
import store from '../store/store';

export default function RootLayout() {
  return (
    <div>
      <Provider store={store}>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </div>
  );
}
