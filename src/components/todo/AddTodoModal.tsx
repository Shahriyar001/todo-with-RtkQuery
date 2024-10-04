import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormEvent, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { useAppDispatch } from "@/redux/hook";
import { addTodo } from "@/redux/features/todoSlice";
import { useAddTodoMutation } from "@/redux/api/api";
// import { Dialog } from "../ui/dialog";
const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  // const dispatch = useAppDispatch();

  const [addTodo, { data, isLoading, isError, isSuccess }] =
    useAddTodoMutation();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    // const randomString = Math.random().toString(36).substring(2, 7);

    const taskDetails = {
      // id: randomString,
      title: task,
      description: description,
    };

    addTodo(taskDetails);
    // console.log(taskDetails);
    // dispatch(addTodo({ taskDetails }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 text-xl font-semibold">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
          <DialogDescription>
            Add your tasks that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
