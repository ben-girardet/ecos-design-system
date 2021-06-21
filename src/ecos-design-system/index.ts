import 'modern-css-reset';

export * from './anchor';
export * from './anchored-region';
export * from './article';
export * from './badge';
export * from './breadcrumb';
export * from './button';
export * from './button-3d';
export * from './card';
export * from './card-dialog';
export * from './card-row';
export * from './collection';
export * from './colorize';
export * from './content';
export * from './design-system-provider';
export * from './dialog';
export * from './form';
export * from './form-row';
export * from './icon';
export * from './inline-group';
export * from './menu';
export * from './menu-item';
export * from './next';
export * from './navbar';
export * from './section';
export * from './select';
export * from './slider';
export * from './stack';
export * from './table';
export * from './table-item';
export * from './table-row';
export * from './text-field';
export * from './two';

import './typography.css';
import './utilities.css';
import './compositions.css';

import { navbarHeightNumber } from './navbar/styles';
const navbarContentStyles = document.createElement(`style`);
navbarContentStyles.innerHTML = `.navbar-content {padding-top: calc((${navbarHeightNumber}) * 1px)}`;
document.head.appendChild(navbarContentStyles);