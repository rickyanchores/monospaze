import React from 'react';

const images = [
  { src: 'https://images.unsplash.com/photo-1603252109612-24fa03d145c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHwxMHx8d2hpdGUlMjBzaGlydHxlbnwwfHx8fDE3Mzc3MzYzMTV8MA&ixlib=rb-4.0.3&q=80&w=1080', alt: 'Description 1', className: 'col-span-2 row-span-3' },
  { src: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHw5fHx3aGl0ZSUyMHNoaXJ0fGVufDB8fHx8MTczNzczNjMxNXww&ixlib=rb-4.0.3&q=80&w=1080', alt: 'Description 2', className: 'col-span-3 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHw0fHxtaW5pbWFsaXNtJTIwbW9kZWx8ZW58MHx8fHwxNzM3NzM2Mzk0fDA&ixlib=rb-4.0.3&q=80&w=1080', alt: 'Description 3', className: 'col-span-3 row-span-3' },
  { src: 'https://images.unsplash.com/photo-1517323197145-72f28d311d51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHw2fHxtaW5pbWFsaXNtJTIwbW9kZWx8ZW58MHx8fHwxNzM3NzM2Mzk0fDA&ixlib=rb-4.0.3&q=80&w=1080', alt: 'Description 4', className: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1613728455120-d00493b5e77e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwZmFzaGlvbnxlbnwwfHx8fDE3Mzc2NjI4NDN8MA&ixlib=rb-4.0.3&q=80&w=1080', alt: 'Description 4', className: 'col-span-2 row-span-2' }
];

const Gallery = () => {
  return (
    <div className="Gallery grid justify-center items-center" id="gallery">
      <h1 className="text-center text-2xl font-bold mb-6">Gallery</h1>
      <div className="grid gap-4 w-full max-w-6xl p-4 rounded-lg">
        {/* Responsive grid for different screen sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden  ${image.className} sm:col-span-1 sm:row-span-1 lg:${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover transform transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
