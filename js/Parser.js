import { Element } from "./framework/base/Element.js";

export function readPage(pageID) {
    const page = new Element('div');
    fetch(`./pages/${pageID}.json`).then((response) => response.json()).then((json) => {
        console.log(json);
    })
}