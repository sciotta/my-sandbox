interface Stringfiable {
    toString(): string;
}

interface Name {
    name: string;
    lastName: string;
}

type Person = Name & Stringfiable;

export class User implements Person {
    constructor(public name: string, public lastName: string) {}

    toString() {
        return `${this.name} ${this.lastName}`;
    }
}

const showName = (user: User) => {
    return `Hello, ${user.toString()}!`;
};

export { showName };