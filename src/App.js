import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import EditPost from "./pages/posts/EditPost";
import NewPost from "./pages/posts/NewPost";
import Posts from "./pages/posts/Posts";

function App() {
  return (
    <BrowserRouter>
      <div className="ui container">
        <div className="ui menu">
          <div className="header item">
            Blog Admin
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts">
            <Route index element={<Posts />} />
            <Route path="new" element={<NewPost />} />
            <Route path=":id" element={<EditPost />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App