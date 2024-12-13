import CardsSection from './sections/CardsSection';
import HeaderSection from './sections/HeaderSection';
import IconSection from './sections/IconSection';
import TableUrlSections from './sections/TableUrlSections';

function App() {
     return (
          <div className="w-[1235px] mx-auto">
               <IconSection />
               <HeaderSection />
               <TableUrlSections />
               <CardsSection />
          </div>
     );
}

export default App;
