import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/posts/:id">Post Detail</Link>
          </li>
          <li>
            <Link to="/posts/new">New Post</Link>
          </li>
          <li>
            <Link to="/posts/edit/:id">Edit Post</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/posts" element={<h1>Posts Lists Page</h1>} />
        <Route path="/posts/:id" element={<h1>Post Details Page</h1>} />
        <Route path="/posts/new" element={<h1>New Post Page</h1>} />
        <Route path="/posts/edit/:id" element={<h1>Edit Post Page</h1>} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
