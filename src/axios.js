
import axios from "axios";

const http = axios.create({
    baseURL: 'https://ravshandev.pythonanywhere.com/api'
})
http.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Basic YWRtaW46MTIz`;
    //   config.headers["Language"] = localStorage.getItem("lang");
      config.headers["Accept"] = "application/json";
      // 'resolve.fallback: { "http": require.resolve("stream-http") }'
      // resolve.fallback: { "http": false }
  
      // config.headers["Access-Control-Allow-Origin"] = "*";
      // config.headers["Content-Type"] = "multipart/form-data";
      // config.headers['Content-Type'] = "application/json"
      return config;
    },
    (error) => Promise.reject(error)
  );

export default http