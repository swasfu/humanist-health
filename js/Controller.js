import { Header } from "./Header.js";
import { Element } from "./framework/base/Element.js";
import { WikiPage } from "./WikiPage.js";

export class Controller extends Element {
    constructor() {
        super('div');
        this.dom.style.width = '100%';
        this.dom.style.height = '100%';
        this.dom.style.display = 'flex';
        this.dom.style.flexDirection = 'column';

        this.header = new Header(this);
        this.add(this.header);

        this.content = new Element('div');
        this.content.dom.style.display = 'flex';
        this.content.dom.style.flexDirection = 'column';
        this.content.dom.style.alignItems = 'center';
        this.content.dom.style.justifyContent = 'center';
        this.add(this.content);

        const underConstruction = new Element('div');
        underConstruction.dom.classList.add('under-construction');
        const underConstructionClose = new Element('span');
        underConstructionClose.dom.innerText = 'X';
        underConstructionClose.dom.classList.add('under-construction-close');
        underConstructionClose.dom.onclick = () => {
            console.log("clicky")
            underConstruction.dom.style.display = 'none';
        }
        underConstruction.add(underConstructionClose);

        const underConstructionText = new Element('div');
        underConstructionText.dom.innerHTML = 'UNDER CONSTRUCTION... <br>beware ... ... ....?';
        underConstructionText.dom.classList.add('under-construction-text');
        underConstruction.add(underConstructionText);

        const underConstructionGif = new Element('img');
        underConstructionGif.dom.src = './scary.gif';
        underConstruction.add(underConstructionGif);

        this.add(underConstruction);

        const url = new URL(window.location.href);
        if(url.searchParams.get('page')){
            this.loadPage(url.searchParams.get('page'));
        } else {
            this.switchPage('home');
        }
    }

    switchPage(pageID) {
        const url = new URL(window.location.href);
        url.searchParams.set('page', pageID);
        window.location.href = url.href;
    }

    loadPage(pageID) {
        this.content.clear();
        this.readPage(pageID).then((page) => { 
            this.content.add(page);
            const schizo = new Element('img');
            schizo.dom.style.alignSelf = 'center';
            schizo.dom.src = './insane.gif';
            schizo.dom.style.marginTop = `${10 + Math.floor(Math.random() * 50)}`;
            schizo.dom.width = Math.floor(50 + Math.random() * 400);
            schizo.dom.height = Math.floor(50 + Math.random() * 400);
            page.add(schizo); 
        });
    }

    readPage(pageID) {
        return new Promise((resolve, reject) => {
            fetch(`./pages/${pageID}.json`).then((response) => response.json()).then((json) => {
                resolve(new WikiPage(this, json));
            });
        });
    }
}