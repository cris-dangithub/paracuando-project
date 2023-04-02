import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === 'development') {
    //return NextResponse.next();
  }

  const jwt = request.cookies.get('token');

  // Protecte routes with JWT
  if (!jwt /* && protectWithoutJWT.includes(pathname) */) {
    return NextResponse.redirect(new URL('/log-in', request.url));
  }

  // Protect Login and Signup routes if user exists

  return NextResponse.next();
  // try {
  //   const { payload } = await jwtVerify(
  //     jwt.value,
  //     new TextEncoder().encode(process.env.SECRET_JWT)
  //   );

  //   return NextResponse.next();
  // } catch (error) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }
}

export const config = {
  matcher: ['/profile/:path*', '/create-event'],
};
