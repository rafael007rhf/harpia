import type { NextAuthConfig } from "next-auth"

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnLoginPage = nextUrl.pathname.startsWith("/login")

      if (!isLoggedIn && !isOnLoginPage) {
        return Response.redirect(new URL("/login", nextUrl))
      }
      if (isLoggedIn && isOnLoginPage) {
        return Response.redirect(new URL("/dashboard", nextUrl))
      }
      return true
    },
  },
  providers: [],
}
