"use client";
import { buttonVariants } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const ButtonSignOut = () => {
    return (
        <form
            action={async () => {
                await signOut();
            }}
        >
            <button
                type="submit"
                className={buttonVariants({
                    size: "sm",
                    variant: "outline",
                })}
            >
                Déconnexion
            </button>
        </form>
    );
};

export default ButtonSignOut;