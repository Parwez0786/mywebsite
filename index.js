console.log("fdf")
let screen = document.getElementById("screen");

buttons = document.querySelectorAll('button');


let screenVal = '';
for (item of buttons) {   //for all buttons
    item.addEventListener('click', (e) => {   //clicck event on each button
        let buttonText = e.target.innerText;            //particular button inner text stored in buttontext;
        console.log(buttonText);            ///printing in console the button on which you clivcked
        if (buttonText == "X") {
          buttonText = "*";
          screenVal += buttonText;
          screen.value = screenVal;
        }
        
        
        else if (buttonText == "C") {
          screenVal = "";
          screen.value = screenVal;
        }
        
        else if (buttonText == "=") {
            
          screen.value = eval(screenVal);

          setTimeout(function(){
         screen.value="";
          screenVal = "";

          }, 2000)
          
        }
        
        
        else if (buttonText == "1") {
          screenVal += buttonText;
          screen.value = screenVal;
        }
        
        
        else if (buttonText == "2") {
          screenVal += buttonText;
          screen.value = screenVal;
        }
        
        
        else if (buttonText == "3") {
          screenVal += buttonText;
          screen.value = screenVal;
        }
        
        
        else if (buttonText == "4") {
          screenVal += buttonText;
          screen.value = screenVal;
        }
        
        
        
        else if (buttonText == "5") {
          screenVal += buttonText;
          screen.value = screenVal;
        }
        
        
        
        else if (buttonText == "6") {
          screenVal += buttonText;
          screen.value = screenVal;
        }
        
        
        
        else if (buttonText == "7") {
          screenVal += buttonText;
          screen.value = screenVal;
        } 
        
        
        else if (buttonText == "8") {
          screenVal += buttonText;
          screen.value = screenVal;
        } 
        
        
        
        else if (buttonText == "9") {
          screenVal += buttonText;
          screen.value = screenVal;
        }
        
        
        
        
        else if (buttonText == "0") {
          screenVal += buttonText;
          screen.value = screenVal;
        }
        
        
        
        
        
        else if (buttonText == "/") {
          screenVal += buttonText;
          screen.value = screenVal;
        }
        
        
        
        
        else if (buttonText == "-") {
         
          screenVal += buttonText;
          screen.value = screenVal;
        }
        
        
        
        
        
        else if (buttonText == "+") {
          screenVal += buttonText;
          screen.value = screenVal;
        } 
        
        
        
        
        else if (buttonText == "%") {
           screenVal += buttonText;
           screen.value = screenVal;
         
        } 
        
        
        
        else if (buttonText == "(") {
          
         screenVal += buttonText;
         screen.value = screenVal;
        } 
        
        
        
        else if (buttonText == ")") {
          screenVal += buttonText;
          screen.value = screenVal;
        }





    })
}

let music1= document.getElementById('parwez1');
let play1=document.getElementById('play1');


music1.onclick=function(){
  play1.play();
}



let music2 = document.getElementById("parwez2");
let play2 = document.getElementById("play2");

music2.onclick = function () {
  play2.play();
};