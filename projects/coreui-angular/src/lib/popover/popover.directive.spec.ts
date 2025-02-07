import { ChangeDetectorRef, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { ListenersService } from '../services/listeners.service';
import { PopoverDirective } from './popover.directive';

describe('PopoverDirective', () => {
  let document: Document;
  let renderer: Renderer2;
  let hostElement: ElementRef;
  let viewContainerRef: ViewContainerRef;
  let changeDetectorRef: ChangeDetectorRef;

  it('should create an instance', () => {
    const listenersService = new ListenersService(renderer);
    const directive = new PopoverDirective(document, renderer, hostElement, viewContainerRef, listenersService, changeDetectorRef);
    expect(directive).toBeTruthy();
  });
});
