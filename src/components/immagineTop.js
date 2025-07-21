import React from 'react';

const ImmagineTop = immagine => (
    <div className="w-full top mx-0">
        <div className="contImg-top">
            <img alt="Immagine Principale" src={ immagine } className="img-top" />
            <div className="slogan-top">
                <div className="acronimo">{ acronimo }</div>
            </div>
        </div>
    </div>
);

export default ImmagineTop;
