let counter = 0;
let prefix = 'html-id-' + Math.random().toString(16).split('.')[1];

export function generateId() {
  return prefix + '-' + (counter++);
}