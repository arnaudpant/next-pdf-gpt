import { buttonVariants } from "./button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


const ButtonStart = () => {
    return (
        <Link
            href="/dashboard"
            className={buttonVariants({
                size: "sm",
                variant: "pdf",
            })}
        >
            Commencer <ArrowRight className="ml-1.5 h-5 w-5" />
        </Link>
    );
};

export default ButtonStart;