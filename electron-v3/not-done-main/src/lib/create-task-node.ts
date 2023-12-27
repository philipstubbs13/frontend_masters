/* eslint-disable @typescript-eslint/no-empty-function */

type TaskMethods = {
  onToggle: (id: string) => Promise<void>;
  onRemove: (id: string) => Promise<void>;
};

export function createTaskNode(
  task: Task,
  methods: TaskMethods = {
    onToggle: async () => {},
    onRemove: async () => {},
  },
): HTMLLIElement {
  const { id, completed, title } = task;

  const taskNode = document.createElement('li');
  taskNode.id = `task-${id}`;
  taskNode.className = 'task';
  taskNode.dataset.task = id;

  // Create the div that will contain the checkbox and label
  const div = document.createElement('div');
  div.className = 'task-title';

  // Create the input element and set its type, id, and checked properties
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = `task-${id}-checkbox`;
  input.checked = completed;

  // Create the label element, set its "for" attribute, and set its content
  const label = document.createElement('label');
  label.htmlFor = `task-${id}-checkbox`;
  label.textContent = title;

  // Create the delete button with a class of "delete"
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete';
  deleteButton.textContent = '🗑';

  // Append the input and label to the div
  div.appendChild(input);
  div.appendChild(label);

  // Append the div and delete button to the main li element
  taskNode.appendChild(div);
  taskNode.appendChild(deleteButton);

  input.addEventListener('change', (event) => {
    event.preventDefault();
    methods.onToggle(id);
  });

  deleteButton.addEventListener('click', (event) => {
    event.preventDefault();
    methods.onRemove(id).then(() => {
      taskNode.remove();
    });
  });

  return taskNode;
}
