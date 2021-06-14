let screen=document.getElementById("screen");
let buttons=document.querySelectorAll("button");
let screenValue="";
// for(item of buttons){
//     item.addEventListener('click',(b)=>{
//         buttonText=b.target.innerText;
//         console.log(buttonText);
        

        // if(buttonText=="X"){
        //     buttonText="*";
        //     screenValue+=buttonText;
        //     screen.value=screenValue;
        //     console.log(screenValue);
        // }
        function clear(){
            
            // screen.value=" ";
            screen.value="";
            console.log(screen.value);
        }
        function evalu(){
            screen.value=eval(screen.value);
                        // document.getElementById("screen").value=eval(document.getElementById("screen").value);

        }
        function backspace(){
            screenValue=screen.value.slice(0,-1);
            screen.value=screenValue;
        }
         function square(){
            screen.value= Math.pow(screen.value,2);
          
        }
        function sqroot(){
            screen.value=Math.pow(screen.value,1/2);
        }
       function cuberoot(){
           screen.value=Math.pow(screen.value,1/3);
       }
       function cube(){
           screen.value=Math.pow(screen.value,3);
       }
     function number(value){
            screen.value+=value;
            
        }
        // function sin(){
        //     screen.value=Math.sin(screen.value);
        // }
        // function cos(){
        //     screen.value=Math.cos(screen.value);
        // }
        // function tan(){
        //     screen.value=Math.tan(screen.value);
        // }

        


//     })
// }
// let screen=document.getElementById("screen");
// function Number(value){
//     screen.value+=value;
    
// }
// function eval(){
//  screen.value
// }