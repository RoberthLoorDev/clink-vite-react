import { images } from '../assets/images/images';
import CardInfoComponent from '../components/CardInfoComponent';

export default function CardsSection() {
     const cards = [
          {
               title: 'Mejora el Tráfico Web',
               text: 'Al acortar tus enlaces, facilitas la compartición y redirección, lo que incrementa el número de clics y visitas a tu sitio web.',
               imagen: images.BrowserIcon,
          },

          {
               title: 'Optimiza tus Campañas',
               text: 'Puedes realizar un seguimiento detallado de las métricas, lo que mejora la efectividad de tus campañas de marketing digital.',
               imagen: images.adIcon,
          },

          {
               title: 'Simplifica el Compartir',
               text: 'Enlaces más cortos y claros son más atractivos y fáciles de recordar, lo que facilita su compartición en redes sociales y otras plataformas.',
               imagen: images.shareIcon,
          },
     ];

     return (
          <div className="mt-[156px] mb-[200px] flex justify-center gap-[33px] relative">
               {cards.map((card) => (
                    <CardInfoComponent title={card.title} description={card.text} imagen={card.imagen} />
               ))}

               {/* light background */}
               <div className="light-cards-section mt-[30px]"></div>
          </div>
     );
}
