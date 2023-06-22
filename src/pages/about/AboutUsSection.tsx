import { ExternalLink } from "react-external-link";
import tyr from "../../images/tyr2.jpg";

const AbooutUs = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
      <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
        <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
          <div className="max-w-xl mb-4 md:mx-auto sm:text-center lg: text-center lg:max-w-2xl md:mb-4">
            <p className="inline-block px-3 py-px text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Storyn från början
            </p>
          </div>
          <h1 className="break-word mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
            Hur startade aussiegalleriet?
          </h1>
          <div className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
            <p>
              Idén till aussiegalleriet föddes sommaren 2015 efter att Jalma
              fått inspiration från{" "}
              <ExternalLink href="https://www.kelpiegallery.se/">
                Kelpiegalleriet.
              </ExternalLink>{" "}
            </p>
            <br></br>
            <p>
              Jalma insåg snart att hon inte ville driva projektet ensam och såg
              sig om efter fler euntusiaster. Hon hittade Elin, Emelia och Lina
              och tillsammans började de bygga aussiegalleriet så som det ser ut
              idag.
            </p>
            <br></br>
            <p>
              Syftet med galleriet var att visa rasens mångsidighet och dess
              variation i färg, kroppsbygnad och typ. Aussien är fantastiskt
              bred och kan se ut på så många olika sätt. Här i galleriet får du
              se alla olika kroppstyper!
            </p>
          </div>
          <div className="mb-10 text-center md:mb-16 lg:mb-20"></div>
          <div className="flex flex-col items-center">
            <div className="mb-2 text-sm text-gray-600 md:mb-2">Följ oss</div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center"></div>
              <div className="flex items-center">
                <a
                  href="https://www.instagram.com/aussiegalleri/"
                  aria-label="Gå till Instagram"
                  className="text-stone-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                    <circle cx="15" cy="15" r="4" />
                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="https://www.facebook.com/aussiegalleri"
                  className="text-stone-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  aria-label="Gå till Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded lg:shadow-none md:h-96 lg:h-full"
          src={tyr}
          alt="Svart trefärgad hund som sitter på fjället"
        />
      </div>
    </div>
  );
};

export default AbooutUs;
