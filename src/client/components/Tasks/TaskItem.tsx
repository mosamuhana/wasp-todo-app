import { Task } from "@wasp/entities";

type Props = {
  task: Task;
  onUpdate: (task: Task) => void;
};

export function TaskItem({ task, onUpdate }: Props) {
  const toggleDone = (task: Task) => {
    onUpdate({ ...task, isDone: !task.isDone });
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg">
      <div>{task.description}</div>
      <div>
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => toggleDone(task)}
        />
      </div>
    </div>
  );
}
