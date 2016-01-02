# Angular 2 Firebase Tools

This library is a work in progress, looking for the best idioms
to use Firebase from Angular 2. The goal is to treat the Firebase
API as a low-level layer, and build something on top of it such
that application code can be more concise.
An application should be able to consume data without caring
about the on() Firebase API, Firebase events, or the
object-as-pseudo-array convention.

The library currently includes:

* Firebase Observable object, a very straightforward implementation.
* Firebase Observable array, which understands the pattern of events emitted
  by Firebase and produces an observable of the resulting array.

Many areas are still under consideration and development:

* Writing to Firebase.
* Following references (joins)
* Ideally, a way to generate TS schema from Bolt schema.

## Demo

https://github.com/OasisDigital/angular2-firebase-demo

## Why Observables? Why the async pipe?

By wrapping the firebase API behind Observables,
then consuming those Observables via an async pipe,
it should never be necessary to manually subscribe
and unsubscribe the Observables,
nor manually hook and unhook Firebase events.

I believe that, if you find it necessary to write ngOnDestroy in a visual component,
it is a sign that the component is not yet sufficienty abstracted.

## How to Consume

It will generally "just work" with typescript and webpack.
Other combinations might work, but still need attention.

As far as I can tell, Typescript with NPM modules is still a topic of much
discussion and work. Some examples suggest shipping only the Typescript code,
but then the package can only be consumed by a project using typescript.
Others suggest shipping the compiled code also, as is done here.

The situation is worse with "typing" files. To get a clean compilation
it was necessary to include the firebase typing in this module; but that
can conflict if you also include that same firebase typing in the
application consuming this module. The ultimate answer is that projects
should ship their own TypeScript typings; as of version 2.3.1 the
Firebase NPM module does not include its typings.


Kyle Cordes
http://kylecordes.com
