import "dotenv/config";
import axios from "axios";

const APP_URL_BACKEND = process.env.REACT_APP_BACKEND_URL;

let config = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    preflightContinue: false,
  },
};

class AxiosHelper {
  static post = (path, data, token) => {
    config["headers"]["authorization"] = token;
    return new Promise((resolve, reject) => {
      return axios
        .post(`${APP_URL_BACKEND}${path}`, data, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  static patch = (path, data, token) => {
    config["headers"]["authorization"] = token;
    return new Promise((resolve, reject) => {
      return axios
        .patch(`${APP_URL_BACKEND}${path}`, data, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  static delete = (path, data, token) => {
    config["headers"]["authorization"] = token;
    return new Promise((resolve, reject) => {
      return axios
        .delete(`${APP_URL_BACKEND}${path}`, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  static get = (path, data, token) => {
    config["headers"]["authorization"] = token;
    return new Promise((resolve, reject) => {
      return axios
        .get(`${APP_URL_BACKEND}${path}`, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

export default AxiosHelper;
