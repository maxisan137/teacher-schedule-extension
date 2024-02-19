import PageModifier from './PageModifier';
import TeacherElementFinder from './TeacherElementFinder';
import TeacherExtractor from './TeacherExtractor';
import ScheduleUrlBuilder from './ScheduleUrlBuilder'
import ScheduleLinkInserter from './ScheduleLinkInserter'


(() => {
    const pageModifier = new PageModifier(
        document,
        new TeacherElementFinder(),
        new TeacherExtractor(),
        new ScheduleUrlBuilder(),
        new ScheduleLinkInserter()
    );
    pageModifier.modifyPage()
})()
