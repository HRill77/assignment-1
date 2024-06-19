import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ConfigProvider } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';
import Post from './Pages/Post';
import Navbar from './Pages/Navbar';
import Homepage from './Pages/Homepage';

function App() {

  const [posts, addPosts] = useState<string[]>([]);
  const [newPost, setNewPost] = useState("");
  const [menu] = useState(["Home", "About Us"]);

  return (
    
   <div>
    <Navbar buttons={menu} selected='Home' ></Navbar>
    <Homepage/>
   </div>
  );
}

export default App;
