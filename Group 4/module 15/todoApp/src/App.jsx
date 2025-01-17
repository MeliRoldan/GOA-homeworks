import { FaSearch } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineDone } from "react-icons/md";
import { useState, useEffect } from "react";
import Modal from "./modal";

function App() {
  const [tasks, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const [doneTasks, setDoneTasks] = useState(() => {
    const savedDoneTasks = localStorage.getItem("doneTasks");
    return savedDoneTasks ? JSON.parse(savedDoneTasks) : [];
  });


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
  }, [tasks, doneTask]);

  function getValue (e) {
    setInputValue(e.target.value)
  }

  function addTask () {
    if (inputValue.trim() === "") {
      setErrorMessage("Please enter task.");
      return;
    }

    const date = new Date()

    let currentDate = `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`

    const newTask = {text: inputValue, date: currentDate};

    setTask((prev) => [...prev, newTask])
    setInputValue('')
    setErrorMessage('')
  }

  function deleteTask (indexToRemove) {
    let filteredTasks = tasks.filter((item, index) => index != indexToRemove);
    setTask(filteredTasks)
  }

  function editTask (index) {
    setEditingTask(tasks[index]);
  }

  function saveEditedTask(updatedText) {
    const updatedTasks = tasks.map((task) =>
      task === editingTask ? { ...task, text: updatedText } : task
    );
    setTask(updatedTasks);
    setEditingTask(null);
  }

  function doneTask (doneTaskIndex) {
    const doneItem = tasks[doneTaskIndex];

    const date = new Date();
    const currentDate = `${String(date.getDate()).padStart(2, "0")}/${String(
    date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()} ${String(date.getHours()).padStart(
    2,"0")}:${String(date.getMinutes()).padStart(2, "0")}`;

    const updatedDoneItem = {...doneItem, date: currentDate};

    setDoneTasks((prevDoneTasks) => [...prevDoneTasks, updatedDoneItem]);

    let doneItems = tasks.filter((item, index) => index != doneTaskIndex);
    setTask(doneItems);
  }

  return (
    <>
      <div>
        <section className="w-full h-auto bg-[#e3e9ff] flex flex-col justify-center items-center gap-y-20 py-24 m-0">
          <div className="flex flex-col items-center justify-center w-96 gap-5 m-0 p-0">
            {errorMessage && (
              <p className="text-red-600 text-lg">{errorMessage}</p>
            )}
            <div className="flex justify-center items-center gap-4 relative w-full">
              <FaSearch className="absolute left-3"/>
              <input onChange={getValue} value={inputValue} type="text" name="" id="" placeholder="Add Task" className="px-9 py-3 rounded-md outline-none shadow-md shadow-gray-300 w-full text-lg"/>
            </div>
            <div className="bg-white w-full relative h-96 rounded-md shadow-md shadow-gray-300">
              <ul className="p-9 flex flex-col justify-centerr gap-5 overflow-y-scroll h-full">
                {tasks.map((item, index) => {
                  return <li id={index} key={index} className="flex justify-between items-center p-3 text-lg relative border-b-2">{item.text}<p className="absolute left-3 -bottom-0 text-xs">{item.date}</p>
                  <span className="flex gap-3 pt-3">
                    <MdOutlineEdit onClick={() => editTask(index)}
                    className="cursor-pointer text-purple-700 hover:text-red-600 text-xl"/>
                    <RiDeleteBinLine onClick={() => deleteTask(index)} className="cursor-pointer text-purple-700 hover:text-red-600 text-xl"/>
                    <MdOutlineDone onClick={() => doneTask(index)} id={index} className="cursor-pointer text-purple-700 hover:text-green-600 text-xl"/>
                  </span>
                  </li>
                })}
              </ul>
              <button onClick={addTask} className="absolute -bottom-5 bg-purple-700 px-7 py-2 rounded-md text-white uppercase right-1/2 translate-x-1/2 font-bold hover:bg-green-700 cursor-pointer">New Task</button>
            </div>
          </div>
          <div className="w-96 bg-white h-96 rounded-md shadow-md shadow-gray-300 m-0 p-0">
            <ul className="p-9 flex flex-col justify-centerr gap-5 overflow-y-scroll h-full w-full">
              {doneTasks.map((item, index) => {
                return <li id={index} key={index} className="flex justify-between items-center p-3 text-lg relative border-b-2 line-through">{item.text}<p className="absolute left-3 -bottom-0 text-xs">{item.date}</p>
                </li>
              })}
            </ul>
          </div>
        </section>
      </div>

      {editingTask && (
        <Modal
          task={editingTask}
          onSave={saveEditedTask}
          onClose={() => setEditingTask(null)}
        />
      )}
    </>
  )
}

export default App
