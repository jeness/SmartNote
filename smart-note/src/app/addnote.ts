export class Note {
  id: number;
  title: string = '';
  complete: boolean = false;
  content: string = ''
  
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

