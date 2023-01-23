import axios from "axios";
import { Round } from "../context/GameContext/types";

const api = {
  login: async (username: string, password: string) => {
    const URL = "http://localhost:8000/auth/login/";
    const bodyFormData = new FormData();
    bodyFormData.append("username", username);
    bodyFormData.append("password", password);
    const headers = { "Content-Type": "multipart/form-data" };

    return await axios
      .post(URL, bodyFormData, { headers: headers })
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }
      })
      .catch((err) => err);
  },
  register: async (username: string, password: string) => {
    const URL = "http://localhost:8000/auth/register/";

    return await axios
      .post(URL, { username, password })
      .then((res) => {
        if (res.status === 201) {
          return res.data;
        }
      })
      .catch((err) => err);
  },
  createGame: async (userId: string) => {
    const URL = "http://localhost:8000/games/";

    return await axios
      .post(
        URL,
        { user_id: userId },
        { headers: { Authorization: window.localStorage.getItem("jwt_token") } }
      )
      .then((res) => {
        if (res.status === 201) {
          return res.data;
        }
      })
      .catch((err) => err);
  },
  submitAnswer: async (gameId: string, round: Round) => {
    const URL = "http://localhost:8000/games/";

    return await axios
      .patch(
        URL,
        {
          game_id: gameId,
          round: {
            ...round,
            user_answer: round.userAnswer,
            right_answer: round.rightAnswer,
          },
        },
        {
          headers: { Authorization: window.localStorage.getItem("jwt_token") },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }
      })
      .catch((err) => err);
  },
  fetchUser: async () => {
    const userId = window.localStorage.getItem("user_id");
    const URL = `http://localhost:8000/users/${userId}/`;

    return await axios
      .get(URL, {
        headers: { Authorization: window.localStorage.getItem("jwt_token") },
      })
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }
      })
      .catch((err) => err);
  },
};
export default api;
