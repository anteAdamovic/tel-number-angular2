import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material/core';

interface CountryCode {
  id: number;
  code: string;
  img: string;
}

@Component({
  selector: 'm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public countryCodes: CountryCode[] = [
    {
      id: 1,
      code: "+385",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/2560px-Flag_of_Croatia.svg.png"
    },
    {
      id: 2,
      code: "+47",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/468px-Flag_of_Norway.svg.png"
    }
  ];

  @ViewChild("numberInput") numberInput!: ElementRef<HTMLInputElement>;

  public countryCodeSelected(event: MatOptionSelectionChange) {
    setTimeout(() => this.numberInput.nativeElement.focus(), 10);
  }
}
