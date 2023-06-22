import { Link } from "react-router-dom";

export default function HomeComponent() {
  return (
    <div className="isolate bg-white">
      <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
        <div className="hero-puff">
          <h1 className="heading-text text-4xl font-bold tracking-tight text-center sm:text-6xl">
            Aussie&shy;galleriet
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
            Ett online fotogalleri för Sveriges australian shepherds!
          </p>
          <div className="mt-8 flex gap-x-4 justify-center">
            <Link
              to="/dogs"
              className="inline-block rounded-lg bg-stone-600 px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-stone-600 hover:bg-stone-700 hover:ring-strone-700"
            >
              Till galleriet
              <i className="text-stone-200" aria-hidden="true">
                &rarr;
              </i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
