import Image from "next/image";
import vercel from "@/public/vercel.svg";

export const Logo = () => (
  <div>
    <Image
      priority
      src={vercel}
      width="28"
      height="28"
      alt="Vercel Logo"
    />
  </div>
);
