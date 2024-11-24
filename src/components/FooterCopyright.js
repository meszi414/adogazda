const FooterCopyright = () => (
    <div className="footer-copyright">
      © Copyright {new Date().getFullYear()} | Adó-TanGazdagság Bt.
      {/*
       * PLEASE READ THIS SECTION
       * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
       * The link doesn't need to appear on every pages, one link on one page is enough.
       * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
       */}
      <style>
        {`
          .footer-copyright a {
            color: #3b82f6; /* Tailwind 'text-primary-500' színkód */
          }
  
          .footer-copyright a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
  
  export { FooterCopyright };
  