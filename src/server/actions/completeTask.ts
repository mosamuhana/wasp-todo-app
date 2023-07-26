import { Task } from "@wasp/entities";
import { CompleteTask } from "@wasp/actions/types";
import HttpError from "@wasp/core/HttpError.js";

type CompleteTaskInput = Pick<Task, "id">;

export const completeTask: CompleteTask<CompleteTaskInput, Task> = async (
  { id },
  { user, entities: { Task } }
) => {
  if (!user) {
    throw new HttpError(401);
  }

  const task = await Task.findUnique({ where: { id } });

  if (!task || task.userId !== user.id) {
    throw new HttpError(403);
  }

  return Task.update({
    where: { id },
    data: { isDone: true },
  });
};
