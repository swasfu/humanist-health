import { Tooltip } from "./Tooltip.js";
import { Element } from "./framework/base/Element.js";

export function Hyperlink(controller, text, pageID, tooltipText) {
    const hyperlink = new Element('span');
    hyperlink.dom.classList.add('hyperlink');
    hyperlink.dom.innerText = text;
    hyperlink.dom.onclick = () => { controller.switchPage(pageID) };
    if(tooltipText) {
        hyperlink.dom.classList.add('tooltip');
        hyperlink.add(new Tooltip(tooltipText));
    }

    return hyperlink;
}