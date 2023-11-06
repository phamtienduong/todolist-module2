import React, { useState } from 'react';

function AddTodo({ addTodo }) {
 // Sử dụng React state để lưu nội dung nhiệm vụ mới (text).
  const [text, setText] = useState('');
// Hàm handleAddTodo dùng để thêm nhiệm vụ mới vào danh sách.
  const handleAddTodo = () => {
    if (text) {
    // Gọi hàm addTodo để thêm nhiệm vụ mới.
      addTodo(text);
    // Xóa nội dung trường nhập liệu sau khi thêm nhiệm vụ.
      setText('');
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Thêm</button>
    </div>
  );
}

export default AddTodo;