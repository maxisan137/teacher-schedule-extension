export default class Teacher {

    private lastName: string;
    private firstName: string;
    private fathersName: string;

    constructor(
        lastName: string,
        firstName: string,
        fathersName: string
        ) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.fathersName = fathersName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getFathersName(): string {
        return this.fathersName;
    }
}