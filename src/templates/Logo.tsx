import Image from 'next/image';

import { AppConfig } from '../utils/AppConfig';

interface ILogoProps {
  xl?: boolean;
  src: string; // Kép forrása
  alt: string; // Kép alternatív szövege
}

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span
      className={`inline-flex items-center space-x-1 text-gray-900 ${fontStyle}`}
    >
      <Image
        className="mr-1 rounded-full"
        src={props.src}
        alt={props.alt}
        width={size}
        height={size}
        priority={props.xl} // Nagyobb méretnél prioritást ad
      />
      <span>{AppConfig.site_name}</span>
    </span>
  );
};

export default Logo;

export { Logo };
