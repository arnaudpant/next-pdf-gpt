"use client";
import { signOut } from "next-auth/react";

const ButtonSignOut = () => {
    return (
        <form
            action={async () => {
                await signOut();
            }}
        >
            <button type="submit">Déconnexion</button>
        </form>
    );
};

export default ButtonSignOut;