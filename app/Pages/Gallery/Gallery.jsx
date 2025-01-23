import React from 'react';

const images = [
  { src: 'image1.jpg', alt: 'Description 1', className: 'col-span-2 row-span-3' },
  { src: 'image2.jpg', alt: 'Description 2', className: 'col-span-3 row-span-2' },
  { src: 'image3.jpg', alt: 'Description 3', className: 'col-span-3 row-span-3' },
  { src: 'image4.jpg', alt: 'Description 4', className: 'col-span-2 row-span-2' },
  { src: 'image4.jpg', alt: 'Description 4', className: 'col-span-2 row-span-2' }
];

const Gallery = () => {
  return (
    <div className="Gallery grid justify-center items-center h-screen" id="gallery">
      <h1 className="text-center text-2xl font-bold mb-6">Gallery</h1>
      <div className="grid gap-4 w-full max-w-6xl bg-slate-700 p-4 rounded-lg">
        {/* Responsive grid for different screen sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg bg-gray-800 ${image.className} sm:col-span-1 sm:row-span-1 lg:${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
