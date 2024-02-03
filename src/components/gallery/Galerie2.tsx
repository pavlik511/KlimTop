import ImageGallery2 from 'react-image-gallery';
import React from "react";

import "react-image-gallery/styles/css/image-gallery.css";

function App2(){
    const images2 = [
  {
    original: "/assets/klima1.jpg",
    thumbnail: "/assets/klima1.jpg",
  },
  {
    original: "/assets/klima2.jpg",
    thumbnail: "/assets/klima2.jpg",
  },
  ];
  
  return (
  <div className="App grid h-screen place-items-center ">
    <div className="w-1/2 p-10 rounded-lg">
    <h3 className="text-2xl font-medium tracking-tight sm:text-2xl">Klimatizace</h3>
    <ImageGallery2
    items={images2}
    
    showPlayButton={true}
    slideOnThumbnailOver={true}
    
    showIndex={true}
    />;
    </div>
    </div>
  );
  }
  export default App2;


