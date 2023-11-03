/* eslint-disable import/prefer-default-export */

import { useState } from "react";

const studentList = [
  "Ariel",
  "Jacky",
  "Benson",
  "Justin",
  "Joe",
  "Kelly",
  "Dylan",
  "Penny",
  "Max",
  "Powen",
  "Melody",
  "Shirley",
  "Jodie",
  "Mosky",
  "Joy"
];

const arrangement = [
  {
    size: 6,
    isBack: false
  },
  {
    size: 6,
    isBack: false
  },
  {
    size: 6,
    isBack: false
  }
];

const bgColor = "bg-blue-99";
const seatColor = "bg-blue-200";
const textColor = "text-blue-800";
const tableColor = "bg-blue-400 rounded-lg";
const decorationColor = "bg-blue-400 rounded-xl";
const buttonClass =
  "border-3 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-blue-100 duration-100";

export default function SeatingChart({ defaultStudents = studentList.sort() }) {
  const [students, setStudents] = useState(defaultStudents);
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

  return (
    <>
      <div className="p-10 z-10 glass">
        <div className="absolute top-0 left-0 h-full w-full bg-[rgba(255,255,255,0.2)] figmaShadow rounded-2xl" />
        <div className="relative">
          <textarea
            className="rounded-xl glass px-4 py-2 bg-blue-600 figmaInsetShadow resize-none text-blue-200 h-48 w-48 opacity-70"
            value={students.join("\n")}
            onChange={(event) => {
              const text = event.target.value;
              const updatedStudents = text.split("\n");
              setStudents(updatedStudents);
            }}
          />
          <div className="flex flex-col items-center gap-8 justify-center mt-6">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked
                disabled
              />
              <div className="w-11 h-6 bg-blue-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-blue-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                往前坐
              </span>
            </label>
            <button
              className={`px-16 py-3 rounded-3xl tracking-wide font-semibold flex justify-center items-center leading-4 ${buttonClass}`}
              onClick={rollTheDice}
            >
              Roll
            </button>
          </div>
        </div>
      </div>
      <div
        className={`relative inline-flex justify-center ${bgColor} figmaShadow glass py-16 px-20 rounded-2xl h-full overflow-scroll`}
      >
        <div
          className="w-[500px] relative"
          style={{ transform: "scale(1.08)" }}
        >
          <div className="relative pt-2 pb-20">
            <div className="flex gap-10">
              <div
                className={`${decorationColor} h-8 w-20 origin-bottom -rotate-12 mt-8 figmaShadow`}
              />
              <div className={`${decorationColor} h-6 w-[300px] figmaShadow`} />
            </div>
            <div className="flex mt-10 justify-between">
              <div>
                <div className="flex h-[420px]">
                  <Seats
                    number="6"
                    studentGroup={getStudentGroup(0, students)}
                    isBack={arrangement[0].isBack}
                  />
                  <div
                    className={`${tableColor} h-full w-24 mx-2 figmaShadow`}
                  />
                  <Seats
                    number="6"
                    studentGroup={getStudentGroup(1, students)}
                    isBack={arrangement[1].isBack}
                  />
                </div>
              </div>
              <div>
                <div className="h-[420px] flex">
                  <Seats
                    number="6"
                    studentGroup={getStudentGroup(2, students)}
                    isBack={arrangement[2].isBack}
                  />
                  <div
                    className={`${tableColor} h-full w-24 mx-2 figmaShadow`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Seat({ studentName = null }) {
  return studentName ? (
    <div
      className={`${seatColor} figmaShadow cursor-pointer rounded-[50%] h-14 w-14 text-xs flex items-center justify-center ${textColor} font-bold ${
        !studentName && "!bg-transparent"
      }`}
    >
      {studentName}
    </div>
  ) : (
    <div className="figmaInsetShadow rounded-[50%] text-white flex items-center justify-center h-14 w-14" />
  );
}

function Seats({ number, studentGroup = [], isBack = false }) {
  const adjustedStudents = Array.from(
    { length: number },
    (x, i) => studentGroup[i]
  );

  if (isBack) adjustedStudents.reverse();

  return (
    <div className="p-4 h-full flex flex-col gap-2 justify-between">
      {adjustedStudents.map((student) => (
        <Seat key={student} studentName={student} />
      ))}
    </div>
  );
}
