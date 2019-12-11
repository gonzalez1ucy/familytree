// This is the class and constructor used to create an object with a person's information.
// This is the class and constructor used to create an object with a person's information.
class PersonInfo {
    constructor(id, gender, parents, children, siblings, spouses, bio) {
        this.id = id;
        this.gender = gender;

        this.parents = [];
        for (const parent of parents) {
            this.parents.push({ id: parent });
        }

        this.children = [];
        for (const child of children) {
            this.children.push({ id: child });
        }

        this.siblings = [];
        for (const sibling of siblings) {
            this.siblings.push({ id: sibling });
        }

        this.spouses = [];
        for (const spouse of spouses) {
            this.spouses.push({ id: spouse });
        }

        this.bio = bio;
    }
}

let data = [
    // This is the object that represents you
    new PersonInfo("Me", "male", ["Dad", "Mom"], [], ["kevin", "Brandon", "Sophie"], [], "This is me!"),

     // These two objects are your parents
    new PersonInfo("Dad", "male", [], ["Me", "Kevin", "Brandon", "Sophie"], [], ["Mom"], "I'm your dad."),
    new PersonInfo("Mom", "female", [], ["Me", "Kevin", "Brandon", "Sophie"], [], ["Dad"], "I'm your mom."),

     // These objects are your siblings
    new PersonInfo("Kevin", "male", ["Dad", "Mom"], [], ["Me", "Susan", "Sophie"], [], "I'm your brother."),
    new PersonInfo("Brandon", "female", ["Dad", "Mom"], [], ["Me", "Kevin", "Sophie"], [], "I'm your sister."),
    new PersonInfo("Sophie", "male", ["Dad", "Mom"], [], ["Me", "Brandon", "Kevin"], [], "I'm your brother."),
];

export default data;