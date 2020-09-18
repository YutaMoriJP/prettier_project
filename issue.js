class Profile {constructor(name){this.name=name};intro(){return this.name}};

const p1 = new Profile('Yuta');

p1.__proto__ === Profile.prototype
p1.intro();
