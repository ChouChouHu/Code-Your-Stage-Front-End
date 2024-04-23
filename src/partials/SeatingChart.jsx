/* eslint-disable import/prefer-default-export */

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { todosStore } from "../todoStore";
// import Trix from "trix"

const studentList = [
  "張安松 / *Benny*",
  "陳禮群 / *Andrew* Chen",
  "徐承奕 / *Marce* Hsu",
  "*李墉* / Yong Lee",
  "李*格全* / Max Li",
  // "林*怡君* / Yi Chun Lin",
  "何穎婷 / *Candy* Ho",
  "余紹群 / *Davis* Yu",
  "汪*穎瑩* / Ying Ying Wang",
  "林*孟璇* / MengSyuan Lin",
  "林*以理* / Yi-Li Lin",
  "殷語彤 / *Melody* Tung",
  // "王*宸秀* / Chen-Xiu Wang",
  // "廖晏瑢 / *格斯*",
];

const arrangement = [
  {
    size: 5,
    isBack: false,
  },
  {
    size: 6,
    isBack: false,
  },
  {
    size: 6,
    isBack: false,
  },
];

const cardClass = "bg-white rounded-3xl schoolShadow";
// const bgColor = "bg-white";
const seatColor = "bg-blue-200";
const textColor = "text-blue-800";
const tableColor = "bg-[#e8e9e4] rounded-lg";
const decorationColor = "bg-[#e8e9e4] rounded-xl";
const buttonClass =
  "border-3 border-[#fd6027] text-[#fd6027] hover:bg-[#fd6027] hover:text-blue-100 duration-100";

  // console.log(TPDirect);

export default function SeatingChart({ defaultStudents = studentList.sort() }) {
  const todos = useSyncExternalStore(
    todosStore.subscribe,
    todosStore.getSnapshot
  );
  
  // console.log(1);
  const [students, setStudents] = useState(defaultStudents);
  const [showGroup, setShowGroup] = useState(false);
  const [number, setNumber] = useState(1);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);
  // const [array, setArray] = useState([1, 2, 3, 4]);
  const [group, setGroup] = useState({
    id: 1,
    expenses: [
      { description: "Rent", amount: 1000 },
      { description: "Groceries", amount: 100 },
      { description: "Utilities", amount: 150 },
    ],
  });

  useEffect(() => {
    setGroup((prevGroup) => ({
      ...prevGroup,
    }));
    console.log("set");
  }, []);

  useEffect(() => {
    console.log("group", group);
  }, [group]);
  


  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (isRunning) {
        const randomNum = Math.floor(Math.random() * 4) + 1;
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

  const getGroupClass = (groupNumber) =>
    `absolute w-[5rem] h-[13.7rem] rounded-full border-3 opacity-80 ${
      !isRunning && number === groupNumber ? "border-[#fd6027]" : ""
    }`;

  const rollTheDice = () => {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));

        // eslint-disable-next-line no-param-reassign
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    setStudents(shuffleArray([...students]));
  };

  function getStudentGroup(groupIndex, studentsToArrange) {
    const start = arrangement
      .slice(0, groupIndex)
      .reduce((total, item) => total + item.size, 0);
    const end = start + arrangement[groupIndex].size;

    return studentsToArrange.slice(start, end);
  }

  // const [random, setRandom] = useState(0);

  // useEffect(() => {
  //   setRandom(Math.random());
  // }, []);
  // let random = Math.random();

  return (
    <>
      <div className="h-[86%]">
      <button onClick={() => todosStore.addTodo()}>Add todo</button>
      <hr />
      <ul>
      {todos}
      </ul>
        {/* control sidebar */}
        {/* <div className="absolute top-0 left-0 h-full w-full" /> */}
        <div className="relative h-full">
          <Checkboxes students={students} setStudents={setStudents} />
          {/* <textarea
            className={`px-8 py-6 resize-none text-[#3c464d] h-80 w-60 border-transparent border-2 font-semibold ${cardClass}`}
            value={students.join("\n")}
            onChange={(event) => {
              const text = event.target.value;
              const updatedStudents = text.split("\n");
              setStudents(updatedStudents);
            }}
          /> */}
          <div className="flex justify-center">
            <button
              className={`px-10 text-sm py-2 mt-8 rounded-3xl tracking-wide font-semibold flex justify-center items-center leading-4 ${buttonClass}`}
              onClick={rollTheDice}
            >
              換位子
            </button>
          </div>
          <div className="flex flex-col items-center gap-6 justify-center mt-40">
            <div
              className={`relative border-3 ${
                showGroup ? "border-[#fd6027]" : "border-slate-400"
              } rounded-lg w-full h-60 text-center pt-6`}
            >
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value={showGroup}
                  className="sr-only peer"
                  checked={showGroup}
                  onChange={() => setShowGroup(!showGroup)}
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-blue-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#fd6027] peer-checked:bg-[#fd6027]" />
                <span className="ml-3 text-sm font-medium text-slate-500 dark:text-[#fd6027]">
                  抽組別
                </span>
              </label>
              {showGroup ? (
                <h1 className="text-8xl mt-8 text-[#fd6027]">{number}</h1>
              ) : (
                <h1 className="text-8xl mt-8 text-slate-500">0</h1>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`relative inline-flex justify-center ${cardClass} py-16 px-20`}
      >
        <div
          className="w-[500px] relative"
          style={{ transform: "scale(1.08)" }}
        >
          <div className="relative pt-2 pb-10">
            <div className="flex gap-10">
              <div
                className={`${decorationColor} h-8 w-20 origin-bottom -rotate-12 mt-8`}
              />
              <div className={`${decorationColor} h-6 w-[300px]`} />
            </div>
            <div className="relative flex mt-10 justify-between">
              {showGroup ? (
                <div className="absolute w-full h-full">
                  <div className={`${getGroupClass(1)} left-1 top-2`}>
                    <span
                      className={`absolute font-bold text-slate-500 -mt-2 text-xs ${
                        !isRunning && number === 1 ? "!text-[#fd6027]" : ""
                      }`}
                    >
                      1
                    </span>
                  </div>
                  <div
                    className={`${getGroupClass(
                      2
                    )} left-1 top-[14.2rem] h-[9rem]`}
                  >
                    <span
                      className={`absolute font-bold text-slate-500 -mt-2 text-xs ${
                        !isRunning && number === 2 ? "!text-[#fd6027]" : ""
                      }`}
                    >
                      2
                    </span>
                  </div>
                  <div className={`${getGroupClass(3)} left-[12.8rem] top-2`}>
                    <span
                      className={`absolute font-bold text-slate-500 -mt-2 text-xs ${
                        !isRunning && number === 3 ? "!text-[#fd6027]" : ""
                      }`}
                    >
                      3
                    </span>
                  </div>
                  <div
                    className={`${getGroupClass(
                      4
                    )} left-[12.8rem] top-[14.2rem]`}
                  >
                    <span
                      className={`absolute font-bold text-slate-500 -mt-2 text-xs ${
                        !isRunning && number === 4 ? "!text-[#fd6027]" : ""
                      }`}
                    >
                      4
                    </span>
                  </div>
                </div>
              ) : null}
              <div>
                <div className="flex h-[450px]">
                  <Seats
                    number="6"
                    studentGroup={getStudentGroup(0, students)}
                    isBack={arrangement[0].isBack}
                  />
                  <div className={`${tableColor} h-full w-24 mx-2`} />
                  <Seats
                    number="6"
                    studentGroup={getStudentGroup(1, students)}
                    isBack={arrangement[1].isBack}
                  />
                </div>
              </div>
              <div>
                <div className="h-[450px] flex">
                  <Seats
                    number="6"
                    studentGroup={getStudentGroup(2, students)}
                    isBack={arrangement[2].isBack}
                  />
                  <div className={`${tableColor} h-full w-24 mx-2`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        {array.map((item, index) => (
          <div key={item}>{item}</div>
        ))}
        <div onClick={() => setArray([array.length + 1, ...array])}>add</div>
      </div> */}
      {/* {Math.random()} */}
      {/* {random} */}
      <form>
        <input id="x" type="hidden" name="content" />
        <trix-editor input="x" />
      </form>
    </>
  );
}

function Checkboxes({ defaultStudents = studentList, students, setStudents }) {
  const [processedStudentNames] = useState(() =>
    defaultStudents.reduce((acc, student) => {
      const removeAsterisks = (str) => str.replace(/\*/g, "");

      acc[student] = removeAsterisks(student);
      return acc;
    }, {})
  );

  const handleCheckboxChange = (student) => {
    setStudents((prevCheckedStudents) => {
      if (prevCheckedStudents.includes(student)) {
        return prevCheckedStudents.filter((s) => s !== student);
      }
      return [...prevCheckedStudents, student];
    });
  };
  return (
    <div className={`${cardClass} p-4`}>
      {defaultStudents.map((name) => (
        <div className="text-xs flex items-center" key={name}>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={students.includes(name)}
              onChange={() => handleCheckboxChange(name)}
              className="hidden"
            />
            <span className="flex items-center justify-center w-4 h-4 mr-2 border border-gray-300 rounded">
              {students.includes(name) && (
                <span className="block w-2 h-2 bg-blue-600 rounded" />
              )}
            </span>
            {processedStudentNames[name]}
          </label>
        </div>
      ))}
    </div>
  );
}

function Seats({ number, studentGroup = [], isBack = false }) {
  // console.log(2);
  const adjustedStudents = Array.from(
    { length: number },
    (x, i) => studentGroup[i]
  );

  if (isBack) adjustedStudents.reverse();

  return (
    <div className="p-4 h-full flex flex-col gap-4 justify-between">
      {adjustedStudents?.map((student, index) => (
        <Seat key={student || index} studentName={student} />
      ))}
    </div>
  );
}

function Seat({ studentName = null }) {
  const extractBetweenAsterisks = (str) => {
    const firstAsterisk = str.indexOf("*");
    const secondAsterisk = str.indexOf("*", firstAsterisk + 1);

    if (firstAsterisk === -1 || secondAsterisk === -1) {
      return str;
    }

    return str.substring(firstAsterisk + 1, secondAsterisk);
  };
  // console.log("studentName", studentName);

  return studentName ? (
    <div
      className={`${seatColor} figmaShadow cursor-pointer rounded-[50%] h-14 w-14 text-xs flex items-center justify-center ${textColor} font-bold ${
        !studentName && "!bg-transparent"
      }`}
    >
      {extractBetweenAsterisks(studentName)}
      {/* {Math.random()} */}
    </div>
  ) : (
    <div className="figmaInsetShadow rounded-[50%] text-white flex items-center justify-center h-14 w-14" />
  );
}
