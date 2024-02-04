import ImageGallery5 from 'react-image-gallery';
import React from "@astrojs/react";

import "react-image-gallery/styles/css/image-gallery.css";

function App5(){
    const images5 = [
      
  {
    original: "/assets/topeni.jpg",
    thumbnail: "/assets/topeni.jpg",
  },
  {
    original: "/assets/topeni2.jpg",
    thumbnail: "/assets/topeni2.jpg",
  },
  ];
  
  return (
  <div className="App grid h-screen place-items-center ">
    <div className="w-1/2 p-10 rounded-lg">
    <h3 className="text-2xl font-medium tracking-tight sm:text-2xl">Topení</h3>
    <ImageGallery5
    items={images5}
    
    showPlayButton={true}
    slideOnThumbnailOver={true}
    
    showIndex={true}
    />;
    </div>
    </div>
  );
  }
  export default App5;