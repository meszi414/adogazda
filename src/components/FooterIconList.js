const FooterIconList = (props) => (
    <div className="footer-icon-list flex flex-wrap">
      {props.children}
  
      <style>
        {`
          .footer-icon-list a:not(:last-child) {
            margin-right: 0.75rem; 
          }
  
          .footer-icon-list a {
            color: #6b7280; 
          }
  
          .footer-icon-list a:hover {
            color: #374151; 
          }
  
          .footer-icon-list svg {
            fill: currentColor;
            width: 1.25rem; 
            height: 1.25rem;
          }
        `}
      </style>
    </div>
  );
  
  export { FooterIconList };
  