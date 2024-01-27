import { HOME_IMAGE_PATH } from "@/lib/constants";

const HomeImage = () => {
  return (
    <div
      className="w-full bg-center bg-cover md:h-80 h-40"
      style={{
        backgroundImage: `url(${HOME_IMAGE_PATH})`,
      }}
    />
  );
};

export default HomeImage;
