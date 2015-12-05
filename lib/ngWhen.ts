// Angular 2 Toolkit - ngWhen
// Copyright 2015 Oasis Digital - http://oasisdigital.com
//     written by Kyle Cordes - http://kylecordes.com
// November 2015

import {Directive} from 'angular2/src/core/metadata';
import {DoCheck} from 'angular2/core';
import {ViewContainerRef, TemplateRef, ViewRef} from 'angular2/src/core/linker';
import {isPresent, isBlank} from 'angular2/src/facade/lang';

/**
 * TODO document this like NgIf and NgFor,
 * The following is some text from the docs for those things, here for reference.
 *
 * Removes or recreates a portion of the DOM tree based on an {expression}.
 *
 * If the expression assigned to `ng-if` evaluates to a false value then the element
 * is removed from the DOM, otherwise a clone of the element is reinserted into the DOM.
 *
 * ### Example ([live demo](http://plnkr.co/edit/fe0kgemFBtmQOY31b4tw?p=preview)):
 *
 * ```
 * <div *ng-if="errorCount > 0" class="error">
 *   <!-- Error message displayed when the errorCount property on the current context is greater
 * than 0. -->
 *   {{errorCount}} errors detected
 * </div>
 * ```
 *
 *##Syntax
 *
 * - `<div *ng-if="condition">...</div>`
 * - `<div template="ng-if condition">...</div>`
 * - `<template [ng-if]="condition"><div>...</div></template>`

 * The `NgWhen` directive instantiates a template once per item from an iterable. The context for
 * each instantiated template inherits from the outer context with the given loop variable set
 * to the current item from the iterable.
 *
 * # Change Propagation
 *
 * When the contents of the iterator changes, `NgWhen` makes the corresponding changes to the DOM:
 *
 * * When the item becomes non-null, an instance of the template is added to the DOM.
 * * When the item becomes null, its template instance is removed from the DOM.
 *
 * # Syntax
 *
 * - `<li *ng-for="#item of items; #i = index">...</li>`
 * - `<li template="ng-for #item of items; #i = index">...</li>`
 * - `<template ng-for #item [ng-for-of]="items" #i="index"><li>...</li></template>`
 *
 * ### Example
 *
 * See a [live demo](TODO) for a more detailed
 * example.
 */
@Directive({ selector: '[ng-when][ng-when-is]', inputs: ['ngWhenIs', 'ngWhenTemplate'] })
export class NgWhen {
  /** @internal */
  private _prevCondition: boolean = null;

  constructor(private _viewContainer: ViewContainerRef, private _templateRef: TemplateRef) { }

  set ngWhenIs(newCondition: any) {
    if (newCondition && (isBlank(this._prevCondition) || !this._prevCondition)) {
      this._prevCondition = true;
      this._viewContainer.createEmbeddedView(this._templateRef).setLocal('\$implicit', newCondition);
    } else if (!newCondition && (isBlank(this._prevCondition) || this._prevCondition)) {
      this._prevCondition = false;
      this._viewContainer.clear();
    }
  }

  set ngWhenTemplate(value: TemplateRef) {
    if (isPresent(value)) {
      this._templateRef = value;
    }
  }
}
