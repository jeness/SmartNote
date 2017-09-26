export class Note {
    id: number;
    title = '';
    content = '';
    complete: boolean = false;
    
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
