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

//============ Functions in TS ===============
// //*****Optional Parameter*******
// type FuncType = (n:number, m:number, l?:number) => number | string;
// const func: FuncType = (a,b,l) =>{
//     if(typeof l === "undefined") return "L was not Provided";
//     return a*b*l;
// };
// func(25,23);

//*******Default Parameter********
// type FuncType = (n:number, m:number, l?:number) => number | string;
// const func: FuncType = (a,b,l=20) =>{
//      return a*b*l;
// };

// func(25,23);

// const func = (n : number, m : number, l : number = 20) : number => {
//     return n*m*l;
// }

// func(25, 23);

//*****Rest Operator******/
// type FuncType = (...m:number[]) => number[];
// const func:FuncType  = (...m) =>{
    
//    return m;
// } 
// func(25,23,53,646,353,23);

//========== Function with Object ===============
// function lol(n:number):number{
//   return n;
// }

// type FuncType = (n:number) => number;
// const lol:FuncType = function lol(n){
//     return n;
// }

//****** 1 method *******/
// const getData = (product:{name:string, stock:number, price:number, photo:string}) : void => {
//   console.log(product);
// }

//****** 2 Method *********/
// interface Product {
//     name: string,
//     stock: number,
//     price: number,
//     photo: string,
//    readonly id: string,
// }

// type GetDataType  = (product: {
//     name: string;
//     stock: number;
//     price: number;
//     photo: string;
//     id: string;
    
// }) => void;

// const getData : GetDataType= (product: Product) => {
//     console.log(product);
    
// }

// const productOne: Product = {
//     name: "Macbook",
//     stock: 45,
//     price: 9999999,
//     photo: "samplephotoUrl",
//     id:"abc"
// }

// getData(productOne);



