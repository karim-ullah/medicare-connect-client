import { headers } from "next/headers";
import { auth } from "../auth";
import { baseUrl } from "../baseUrl";

export const serverFetch = async (path) => {
  const res = await fetch(`${baseUrl}${path}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
};

export const serverMutation = async (path, method, data) => {

 const {token} = await auth.api.getToken({
  headers: await headers()
 })


// console.log(token, 'token');

  const res = await fetch(`${baseUrl}${path}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return res.json();
};
