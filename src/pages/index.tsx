import Image from "next/image";
import Link from "next/link";
import { GithubLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react';
import { getBase64ImageUrl } from "../utils/getBase64ImageUrl";

export default function Home() {
  getBase64ImageUrl();

  return (
    <div className="flex flex-col w-screen h-screen">
      <header>
      
      </header>
      <main className="h-full flex flex-col items-center justify-center">
        <Image
          className="rounded-full"
          src={{ 
            src: "https://github.com/gustavojuneo.png", 
            height: 200, 
            width: 200 
          }}
          placeholder="blur"
          alt="Foto de Gustavo Juneo"
          blurDataURL="data:image/webp;base64,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" />
        <h1 className="text-2xl text-zinc-100 mt-6">Gustavo Juneo</h1>
      </main>
      <footer className="mt-auto py-4 px-2">
        <ul className="flex gap-2 items-center justify-center">
          <li>
            <Link
              className="text-zinc-100 flex gap-2 hover:text-[#333] transition" 
              href="https://github.com/gustavojuneo" 
              target="_blank">
              github <GithubLogo size={22} />
            </Link>
          </li>
          <li>
            <Link
              className="text-zinc-100 flex gap-2 hover:text-[#0077b5] transition" 
              href="https://github.com/gustavojuneo" 
              target="_blank">
              linkedin <LinkedinLogo size={22} />
            </Link>
          </li>
          <li>
            <Link
              className="text-zinc-100 flex gap-2 hover:text-[#e1306c] transition" 
              href="https://github.com/gustavojuneo" 
              target="_blank">
              instagram <InstagramLogo size={22} />
            </Link>
          </li>
        </ul> 
      </footer>
    </div>
  )
}
