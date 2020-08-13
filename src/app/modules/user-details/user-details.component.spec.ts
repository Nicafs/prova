import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { AgmCoreModule, MapsAPILoader } from '@agm/core';

import { UserDetailsComponent } from './user-details.component';
import { User } from '@models';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  let user: User = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      imports: [ AgmCoreModule, HttpClientTestingModule, RouterTestingModule  ],
      providers: [ { provide: MapsAPILoader,  useValue: { load: jasmine.createSpy('load').and.returnValue(new Promise(() => true)) } }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('Deve criar', () => {
    expect(component).toBeTruthy();
  });

  it('Deve ter um card', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let el = compiled.querySelector('.card');

    expect(el).toBeTruthy();
  });

  it('Deve ter um título no card', () => {
    fixture.detectChanges();
    let el = fixture.debugElement.query(By.css('h5')).nativeElement;

    expect(el).toBeTruthy();
  });

  it('Deve ter um link do WebSite', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let el = compiled.querySelector('a');

    expect(el).toBeTruthy();
  });

  it('Deve ter um mapa da localização', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let el = compiled.querySelector('agm-map');

    expect(el).toBeTruthy();
  });
});
