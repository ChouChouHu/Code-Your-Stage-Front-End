// import { useEffect, useState } from "react";
// import { useSyncExternalStore } from "react";
import SeatingChart from "../partials/SeatingChart";
import Layout from "../partials/Layout";
import { todosStore } from "../todoStore";
import { createContext, useMemo, useState } from "react";

const MyContext = createContext();

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
  const [count, setCount] = useState(0);

  // console.log(0);
  // const todos = useSyncExternalStore(
  //   todosStore.subscribe,
  //   todosStore.getSnapshot
  // );
  const contextValue = useMemo(() => ({ count, setCount }), [count, setCount]);

  return (
    <Layout>
      <MyContext.Provider value={contextValue}>
        <div
          className="h-[100vh] bg-background"
          // style={{ background: "linear-gradient(45deg ,#6e7f8d, #f0f3f5)" }}
        >
          <ParentComponent />
          <div className="flex justify-center items-start pt-[5vh] gap-20 h-[100vh]">
            <SeatingChart />
          </div>
        </div>
        {/* <Test /> */}
      </MyContext.Provider>
      {/* <button onClick={() => setCount({ count: 0 })}>Add count</button> */}
      <hr />
      <ul>
        {/* {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))} */}
        {/* {todos} */}
      </ul>
    </Layout>
  );
}

// 父組件
function ParentComponent({ children }) {
  const [count, setCount] = useState(0);
  console.log("ParentComponent 渲染");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {children}
      <ChildComponent />
    </div>
  );
}

// 子組件
function ChildComponent() {
  console.log("ChildComponent 渲染");
  return <div>I am the child component!</div>;
}
