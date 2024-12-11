import { images } from '../assets/images/images';

export default function TableUrlSections() {
     const tableData = [
          {
               date: '10 Nov 2024',
               description: 'Sorteo Amazon',
               link: 'clink.vercel.app/lk23',
               clicks: '22 Clicks',
               copyIcon: images.copyIcon,
               deleteIcon: images.deteleIcon,
          },
          {
               date: '11 Nov 2024',
               description: 'Promoción eBay',
               link: 'clink.vercel.app/eb12',
               clicks: '15 Clicks',
               copyIcon: images.copyIcon,
               deleteIcon: images.deteleIcon,
          },
          {
               date: '12 Nov 2024',
               description: 'Descuento Walmart',
               link: 'clink.vercel.app/wm34',
               clicks: '30 Clicks',
               copyIcon: images.copyIcon,
               deleteIcon: images.deteleIcon,
          },
          {
               date: '13 Nov 2024',
               description: 'Oferta BestBuy',
               link: 'clink.vercel.app/bb56',
               clicks: '45 Clicks',
               copyIcon: images.copyIcon,
               deleteIcon: images.deteleIcon,
          },
          {
               date: '14 Nov 2024',
               description: 'Rebajas Target',
               link: 'clink.vercel.app/tg78',
               clicks: '50 Clicks',
               copyIcon: images.copyIcon,
               deleteIcon: images.deteleIcon,
          },
     ];

     return (
          <div className="mt-[180px] w-full ">
               <table className="w-[830px] mx-auto text-white ">
                    <thead>
                         <tr>
                              <th className="text-start pl-[36px]">Fecha</th>
                              <th className="text-start pl-[10px]">Título</th>
                              <th className="text-start pl-[10px]">URL Acortado</th>
                              <th className="text-start pl-[10px]">N° Clicks</th>
                              <th className="text-start pl-[10px]"></th>
                              <th className="text-start pl-[10px]"></th>
                         </tr>
                    </thead>

                    <tbody className="gap-[10px]">
                         {tableData.map(({ date, description, link, clicks }) => (
                              <tr className="border-[10px] border-[#1C1B20]">
                                   <td className="p-[11px] py-[15px] rounded-l-[30px] pl-[36px] bg-[#232127]">
                                        {date}
                                   </td>
                                   <td className="p-[11px] bg-[#232127]">{description}</td>
                                   <td className="p-[11px] bg-[#232127]">{link}</td>
                                   <td className="p-[11px] bg-[#232127] rounded-r-[30px]">{clicks}</td>
                                   <td className="p-[11px]  flex justify-start items-end hover:cursor-pointer">
                                        <img src={images.copyIcon} alt="" className="w-auto h-[24px]" />
                                   </td>
                                   <td className="p-[11px] hover:cursor-pointer">
                                        <img src={images.deteleIcon} alt="" className="w-auto h-[24px] " />
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
}
