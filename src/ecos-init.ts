import { fastAnchor, fastAnchoredRegion, fastBreadcrumb, fastBreadcrumbItem, fastOption, fastRadio, fastSlider, fastSwitch, fastTextArea, fastTextField, fastDesignSystemProvider } from '@microsoft/fast-components';
import { DesignSystem } from '@microsoft/fast-foundation';

DesignSystem.getOrCreate().register(fastAnchor({prefix: 'ecos'}));
DesignSystem.getOrCreate().register(fastAnchoredRegion({prefix: 'ecos'}));
DesignSystem.getOrCreate().register(fastBreadcrumb({prefix: 'ecos'}));
DesignSystem.getOrCreate().register(fastBreadcrumbItem({prefix: 'ecos'}));
DesignSystem.getOrCreate().register(fastDesignSystemProvider({prefix: 'ecos'}));
DesignSystem.getOrCreate().register(fastOption({prefix: 'ecos'}));
DesignSystem.getOrCreate().register(fastRadio({prefix: 'ecos'}));
DesignSystem.getOrCreate().register(fastSlider({prefix: 'ecos'}));
DesignSystem.getOrCreate().register(fastSwitch({prefix: 'ecos'}));
DesignSystem.getOrCreate().register(fastTextArea({prefix: 'ecos'}));
// DesignSystem.getOrCreate().register(fastTextField({prefix: 'ecos'}));

import { ecosBadge, ecosButton, ecosCard, ecosCheckbox, ecosDialog, ecosMenu, ecosMenuItem, ecosNavBar, ecosSelect, ecosTextField } from './ecos-design-system';
DesignSystem.getOrCreate().register(ecosBadge({prefix: 'ecos'}));
DesignSystem.getOrCreate().register(ecosButton({prefix: 'ecos'}));
DesignSystem.getOrCreate().register(ecosCheckbox({prefix: 'ecos'}));
DesignSystem.getOrCreate().register(ecosCard({prefix: 'ecos'}));
DesignSystem.getOrCreate().register(ecosDialog({prefix: 'ecos'}));
DesignSystem.getOrCreate().register(ecosMenu({prefix: 'ecos'}));
DesignSystem.getOrCreate().register(ecosMenuItem({prefix: 'ecos'}));
DesignSystem.getOrCreate().register(ecosNavBar({prefix: 'ecos'}));
DesignSystem.getOrCreate().register(ecosSelect({prefix: 'ecos'}));
DesignSystem.getOrCreate().register(ecosTextField({prefix: 'ecos'}));

import {  
  EcosArticle,
  EcosBadge, 
  EcosButton3D,
  EcosCalendar,
  EcosCardDialog,
  EcosCardRow,
  EcosCollection,
  EcosColorize,
  EcosContent,
  EcosDateField,
  EcosForm, 
  EcosFormRow, 
  EcosIcon,
  EcosInlineGroup,
  EcosNext,
  EcosSection,
  EcosStack,
  EcosTable,
  EcosTableItem,
  EcosTableRow,
  EcosTextButton,
  EcosTwo,
} from './ecos-design-system';

EcosArticle;
EcosBadge;
EcosButton3D;
EcosCalendar;
EcosCardDialog;
EcosCardRow;
EcosCollection;
EcosColorize;
EcosContent;
EcosDateField;
EcosForm;
EcosFormRow;
EcosIcon;
EcosInlineGroup;
EcosNext;
EcosSection;
EcosStack;
EcosTable;
EcosTableItem;
EcosTableRow;
EcosTextButton;
EcosTwo;