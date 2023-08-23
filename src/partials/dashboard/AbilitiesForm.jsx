import { useState } from "react";
import usePostForm from "../../hooks/dashboard/usePostSkills";

function AbilitiesForm() {
  const [studentId, setStudentId] = useState();
  const [skills, setSkills] = useState({
    UIUX: 0,
    backend: 0,
    "business analysis": 0,
    "design thinking": 0,
    frontend: 0
  });
  const postForm = usePostForm();

  const handleSelectChange = (skill, value) => {
    setSkills({
      ...skills,
      [skill]: value
    });
  };
  const renderSelect = (label) => (
    <div className="mb-4" key={label}>
      <label className="mb-1">{label}</label>
      <select
        className="border rounded ml-4"
        value={skills[label]}
        onChange={(e) => handleSelectChange(label, Number(e.target.value))}
      >
        {[...Array(11).keys()].map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
    </div>
  );
  return (
    <div className="flex flex-col col-span-12 sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <form
        className="p-6 px-8"
        onSubmit={(e) => {
          e.preventDefault();
          postForm(studentId, skills);
        }}
      >
        <div className="mb-4">
          <label className="block mb-2">請輸入學號</label>
          <input
            type="text"
            className="w-full border rounded"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        {Object.keys(skills).map((skill) => renderSelect(skill))}
        <button
          type="submit"
          className="bg-school text-white px-4 py-2 rounded mt-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AbilitiesForm;
