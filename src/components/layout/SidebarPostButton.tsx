import { useRouter } from "next/router";
import { BsFillSignpostFill } from "react-icons/bs";
import useLoginModal from "../hooks/useLoginModal";
import { useCallback } from "react";

const SidebarPostButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const onClick = useCallback(() => {
     loginModal.onOpen();
  }, [loginModal]);
  return (
    <div onClick={onClick}>
      <div className="flex items-center justify-center p-4 mt-6 transition bg-purple-500 rounded-full cursor-pointer lg:hidden h-14 w-14 hover:bg-opacity-80">
        <BsFillSignpostFill size={24} color="white" />
      </div>
      <div className="hidden px-4 py-2 mt-6 transition bg-purple-500 rounded-full cursor-pointer lg:block hover:bg-opacity-90">
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
          Create
        </p>
      </div>
    </div>
  );
};

export default SidebarPostButton;
