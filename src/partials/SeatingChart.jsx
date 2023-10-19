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

  const borderClass = `border-2 border-slate-400`;

  return (
    <div className="relative flex justify-center">
      <button
        className="w-20 h-20 rounded-[50%] bg-slate-400 font-extrabold text-white absolute left-0 top-0 ml-[-100px] flex justify-center items-center"
        onClick={rollTheDice}
      >
        Roll the Dice
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
                <Seats number="6" studentGroup={students.slice(0, 6)} />
                <div className={`${borderClass} h-full w-24`} />
                <Seats number="6" studentGroup={students.slice(6, 12)} />
              </div>
            </div>
            <div>
              <div className="h-[420px] flex">
                <Seats number="6" studentGroup={students.slice(12, 18)} />
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
  const searColor = "slate-300";
  return (
    <div
      className={`border-3 border-${searColor} bg-${searColor} rounded-[50%] h-14 w-14 text-xs flex items-center justify-center text-white font-bold ${
        !studentName && "!bg-transparent"
      }`}
    >
      {studentName || <span className="text-slate-400">空</span>}
    </div>
  );
}

function Seats({ number, studentGroup = [] }) {
  return (
    <div className="p-4 h-full flex flex-col gap-2 justify-between">
      {Array.from({ length: number }, (_, index) => (
        <Seat key={index} studentName={studentGroup[index] || null} />
      ))}
    </div>
  );
}
