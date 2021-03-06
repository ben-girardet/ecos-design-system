import { customElement, FASTElement } from '@microsoft/fast-element';
import { CardRowStyles as styles } from './styles';
import { CardRowTemplate as template } from './template';

@customElement({
  name: 'ecos-card-row',
  template,
  styles
})
export class EcosCardRow extends FASTElement {
  
}