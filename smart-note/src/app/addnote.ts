import { Tag } from './tag';

export class AddNote {
  id: number;
  title: string = '';
  tag: Tag;
  content: string = '';
  date: Date;
  sourceLink: String;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

