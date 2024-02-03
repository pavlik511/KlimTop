import ImageGallery4 from 'react-image-gallery';
import React from "@astrojs/react";

import "react-image-gallery/styles/css/image-gallery.css";

function App4(){
    const images4 = [
  {
    original: "/assets/rekuperace.jpg",
    thumbnail: "/assets/rekuperace.jpg",
  },
  {
    original: "/assets/rekuperace2.jpg",
    thumbnail: "/assets/rekuperace2.jpg",
  },
  ];
  
  return (
  <div className="App grid h-screen place-items-center ">
    <div className="w-1/2 p-10 rounded-lg">
    <h3 className="text-2xl font-medium tracking-tight sm:text-2xl">Rekuperace</h3>
    <p>Informace o tom, jak funguje rekuperace najdete v menu – <u><a href="/rekuperace">Rekuperace</a></u></p>
    <ImageGallery4
    items={images4}
    
    showPlayButton={true}
    slideOnThumbnailOver={true}
    
    showIndex={true}
    />;
    </div>
    </div>
  );
  }
  export default App4;