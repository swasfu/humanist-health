import { Hyperlink } from "./Hyperlink.js";
import { Element } from "./framework/base/Element.js";

export function WikiPage(controller, pageData) {
    const container = new Element('div');
    container.dom.classList.add('wiki-page');
    container.dom.style.width = '600px';
    container.dom.style.height = '100%';
    container.dom.style.display = 'flex';
    container.dom.style.flexDirection = 'column';

    const title = new Element('div');
    title.dom.classList.add('wiki-title');
    title.dom.innerText = pageData.title;
    container.add(title);

    const horizontalRule = new Element('hr');
    horizontalRule.dom.classList.add('wiki-rule');
    container.add(horizontalRule);

    const content = new Element('div');
    content.dom.classList.add('wiki-content');
    const contentSpans = parseContent(controller, pageData.content);
    for(const span of contentSpans) {
        content.add(span);
    }
    container.add(content);

    return container;
}

function parseContent(controller, content) {
    const spans = [];

    while(content.indexOf('[') != -1) {
        const hyperStart = content.indexOf('[');
        const hyperEnd = content.indexOf(']');
        const linkStart = content.indexOf('(', hyperEnd);
        const linkEnd = content.indexOf(')', linkStart);

        const hyperText = content.substring(hyperStart + 1, hyperEnd);
        const linkedPageID = content.substring(linkStart + 1, linkEnd);
        
        const hyperlink = new Hyperlink(controller, hyperText, linkedPageID, linkedPageID);

        if(hyperStart > 0){
            const previousText = new Element('span');
            previousText.dom.classList.add('wiki-text');
            previousText.dom.innerText = content.substring(0, hyperStart);
            spans.push(previousText);
        }

        spans.push(hyperlink);

        content = content.substring(linkEnd + 1);
    }

    if(content.length > 0) {
        const theRest = new Element('span');
        theRest.dom.classList.add('wiki-text');
        theRest.dom.innerText = content;
        spans.push(theRest);
    }

    return spans;
}