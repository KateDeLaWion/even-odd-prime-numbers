
let i;

// even numbers: 
// for(i=1; i<=20; i+=1){
//     if (i%2==0){
//      document.getElementById('display').innerHTML += i + "<br>";
//     }   
//     }
    

// odd numbers: 
//     for(i=1; i<=20; i+=1){
//         if (i%2 !==0){
//          document.getElementById('display').innerHTML += i + "<br>";
//         }       
//         }



// prime numbers:
        for(i=1; i<=20; i+=1){
            if (i==2 || i==3 || i==5 || i==7){
             document.getElementById('display').innerHTML += i + "<br>";
            }
            if (i%2!=0 && i%3!=0 && i%5!=0 && i%7!=0 ){
                document.getElementById('display').innerHTML += i + "<br>";
               } 
        }
            


