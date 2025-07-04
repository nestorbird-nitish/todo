import React, { useState } from 'react';
import { Trash2, Filter, X, Plus, Pen } from 'lucide-react';
import { FilterDropdown } from './FilterDropDown';
import { TodoCard } from './TodoCard';


const initialTodos = [
    {
        id: 1,
        title: "Design new landing page",
        description: "Create a modern, responsive landing page with hero section, features, and call-to-action buttons",
        priority: "high",
        status: "in-progress"
    },
    {
        id: 2,
        title: "Fix login bug",
        description: "Resolve the authentication issue where users can't log in with special characters in password",
        priority: "medium",
        status: "in-progress"
    },
    {
        id: 3,
        title: "Update documentation",
        description: "Review and update the API documentation to reflect recent changes",
        priority: "low",
        status: "on-hold"
    },
    {
        id: 4,
        title: "Database optimization",
        description: "Optimize database queries for better performance",
        priority: "high",
        status: "on-hold"
    },
    {
        id: 5,
        title: "User testing",
        description: "Complete user testing for the new feature set",
        priority: "medium",
        status: "completed"
    },
    {
        id: 6,
        title: "Setup CI/CD pipeline",
        description: "Configure continuous integration and deployment pipeline",
        priority: "high",
        status: "completed"
    }
];




const Home = () => {
    const [todos, setTodos] = useState(initialTodos);

    const [inProgressFilter, setInProgressFilter] = useState('all');

    const [onHoldFilter, setOnHoldFilter] = useState('all');



    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleDeleteAllCompleted = () => {
        setTodos(todos.filter(todo => todo.status !== 'completed'));
    };

    const getFilteredTodos = (status, filter) => {
        const statusTodos = todos.filter(todo => todo.status === status);
        if (filter === 'all') return statusTodos;
        return statusTodos.filter(todo => todo.priority === filter);
    };

    const priorityOptions = ['high', 'medium', 'low'];

    return (
        <div className="bg-neutral-50 min-h-screen p-6">
            <div className="max-w-7xl mx-auto">

                <div className="flex justify-between py-4">
                    <h1 className="text-2xl font-bold text-neutral-800 mb-8"></h1>
                    <button
                        // onClick={handleLogin}
                        className="bg-neutral-800 cursor-pointer flex gap-2 items-center hover:bg-neutral-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                    >   
                        <Pen size="14px" />
                        Add todo
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
                        <div className="p-4 border-b border-neutral-200">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold text-neutral-800">In Progress</h2>
                                <FilterDropdown
                                    currentFilter={inProgressFilter}
                                    onFilterChange={setInProgressFilter}
                                    options={priorityOptions}
                                />
                            </div>


                            <p className="text-sm text-neutral-500 mt-1">
                                {getFilteredTodos('in-progress', inProgressFilter).length} tasks
                            </p>
                        </div>


                        <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
                            {getFilteredTodos('in-progress', inProgressFilter).map(todo => (
                                <TodoCard key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
                            ))}


                            {getFilteredTodos('in-progress', inProgressFilter).length === 0 && (
                                <p className="text-neutral-400 text-center py-8">No tasks in progress</p>
                            )}
                        </div>


                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
                        <div className="p-4 border-b border-neutral-200">

                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold text-neutral-800">Pending</h2>
                                <FilterDropdown
                                    currentFilter={onHoldFilter}
                                    onFilterChange={setOnHoldFilter}
                                    options={priorityOptions}
                                />
                            </div>


                            <p className="text-sm text-neutral-500 mt-1">
                                {getFilteredTodos('on-hold', onHoldFilter).length} tasks
                            </p>
                        </div>


                        <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
                            {getFilteredTodos('on-hold', onHoldFilter).map(todo => (
                                <TodoCard key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
                            ))}


                            {getFilteredTodos('on-hold', onHoldFilter).length === 0 && (
                                <p className="text-neutral-400 text-center py-8">No tasks on hold</p>
                            )}
                        </div>

                    </div>


                    <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
                        <div className="p-4 border-b border-neutral-200">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold text-neutral-800">Completed</h2>
                                <button
                                    onClick={handleDeleteAllCompleted}
                                    className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors duration-200"
                                    disabled={todos.filter(todo => todo.status === 'completed').length === 0}
                                >
                                    <Trash2 size={16} />
                                    <span className="text-sm">Delete All</span>
                                </button>
                            </div>
                            <p className="text-sm text-neutral-500 mt-1">
                                {todos.filter(todo => todo.status === 'completed').length} tasks
                            </p>
                        </div>
                        <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
                            {todos.filter(todo => todo.status === 'completed').map(todo => (
                                <TodoCard key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
                            ))}
                            {todos.filter(todo => todo.status === 'completed').length === 0 && (
                                <p className="text-neutral-400 text-center py-8">No completed tasks</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;