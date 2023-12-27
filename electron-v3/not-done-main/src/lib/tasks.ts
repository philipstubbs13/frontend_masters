import { createTaskNode } from './create-task-node';
import { taskList } from './elements';

export const toggleTask = async (
  id: string,
  // node: HTMLLIElement,
): Promise<void> => {
  console.log(`Toggling task ${id}`);
};

export const removeTask = async (
  id: string,
  // node: HTMLLIElement,
): Promise<void> => {
  console.log(`Removing task ${id}`);
};

const callbacks = {
  onToggle: toggleTask,
  onRemove: removeTask,
};

export const addTaskToList = (task: Task): void => {
  const taskNode = createTaskNode(task, callbacks);

  taskList.appendChild(taskNode);
};

export const addAllTasksToList = (tasks: Task[]): void => {
  const taskNodes = tasks.map((task) => createTaskNode(task, callbacks));
  taskList.replaceChildren(...taskNodes);
};
