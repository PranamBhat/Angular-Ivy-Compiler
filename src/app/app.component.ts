import {
  Component ,
  ɵrenderComponent as renderComponent,
  ɵComponentType as ComponentType
} from '@angular/core';


@Component({
  selector: 'app-hello',
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>
  `,
})
export class AppComponent {
  title = 'angular-ivy';
}


renderComponent(AppComponent as ComponentType<AppComponent>);
