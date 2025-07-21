import React from 'react';
import Logo from './logo';
import { GatsbyImage } from 'gatsby-plugin-image';

const TopPagine = props => {
    const displayExtended = props.displayExtended || 'none';
    const antiDisplayExtended = displayExtended === 'none' ? 'block' : 'none';

    return (
        <div className="w-full top mx-0">
            <div className="contImgTop int">
                {props.immagineGatsbyData && (
                  <GatsbyImage
                    fetchpriority="high"
                    loading="eager"
                    className="imgTop"
                    width="1920"
                    height="768"
                    image={props.immagineGatsbyData}
                    alt={props.alt}
                  />
                )}
                <div className="sloganTop">
                    <div className="logoMobi d-lg-none">
                        <Logo
                            width="100"
                            height="100"
                            className="mx-auto d-block"
                        />
                    </div>
                    <div className="home" style={ { display: displayExtended } }>
                        <div className="acronimo">{ props.slogan }</div>
                        { props.dedica }
                    </div>
                    <div
                        className="acronimo"
                        style={ { display: antiDisplayExtended } }
                    >
                        { props.slogan }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopPagine;
