export class Note {
    id: number;
    title = '';
    content = '';
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
