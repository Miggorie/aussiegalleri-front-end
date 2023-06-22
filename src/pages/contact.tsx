import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Kontakta oss
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Har du några frågor kring vår verksamhet eller vart vi ska fota
              nästa gång? Kontakta oss genom att skick ett mejl till
              <Link to="mailto:info@aussiegalleri.se">
                info@aussiegalleri.se
              </Link>{" "}
              så hjälper vi dig! så hjälper vi dig!
            </p>

            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <Link
                to="mailto:info@aussiegalleri.se"
                className="text-stone-600"
              >
                info@aussiegalleri.se
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
