import { Button } from './Button';
import { CTABanner } from './CTABanner';
import { Section } from './Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Több mint 20 év tapasztalattal a biztonságos pénzügyekért"
      subtitle="Kérjen ingyenes konzultációt!"
      button={
        <a
          target="_blank"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=iroda@adogazda.hu&su=Érdeklődés&body="
          rel="noopener noreferrer"
        >
          <Button>Kezdjük</Button>
        </a>
      }
    />
  </Section>
);

export { Banner };
