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
ng serve Inside your project folder.
```

### Angular commands to run your project

Launch development server and have it open the browser automatically:

```
ng serve -o
```

Launch the server on a specific port:

```
ng serve -o --port=3500
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

## Using \*ngIf

## Using \*ngFor

## \*ngFor for arrays

## Using \*ngSwitch

## Angular Devtools

## Styles

## Styles to the product list

## Class and style

## NgClass and NgStyle

## Creating a form

## Deploy

## Deploy with Firebase Hosting
