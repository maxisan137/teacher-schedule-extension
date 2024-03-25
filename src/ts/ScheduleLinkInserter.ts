export default class ScheduleLinkInserter {

    private static LINK_NAME = "Розклад викладача";

    public insertScheduleLink(teacherElement: Element, scheduleUrl: string): void {
        
        const urlContainer = document.createElement('div');
        urlContainer.className = 'contact_instructor_side_box-item-item';

        const urlElement = document.createElement('a');
        urlElement.href = scheduleUrl;
        urlElement.textContent = ScheduleLinkInserter.LINK_NAME;

        urlContainer.appendChild(urlElement);
        teacherElement.appendChild(urlContainer);
    }
}