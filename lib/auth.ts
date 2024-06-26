import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';
import prisma from '@/prisma/client';

export const authConfig: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,

	providers: [
		CredentialsProvider({
			name: "credentials",

			credentials: {
				email: { label: "Email", type: "email", placeholder: "fulanodetal@email.com" },
				username: { label: "Username", type: "text", placeholder: "Fulano" },
				password: { label: "Password", type: "password", placeholder: "Password" },
			},

			async authorize(credentials, _request) {
				if (!credentials || !credentials.password || !credentials.email || !credentials.password)
					throw new Error("All fields are required.")

				let dbUser: any = await prisma.user.findUnique({
					where: { email: credentials.email },
				})

				if (!dbUser) {
					dbUser = await prisma.user.create({
						data: {
							email: credentials.email,
							username: credentials.username,
							password: credentials.password,
						}
					})
				} else {
					throw new Error("User already exists.")
				}

				const user = {
					id: dbUser.id,
					email: dbUser.email,
					username: dbUser.username,
					createdAt: dbUser.createdAt,
					updatedAt: dbUser.updatedAt,
				};

				return user
			},
		}),
	],

	session: {
		strategy: "jwt",
		maxAge: 10,
		updateAge: 5,
	},
}
