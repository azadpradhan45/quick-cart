import Logo from "../NavBar/Logo";

const Footer = ({ data }) => {
  return (
    <footer className="w-full h-64 px-7 py-8 mt-2 grid grid-cols-8 gap-4">
      {/* First column */}
      <div className="col-span-2">
        <div className="border-b border-black pb-1">
          <Logo />
        </div>
        <div className="pt-3 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis beatae, doloribus eaque.
        </div>
      </div>

      
      <div className="col-span-1"></div>

      
      {data.map((footerTxt, key) => (
        <div key={key} className="">
          <div className="text-xl font-semibold border-b pb-2">{footerTxt.title}</div>
          <ul className="pt-2">
            {footerTxt.links.map((link, keys) => (
              <li key={keys}>{link}</li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
