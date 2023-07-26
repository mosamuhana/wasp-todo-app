import { Task } from "@wasp/entities";
import { useAction } from "@wasp/actions";
import { useQuery } from "@wasp/queries";
import getTasks from "@wasp/queries/getTasks";
import updateTaskAction from "@wasp/actions/updateTask";

import { useTasks } from "./context";
import { TaskItem } from "./TaskItem";

export function TaskList() {
  const { filter } = useTasks();
  const { data: tasks, isLoading, error } = useQuery(getTasks, { filter });
  const updateTask = useAction(updateTaskAction);

  const onUpdate = (task: Task) => updateTask(task);

  if (isLoading) return "Loading...";
  if (error) return "Error: " + error;

  return (
    <div>
      {tasks.map((task) => <TaskItem key={task.id} task={task} onUpdate={onUpdate} />)}
    </div>
  );
}
