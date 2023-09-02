import { motion, useAnimation } from "framer-motion";

export interface InfoItemProps {
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
}

const InfoItem = ({ icon, isLink, text }: InfoItemProps) => {
  const currentText = text || "Not Available";
  let currentHref = "";

  if (isLink) {
    currentHref = text?.startsWith("http") ? text : `https://${text}`;
  }
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start({ x: [0, -2, 2, -2, 2, 0], transition: { duration: 0.7 } }); // Здесь вы можете настроить анимацию внутреннего элемента
  };

  const handleMouseLeave = () => {
    controls.start({ x: 0 });
  };

  return (
    <motion.li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className=" text-custom-gray-200 dark:text-white text-[0.85rem] leading-normal flex items-center gap-3 w-full cursor-pointer "
    >
      <motion.div animate={controls}>{icon}</motion.div>
      <div>
        {isLink && text ? (
          <a
            href={currentHref}
            target="_blank"
            rel="noreferrer"
            className=" text-custom-gray-200 dark:text-white hover:text-underline"
          >
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </motion.li>
  );
};

export default InfoItem;
