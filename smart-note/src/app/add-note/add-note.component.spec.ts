import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { RouterTestingModule } from '@angular/router/testing';
import { AddNoteComponent } from './add-note.component';
import { FormsModule } from '@angular/forms';

describe('AddNoteComponent', () => {
  let component: AddNoteComponent;
  let fixture: ComponentFixture<AddNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //imports: [RouterTestingModule], 
      imports: [ FormsModule ],      
      declarations: [ AddNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
