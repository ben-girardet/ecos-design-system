import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";

export const ArticleListStyles = css`
  ${display("grid")}

  :host {
    contain: content;
    display: grid;
    justify-content: center;
    grid-gap: var(--spacing-unit);
  }
  
  @media screen and (min-width: 732px) {
    :host {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;