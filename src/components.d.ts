/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface DatePicker {}
  interface MYPicker {
    'next': () => any;
    'prev': () => any;
  }
}

declare global {


  interface HTMLDatePickerElement extends Components.DatePicker, HTMLStencilElement {}
  var HTMLDatePickerElement: {
    prototype: HTMLDatePickerElement;
    new (): HTMLDatePickerElement;
  };

  interface HTMLMYPickerElement extends Components.MYPicker, HTMLStencilElement {}
  var HTMLMYPickerElement: {
    prototype: HTMLMYPickerElement;
    new (): HTMLMYPickerElement;
  };
  interface HTMLElementTagNameMap {
    'date-picker': HTMLDatePickerElement;
    'm-y-picker': HTMLMYPickerElement;
  }
}

declare namespace LocalJSX {
  interface DatePicker {}
  interface MYPicker {
    'next'?: () => any;
    'prev'?: () => any;
  }

  interface IntrinsicElements {
    'date-picker': DatePicker;
    'm-y-picker': MYPicker;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'date-picker': LocalJSX.DatePicker & JSXBase.HTMLAttributes<HTMLDatePickerElement>;
      'm-y-picker': LocalJSX.MYPicker & JSXBase.HTMLAttributes<HTMLMYPickerElement>;
    }
  }
}


