import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";

export const FormStyles = css`
  ${display("grid")}

  :host {
    contain: content;
    grid-gap: calc(var(--spacing-unit) * 0.5);
  }
`;