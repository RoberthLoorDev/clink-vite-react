import CardsSection from './sections/CardsSection';
import FooterSection from './sections/FooterSection';
import HeaderSection from './sections/HeaderSection';
import IconSection from './sections/IconSection';
import TableUrlSections from './sections/TableUrlSections';

function App() {
     return (
          <div>
               <main className="w-[1235px] mx-auto">
                    <IconSection />
                    <HeaderSection />
                    <TableUrlSections />
                    <CardsSection />
               </main>
               <FooterSection />
          </div>
     );
}

export default App;
