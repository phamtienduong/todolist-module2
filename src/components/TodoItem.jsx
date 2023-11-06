import React, { useState } from 'react';

function TodoItem({ todo, completeTodo, deleteTodo, updateTodo }) {
// Sử dụng React state để quản lý trạng thái chỉnh sửa (edit) và nội dung nhiệm vụ mới (newText).
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState(todo.text);
// Hàm handleSave dùng để lưu lại nội dung nhiệm vụ sau khi chỉnh sửa.
  const handleSave = () => {
    // Gọi hàm updateTodo để cập nhật nội dung nhiệm vụ.
    updateTodo(todo.id, newText);
     // Kết thúc chế độ chỉnh sửa bằng cách đặt isEditing thành false.
    setEdit(false);
  };

  return (
    <li className="todo-list">
      <input type="checkbox" checked={todo.completed} onChange={completeTodo} />
      {edit ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Lưu</button>
        </div>
      ) : (
        <span
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
        </span>
      )}
      <button onClick={deleteTodo}>Xóa</button>
      <button onClick={() => setEdit(!edit)}>Sửa</button>
    </li>
  );
}

export default TodoItem;
