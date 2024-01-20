import { Task } from "@/types/types";
import client from "./client";

const localfetch = async (path: string): Promise<Task[] | undefined> => {
  if (path === "/tasks") {
    return await client.get(path);
  }

  return undefined;
};

export default localfetch;
