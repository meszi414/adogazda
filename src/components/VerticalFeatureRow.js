import className from 'classnames';

const VerticalFeatureRow = ({ title, description, image, imageAlt, reverse = false }) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': reverse,
    }
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">{title}</h3>
        <div className="mt-6 text-xl leading-9">{description}</div>
      </div>

      <div className="w-full p-6 sm:w-1/2">
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
