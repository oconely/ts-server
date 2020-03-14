import 'reflect-metadata';

export function get(path: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    // define metadata with target object with target[key] property
    Reflect.defineMetadata('path', path, target, key);
  };
}
