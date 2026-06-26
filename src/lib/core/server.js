import { baseUrl } from "../baseUrl";

export const serverFetch = async (path) => {
  const res = await fetch(`${baseUrl}${path}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
};

export const serverMutation = async (path, method, data) => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};
