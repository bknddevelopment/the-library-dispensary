import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Simple middleware - no longer performs any crawler detection or special routing
 * All visitors see the same content
 */

export function middleware(request: NextRequest) {
  // Simply pass through all requests without modification
  return NextResponse.next();
}

// Only run middleware on actual pages, not on static assets
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg|.*\\.webp|.*\\.ico|.*\\.pdf|.*\\.js|.*\\.css).*)',
  ],
}