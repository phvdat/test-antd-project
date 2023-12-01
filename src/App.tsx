import React from 'react';
import './App.css';
import { ConfigProvider } from 'antd';
import Grid from './pages/product/Grid';
import theme from './Theme/themeConfig';

function App() {
  return (
    <ConfigProvider theme={theme}>
      <div>
        {/* <Register /> */}
        <Grid />
      </div>
    </ConfigProvider>
  );
}

export default App;
