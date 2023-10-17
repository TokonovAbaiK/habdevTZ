import { users } from "@/data/users";
import { Session } from "inspector";
import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";


export  const authConfig: AuthOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_CLIENT_ID !,
            clientSecret: process.env.GITHUB_SECRET !,
        }),
        Credentials({
            credentials: {
                email: {label: 'email' , type: 'email' , required: true},
                password: {label: 'password' , type: 'password' , required: true}
            },
            async authorize (credentials) {
                if(!credentials?.email || !credentials.password) return null

                const currentUser = users.find(user => user.email === credentials.email)

                if(currentUser && currentUser.password === credentials.password){
                    const {password, ...userWithoutPass} = currentUser

                    return userWithoutPass as User
                }

                return null
            }
        })
    ],
     pages:{
        signIn: '/signin'
    },
}