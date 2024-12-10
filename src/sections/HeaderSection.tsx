import { images } from '../assets/images/images';

export default function HeaderSection() {
     return (
          <div className="flex justify-between mt-[155px] relative">
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
                    <div className="bg-[#232227] w-[367px] h-[50px] mt-[8px] rounded-full">
                         <input
                              type="text"
                              className="w-full h-full rounded-full bg-transparent px-[31px] placeholder:opacity-30 outline-0 text-white"
                              placeholder="Título (opcional)"
                         />
                    </div>
               </div>
               <div className="flex items-center">
                    <img className="w-auto h-[385.075px] " src={images.bigIcon} alt="Ícono de la página" />
               </div>

               {/* images icons */}
               <img className="absolute right-[300px] w-auto h-[58px]" src={images.facebookIcon} alt="Facebook" />
               <img
                    className="absolute top-[200px] right-[350px] w-auto h-[58px]"
                    src={images.twitterIcon}
                    alt="Facebook"
               />
               <img
                    className="absolute top-[380px] right-[150px] w-auto h-[58px]"
                    src={images.youtubeIcon}
                    alt="Facebook"
               />

               {/* bottom square */}
               <div className="absolute top-[-800px] left-[1000px] w-[1172px] h-[1323px] bg-[#29272E] rounded-[50px] rotate-[40deg] -z-30"></div>
          </div>
     );
}
