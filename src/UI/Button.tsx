interface ButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: ButtonProps) => (
  <button
    className=" px-3 py-6 border-none rounded-xl bg-main-color color-while leading-normal cursor-pointer hover:bg-main-color-hover"
    onClick={onClick}
  >
    {children}
  </button>
);
