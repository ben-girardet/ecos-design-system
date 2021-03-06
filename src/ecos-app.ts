import { ICustomElementViewModel, customElement, inject } from 'aurelia';
import { IRouterConfiguration, Navigation, RoutingInstruction, IRouter } from 'aurelia-direct-router';
import template from './ecos-app.html';
import components from './routes/components/components.json';
import { AureliaEcosIconLoader } from './ecos-icons';
import { enhanceNeutralFillInputDesignTokens } from './ecos-design-system';

@inject(IRouterConfiguration, IRouter, AureliaEcosIconLoader)
@customElement({name: 'ecos-app', template})
export class EcosApp implements ICustomElementViewModel {

  public displayComponentsList = false;
  public isUseCaseRouterInUse = false;
  public componentsList = components;

  public constructor(
    @IRouterConfiguration private routerConfiguration: IRouterConfiguration,
    @IRouter private router: IRouter,
    private iconLoader: AureliaEcosIconLoader
    ) {
    this.initIcons();
    enhanceNeutralFillInputDesignTokens();
    this.handleUrlRoutes();
    this.routerConfiguration.addHook((instructions: RoutingInstruction[], navigation: Navigation) => {
      // when routing we want to scroll the viewport up again
      const vp = document.querySelector('au-viewport');
      if (vp) {
        const child = vp.firstChild;
        if (child instanceof Element) {
          child.scrollIntoView();
        }
      }
      return true;
    });
    this.routerConfiguration.addHook((instructions: RoutingInstruction[], navigation: Navigation) => {
      this.displayComponentsList = instructions.find(i => i.viewport.name === 'components-viewport') !== undefined && instructions.find(i => i.component.name === 'components-list') === undefined;
      this.isUseCaseRouterInUse = instructions.find(i => i.viewport.name === 'use-cases-viewport') !== undefined && instructions.find(i => i.component.name === 'use-cases-list') === undefined;
      this.handleBodyStyles();
      return true;
    });
  }

  private handleUrlRoutes() {
    this.routerConfiguration.addHook(
          (url: string) => {
            return url;
          },
          { type: 'transformFromUrl' }
    );
    this.routerConfiguration.addHook(
      (instructions: string | RoutingInstruction[]) => {
        return instructions;
      },
      { type: 'transformToUrl'}
    );
  }

  private handleBodyStyles() {
    if (this.isUseCaseRouterInUse) {
      setTimeout(() => {
        document.body.classList.add('use-cases-on');
      }, 150);
    } else {
      document.body.classList.remove('use-cases-on');
    }
  }

  public async initIcons(): Promise<void> {
    this.iconLoader.load('User', import('./icons/outline/User'), import('./icons/solid/User'));
    this.iconLoader.load('Pencil', import('./icons/outline/Pencil'), import('./icons/solid/Pencil'));
    this.iconLoader.load('Adjustments', import('./icons/outline/Adjustments'), import('./icons/solid/Adjustments'));
    this.iconLoader.load('ArrowNarrowRight', import('./icons/outline/ArrowNarrowRight'), import('./icons/solid/ArrowNarrowRight'));
    this.iconLoader.load('ArrowCircleRight', import('./icons/outline/ArrowCircleRight'), import('./icons/solid/ArrowCircleRight'));
    this.iconLoader.load('X', import('./icons/outline/X'), import('./icons/solid/X'));
    this.iconLoader.load('DotsHorizontal', import('./icons/outline/DotsHorizontal'), import('./icons/solid/DotsHorizontal'));
    this.iconLoader.load('ChevronLeft', import('./icons/outline/ChevronLeft'), import('./icons/solid/ChevronLeft'));
    this.iconLoader.load('ChevronRight', import('./icons/outline/ChevronRight'), import('./icons/solid/ChevronRight'));
    this.iconLoader.load('Calendar', import('./icons/outline/Calendar'), import('./icons/solid/Calendar'));
  }

}
