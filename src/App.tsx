import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rent from "./pages/Rent";
import Return from "./pages/Return";
import MyPage from "./pages/MyPage";
import Login from "./pages/login";

function App() {
    return (
        <>
            <Header />
            <main style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rent" element={<Rent />} />
                    <Route path="/return" element={<Return />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>
        </>
    );
}
export default App;