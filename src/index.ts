// const a = 334;
// console.log(a);

//================ Declare of DataType in TS ========================
//********** Method-1 ***********/
// let a:string  = "{23}";
// let nambo:number = 334;
// let check:boolean;
// let c:any;

//*********** Method-2 ***********/
// let nambo = <string> "Sanju";
// let c = <number> 332;

// let surname: string | number; //(union type)
// surname = 456;

// const func = (n:number, m:number) : number =>{
//     console.log(n,m);
//     return String(n*m);
    
// }


//========= Custom DataType ============
// type UserName = string | number ; //type Alias
// let a:UserName = 240;

// type UserName = (n:number, m:number) => number;

// const func : UserName = (n, m) => {
//    console.log(n,m);
//    return n*m;  
// }

//========= Array in TS ==========
// const arr1:number[] = [12,24,36,45];
// const arr2:string[] = ["sad"];

// const arr3:Array<string> = [];
// const arr4:Array<boolean> = new Array(20);
// const arr5:Array<string | number> = [230, 45, 6, "Sanjay"];
// arr5[0]="Abhi";

// arr1.forEach((i)=>{
//     i.toFixed()
// })
// arr2.forEach((i)=>{
//     i.charAt()
// })

//=========== Tuple in TS ========
// const arr:[number,number,number]= [12,3,43]; //when array is given fixed sized then it is called tuple

//========== Object in TS ==========
// const obj:{
//       height:number,
//       weight:number,
//       gender:boolean,
// } = {
//     height :345,
//     weight:34,
// }

// type Obj = {
//     height:number,
//     weight:number,
//     gender?:boolean,
// }

// const obj1:Obj = {
//     height:34,
//     weight:4563,
//     gender:true,
// }

// const obj2:Obj = {
//     height:454535,
//     weight:3433453,
//     gender:false,
// }

// const obj3:Obj = {
//     height:4535,
//     weight:3433,
   
// }

//==== where we want to create class or object then Use this inferface ======
// interface Object {
//     height:number,
//     weight:number,
//     gender?:boolean,
// }

// type FuncType =  (n:number,m:number) => void;

// interface NewObj extends Object {
//     scolar : boolean;
//     // func? : (n:number,m:number) => void;
//     func: FuncType;
// }

// const gigi: NewObj = {
//   height:344,
//   weight:35466,
//   scolar:true,
//   func : (n,m) => {
//     console.log(n*m);
//   }
// }


// const kendal  : NewObj = {
//     height:43432,
//     scolar : true,
//     weight:4534,
//     func : (n,m) => {
//          console.log(n*m);
//     }
// }

// kendal.func(20,40);

