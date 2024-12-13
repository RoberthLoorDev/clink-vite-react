import { images } from '../assets/images/images';

interface Props {
     title: string;
     description: string;
     imagen: string;
}

export default function CardInfoComponent({ title, description, imagen }: Props) {
     return (
          <div className="flex flex-col w-[283px] h-[353px] bg-[#1C1B20] rounded-[20px] py-[43px]">
               {/* icon card */}
               <div className="flex justify-center items-center relative mb-[43px]">
                    <img className="w-auto h-[85px]" src={images.backgroundIconsCards} alt={title} />
                    <img src={imagen} className="absolute mt-2" alt={title} />
               </div>

               {/* content */}
               <div className="w-[228px] text-white text-[14px] font-light mx-auto text-center">
                    <span className="font-semibold text-base">{title}</span>
                    <p className="mt-[24px]">{description}</p>
               </div>
          </div>
     );
}
