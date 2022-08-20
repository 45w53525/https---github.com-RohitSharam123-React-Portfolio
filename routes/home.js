import React from "react";
import "../routes/home.css"
import 'bootstrap/dist/css/bootstrap.css';
function Home() {



    return (

        <div className="back">
            
            <div className="container">
             <div className="cover"> 
                <div className="row">
                    <div className="banner">
                        <img src="back2.jpg" alt="img" />
                        <h2 className="heading">Rohit Sharma </h2>
                        <p className="state"> FullStack Web Developer</p>
                    </div>
                </div>
             </div>
           </div>
            <h2 className="h2"> Services</h2>
            <div className="box">
                <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 mb-5">
                    <div class="col">
                        <div class="card h-100 text-bg-dark mb-3 border border-white">
                            <img src="plan.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="cardhead">PLANNING</h5>
                                <p class="cardfont">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="cardfont">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 text-bg-dark mb-3 border border-white">
                            <img src="pslogo.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="cardhead">DESIGNING</h5>
                                <p class="cardfont">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div class="cardfont">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 text-bg-dark mb-3 border border-white">
                            <img src="dev.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="cardhead">CREATING</h5>
                                <p class="cardfont">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div class="cardfont">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="h2">Let Me Get You A Beautiful Website</h2>
            <div className="form"> 
                <form class="row g-4 mt-4 border border-white">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="formtext">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="formtext">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="formtext">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="formtext">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="formtext">City</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="formtext">State</label>
                        <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="formtext">Zip</label>
                        <input type="text" class="form-control" id="inputZip" />
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
            <div className="box2">
                <h2>Thank You</h2>
            </div>
        </div>


       






    )


}




export default Home;