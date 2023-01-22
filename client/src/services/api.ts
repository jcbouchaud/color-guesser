import axios from "axios";

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
};
export default api;
