import { loginUser } from "@/entities";

export const login = async (email, password) => {
  return await loginUser(email, password);
};
