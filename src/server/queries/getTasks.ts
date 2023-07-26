import { Task } from "@wasp/entities";
import { GetTasks } from "@wasp/queries/types";
import HttpError from "@wasp/core/HttpError.js";

type GetTasksInput = { filter?: string } | undefined;

export const getTasks: GetTasks<
  GetTasksInput,
  Task[]
> = async (args, { user, entities: { Task } }) => {
  if (!user) {
    throw new HttpError(401);
  }

  return Task.findMany({
    where: {
      userId: user.id,
      isDone: getDone(args?.filter),
    }
  });
};

function getDone(filter: string | undefined | null): boolean | undefined {
  switch (filter) {
    case 'Completed':
      return true;
    case 'Uncompleted':
      return false;
    case 'All':
    default:
      return undefined;
  }
}
