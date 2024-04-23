/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-template */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
// This is an example of a third-party store
// that you might need to integrate with React.

// If your app is fully built with React,
// we recommend using React state instead.

// let nextId = 0;
let todos = 1;
let listeners = [];

export const todosStore = {
  addTodo() {
    todos = todos + 1;
    emitChange();
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  },
};

function emitChange() {
  for (let listener of listeners) {
    console.log(listener);
    listener();
  }
}
