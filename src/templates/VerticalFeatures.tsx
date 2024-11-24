import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { Banner } from './Banner';

const VerticalFeatures = () => (
  <Section
    title="Köszöntjük weboldalunkon!"
    description={
      'Mérlegképes könyvelőként, adótanácsadóként és pénzügy-számvitel szakos közgazdászként segítem ügyfeleimet a biztos pénzügyi háttér megteremtésében. Fontos számomra a precizitás és a naprakész tudás, hogy vállalkozása számára a legjobb megoldásokat kínálhassam.\nKeressen bizalommal!'
    }
  >
    <Banner />

    <VerticalFeatureRow
      title="Teljes körű könyvelés és adótanácsadás"
      description="Szolgáltatásunk átfogó könyvelési rendszert biztosít, amely magában foglalja a naprakész pénzügyi nyilvántartást és a vállalkozás pénzügyi helyzetének folyamatos figyelemmel kísérését. Adótanácsadóink segítenek optimalizálni adózási stratégiáit, hogy minimalizálhassa adóterheit, miközben megfelel a legújabb jogszabályoknak."
      image="/assets/images/acc1.jpg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Jogszabályi változások követése, adóoptimalizálás"
      description="Cégünk folyamatosan nyomon követi a jogszabályi változásokat, és biztosítja, hogy vállalkozása mindig naprakész legyen az adózási előírások terén. A személyre szabott adóoptimalizálási tanácsok révén csökkentheti költségeit, miközben kihasználhatja a rendelkezésre álló kedvezményeket és mentességeket."
      image="/assets/images/tax1.jpg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Céges átvilágítás a pénzügyi átláthatóságért"
      description="A pénzügyi átvilágítás során alaposan megvizsgáljuk cége pénzügyi folyamatait, hogy biztosítsuk azok átláthatóságát és hatékonyságát. Segítünk az esetleges pénzügyi kockázatok felismerésében és a vállalat pénzügyi stabilitásának javításában, így erősítve a hosszú távú sikeres működést."
      image="/assets/images/audit1.jpg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
