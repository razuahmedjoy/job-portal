import React, { useState } from 'react';

const ImageUpload = () => {
  // Reference to the hidden file input element
  const fileInputRef = React.createRef();

  // State to store the selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle the button click
  const handleButtonClick = () => {
    // Programmatically click the hidden file input
    fileInputRef.current.click();
  };

  // Function to handle file input change
  const handleFileChange = (event) => {
    // Get the selected file
    const file = event.target.files[0];
    if (file) {
      // Create a URL for the selected file
      const imageUrl = URL.createObjectURL(file);
      // Update the state with the selected image URL
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="flex items-center">
      {/* Hidden file input */}
      <input
        type="file"
        name="cover"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      {/* Button to trigger file input click */}
      <button
        className="bg-primary text-white px-3 py-1 rounded-md"
        onClick={handleButtonClick}
      >
        Upload
      </button>
      {/* Conditionally render the selected image */}
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Selected"
          style={{ width: '40px', height: '40px', marginLeft: '10px' }}
        />
      )}
    </div>
  );
};

export default ImageUpload;
