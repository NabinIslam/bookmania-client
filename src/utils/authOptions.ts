/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        try {
          const res = await fetch("http://localhost:5000/api/v1/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          if (!res.ok) {
            throw new Error("Invalid email or password");
          }

          const data = await res.json();

          return {
            id: data.payload.token,
            email: credentials.email,
            token: data.payload.token,
          };
        } catch (error) {
          throw new Error("Login failed");
        }
      },
    }),
  ]
};
