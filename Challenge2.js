function findMajority(arr)
{
    let count=1;
    arr.sort(function(a, b){return b - a});  
    let f=false;
    for(let i=0;i<arr.length-1;i++){
       if(arr[i]==arr[i+1]){
        count++;
       }
       else{
        count=1;
       }
       if(count>arr.length/2){
        console.log("The Majority Number is: "+arr[i])
        count=1;
        f=true;
       }
    }
    if(!f){
        console.log("There is No Majority Number")
    }
}
let arr = [  1, 2, 1, 3, 5, 1 ];
findMajority(arr);