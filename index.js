let selectSort = (arr) => {
    let n = arr.length;
    let min , temp;
    for (let i = 0; i < n; i++) {
         min = i;
         for (let j = i + 1; j < n; j++) {
            if (array[j] < array[min]) {
               min = j;
            }
         }    
         if (min != i) {
            temp = array[i];
            array[i] = array[min];
            array[min] = temp;
         }
     }
     return array
 }
 
 let array = [22, 15, 10, 55, 75, 2, 3, 1];
 let arr1 = selectSort(array);
 
 console.log(`Sorted Array : ${array}`);