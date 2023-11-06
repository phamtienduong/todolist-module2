import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import './Todo.css'

function TodoList() {
     // Sử dụng React state để lưu danh sách các nhiệm vụ (todos) và biến idCounter.
  const [todos, setTodos] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
// Hàm addTodo thêm một nhiệm vụ mới vào danh sách todos.
  const addTodo = (text) => {
     // Tạo một nhiệm vụ mới với id, nội dung và trạng thái hoàn thành mặc định là false.
    const newTodo = { id: idCounter, text, completed: false };
    // Tăng giá trị idCounter để đảm bảo rằng id sẽ là duy nhất cho mỗi nhiệm vụ.
    setIdCounter(idCounter + 1);
    // Cập nhật danh sách todos bằng cách thêm nhiệm vụ mới vào mảng.
    setTodos([...todos, newTodo]);
  };
// Hàm completeTodo dùng để đánh dấu nhiệm vụ đã hoàn thành hoặc chưa hoàn thành.
  const completeTodo = (id) => {
    // Sử dụng map để tạo một bản sao mới của danh sách todos với trạng thái đã hoàn thành được cập nhật.
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
     // Cập nhật danh sách todos.
    setTodos(updatedTodos);
  };
 // Hàm deleteTodo dùng để xóa một nhiệm vụ khỏi danh sách theo id.
  const deleteTodo = (id) => {
     // Sử dụng filter để tạo một danh sách mới không bao gồm nhiệm vụ có id trùng với id bị xóa.
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    // Cập nhật danh sách todos.
    setTodos(updatedTodos);
  };
 // Hàm updateTodo dùng để cập nhật nội dung của nhiệm vụ theo id.
  const updateTodo = (id, newText) => {
     // Sử dụng map để tạo một bản sao mới của danh sách todos với nội dung nhiệm vụ được cập nhật.
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    // Cập nhật danh sách todos.
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            completeTodo={() => completeTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
