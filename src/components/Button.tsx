

interface IBtn {
  children: string;
  disabled?: boolean;
}

function Button({ children, disabled }: IBtn) {
  return (
    <button
      className={`pt-[25px] pb-[23px] px-12 border border-[#111111] text-[17px] font-semibold 
        leading-[0.94] tracking-[2.5px] text-[#111111] hover:bg-[#111111]  hover:text-[#ffffff] 
        dark:border dark:border-[#ffffff] dark:bg-secondary-Mirage dark:hover:bg-[#ffffff]  dark:hover:text-secondary-Mirage ${
        disabled ? 'opacity-25 ' : ''
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;