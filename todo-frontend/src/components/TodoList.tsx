import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { getTodos } from "@/services";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

// const todos = [
//   {
//     _id: 123,
//     title: "Water plants",
//     completed: false,
//   },
// ];

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user?._id) {
      const fetchTodos = async () => {
        const todos = await getTodos();
        setTodos(todos);
      };
      fetchTodos();
    }
  }, [user]);

  return (
    <Table>
      <TableBody className="text-white">
        {todos.map(({ _id, title, completed }) => (
          <TableRow key={_id}>
            <TableCell className="font-medium">
              <div className="items-top flex space-x-2">
                <Checkbox id="terms1" checked={completed} />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="flex justify-center items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {title}
                  </label>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-right">delete</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TodoList;
