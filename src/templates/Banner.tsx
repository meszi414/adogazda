import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Több mint 20 év tapasztalattal a biztonságos pénzügyekért"
      subtitle="Kérjen ingyenes konzultációt!"
      /* button={
        <Link target="_blank" href="https://m.me/61568328006059" passHref>
          <Button>Kezdjük a Messengerben</Button>
        </Link>
      } */
      button={
        <Link
          target="_blank"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=iroda@adogazda.hu&su=Érdeklődés&body="
        >
          <Button>Kezdjük</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
