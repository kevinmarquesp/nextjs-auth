import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getSession, updateSession } from "next-auth/react"

export async function middleware(_request: NextRequest) {
	console.log('Hello world from middleware!')

	return NextResponse.next()
}

export const config = {
	matcher: '/',
}
