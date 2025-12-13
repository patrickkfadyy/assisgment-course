import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact/Contact.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Layout from './components/Layout/Layout.jsx';
import Notfound from './components/Not-Found/Notfound.jsx';


function App() {
  const [count, setCount] = useState(0);

  let routes = createBrowserRouter([{
    path: "", element: <Layout />, children: [
      { index:true , element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      {path: "*", element:<Notfound/>}

    ]

  }])

  return <>

    <RouterProvider router={routes} > </ RouterProvider>

  </>

}


export default App;