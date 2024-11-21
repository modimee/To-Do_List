import React, { useState, useRef, useEffect } from "react";
import { FaBriefcaseMedical } from "react-icons/fa";
import Todoitem from "./Todoitem";

function Todo() {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* Title */}

      <div className="flex items-center mt-7 gap-2">
        <FaBriefcaseMedical className="text-3xl" />
        <h1 className="text-3xl font-semibold font-averia ">To-Do List</h1>
      </div>

      {/* Input box */}

      <div className="flex items-center mt-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add Your Task"
          className=" bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600 "
        />
        <button
          onClick={add}
          className="bg-orange-400 text-white  w-28 h-14 font-averia  rounded-full cursor-pointer  "
        >
          ADD +{" "}
        </button>
      </div>

      {/* Todo List */}

      <div>
        {todoList.map((item, index) => {
          return (
            <Todoitem
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
