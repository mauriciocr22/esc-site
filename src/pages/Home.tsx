import { Header } from "../components/Header";

export function Home() {
  return (
    <>
      <Header />
      <main className="w-full max-w-[1200px] my-0 mx-auto py-8 mt-[6rem] gap-12 text-white">
        <section className="mx-4 mb-16 flex items-center flex-col">
          <div className="flex flex-col items-center text-center mb-6 md:w-7/12">
            <h1 className="text-4xl mb-4 font-lexend">Lorem ipsum dolor</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate at similique suscipit id
            </p>
          </div>
          <iframe
            style={{ borderRadius: "12px", maxWidth: "900px" }}
            src="https://open.spotify.com/embed/artist/4bSbSpBEcTMqP16mYh7iyv?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </section>
        <section className="mx-4 flex items-center flex-col mt-[8rem]">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-4xl mb-4 font-lexend">Lorem ipsum dolor</h1>
          </div>
          <iframe
            className="md:h-[500px]"
            style={{ borderRadius: "12px", maxWidth: "900px" }}
            width="100%"
            height="250px"
            src="https://www.youtube.com/embed/WrR5nQ_TRjI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </section>
      </main>
    </>
  );
}
