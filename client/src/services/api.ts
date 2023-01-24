import axios, { AxiosInstance } from "axios";
import { Round } from "../context/GameContext/types";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

class ApiService {
  instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }
  login(username: string, password: string) {
    const bodyFormData = new FormData();
    bodyFormData.append("username", username);
    bodyFormData.append("password", password);
    const headers = { "Content-Type": "multipart/form-data" };

    return this.instance
      .post("/auth/login/", bodyFormData, { headers: headers })
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  }
  register(username: string, password: string) {
    return this.instance
      .post("/auth/register/", { username, password })
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  }
  createGame(userId: string) {
    return this.instance
      .post(
        "/games/",
        { user_id: userId },
        { headers: { Authorization: window.localStorage.getItem("jwt_token") } }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  }
  submitAnswer(gameId: string, round: Round) {
    return this.instance
      .patch(
        "/games/",
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
        return res.data;
      })
      .catch((err) => err);
  }
  fetchUser() {
    const userId = window.localStorage.getItem("user_id");
    return this.instance
      .get(`/users/${userId}/`, {
        headers: { Authorization: window.localStorage.getItem("jwt_token") },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  }
  fetchTopTen() {
    return this.instance
      .get("/users/", {
        headers: { Authorization: window.localStorage.getItem("jwt_token") },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  }
}

const api = new ApiService(instance);
export default api