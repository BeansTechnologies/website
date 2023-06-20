import Image from 'next/image'
import Link from "next/link";
import {FaTools} from "react-icons/fa";

export default function Home() {

  return (
    <div className={"flex flex-col"}>
        {/*<div className={"w-full h-full z-[1] max-w-[340px] pointer-events-none max-h-[330px] gradient absolute top-0 -translate-x-1/2 left-1/2 opacity-100 blur-[150px] translate-y-2/3"}></div>*/}

        <main className="flex items-center justify-between p-5 sm:p-16 text-zinc-200 w-full bg-black z-[2]">
            <div className="flex flex-col items-center justify-center w-full">
                <div className={"flex flex-col bg-bgSVG bg-no-repeat bg-center justify-center items-center h-[400px]"}>
                    <h1 className={"font-extrabold text-5xl md:text-6xl lg:text-7xl p-2 text-center gradient-title"}>Beans Technologies</h1>
                    <p className={"text-center mt-3 font-semibold text-xl w-[95%]"}>High-quality open-source software solution for web developers.</p>
                    <div className={"mt-5"}>
                        <Link href={""} target={"_blank"} rel={"nofollow"}>
                            <button className="btn bg-white text-black hover:bg-gray-200 border-none transition-colors duration-200 ease-in-out">Visit github</button>
                        </Link>
                    </div>
                </div>

                <Link href={"https://docs.beanstech.tech"}>
                    <div className="grid mt-10 gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:px-[12rem]">
                        <div className={"flex flex-col bg-accent2 p-4 rounded-lg border-2 border-purple-400 shadow-lg shadow-purple-500 cursor-pointer"}>
                            <h2 className={"font-bold text-2xl text-purple-500 flex flex-row items-center"}><FaTools className={"w-5 h-5 mr-2"}/> Tools</h2>
                            <p>Our toolset includes a variety of features such as converters for color, temperature, and numeric systems, as well as date and text functions, validators, and other useful utilities.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </main>
    </div>
  )
}
