// Angular 2 Toolkit - Firebase Observable Pipes
// Copyright 2015-2016 Oasis Digital - http://oasisdigital.com
//     written by Kyle Cordes - http://kylecordes.com
// started November 2015

import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import "rxjs/add/operator/map";

import {observableFirebaseObject, observableFirebaseArray} from './observableFirebase';

@Pipe({
  name: 'firebaseToObservableObject'
})
export class FirebaseToObservableObjectPipe implements PipeTransform {
  transform(input: Firebase, args: any[] = []):Observable<any> {
    if (input) {
      return observableFirebaseObject(input);
    }
  }
}

@Pipe({
  name: 'firebaseToObservableArray'
})
export class FirebaseToObservableArrayPipe implements PipeTransform {
  transform(input: Firebase, args: any[] = []): Observable<any[]> {
    if (input) {
      return observableFirebaseArray(input);
    }
  }
}

@Pipe({
  name: 'arrayifyObservable'
})
export class ArrayifyObservablePipe implements PipeTransform {
  transform(input: Observable<any>, args: any[] = []): Observable<any[]> {
    if (input) {
      return input.map(x => [x]);
    }
  }
}
