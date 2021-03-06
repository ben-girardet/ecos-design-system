// based on: https://www.joshwcomeau.com/animation/3d-button/#started-from-the-button-now-we-here
import { customElement } from '@microsoft/fast-element';
import { ButtonTemplate as template } from './template';
import { Button3dStyles } from './styles';
import { EcosButton } from '../button';

@customElement({
  name: "ecos-button-3d",
  template,
  styles: [Button3dStyles],
  shadowOptions: {
      delegatesFocus: true,
  },
})
export class EcosButton3D extends EcosButton {}
