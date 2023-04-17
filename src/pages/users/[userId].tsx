import Header from "@/components/Header";
import useUser from "@/components/hooks/useUser";
import UserHero from "../../components/users/UserHero";

import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import UserBio from "../../components/users/UserBio";

const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex items-center justify-center h-full">
        <ClipLoader color="#BB00FF" size={80} />
      </div>
    );
  }
  return (
    <>
      <Header showBackArrow label={fetchedUser?.name} />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string} />
    </>
  );
};

export default UserView;
