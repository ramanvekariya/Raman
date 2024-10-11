// Sample image data
const images = [
    { src: 'https://picsum.photos/200/300', alt: 'Image 1' },
    { src: 'https://picsum.photos/200/301', alt: 'Image 2' },
    { src: 'https://picsum.photos/200/302', alt: 'Image 3' },
    // Add more images here...
];


// Load images into the image container
const imageContainer = document.querySelector('.image-container');
images.forEach((image) => {
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    imageContainer.appendChild(img);
});