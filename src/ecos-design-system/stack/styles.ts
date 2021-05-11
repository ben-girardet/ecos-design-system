import { css } from '@microsoft/fast-element';

export const StackStyles = css`
  
  .ecos-stack:not(.ecos-stack--inline):not(.ecos-section) {
    display: block;
    contain: content;
  }
  .ecos-stack:not(.ecos-stack--inline) > * + * {
    margin-top: calc(var(--type-ramp-base-font-size) + ((var(--design-unit) * 2 * max(0, var(--density))) * 1px));
  }
  .ecos-stack--large:not(.ecos-stack--inline) > * + * {
    margin-top: calc((var(--type-ramp-base-font-size) * 2) + ((var(--design-unit) * 2 * max(0, var(--density))) * 1px));
  }
  .ecos-stack--small:not(.ecos-stack--inline) > * + * {
    margin-top: calc((var(--type-ramp-base-font-size) * 0.5) + ((var(--design-unit) * 2 * max(0, var(--density))) * 1px));  
  }

  .ecos-stack.ecos-stack--inline {
    display: inline;
    contain: content;
  }
  .ecos-stack.ecos-stack--inline > * + * {
    margin-left: calc(var(--type-ramp-base-font-size) + ((var(--design-unit) * 2 * max(0, var(--density))) * 1px));
  }
  .ecos-stack--large.ecos-stack--inline > * + * {
    margin-left: calc((var(--type-ramp-base-font-size) * 2) + ((var(--design-unit) * 2 * max(0, var(--density))) * 1px));
  }
  .ecos-stack--small.ecos-stack--inline > * + * {
    margin-left: calc((var(--type-ramp-base-font-size) * 0.5) + ((var(--design-unit) * 2 * max(0, var(--density))) * 1px));  
  }

`;