import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <Button className="bg-blue-500 text-xl font-semibold">Add Todo</Button>
        <Button className="bg-blue-500">Filter</Button>
      </div>
      <div className="bg-blue-600 w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg  space-y-3">
          {/* <div className="bg-white text-2xl font-blod p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>
          </div> */}

          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
