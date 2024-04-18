import { ExternalLink } from "react-external-link";
import tyr from "../../images/tyr2.jpg";
import SocialMediaLogos from "../../components/SocialMediaLogos";

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
            {SocialMediaLogos("text-red")}
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
