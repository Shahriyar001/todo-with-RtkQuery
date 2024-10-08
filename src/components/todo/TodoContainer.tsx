import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetMenuQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // const { data, error, isLoading } = useGetMenuQuery(undefined, {pollingInterval: 1000});

  // if (isLoading) {
  //   return <p>Loading....</p>;
  // }

  const { todos } = useAppSelector((state) => state.todos);
  console.log(todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-blue-600 w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg  space-y-3">
          {todos?.map((item) => (
            <TodoCard
              title={item.taskDetails.title}
              id={item.taskDetails.id}
              description={item.taskDetails.description}
            />
          ))}
          {/* <div className="bg-white text-2xl font-blod p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
