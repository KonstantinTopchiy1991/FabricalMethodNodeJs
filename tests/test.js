
describe('test CSVFabric equal', () => {
    const testedData = [
        {
            'a': {name: "John", age: 24, gender: "male"},
            'expected': `Name, Age, Gender \n John, 24, male `
        },
        {
            'a': {name: "Anna", age: 41, gender: "female"},
            'expected': `Name, Age, Gender \n Anna, 41, female `
        },
        {
            'a': {name: "Vasya", age: 33, gender: "male"},
            'expected': `Name, Age, Gender \n Vasya, 33, male `
        }
    ];

    let fabric;

    before(function () {
        fabric = new CSVFabric();
    });

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = fabric.createContent(testSuit['a']);

            assert.equal(act, testSuit['expected']);
        });
    }
});

describe('test CSVFabric notEqual', () => {
    const testedData = [
        {
            'a': {name: "Viktor", age: 12, gender: "male"},
            'expected': `Name, Age, Gender \n Johny, 29, female `
        },
        {
            'a': {name: "Liza", age: 30, gender: "female"},
            'expected': `Name, Age, Gender \n 124, 41, male `
        },
        {
            'a': {name: "Vasya", age: 33, gender: "male"},
            'expected': `Name, Age, Gender \n Vasya, twenty, female `
        }
    ];

    let fabric;

    before(function () {
        fabric = new CSVFabric();
    });

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = fabric.createContent(testSuit['a']);

            assert.notEqual(act, testSuit['expected']);
        });
    }
});

describe('test JSONFabric equal', () => {
    const testedData = [
        {
            'a': {name: "John", age: 24, gender: "male"},
            'expected': `{"name": "John", "age": 24, "gender": "male"}`
        },
        {
            'a': {name: "Anna", age: 55, gender: "female"},
            'expected': `{"name": "Anna", "age": 55, "gender": "female"}`
        },
        {
            'a': {name: "Vasya", age: 40, gender: "male"},
            'expected': `{"name": "Vasya", "age": 40, "gender": "male"}`
        }
    ];

    let fabric;

    before(function () {
        fabric = new JSONFabric();
    });

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = fabric.createContent(testSuit['a']);

            assert.equal(act, testSuit['expected']);
        });
    }
});

describe('test JSONFabric notEqual', () => {
    const testedData = [
        {
            'a': {name: "Viktor", age: 12, gender: "male"},
            'expected': `{"name": "Johny", "age": 24, "gender": "male"}`
        },
        {
            'a': {name: "Liza", age: 30, gender: "female"},
            'expected': `Name, Age, Gender \n Anton, 41, male `
        },
        {
            'a': {name: "Vasya", age: 33, gender: "male"},
            'expected': `{"name": "147", "age": 55, "gender": "female"}`
        }
    ];

    let fabric;

    before(function () {
        fabric = new JSONFabric();
    });

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = fabric.createContent(testSuit['a']);

            assert.notEqual(act, testSuit['expected']);
        });
    }
});

describe('test XMLFabric equal', () => {
    const testedData = [
        {
            'a': {name: "John", age: 24, gender: "male"},
            'expected': `
        <person>
            <name>John</name>
            <age>24</age>
            <gender>male</gender>
        </person>
        `
        },
        {
            'a': {name: "Elza", age: 17, gender: "female"},
            'expected': `
        <person>
            <name>Elza</name>
            <age>17</age>
            <gender>female</gender>
        </person>
        `
        },
        {
            'a': {name: "Vanya", age: 20, gender: "male"},
            'expected': `
        <person>
            <name>Vanya</name>
            <age>20</age>
            <gender>male</gender>
        </person>
        `
        }
    ];

    let fabric;

    before(function () {
        fabric = new XMLFabric();
    });

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = fabric.createContent(testSuit['a']);

            assert.equal(act, testSuit['expected']);
        });
    }
});

describe('test XMLFabric notEqual', () => {
    const testedData = [
        {
            'a': {name: "John", age: 24, gender: "male"},
            'expected': `
        <person>
            <name>Jorge</name>
            <age>jorge</age>
            <gender>male</gender>
        </person>
        `
        },
        {
            'a': {name: "Elza", age: 17, gender: "female"},
            'expected': `
        <person>
            <name>Emma</name>
            <age>17</age>
            <gender>male</gender>
        </person>
        `
        },
        {
            'a': {name: "Vanya", age: 20, gender: "male"},
            'expected': `
        <person>
            <name>20</name>
            <age>Anton</age>
            <gender>female</gender>
        </person>
        `
        }
    ];

    let fabric;

    before(function () {
        fabric = new XMLFabric();
    });

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = fabric.createContent(testSuit['a']);

            assert.notEqual(act, testSuit['expected']);
        });
    }
});

describe('test YAMLFabric equal', () => {
    const testedData = [
        {
            'a': {name: "Eric", age: 2, gender: "male"},
            'expected': `user:
                  name: Eric
                  age: 2
                  gender: male
                  `
        },
        {
            'a': {name: "Aza", age: 70, gender: "female"},
            'expected': `user:
                  name: Aza
                  age: 70
                  gender: female
                  `
        },
        {
            'a': {name: "Vasya", age: 40, gender: "male"},
            'expected': `user:
                  name: Vasya
                  age: 40
                  gender: male
                  `
        }
    ];

    let fabric;

    before(function () {
        fabric = new YAMLFabric();
    });

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = fabric.createContent(testSuit['a']);

            assert.equal(act, testSuit['expected']);
        });
    }
});

describe('test YAMLFabric notEqual', () => {
    const testedData = [
        {
            'a': {name: "Sergey", age: 27, gender: "male"},
            'expected': `user:
                  name: 52
                  age: Sergey
                  gender: female
                  `
        },
        {
            'a': {name: "Oleg", age: 29, gender: "male"},
            'expected': `user:
                  name: Oksana
                  age: female
                  gender: 29
                  `
        },
        {
            'a': {name: "Vasya", age: 40, gender: "male"},
            'expected': `user:
                  name: Anton
                  age: female
                  gender: 25
                  `
        }
    ];

    let fabric;

    before(function () {
        fabric = new YAMLFabric();
    });

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = fabric.createContent(testSuit['a']);

            assert.notEqual(act, testSuit['expected']);
        });
    }
});