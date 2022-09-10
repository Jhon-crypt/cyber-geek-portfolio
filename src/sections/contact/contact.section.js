
/**Author : Oladele John

** © 2022 Oladele John

** 9/9/2022

** About : This is the contact section directive

*/

portfolio.directive("contact", function(){

    return {

        template : `
        
        <div id="contact" class="mt-5 py-5 pb-5 container text-light">

            <h3 class="text-center display-5 fw-bold">
                Contact <i class="fa fa-address-book"></i>
            </h3>

            <div align="center">

            <div class="row pt-4">

                <div class="col">

                    <div class="card bg-dark" style="width:200px"">

                        <div class="card-body">

                            <h4 class="card-title">
                               <i class="fa fa-send"></i> Email
                            </h4>

                            <p>johnoladele690@gmail.com</p>

                        </div>

                    </div>

                </div>

                <div class="col">

                    <div class="card bg-dark" style="width:200px">

                        <div class="card-body">

                            <h4 class="card-title">
                                <i class="fa fa-github"></i> Github
                            </h4>

                            <p>https://github.com/jhon-crypt/</p>

                        </div>

                    </div>

                </div>

                <div class="col">

                    <div class="card bg-dark" style="width:200px">

                        <div class="card-body">

                            <h4 class="card-title">
                               <i class="fa fa-twitter"></i> Twitter
                            </h4>

                            <p>https://twitter.com/cyber_geek__/</p>

                        </div>

                    </div>

                </div>

                <div class="col">

                    <div class="card bg-dark" style="width:200px">

                        <div class="card-body">

                            <h4 class="card-title">
                               <i class="fa fa-phone"></i> Phone
                            </h4>

                            <p>+2439061811990<br>That's all</p>

                        </div>

                    </div>

                </div>

            </div>

            </div>

        </div>
        
        `

    }

});