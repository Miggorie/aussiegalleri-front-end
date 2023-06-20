import ElinsBild from "../../images/elin.jpg";
import LinasBild from "../../images/lina.jpg";
import EmeliasBild from "../../images/emelia.jpg";
import JalmasBild from "../../images/jalma.jpg";

const Photographers = () => {
  return (
    <div className="bg-stone-100 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Eldsjälarna bakom galleriet
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Möt våra</span>
          </span>
          duktiga fotografer och utvecklare
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Här är teamet som ser till att aussiegalleriet expanderar.
        </p>
      </div>
      <div className="fotografer-grid">
        <div className="fotograf-container">
          <img src={JalmasBild} alt="Jalma Ingman" />
          <div className="fotograf-text-content">
            <h3>Jalma Ingman</h3>
            <p className="fotografer-role">Grundare, Fotograf och Utvecklare</p>
            <p className="fotografer-p-content">
              Jalma grundade aussiegalleriet och tog de första bilderna och
              skapade den första hemsidan! Jalma utgår från Stockholm.
            </p>
          </div>
        </div>
        <div className="fotograf-container">
          <img src={ElinsBild} alt="Elin Selin" />
          <div className="fotograf-text-content">
            <h3>Elin Selin</h3>
            <p className="fotografer-role"> Fotograf och Utvecklare</p>
            <p>
              Elin har fotograferat många hundra hundar till galleriet genom
              åren, och även utvecklat den nuvarande hemsidan. Elin utgår från
              Mariefred.
            </p>
          </div>
        </div>
        <div className="fotograf-container">
          <img src={EmeliasBild} alt="Emelia" />
          <div className="fotograf-text-content">
            <h3>Emelia</h3>
            <p className="fotografer-role">Fotograf</p>
            <p>
              Emelia har fotograferat för galleriet i många år och tar väldigt
              fina bilder. Hon är ofta på utställningar uppåt i landet. Emelia
              utgår från Timrå.
            </p>
          </div>
        </div>
        <div className="fotograf-container">
          <img src={LinasBild} alt="Jalma Ingman" />
          <div className="fotograf-text-content">
            <h3>Lina Malmqvist</h3>
            <p className="fotografer-role">Fotograf</p>
            <p>
              Lina är nyast i gänget, en duktig fotograf med ett öga för att
              ställa upp hundar snyggt. Lina utgår från Ängelholm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photographers;
