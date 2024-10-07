const Footer = () => {
  return (
    <div className="bg-stone-800">
      <footer className=" mx-auto text-slate-100 flex flex-col justify-between gap-5 text-sm py-3 w-5/6 sm:w-3/4 items-center sm:flex-row">
        <div className="text-center">
          <h2 className="text-base font-semibold">
            <a href="">MOPSHOP</a>
          </h2>
          <p>
            <a href="">Contact</a>
          </p>
        </div>
        <div className="text-center">
          <p>
            <a href="">
              <span>&copy;</span> All Rights Reserved
            </a>
          </p>

          <p>
            <a href="mobile:0000000000">+91 55555 47479</a>
          </p>
          <p>
            <a href="mailto:mopshop@care.com">mopshop@care.com</a>
          </p>
        </div>
        <div className="text-center">
          <address>
            <p>27 Kalpana Nagar</p>
            <p>Raisen, Bhopal</p>
            <p>MP, India</p>
          </address>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
