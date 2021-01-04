import React from 'react'
import { FormattedMessage } from 'react-intl';

import '../stylesheets/Contact.scss';
import Button from 'react-bootstrap/Button';
import { EnvelopeFill, Globe2, TelephoneFill } from 'react-bootstrap-icons';

const Contact = () => {
    return (
        <div className="whiteCard row">

            <div className="leftBlock col-lg-5">
                <div className="titleInsert">
                    <FormattedMessage
                        id="contact.welcomeBack"
                        defaultMessage="Ravi de vous revoir !"
                    />
                </div>
                <div className="contentInsert">
                    <FormattedMessage
                        id="contact.itProvesToMe"
                        defaultMessage="Cela me prouve que vous avez pris du temps pour me connaître !"
                    />
                </div>
                <div className="contentInsert contentInsert--redBold">
                    <FormattedMessage
                        id="contact.internship"
                        defaultMessage="Je suis actuellement à la recherche d'un stage"
                    />
                </div>
                <ul>
                    <li>
                        <EnvelopeFill className="icon" color="#2b78c5" size={20} />
                        timothegauquelin@gmail.com
                    </li>
                    <li>
                        <TelephoneFill className="icon" color="#2b78c5" size={20} />
                        06.41.97.99.90
                    </li>
                    <li>
                        <Globe2 className="icon" color="#2b78c5" size={20} />
                    </li>
                </ul>


            </div>
            <div className="rightBlock col-lg">
                <Button className="buttonInsert" size="lg">
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
