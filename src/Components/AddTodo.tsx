import { useState } from "react"
import AllTodos from "./AllTodos"
import { useTodoConsumer } from "../Store/TodoStore"
import CompletedTodos from "./CompletedTodos"
import Active from "./Active"

function AddTodo() {
    const [text, setText] = useState("")
    const { todoHandler } = useTodoConsumer()
    const [active, setActive] = useState<string>("All")

    const newTodoHandler = () => {
        if (!text.trim()) return;

        const newTodo = {
            id: Date(),
            todo: text,
            status: false
        }
        todoHandler(newTodo)
        setText("")
    }

    return (
        <>
            <div className="bg-white w-[100%] h-[100%] flex flex-col justify-center items-center">
                <div className="w-[100%] h-[10%] text-[14px] font-bold md:text-[24px] flex justify-center items-center">Todo App with React & TypeScript</div>
                <div className="w-[100%] h-[10%]  flex justify-between items-center">
                    <input type="text" placeholder="Write here..." value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="bg-white outline-none border-b-1 border-blue-100 focus:border-b-2 focus:border-blue-800 text-12px w-[80%] h-[70%]" />
                    <button type="submit" onClick={() => newTodoHandler()}
                        className="bg-blue-500 w-[80px] rounded text-white text-[16px] md:w-[15%] h-[70%]">ADD</button>
                </div>
                <div className="w-[100%] h-[80%] bg-gray-200 rounded-xl flex flex-col justify-center items-center " >
                    <div className="h-[10%] w-[100%] flex justify-center items-center">
                        <div className="w-[33%] h-[100%] active:text-red-500 flex justify-center items-center"><button onClick={()=>setActive("All")} className={`w-[100%] ${active === "All" ? "text-blue-800 underline " : "text-gray-500"}`}>All</button></div>
                        <div className="w-[33%] h-[100%] active:text-red-500 flex justify-center items-center"><button onClick={()=>setActive("Active")} className={`w-[100%] ${active === "Active" ? "text-blue-800 underline " : "text-gray-500"}`}>Active</button></div>
                        <div className="w-[33%] h-[100%] active:text-red-500 flex justify-center items-center"><button onClick={()=>setActive("Completed")} className={`w-[100%] ${active === "Completed" ? "text-blue-800 underline " : "text-gray-500"}`}>Completed</button></div>
                    </div>
                    <div className="h-[90%] w-[100%]  flex justify-center items-center ">
                        {active == "All" ? <AllTodos/> : active == "Active" ? <Active/> : <CompletedTodos/>}
                    </div>
                </div>``
            </div>
        </>
    )
}

export default AddTodo