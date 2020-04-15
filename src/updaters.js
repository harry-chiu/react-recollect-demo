import { store } from 'react-recollect';

export const addTask = task => {
    store.tasks.push({
        text: task,
        completed: false,
    });
};

export const handleCompleted = index => {
    store.tasks[index].completed = !store.tasks[index].completed;
};

export const completeAll = (checked) => {
    if (!checked) {
        store.tasks.forEach(task => task.completed = true);
    } else {
        store.tasks.forEach(task => task.completed = false);
    }
};

export default {
    addTask,
    handleCompleted,
    completeAll,
};