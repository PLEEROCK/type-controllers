import {defaultMetadataArgsStorage} from "../index";
import {ActionTypes} from "../metadata/types/ActionTypes";
import {ActionMetadataArgs} from "../metadata/args/ActionMetadataArgs";

/**
 * Registers an action to be executed when GET request comes on a given route.
 * Applied to controller class methods.
 * 
 * @param route When request comes to this route this action will be executed
 */
export function Get(route?: RegExp): Function;
export function Get(route?: string): Function;
export function Get(route?: string|RegExp): Function {
    return function (object: Object, methodName: string) {
        const metadata: ActionMetadataArgs = {
            route: route,
            target: object.constructor,
            method: methodName,
            type: ActionTypes.GET
        };
        defaultMetadataArgsStorage().actions.push(metadata);
    };
}