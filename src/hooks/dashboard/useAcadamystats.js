import useSWRFetch from "../useSWRFetch";

const useAcadamystats = () => {
  const { data } = useSWRFetch("https://api.projectszero.tech/getAcademyStats");
  return {
    labels: data && Object.keys(data),
    values: data && Object.values(data)
  };
};

export default useAcadamystats;
