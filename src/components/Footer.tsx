import React, {useState} from 'react'

const Footer = () => {
    return(
        <div>
            <section className="footer">
                <nav>
                    <div>
                    <h3>Les bases</h3>
                    <ul>
                        <li><a href="#">À propos de TMDB</a></li>
                        <li><a href="#">Contactez-nous</a></li>
                        <li><a href="#">Forums d'assistance</a></li>
                        <li><a href="#">API</a></li>
                        <li><a href="#" target="_blank" rel="noopener">Statut du système</a></li>
                    </ul>
                    </div>
                    <div>
                    <h3>S'impliquer</h3>
                    <ul>
                        <li><a href="#"><span className="glyphicons glyphicons-asterisk"></span> Bible des contributions</a></li>
                        <li><a href="#">Ajouter un film</a></li>
                        <li><a href="#">Ajouter une émission TV</a></li>
                    </ul>
                    </div>
                    <div>
                    <h3>Communauté</h3>
                    <ul>
                        <li><a href="#">Règles</a></li>
                        <li><a href="#">Conversations</a></li>
                        <li><a href="#">Top contributions</a></li>
                        <li><a href="#" target="_blank" rel="noopener">Twitter</a></li>
                    </ul>
                    </div>
                    <div>
                    <h3>Mentions légales</h3>
                    <ul>
                        <li><a href="#">Conditions d'utilisation</a></li>
                        <li><a href="#">Conditions d'utilisation API</a></li>
                        <li><a href="#">Politique de confidentialité</a></li>
                    </ul>
                    </div>
                </nav>
            </section>
        </div>
    )
}

export default Footer