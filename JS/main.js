/*
console.log('Hello world')
// string = ตัวอักษร
let fname = 'John'
console.log('name',fname)
const idcard = '123' //const ประกาศค่าคงที่
var //ไม่ใช้เเล้ว
// number
let age = 30
let height = 150.5
const pi = 3.14 

fname = 'Tom'

//idcard = '456' 
console.log('idcard',idcard)

console.log('name',fname, 'age', age)
//console.log('age',age)
*/
/** 

/*
+ บวก
- ลบ
* คูณ
/ หาร
% mod หารเอาเศษ
*/

/*
condition statment (if,else,switch)
== เท่ากับ
!= ไม่เท่่าหับ
> มากกว่า
>= มากกว่าเท่ากับ
< น้อยกว่า
<= น้อยกว่าเทากับ
*/
/*
let number1 = 'Suriya' //string
let number2 = 'Pinitkan'
let number3 = number1+ ' ' +number2 //ต่อ String

console.log('number3 =',number3)
*/
/*
let number1 = 5
let number2 = 3
let condition1 = number1 <= number2 //Boolean (true,false)
console.log('Condition is = ',condition1)
*/
//if - else condition
/*if (condition){
    statment
}

*/
/*
let number1 = 5
let number2 = 5
if(number1 != number2){
    console.log('number')
}else if(number1 == number2){
    console.log('this is else-if')
}else{
    console.log('this else')
}
*/

/**
Grade
>= 80 A
>= 70 B
>= 60 C
>= 50 D
 */
/*
//let score = 65
let score = prompt('Enter score=')
if(score>=80){
    console.log('Grade = A')
}else if(score>=70){
    console.log('Grade = B')
}else if(score>=60){
    console.log('Grade = C')
}else if(score>=50){
    console.log('Grade = D')
}else{
    console.log('Grade = F')
}
*/
/**
 && และ 1 1เเละ2 ต้องมีทั้ง 1เเละ2
 || หรืือ มี1หรือ2 ก็ได้
 ! not ไม่
 */
/*
let number1 = 5
let number2  = 10
//T || F = T
let condition = number1 >= 3 || number2>=11
console.log('result of condition',condition)
//กลับวิเศษ
let condition2 = !(number1 >= 3 || number2>=11)
console.log('result of condition',condition2)
*/
/*
let number = 20
if(number%2 == 0 ){
    console.log('you are event.')
}
*/
/**
 for
 */
/*let counter = 0
while (counter<=9){ //True --> False
    console.log('Hi')
    1.counter = counter + 1 // 
    2.counter+=1 // 
    3.counter++ 
    --เขียนได้สามเเบบ--
}
*/
/*
for (let counter = 0; counter <10; counter++){
    console.log('Hi')
} 
*/  
/**
 Array
 */
/*
let age1 = 20
let age2 = 25
let age3 = 30

let ages = [20,25,30]

ages = [200,100,50] //แทนที่ค้าข้างบน

console.log('age1 age2 age3',age1,age2,age3)
console.log('array',ages)
console.log('index',ages[0])

//ต่อ array
ages.push(25)
console.log('push array',ages)

// ลบ array ตัวสุดท้าน
ages.pop()
console.log('pop array',ages)
*/
/*
let ages = [50,20,25,30,35,40]

if(ages.includes(30)){ //true ถ้ามีเลขในarray
    console.log('มีเลข 30 อยู่ใน array')
}

ages.sort()
console.log(ages)

let name_list = ['aa','bb','cc']
name_list.push('dd')
console.log(name_list)

name_list.pop()
console.log('pop name_list',name_list) //ลบตัวท้าย
console.log('name_list',name_list.length) //นับความยาว
console.log('name_list',name_list[0])
console.log('name_list',name_list[1])
console.log('name_list',name_list[2])

for (let index = 0; index < name_list.length; index++){
    console.log('name_list',name_list[index]) 
}
///Array
*/
/**
 *object เก็บข้อมูลเเต่ละประเภทไว้ในตัวแปรเดียว
 */
/*
let student =[{
    age: 30,
    name: 'aa' ,
    grade: 'A'

},{
    age:35,
    name:'bb',
    grade:'B'
}]
student.push({
    age:40,
    name:'cc',
    garde:'C'
})
student.pop()

for(let index = 0; index < student.length; index++){
    console.log('Student Number',(index+1))
    console.log('age',student[index].age)
    console.log('name',student[index].name)
    console.log('garde',student[index].garde)
}
*/
/*
console.log(student)
console.log(student.age)
console.log(student.name)
console.log(SVGAnimatedEnumeration.grade)
*/
 
/*
let age1  =30
let name1 = 'aa'
let garde1 = 'A'

let age2  =30
let name2 = 'bb'
let garde2 = 'B'
*/
/**
 * funtion
 */
/*

let score1 = 55 
let score = 65

let grade =''
function calculat_grade(score){
    if(score>=80){
        grade = 'A'
    }else if (score>=70){
        grade = 'B'
    }else if (score>=60){
        grade = 'C'
    }else if(score>=50){
        grade = 'D'
    }else{
        grade = 'F'
    }
return grade

}
//เรียกใช้ funtion

let grade1 = calculat_grade(score1)
console.log('Grade',grade1)
*/
//Array
/*
let score = [20,30,40,50]
let newScore = []
for (let index = 0; index < score.length; index++){
    console.log('Score',score[index])
    if(score[index] >=30){
        newScore.push(score[index])
    }    
}
let newScore1 = score.filter((s)=>{
    if(s>=30){
        return true
    }else{
        return false
    }
})
let newscore1 = score.filter((s)=>{
    return s >=30
})

newScore.forEach((ns)=>{
    console.log('New Score',ns)
})
    */
/*
score[0] = score[0]*2
score[1] = score[1]*2
score[2] = score[2]*2
score[3] = score[3]*2
*/
/*
score = score.map ((s) => {
    return s*2
})

//score.forEach(function()) => เรียหใช้ได้เรือ่ยๆ
score.forEach((s) => {
    console.log('forEach Score',s)
})
*/
/**
 * objext function
 */
let students =[
    {
        name:'aa',
        score:50,
        grade:'A'
    },{
        name:'bb',
        score:80,
        grade:'A'
    }
]

let student = students.find((s) => {
    if(s.name=='aa'){
        return true
    }
})

let double_score = students.map((s) => { //
    s.score = s.score*2
    return s
})

let hightScore = students.filter((s) => {
    if(s.score>= 120){
        return true
    }
})

console.log(student)

console.log('double_score',double_score)
console.log('hightScore',hightScore)