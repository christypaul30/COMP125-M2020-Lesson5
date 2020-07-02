// IIFE - Immediately Invoked Function Expression = Anonymous self executing function - closure
(function(){


    //named function
    function Start()
        {
            console.log('%cApp started...', "color:blue; font-size: 24px");
            /* this is how you connect clickbutton to id in index, so when you click the button on the website, then you will see it in inspect that it has been clicked */
           /*  let clickMeButton = document.getElementById("clickMeButton"); 

            if(clickMeButton)
            {
            console.log(clickMeButton);
            } */

            let buttons = document.getElementsByTagName("button");
            let buttonCount = 0;

            if (buttons)
            {
                /* for (let index = 0; index < buttons.length; index++) {
                    console.log(buttons[index]);
                    
                }

                console.log(button); */
                //access each button seperately using loop, use the forof loop, returns a collection not array
                for (const button of buttons) {

                    if (buttonCount > 0)
                    button.style.fontSize = "20px";
                    buttonCount++;
                    console.log(button);
                }
            }

           /*  let buttonQuery = document.querySelector("button"); */

            let buttonsQuery = document.querySelectorAll("button");

            if(buttonsQuery) 
            {
                /* buttonsQuery.forEach(button => {
                    console.log(button);
                
                }); */
              
                //use the below looping because it always works!
                /* for (const button of buttonsQuery) {
                console.log(button);
                } */
            } 

            let helloworld = document.getElementsByTagName("h1")[0].textContent;

            console.log(helloworld);

            let mainInnerHTML = document.getElementsByTagName("main")[0].innerText;

            console.log(mainInnerHTML);
            

        }    
    

    window.addEventListener("load", Start);
    
})();