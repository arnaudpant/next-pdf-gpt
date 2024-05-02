"use client"

import { ArrowRight } from "lucide-react";
import { buttonVariants } from "../components/ui/button";
import { signIn } from "next-auth/react";

const ButtonSignIn = () => {
    return (
        <form
            action={async () => {
                await signIn();
            }}
        >
            <button
                type="submit"
                className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                })}
            >
                Se connecter
            </button>
        </form>
    );
};

export default ButtonSignIn;
