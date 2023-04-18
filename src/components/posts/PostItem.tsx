import { useRouter } from "next/router";
import useLoginModal from "../hooks/useLoginModal";
import useCurrentUser from "../hooks/useCurrentUser";
import { useCallback } from "react";

interface PostItemProps {
  data: Record<string, any>;
  userId?: string;
}
const PostItem: React.FC<PostItemProps> = ({ data, userId }) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();

  const goToUser = useCallback(
    (event: any) => {
      event.stopPropagation();

      router.push(`/users/${data.user.id}`);
    },
    [router, data.user.id]
  );

  const goToPost = useCallback(() => {
    router.push(`/posts/${data.id}`);
  }, [router, data.id]);

  return <div>PostItem</div>;
};

export default PostItem;
