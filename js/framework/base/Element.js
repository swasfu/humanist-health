export class Element {
    constructor(tagName) {
        this.dom = document.createElement(tagName);
        this.children = [];
        this.styles = [];
    }

    add(child) {
        this.dom.appendChild(child.dom);
        this.children.push(child);
    }

    remove(child) {
        const childIndex = this.children.indexOf(child);
        if(childIndex != -1) {
            this.dom.removeChild(child.dom);
        }
        this.children.splice(childIndex, 1);
    }

    clear() {
        this.children = [];
        while(this.dom.firstChild) {
            this.dom.removeChild(this.dom.lastChild);
        }
    }

    addStyle(style) {
        if(this.styles.indexOf(style) == -1) {
            this.styles.push(style);
        }
        this.renderStyles();
    }

    removeStyle(style) {
        const styleIndex = this.styles.indexOf(style); 
        if(styleIndex != -1) {
            this.styles.splice(styleIndex, 1);
        }
        this.renderStyles();
    }

    renderStyles() {
        let styleString = "";
        for(const style of this.styles) {
            styleString += style.renderString();
        }
        this.dom.style = styleString;
    }
}