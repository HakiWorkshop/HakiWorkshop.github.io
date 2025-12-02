// Presentation data with detailed content about reformers and church criticism
const themes = {
    intro: {
        title: "Reformasjonens Ånd",
        subtitle: "Kritikk av kirke og samfunn i tidlig moderne tid",
        content: `
            <p class="lead">Reformasjonen var en religiøs, kulturell og politisk omveltning som splittet den europeiske kristenheten i det 16. århundre.</p>
            
            <div class="key-points">
                <div class="point">
                    <i class="fas fa-balance-scale"></i>
                    <h3>Kjernekritikk</h3>
                    <p>Reformatorer angrep kirkens rikdom, maktmisbruk, simoni (salg av kirkelige embeter), og avvik fra bibelske prinsipper. De krevde en retur til apostolisk enkelhet.</p>
                </div>
                <div class="point">
                    <i class="fas fa-book-open"></i>
                    <h3>Bibelens Autoritet</h3>
                    <p>«Sola Scriptura» – kun Skriften som autoritet, ikke kirkens tradisjoner eller pavedømmets dekreter. Dette underminerte kirkens maktmonopol på tolkning.</p>
                </div>
                <div class="point">
                    <i class="fas fa-users"></i>
                    <h3>Allmenn Prestedømme</h3>
                    <p>Alle troende er prester for Gud – et radikalt angrep på kirkens hierarki og det sakramentale presterskapet. Dette demokratiserte religiøs autoritet.</p>
                </div>
            </div>
            
            <div class="quote">
                <i class="fas fa-quote-left"></i>
                <p>"Kirken trenger stadig reformasjon" – Ecclesia semper reformanda est</p>
                <i class="fas fa-quote-right"></i>
            </div>
        `,
        image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        imageTitle: "Reformasjonens Begynnelse",
        caption: "Martin Luther fester sine 95 teser på slottskirken i Wittenberg i 1517",
        quote: "Kirken trenger stadig reformasjon – Ecclesia semper reformanda est"
    },
    luther: {
        title: "Martin Luther",
        subtitle: "95 teser og radikal kirkekritikk",
        content: `
            <p class="lead">Martin Luther (1483-1546) utfordret den katolske kirkens autoritet med sin kritikk av avlatshandelen og pavedømmets makt.</p>
            
            <div class="reformer-details">
                <div class="detail-card">
                    <h3><i class="fas fa-gavel"></i> 95 Teser (1517)</h3>
                    <p>Luthers 95 teser angrep spesifikt avlatshandelen: "Når penger klinger i kisten, sjelen flyr ut av skjærsilden." Dette var en direkte utfordring til kirkens økonomiske system.</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-ban"></i> Kirkens Misbruk</h3>
                    <p>Luther kritiserte: simoni (salg av embeter), nepotisme, kirkens rikdom, mangel på bibelsk kunnskap blant prester, og pavedømmets verdslige makt.</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-cross"></i> Teologisk Revolusjon</h3>
                    <p>"Sola fide" (kun tro), "sola gratia" (kun nåde), "sola scriptura" (kun skriften). Dette underminerte hele det sakramentale systemet og pavedømmets autoritet.</p>
                </div>
            </div>
            
            <div class="quote">
                <i class="fas fa-quote-left"></i>
                <p>"Her står jeg, jeg kan ikke annet. Gud hjelpe meg. Amen." – Luther i Worms (1521)</p>
                <i class="fas fa-quote-right"></i>
            </div>
        `,
        image: "https://images.unsplash.com/photo-1529107381079-795fa5b7b0bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        imageTitle: "Martin Luther for riksdagen i Worms",
        caption: "Luther forsvarte sine læresetninger for keiser Karl V i 1521",
        quote: "Her står jeg, jeg kan ikke annet. Gud hjelpe meg. Amen."
    },
    calvin: {
        title: "Jean Calvin",
        subtitle: "Predestinasjon og kirkereform i Genève",
        content: `
            <p class="lead">Jean Calvin (1509-1564) utviklet en systematisk teologi som fremmet Guds suverenitet og en streng kirkedisiplin.</p>
            
            <div class="reformer-details">
                <div class="detail-card">
                    <h3><i class="fasfa-crown"></i> Guds Suverenitet</h3>
                    <p>Calvins lære om predestinasjon understreket Guds absolutte kontroll – en kritikk av den katolske læren om menneskets frie vilje og fortjeneste gjennom gode gjerninger.</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-church"></i> Kirkens Renhet</h3>
                    <p>Calvin krevde en "ren" kirke uten "papistiske" elementer. I Genève etablerte han en teokratisk stat med streng moral og kirkedisiplin.</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-book"></i> «Christianae Religionis Institutio»</h3>
                    <p>Calvins hovedverk systematiserte protestantisk teologi og var en omfattende kritikk av katolsk teologi og praksis.</p>
                </div>
            </div>
            
            <div class="quote">
                <i class="fas fa-quote-left"></i>
                <p>"Menneskets hjerte er en idolfabrikk." – Calvin om menneskets syndige natur</p>
                <i class="fas fa-quote-right"></i>
            </div>
        `,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        imageTitle: "Calvins Reform i Genève",
        caption: "Calvins reformerte kirke etablerte et strengt teokrati i Genève",
        quote: "Menneskets hjerte er en idolfabrikk."
    },
    erasmus: {
        title: "Erasmus av Rotterdam",
        subtitle: "Humanistisk kritikk og kirkereform",
        content: `
            <p class="lead">Erasmus (1466-1536) representerte den humanistiske kritikken – en opplyst reformisme innenfor kirken.</p>
            
            <div class="reformer-details">
                <div class="detail-card">
                    <h3><i class="fas fa-graduation-cap"></i> Bibelhumanisme</h3>
                    <p>Erasmus ga ut den første kritiske greske utgave av Det nye testamentet (1516), som avslørte feil i den latinske Vulgata-bibelen kirken brukte.</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-theater-masks"></i> «Lovprisningen av dårskapen»</h3>
                    <p>Dette satiriske verket (1509) kritiserte kirkens overfladiskhet, skinnhellighet, skolastisk pedanteri og munkelivets latskap.</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-balance-scale"></i> Reform uten splittelse</h3>
                    <p>I motsetning til Luther, ønsket Erasmus reform innenfor kirken, ikke splittelse. Han kritiserte begge sider i konflikten.</p>
                </div>
            </div>
            
            <div class="quote">
                <i class="fas fa-quote-left"></i>
                <p>"I kongeriken til dårskapen er det ingen som bekjenner at de er dårer." – Erasmus</p>
                <i class="fas fa-quote-right"></i>
            </div>
        `,
        image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        imageTitle: "Erasmus og Humanismen",
        caption: "Erasmus representerte den lærde humanistiske kritikken av kirken",
        quote: "I kongeriken til dårskapen er det ingen som bekjenner at de er dårer."
    },
    hus: {
        title: "Jan Hus",
        subtitle: "Forløper til reformasjonen",
        content: `
            <p class="lead">Jan Hus (1369-1415) var en tsjekkisk reformator som ble brent som kjetter for sin kritikk av kirken – et århundre før Luther.</p>
            
            <div class="reformer-details">
                <div class="detail-card">
                    <h3><i class="fas fa-fire"></i> Kritikk av Avlatshandel</h3>
                    <p>Hus kritiserte avlatshandelen og kirkens kommersialisering av frelsen: "Penger kan ikke kjøpe tilgivelse – bare anger og bot."</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-wine-bottle"></i> Kalkismens Krav</h3>
                    <p>Hus krevde at også legfolket skulle få kalken under nattverden – et angrep på prestestanden som sakramentets voktere.</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-gavel"></i> Konsilet i Konstanz</h3>
                    <p>Tross løfte om fritt leide, ble Hus stilt for retten og brent som kjetter i 1415. Dette skapte martyrdyrkelse og nasjonal motstand.</p>
                </div>
            </div>
            
            <div class="quote">
                <i class="fas fa-quote-left"></i>
                <p>"Sannheten seirer!" – Hus' siste ord før han ble brent på bålet</p>
                <i class="fas fa-quote-right"></i>
            </div>
        `,
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        imageTitle: "Jan Hus' Martyrium",
        caption: "Jan Hus blir brent som kjetter i Konstanz i 1415",
        quote: "Sannheten seirer!"
    },
    impact: {
        title: "Kritikkens Arv",
        subtitle: "Langtidseffekter av reformatorisk kirkekritikk",
        content: `
            <p class="lead">Reformasjonens kritikk av kirken hadde dype og varige konsekvenser for europeisk religion, politikk og samfunn.</p>
            
            <div class="reformer-details">
                <div class="detail-card">
                    <h3><i class="fas fa-globe-europe"></i> Religiøs Splittelse</h3>
                    <p>Den latinske kristenheten splittet i katolikker og protestanter. Dette førte til religiøse kriger, forfølgelser og et permanent pluralistisk Europa.</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-book"></i> Bibelens Tilgjengelighet</h3>
                    <p>Oversettelser til folkespråk og trykking muliggjorde personlig bibelstudium uten prestelige formidlere – en demokratisering av religiøs kunnskap.</p>
                </div>
                
                <div class="detail-card">
                    <h3><i class="fas fa-balance-scale"></i> Stat og Kirke</h3>
                    <p>Reformasjonen styrket verdslige fyrsters makt over kirken (cuius regio, eius religio) og bidro til utviklingen av nasjonalstaten.</p>
                </div>
            </div>
            
            <div class="quote">
                <i class="fas fa-quote-left"></i>
                <p>"Det som begynte som en teologisk disputt endret verdens historie." – Historikeromdømme</p>
                <i class="fas fa-quote-right"></i>
            </div>
        `,
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        imageTitle: "Reformasjonens Langtidseffekter",
        caption: "Reformasjonen transformerte europeisk religion, politikk og kultur",
        quote: "Det som begynte som en teologisk disputt endret verdens historie."
    }
};

// Additional images for each theme
const themeImages = {
    intro: [
        "https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    luther: [
        "https://images.unsplash.com/photo-1529107381079-795fa5b7b0bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    calvin: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    erasmus: [
        "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    hus: [
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    impact: [
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1529107381079-795fa5b7b0bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ]
};

const themeCaptions = {
    intro: [
        "Reformasjonen utfordret den etablerte kirkens autoritet og praksis",
        "Humanistisk lærdom la grunnlaget for kirkekritikk",
        "Trykkekunsten spredte reformatoriske ideer over hele Europa"
    ],
    luther: [
        "Martin Luther forsvarte sine læresetninger for keiser Karl V i 1521",
        "Luthers oversettelse av Bibelen til tysk revolusjonerte religiøs tilgang",
        "Reformatorisk preken omfavnet av folket"
    ],
    calvin: [
        "Calvins reformerte kirke etablerte et strengt teokrati i Genève",
        "Reformert gudstjenestefokus på preken og salmesang",
        "Calvins institusjoner formet protestantisk teologi"
    ],
    erasmus: [
        "Erasmus representerte den lærde humanistiske kritikken av kirken",
        "Humanistisk studie av klassiske tekster og Bibelen",
        "Erasmus' satire av kirkens misbruk"
    ],
    hus: [
        "Jan Hus blir brent som kjetter i Konstanz i 1415",
        "Hussittbevegelsen fortsatte kampen etter Hus' død",
        "Hus' kritikk av avlatshandelen forutgikk Luthers"
    ],
    impact: [
        "Reformasjonen transformerte europeisk religion, politikk og kultur",
        "Religiøse kriger og fredsavtaler formet moderne Europa",
        "Trykkekunsten spredte reformatoriske ideer raskt"
    ]
};

// Presentation state
let currentTheme = 'intro';
let currentSlide = 1;
let totalSlides = 6;
let currentImageIndex = 0;
let isFullscreen = false;
let autoPlay = false;
let autoPlayInterval;
let startTime = Date.now();
let particlesEnabled = true;

// DOM elements
const contentEl = document.getElementById('content');
const imageTitleEl = document.getElementById('image-title');
const themeImageEl = document.getElementById('theme-image');
const imageCaptionEl = document.querySelector('.image-caption');
const currentSlideEl = document.getElementById('current-slide');
const totalSlidesEl = document.getElementById('total-slides');
const progressBarEl = document.getElementById('progress-bar');
const timelineProgressEl = document.getElementById('timeline-progress');
const themeIndicatorEl = document.getElementById('theme-indicator');
const currentTimeEl = document.getElementById('current-time');
const particlesContainer = document.getElementById('particles');
const bgMusic = document.getElementById('bg-music');

// Initialize presentation
function initPresentation() {
    totalSlidesEl.textContent = totalSlides;
    updateSlideCounter();
    updateProgressBar();
    updateTimeline();
    updateTime();
    createParticles();
    setInterval(updateTime, 1000);
    
    // Add CSS for detail cards
    const style = document.createElement('style');
    style.textContent = `
        .reformer-details {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
            margin: 40px 0;
        }
        .detail-card {
            background: rgba(147, 51, 51, 0.1);
            padding: 25px;
            border-radius: 15px;
            border: 1px solid rgba(147, 51, 51, 0.3);
            transition: all 0.3s ease;
        }
        .detail-card:hover {
            transform: translateY(-5px);
            background: rgba(147, 51, 51, 0.2);
            box-shadow: 0 10px 20px rgba(147, 51, 51, 0.2);
        }
        .detail-card h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
            color: #f3c6c6;
            font-size: 1.3rem;
        }
        .detail-card p {
            line-height: 1.6;
            opacity: 0.9;
        }
    `;
    document.head.appendChild(style);
}

// Load theme with presentation effects
function loadTheme(theme, direction = 'right') {
    const oldTheme = currentTheme;
    currentTheme = theme;
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[onclick="loadTheme('${theme}')"]`).classList.add('active');
    
    // Determine slide number
    const slideMap = {
        'intro': 1, 'luther': 2, 'calvin': 3, 
        'erasmus': 4, 'hus': 5, 'impact': 6
    };
    currentSlide = slideMap[theme];
    
    // Animation classes
    const slideContainer = document.querySelector('.slide');
    slideContainer.classList.remove('active');
    
    // Add direction-based animation
    slideContainer.style.animation = direction === 'right' 
        ? 'slideInFromRight 0.8s ease-out' 
        : 'slideInFromLeft 0.8s ease-out';
    
    setTimeout(() => {
        // Update content
        const themeData = themes[theme];
        contentEl.innerHTML = `
            <div class="slide-header">
                <h1 class="slide-title">${themeData.title}</h1>
                <div class="slide-subtitle">${themeData.subtitle}</div>
            </div>
            <div class="slide-content">
                ${themeData.content}
            </div>
        `;
        
        // Reset image index
        currentImageIndex = 0;
        
        // Update image and caption
        updateImage();
        
        // Update UI
        updateSlideCounter();
        updateProgressBar();
        updateTimeline();
        updateThemeIndicator();
        
        // Re-add active class with animation
        setTimeout(() => {
            slideContainer.classList.add('active');
            slideContainer.style.animation = 'fadeInUp 0.8s ease-out';
        }, 50);
    }, 400);
    
    // Play transition sound if music enabled
    if (!bgMusic.paused) {
        const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3');
        audio.volume = 0.3;
        audio.play();
    }
}

// Update current image
function updateImage() {
    const images = themeImages[currentTheme];
    const captions = themeCaptions[currentTheme];
    
    if (images && images.length > 0) {
        themeImageEl.style.opacity = '0';
        
        setTimeout(() => {
            themeImageEl.src = images[currentImageIndex];
            imageCaptionEl.textContent = captions[currentImageIndex];
            
            // Update gallery
            document.querySelectorAll('.gallery-item').forEach((item, index) => {
                item.classList.toggle('active', index === currentImageIndex);
                item.querySelector('img').src = images[index];
            });
            
            themeImageEl.style.opacity = '1';
        }, 300);
    }
}

// Navigation functions
function nextSlide() {
    const themeOrder = ['intro', 'luther', 'calvin', 'erasmus', 'hus', 'impact'];
    const currentIndex = themeOrder.indexOf(currentTheme);
    if (currentIndex < themeOrder.length - 1) {
        loadTheme(themeOrder[currentIndex + 1], 'right');
    }
}

function prevSlide() {
    const themeOrder = ['intro', 'luther', 'calvin', 'erasmus', 'hus', 'impact'];
    const currentIndex = themeOrder.indexOf(currentTheme);
    if (currentIndex > 0) {
        loadTheme(themeOrder[currentIndex - 1], 'left');
    }
}

function nextImage() {
    const images = themeImages[currentTheme];
    if (images && images.length > 0) {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    }
}

function prevImage() {
    const images = themeImages[currentTheme];
    if (images && images.length > 0) {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
    }
}

// UI update functions
function updateSlideCounter() {
    currentSlideEl.textContent = currentSlide;
}

function updateProgressBar() {
    const progress = (currentSlide / totalSlides) * 100;
    progressBarEl.style.width = `${progress}%`;
}

function updateTimeline() {
    const progress = ((currentSlide - 1) / (totalSlides - 1)) * 100;
    timelineProgressEl.style.width = `${progress}%`;
}

function updateThemeIndicator() {
    const colors = {
        'intro': '#933',
        'luther': '#d35400',
        'calvin': '#2980b9',
        'erasmus': '#27ae60',
        'hus': '#8e44ad',
        'impact': '#34495e'
    };
    themeIndicatorEl.style.background = colors[currentTheme];
}

function updateTime() {
    const elapsed = Date.now() - startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    currentTimeEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Particle system
function createParticles() {
    if (!particlesEnabled) return;
    
    for (let i = 0; i < 50; i++) {
        createParticle();
    }
}

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const size = Math.random() * 5 + 2;
    const x = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 20;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    // Random color based on theme
    const colors = ['rgba(147, 51, 51, 0.3)', 'rgba(30, 60, 114, 0.3)', 'rgba(255, 255, 255, 0.1)'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    particlesContainer.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
        if (particlesEnabled) createParticle();
    }, duration * 1000);
}

// Toggle functions
function toggleFullscreen() {
    const elem = document.documentElement;
    
    if (!isFullscreen) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        document.body.classList.add('fullscreen');
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        document.body.classList.remove('fullscreen');
    }
    
    isFullscreen = !isFullscreen;
}

function toggleAutoPlay() {
    autoPlay = !autoPlay;
    const btn = document.getElementById('auto-play-btn');
    
    if (autoPlay) {
        btn.innerHTML = '<i class="fas fa-pause"></i>';
        btn.style.background = 'linear-gradient(135deg, #27ae60 0%, #229954 100%)';
        autoPlayInterval = setInterval(nextSlide, 10000); // 10 seconds per slide
    } else {
        btn.innerHTML = '<i class="fas fa-play"></i>';
        btn.style.background = 'linear-gradient(135deg, #933 0%, #7a2828 100%)';
        clearInterval(autoPlayInterval);
    }
}

function toggleEffects() {
    particlesEnabled = !particlesEnabled;
    const btn = document.getElementById('toggle-effects');
    
    if (particlesEnabled) {
        btn.innerHTML = '<i class="fas fa-magic"></i> Effekter På';
        createParticles();
    } else {
        btn.innerHTML = '<i class="fas fa-magic"></i> Effekter Av';
        particlesContainer.innerHTML = '';
    }
}

function toggleMusic() {
    const btn = document.getElementById('toggle-music');
    
    if (bgMusic.paused) {
        bgMusic.play();
        btn.innerHTML = '<i class="fas fa-volume-up"></i> Musikk På';
        btn.style.background = 'rgba(147, 51, 51, 0.5)';
    } else {
        bgMusic.pause();
        btn.innerHTML = '<i class="fas fa-volume-mute"></i> Musikk Av';
        btn.style.background = 'rgba(147, 51, 51, 0.3)';
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowRight':
        case ' ':
            nextSlide();
            break;
        case 'ArrowLeft':
            prevSlide();
            break;
        case 'ArrowUp':
            prevImage();
            break;
        case 'ArrowDown':
            nextImage();
            break;
        case 'f':
        case 'F':
            toggleFullscreen();
            break;
        case 'm':
        case 'M':
            toggleMusic();
            break;
        case 'a':
        case 'A':
            toggleAutoPlay();
            break;
    }
});

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initPresentation();
    
    // Button events
    document.getElementById('next-btn').addEventListener('click', nextSlide);
    document.getElementById('prev-btn').addEventListener('click', prevSlide);
    document.getElementById('fullscreen-btn').addEventListener('click', toggleFullscreen);
    document.getElementById('auto-play-btn').addEventListener('click', toggleAutoPlay);
    document.getElementById('next-img').addEventListener('click', nextImage);
    document.getElementById('prev-img').addEventListener('click', prevImage);
    document.getElementById('toggle-effects').addEventListener('click', toggleEffects);
    document.getElementById('toggle-music').addEventListener('click', toggleMusic);
    
    // Gallery click events
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            currentImageIndex = index;
            updateImage();
        });
    });
    
    // Initialize with intro theme
    loadTheme('intro');
});

// Fullscreen change event
document.addEventListener('fullscreenchange', () => {
    isFullscreen = !!document.fullscreenElement;
});
