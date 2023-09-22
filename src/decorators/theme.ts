import { CustomTheme, DecoratorBaseClass } from '@appTypes/index';

export function themeDecorator(BaseClass: DecoratorBaseClass, theme: CustomTheme) {
  return class extends BaseClass {
    constructor() {
      super();
      this.withThemeDecorator = true;
      this.customTheme = theme;
    }
  };
}
