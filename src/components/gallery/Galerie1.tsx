import ImageGallery from 'react-image-gallery';
import React from "@astrojs/react";

import "react-image-gallery/styles/css/image-gallery.css";


  function App(){
    const images = [
  {
    original: "/assets/tepelnacerpadla.jpg",
    thumbnail: "/assets/tepelnacerpadla.jpg",
  },
  {
    original: "/assets/tepelnacerpadla2.jpg",
    thumbnail: "/assets/tepelnacerpadla2.jpg",
  }
  
];

return (
  <div className="App grid h-screen place-items-center ">
    <h2 className="text-3xl font-medium tracking-tight sm:text-4xl underline decoration-red decoration-4 underline-offset-4">Galerie</h2>
    <div className= "w-1/2 p-10 rounded-lg">
    <h3 className="text-2xl font-medium tracking-tight sm:text-2xl">Tepelná čerpadla</h3>
    <ImageGallery
    items={images}
    
    showPlayButton={true}
    slideOnThumbnailOver={true}
    
    showIndex={true}
    />;
    </div>
    </div>
);
}
export default App;


