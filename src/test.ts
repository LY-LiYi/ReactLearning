//测试typescript
console.log("typescript安装成功");

function getName(name: string) {
    console.log(name);
}

getName('LiYi');

//接口
interface Person {
    firstName: string;
    lastName: string;
}

//形参是Person类型
function geteter(person: Person) {
    return "Hello," + person.firstName + '' + person.lastName;
}

let user = { firstName: 'Y', lastName: 'L' };

console.log(geteter(user));

//类
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + '' + middleInitial + '' + lastName;
    }

    interface Personstu {
    firstName: string;
    lastName: string;
}

function greeter(person: Personstu) {
    return "Hello," + person.firstName + '' + person.lastName;
}
   
}

let userstu = new Student("Jan", "M.", "User");

console.log(userstu);

//枚举
enum Color{
    red=9,green=100,blue=999,
}

console.log(Color[100]);