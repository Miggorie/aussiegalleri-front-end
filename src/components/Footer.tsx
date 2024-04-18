import SocialMediaLogos from "./SocialMediaLogos";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-footer-container">
        <div className="footer-text-container">
          <h2 className="footer-rubrik">Aussiegalleri</h2>
          <section className="footer-p-container">
            <p className="footer-p">
              Aussiegalleriet är till för att visa mångfalden inom rasen
              australian shepherd. Det är ett ideellt galleri där ett fåtal
              euntusiaster åker och fotograferar hundar runt om i Sverige.
            </p>
            <p className="footer-p-inner">
              Här kan ni se många typer av hundar från flera olika uppfödare.
            </p>
          </section>
        </div>
        <div className="footer-p-container">
          <h2 className="footer-rubrik">Kontakta oss</h2>

          <div className="flex">
            <p className="mr-1 text-white">Email:</p>
            <a
              href="mailto:info@aussiegalleri.se"
              title="Vår email"
              className="transition-colors duration-300 text-stone-300 hover:text-deep-purple-800"
            >
              info@aussiegalleri.se
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Verksamhetsområde:</p>
            <p className="text-stone-300"> Sverige</p>
          </div>
        </div>
        <div>
          <div className="footer-p-container">
            <h2 className="footer-rubrik">Sociala medier</h2>
            {SocialMediaLogos("text-stone-200")}
            <p className="mt-4 text-sm text-stone-200">
              Följ oss på sociala medier för att se bilder på fina hundar och få
              uppdateringar om vart nästa fotografering ska ske!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-1 pb-10 border-t lg:flex-row">
        <p className="copyright-text footer-p m-center">
          © Copyright 2023 Elin Selin, Jalma Ingman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
