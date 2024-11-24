import React from 'react';
import { Link } from 'react-router-dom'; // Használjunk React Router-t a navigáláshoz

import { Background } from './Background';
import { Section } from './Section';
import { NavbarTwoColumns } from './NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl src="/adogazda_logo.jpg" alt="" />}>
        <li>
           <Link to="/">Katica</Link>🐞
        </li>
      </NavbarTwoColumns>
    </Section>
    {/* <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={(
          <>
            {'The modern landing page for\n'}
            <span className="text-primary-500">React developers</span>
          </>
        )}
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link to="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Download Your Free Theme</Button>
          </Link>
        }
      />
    </Section> */}
  </Background>
);

export { Hero };
