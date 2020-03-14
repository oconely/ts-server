"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function get(path) {
    return function (target, key, desc) {
        // define metadata with target object with target[key] property
        Reflect.defineMetadata('path', path, target, key);
    };
}
exports.get = get;
