# Angular 2 Firebase Tools

## A Third Party A2-Firebase Library

There is an official Angular 2 <-> Firebase library in developent by the
team at Firebase / Google:

https://angularfire2.com/

https://github.com/angular/angularfire2

If you are just getting started with Angular 2 and Firebase,
you should probably use that library. It certainly has more documentation
and features than this one.

This third-party library still exists because:

* I started well before the official library.
* I have a couple of applications using it.
* It has a considerably more minimal approach, contrasting the
  "wrap every outside thing in an Angular thing"
  approach used by the above link library and many other libraries out there.

## Introduction

An application should be able to consume data *without* caring
about the on() Firebase API, Firebase events, or the
object-as-pseudo-array convention.

The library currently includes:

* Firebase Observable object, a very straightforward implementation.
* Firebase Observable array, which understands the pattern of events emitted
  by Firebase and produces an observable of the resulting array.

Many areas are still under consideration and development:

* Writing to Firebase.
* Following references (joins)
* A way to generate TS schema from Bolt schema, or vice versa.

## Demo

https://github.com/OasisDigital/angular2-firebase-demo

## Why Observables? Why the async pipe?

By wrapping the Firebase API behind Observables,
then consuming those Observables typically via an async pipe,
it should never be necessary to manually subscribe
and unsubscribe the Observables,
nor manually hook and unhook Firebase events.

I believe that, if you find it necessary to write ngOnDestroy in a visual component,
it is a sign that the component is not yet sufficienty abstracted.

## How to Consume

It will generally "just work" with typescript and webpack.
Other combinations might work, but still need attention.

As far as I can tell, TypeScript with NPM modules is still a topic of much
discussion and work. This library does the following,
it appears to be the preferred approach:

* Leave the TypeScript code in the repository, don't ship it in the NPM package
* Ship ES5 code with .d.ts
* Also ship ES6 code with .d.ts, to enable downstream "tree shaking".

Older versions of this library included typings for Firebase;
the "typings" and related tooling have made that obsolete.
Use typings or other means to obtain the Firebase .d.ts file,
and include it in your project.

For examples of working tsconfig and typings, see the demo:

https://github.com/OasisDigital/angular2-firebase-demo


Kyle Cordes
http://kylecordes.com
