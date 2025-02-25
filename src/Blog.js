import React from "react";
import "./App.css";
import NavBar from "./NavBar"; // Import the navigation bar component

function Blog() {
  return (
    <div>
      <NavBar /> {/* Include the navigation bar */}
      <div className="blog-content">
      </div>
    </div>
  );
}

export default Blog;
