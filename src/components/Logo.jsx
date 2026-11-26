import { AppConfig } from '../utils/AppConfig';

const Logo = ({ xl = false, src, alt }) => {
  const size = xl ? '44' : '32';
  const fontStyle = xl ? 'font-semibold text-3xl' : 'font-semibold text-xl';

  return (
    <span
      className={`inline-flex items-center space-x-1 text-gray-900 ${fontStyle}`}
    >
      <img
        className="mr-1 rounded-full"
        src={src}
        alt={alt}
        width={size}
        height={size}
      />
      <span>{AppConfig.site_name}</span>
    </span>
  );
};

export default Logo;
export { Logo };
