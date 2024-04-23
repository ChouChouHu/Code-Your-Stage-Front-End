// import { useEffect, useState } from "react";
import { useSyncExternalStore } from "react";
import SeatingChart from "../partials/SeatingChart";
import Layout from "../partials/Layout";
import { todosStore } from "../todoStore";

// function Test() {
//   console.log(3);
//   const [state, setState] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       console.log(4);
//     },0);
//     setState(1);
//   }, []);

//   useEffect(() => {
//     if (state === 0) return;
//     console.log(5);
//   }, [state]);
//   return <div>Test</div>;
// }



export default function Home() {
  // console.log(0);
  const todos = useSyncExternalStore(
    todosStore.subscribe,
    todosStore.getSnapshot
  );

  return (
    <Layout>
      <div
        className="h-[100vh] bg-background"
        // style={{ background: "linear-gradient(45deg ,#6e7f8d, #f0f3f5)" }}
      >
        <div className="flex justify-center items-start pt-[5vh] gap-20 h-[100vh]">
          <SeatingChart />
        </div>
      </div>
      {/* <Test /> */}
      <button onClick={() => todosStore.addTodo()}>Add todo</button>
      <hr />
      <ul>
        {/* {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))} */}
        {todos}
      </ul>
    </Layout>
  );
}
