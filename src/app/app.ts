import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  task = signal('')
  tasks = signal<string[]>([]);
  addTask(){
    if(this.task().trim()) {
      this.tasks.update(list => [...list, this.task()]);
      this.task.set('');
    }
  }
  deleteTask(index:number){
    this.tasks.update(list => list.filter((_, i) => i !== index));
    
  }
  //protected readonly title = signal('myApp');
}
