import { Task } from "@wasp/entities";
import { UpdateTask } from "@wasp/actions/types";
import HttpError from "@wasp/core/HttpError.js";

type TaskData = Pick<Task, "description" | "isDone">;

type UpdateTaskInput = Pick<Task, "id"> & Partial<TaskData>;

export const updateTask: UpdateTask<UpdateTaskInput, Task> = async (
  input,
  { user, entities: { Task } }
) => {
  if (!user) {
    throw new HttpError(401);
  }

  const { id, ...data } = input;
  const task = await Task.findUnique({ where: { id } });

  if (!task || task.userId !== user.id) {
    throw new HttpError(403);
  }

  if (!Object.keys(data).length) return task;

  return Task.update({
    where: { id },
    data,
  });
};
