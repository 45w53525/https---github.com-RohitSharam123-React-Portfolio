import { useState, useEffect, Component } from "react";
import axios from "axios";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "../routes/skill.css"
function Skill() {

       
    const [skill, setSkill] = useState([])


    useEffect(() => {

        async function getAllSkill() {

            try {
                const skill = await axios.get("http://127.0.0.1:8000/api/skills/list")

                console.log(skill.data)
                setSkill(skill.data)

            } catch (error) {

            }



        }
        getAllSkill()
    }, [])



    return (

        <div className = "body">
            <h1>Project</h1>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="8" class="active" aria-current="true" aria-label="Slide 1"></button>

                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="1000">
                        <img src="first.jpg" className="img" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2 className="h2"> Play Ground </h2>

                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="ei.jpg" className="img" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2 className="h2">Play Ground</h2>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="third.jpg" className="img" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 className="h2">Play Ground</h5>

                        </div>

                    </div>

                    <div class="carousel-item">
                        <img src="fourth.jpg" className="img" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2 className="h2">Play Ground</h2>

                        </div>

                    </div>
                    <div class="carousel-item">
                        <img src="fifth.jpg" className="img" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2 className="h2">Play Ground</h2>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="sixth.jpg" className="img" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2 className="h2">Play Ground</h2>

                        </div>

                    </div>
                    <div class="carousel-item">
                        <img src="seventh.jpg" className="img" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2 className="h2"> Play Ground </h2>

                        </div>

                    </div>

                </div>
                <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <h3 className="h2">Skills</h3>
            <div className="table">
                <table class="table table-dark table-striped-columns">
                    <thead>
                        <tr>
                            <th scope="col" className="td">Language</th>
                            <th scope="col" className="td">Expertise</th>
                            
                        </tr>
                    </thead>
                    <tbody className="data">
                        {
                            skill.map((skill, i) => {
                                return (
                                    <tr>
                                        <td className="td">{skill.language}</td>
                                        <td className="td">{skill.expertise}</td>
                                       

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <h3 className="thank">Thank You </h3>
            </div>



         
        </div>
    );


}



export default Skill;

