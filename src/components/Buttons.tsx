import { useState } from 'react';

type Props = {
 text: string; 
};

const Buttons :React.FC<Props>= ({text}) =>{
return (
  <button className="mt-3 mx-2 bg-white w-20 h-8 px-3 border-[1px]  border-black rounded-xl drop-shadow-[0px_0px_0px_rgb(0,0,0)] hover:shadow-[6px_6px_0px_rgb(0,0,0)]  hover:-translate-y-1 hover:-translate-x-1 transition-all text-black font-semibold ">{text}</button>
  );
};

export default Buttons;