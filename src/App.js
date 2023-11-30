import {Routes, Route, Navigate } from "react-router-dom";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";
import Layout from "./components/Layout";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<PostsList />} />

          <Route path="post" element={<AddPostForm />} />
          <Route path="post/:postId" element={<SinglePostPage />} />
          <Route path="post/edit/:postId" element={<EditPostForm />} />

          
          <Route path="user" element={<UsersList />} />
          <Route path="user/:userId" element={<UserPage />} />

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Route>
      </Routes>
  );
}

export default App;
