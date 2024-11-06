import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component'; // Use named export
import { TodoComponent } from './todo/todo.component'; // Use named export

@NgModule({
  imports: [
    BrowserModule,
    TodoComponent // Import TodoComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow usage of custom elements
  bootstrap: [AppComponent] // Bootstrap the AppComponent
})
export class AppModule { }
