import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'First Angular Project';
  count = 1;

  todoItem: string ="";
  todoList: string[] = [];

  todoAdd= () =>{
    this.todoList.push(this.todoItem);
    this.todoItem = ''
    
  }

  todoReset = () =>{
    this.todoList = [];
  }
  
}





