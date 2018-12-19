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

console.log('类')
console.log(userstu);

//枚举
enum Color{
    red=9,green=100,blue=999,
}
console.log('枚举')
console.log(Color[100]);

//解构赋值和展开操作符
let [first,...second]=[1,2,3,4,5,6];

console.log(first,'first');
console.log(second,'second');

//对象解构赋值 会丢失方法
let o={
    a:1,
    b:'lalal',
    c:'哈哈',
}
let {a,...passthrough}=o;  
console.log('解构赋值')
console.log(a);
console.log(passthrough.b+passthrough.c);

// 属性重命名
let {a:newfirst,b:newsecond}=o;
console.log('属性重命名')
console.log(newfirst,o.a,);
console.log(newsecond,o.b);