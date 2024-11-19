import React from "react";
import Image from "next/image";

const AvatarD = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/avaD.png"}
        width={73}
        height={778}
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default AvatarD;
