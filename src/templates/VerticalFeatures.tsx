import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Üdvözlünk az AdóGazda honlapján!"
    description="Több mint 20 év szakmai tapasztalattal, mérlegképes könyvelőként, adótanácsadóként és pénzügy-számvitel szakos közgazdászként segítem ügyfeleimet a biztos pénzügyi háttér megteremtésében. Fontos számunkra a precizitás és a naprakész tudás, hogy vállalkozásod számára a legjobb megoldásokat kínálhassuk."
  >
    <VerticalFeatureRow
      title="Teljes körű könyvelés és adótanácsadás"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Jogszabályi változások követése, adóoptimalizálás"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Céges átvilágítás a pénzügyi átláthatóságért"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
