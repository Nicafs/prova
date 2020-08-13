import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { UserService } from '@services';
import { User } from '@models';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let users: User[] =
    [
      {
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
      },
    ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar', () => {
    expect(component).toBeTruthy();
  });

  it('Deve ter um título', () => {
    fixture.detectChanges();
    let el = fixture.debugElement.query(By.css('h1')).nativeElement;

    expect(el).toBeTruthy();
  });

  it('Deve ter uma tabela', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let el = compiled.querySelector('table');

    expect(el).toBeTruthy();
  });

  it('Deve ter uma classe na tabela chamada table-click', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let el = compiled.querySelector('table');

    expect(el).toHaveClass('table-click');
  });
});
