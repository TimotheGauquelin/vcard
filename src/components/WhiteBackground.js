import React from 'react';
import Button from 'react-bootstrap/Button';
import { FormattedMessage } from 'react-intl';

const WhiteBackground = () => {

    return (
        <div className="whiteBg row">

            <div className="description col-lg">
                <img src={`${process.env.PUBLIC_URL}/img/theo-wow.png`} alt="" />

                <div className="name">
                    <FormattedMessage
                        id="whiteBg.name"
                        defaultMessage="Bonjour, je suis Tim"
                    />
                </div>
                <div className="about">
                    <FormattedMessage
                        id="whiteBg.about"
                        defaultMessage="Je suis à la recherche d'un stage"
                    />
                </div>
                <Button className="bouton" size="lg">
                    <a href={`${process.env.PUBLIC_URL}/img/cv.pdf`} tartget="_blank">
                        <FormattedMessage
                        id="whiteBg.learnMore"
                        defaultMessage="En savoir plus"
                    />
                    </a>
                </Button>
            </div>
            <div className="circleBlock col-lg-7">
                <div className="photoBlock">
                    <img className="photo" src={`${process.env.PUBLIC_URL}/img/happyguyguy.png`} alt="" />
                    <a href="https://www.linkedin.com/in/timoth%C3%A9-gauquelin-949272189/"><img className="linkedin" src={`${process.env.PUBLIC_URL}/img/linkedin_jpeg.jpg`} alt="" /></a>
                    <a href="https://github.com/TimotheGauquelin"><img className="github" src={`${process.env.PUBLIC_URL}/img/github_jpeg.jpg`} alt="" /></a>
                    <a href="https://www.instagram.com/spitzoune/"><img className="instagram" src={`${process.env.PUBLIC_URL}/img/insta_jpeg.jpg`} alt="" /></a>
                </div>
            </div>
            <div className="socialNetworkMini">
                <a href="https://www.linkedin.com/in/timoth%C3%A9-gauquelin-949272189/"><img src={`${process.env.PUBLIC_URL}/img/linkedin_jpeg.jpg`} alt="" /></a>
                <a href="https://github.com/TimotheGauquelin"><img src={`${process.env.PUBLIC_URL}/img/github_jpeg.jpg`} alt="" /></a>
                <a href="https://www.instagram.com/spitzoune/"><img src={`${process.env.PUBLIC_URL}/img/insta_jpeg.jpg`} alt="" /></a>
            </div>
        </div>
    )
}

export default WhiteBackground
