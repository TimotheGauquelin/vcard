import React from 'react'
import Button from 'react-bootstrap/Button';
import { FormattedMessage } from 'react-intl';
import '../stylesheets/Contact.scss';

const Contact = () => {
    return (
        <div className="whiteCard row">

            <div className="description col-lg-7">
                <h1><b>Ravi de vous voir ici !</b></h1>
                <h2>Car cela me prouve que vous avez pris du temps pour me connaitre.
                Et rien que cela, ça me va droit au coeur !
                </h2>
                <div className="request">Je suis actuellement à la recherche d’un stage de développeur Web
                et Web Mobile pour en apprendre toujours plus
                </div>
                <h2 className="row">
                    <p>timothegauquelin@gmail.com</p>
                </h2>
                <div className="row">

                </div>
                <div className="row">

                </div>


            </div>
            <div className="col-lg">
                <Button className="bouton" size="lg">
                    <a href={`${process.env.PUBLIC_URL}/img/cv.pdf`} tartget="_blank">
                        <FormattedMessage
                            id="contact.downloadCV"
                            defaultMessage="Télécharger CV"
                        />
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default Contact
