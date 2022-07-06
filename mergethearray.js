arr1 = [1,3,5,8]
arr2 = [2,6,9,10]
function mergeSortArray(arr1,arr2){
for(var i=0;i<arr2.length;i++){
arr1.push(arr2[i]);
}
for(i=0;i<arr1.length;i++){
for(j=i+1;j<arr1.legth;j++){
if(arr1[i]>arr1[j]){
temp=arr1[i];
arr1[i]=arr1[j];
arr1[j]=temp;
}
}
}
return arr1;
}
console.log(mergeSortArray([1,3,5,8],[2,6,9,10]))