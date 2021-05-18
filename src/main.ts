import { AnimatedSVG } from './custom-elements/animated-svg/index';
import { AnimatedSVG2 } from './custom-elements/animated-svg2/index';
import { 
  AureliaEcosAdapter,

  EcosAnchor, 
  EcosArticle, 
  EcosArticleList, 
  EcosBadge, 
  EcosBreadcrumb,
  EcosBreadcrumbItem,
  EcosButton, 
  EcosButton3D,
  EcosCard,
  EcosCollection,
  EcosColorize,
  EcosDesignSystemProvider, 
  EcosDialog,
  EcosForm, 
  EcosFormRow, 
  EcosIcon,
  EcosNavbar,
  EcosOption,
  EcosSection,
  EcosSelect,
  EcosSlider,
  EcosStack,
  EcosTextField,
  EcosTwo,
} from './ecos-design-system';
import Aurelia from 'aurelia';
import { LoggerConfiguration, LogLevel, ConsoleSink, ColorOptions } from 'aurelia';
import { RouterConfiguration } from 'aurelia-direct-router';
import { EcosApp } from './ecos-app';
import * as routes from './routes';

import { User as OutlineUser } from './ecos-design-system/icons/outline';
import { User as SolidUser } from './ecos-design-system/icons/solid';
import { Adjustments as OutlineAdjustments } from './ecos-design-system/icons/outline';
import { Adjustments as SolidAdjustments } from './ecos-design-system/icons/solid';
import { ArrowNarrowRight as OutlineArrowNarrowRight } from './ecos-design-system/icons/outline';
import { ArrowNarrowRight as SolidArrowNarrowRight } from './ecos-design-system/icons/solid';
import { ArrowCircleRight as OutlineArrowCircleRight } from './ecos-design-system/icons/outline';
import { ArrowCircleRight as SolidArrowCircleRight } from './ecos-design-system/icons/solid';
import { X as OutlineX } from './ecos-design-system/icons/outline';
import { X as SolidX } from './ecos-design-system/icons/solid';

import { EcosSettings } from './custom-elements/ecos-settings/ecos-settings';
import { AuSnippet } from './custom-elements/au-snippet/au-snippet';

EcosAnchor;
EcosArticle;
EcosArticleList;
EcosBadge;
EcosBreadcrumb;
EcosBreadcrumbItem;
EcosButton;
EcosButton3D;
EcosCard;
EcosCollection;
EcosColorize;
EcosDesignSystemProvider;
EcosDialog;
EcosForm;
EcosFormRow;
EcosIcon;
EcosNavbar;
EcosOption;
EcosSection;
EcosSelect;
EcosSlider;
EcosStack;
EcosTextField;
EcosTwo;

EcosIcon.outline['User'] = OutlineUser;
EcosIcon.solid['User'] = SolidUser;
EcosIcon.outline['Adjustments'] = OutlineAdjustments;
EcosIcon.solid['Adjustments'] = SolidAdjustments;
EcosIcon.outline['ArrowNarrowRight'] = OutlineArrowNarrowRight;
EcosIcon.solid['ArrowNarrowRight'] = SolidArrowNarrowRight;
EcosIcon.outline['ArrowCircleRight'] = OutlineArrowCircleRight;
EcosIcon.solid['ArrowCircleRight'] = SolidArrowCircleRight;
EcosIcon.outline['X'] = OutlineX;
EcosIcon.solid['X'] = SolidX;

AnimatedSVG;
AnimatedSVG2;

Aurelia
  // .register(routes)
  // .register(WelcomePage, MissingPage, ComponentsIndex, UseCasesIndex, TheProject)
  .register(routes)
  .register(LoggerConfiguration.create({
    level: LogLevel.debug,
    sinks: [ConsoleSink],
    colorOptions: ColorOptions.colors
  }))
  .register(RouterConfiguration.customize({ 
    useUrlFragmentHash: true,
    swapOrder:'attach-next-detach-current'
  }))
  .register(AureliaEcosAdapter)
  .register(EcosSettings)
  .register(AuSnippet)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(EcosApp)
  .start();
