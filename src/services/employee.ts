import axios from "axios";

export default class Employee {
  static async fetchEmployees() {
    const response = await axios.get(
      `https://staging-backend.teamwell.co/items/employees`,
      {
        headers: {
          Authorization: `Bearer tzGLgauh3jwfkryrRklMCGpouZfyC0Dc`,
        },
      }
    );

    return response.data;
  }
}
