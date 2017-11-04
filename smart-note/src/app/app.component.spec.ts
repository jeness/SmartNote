import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// import { by, browser, element } from 'protractor';
import {RouterLinkStubDirective} from './../../testing/router-stubs';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MsgService } from './services/msg/msg.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        RouterLinkStubDirective,
        // RouterOutletStubComponent
      ],
      providers: [
        MsgService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as null username to be filled in`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.userName).toEqual('');
  }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));

  it('can get 6 RouterLinks from template', async() => {
    const fixture = TestBed.createComponent(AppComponent);
    // trigger initial data binding
    fixture.detectChanges();
    // find DebugElements with an attached RouterLinkStubDirective
    const linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));
    // get the attached link directive instances using the DebugElement injectors
    const links = linkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
    expect(links.length).toBe(6, 'should have 6 links');
    expect(links[0].linkParams).toBe('/about', '1st link should go to About');
    expect(links[1].linkParams).toBe('/addLinkNote', '2nd link should go to AddLinkNote');
    expect(links[2].linkParams).toBe('/addNote', '3th link should go to AddNote');
    expect(links[3].linkParams).toBe('/tag', '4th link should go to Tag');
    expect(links[4].linkParams).toBe('/classification', '5th link should go to Classification');
    expect(links[5].linkParams).toBe('/search', '6th link should go to Search');
  });
});

