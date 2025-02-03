import React, { lazy, Suspense } from 'react';
import { Router, Route, createBrowserRouter, RouterProvider, createRoutesFromElements, Outlet } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import '../css/App.css';

const Home = lazy(() => import('./screens/Home.jsx'));
const About = lazy(() => import('./screens/About.jsx'));
const Progress = lazy(() => import('./screens/Progress.jsx'));
const Prototype = lazy(() => import('./screens/Prototype.jsx'));
const Summary = lazy(() => import('./screens/Summary.jsx'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="progress" element={<Progress />} />
        <Route path="prototype" element={<Prototype />} />
        <Route path="summary" element={<Summary />} />
    </Route>
  )
);

function BaseLayout() {
  return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Outlet />
        </Suspense>
      </div>
  );
}

const App  = () => {
    return (
          <RouterProvider router={router} />
    );
};

export default App;
