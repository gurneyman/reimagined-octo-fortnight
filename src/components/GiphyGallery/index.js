import React from 'react';
import Giphy from '../Giphy';

import './GiphyGallery.css';

export default function GiphyGallery({images = []}) {

    return (
        <div className="giphy-gallery">
            {images.map((image) => <Giphy image={image} key={image.images.fixed_height_small_still.url} />)}
        </div>
    )
}