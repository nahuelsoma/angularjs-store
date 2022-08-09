# Angular Course: Angular.js Store

This repository contains the project developed in the first part of the Angular course.

The following is a step-by-step description of what was learned in each class.

## Getting Started

### Installing Angular CLI

Check Node version:

```
node -v
```

Check npm version:

```
npm -v
```

Install Angular CLI:

```
npm i -g @angular/cli
```

Verify your installation:

```
ng version
```

_The ng version command executed from the project folder provides more detail on the dependencies in use._

Create your first project:

```
ng new <my-project>
```

Run the development server:

```
ng serve
```

Inside your project folder.

### Angular commands to run your project

Launch development server and have it open the browser automatically:

```
ng serve -o
```

Launch the server on a specific port:

```
ng serve --port=3500
```

### Structure of an Angular project

OVERVIEW:

- src folder

Here is the heart of the project, the components, htm, css, etc. are located here.

- .browserslistrc file

Indicates in which browser versions should your application be compatible.

- .editorconfig file

Basic configuration of the code editor style. For this file to work you must have a plugin in the VSCode: EditorConfig for VS Code

- tsconfig.json file

Specifies the Angular-Typescript configuration. It indicates how it will compile, where it will transpile files to, which JavaScript version is used, etc.

- angular.json file

Different work environments can be configured here, such as testing (tester), development and deploy.

- karma.conf.js file

Configuration to run unit testing.

- .nvmrc file

It is recommended to add a _.nvmrc_ file into the root folder to manage node versions.

### TypeScript basics for using Angular

📖 https://www.typescriptlang.org/docs/

## Data communication

## String interpolation

📖 https://angular.io/guide/interpolation

String interpolation is the way to write TypeScript logic in the template (html). In other words, with the syntax _{{ }}_ it is possible to use TypeScript in html.

Variables can be defined into the _app.component.ts_ file into within a _@Component_ decorator:

```ts
// src/app/app.component.ts

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angularjs-store";
}
```

Those variables can be imported into the _app.component.html_ using template literals:

```html
<!-- src/app/app.component.html -->

<p>{{ title }}</p>
```

## Property Binding

📖 https://angular.io/guide/property-binding

Property binding in can be used for set values for properties of HTML elements or directives. Property binding can set toggle button functionality, set paths programmatically, and share values between components.

- Example 1:

```ts
// src/app/app.component.ts

export class AppComponent {
  itemImageUrl = "../assets/phone.png";
}
```

```html
<!-- src/app/app.component.html -->

<img alt="item" [src]="itemImageUrl" />
```

- Example 2:

```ts
// src/app/app.component.ts

export class AppComponent {
  person = {
    name: "John",
    age: 39,
  };
}
```

```html
<!-- src/app/app.component.html -->

<input type="text" [value]="person.name" />
```

## Introduction to Angular Event Binding

📖 https://angular.io/guide/event-binding

📖 https://angular.io/guide/binding-syntax

📖 https://www.eduforbetterment.com/lists-of-useful-events-types-for-event-binding-in-angular/

Event binding lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.

- Example 1: Listening to click action

```ts
// src/app/app.component.ts

export class AppComponent {
  btnDisabled = true;

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
}
```

```html
<!-- src/app/app.component.html -->

<button (click)="toggleButton()">Toggle Button</button>
```

## Other events you can listen to

- Example 2: Listening to scroll position

```ts
// src/app/app.component.ts

export class AppComponent {
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
}
```

```html
<!-- src/app/app.component.html -->

<div class="box" (scroll)="onScroll($event)">
  <p>Lorem ... ... ... .. .. . .</p>
</div>
```

- Example 3:

```ts
// src/app/app.component.ts

export class AppComponent {
  person = {
    name: "John",
    age: 39,
  };

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this person.name = element.value;
  }
}
```

```html
<!-- src/app/app.component.html -->

<input type="text" [value]="person.name" (keyup)="changeName($event)" />
```

## Data binding with ngModel

📖 https://angular.io/guide/two-way-binding

Two-way binding gives components in your application a way to share data. Use two-way binding to listen for events and update values simultaneously between parent and child components.

### ngModel

📖 https://angular.io/guide/forms-overview

📖 https://angular.io/api/forms/NgModel

To use ngModel, first it is necessary to import FormsModule into _app.module.ts_ file:

```ts
// src/app/app.module.ts

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms"; 👈

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule], 👈
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Then, into the _app.component.html_ file:

```html
<!-- src/app/app.component.html -->

<p>Name: {{ person.name }}</p>
<input type="text" required #nameInput="ngModel" [(ngModel)]="person.name" />
<p>Valid: {{nameInput.valid}}</p>

<p>Age: {{ person.age }}</p>
<input
  type="number"
  min="18"
  max="40"
  required
  #ageInput="ngModel"
  [(ngModel)]="person.age"
/>
<p>Valid: {{ageInput.valid}}</p>
```

And remember, into the _app.component.ts_ file:

```ts
// src/app/app.component.ts

export class AppComponent {
  person = {
    name: "John",
    age: 39,
  };
}
```

## Control structures

### Using \*ngIf

📖 https://angular.io/api/common/NgIf

A structural directive that conditionally includes a template based on the value of an expression coerced to Boolean. When the expression evaluates to true, Angular renders the template provided in a then clause, and when false or null, Angular renders the template provided in an optional else clause. The default template for the else clause is blank.

```html
<div *ngIf="condition">Content to render when condition is true.</div>
```

Ejemplo:

```html
<p *ngIf="person.name === 'Juan' && person.age > 18; else otherBlock">
  Content to render when condition is true.
</p>
<ng-template #otherBlock>
  <p>Content to render in else conditions</p>
</ng-template>
```

### Using \*ngFor

Ejemplo:

```html
<!-- src/app/app.component.html -->

<ul>
  <li *ngIf="names.length === 0">Add a new name</li>
  <li *ngFor="let name of names; index as i">
    {{i+1}} - {{ name }}
    <button (click)="deleteName(i)">Delete name</button>
  </li>
</ul>

<input type="text" required [(ngModel)]="newName" />
<button (click)="addName()">Add new student</button>
```

```ts
// src/app/app.component.ts

export class AppComponent {
  names: string[] = ["Juan", "Roberto", "Ana"];

  newName = "";

  addName() {
    this.names.push(this.newName);
    this.newName = "";
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
```

### \*ngFor for arrays

Create an _<object_name>.model.ts_ for object typification.

Example:

```ts
// src/app/product.model.ts

export interface Product {
  name: string;
  price: number;
  description: string;
  category?: string;
}
```

Then, import it in the component file

```ts
// src/app/product.model.ts

import { Product } from './product.model';
...

export class AppComponent {
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://source.unsplash.com/random',
      category: 'category 2',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://source.unsplash.com/random',
    },
    ...
  ]
```

Then, use it into the html file:

```html
<!-- src/app/app.component.html -->

<ul>
  <div *ngFor="let product of products; index as i">
    <p>{{product.name}}</p>
    <p>{{product.price}}</p>
    <img [src]="product.image" width="200" [alt]="product.name" />
    <p>{{product.category}}</p>
  </div>
</ul>
```

### Using \*ngSwitch

📖 https://angular.io/api/common/NgSwitch

The _[ngSwitch]_ directive on a container specifies an expression to match against. The expressions to match are provided by ngSwitchCase directives on views within the container.

- Every view that matches is rendered.
- If there are no matches, a view with the ngSwitchDefault directive is rendered.
- Elements within the _[NgSwitch]_ statement but outside of any NgSwitchCase or ngSwitchDefault directive are preserved at the location.

Example:

```ts
// src/app/app.component.ts

export class AppComponent {
  person = {
    name: "john",
  };
}
```

```html
<!-- src/app/app.component.html -->

<div [ngSwitch]="person.name">
  <input type="text" [(ngModel)]="person.name" />
  <p *ngSwitchCase="'john'">This is John</p>
  <p *ngSwitchCase="'paul'">This is Paul</p>
  <p *ngSwitchCase="'robert'">This is Robert</p>
  <p *ngSwitchDefault="">Who are you?</p>
</div>
```

## Angular Devtools

🧩 https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh

## Styles

## Styles to the product list

Style can be edited into _app.component.scss_ file

Example:

```html
<div class="products--grid">
  <div *ngFor="let product of products">
    <p>{{product.name}}</p>
    <p>{{product.price}}</p>
    <img [src]="product.image" width="200" [alt]="product.name" />
    <p>{{product.category}}</p>
  </div>
</div>
```

```scss
.products--grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  div {
    img {
      width: 100%;
      border-radius: 1rem;
    }
  }
}
```

## Class and style

Example 2: Dynamic style with .scss file

```ts
// src/app/app.component.ts

export class AppComponent {
  person = {
    name: "john",
  };
}
```

```html
<!-- src/app/app.component.html -->

<input type="text" required #nameInput2="ngModel" [(ngModel)]="person.name" />
<p class="message-error" [class.invalid]="nameInput2.invalid">Required field</p>
```

```scss
// src/app/app.component.scss

.message-error {
  background-color: red;
  color: white;
  opacity: 0;
  transition: all linear 0.5s;
  &.invalid {
    opacity: 1;
  }
}
```

Example 3: Style inline

```html
<!-- src/app/app.component.html -->

<input type="text" required #nameInput3="ngModel" [(ngModel)]="person.name" />
<p [style.color]="nameInput3.invalid ? 'red' : 'white'">Required field</p>
```

Example 4: Edit dinamic image size

```ts
// src/app/app.component.ts

export class AppComponent {
  products: Product[] = [
    {
      name: "El mejor juguete",
      price: 565,
      image: "https://picsum.photos/id/15/250",
      category: "category 2",
    },
  ...
  ];

  widthImg: number = 100;
}
```

```html
<!-- src/app/app.component.html -->

<input type="number" [(ngModel)]="widthImg" />
<img [style.width.px]="widthImg" [src]="products[0].image" />
```

In every case, variables must be defined before usage. If they are not defined, an error will be thrown.

## NgClass and NgStyle

Using ngClass:

```html
<!-- src/app/app.component.html -->

<input type="text" required #nameInput4="ngModel" [(ngModel)]="person.name" />
<hr
  class="line-error"
  [ngClass]="{
  'valid': nameInput4.valid,
  'invalid': nameInput.invalid
}"
/>
<p class="message-error" [class.invalid]="nameInput4.invalid">Required field</p>
```

```scss
// src/app/app.component.scss

.line-error {
  height: 0;
  border-bottom: 1px solid;
  &.invalid {
    border-color: red;
  }
  &.valid {
    border-color: green;
  }
}
```

Using ngStyle:

```ts
// src/app/app.component.ts

export class AppComponent {
  box = {
    width: 100,
    height: 100,
    background: "red",
  };
}
```

```html
<!-- src/app/app.component.html -->

<div class="styles">
  <div>
    <input type="number" [(ngModel)]="box.width" />
    <input type="number" [(ngModel)]="box.height" />
    <input type="color" [(ngModel)]="box.background" />
  </div>
  <div>
    <div
      [ngStyle]="{
      'width.px': box.width,
      'height.px': box.height,
      'background-color': box.background,
      'display': 'block'
    }"
    ></div>
  </div>
</div>
```

## Creating a form

```html
<!-- src/app/app.component.html -->

<form (ngSubmit)="onRegister()" #myForm="ngForm">
  <div class="input-group">
    <label for="name">Name</label>
    <input
      type="text"
      name="name"
      required
      id="name"
      [(ngModel)]="register.name"
    />
    <p>Error message</p>
  </div>
  <div class="input-group">
    <label for="email">Email</label>
    <input
      type="email"
      name="email"
      required
      id="email"
      [(ngModel)]="register.email"
    />
    <p>Error message</p>
  </div>
  <div class="input-group">
    <label for="password">Password</label>
    <input
      type="password"
      name="password"
      required
      id="password"
      [(ngModel)]="register.password"
    />
    <p>Error message</p>
  </div>
  <button [disabled]="myForm.invalid" type="submit">Register</button>
</form>
```
