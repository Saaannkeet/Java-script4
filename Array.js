// Find the Product.
//que1:: Write a program that takes an array as input from the user and find out the
//  product of the elements.

const Find_Prod = (array, N) => 
{
 let product = 1
 for(let i = 0; i < N; i++)
 product = product * array[i]
 return product;    
};


// Find the Sum.
//que2:: Write a program which takes an array as input from the user and find out the sum of the 
// array elements.

const Find_Sum = (array, N) => 
{
let sum = 0
for(i = 0; i < N; i++)
sum = sum + array[i]
return sum;
};


//que3:: Count OccurrencesYou are given an array A containing N integer elements and an integer K, 
// and your task is to return the count of occurrences of K in array A.

const findCount = (N, K, Arr) => 
{
let count=0;
for(let i=0;i<N;i++){
  if(Arr[i]==K){
    count=count+1;
  }
}
return count;
};

 
// Even Odd
//que4:: You are given an array A containing N integer elements, and your task is to return an array 
// B(having a size equal to 2), where B[0]contains the sum of all even elements of array A and B
// [1]has the sum of all odd elements of the array A.

const findEvenOdd = (N, Arr) => 
{
    let A=[2]
    let evensum=0
    let oddsum=0
    for(let i=0;i<N;i++){
      if(Arr[i]%2===0){
        evensum+=Arr[i]
      }
      else{
        oddsum+=Arr[i]
      }
    }
    
    A[0]=evensum
    A[1]=oddsum
    return A
};
  

// Find whether the number is present or not
//que5:: Write a program which takes an array as input from the user and a number.
// Check whether the number is present or not.

const Find_Num = (array,N,M) => 
{
      let count=0;
      for(let p of array){
        if(p===M){
          count+=1
        }
      }
      if(count>0){
        return "YES";
      }
      else{
        return "NO"
      }
};


// Higher Age
//que6:: You are given an array A containing the age of persons in your locality, and your task is to 
// find and return an array containing the age of persons that are over 18(18 included).

const highAge = (N, Arr) => 
{

let arr=[];
  let j=0;
  for(let i=0;i<N;i++){
    if(Arr[i]>=18){
      arr[j++]=Arr[i]; 
}
}
return arr; 
};
 
// Increment the Array Elements
//que7:: You are provided an array of integers and you have to increment all array elements by 1 
// and then print whole array.

const Inc_Arr = (array,N) => 
{
  let Increment=[]
  let result=""
  let j=0
  for(let i=0;i<N;i++){
   Increment[j]=array[i]+1
    result=result+" "+Increment[j]
    j++
  }
 console.log(result)
};

// Pass or Fail
//que8:: You are given an array A containing the maths marks of students in your class, and your task 
// is to determine if all the students pass in your class or not. A student is declared pass if
//  his maths marks are greater than or equal to 32

const isAllPass = (N, Arr) => 
{
  for(var i=0; i<Arr.length; i++){
    if(Arr[i] < 32){
      return "NO";
    }
  }
  return "YES";  
};
 
// Unique Color Shirt
//que9:: Prepbuddy is very tasteful of clothes.He has N numbers of shirts hanging in the hanger in
//  his wardrobe.Prepbuddy likes to wear different colored clothes. So, whenever he see 
//  there are two or more shirts with the same color, he removes all the shirt of that color 
//  from his wardrobe. Now, he wants to know how many M unique color shirts are left in the 
//  wardrobe. Prepbuddy wants you to find M.


function Unique_Shirts (arr,N) {
  let temp=""
      let dress=0;
      let i,j;
      for(i=0;i<N;i++){
          let compare=0;
          for(j=0;j<N;j++){
              if(arr[i]==arr[j]){
                  compare++;
              }
          }
          if(compare==1){
              temp=temp+arr[i];
              dress++;
          }
  }
  return dress;
  }


  // Min and Max
  //que10:: Congratulations on making up to this question. Let us give you a fairly simple array
  // problem to solve. If you know how to iterate through the array, you will easily be able 
  // to solve this.The problem statement is simple- given N elements, find the minimum and
  // maximum numbers among those elements.

 
  function arrayMin(arr) {
    let a=Math.min(...arr);
        return a;  
    }
    function arrayMax(arr) {
      let b=Math.max(...arr);
        return b; 
    }
    

    


// Birthday Game
//que11:: Yatharth and Anamika are playing a game. Anamika loves Yatharth very much and she wants to 
// share a chocolate bar with him in which each of the squares consists of an integer represented
//  by A[i].She decides to share a contiguous segment of the chocolate bar selected such that 
//  the length of the segment matches Yatharth's birth month M and the sum of the integers on 
//  the squares is equal to his birthday D.You must determine how many ways she can divide the 
//  chocolate.
    
function Birthday_Game(arr,D ,M) {
 
  let counter = 0;
         for(let i = 0; i < arr.length - 1; i++){
              let subArray = arr.slice(i, i+M);
              if (subArray.length === M) {
                 let sum = subArray.reduce((a,b) => a + b, 0);
                 if(sum === D){
                      counter += 1;
                  }
               }
         }
         return counter;
}




