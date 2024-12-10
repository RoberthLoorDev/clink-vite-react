import { images } from '../assets/images/images';

export default function HeaderSection() {
     return (
          <div className="flex justify-between mt-[155px]">
               <div>
                    <p className="uppercase text-[20px] font-medium text-[#ACACAC] ">
                         Acorta y comparte enlaces de forma rápida y sencilla.
                    </p>
                    <h1 className="text-[#FFF] text-[56px] font-normal mt-[46px]">
                         <b>Acorta</b> enlaces, <br />
                         <b>amplifica </b> tu impacto
                    </h1>

                    {/* input */}
                    <div className="flex items-center justify-between px-[31px] mt-[45px] w-[713px] h-[73px] bg-[#232227] rounded-full">
                         <input
                              type="text"
                              className="h-full w-full outline-none bg-transparent text-[22px] text-[#fff] placeholder:opacity-30"
                              placeholder="Enlace largo"
                         />

                         <button className="text-[#19c2aa] text-[22px] font-semibold uppercase pl-4">ACORTAR</button>
                    </div>

                    {/* title input */}
                    <div className="bg-[#232227] w-[367px] h-[47px] mt-[8px] rounded-full">
                         <input
                              type="text"
                              className="w-full h-full rounded-full bg-transparent px-[31px] placeholder:opacity-30 outline-0"
                              placeholder="Título (opcional)"
                         />
                    </div>
               </div>
               <div className="flex items-center">
                    <img className="w-auto h-[385.075px] " src={images.bigIcon} alt="Ícono de la página" />
               </div>
          </div>
     );
}
