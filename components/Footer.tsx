import Link from "next/link";
import {BsDiscord, BsGithub} from "react-icons/bs";
import {GiCoffeeBeans} from "react-icons/gi";

export default function Footer() {
    return (
        <>
            <footer className="footer p-10 bg-black text-neutral-content flex justify-between">
                <div>
                    <Link href={"/"} className="flex normal-case text-xl ml-3">
                        <GiCoffeeBeans className={"w-8 h-8"} />
                    </Link>
                    <p>Beans Technologies</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <Link href={"https://github.com/BeansTechnologies"} target={"_blank"} rel={"nofollow"}>
                            <BsGithub className={"w-8 h-8"} />
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}