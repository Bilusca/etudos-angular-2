import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  getCursos(){
    return ['Angular', 'ReactJS', 'Node'];
  }
}