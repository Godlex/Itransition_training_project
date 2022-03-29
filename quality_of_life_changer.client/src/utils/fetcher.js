import axios from "axios";
import { constants } from "../constants/constants";

const singleton = Symbol();
const singletonEnforcer = Symbol();

class ApiService {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error("Cannot construct singleton");
    }

    this.session = axios.create();

    this.session.interceptors.request.use(function (config) {
      const token = localStorage.getItem("jwtToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      config.baseURL = `${constants.BASE_URL}`;
      config.headers["Content-Type"] = "application/json";
      return config;
    });
  }

  static get instance() {
    // Try to get an efficient singleton
    if (!this[singleton]) {
      this[singleton] = new ApiService(singletonEnforcer);
    }

    return this[singleton];
  }

  get = (...params) => this.session.get(...params);
  post = (...params) => this.session.post(...params);
  put = (...params) => this.session.put(...params);
  patch = (...params) => this.session.patch(...params);
  delete = (...params) => this.session.delete(...params);
}

export default ApiService.instance;
