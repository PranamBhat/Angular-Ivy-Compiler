import {
  Component,
  ɵrenderComponent as renderComponent,
  ɵComponentType as ComponentType
} from '@angular/core';


@Component({
  selector: 'app-hello',
  template: `
    <h1>
      <p style="text-align:center; font-weight: bold;"> Welcome To {{ title }}! </p>
    </h1>
  `,
})
export class AppComponent {
  title = 'Angular Ivy Compiler';
}

renderComponent(AppComponent as ComponentType<AppComponent>);
