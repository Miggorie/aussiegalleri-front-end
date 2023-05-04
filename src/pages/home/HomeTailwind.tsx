export default function HomeComponent() {
  return (
    <div className="isolate bg-white">
      <main className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div className="bg-white pt-14 pb-14 p-8 rounded-full">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-center sm:text-6xl">
                  Aussiegalleriet
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
                  Ett online fotogalleri för Sveriges australian shepherds!
                </p>
                <div className="mt-8 flex gap-x-4 justify-center">
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-stone-600 px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-stone-600 hover:bg-stone-700 hover:ring-strone-700"
                  >
                    Till galleriet{" "}
                    <span className="text-stone-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
