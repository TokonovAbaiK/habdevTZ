import { GitHubButton } from "@/components/GitHubButton";
import { SignInForm } from "@/components/SignInForm";

export default async function SignIn(){
    return(
        <div className="signIn">
            <div className="sign_q">
                <h1>Sign In</h1>
                <GitHubButton/>
                <p>or</p>
                <SignInForm/>
            </div>
        </div>
    )
}