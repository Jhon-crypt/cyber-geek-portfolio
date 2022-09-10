
/**Author : Oladele John

** © 2022 Oladele John

** 9/9/2022

** About : This is the about section directive

*/

portfolio.directive("about", function(){

    return {

        template : `
        <div id="home" class="mt-5 px-4 pt-3 mb-5 text-center text-light">

            <img class="d-block mx-auto mb-4" src="./src/images/nftt.png"
            style="object-fit:cover;border:1px solid black;height:200px;border-radius:100px;width:200px;">

            <h1 class="display-5 fw-bold">Hi, I'm John(Cyber Geek)</h1>

            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">I'm yet another passionate tech bro as they usually call it, focused on building web specific 
                applications, Constantly learning new stuff, doing my best in maiking the world a better place.</p>

            </div>

        </div>
        
        `

    }
    
});
