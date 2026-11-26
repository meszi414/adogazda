import React from 'react';

const Meta = (props) => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <link
          rel="adogazda_fav"
          href="/adogazda_fav.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/adogazda_fav.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/adogazda_fav.png"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        {props.canonical && <link rel="canonical" href={props.canonical} />}
        <meta
          property="og:title"
          content={props.title}
        />
        <meta
          property="og:description"
          content={props.description}
        />
        {props.canonical && (
          <meta
            property="og:url"
            content={props.canonical}
          />
        )}
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="My React App" />
      </head>
    </>
  );
};

export { Meta };
