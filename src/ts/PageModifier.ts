import TeacherElementFinder from './TeacherElementFinder';
import TeacherExtractor from './TeacherExtractor';
import ScheduleUrlBuilder from './ScheduleUrlBuilder'
import ScheduleLinkInserter from './ScheduleLinkInserter'
import Teacher from './Teacher';


export default class PageModifier {

    private document: Document;
    private teacherElementFinder: TeacherElementFinder;
    private teacherExtractor: TeacherExtractor;
    private scheduleUrlBuilder: ScheduleUrlBuilder;
    private linkInserter: ScheduleLinkInserter;

    public constructor(
        document: Document,
        teacherElementFinder: TeacherElementFinder,
        teacherExtractor: TeacherExtractor,
        scheduleUrlBuilder: ScheduleUrlBuilder,
        linkInserter: ScheduleLinkInserter
    ) {
        this.document = document;
        this.teacherElementFinder = teacherElementFinder;
        this.teacherExtractor = teacherExtractor,
        this.scheduleUrlBuilder = scheduleUrlBuilder;
        this.linkInserter = linkInserter
    }

    public modifyPage(): void {

        let teacherElements: Element[];
        try {
            teacherElements = this.teacherElementFinder.findTeacherElements(this.document);
        } catch {
            return;
        }
        
        for (let element of teacherElements) {
        
            let scheduleUrl: string;
            try {
                const teacher: Teacher = this.teacherExtractor.extractTeacherName(element);
                scheduleUrl = this.scheduleUrlBuilder.getScheduleUrl(teacher);
            } catch {
                continue;
            }
            
            this.linkInserter.insertScheduleLink(element, scheduleUrl);
        }    
    }
}