import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { nanoid } from "nanoid";
import Cookies from "js-cookie";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import User, { IUser } from "@/models/userModel";
import connectDB from "./database";

connectDB();
const allowedEmails = process.env.ALLOWED_EMAILS!.split("|") as string[];

export const authOptions: NextAuthOptions = {
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
    async signIn({ user, account, profile, email, credentials }) {
      if (profile?.email && !allowedEmails.includes(profile.email))
        return false;
      if (account?.type === "oauth") {
        return await signInWithOAuth({ account, profile });
      }

      return true;
    },
    async jwt({ token, trigger, session }) {
      const user = await getUserByEmail({ email: token.email });

      token.user = user;

      return token;
    },
    session({ session, token }) {
      session.user = token.user as IUser;
      return session;
    },
    async redirect() {
      return "/admin";
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);

// --------------------------------------------
async function signInWithOAuth({
  account,
  profile,
}: {
  account: any;
  profile: any;
}) {
  const user = await User.findOne({ email: profile.email });

  if (user) return true; // signIn

  if (!allowedEmails.includes(profile.email)) return false;
  // if !user => sign up => sign in
  const newUser = new User({
    name: profile.name,
    email: profile.email,
    image: profile.picture,
    provider: account.provider,
  });

  console.log({ newUser });
  await newUser.save();
  return true;
}

async function getUserByEmail({ email }: { email: any }) {
  const user = await User.findOne({ email }).select("-password");

  if (!user) throw new Error("Email does not exist!");
  return { ...user._doc, _id: user._id.toString() };
}
