import { FASTCard, CardStyles as styles, neutralForegroundRestBehavior } from '@microsoft/fast-components';
import { customElement, css } from '@microsoft/fast-element';
import { CardTemplate as template } from '@microsoft/fast-foundation';

// Current implementation of Fast Card do not correctly set the color to the card content
// this is due to performance. The issue to follow about this is: https://github.com/microsoft/fast/issues/3987
// Meanwhile I have a fix in the ecos implementation that is not as good perf-wise but at least 
// generate satisfying result
// I also created a PR (not submitted) here: https://github.com/ben-girardet/fast/tree/fix-card-color

export const fixedColorStyles = css`
  :host {
    color: ${neutralForegroundRestBehavior.var}
  }
`.withBehaviors(neutralForegroundRestBehavior);

@customElement({
  name: "ecos-card",
  template,
  styles: [styles, fixedColorStyles]
})
export class EcosCard extends FASTCard {}