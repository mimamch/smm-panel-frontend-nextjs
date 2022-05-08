import axios from "axios";
import jwtDecode from "jwt-decode";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "username" },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req, ...props) {
        try {
          const res = await axios.post(
            "https://api.mimamch.online/api/v1/user/login",
            credentials
          );

          const user = jwtDecode(res.data.token);
          user.token = res.data.token;
          return user;
        } catch (e) {
          return Promise.reject(Error(e.response.data.msg));
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ session, token, user, ...props }) {
      // Persist the OAuth access_token to the token right after signin
      //   console.log(token, account);
      if (user) {
        token = user;
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token, user, ...props }) {
      // Send properties to the client, like an access_token from a provider.
      //   session.accessToken = token.accessToken;
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
});
