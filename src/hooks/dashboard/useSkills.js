import useSWRFetch from "../useSWRFetch";

const useSkills = (studentId) => {
  const { data } = useSWRFetch(
    studentId && `https://api.projectszero.tech/skills/${studentId}`
  );
  return {
    labels: data && Object.keys(data),
    values: data && Object.values(data),
    isEmpty: !studentId
  };
};

export default useSkills;
