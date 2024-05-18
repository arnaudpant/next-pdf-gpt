import { redirect } from "next/navigation";
import { auth } from "../../../auth";


const Page = async () => {

  const session = await auth();
  const user = session?.user

  if (!user) redirect('/redirect?origin=dasboard')

    return (
        <div>
            Hello
        </div>
    );
};

export default Page;