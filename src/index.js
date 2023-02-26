import React from 'react';
import App from './App.js';
import Output from './Output.js';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="output" element={<Output />} />
        </Routes>
    </BrowserRouter>
);