export default class ErrorRepository {
  constructor() {
    this.repository = new Map([
      ['401', 'Red Error! Smth wrong'],
      ['402', 'Yellow Error! Be carefull'],
      ['403', 'Blue Error! Do smth'],
      ['404', 'Orange Error! System Error'],
    ]);
  }

  translate(code) {
    return this.repository.get(code) || 'Unknown error';
  }
}