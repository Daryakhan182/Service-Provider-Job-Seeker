import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private storage: Storage) {}

  public saveTokenToStorage(token: string) {
    this.storage.set('token', token);
  }

  public async getTokenFromStorage() {
    return await this.storage.get('token');
  }
}