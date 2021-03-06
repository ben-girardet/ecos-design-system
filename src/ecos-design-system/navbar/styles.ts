import { css } from '@microsoft/fast-element';
import { display } from "@microsoft/fast-foundation";
import { neutralLayer1, neutralLayer4, neutralForegroundRest } from '@microsoft/fast-components';

// copy from fast-components non exported variable
export const heightNumber =
    "(var(--base-height-multiplier) + var(--density)) * var(--design-unit)";

export const navbarHeightNumber =
  `(${heightNumber}) + 2 * var(--design-unit) + (10 + (var(--design-unit) * 2 * max(0, var(--density))))`;

export const NavbarStyles = css`
  ${display("block")}

  :host {
    position: relative;
    z-index: 2;
    width: 100%;
  }

  :host(.fixed) {
    position: fixed;
  }

  .navbar {
    position: relative;
    z-index: 2;
    height: calc((${navbarHeightNumber}) * 1px);
    width: 100%;
    box-sizing: border-box;
    font-family: var(--body-font);
    font-size: var(--type-ramp-base-font-size);
    line-height: var(--type-ramp-base-line-height);
    padding-left: calc(var(--design-unit) * 4px);
    padding-right: calc(var(--design-unit) * 4px);
    box-shadow: var(--elevation2);
    background: ${neutralLayer4};
    color: ${neutralForegroundRest};
    transition: 500ms ease;
    transition-property: background-color, box-shadow;
  }
  :host(.transparent-first:not(.scrolled)) .navbar {
    background-color: transparent;
    box-shadow: none;
  }
  .navbar.secondary-opened {
    box-shadow: none;
  }
  :host(.navbar-layer-1) .navbar {
    background: ${neutralLayer1};
  }

  .navbar-content {
    display: grid;
    height: 100%;
    max-width: 100ch;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: flex-start;
  }

  /* (mobile) mode */
  .navbar-content {
    grid-template-columns: 1fr 50px;
  }
  .branding {
    justify-self: start;
    display: flex;
  }
  .main {
    display: none;
  }
  .right-container {
    display: none;
  }
  .secondary {
    display: none;
  }
  .right {
  }
  .secondary-toggler {
    cursor: pointer;
  }
  .secondary-toggler ::part(control) {
    cursor: pointer;
  }
  .toggler {
    justify-self: end;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
  }
  .toggler > svg {
    width: 24px;
    height: 24px;
  }
  .mobile-content {
    transition: transform 250ms ease, opacity 250ms ease;
    position: absolute;
    z-index: 1;
    top: calc((${navbarHeightNumber}) * 1px);
    width: 100%;
    padding: calc(var(--design-unit) * 4px);
    background: ${neutralLayer4};
    color: ${neutralForegroundRest};
    box-shadow: var(--elevation2);
  }
  :host(.navbar-layer-1) .mobile-content {
    background: ${neutralLayer1};
  }
  .mobile-content[hidden] {
    display: block;
    opacity: 0;
    transform: translateY(-100%);
    pointer-events: none;
  }

  .mobile-main,
  .mobile-secondary,
  .mobile-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .mobile-secondary,
  .mobile-right {
    margin-top: calc(var(--design-unit) * 4px);
  }

  /* (desktop) mode */
  @media screen and (min-width: 732px) {
    .navbar-content {
      grid-template-columns: 1fr max-content 1fr;
    }
    .main {
      display: block;
      justify-self: center;
    }
    .right-container {
      display: block;
      justify-self: end;
    }
    .secondary-content {
      box-sizing: border-box;
      transition: transform 250ms ease, opacity 250ms ease;
      position: absolute;
      z-index: 1;
      top: calc((${navbarHeightNumber}) * 1px);
      width: 100%;
      padding: calc(var(--design-unit) * 4px);
      text-align: center;
      box-shadow: var(--elevation2);
      background: ${neutralLayer4};
      color: ${neutralForegroundRest};
    }
    .secondary-content[hidden] {
      display: block;
      opacity: 0;
      transform: translateY(-100%);
      pointer-events: none;
    }
    :host(.navbar-layer-1) .secondary-content {
      background: ${neutralLayer1};
    }
    .toggler {
      display: none;
    }
  }
`;