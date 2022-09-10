
/**Author : Oladele John

** © 2022 Oladele John

** 9/9/2022

** About : This is the header section directive

*/

portfolio.directive("header", function(){

    return {

        template : `
        
        <nav class="mb-5 navbar navbar-expand-sm fixed-top navbar-dark bg-dark">

            <div class="container">
                <a class="navbar-brand" href="#">
                <img class="rounded-circle" src="./src/images/nftt.png"
                style="object-fit:cover;border:1px solid black;height:50px;
                border-radius:25px;width:50px;"/> Cyber Geek</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" 
                aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample02">

                    <ul class="navbar-nav me-auto ms-auto">

                        <li class="nav-item">
                            <a class="nav-link" href="#home">
                                <i class="fa fa-home"></i> Home
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#skills">
                                <i class="fa fa-bolt"></i> Skills
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#project">
                                <i class="fa fa-briefcase"></i> Projects
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#contact">
                            <i class="fa fa-address-book"></i> Contact
                            </a>
                        </li>

                    </ul>

                    <form>
                        <input class="form-control" type="text" placeholder="Search" aria-label="Search">
                    </form>
                </div>

            </div>

        </nav>
        
        `

    }

});