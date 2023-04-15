import format from "date-fns/format";

import useCurrentUser from "@/components/hooks/useCurrentUser";
import useUser from "@/components/hooks/useUser";
import { useMemo } from "react";
import Button from "@/components/Button";

interface UserBioProps {
  userId: string;
}
const UserBio: React.FC<UserBioProps> = ({ userId }) => {
  const { data: fetchedUser } = useUser(userId);
  const { data: currentUser } = useCurrentUser();

  const createAt = useMemo(() => {
    if (!fetchedUser?.createdAt) {
      return null;
    }
    return format(new Date(fetchedUser.createdAt), "MMMM yyyy");
  }, [fetchedUser?.createdAt]);

  return (
    <div className="border-b-[1px] border-neutral-800 pb-4">
      <div className="flex justify-end p-2">
        {currentUser?.id === userId ? (
          <Button secondary label="Edit" onClick={() => {}} />
        ) : (
          <Button onClick={() => {}} label="Follow" secondary />
        )}
      </div>
    </div>
  );
};

export default UserBio;
