const NavbarTwoColumns = ({ logo, children }) => (
    <div className="flex flex-wrap items-center justify-between">
      <div>
        <a href="/">{logo}</a>
      </div>
  
      <nav>
        <ul className="navbar flex items-center text-xl font-medium text-gray-800">
          {children}
        </ul>
      </nav>
  
      <style jsx>
        {`
          .navbar :global(li:not(:first-child)) {
            @apply mt-0;
          }
  
          .navbar :global(li:not(:last-child)) {
            @apply mr-5;
          }
        `}
      </style>
    </div>
  );
  
  export { NavbarTwoColumns };
  