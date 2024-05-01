"use client"

import { ArrowRight } from "lucide-react";
// import { signIn } from "../../auth";
import { buttonVariants } from "../components/ui/button";
import { signIn } from "next-auth/react";

const ButtonSignIn = () => {
    return (
        <form
            action={async () => {
                // "use server";
                await signIn();
            }}
        >
            <button
                type="submit"
                className={buttonVariants({
                    size: "sm",
                })}
            >
                Commencer <ArrowRight className="ml-1.5 h-5 w-5" />
            </button>
        </form>
    );
};

export default ButtonSignIn;
