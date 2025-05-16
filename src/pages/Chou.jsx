// import SeatingChart from "../partials/SeatingChart";
import { useEffect, useState, useRef } from "react";
import Layout from "../partials/Layout";

const studentList = [
  "安松",
  "Andrew",
  "Marce",
  "李墉",
  "Max",
  "Candy",
  
  "Davis",
  "穎瑩",
  "孟璇",
  "以理",
  "Melody",
];


// test 帳號
// component 300 行
// 網域
// 部分分賬

// useEffect -> hook?
// protected route
// RWD
// bundle size



export default function Home() {
  const intervalRef = useRef(null);
  const [number, setNumber] = useState(studentList);
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (isRunning) {
        const randomNum = Math.floor(Math.random() * studentList.length -1) + 1;
        setNumber(randomNum);
      }
    }, 40);
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter" || event.key === "Space") {
        setIsRunning(!isRunning);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isRunning]);
  return (
    <Layout>
      <div
        className="h-[100vh] bg-background"
        // style={{ background: "linear-gradient(45deg ,#6e7f8d, #f0f3f5)" }}
      >
        <div className="flex justify-center items-center pt-[5vh] gap-20 h-[100vh] text-[300px]">
          {/* <SeatingChart /> */}
          {studentList[number]}
        </div>
      </div>
    </Layout>
  );
}
