import classNames from 'classnames';

const Button = (props) => {
  const btnClass = classNames({
    'inline-block rounded-md text-center': true,
    'text-lg font-semibold py-2 px-4': !props.xl,
    'font-extrabold text-xl py-4 px-6': props.xl,
    'text-white bg-primary-500 hover:bg-primary-600': true,
  });

  return <div className={btnClass}>{props.children}</div>;
};

export { Button };
