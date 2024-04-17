import { Element } from "./framework/base/Element.js";
import { Style } from "./framework/base/Style.js";
import { Dropdown } from "./framework/Dropdown.js";
import { DropdownItem } from "./framework/DropdownItem.js";

export function Header(controller) {
    const container = new Element('div');
    container.dom.classList.add('header');
    container.dom.style.display = 'flex';
    container.dom.style.flexDirection = 'row';
    container.dom.style.width = '100%';
    
    const title = new Element('div');
    title.dom.innerText = "Humanist Health";
    title.dom.style.fontSize = '40px';
    title.dom.style.fontWeight = 'bold';
    title.dom.style.margin = '5px';
    title.dom.style.cursor = 'pointer';
    title.dom.onclick = () => { controller.switchPage('home') };
    container.add(title);

    const nutritionDropdown = new Dropdown('Nutrition');
    container.add(nutritionDropdown);

    const sugarItem = new DropdownItem("Sugar", () => { controller.switchPage('nutrition/sugar') });
    nutritionDropdown.items.add(sugarItem);
    
    const exerciseDropdown = new Dropdown('Exercise');
    container.add(exerciseDropdown);

    const strengthItem = new DropdownItem("Strength", () => { controller.switchPage('exercise/strength') });
    exerciseDropdown.items.add(strengthItem);

    const cardioItem = new DropdownItem("Cardio", () => { controller.switchPage('exercise/cardio') });
    exerciseDropdown.items.add(cardioItem);
    
    const stressDropdown = new Dropdown('Stress');
    container.add(stressDropdown);

    const stressItem = new DropdownItem("What is stress?", () => { controller.switchPage('stress/stress') });
    stressDropdown.items.add(stressItem);

    const mentalStressItem = new DropdownItem("Mental stress", () => { controller.switchPage('stress/mental_stress') });
    stressDropdown.items.add(mentalStressItem);

    const physicalStressItem = new DropdownItem("Physical stress", () => { controller.switchPage('stress/physical_stress') });
    stressDropdown.items.add(physicalStressItem);

    const philosophyDropdown = new Dropdown('Philosophy');
    container.add(philosophyDropdown);

    const humanismItem = new DropdownItem("Humanism", () => { controller.switchPage('philosophy/humanism') });
    philosophyDropdown.items.add(humanismItem);

    const upUniverseItem = new DropdownItem("Up universe", () => { controller.switchPage('philosophy/up_universe') });
    philosophyDropdown.items.add(upUniverseItem);

    const downUniverseItem = new DropdownItem("Down universe", () => { controller.switchPage('philosophy/down_universe') });
    philosophyDropdown.items.add(downUniverseItem);

    return container;
}