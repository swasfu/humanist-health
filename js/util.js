export function isDefined(object) {
    if(object) return true;
    else return false;
}

export function isIterable(object) {
    if(Symbol.iterator in Object(object)) {
        return true;
    }
    else return false;
}