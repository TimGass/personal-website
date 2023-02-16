import { NextResponse } from 'next/server'
export async function middleware(req, ev) {
    const { pathname } = req.nextUrl;
    const url = req.nextUrl.clone() 
    if (pathname == '/') {
        url.pathname = "/portfolio";
        return NextResponse.redirect(url);
    }
    return NextResponse.next()
}