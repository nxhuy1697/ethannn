//components
import Blub from "@/components/Blub";
import Circles from "@/components/Circles";
import ServiceSlider from "@/components/ServiceSlider";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../variant";
const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text  */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ">
            <h2 className="h2 xl:mt-8">
              My Services <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus explicabo amet vel molestiae inventore veniam,
              deserunt accusantium ea atque beatae!
            </p>
          </div>
          {/* slider  */}
          <ServiceSlider />
        </div>
      </div>
      <Blub />
    </div>
  );
};

export default Services;
