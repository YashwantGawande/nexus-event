import Header from "@/components/Header";
import PostFeed from "@/components/posts/PostFeed";
import Form from "@/components/users/Form";

export default function Home() {
  return (
    <>
      <Header label="Home" />
      <Form placeholder="What's happening"/>
      <PostFeed />
    </>
  );
}
