import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider, theme } from 'antd';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider
      theme={
        {
            "token": {
                "colorPrimary": "#727d73",
                "colorInfo": "#727d73",
                "colorSuccess": "#aab99a",
                // "colorBgBase": "#D0DDD0"
            },
            "components": {
            "Button": {
              "borderRadius": 16
            },
            "Layout": {
              "algorithm": true,
            },
          },
        }
      }
    >
    <App />
    </ConfigProvider>
  </StrictMode>,
);
