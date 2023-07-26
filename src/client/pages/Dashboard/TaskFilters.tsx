import { Filter } from "../../../shared/types";
import { useTasks } from "./context";

export function TaskFilters() {
  return (
    <div className="mb-4 flex gap-10">
      <TaskFilter value={Filter.All} />
      <TaskFilter value={Filter.Completed} />
      <TaskFilter value={Filter.Uncompleted} />
    </div>
  );
}

function TaskFilter({ value }: { value: Filter; }) {
  const { filter, setFilter } = useTasks();

  return (
    <label className="flex gap-2 items-center">
      <input
        type="radio"
        value={value}
        checked={filter === value}
        onChange={() => setFilter(value)}
      />
      <span>{ value }</span>
    </label>
  );
}