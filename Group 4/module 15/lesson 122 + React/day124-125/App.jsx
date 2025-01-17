import { FaSearch } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineDone } from "react-icons/md";
import taskList from "./tasklist";
import { useState } from "react";

function App() {
  const [tasks, setTask] = useState(taskList)
  const [inputValue, setInputValue] = useState('')
  const [dateArr, setDate] = useState([])

  function getValue (e) {
    setInputValue(e.target.value)
    console.log(inputValue)
  }

  function addTask () {
    setTask((prev) => {
      return [...prev, inputValue]
    })

    setInputValue('')

    const date = new Date()
    // const year = date.getFullYear()
    // const day = date.getDay()
    // const month = date.getMonth() 

    // setDay(day)
    // setMonth(month)
    // setYear(year)

    let currentDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`

    setDate((prev) => {
      return [...prev, currentDate]
    })
  }

  function deleteTask (indexToRemove) {
    let filteredTasks = tasks.filter((item, index) => index != indexToRemove);
    setTask(filteredTasks)
  }

  return (
    <div>
      <section className="w-screen h-screen bg-[#e3e9ff] flex justify-center items-center">
        <div className="flex flex-col items-center justify-center w-96 gap-5">
          <div className="flex justify-center items-center gap-4 relative w-full">
            <FaSearch className="absolute left-3"/>
            <input onChange={getValue} value={inputValue} type="text" name="" id="" placeholder="Add Task" className="px-9 py-3 rounded-md outline-none shadow-md shadow-gray-300 w-full text-lg"/>
          </div>
          <div className="bg-white w-full relative h-96 rounded-md shadow-md shadow-gray-300">
            <ul className="p-9 flex flex-col justify-centerr gap-5">
              {tasks.map((item, index) => {
                return <li id={index} key={index} className="flex justify-between items-center p-3 text-lg relative border-b-2">{item}<p className="absolute left-3 -bottom-0 text-xs">{dateArr[index]}</p>
                <span className="flex gap-3 pt-3">
                  <RiDeleteBinLine onClick={() => deleteTask(index)} className="cursor-pointer text-purple-700 hover:text-red-600 text-xl"/>
                  <MdOutlineDone id={index} className="cursor-pointer text-purple-700 hover:text-green-600 text-xl"/>
                  </span>
                </li>
              })}
            </ul>
            <button onClick={addTask} className="absolute -bottom-5 bg-purple-700 px-7 py-2 rounded-md text-white uppercase right-1/2 translate-x-1/2 font-bold hover:bg-green-700 cursor-pointer">New Task</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App