
export interface InfoItemProps {
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
}

const InfoItem = ({ icon, isLink, text }: InfoItemProps) => {
  const currentText = text || "Not Available";
  let currentHref = "";

  if (isLink) {
    currentHref = text && text.startsWith("http") ? text : `https://${text}`;
  }

  return (
    <li className=" text-custom-gray-200 dark:text-white text-[0.85rem] leading-normal flex items-center gap-3 w-max">
      <div>{icon}</div>
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
    </li>
  );
};

export default InfoItem;
