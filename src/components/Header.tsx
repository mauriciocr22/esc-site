import bandImg from "../assets/band.jpg";
import {
  FacebookLogo,
  SpotifyLogo,
  YoutubeLogo,
  InstagramLogo,
} from "@phosphor-icons/react";

export function Header() {
  return (
    <div className="w-full relative h-screen p-2 flex text-white justify-center items-end">
      <div className="w-full h-full absolute top-0 left-0 z-0    after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black/60">
        <img
          className="w-full h-full relative object-cover "
          src={bandImg}
          alt=""
        />
      </div>
      <div className="p-6 z-10">
        <h1 className="font-bold text-[12rem] mb-5 leading-none">ESC</h1>
        <div className="flex flex-row w-full justify-around">
          <a href="https://www.facebook.com/escoficial/" target="_blank">
            <FacebookLogo size={36} />
          </a>
          <a
            href="https://open.spotify.com/artist/4bSbSpBEcTMqP16mYh7iyv?si=hrg4H7zASTCtmLItDL0VQw"
            target="_blank"
          >
            <SpotifyLogo size={36} />
          </a>
          <a href="https://www.instagram.com/escoficial/" target="_blank">
            <InstagramLogo size={36} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCToWfNIBkrJIEyqLBlYdC_Q"
            target="_blank"
          >
            <YoutubeLogo size={36} />
          </a>
        </div>
      </div>
    </div>
  );
}
