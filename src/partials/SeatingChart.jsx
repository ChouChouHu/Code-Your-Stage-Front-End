/* eslint-disable import/prefer-default-export */

import { useState } from "react";

const studentList = [
  "張安松 / *Benny*",
  "陳禮群 / *Andrew* Chen",
  "徐*承奕* / Cheng-Yi Hsu",
  "*李墉* / Yong Lee",
  "李*格全* / Max Li",
  "林*怡君* / Yi Chun Lin",
  "何穎婷 / *Candy* Ho",
  "余*紹群* / Shao Chun Yu",
  "汪*穎瑩* / Ying Ying Wang",
  "林*孟璇* / MengSyuan Lin",
  "林*以理* / Yi-Li Lin",
  "殷*語彤* / Yin Yu Tung",
  "王*宸秀* / Chen-Xiu Wang",
  "廖*晏瑢* / Yen Jung Liao"
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

const cardClass = "bg-white rounded-3xl schoolShadow";
// const bgColor = "bg-white";
const seatColor = "bg-blue-200";
const textColor = "text-blue-800";
const tableColor = "bg-[#e8e9e4] rounded-lg";
const decorationColor = "bg-[#e8e9e4] rounded-xl";
const buttonClass =
  "border-3 border-[#fd6027] text-[#fd6027] hover:bg-[#fd6027] hover:text-blue-100 duration-100";

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
      <div>
        {/* control sidebar */}
        {/* <div className="absolute top-0 left-0 h-full w-full" /> */}
        <div className="relative">
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
          <div className="flex flex-col items-center gap-6 justify-center mt-10">
            {/* <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked
                disabled
              />
              <div className="w-11 h-6 bg-blue-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-blue-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#fd6027] peer-checked:bg-[#fd6027]" />
              <span className="ml-3 text-sm font-medium text-[#fd6027] dark:text-[#fd6027]">
                往前坐
              </span>
            </label> */}
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
            <div className="flex mt-10 justify-between">
              <div>
                <div className="flex h-[420px]">
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
                <div className="h-[420px] flex">
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
    </>
  );
}

function Checkboxes({ defaultStudents = studentList, students, setStudents }) {
  const [processedStudentNames] = useState(() =>
    defaultStudents.reduce((acc, student) => {
      // 去除星號的函數
      const removeAsterisks = (str) => str.replace(/\*/g, "");

      // 將原始字串和處理後的字串添加到物件中
      acc[student] = removeAsterisks(student);
      return acc;
    }, {})
  );

  // 處理勾選框變化的函數
  const handleCheckboxChange = (student) => {
    setStudents((prevCheckedStudents) => {
      if (prevCheckedStudents.includes(student)) {
        // 如果學生已經被勾選，則取消勾選
        return prevCheckedStudents.filter((s) => s !== student);
      }
      // 否則添加學生到勾選列表
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
              className="hidden" // 隱藏原生 checkbox
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

function Seat({ studentName = null }) {
  const extractBetweenAsterisks = (str) => {
    // 尋找第一個和第二個星號的位置
    const firstAsterisk = str.indexOf("*");
    const secondAsterisk = str.indexOf("*", firstAsterisk + 1);

    if (firstAsterisk === -1 || secondAsterisk === -1) {
      // 如果沒有星號，則返回原始字符串
      return str;
    }

    // 提取並返回星號之間的內容
    return str.substring(firstAsterisk + 1, secondAsterisk);
  };

  return studentName ? (
    <div
      className={`${seatColor} figmaShadow cursor-pointer rounded-[50%] h-14 w-14 text-xs flex items-center justify-center ${textColor} font-bold ${
        !studentName && "!bg-transparent"
      }`}
    >
      {extractBetweenAsterisks(studentName)}
    </div>
  ) : (
    <div className="figmaInsetShadow rounded-[50%] text-white flex items-center justify-center h-14 w-14" />
  );
}
