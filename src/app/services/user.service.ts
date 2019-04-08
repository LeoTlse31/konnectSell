import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models';

@Injectable({ providedIn: 'root' })

export class UserService {
	
	url;
    constructor(private http: HttpClient) {

	this.url = "127.0.0.1:8000";
	}

	
    getAll() {
        return this.http.get<User[]>(this.url+"/users");
    }

    getById(id: number) {
        return this.http.get(this.url+"/users/${id)");
    }

    register(user: User) {
        return this.http.post(this.url+"/users/register", user);
    }

    update(user: User) {
        return this.http.put(this.url+"/users/${user.id}", user);
    }

    delete(id: number) {
        return this.http.delete(this.url+"/users/${id}");
    }
}