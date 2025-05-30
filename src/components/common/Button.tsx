import type { LucideIcon } from 'lucide-react';

interface Props {
  text: string;
  icon: LucideIcon;
}

const Button = ({ text, icon: Icon }: Props) => {
  return (
    <button
      // title="download my resume"
      className="flex gap-2 mt-5 bg-primary rounded-full px-2 max-h-[50px] pl-4 py-2 items-center cursor-pointer relative group z-[9] overflow-hidden"
    >
      {text}
     <div className='relative -top-[27.5px] group-hover:top-[28px] transition-all duration-300 w-[40px] flex flex-col gap-4 '>
       <span className="  w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center">
        <Icon className='text-primary' />
      </span>
      <span className=" w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center">
        <Icon className='text-primary' />
      </span>
     </div>
    </button>
  );
};

export default Button;
