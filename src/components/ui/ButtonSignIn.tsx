import { ArrowRight } from "lucide-react";
import { signIn } from "../../../auth";
import { buttonVariants } from "./button";

const ButtonSignIn = () => {
    return (
        <form
            action={async () => {
                "use server";
                await signIn("github");
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
