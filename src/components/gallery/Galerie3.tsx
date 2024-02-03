import ImageGallery3 from 'react-image-gallery';
import React from "react";

import "react-image-gallery/styles/css/image-gallery.css";

function App3(){
    const images3 = [
  {
    original: "/assets/mereni.jpg",
    thumbnail: "/assets/mereni.jpg",
  },
  {
    original: "/assets/mereni2.jpg",
    thumbnail: "/assets/mereni2.jpg",
  },
  ];
  
  return (
  <div className="App grid h-screen place-items-center ">
    <div className="w-1/2 p-10 rounded-lg">
    <h3 className="text-2xl font-medium tracking-tight sm:text-2xl">Měření a regulace</h3>
    <ImageGallery3
    items={images3}
    
    showPlayButton={true}
    slideOnThumbnailOver={true}
    
    showIndex={true}
    />;
    </div>
    </div>
  );
  }
  export default App3;