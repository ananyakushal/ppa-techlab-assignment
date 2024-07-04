import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">
        The Unseen of Spending Three Years at Pixelgrade
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center rounded-lg shadow-md overflow-hidden">
          {/* Add your image here */}
          <img src="path/to/your/image.jpg" alt="Pixelgrade Years" className="w-full h-auto object-cover" />
        </div>
        <div className="p-8 bg-white rounded-lg shadow-md">
          <p className="text-gray-700 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu risus
            semper, laoreet sapien a, ultrices arcu. Pellentesque auctor magna
            sit amet elit tristique interdum. Donec nulla quam, viverra at
            nisi vitae, faucibus tempor magna. Cras justo odio, dapibus ac
            facilisis in, egestas eget quam. Donec elementum pulvinar odio.
          </p>
          <p className="text-gray-700 leading-loose mt-4">
            Mauris blandit aliquam elit, eget tincidunt nibh pulvinar a. Sed
            porttitor lectus nibh. Donec sollicitudin pretium libero. Donec at
            libero justo. Praesent eleifend dignissim sem, sed consectetur
            sem consectetur nec.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
