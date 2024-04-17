import { Element } from "./base/Element.js";
import { Style } from "./base/Style.js";

export class Dropdown extends Element {
    constructor(titleText) {
        super('div');

        this.dom.classList.add('dropdown');
        this.dom.style.position = 'relative';
        //this.dom.style.overflow = 'visible';

        this.title = new Element('p');
        this.title.dom.innerText = titleText;
        this.add(this.title);

        this.items = new Element('div');
        this.items.dom.style.position = 'absolute';
        this.items.dom.style.width = 'max-content';
        this.items.dom.style.left = '0%';
        this.items.dom.style.top = '100%';
        this.items.dom.style.display = 'none';
        this.items.dom.style.flexDirection = 'column';

        this.dom.onmouseover = () => {
            this.items.dom.style.display = 'flex';
        }
        this.dom.onmouseout = () => {
            this.items.dom.style.display = 'none';
        }
        this.add(this.items);
    }
}