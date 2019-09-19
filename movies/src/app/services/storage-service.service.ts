import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // set data inside the local storage
  setItem(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // get data from the local storage
  getItem(key: string) {
    return localStorage.getItem(key);
  }
  
  // get all local storage data
  allStorage() {
    let localStorageData = []
    let keys = Object.keys(localStorage);
    let length = keys.length;
    while (length--) {
      localStorageData.push(JSON.parse(localStorage.getItem(keys[length])));
    }
    return localStorageData;
  }

}
