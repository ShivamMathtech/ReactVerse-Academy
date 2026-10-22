import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import type { ReactNode, Dispatch } from 'react';
import { isTasks, reducer } from './model';
import type { Task, Action } from './model';
const KEY = 'rv-studyflow-v1';
const Context = createContext<{
  tasks: Task[];
  dispatch: Dispatch<Action>;
  storageError: string;
} | null>(null);
function readTasks(): Task[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(KEY) || '[]');
    return isTasks(value) ? value : [];
  } catch {
    return [];
  }
}
export function PlannerProvider({ children }: { children: ReactNode }) {
  const [tasks, dispatch] = useReducer(reducer, undefined, readTasks);
  const [storageError, setStorageError] = useState('');
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(tasks));
      setStorageError('');
    } catch {
      setStorageError('Storage is unavailable. Your tasks will last only for this session.');
    }
  }, [tasks]);
  return <Context.Provider value={{ tasks, dispatch, storageError }}>{children}</Context.Provider>;
}
export function usePlanner() {
  const value = useContext(Context);
  if (!value) throw new Error('usePlanner requires PlannerProvider');
  return value;
}
