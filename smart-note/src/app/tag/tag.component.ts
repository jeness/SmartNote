import { Component, OnInit } from '@angular/core';
import { TagDataService } from '../tag-data.service';
import { Tag } from '../tag';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  providers: [TagDataService]  
})

export class TagComponent implements OnInit {

  tags: Tag[] = [];
  constructor(
    private tagDataService: TagDataService,
    private route: ActivatedRoute    
  ) {
  }

  public ngOnInit() {
    this.route.data
      .map((data) => data['tags'])
      .subscribe(
        (tags) => {
          this.tags = tags;
        }
      );
  }
  onAddTag(tag) {
    this.tagDataService
      .addTag(tag)
      .subscribe(
        (newTag) => {
          this.tags = this.tags.concat(newTag);
        }
      );
  }

  onRemoveTag(tag) {
    this.tagDataService
      .deleteTagById(tag.id)
      .subscribe(
        (_) => {
          this.tags = this.tags.filter((n) => n.id !== tag.id);
        }
      );
  }
}
