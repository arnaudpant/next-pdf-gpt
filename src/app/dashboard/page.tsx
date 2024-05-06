import { redirect } from "next/navigation";
import { auth } from "../../../auth";

const Page = async () => {
    const session = await auth();

    if (!session) redirect('/auth-callback?origin=dasboard')

    return (
        <div>Hello {session?.user?.name}</div>
    )
}

export default Page