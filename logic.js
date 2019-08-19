
function CSVFabric() {
    this.createContent = function(user){
        return `Name, Age, Gender \n ${user.name}, ${user.age}, ${user.gender} `;
    }
}

function JSONFabric() {
    this.createContent = function(user){
        return  `{"name": "${user.name}", "age": ${user.age}, "gender": "${user.gender}"}`;
    }
}

function XMLFabric() {
    this.createContent = function (user) {

        return `
        <person>
            <name>${user.name}</name>
            <age>${user.age}</age>
            <gender>${user.gender}</gender>
        </person>
        `;
    }
}

function YAMLFabric() {
    this.createContent = function (user) {
        return `user:
                  name: ${user.name}
                  age: ${user.age}
                  gender: ${user.gender}
                  `;
    }
}

module.exports = {
    CSVFabric,
    JSONFabric,
    XMLFabric,
    YAMLFabric
};
