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
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="https://www.instagram.com/aussiegalleri/"
                aria-label="Gå till Instagram"
                className="text-stone-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/aussiegalleri"
                className="text-stone-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
                aria-label="Gå till Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
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
