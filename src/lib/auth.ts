import { NextAuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import GoogleProvider from "next-auth/providers/google";
import { nanoid } from "nanoid";
import Cookies from "js-cookie";

const allowedEmails = process.env.ALLOWED_EMAILS!;

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({user}) {
      // console.log(user);
      const email = user.email as string

      console.log(allowedEmails.split("|").includes(email));
      
      if (allowedEmails.split("|").includes(email)) {
        console.log(true);
        
        return true;
      } else {
        console.log(false);
        return false;
      }
    },
    async redirect() {
      return "/admin";
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
