import React from 'react';

const ImmagineTop = immagine => (
    <div className="w-full top mx-0">
        <div className="contImgTop">
            <img alt="Immagine Principale" src={ immagine } className="imgTop" />
            <div className="sloganTop">
                <div className="acronimo">{ acronimo }</div>
            </div>
        </div>
    </div>
);

export default ImmagineTop;
