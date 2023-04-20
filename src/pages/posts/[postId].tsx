import Header from "@/components/Header";
import usePost from "@/components/hooks/usePost";
import PostItem from "@/components/posts/PostItem";
import Form from "@/components/users/Form";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

const PostView = () => {
  const router = useRouter();
  const { postId } = router.query;

  const { data: fetchedPost, isLoading } = usePost(postId as string);

  if (isLoading || !fetchedPost) {
    return (
      <div className="flex items-center justify-center h-full">
        <ClipLoader color="#BB00FF" size={80} />
      </div>
    );
  }

  return (
    <>
      <Header label="Post" showBackArrow />
      <PostItem data={fetchedPost} />
      <Form postId={postId as string} isComment placeholder="Post your reply" />
    </>
  );
};

export default PostView;
