import { Controller } from 'src/services/Controller';

export function TestDecorator(BaseClass: typeof Controller) {
  return class Test extends BaseClass {
    constructor() {
      super();
    }

    switchMonthNext = () => {
      console.log(111);
      super.switchMonthNext();
    };
  };
}
