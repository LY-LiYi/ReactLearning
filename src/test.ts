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
enum Color {
    red = 9, green = 100, blue = 999,
}
console.log('枚举')
console.log(Color[100]);

//解构赋值和展开操作符
let [first, ...second] = [1, 2, 3, 4, 5, 6];

console.log(first, 'first');
console.log(second, 'second');

//对象解构赋值 会丢失方法
let o = {
    a: 1,
    b: 'lalal',
    c: '哈哈',
}
let { a, ...passthrough } = o;
console.log('解构赋值')
console.log(a);
console.log(passthrough.b + passthrough.c);

// 属性重命名
let { a: newfirst, b: newsecond } = o;
console.log('属性重命名')
console.log(newfirst, o.a);
console.log(newsecond, o.b);

//接口可选属性 用？来标识
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });
console.log(mySquare);

//属性的get和set访问器
class User {
    private _name: string='';

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    constructor(_name: string) {
        this.name = _name;
    }

    sayHello(): string {
        return `Hello,${this._name}!`;
    }
}

let users = new User('John Reese');
users.name = 'Root';
console.log(users.sayHello(), 'set');
// 通过get和set关键字声明属性访问器，通过属性访问器可以精确控制属性的赋值和获取值


//实现接口interface ClockConstructor {
interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): any;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {

    return new ctor(hour, minute);

}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

//继承接口 一个接口可以继承多个接口 创建出多个接口的合成接口
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
console.log(square, '实现接口');

//接口继承类
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
// class Images implements SelectableControl {
//     select() { }
// }
//继承才是子类 实现并不是子类
//Button和TextBox类是SelectableControl的子类（因为它们都继承自Control并有select方法），但Image和Location类并不是这样的。


//类的继承
// 基类 也称为超类
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
//子类 也称为派生类
// 派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数
class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        //实现基类的方法
        super.move(distanceInMeters);
    }
}

let sak = new Snake("Sammy the Python");
sak.move();
console.log(sak, '类的继承和实现类');

//保护性的  protected
class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee 能够继承 Person
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
// let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的

// 不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为 Employee是由 Person派生而来的。
// 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承


// 抽象类
// 抽象类做为其它派生类的基类使用。 无法被实例化。 不同于接口，
// 抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
// 子类继承抽象类后，需要实现抽象方法, 抽象方法的语法与接口方法相似。 
// 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。
abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name, '抽象类的printName方法');
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.', '抽象子类的printMeeting方法');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

//let department: Department的意思是department实例的类型是 Department
let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在


class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string='';
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());
// 静态属性即是通过类型而不是实例就可以访问的属性
console.log(Greeter.standardGreeting, 'static');

//greeterMaker的变量 这个变量保存了这个类或者说保存了类构造函数
// 使用 typeof Greeter，意思是取Greeter类的类型 而不是实例的类型。 或者更确切的说，"告诉我 Greeter标识符的类型"，
// 也就是构造函数的类型。 这个类型包含了类的所有静态成员和构造函数 等同于new
let greeterMaker: typeof Greeter = Greeter;
//更改了Greeter基类的standardGreeting 的值
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());


// 把类当做接口使用
class Point {
    x: number=0;
    y: number=0;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };


//重载
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number; }[]): number;
function pickCard(x: number): { suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit, '重载--参数为对象');

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit, '重载--参数为数字');

// 泛型
// 可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。

// 给identity添加了类型变量T。 T帮助我们捕获用户传入的类型,之后我们再次使用了,T当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了
function identity<T>(arg: T): T {
    return arg;
}

// 明确的指定了T是string类型，并做为一个参数传给函数
let outone = identity<string>("mystring");

// 利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型 更为普遍
let outtwo = identity(3);
console.log(outtwo, "泛型");

// 泛型定义为array类型 泛型变量T当做类型的一部分使用 
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

//es6的语法 
let myIdentity: <T>(arg: T) => T = identity;

//泛型接口

// 使用 GenericIdentityFn的时候，还得传入一个类型参数来指定泛型类型 锁定了之后代码里使用的类型 除了泛型接口，我们还可以创建泛型类
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identityy<T>(arg: T): T {
    return arg;
}

let myIdentityy: GenericIdentityFn<number> = identityy;
console.log(myIdentityy, '泛型接口');

//泛型类

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber, '泛型类');

//泛型约束

//  创建一个包含 .length属性的接口，使用这个接口和extends关键字来实现约束：
interface Lengthwise {
    length: number;
}

function loggingIdentityty<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

//枚举

// 定义了一个数字枚举， Up使用初始化为 1。 其余的成员会从 1开始自动增长
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction.Down, Direction.Left, Direction.Right, '枚举');

//使用枚举
enum Responsed {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Responsed): any {
    console.log(recipient + '  ' + message, '使用枚举');
}

respond("Princess Caroline", Responsed.Yes);

// 字符串枚举
// 字符串枚举没有自增长的行为 每个成员都必须用字符串字面量或另外一个字符串枚举成员进行初始化
enum Direction {
    One = "One",
    Two = "Two ",
    Three = "Three",
    Four = "Four",
}

//异构枚举  可以混合字符串和数字成员
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

//它是枚举的第一个成员且没有初始化器，这种情况下它被赋予值 0
enum E {
    X
}

//它不带有初始化器且它之前的枚举成员是一个 数字常量。 这种情况下，当前枚举成员的值为它上一个枚举成员的值加1。
enum E2 {
    A = 1, B, C
}
//反向映射
enum Enum {
    A
}
let  c= Enum.A;
let nameOfA = Enum[c]; // "A"

//const枚举
//避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问，我们可以使用 const枚举
const enum Enumn {
    A = 1,
    B = A * 2
}

//交叉类型  将多个类型合并为一个类型 它包含了所需的所有类型的特性
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Personn {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
    }
}
var jim = extend(new Personn("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();

// 联合类型
// 一个值的类型是 A | B，我们能够 确定的是它包含了 A 和 B中共有的成员

interface Bird {
    fly():any;
    layEggs():any;
}

interface Fish {
    swim():any;
    layEggs():any;
}

function getSmallPet(): Fish | Bird {
    // ...
}

let pet = getSmallPet();
// pet.layEggs(); // okay
//pet.swim();    // errors


//类型断言
//断言bar变量是foo类型的
// var foo = <foo>bar;
