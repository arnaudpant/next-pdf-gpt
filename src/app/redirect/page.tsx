import { Divide } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {

    const router = useRouter()
    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')
    return (
        <div>Redirect</div>
    )
}

export default Page;