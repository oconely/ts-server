import 'reflect-metadata';

export function controller(routePrefix: string) {
  // actual decorator function
  return function(target: Function) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype[key]);
    }
  };
}
