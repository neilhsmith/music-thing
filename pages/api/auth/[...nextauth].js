import NextAuth from "next-auth";
import { Client as FaunaClient } from "faunadb";
import SpotifyProvider from "next-auth/providers/spotify";
import { FaunaAdapter } from "@next-auth/fauna-adapter";

const client = new FaunaClient({
  secret: process.env.FAUNA_SECRET,
  domain: process.env.FAUNA_DOMAIN,
});

const options = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_ID,
      clientSecret: process.env.SPOTIFY_SECRET,
    }),
  ],
  adapter: FaunaAdapter(client),
  callbacks: {
    redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url;
      // Allows relative callback URLs
      else if (url.startsWith("/")) return new URL(url, baseUrl).toString();
      return baseUrl;
    },
  },
};

export default NextAuth(options);
