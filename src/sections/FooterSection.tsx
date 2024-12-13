import { images } from '../assets/images/images';

export default function FooterSection() {
     const links = [
          {
               link: 'https://www.linkedin.com/in/roberth-loor-837744227/',
               imagen: images.linkedinIcon,
               alt: 'Linkedin',
          },

          {
               link: 'https://www.instagram.com/roberth.loor10/',
               imagen: images.instagramIcon,
               alt: 'Instagram',
          },

          {
               link: 'https://portfolio-roberth.vercel.app/',
               imagen: images.browserIconFooter,
               alt: 'Portafolio',
          },

          {
               link: 'https://github.com/RoberthLoorDev/',
               imagen: images.githubIcon,
               alt: 'Github',
          },
     ];

     return (
          <div className="mt-[110px] bg-[#19181D] h-[341px] w-full grid grid-cols-2 px-[277px]">
               <div className="flex flex-col my-auto">
                    <div className="flex items-center gap-[15px]">
                         <img src={images.icon} className="w-[43px] h-[43px]" alt="CLINK" />
                         <span className="text-[#19C2AA] text-[32px] font-bold">CLINK</span>
                    </div>
                    <p className="text text-white my-[24px]">
                         Acorta y comparte enlaces de forma rápida y sencilla. Nuestro objetivo es mejorar tu
                         experiencia en línea.
                    </p>

                    {/* social networks */}
                    <div className="flex gap-[16px] -ml-[px]">
                         {links.map(({ link, alt, imagen }) => (
                              <a href={link} className="w-auto hover:rotate-12 , hover:scale-125 duration-150">
                                   <img className="h-[30px]" src={imagen} alt={alt} />
                              </a>
                         ))}
                    </div>
               </div>

               {/* Contact me */}
               <div className="flex flex-col items-end my-auto gap-[15px]">
                    <span className="text-[#19C2AA] text-[22px] font-bold">CONTÁCTAME</span>
                    <div className="w-[500px] h-[52px] rounded-[65px] flex bg-[#232227] px-[25px]">
                         <input
                              className="flex flex-1 rounded-[65px] bg-transparent placeholder:opacity-30 outline-none text-white text-base"
                              type="text"
                              placeholder="Email"
                         />
                         <button className="text-[#19C2AA] font-semibold text-[18px] py-2 pl-2">ENVIAR</button>
                    </div>
                    <small className="text-white opacity-50 font-normal text-sm italic">
                         ¿Quieres saber más? Escribe tu email y me pondré en contacto contigo
                    </small>
               </div>
          </div>
     );
}
