"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

export default function NavIcons() {
  const [proflie, setprofile] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const isloggedIn = false;
  const counter = 2;
  const handleProfile = () => {
    if (!isloggedIn) {
      router.push("/login");
    }
    setprofile((prev) => !prev);
  };
  return (
    <div className="flex justify-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className=" cursor-pointer"
        onClick={handleProfile}
      />
      {proflie && (
        <div className="absolute p-4 rounded-md  top-12  right-12 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <div>Profile</div>
          <div>Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className=" cursor-pointer"
      />
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image src="/cart.png" alt="" width={22} height={22} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-eStore rounded-full text-white text-sm flex items-center justify-center">
          {counter}
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
}
