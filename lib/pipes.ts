import {Pipe, PipeTransform, Observable} from 'angular2/angular2';

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
