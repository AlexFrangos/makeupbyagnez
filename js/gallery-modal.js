// Gallery Modal System
document.addEventListener('DOMContentLoaded', function() {
    // Gallery data structure - stores information for each gallery item
    const galleryData = {
        "soft-glam": {
            title: "Soft Glam",
            mainImage: "img/gallery/1.jpg",
            images: ["img/gallery/1.jpg", "img/gallery/1-1.jpg", "img/gallery/1-2.jpg"],
            products: ["Charlotte Tilbury Airbrush Flawless Foundation", "Anastasia Beverly Hills Soft Glam Palette", "MAC Lipstick in Velvet Teddy", "Urban Decay All Nighter Setting Spray"],
            testimonial: {
                text: "Agni created the perfect soft glam look for my graduation. Everyone was asking who did my makeup!",
                author: "Eleni M.",
                date: "June 2023"
            }
        },
        "bridal-beauty": {
            title: "Bridal Beauty",
            mainImage: "img/gallery/2.jpg",
            images: ["img/gallery/2.jpg", "img/gallery/bride-1.jpg", "img/gallery/bridal-2.jpg"],
            products: ["Armani Luminous Silk Foundation", "Pat McGrath Divine Rose Palette", "Fenty Beauty Killawatt Highlighter", "Charlotte Tilbury Pillow Talk Lipstick", "Benefit Hoola Bronzer"],
            testimonial: {
                text: "I can't thank Agni enough for making me look and feel so beautiful on my wedding day. My makeup lasted from morning until late night dancing!",
                author: "Maria K.",
                date: "September 2023"
            }
        },
        "evening-glam": {
            title: "Evening Glam",
            mainImage: "img/gallery/bride-1.jpg",
            images: ["img/gallery/bride-1.jpg", "img/gallery/evening-2.jpg", "img/gallery/evening-3.jpg"],
            products: ["Estée Lauder Double Wear Foundation", "Huda Beauty Rose Gold Palette", "Dior Backstage Contour Palette", "Marc Jacobs Highliner"],
            testimonial: {
                text: "Agni created the most beautiful dramatic look for my engagement party. The smokey eye was absolute perfection!",
                author: "Sophia P.",
                date: "November 2023"
            }
        },
        "classic-red": {
            title: "Classic Red",
            mainImage: "img/gallery/glam-1.jpg",
            images: ["img/gallery/glam-1.jpg", "img/gallery/classic-red-2.jpg", "img/gallery/classic-red-3.jpg"],
            products: ["NARS Natural Radiant Foundation", "MAC Ruby Woo Lipstick", "Stila Stay All Day Liquid Eyeliner", "Benefit Precisely My Brow Pencil"],
            testimonial: {
                text: "The classic red lip look that Agni created for me was timeless and elegant - exactly what I wanted for my photoshoot!",
                author: "Christina L.",
                date: "January 2024"
            }
        },
        "event-ready": {
            title: "Event Ready",
            mainImage: "img/gallery/special-events-1.jpg",
            images: ["img/gallery/special-events-1.jpg", "img/gallery/event-2.jpg", "img/gallery/event-3.jpg"],
            products: ["Too Faced Born This Way Foundation", "Natasha Denona Bronze Palette", "Benefit Precisely My Brow Pencil", "Patrick Ta Major Glow Body Oil"],
            testimonial: {
                text: "Agni made me look absolutely flawless for my best friend's wedding. The makeup was so light yet flawless!",
                author: "Alexandra D.",
                date: "July 2023"
            }
        },
        "natural-beauty": {
            title: "Natural Beauty",
            mainImage: "img/gallery/special-events-2.jpg",
            images: ["img/gallery/special-events-2.jpg", "img/gallery/natural-2.jpg", "img/gallery/natural-3.jpg"],
            products: ["Glossier Perfecting Skin Tint", "Rare Beauty Blush", "Tower 28 Lip Gloss", "Ilia Limitless Lash Mascara"],
            testimonial: {
                text: "I wanted a 'my skin but better' look and Agni delivered exactly that. So natural yet polished!",
                author: "Katerina M.",
                date: "April 2024"
            }
        },
        "smokey-drama": {
            title: "Smokey Drama",
            mainImage: "img/gallery/4.jpg",
            images: ["img/gallery/4.jpg", "img/gallery/smokey-2.jpg", "img/gallery/smokey-3.jpg"],
            products: ["Dior Airflash Foundation", "Pat McGrath Mothership Palette", "Charlotte Tilbury Rock 'N' Kohl Eyeliner", "Fenty Beauty Gloss Bomb"],
            testimonial: {
                text: "The smokey eye Agni created for my birthday party was absolutely show-stopping. I felt so glamorous!",
                author: "Nicole S.",
                date: "February 2024"
            }
        },
        "fine-details": {
            title: "Fine Details",
            mainImage: "img/gallery/3.jpg",
            images: ["img/gallery/3.jpg", "img/gallery/details-2.jpg", "img/gallery/details-3.jpg"],
            products: ["Bobbi Brown Skin Foundation", "Hourglass Ambient Lighting Palette", "Urban Decay 24/7 Glide-On Eye Pencil", "Laura Mercier Translucent Setting Powder"],
            testimonial: {
                text: "Agni's attention to detail is incredible. She took the time to make sure every element of my makeup was perfect!",
                author: "Elena T.",
                date: "December 2023"
            }
        },
        "complete-look": {
            title: "Complete Look",
            mainImage: "img/gallery/5.jpg",
            images: ["img/gallery/5.jpg", "img/gallery/complete-2.jpg", "img/gallery/complete-3.jpg"],
            products: ["Lancôme Teint Idole Foundation", "Urban Decay Naked Palette", "Benefit Hoola Bronzer", "Stila Stay All Day Liquid Lipstick"],
            testimonial: {
                text: "Agni perfectly coordinated my makeup with my outfit and the event. The complete look was absolutely stunning!",
                author: "Victoria P.",
                date: "May 2024"
            }
        }
    };

    // Create modal HTML structure
    const modalHTML = `
        <div id="gallery-modal" class="gallery-modal">
            <div class="gallery-modal-overlay"></div>
            <div class="gallery-modal-container">
                <button class="gallery-modal-close" aria-label="Close modal">
                    <i class="ti-close"></i>
                </button>
                <div class="gallery-modal-content">
                    <div class="gallery-modal-header">
                        <h3 class="gallery-modal-title"></h3>
                    </div>
                    <div class="gallery-modal-body">
                        <div class="gallery-modal-images">
                            <div class="gallery-modal-main-image">
                                <img src="" alt="">
                            </div>
                            <div class="gallery-modal-thumbnails">
                                <!-- Thumbnails will be inserted here -->
                            </div>
                        </div>
                        <div class="gallery-modal-details">
                            <div class="gallery-modal-products">
                                <h4><i class="ti-palette"></i> Products Used</h4>
                                <ul class="product-list">
                                    <!-- Products will be inserted here -->
                                </ul>
                            </div>
                            <div class="gallery-modal-testimonial">
                                <h4><i class="ti-quote-left"></i> Client's Words</h4>
                                <div class="testimonial-content">
                                    <blockquote></blockquote>
                                    <div class="testimonial-author">
                                        <span class="author-name"></span>
                                        <span class="author-date"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="gallery-modal-action">
                                <div class="butn-dark">
                                    <a href="https://book.heygoldie.com/MakeupbyAgnezP#services" target="_blank">
                                        <span>Book This Look</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Append modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Get modal elements
    const modal = document.getElementById('gallery-modal');
    const modalClose = modal.querySelector('.gallery-modal-close');
    const modalOverlay = modal.querySelector('.gallery-modal-overlay');
    const modalTitle = modal.querySelector('.gallery-modal-title');
    const modalMainImage = modal.querySelector('.gallery-modal-main-image img');
    const modalThumbnails = modal.querySelector('.gallery-modal-thumbnails');
    const modalProducts = modal.querySelector('.product-list');
    const modalTestimonialText = modal.querySelector('.testimonial-content blockquote');
    const modalTestimonialAuthor = modal.querySelector('.testimonial-author .author-name');
    const modalTestimonialDate = modal.querySelector('.testimonial-author .author-date');

    // Add event listeners to gallery items
    const galleryItems = document.querySelectorAll('.masonry-item');
    
    galleryItems.forEach((item, index) => {
        // Add data-gallery-id attribute to each item
        const galleryId = Object.keys(galleryData)[index] || Object.keys(galleryData)[0];
        item.setAttribute('data-gallery-id', galleryId);
        
        item.addEventListener('click', function() {
            const galleryId = this.getAttribute('data-gallery-id');
            const data = galleryData[galleryId];
            
            if (!data) return;
            
            // Populate modal with data
            modalTitle.textContent = data.title;
            modalMainImage.src = data.mainImage;
            modalMainImage.alt = data.title;
            
            // Clear and populate thumbnails
            modalThumbnails.innerHTML = '';
            data.images.forEach(image => {
                const thumb = document.createElement('div');
                thumb.className = 'thumbnail';
                thumb.innerHTML = `<img src="${image}" alt="${data.title}">`;
                
                // Make first thumbnail active
                if (image === data.mainImage) {
                    thumb.classList.add('active');
                }
                
                // Add click event to thumbnail
                thumb.addEventListener('click', function() {
                    modalMainImage.src = image;
                    
                    // Update active state
                    modalThumbnails.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
                
                modalThumbnails.appendChild(thumb);
            });
            
            // Clear and populate products
            modalProducts.innerHTML = '';
            data.products.forEach(product => {
                const li = document.createElement('li');
                li.textContent = product;
                modalProducts.appendChild(li);
            });
            
            // Populate testimonial
            modalTestimonialText.textContent = data.testimonial.text;
            modalTestimonialAuthor.textContent = data.testimonial.author;
            modalTestimonialDate.textContent = data.testimonial.date;
            
            // Show modal
            document.body.classList.add('modal-open');
            modal.classList.add('open');
            
            // Add animation classes
            setTimeout(() => {
                modal.querySelector('.gallery-modal-container').classList.add('animate-in');
            }, 50);
        });
    });
    
    // Close modal function
    function closeModal() {
        modal.querySelector('.gallery-modal-container').classList.remove('animate-in');
        modal.querySelector('.gallery-modal-container').classList.add('animate-out');
        
        setTimeout(() => {
            modal.classList.remove('open');
            document.body.classList.remove('modal-open');
            modal.querySelector('.gallery-modal-container').classList.remove('animate-out');
        }, 300);
    }
    
    // Close modal event listeners
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });

    // Add this function after the closeModal function in gallery-modal.js
    function enhanceMobileExperience() {
        // Make thumbnail scrolling smoother on touch devices
        const thumbnailsContainer = modal.querySelector('.gallery-modal-thumbnails');
        
        // Detect touch devices
        if ('ontouchstart' in window || navigator.maxTouchPoints) {
            thumbnailsContainer.style.webkitOverflowScrolling = 'touch';
            thumbnailsContainer.style.scrollSnapType = 'x mandatory';
            
            // Apply scroll-snap to thumbnails
            const thumbnails = thumbnailsContainer.querySelectorAll('.thumbnail');
            thumbnails.forEach(thumb => {
                thumb.style.scrollSnapAlign = 'center';
            });
        }
        
        // Add pinch-zoom support for main image on mobile
        const mainImage = modal.querySelector('.gallery-modal-main-image');
        let currentScale = 1;
        let startDistance = 0;
        
        mainImage.addEventListener('touchstart', function(e) {
            if (e.touches.length === 2) {
                startDistance = getDistance(e.touches[0], e.touches[1]);
            }
        });
        
        mainImage.addEventListener('touchmove', function(e) {
            if (e.touches.length === 2) {
                e.preventDefault(); // Prevent default pinch zoom behavior
                
                const currentDistance = getDistance(e.touches[0], e.touches[1]);
                const scale = currentDistance / startDistance;
                
                // Limit zoom between 1x and 3x
                const newScale = Math.min(Math.max(currentScale * scale, 1), 3);
                
                const img = mainImage.querySelector('img');
                img.style.transform = `scale(${newScale})`;
            }
        });
        
        mainImage.addEventListener('touchend', function() {
            // Store the current scale for next touch interaction
            const img = mainImage.querySelector('img');
            const transform = img.style.transform;
            
            if (transform) {
                const match = transform.match(/scale\(([0-9.]+)\)/);
                if (match && match[1]) {
                    currentScale = parseFloat(match[1]);
                }
            }
            
            // Reset scale after 5 seconds of inactivity
            setTimeout(() => {
                img.style.transform = 'scale(1)';
                currentScale = 1;
            }, 5000);
        });
        
        function getDistance(touch1, touch2) {
            return Math.sqrt(
                Math.pow(touch2.clientX - touch1.clientX, 2) +
                Math.pow(touch2.clientY - touch1.clientY, 2)
            );
        }
    }

    // Call this function right after DOM content is loaded
    enhanceMobileExperience();

    // Add fullscreen image viewing capability
    function setupFullscreenViewing() {
        const mainImage = modal.querySelector('.gallery-modal-main-image');
        const mainImageImg = mainImage.querySelector('img');
        
        // Add fullscreen icon
        const fullscreenBtn = document.createElement('button');
        fullscreenBtn.className = 'fullscreen-button';
        fullscreenBtn.innerHTML = '<i class="ti-fullscreen"></i>';
        fullscreenBtn.setAttribute('aria-label', 'View fullscreen');
        mainImage.appendChild(fullscreenBtn);
        
        // Toggle fullscreen mode
        fullscreenBtn.addEventListener('click', function() {
            if (!mainImage.classList.contains('fullscreen-mode')) {
                // Enter fullscreen mode
                mainImage.classList.add('fullscreen-mode');
                fullscreenBtn.innerHTML = '<i class="ti-close"></i>';
                document.body.style.overflow = 'hidden';
            } else {
                // Exit fullscreen mode
                mainImage.classList.remove('fullscreen-mode');
                fullscreenBtn.innerHTML = '<i class="ti-fullscreen"></i>';
                document.body.style.overflow = '';
            }
        });
        
        // Close fullscreen on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mainImage.classList.contains('fullscreen-mode')) {
                mainImage.classList.remove('fullscreen-mode');
                fullscreenBtn.innerHTML = '<i class="ti-fullscreen"></i>';
                document.body.style.overflow = '';
            }
        });
    }

    // Call this function right after DOM content is loaded
    setupFullscreenViewing();

    // Add this function to enable swipe navigation
    function setupSwipeNavigation() {
        const mainImage = modal.querySelector('.gallery-modal-main-image');
        let touchStartX = 0;
        let touchEndX = 0;
        
        mainImage.addEventListener('touchstart', function(e) {
            touchStartX = e.touches[0].clientX;
        });
        
        mainImage.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].clientX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const minSwipeDistance = 50;
            const thumbnails = Array.from(modalThumbnails.querySelectorAll('.thumbnail'));
            const currentIndex = thumbnails.findIndex(thumb => thumb.classList.contains('active'));
            
            if (touchEndX < touchStartX - minSwipeDistance) {
                // Swipe left - go to next image
                const nextIndex = (currentIndex + 1) % thumbnails.length;
                thumbnails[nextIndex].click();
            } else if (touchEndX > touchStartX + minSwipeDistance) {
                // Swipe right - go to previous image
                const prevIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
                thumbnails[prevIndex].click();
            }
        }
    }

    // Call this function too
    setupSwipeNavigation();
}); 