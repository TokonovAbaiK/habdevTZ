"use client"
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
    </>
  )
}

export {Navigation}