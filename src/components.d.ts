import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';

export namespace Components {
  interface DatePicker {}
}

declare global {
  interface HTMLDatePickerElement extends Components.DatePicker, HTMLStencilElement {}
  var HTMLDatePickerElement: {
    prototype: HTMLDatePickerElement;
    new (): HTMLDatePickerElement;
  };
  interface HTMLElementTagNameMap {
    'date-picker': HTMLDatePickerElement;
  }
}

declare namespace LocalJSX {
  interface DatePicker {}

  interface IntrinsicElements {
    'date-picker': DatePicker;
  }
}

export { LocalJSX as JSX };

declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'date-picker': LocalJSX.DatePicker & JSXBase.HTMLAttributes<HTMLDatePickerElement>;
    }
  }
}
