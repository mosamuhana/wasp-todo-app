import { createContext, useContext, useState } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';

import { Filter } from "../../../shared/types";

type TasksContextType = {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
};

const TasksContext = createContext<TasksContextType>({
  filter: Filter.All,
  setFilter: () => {},
});

export const useTasks = () => useContext(TasksContext);

type Props = {
  children: ReactNode;
};

export const TasksProvider = ({ children }: Props) => {
  const [filter, setFilter] = useState<Filter>(Filter.All);

  return (
    <TasksContext.Provider value={{ filter, setFilter }}>
      { children }
    </TasksContext.Provider>
  );
};
