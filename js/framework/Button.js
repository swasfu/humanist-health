import { Element } from './base/Element.js';

export class Button extends Element {
    constructor(text) {
        super('button');
        this.dom.innerHTML = text;
    }
}