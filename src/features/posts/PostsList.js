import { useSelector } from "react-redux";
import { selectPostIds, getPostsError, getPostsStatus } from "./postsSlice";
import PostExcerpt from "./PostExcerpt";

const PostsList = () => {
  const orderedPostIds = useSelector(selectPostIds);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postsStatus === "succeeded") {
    content = orderedPostIds.map((postId) => (
      <PostExcerpt postId={postId} key={postId} />
    ));
  } else if (postsStatus === "error") {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};

export default PostsList;
