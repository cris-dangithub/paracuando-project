import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }

  const jwt = request.cookies.get('token');

  if (!jwt) {
    return NextResponse.redirect(new URL('/log-in', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/profile/:path*', '/create-event'],
};
