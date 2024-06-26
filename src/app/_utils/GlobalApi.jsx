const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  // baseURL: "https://colorful-activity-3e4958dd98.strapiapp.com/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getCategory = () => axiosClient.get("/categories?populate=*");
const getDoctorList = () => axiosClient.get("/doctors?populate=*");

const GlobalApi = {
  getCategory: getCategory,
  getDoctorList: getDoctorList,
};

export default GlobalApi;
