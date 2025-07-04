import React, { useState } from 'react';

const AddTodo = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        dueDate: '',
        priority: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // You can send this to an API or context/store
    };

    return (
        <div className='min-h-screen w-full bg-gray-300'>
            <div className="min-h-screen max-w-5xl bg-gray-200 mx-auto px-4 py-8">
                <form 
                    onSubmit={handleSubmit} 
                    className="h-full w-full mx-auto p-12 border flex flex-col gap-4 bg-white rounded-lg shadow-md"
                >
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder='Enter your title'
                        className='px-4 py-2 border outline-none rounded-md font-normal'
                        required
                    />

                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder='Enter your description'
                        className='px-4 py-2 border outline-none rounded-md font-normal resize-none'
                        rows="4"
                        required
                    />

                    <input
                        type="date"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                        className='px-4 py-2 border outline-none rounded-md font-normal'
                        required
                    />

                    <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className='px-4 py-2 border outline-none rounded-md font-normal'
                        required
                    >
                        <option value="" disabled>Select Priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>

                    <button
                        type="submit"
                        className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all w-fit'
                    >
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTodo;
