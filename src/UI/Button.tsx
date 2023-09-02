interface ButtonProps {
  children: string;
}

export const Button = ({ children }: ButtonProps) => (
  <button className=" py-3 px-6 text-white border-none rounded-xl bg-main-color color-while leading-normal cursor-pointer transition-all duration-200 ease-linear hover:bg-main-color-hover">
    {children}
  </button>
);
