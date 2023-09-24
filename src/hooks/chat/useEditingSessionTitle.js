import axios from "axios";

export default (sessionId) => ({
  trigger: (title) =>
    axios.put(`https://api.projectszero.tech/session/${sessionId}/${title}`, {})
});
