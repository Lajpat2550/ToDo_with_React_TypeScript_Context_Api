
import { useTodoConsumer } from '../Store/TodoStore'


function Active() {
    const { todos, toggleStatus, deleteTodo } = useTodoConsumer()


    return (

        <div className='w-[100%] h-[100%] flex justify-center items-center'>
            <ul className='w-[100%] h-[100%] bg-white overflow-y-scroll flex flex-col justify-start items-center'>
                {todos.filter(todo => !todo.status)
                .map((todo) => (
                    <li key={todo.id} className='w-[100%] rounded-md bg-gray-100 h-[100%] gap-3 my-1 flex flex-row justify-start items-start'>
                        <input type="checkbox" checked={todo.status}
                            onChange={(e) => toggleStatus(todo.id, e.target.checked)}
                            className='w-[5%] mt-[5px] relative top-0 flex justify-start items-start ' />
                        <p className='w-[85%]'>{todo.todo}</p>
                        {todo.status ?
                            <button className='border-none bg-red-500 rounded-md text-white mt-[5px] h-[30px] w-[70px] flex justify-center items-center'
                                onClick={() => deleteTodo(todo.id)}
                            >Delete</button> : ""}
                    </li>
                ))
                }

            </ul>
        </div>

    )
}

export default Active


// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis delectus ab sapiente reprehenderit facere quidem, officia eaque fuga necessitatibus neque repellat unde veniam a corrupti molestiae veritatis deserunt atque culpa doloribus totam suscipit. Assumenda enim in nesciunt, autem obcaecati suscipit? Provident atque voluptas, fugiat tenetur nihil corrupti dolorum animi distinctio?
