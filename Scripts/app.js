// IIFE - Immediately Invoked Function Expression = Anonymous self executing function - closure
(function(){


    //named function
    function Start()
        {
            console.log('%cApp started...', "color:blue; font-size: 24px");           
            
            let title = document.title;

            title = title.toLowerCase();


            console.log(`The title of the page is ${title}`);

            let navAnchors = document.querySelectorAll("li a");

            for (const anchor of navAnchors) 
            {
                let anchorString = anchor.getAttribute("href");
                anchorString = anchorString.substr(0,anchorString.length - 5);

                if ((title === "home") && (anchorString === "index") || (title === anchorString))
                {
                    anchor.className = "nav-link active";
                }             
            
            }
            //Step 1: hook into spot (element) on page
            let jumbotron = document.getElementsByClassName("jumbotron")[0];
            //Step 2: create new element
            let newParagraph = document.createElement("p");
            //step 3: configure new elemtn
            newParagraph.textContent = title;
            
            //Step 4: attach new element
            jumbotron.appendChild();

            

        }    
    

    window.addEventListener("load", Start);
    
})();