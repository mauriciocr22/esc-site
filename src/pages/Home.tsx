import { Header } from "../components/Header";
import { Socials } from "../components/Socials";

import logoImg from "../assets/logo-w.png";

export function Home() {
  return (
    <>
      <Header />
      <main className="w-full max-w-[1200px] my-0 mx-auto py-8 mt-[1rem] gap-12 text-white">
        <div className="flex justify-center mb-12">
          <nav className="font-bold font-lexend flex gap-20 text-2xl ">
            <a
              className="hover:underline"
              href="https://www.instagram.com/escoficial/"
              target="_blank"
            >
              INSTAGRAM
            </a>
            <a
              className="hover:underline"
              href="https://www.youtube.com/channel/UCToWfNIBkrJIEyqLBlYdC_Q"
              target="_blank"
            >
              YOUTUBE
            </a>
            <a
              className="hover:underline"
              href="https://open.spotify.com/artist/4bSbSpBEcTMqP16mYh7iyv?si=hrg4H7zASTCtmLItDL0VQw"
              target="_blank"
            >
              SPOTIFY
            </a>
          </nav>
        </div>
        <section className="mx-4 mb-16 flex items-center">
          <div className="flex flex-col items-start mb-6 md:w-1/2">
            <h1 className="text-4xl mb-4 font-lexend">Lorem ipsum dolor</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              dolores deserunt optio quae delectus velit porro pariatur quaerat
              sint totam obcaecati soluta quam, at alias? Provident obcaecati
              iusto at pariatur.
            </p>
          </div>
          <iframe
            className="md:w-1/2"
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
            src="https://www.youtube.com/embed/videoseries?list=PL40F4890AC1C40C87"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </section>
      </main>
      <footer className="w-full text-white h-[200px] bg-[#242424]">
        <div className="max-w-[1200px] p-6 my-0 mx-auto flex justify-between">
          {/* <h1 className="text-6xl">ESC</h1> */}
          <img className="w-3/12 p-4" src={logoImg} alt="" />
          <div>
            <div className="w-[22rem] py-2">
              <h1 className="text-xl font-lexend mb-2">
                Siga-nos em nossas redes sociais
              </h1>
              <Socials />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
