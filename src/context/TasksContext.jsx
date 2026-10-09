import { createContext } from "react";
import useTasks from "../hooks/useTasks";
import useIncompeteTaskScroll from "../hooks/useIncompleteTaskScroll";

export const TasksContext = createContext({});

export const TasksProvider = (props) => {
    const {children} = props;

    const {
        tasks,
        filteredTasks,
        deleteAllTasks,
        deleteTask,
        taskCompleteToggle,

        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disappearingTaskId,
        appearingTaskId,
    } = useTasks();

    const {
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    } = useIncompeteTaskScroll(tasks);

    return (
        <TasksContext.Provider
            value={{
                tasks,
                filteredTasks,
                firstIncompleteTaskRef,
                firstIncompleteTaskId,
                deleteAllTasks,
                deleteTask,
                taskCompleteToggle,

                newTaskTitle,
                setNewTaskTitle,
                searchQuery,
                setSearchQuery,
                newTaskInputRef,
                addTask,
                disappearingTaskId,
                appearingTaskId,
            }}
        >
            {children}
        </TasksContext.Provider>
    )
}