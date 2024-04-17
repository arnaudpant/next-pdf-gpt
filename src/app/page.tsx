import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
                <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop:blur transition-all hover:border-gray-300 hover:bg-white/50">
                    <p className="text-sm font-semibold text-gray-700">
                        PdfGPT est en ligne
                    </p>
                </div>
                <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
                    Tchat avec ton <span className="text-orange-600">PDF</span>
                </h1>
                <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
                    PdfGPT vous permets de discuter avec n&apos; importe quel
                    document PDF. Téléchargez votre document et commencez à lui
                    poser des questions.
                </p>
                <Link
                    href="/dashboard"
                    className={buttonVariants({
                        variant: "default",
                        size: "lg",
                        className: "mt-5",
                    })}
                >
                    Commencez <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </MaxWidthWrapper>

            <div>
                <div className="relative isolate">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                    </div>
                    <div>
                        <div className="mx-auto max-w-6xl px-6 lg:px-8">
                            <div className="mt-16 flow-root sm:mt-24">
                                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                    <Image
                                        src="/dashboard-preview.jpg"
                                        alt="product preview"
                                        width={1364}
                                        height={866}
                                        quality={100}
                                        className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                    </div>
                </div>
            </div>
            {/* Feature section */}
            <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
                <div className="mb-12 px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
                            Commencez le tchat dans quelques minutes
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Tchatter avec votre fichier PDF n&apos;a jamais été
                            aussi simple avec PdfGPT.
                        </p>
                    </div>
                </div>
                {/* steps */}
                <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
                    <li className="md:flex-1">
                        <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                            <span className="text-sm font-medium text-blue-600">
                                Etape 1
                            </span>
                            <span className="text-xl font-semibold">
                                Créer un compte
                            </span>
                            <span className="mt-2 text-zinc-700">
                                Soit vous commencez avec un forfait gratuit,
                                soit vous choisissez notre{" "}
                                <Link
                                    href="/pricing"
                                    className="text-blue-700 underline underline-offset-2"
                                >
                                    plan pro
                                </Link>
                                .
                            </span>
                        </div>
                    </li>
                    <li className="md:flex-1">
                        <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                            <span className="text-sm font-medium text-blue-600">
                                Etape 2
                            </span>
                            <span className="text-xl font-semibold">
                                Téléchargez votre fichier PDF
                            </span>
                            <span className="mt-2 text-zinc-700">
                                Nous traiterons votre dossier et le préparerons
                                pour que vous puissiez discuter avec lui.
                            </span>
                        </div>
                    </li>
                    <li className="md:flex-1">
                        <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                            <span className="text-sm font-medium text-blue-600">
                                Etape 3
                            </span>
                            <span className="text-xl font-semibold">
                                Commencez à poser des questions
                            </span>
                            <span className="mt-2 text-zinc-700">
                                C&apos;est si simple. Essayez PdfGPT
                                aujourd&apos;hui – cela prend vraiment moins
                                d&apos;une minute.
                            </span>
                        </div>
                    </li>
                </ol>
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="mt-16 flow-root sm:mt-24">
                        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                            <Image
                                src="/file-upload-preview.jpg"
                                alt="uploading preview"
                                width={1419}
                                height={732}
                                quality={100}
                                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
