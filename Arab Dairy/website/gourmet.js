function changeImage(size) {
    const productImage = document.getElementById('productImage');
    if (size == '4') {
        productImage.src = 'assets/brands/gourmet/gourmet/Squares/04.webp';  // Image for 4 Pieces
    } else if (size == '6') {
        productImage.src = 'assets/brands/gourmet/gourmet/Squares/13.webp';  // Image for 6 Pieces
    } else if (size == '8') {
        productImage.src = 'assets/brands/gourmet/gourmet/Squares/12.webp';  // Image for 8 Pieces
    } else if (size == '12') {
        productImage.src = 'assets/brands/gourmet/gourmet/Squares/11.webp';  // Image for 12 Pieces
    }
}


let currentSlides = {
    'white01': 0,  // Tracks the current slide index for size 125g
    'white02': 0,  // Tracks the current slide index for size 250g
    'white03': 0,   // Tracks the current slide index for size 500g
    'white04': 0,   // Tracks the current slide index for size 900g
};

// Titles for each slide per size
let productTitles = {
    'white01': ['Cheddar Cheese', 'Cream Cheese'],
    'white02': ['Cheddar Cheese', 'Cream Cheese'],
    'white03': ['Cheddar Cheese', 'Cream Cheese'],
    'white04': ['Cheddar Cheese', 'Cream Cheese']
};

// Change container based on selected size
function changeContainer(size) {
    // Hide all containers
    let containers = document.querySelectorAll('.slideshow02');
    containers.forEach(container => container.classList.add('hidden'));

    // Show the selected container
    let selectedContainer = document.getElementById('productContainer' + size.slice(-2));
    selectedContainer.classList.remove('hidden');
    //hide all other containers are not selected
    let otherContainers = document.querySelectorAll('.slideshow02:not(#productContainer' + size.slice(-2));
    otherContainers.forEach(container => container.classList.add('hidden'));


    // Update the product title
    let currentSlideIndex = currentSlides[size];
    document.getElementById('product-title').textContent = productTitles[size][currentSlideIndex];

    // Reset slide visibility
    resetSlides(size);
}


// Reset the slides for the given size
function resetSlides(size) {
    const slideContainer = document.querySelectorAll(`#productContainer${size.slice(-2)} .slide02`);

    slideContainer.forEach((slide, index) => {
        if (index === currentSlides[size]) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

// Change to a specific slide within a size
function changeSlide(size, newIndex) {
    const slideContainer = document.querySelectorAll(`#productContainer${size.slice(-2)} .slide02`);

    // Hide current slide
    slideContainer[currentSlides[size]].style.display = "none";

    // Update current slide index
    currentSlides[size] = newIndex;

    // Show new slide
    slideContainer[currentSlides[size]].style.display = "block";

    // Update product title
    document.getElementById("product-title").textContent = productTitles[size][newIndex];
}

// Previous slide navigation
function prevSlide(size) {
    const totalSlides = productTitles[size].length;
    const newIndex = (currentSlides[size] > 0) ? currentSlides[size] - 1 : totalSlides - 1;
    changeSlide(size, newIndex);
}

// Next slide navigation
function nextSlide(size) {
    const totalSlides = productTitles[size].length;
    const newIndex = (currentSlides[size] < totalSlides - 1) ? currentSlides[size] + 1 : 0;
    changeSlide(size, newIndex);
}

// Initialize the first slideshow
changeContainer('white01');
