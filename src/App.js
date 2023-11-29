import {Routes, Route } from "react-router-dom";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";
import Layout from "./components/Layout";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsList />} />
          <Route path="post" element={<AddPostForm />} />
          <Route path="post/:postId" element={<SinglePostPage />} />
          <Route path="post/edit/:postId" element={<EditPostForm />} />
        </Route>
      </Routes>
  );
}

export default App;
