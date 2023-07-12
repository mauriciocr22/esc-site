import { SpotifyLogo, YoutubeLogo, InstagramLogo } from "@phosphor-icons/react";

export function Socials() {
  return (
    <div className="flex flex-row w-full gap-6">
      <a
        className="hover:text-green-600 transition-colors"
        href="https://open.spotify.com/artist/4bSbSpBEcTMqP16mYh7iyv?si=hrg4H7zASTCtmLItDL0VQw"
        target="_blank"
      >
        <SpotifyLogo size={40} />
      </a>
      <a
        className="hover:text-green-600 transition-colors"
        href="https://www.instagram.com/escoficial/"
        target="_blank"
      >
        <InstagramLogo size={40} />
      </a>
      <a
        className="hover:text-green-600 transition-colors"
        href="https://www.youtube.com/channel/UCToWfNIBkrJIEyqLBlYdC_Q"
        target="_blank"
      >
        <YoutubeLogo size={40} />
      </a>
    </div>
  );
}
