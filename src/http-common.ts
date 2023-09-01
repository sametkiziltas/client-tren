import axios from "axios";

export default axios.create({
  baseURL: "https://trenapp2.azurewebsites.net",
  headers: {
    "Content-type": "application/json"
  }
});