import logo from './logo.svg';
import './App.css';
import Blog from './Blog.js';
import NavBar from './NavBar.js'
import React from "react";

function App() {
  return (
    <>
     <div className="App">
       <Blog/>
     </div>
     
     <div className="App">
     {/* Navigation Bar */}
     

     {/* Main Content */}
     <div className="container">
       <h2 className="greeting">Hey, I'M</h2>
       <h1 className="name">SG ASHWINTH</h1>
       <p className="description">
         A Frontend focused Web Developer building the Frontend of Websites & Web
         Applications that leads to the success of the overall project
       </p>
     </div>
   </div>
   </>
 );
}

export default App;


 