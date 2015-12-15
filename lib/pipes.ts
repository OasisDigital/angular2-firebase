import {Pipe, PipeTransform} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

import {observableFirebaseObject, observableFirebaseArray} from './observableFirebase';

@Pipe({
  name: 'firebaseToObservableObject'
})
export class FirebaseToObservableObjectPipe implements PipeTransform {
  transform(input: Firebase, args: any[] = []) {
    if (input) {
      return observableFirebaseObject(input);
    }
  }
}

@Pipe({
  name: 'firebaseToObservableArray'
})
export class FirebaseToObservableArrayPipe implements PipeTransform {
  transform(input: Firebase, args: any[] = []) {
    if (input) {
      return observableFirebaseArray(input);
    }
  }
}
