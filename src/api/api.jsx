import axios from "axios";

const BASE_URL = "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class MojoApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {

    const url = `${BASE_URL}/${endpoint}`;
    console.log(url);
    const headers = { Authorization: `Bearer ${MojoApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get the current user. */

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    console.log("getCurrentUser");
    return res.user;
  }

  /** Get token for login from username, password. */

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  /** Signup for site. */

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  /** Save user profile page. */

  static async updateProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

  /** Delete user profile page. */

  static async deleteDog(dog_id) {
    let data = {};
    let res = await this.request(`dogs/${dog_id}`, data, "delete");
    return res.user;
  }

  /** Get user matching filter. */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    // console.log("getUser");
    return res.area;
  }


  /** Get users matching filter. */

    static async getUsers() {
      let res = await this.request("users");
      // console.log("users", res.users);
      return res.users;
    }

  /** Get all dogs */

    static async getDogs() {
      let res = await this.request("dogs");
      // console.log(res);
      return res.dogs;
    }

      /** Get dog by dog name */

      static async getDog(dog) {
        let res = await this.request(`dogs/${dog}`);
        // console.log(res);
        return res.dog;
      }

    /** Post new dog to database */
    static async postDog(data) {
      let res = await this.request("dogs", data, "post" );
      // console.log(res);
      return res.message;
    }

    /** Post new test to database */
    static async addTest(data) {
      let res = await this.request("test", data, "post");
      // console.log(res);
      return res.test;
    }

    /** Get all tests from database */
    static async getTests() {
      let res = await this.request("test");
      // console.log(res);
      return res.test;
    }
}


export default MojoApi;
