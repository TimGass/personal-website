import { NextResponse } from 'next/server'
export function middleware(req) {
    const { pathname } = req.nextUrl;
    if (pathname === '/') {
        return NextResponse.redirect(new URL('/portfolio', req.url));
    }
    return NextResponse.next()
}