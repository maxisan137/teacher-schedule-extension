export default class TeacherElementFinder {

    public findTeacherElements(document: Document): Element[] {
        let elements: Element[] = [];

        const sidePanel: Element = document.getElementsByClassName('page-container-sidemenu')[0];
        const sections: HTMLCollectionOf<Element> = sidePanel.getElementsByClassName('sidemenu-box');

        let aboutSection: Element;
        sectionLoop: for (let section of Array.from(sections)) {

            const sectionBody = section.getElementsByClassName('sidemenu-box-body')[0];

            for (let child of Array.from(sectionBody.children)) {
                if (child.tagName === 'DIV' && child.className === 'contact_instructor_side_box-item') {
                    aboutSection = section;
                    break sectionLoop;
                }
            }
        }

        if (aboutSection === undefined) {
            return elements;
        }

        const sectionItems: HTMLCollectionOf<Element> = aboutSection.getElementsByClassName('contact_instructor_side_box-item');

        for (let i = 2; i < sectionItems.length; i++) {
            elements.push(sectionItems[i]);
        }

        return elements;
    }
}