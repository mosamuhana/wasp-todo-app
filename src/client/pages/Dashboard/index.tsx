import { TaskList } from "./TaskList";
import { TaskFilters } from "./TaskFilters";
import { NewTask } from "./NewTask";
import { TasksProvider } from "./context";

export default function DashboardPage() {
  return (
    <TasksProvider>
      <div className="p-4">
        <NewTask />
        <TaskFilters />
        <TaskList />
      </div>
    </TasksProvider>
  );
}
