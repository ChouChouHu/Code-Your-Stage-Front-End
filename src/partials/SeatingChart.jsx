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

  const borderClass = `border-2 border-slate-400`;

  return (
    <div className="relative flex justify-center">
      <button
        className="w-14 rounded-[50%] font-extrabold text-white absolute left-0 top-0 ml-[-50px] flex justify-center items-center leading-4"
        onClick={rollTheDice}
      >
        {/* Roll the Dice */}
        <img src="/public/images/dice.png" alt="dice" />
      </button>
      <div className="w-[500px]">
        {/* {studentNumber} */}
        <div className="relative">
          <div className="flex gap-10">
            <div
              className={`${borderClass} h-8 w-20 origin-bottom -rotate-12 mt-8`}
            />
            <div className={`${borderClass} h-6 w-[300px]`} />
          </div>
          <div className="flex mt-10 justify-between">
            <div>
              <div className="flex h-[420px]">
                <Seats
                  number="6"
                  studentGroup={getStudentGroup(0, students)}
                  isBack={arrangement[0].isBack}
                />
                <div className={`${borderClass} h-full w-24`} />
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
                <div className={`${borderClass} h-full w-24`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Seat({ studentName = null }) {
  return (
    <div
      className={`border-3 border-slate-400 bg-slate-400 rounded-[50%] h-14 w-14 text-xs flex items-center justify-center text-white font-bold ${
        !studentName && "!bg-transparent"
      }`}
    >
      {studentName || <span className="text-slate-400">空</span>}
    </div>
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
