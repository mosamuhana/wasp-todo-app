import { Task } from "@wasp/entities";
import { useAction } from "@wasp/actions";
import { useQuery } from "@wasp/queries";
import getTasks from "@wasp/queries/getTasks";
import updateTaskAction from "@wasp/actions/updateTask";

import { useTasks } from "./context";

export function TaskList() {
  const { filter } = useTasks();
  const { data: tasks, isLoading, error } = useQuery(getTasks, { filter });
  const updateTask = useAction(updateTaskAction);

  const toggleDone = (task: Task) => {
    updateTask({ ...task, isDone: !task.isDone });
  };

  if (isLoading) return "Loading...";
  if (error) return "Error: " + error;

  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg"
        >
          <div>{task.description}</div>
          <div>
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={() => toggleDone(task)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
