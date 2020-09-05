export class HtmlService {
  static counter = 0;
  static prefix = 'html-id-' + Math.random().toString(16).split('.')[1];

  static generateId() {
    return HtmlService.prefix + '-' + (HtmlService.counter++);
  }
}