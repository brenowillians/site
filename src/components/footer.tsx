import { Fragment } from "react"


export default function FooterComponent() {
    return(
        <Fragment>
        <footer>
            <div className="row foot">
                <div className="col">
                    <h1>Downy Shoes</h1>
                    <p>
                        Official <a href="https://www.nike.com/xf/en_gb/">Nike</a> Partner
                    </p>
                </div>
                <div className="col">
                    <h2>Links</h2>
                    <ul>
                        <li><a href="/about-us">Sobre a Loja</a></li>

                        <li><a href="/contact-us">Fale Conosco</a></li>
                        <li><a href="/terms-and-conditions">Termos e Condições</a></li>
                        <li><a href="/work-with-us">Trabalhe Conosco</a></li>
                        <li><a href="/refund-policy">Política de Privacidade</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h2>
                        Copyright <sup>©</sup>
                        <a href="https://www.codepen.io/jeetg57" target="_blank"
                        >Jeet Gohil</a>
                    </h2>
                </div>
            </div>
        </footer>
        <footer id="footer-social">
                <ul className="row foot-icons" style={{listStyle:'none'}}>
                    <li>
                        <a href="https://twitter.com/JeetGohil_" target="_blank">
                            <i className="fab fa-twitter fa-3x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/MarioJT99" target="_blank">
                            <i className="fab fa-facebook fa-3x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.codepen.io/jeetg57" target="_blank">
                            <i className="fab fa-codepen fa-3x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Jeetg57" target="_blank">
                            <i className="fab fa-github fa-3x"></i>
                        </a>
                    </li>
                </ul>
        </footer>
            
        </Fragment>
    )
}