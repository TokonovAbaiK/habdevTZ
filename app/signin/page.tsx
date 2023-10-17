import { GitHubButton } from "@/components/GitHubButton";
import { SignInForm } from "@/components/SignInForm";

export default async function SignIn(){
    return(
        <div>
            <GitHubButton/>
            <SignInForm/>
        </div>
    )
}