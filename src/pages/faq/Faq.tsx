import FaqText from "./FaqText";
import hund from "../../images/hund2.jpg";

const Faq = () => {
  return (
    <main>
      <section aria-label="Vanliga frågor" className="faq-container">
        <div className="faq-text-container">
          <h2 className="faq-title">Vanliga frågor</h2>
          <p className="faq-p">
            Här är de vanligaste frågorna, undrar ni någonting som inte finns
            med? Kontakta oss gärna så kan vi hjälpa dig!
          </p>
        </div>
        <div className="accordion-container">
          <FaqText />
        </div>
      </section>
      <div className="relative">
        <img className="object-cover w-full h-60 sm:h-96" src={hund} alt="" />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-0" />
      </div>
    </main>
  );
};

export default Faq;
