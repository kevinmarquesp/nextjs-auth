import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';
import prisma from '@/prisma/client';

export const authConfig: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Email",

			credentials: {
				email: { label: "Email", type: "email", placeholder: "fulanodetal@email.com" },
				username: { label: "Username", type: "text", placeholder: "Fulano" },
				password: { label: "Password", type: "password", placeholder: "Password" },
			},

			async authorize(credentials, _request) {
				if (!credentials || !credentials.password || !credentials.email || !credentials.password)
					return null

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
					return null
				}

				const user = {
					id: dbUser.id,
					email: dbUser.email,
					username: dbUser.username,
					createdAt: dbUser.createdAt,
					updatedAt: dbUser.updatedAt,
				};

				console.log(user)

				return user
			},
		}),
	],
}
