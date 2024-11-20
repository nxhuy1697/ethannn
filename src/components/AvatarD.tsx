import React from "react";
import Image from "next/image";

const AvatarD = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none xl:w-[200px] xl:[678px]">
      <Image
        src={"/avaD.png"}
        width={100}
        height={678}
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default AvatarD;
