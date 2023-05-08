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
                className="text-stone-500"
              >
                info@aussiegalleri.se
              </Link>
              <p className="leading-normal my-5">Sverige</p>
              <span className="inline-flex">
                <a
                  href="https://www.facebook.com/aussiegalleri"
                  className="text-gray-500"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/aussiegalleri/"
                  className="ml-4 text-gray-500"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
