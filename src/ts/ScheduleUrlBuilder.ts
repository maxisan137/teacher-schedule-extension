import Teacher from './Teacher'

export default class ScheduleUrlBuilder {

    private static BASE_URL = 'https://tntu.edu.ua/?p=uk/schedule&t=';
    private static SEPARATOR = '+';

    public getScheduleUrl(teacher: Teacher): string {
        const names: string[] = [];
        
        for (let name of [teacher.getLastName(), teacher.getFirstName(), teacher.getFathersName()]) {
            if (name !== '') {
                names.push(name);
            }
        }

        if (names.length < 2) {
            throw new Error('Failed to create schedule Url - empty names');
        }

        const nameQuery: string = names.join(ScheduleUrlBuilder.SEPARATOR);
        
        return ScheduleUrlBuilder.BASE_URL + nameQuery;
    }
}