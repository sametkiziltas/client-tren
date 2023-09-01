import axios from "axios";

export default axios.create({
  baseURL: "https://api-tren.azurewebsites.net",
  headers: {
    "Content-type": "application/json"
  }
});