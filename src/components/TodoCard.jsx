import { Trash2 } from "lucide-react";

export const TodoCard = ({ todo, onDelete }) => {

    
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-neutral-100 text-neutral-700 border-neutral-200';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-neutral-800 text-sm leading-tight">
          {truncateText(todo.title, 40)}
        </h3>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-neutral-400 hover:text-red-500 transition-colors duration-200 flex-shrink-0 ml-2"
        >
          <Trash2 size={16} />
        </button>
      </div>
      
      <p className="text-neutral-600 text-xs mb-3 leading-relaxed">
        {truncateText(todo.description, 80)}
      </p>
      
      <div className="flex justify-between items-center">
        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(todo.priority)}`}>
          {todo.priority}
        </span>
      </div>
    </div>
  );
};