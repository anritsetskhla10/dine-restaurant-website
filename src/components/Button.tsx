import { FC } from 'react';

interface IBtn {
  children: string;
  disabled?: boolean;
  dark: boolean;
  onClick?: () => void; 
}

const Button: FC<IBtn> = ({ children, disabled, dark, onClick }) => {
  return (
    <button
      className={`pt-[25px] pb-[23px] px-12 border text-[17px] font-semibold leading-[0.94] tracking-[2.5px]  
        ${disabled ? 'opacity-25' : ''}
        ${
          dark
            ? 'border-[#ffffff] bg-transparent text-[#ffffff] hover:bg-[#ffffff] hover:text-secondary-Mirage'
            : 'border-[#ffffff] text-[#ffffff] bg-[#111111] hover:bg-[#ffffff] hover:text-[#111111] hover:border-[#111111]'
        }
        dark:border-[#ffffff] dark:bg-secondary-Mirage dark:hover:bg-[#ffffff] dark:hover:text-secondary-Mirage`}
      disabled={disabled}
      onClick={onClick} 
    >
      {children}
    </button>
  );
};

export default Button;
