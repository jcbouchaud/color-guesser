import axios from "axios";
import { Round } from "../context/GameContext/types";

const instance = axios.create({
  baseURL: 'http://localhost:8000',
});

const api = {
  login: async (username: string, password: string) => {
    const URL = "/auth/login/";
    const bodyFormData = new FormData();
    bodyFormData.append("username", username);
    bodyFormData.append("password", password);
    const headers = { "Content-Type": "multipart/form-data" };

    return await instance
      .post(URL, bodyFormData, { headers: headers })
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }
      })
      .catch((err) => err);
  },
  register: async (username: string, password: string) => {
    const URL = "/auth/register/";

    return await instance
      .post(URL, { username, password })
      .then((res) => {
        if (res.status === 201) {
          return res.data;
        }
      })
      .catch((err) => err);
  },
  createGame: async (userId: string) => {
    const URL = "/games/";

    return await instance
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
    const URL = "/games/";

    return await instance
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
    const URL = `/users/${userId}/`;

    return await instance
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
  fetchTopTen: async () => {
    const URL = `/users/`;

    return await instance
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
