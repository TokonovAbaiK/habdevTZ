"use client"
import { signIn } from "next-auth/react"
import { useParams, useSearchParams } from "next/navigation"

const GitHubButton = () => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/profile'
  return (
    <button className="button" onClick={() => signIn("github" , {callbackUrl})}>
        Sign in with GitHub
    </button>
  )
}

export {GitHubButton} 