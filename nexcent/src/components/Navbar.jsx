import React from 'react';

function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-xl font-bold">Nexcent</div>
      <nav>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>Service</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Testimonial</li>
          <li>FAQ</li>
        </ul>
      </nav>
      <div className="space-x-4">
        <button className="text-green-500">Login</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Sign up</button>
      </div>
    </header>
  );
}

export default Navbar;
