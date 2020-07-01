// IIFE - Immediately Invoked Function Expression = Anonymous self executing function - closure
(function(){

    //name function
    /* function Start ()
    {
        let x = 5;
        if(x === "5") //== means somewhat equal/same, Always use === means exactly equal
        {
            console.log("X is equal to 5");
        }
        console.log('%cApp Started...', "color:blue; font-size: 24px");

    } */

    /* function Start ()
    {
        let x = 5;
        if(x >= "5") //>== doesn't exist, >= only exists
        
        {
            console.log("X is equal to 5");
        }
        console.log('%cApp Started...', "color:blue; font-size: 24px");

    } */

    /* function Start ()
    {
        let x = 5;
        if(x >= "5") 
        //confirm are useful. It's helpful.
        {
            if(confirm("Are you sure?"))
            {
                console.log("X is equal to 5");
            }
            else
            {
                console.log("X is maybe 5??");
            }
        }
        console.log('%cApp Started...', "color:blue; font-size: 24px");

    } */

    function Start ()
    {
        let x = 5;
        if(x >= "5") //add breakpoint, red dot. then click run bug on the sidebar, 
        //then click run and debug, and on the left side under variable you should see breakpoint in local
        //confirm are useful. It's helpful.
        {
            if(confirm("Are you sure?"))
            {
                console.log("X is equal to 5");
            }
            else
            {
                console.log("X is maybe 5??");
            }
        }
        console.log('%cApp Started...', "color:blue; font-size: 24px");

    }
 
    // declarative format
    /* let Start = function ()
    {
        console.log("App started...")
    } */

    /* let Start = ()=>
    {
        console.log("App started...")
    } */

    //NOTES
    // don't ever use document.write or alert or var

    window.addEventListener("load", Start);
    
})();