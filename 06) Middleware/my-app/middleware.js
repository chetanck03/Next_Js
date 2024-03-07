import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    return NextResponse.json({ message :"Hello World !!"})
  return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more to redirecting the path
export const config = {
  matcher: '/about/:path*',
}