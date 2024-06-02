import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

export const renderStars = ({ fullStars, halfStar }: { fullStars: number; halfStar: boolean }) => {
  const stars = Array.from({ length: 5 }).map((_, index) => {
    if (index < fullStars) {
      return <IoIosStar key={index} size={18} color="var(--color-point)" />;
    } else if (index === fullStars && halfStar) {
      return <IoIosStarHalf key={index} size={18} color="var(--color-point)" />;
    } else {
      return <IoIosStarOutline key={index} size={18} color="gray" />;
    }
  });

  return stars;
};
