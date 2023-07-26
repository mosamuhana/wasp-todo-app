import { Task } from "@wasp/entities";
import { CreateTask } from "@wasp/actions/types";
import HttpError from "@wasp/core/HttpError.js";

type CreateTaskInput = Pick<Task, "description">;

export const createTask: CreateTask<CreateTaskInput, Task> = async (
  { description },
  { user, entities: { Task } }
) => {
  if (!user) {
    throw new HttpError(401);
  }

  return Task.create({
    data: {
      description,
      isDone: false,
      user: { connect: { id: user.id } },
    },
  });
};
