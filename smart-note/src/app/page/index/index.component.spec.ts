import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MsgService } from '../../services/msg/msg.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
      ],
      declarations: [ IndexComponent ],
      providers: [
        MsgService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('index page should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`index page should have as void username to be filled in`, async(() => {
    const index = fixture.debugElement.componentInstance;
    expect(index.name).toEqual('');
  }));

  it(`index page should have as void password to be filled in`, async(() => {
    const index = fixture.debugElement.componentInstance;
    expect(index.pwd).toEqual('');
  }));
});
