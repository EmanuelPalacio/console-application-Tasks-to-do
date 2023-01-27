import { v4 as uuidv4 } from "uuid";

export default class Task {
  constructor(description) {
    this.description = description;
    this.id = uuidv4();
    this.completedIn = false;
  }
}
