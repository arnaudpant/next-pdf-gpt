import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import ButtonSignIn from "../auth/ButtonSignIn";
import ButtonSignOut from "@/auth/ButtonSignOut";
import { auth } from "../../auth";


const Navbar = async () => {
    const session = await auth();

    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-md transition-all">
            <MaxWidthWrapper>
                {/* LOGO */}
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href="/" className="flex z-40 font-semibold">
                        <span className="text-orange-600">PdfGPT</span>
                    </Link>

                    {/* MENU DROITE */}
                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link
                                href="/pricing"
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "sm",
                                })}
                            >
                                Tarifs
                            </Link>
                            <LoginLink
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "sm",
                                })}
                            >
                                Se connecter
                            </LoginLink>
                            {session?.user ? (
                                <ButtonSignOut />
                            ) : (
                                <ButtonSignIn />
                            )}
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};

export default Navbar;
