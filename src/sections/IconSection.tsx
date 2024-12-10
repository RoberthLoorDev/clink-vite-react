import { images } from '../assets/images/images';

export default function IconComponent() {
     return (
          <a href="/" className="flex mt-[27px]">
               <div className="flex  gap-[14px]">
                    <img className="w-[34px] h-[34px] " src={images.icon} alt="Icono de la pagina" />
                    <span className="text-[#19C2AA] text-[22px] font-bold tracking-[3.74px]">CLINK</span>
               </div>
          </a>
     );
}
