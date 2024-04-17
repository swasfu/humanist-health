import { Element } from "./framework/base/Element.js";

export function Tooltip(tooltipText) {
    const tooltip = new Element('div');
    tooltip.dom.innerText = tooltipText;
    tooltip.dom.classList.add('tooltip-text');

    return tooltip;
}