import PostExcerpt from "./PostExcerpt";
import { useGetPostsQuery } from './postsSlice';

const PostsList = () => {
    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsQuery('getPosts')

    let content;
    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {
        content = posts.ids.map(postId => <PostExcerpt key={postId} postId={postId} />)
    } else if (isError) {
        content = <p>{error}</p>;
    }

    return (
        <section>
            {content}
        </section>
    )
}
export default PostsList