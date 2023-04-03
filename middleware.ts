import { NextRequest, NextResponse } from 'next/server';
import { getConfig } from './lib/helpers/getConfig';
import { routeChecker } from './lib/helpers/middleware.helpers';
import { BASE_URL } from './lib/services/BASE_URL';

export async function middleware(request: NextRequest) {
  const protectWithJWT = ['/profile/:path*', '/create-event'];
  const protectWithoutJWT = ['/log-in', '/sign-up'];
  const pathname = request.nextUrl.pathname;
  const response = NextResponse.next();
  if (process.env.NODE_ENV === 'development') {
    //return NextResponse.next();
  }

  const jwt = request.cookies.get('token');

  // Verificar que el token sea válido
  if (jwt?.value) {
    const user = await fetch(`${BASE_URL}/auth/me`, getConfig(jwt?.value));
    if (!user.ok) response.cookies.delete('token');
  }

  // Si el usuario es váido e intenta entrar a los logeos
  if (jwt?.value && routeChecker(pathname, protectWithoutJWT)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Si usuario no válido, analizar rutas que necesitan de protección de usuario
  if (!jwt?.value && routeChecker(pathname, protectWithJWT)) {
    return NextResponse.redirect(new URL('/log-in', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/profile/:path*', '/create-event', '/log-in', '/sign-up'],
};
