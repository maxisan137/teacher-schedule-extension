import Teacher from './Teacher';

export default class TeacherExtractor {

    public extractTeacherName(teacherElement: Element): Teacher {
        
        const childDivs = teacherElement.children;
        
        for (const div of Array.from(childDivs)) {
            if (div.children.length == 0) {
                const rawNameString: string = div.textContent;
                return this.teacherFromString(rawNameString);
            }
        }
        
        throw new Error('Could not parse element into a Teacher');
    }

    private teacherFromString(rawString: string): Teacher {

        const words: string[] = rawString.split(/\s+/).filter(str => str != '');

        if (words.length < 3) {
            throw new Error('Could not parse element into a Teacher');
        }

        const lastName: string = this.validateName(words[0]);
        const firstName: string = this.validateName(words[1]);
        const fathersName: string = this.validateName(words[2]);

        return new Teacher(
            lastName,
            firstName,
            fathersName
            );
    }

    private validateName(name: string): string {
        return ['(', ')', '.'].some(char => name.includes(char)) ? '' : name;
    }
}