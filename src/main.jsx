import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '/src/index.css';
import Nav from './components/Nav.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Nav />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/project/:id', element: <ProjectPage /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
