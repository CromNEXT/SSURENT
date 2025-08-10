import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        {/* 하위 경로 배포 시: <BrowserRouter basename="/ssurent"> */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
