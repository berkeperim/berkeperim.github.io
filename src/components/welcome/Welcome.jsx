import React from 'react'
import './welcome.css'
import CV from '../../assets/Berke_Perim_Resume.pdf'

const Welcome = () => {
    const hideMe = () => {
        document.querySelector("#welcome").classList.toggle("hide");
        document.body.classList.toggle("hidden-scroll");
    };
    return (
        <section id="welcome">
        <div className="container">
            <div className="welcome__container">
                <h1>Frontend</h1>
                <h1>Berke Perim.</h1>
                <h1>Developer</h1>
                <p>My name is Berke and I enjoy creating things that live on the internet. I'm a Turkey based Frontend Developer.</p> 
                <div className="welcome__buttons">
                    <a className="btn btn-primary" onClick={() => hideMe()}>See More About Me</a>
                    <a href={CV} className="btn btn-secondary">Download CV</a>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Welcome