import React from 'react';
import Button from 'react-bootstrap/Button';
import { FormattedMessage } from 'react-intl';
import '../stylesheets/Home.scss';

const Home = () => {

    return (
        <div className="whiteCard row">

            <div className="leftBlock col-lg">
                <img className="portable-headPhoto" src={`${process.env.PUBLIC_URL}/img/photo/portablePhoto.png`} alt="My Head" />

                <div className="titleInsert">
                    <FormattedMessage
                        id="home.name"
                        defaultMessage="Bonjour, je suis Tim"
                    />
                </div>
                <div className="contentInsert">
                    <FormattedMessage
                        id="home.about"
                        defaultMessage="Vous êtes actuellement sur mon site"
                    />
                </div>
                <div className="contentInsert">
                    <FormattedMessage
                        id="home.about2"
                        defaultMessage="Je suis plein de curiosité"
                    />
                </div>
                <Button className="buttonInsert" size="lg">

                    <a href={`${process.env.PUBLIC_URL}/img/cv.pdf`} tartget="_blank">

                        <FormattedMessage
                            id="home.learnMore"
                            defaultMessage="En savoir plus" />

                    </a>

                </Button>

            </div>

            <div className="rightBlock col-lg-7">
                <div className="desktop-bodyPhotoBlock">
                    <img className="desktop-bodyPhotoBlock" src={`${process.env.PUBLIC_URL}/img/photo/desktopPhoto.png`} alt="" />
                    <a href="https://www.linkedin.com/in/timoth%C3%A9-gauquelin-949272189/">
                        <img className="linkedin" src={`${process.env.PUBLIC_URL}/img/socialnetwork/linkedin_jpeg.jpg`} alt="" />
                    </a>
                    <a href="https://github.com/TimotheGauquelin">
                        <img className="github" src={`${process.env.PUBLIC_URL}/img/socialnetwork/github_jpeg.jpg`} alt="" />
                    </a>
                    <a href="https://www.instagram.com/spitzoune/">
                        <img className="instagram" src={`${process.env.PUBLIC_URL}/img/socialnetwork/insta_jpeg.jpg`} alt="" />
                    </a>
                </div>
            </div>

            <div className="portable-socialNetwork">
                <a href="https://www.linkedin.com/in/timoth%C3%A9-gauquelin-949272189/">
                    <img className="icon" src={`${process.env.PUBLIC_URL}/img/socialnetwork/linkedin_jpeg.jpg`} alt="" />
                </a>
                <a href="https://github.com/TimotheGauquelin">
                    <img className="icon" src={`${process.env.PUBLIC_URL}/img/socialnetwork/github_jpeg.jpg`} alt="" />
                </a>
                <a href="https://www.instagram.com/spitzoune/">
                    <img className="icon" src={`${process.env.PUBLIC_URL}/img/socialnetwork/insta_jpeg.jpg`} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Home
