import { createUser } from "@/entities";

export const register = async (user) => {
  return await createUser(user);
};
