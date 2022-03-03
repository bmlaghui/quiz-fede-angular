import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  getQuestionFromJson(classe:String, matiere:String) {
    let fileName= matiere.replace(/ /g,"-")+"-"+classe.replace(/ /g,"-")+".json"
    return this.http.get<any>("assets/"+fileName)


  }
}
