
/**Author : Oladele John

** © 2022 Oladele John

** 9/9/2022

** About : This is the projects section directive

*/

portfolio.directive("projects", function(){

    return {

        template : `
        
        <div id="project" class="mt-5 py-5 pb-5 container text-light">

            <h3 class="text-center display-5 fw-bold">
                Projects <i class="fa fa-briefcase"></i>
            </h3>

            <div align="center">

            <div class="row pt-4">

                <div class="col">

                    <div class="card bg-dark mb-2" style="width:200px">

                        <img class="crad-img-top" src="./src/images/www.edtech-classroom.epizy.com_dashboard_lecturer-dashboard_.png" 
                        style="object-fit:cover;height:150px">

                        <div class="card-img-overlay" style="font-weight:bold;border:1px solid;background-color:rgb(0,0,0);
                        background-color: rgba(0,0,0,0.4);">

                            <h4 class="card-title">
                                Edtech-Class
                            </h4>

                            <p class="card-text">A course management system</p>

                            <a href="https://www.edtech-classroom.epizy.com/" class="btn btn-light text-dark">
                                View <i class="fa fa-external-link"></i>
                            </a>

                        </div>

                    </div>

                </div>

                <div class="col">

                    <div class="card bg-dark mb-2" style="width:200px">

                        <img class="crad-img-top" src="./src/images/taskstack.png" 
                        style="object-fit:cover;height:150px">

                        <div class="card-img-overlay" style="font-weight:bold;border:1px solid;background-color:rgb(0,0,0);
                        background-color: rgba(0,0,0,0.4);">

                            <h4 class="card-title">
                                Task stack
                            </h4>

                            <p>A very simple task manager</p>

                            <a href="https://taskstack.epizy.com/" class="btn btn-light text-dark">
                                View <i class="fa fa-external-link"></i>
                            </a>

                        </div>

                    </div>

                </div>

                <div class="col">

                    <div class="card bg-dark mb-2" style="width:200px">

                        <img class="crad-img-top" src="./src/images/wheelsx.netlify.app_.png" 
                        style="object-fit:cover;height:150px">

                        <div class="card-img-overlay" style="font-weight:bold;border:1px solid;background-color:rgb(0,0,0);
                        background-color: rgba(0,0,0,0.4);">

                            <h4 class="card-title">
                                WheelsX
                            </h4>

                            <p>A simple car landing page</p>

                            <a href="https://wheelsx.netlify.app/" class="btn btn-light text-dark">
                                View <i class="fa fa-external-link"></i>
                            </a>

                        </div>

                    </div>

                </div>

                <div class="col">

                    <div class="card bg-dark mb-2" style="width:200px">

                        <img class="crad-img-top" src="./src/images/phoneshopz.png" 
                        style="object-fit:cover;height:150px">

                        <div class="card-img-overlay" style="font-weight:bold;border:1px solid;background-color:rgb(0,0,0);
                        background-color: rgba(0,0,0,0.4);">

                            <h4 class="card-title">
                                Phone-Shopz
                            </h4>

                            <p>A simple phone store landing page</p>

                            <a href="https://phoneshopz.netlify.app/" class="btn btn-light text-dark">
                                View <i class="fa fa-external-link"></i>
                            </a>

                        </div>

                    </div>

                </div>

            </div>

            </div>

        </div>
        
        `

    }

});