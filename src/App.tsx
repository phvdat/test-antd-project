import React from 'react';
import './App.css';
import { ConfigProvider } from 'antd';
import { Outlet } from 'react-router-dom';
import theme from './Theme/themeConfig';

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Outlet />
    </ConfigProvider>
  );
}

export default App;
