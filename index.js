let screen=document.getElementById("screen");
let screenValue="";

        function clear(){
            screen.value="";
            console.log(screen.value);
        }
        function evalu(){
            screen.value=eval(screen.value);
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
        
        


