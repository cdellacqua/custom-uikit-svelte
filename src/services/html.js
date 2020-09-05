export class HtmlService {
  constructor() {
    this.counter = 0;
    this.prefix = Math.random().toString(16).split('.')[1];
  }

  generateId() {
    return this.prefix + '-' + (this.counter++);
  }
}