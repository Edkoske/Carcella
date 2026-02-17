// ===== CAR DATA =====
const rentalCars = [
    {
        id: 1,
        name: 'Toyota Vitz',
        type: 'Sedan',
        image: 'images/toyota vitz.jpg',
        pricePerDay: 3500,
        transmission: 'Automatic',
        fuel: 'Petrol',
        seats: 5,
        luggage: '2 bags'
    },
    {
        id: 2,
        name: 'Subaru Outback',
        type: 'SUV',
        image: 'images/outback.jpg',
        pricePerDay: 5500,
        transmission: 'Automatic',
        fuel: 'Petrol',
        seats: 5,
        luggage: '4 bags'
    },
    {
        id: 3,
        name: 'Mercedes-Benz C-Class',
        type: 'Luxury',
        image: 'images/mercedez.jpg',
        pricePerDay: 12000,
        transmission: 'Automatic',
        fuel: 'Petrol',
        seats: 5,
        luggage: '4 bags'
    },
    {
        id: 4,
        name: 'Toyota Hiace',
        type: 'SUV',
        image: 'images/Toyota Hiace.jpg',
        pricePerDay: 6000,
        transmission: 'Manual',
        fuel: 'Diesel',
        seats: 12,
        luggage: '8 bags'
    },
    {
        id: 5,
        name: 'BMW 7 Series',
        type: 'Luxury',
        image: 'images/BMW 7 Series.jpg',
        pricePerDay: 15000,
        transmission: 'Automatic',
        fuel: 'Petrol',
        seats: 5,
        luggage: '4 bags'
    },
    {
        id: 6,
        name: 'Nissan X-Trail',
        type: 'SUV',
        image: 'images/Nissan X-Trail.jpg',
        pricePerDay: 5000,
        transmission: 'Automatic',
        fuel: 'Petrol',
        seats: 5,
        luggage: '4 bags'
    }
];

const salesCars = [
    {
        id: 101,
        name: 'Honda Accord 2023',
        price: 2800000,
        year: 2023,
        mileage: '12,000 km',
        image: 'images/Honda Accord 2023.jpg',
        transmission: 'Automatic',
        fuel: 'Petrol',
        color: 'Black',
        engineSize: '2.0L',
        description: 'Pristine condition Honda Accord with full service history. Recently imported from Japan. All original parts with warranty.'
    },
    {
        id: 102,
        name: 'Toyota Camry 2022',
        price: 2600000,
        year: 2022,
        mileage: '35,000 km',
        image: 'images/camry.jpg',
        transmission: 'Automatic',
        fuel: 'Petrol',
        color: 'Silver',
        engineSize: '2.5L',
        description: 'Well-maintained Toyota Camry with clean ownership history. Full service records available. One owner vehicle.'
    },
    {
        id: 103,
        name: 'Range Rover Sport 2021',
        price: 8500000,
        year: 2021,
        mileage: '28,000 km',
        image: 'images/range rover.jpg',
        transmission: 'Automatic',
        fuel: 'Diesel',
        color: 'Red',
        engineSize: '3.0L',
        description: 'Luxurious Range Rover Sport with premium features. Leather interior, panoramic sunroof, adaptive suspension. Perfect condition.'
    },
    {
        id: 104,
        name: 'Volkswagen Golf 2020',
        price: 1950000,
        year: 2020,
        mileage: '42,000 km',
        image: 'images/golf.jpg',
        transmission: 'Manual',
        fuel: 'Petrol',
        color: 'Blue',
        engineSize: '1.4L',
        description: 'Reliable VW Golf with good fuel economy. Recently serviced. Ideal for city driving. Manual transmission, single owner.'
    },
    {
        id: 105,
        name: 'Mercedes-Benz E-Class 2019',
        price: 5200000,
        year: 2019,
        mileage: '55,000 km',
        image: 'images/mercedez.jpg',
        transmission: 'Automatic',
        fuel: 'Petrol',
        color: 'Champagne',
        engineSize: '2.0L',
        description: 'Sophisticated Mercedes E-Class with premium build quality. All service records available. Imported with valid documentation.'
    },
    {
        id: 106,
        name: 'Suzuki Swift 2023',
        price: 1650000,
        year: 2023,
        mileage: '5,200 km',
        image: 'images/suzuki swift.jpg',
        transmission: 'Manual',
        fuel: 'Petrol',
        color: 'White',
        engineSize: '1.2L',
        description: 'Brand new Suzuki Swift with minimal mileage. Factory warranty included. Excellent fuel efficiency for daily commuting.'
    }
];

let currentTestimonial = 0;

// ===== POPULATE RENTAL CARS =====
function populateRentalCars() {
    const container = document.getElementById('rental-cars');
    container.innerHTML = '';
    
    rentalCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}">
            </div>
            <div class="car-info">
                <h3 class="car-name">${car.name}</h3>
                <div class="car-specs">
                    <span><i class="fas fa-cogs"></i> ${car.transmission}</span>
                    <span><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
                </div>
                <div class="car-specs">
                    <span><i class="fas fa-users"></i> ${car.seats} Seats</span>
                    <span><i class="fas fa-suitcase"></i> ${car.luggage}</span>
                </div>
                <div class="car-price"><span class="car-price-label">From</span> KES ${car.pricePerDay.toLocaleString()} <span class="car-price-label">/day</span></div>
                <button class="car-button" onclick="openRentalModal(${car.id})">Book Now</button>
            </div>
        `;
        container.appendChild(carCard);
    });
}

// ===== FILTER CARS =====
function filterCars(type) {
    const container = document.getElementById('rental-cars');
    const allCards = container.querySelectorAll('.car-card');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    allCards.forEach(card => {
        if (type === 'all') {
            card.classList.remove('hidden');
        } else {
            const carType = rentalCars.find(car => card.querySelector('.car-name').textContent.includes(car.name)).type;
            if (carType === type) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }
    });
}

// ===== POPULATE SALES CARS =====
function populateSalesCars() {
    const container = document.getElementById('sales-cars');
    container.innerHTML = '';
    
    salesCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}">
            </div>
            <div class="car-info">
                <h3 class="car-name">${car.name}</h3>
                <div class="car-specs">
                    <span><i class="fas fa-calendar"></i> ${car.year}</span>
                    <span><i class="fas fa-road"></i> ${car.mileage}</span>
                </div>
                <div class="car-price">KES ${car.price.toLocaleString()}</div>
                <button class="car-button" onclick="openSalesModal(${car.id})">View Details</button>
            </div>
        `;
        container.appendChild(carCard);
    });
}

// ===== MODAL FUNCTIONS =====
const modal = document.getElementById('carModal');
const closeBtn = document.querySelector('.close');

closeBtn.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

function openRentalModal(carId) {
    const car = rentalCars.find(c => c.id === carId);
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2>${car.name}</h2>
        <img src="${car.image}" alt="${car.name}">
        
        <div class="modal-specs">
            <div class="modal-specs-item">
                <label>Transmission</label>
                <span>${car.transmission}</span>
            </div>
            <div class="modal-specs-item">
                <label>Fuel Type</label>
                <span>${car.fuel}</span>
            </div>
            <div class="modal-specs-item">
                <label>Seats</label>
                <span>${car.seats}</span>
            </div>
            <div class="modal-specs-item">
                <label>Luggage</label>
                <span>${car.luggage}</span>
            </div>
        </div>
        
        <h3 style="color: #d4af37; margin: 20px 0;">Price</h3>
        <p><strong>KES ${car.pricePerDay.toLocaleString()} per day</strong></p>
        
        <h3 style="color: #d4af37; margin-top: 20px;">Booking Details</h3>
        <p>To book this vehicle, please contact us via WhatsApp or fill out the contact form below. We offer:</p>
        <ul style="margin: 15px 0; padding-left: 20px;">
            <li>Free delivery and pickup within Nairobi</li>
            <li>Comprehensive insurance included</li>
            <li>24/7 roadside assistance</li>
            <li>Flexible payment options</li>
            <li>Special rates for long-term rentals</li>
        </ul>
        
        <a href="https://wa.me/254710241295?text=I%20would%20like%20to%20book%20a%20${car.name.replace(/\s/g, '%20')}" target="_blank" class="btn btn-primary" style="display: inline-block; margin-top: 20px;" rel="noopener noreferrer">
            <i class="fab fa-whatsapp"></i> Book on WhatsApp
        </a>
    `;
    
    modal.style.display = 'block';
}

function openSalesModal(carId) {
    const car = salesCars.find(c => c.id === carId);
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2>${car.name}</h2>
        <img src="${car.image}" alt="${car.name}">
        
        <h3 style="color: #d4af37; margin: 20px 0;">Price: KES ${car.price.toLocaleString()}</h3>
        
        <h3 style="color: #d4af37; margin-top: 20px;">Vehicle Details</h3>
        <div class="modal-specs">
            <div class="modal-specs-item">
                <label>Year</label>
                <span>${car.year}</span>
            </div>
            <div class="modal-specs-item">
                <label>Mileage</label>
                <span>${car.mileage}</span>
            </div>
            <div class="modal-specs-item">
                <label>Transmission</label>
                <span>${car.transmission}</span>
            </div>
            <div class="modal-specs-item">
                <label>Fuel Type</label>
                <span>${car.fuel}</span>
            </div>
            <div class="modal-specs-item">
                <label>Color</label>
                <span>${car.color}</span>
            </div>
            <div class="modal-specs-item">
                <label>Engine Size</label>
                <span>${car.engineSize}</span>
            </div>
        </div>
        
        <h3 style="color: #d4af37; margin-top: 20px;">About This Vehicle</h3>
        <p>${car.description}</p>
        
        <h3 style="color: #d4af37; margin-top: 20px;">Available Options</h3>
        <ul style="margin: 15px 0; padding-left: 20px;">
            <li>Cash payment</li>
            <li>Certified pre-purchase inspection available</li>
            <li>Flexible financing options</li>
            <li>Extended warranty available</li>
            <li>Trade-in accepted</li>
        </ul>
        
        <a href="https://wa.me/254710241295?text=I%20am%20interested%20in%20the%20${car.name.replace(/\s/g, '%20')}%20listed%20at%20KES%20${car.price.toLocaleString()}" target="_blank" class="btn btn-primary" style="display: inline-block; margin-top: 20px;" rel="noopener noreferrer">
            <i class="fab fa-whatsapp"></i> Inquire on WhatsApp
        </a>
    `;
    
    modal.style.display = 'block';
}

// ===== MOBILE MENU TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.style.transform = navMenu.classList.contains('active') ? 'rotate(90deg)' : 'rotate(0)';
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.style.transform = 'rotate(0)';
    });
});

// ===== SMOOTH SCROLL FUNCTION =====
function smoothScroll(elementId) {
    const element = document.getElementById(elementId);
    const offset = element.offsetTop - 60;
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
    
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.style.transform = 'rotate(0)';
    }
}

// ===== FORM VALIDATION =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !email || !phone || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[0-9+\s\-()]{9,}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number');
        return;
    }
    
    // Create mailto link with form data
    const recipientEmail = 'edtechcyber@gmail.com';
    const subject = encodeURIComponent(`New Contact Form Submission from ${name}`);
    const body = encodeURIComponent(
        `Name: ${name}\n\n` +
        `Email: ${email}\n\n` +
        `Phone: ${phone}\n\n` +
        `Message: ${message}`
    );
    
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    
    // Open Gmail/default email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert(`Thank you, ${name}! Your default email client will open. Please send the email to complete your submission.`);
    
    // Reset form
    contactForm.reset();
    
    // Log for debugging
    console.log({
        name: name,
        email: email,
        phone: phone,
        message: message,
        sentTo: recipientEmail
    });
});

// ===== AUTO-SLIDING TESTIMONIALS =====
function showTestimonial() {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    
    cards.forEach(card => {
        card.style.display = 'none';
    });
    
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    if (window.innerWidth > 768) {
        cards[0].style.display = 'block';
        cards[1].style.display = 'block';
        cards[2].style.display = 'block';
        dots[0].classList.add('active');
    } else {
        cards[currentTestimonial].style.display = 'block';
        dots[currentTestimonial].classList.add('active');
    }
}

// Auto-advance testimonials every 5 seconds on mobile
setInterval(() => {
    if (window.innerWidth <= 768) {
        currentTestimonial = (currentTestimonial + 1) % 3;
        showTestimonial();
    }
}, 5000);

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.addEventListener('DOMContentLoaded', () => {
    // Add animation to various elements
    document.querySelectorAll('.feature-card, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
    
    // Populate cars
    populateRentalCars();
    populateSalesCars();
    showTestimonial();
    
    // Responsive testimonials on resize
    window.addEventListener('resize', showTestimonial);
});

// ===== NAVBAR SCROLL EFFECT =====
let lastScrollPos = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    
    if (scrollPos > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(212, 175, 55, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(212, 175, 55, 0.1)';
    }
    
    lastScrollPos = scrollPos;
});

// ===== FORM INPUT EFFECTS =====
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.opacity = '1';
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.style.opacity = '0.8';
        }
    });
});

// ===== THROTTLE FUNCTION FOR PERFORMANCE =====
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
setTimeout(() => {
    document.body.style.opacity = '1';
}, 100);
