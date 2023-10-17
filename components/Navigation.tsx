"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

type NavLink = {
    label: string
    href: string
}
type Props = {
    navLink: NavLink[]
}

const Navigation = ({navLink}: Props) => {
    const session = useSession()
    console.log(session)
    return (
        <>
            {navLink.map((link) => (
                <Link
                    key={link.label}
                    href={link.href}
                >
                    {link.label}
                </Link>
            ))}
            {session?.data &&(
                <Link href='/profile'>Profile</Link>
            )}
            {session?.data ? ( 
            <Link
             href='#' 
             onClick={() => signOut({callbackUrl: '/'})}>
                Sign out
            </Link>
             ) : (
             <Link href='/signin'>Sign in</Link>
             )}
        </>
  )
}

export {Navigation}