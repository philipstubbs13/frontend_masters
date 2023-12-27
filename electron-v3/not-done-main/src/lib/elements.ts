export const newTaskForm = document.getElementById('new-task');

export const newTaskTitle = document.getElementById(
  'new-task-title',
) as HTMLInputElement;

export const submitButton = document.getElementById(
  'submit-new-task',
) as HTMLButtonElement;

export const taskList = document.getElementById('task-list');

newTaskTitle.addEventListener('input', (event) => {
  event.preventDefault();

  const title = newTaskTitle.value;

  if (title.length > 0) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled');
  }
});
