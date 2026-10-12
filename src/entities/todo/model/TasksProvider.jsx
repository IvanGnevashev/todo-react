import { useMemo } from "react";
import { TasksContext } from "./TasksContext";
import useTasks from "./useTasks";
import useIncompeteTaskScroll from "./useIncompleteTaskScroll";

export const TasksProvider = (props) => {
    const {children} = props;

    const {
        tasks,
        filteredTasks,
        deleteAllTasks,
        deleteTask,
        taskCompleteToggle,
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

    const value = useMemo(() => ({
        tasks,
        filteredTasks,
        deleteAllTasks,
        deleteTask,
        taskCompleteToggle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disappearingTaskId,
        appearingTaskId,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    }), [
        tasks,
        filteredTasks,
        deleteAllTasks,
        deleteTask,
        taskCompleteToggle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disappearingTaskId,
        appearingTaskId,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    ])

    return (
        <TasksContext.Provider value={value}>
            {children}
        </TasksContext.Provider>
    )
}
