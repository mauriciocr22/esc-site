import bandImg from "../assets/band.png";
import logoImg from "../assets/logo-w.png";

export function Header() {
  return (
    <header className="w-full relative h-96 md:h-screen p-2 flex text-white justify-center items-end">
      <div className="w-full h-full absolute top-0 left-0 z-0 after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black/60">
        <img
          className="w-full h-full relative object-cover "
          src={bandImg}
          alt=""
        />
      </div>
      <div className="p-6 z-10 w-2/5 min-w-[400px]">
        {/* <h1 className="font-bold text-[12rem] mb-5 leading-none">ESC</h1> */}
        <img className="mb-4" src={logoImg} alt="" />
        {/* <Socials /> */}
      </div>
    </header>
  );
}
