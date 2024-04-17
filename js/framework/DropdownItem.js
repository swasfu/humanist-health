import { Element } from "./base/Element.js";

export class DropdownItem extends Element {
    constructor(text, action) {
        super('div');
        this.dom.classList.add('dropdown-item');
        this.dom.width = 'max-content';
        this.dom.innerText = text;
        this.dom.onclick = action;
    }
}