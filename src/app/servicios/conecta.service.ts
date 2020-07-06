
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConectaService {
	constructor(private httpClient: HttpClient) {}

	getPasajeros(): Observable<any> {
		return this.httpClient.get('./../assets/personas.json');
	}


}