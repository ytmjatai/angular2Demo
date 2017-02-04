import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from '../models/user';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService {
    private userUrl = 'services/users';  // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getUsers(): Promise<User[]> {

        return this.http.get(this.userUrl)
            .toPromise()
            // 格式化并返回data
            .then(res => res.json().data as User[])
            // 捕捉异常
            .catch(this.handleError);
    }

    getUser(id: number): Promise<User> {
        return this.getUsers()
            .then(heroes => heroes.find(hero => hero.id === id))
            .catch(this.handleError)
    }

    update(user: User): Promise<User> {
        const url = `${this.userUrl}/${user.id}`
        return this.http.put(url, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(() => user)
            .catch(this.handleError)

    }

    delete(id: number): Promise<void> {
        const url = `${this.userUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        console.error(error);
        return Promise.reject(error.message || error)
    }
}

