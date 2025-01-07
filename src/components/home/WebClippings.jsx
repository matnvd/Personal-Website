import React from "react";
import { Row } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import { FacebookEmbed, InstagramEmbed, XEmbed } from 'react-social-media-embed';

import { Jumbotron } from "./migration";

const WebClippings = ({ heading}) => {
    return (
        <Jumbotron id="mediahighlights" className="bg-white">
            <Container className="">
                <h2 className="display-4 pb-5 text-center">{heading}</h2>
                <Row>
                    {
                    // <>
                    <div class="grid">
                        
                        <div class = "nyt"> {/*rhs nyt*/}
                            <FacebookEmbed url="https://www.facebook.com/RidgewoodPublicSchools/posts/pfbid0D4Ak5ZJ4UeDjupZk3CYeqKNSbqwtHghw8Q4vfqVPhV4aZ3418TRGj9ixaSqRY9tal"/>
                        </div>
                        <div class = "eva"> {/*eva nyt*/}
                            <FacebookEmbed url="https://www.facebook.com/mathias.nguyen.1029/posts/pfbid027w7hP5Wusu65xnN5FYhT7ed35SYzjCxUJsRTt3H6hdQgktwcgLgukJBsECXWHYsYl"/>
                        </div> 
                        <div class = "newday"> {/*newdayprogram scouts*/}
                            <InstagramEmbed url="https://www.instagram.com/p/C-wAAmQJfg2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="captioned />
                        </div>
                        <div class = "aime"> {/*rhs AIME, fb: https://www.facebook.com/RidgewoodPublicSchools/posts/pfbid0codtGH3dgUM7wwNXjSrR2QaxiTkmCMEENu1Fp1RUnBqXYcUAh1dnDxSzXhg8enAGl*/}
                            <InstagramEmbed url="https://www.instagram.com/p/C2lBsVdvHo4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="captioned />
                        </div>
                        <div class = "nmsqt"> {/*rhs nmsqt (there's fb too)*/}
                            <XEmbed url="https://twitter.com/RwdPubSchools/status/1836476431578153134"/>
                        </div>
                    </div>
                    // </>
                    }
                </Row>
            </Container>
        </Jumbotron>
    );
};

export default WebClippings;
