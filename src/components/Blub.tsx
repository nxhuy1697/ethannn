import Image from "next/image";

const Blub = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[400px]">
      {/* img  */}
      <Image
        src={"/greenbulb.png"}
        
        width={512}
        height={512}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Blub;
