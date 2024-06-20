import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
	console.debug('Hello world from middleware!', request.url)

	return NextResponse.next()
}

export const config = {
	matcher: '/(!?_next/static)',
}
