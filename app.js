/**
 * Omega Solar Power - Interactive Website Logic
 * Clean Vanilla JavaScript
 */

// ============================================================================
// 1. PRODUCTS DATA
// ============================================================================
const PRODUCTS_DATA = {
  'solar-panels': {
    title: 'Solar Panels (On-Grid Rooftop)',
    badge: 'Flagship Solution',
    image: 'assets/solar-panels-new.jpg',
    subtitle: 'High-efficiency Tier-1 monocrystalline panels for residential & commercial rooftops.',
    desc: 'Our premium monocrystalline solar panels are built to maximize energy yield even during hazy or low-light conditions. Paired with high-efficiency grid-tied inverters and bi-directional net metering, they empower homes and businesses to slash electricity bills down to zero. Full subsidy eligible under PM Surya Ghar Muft Bijli Yojana.',
    specs: [
      { label: 'Cell Technology', value: 'Tier-1 Mono PERC / TOPCon' },
      { label: 'Module Efficiency', value: 'Up to 22.4%' },
      { label: 'Performance Warranty', value: '25 Years Linear Warranty' },
      { label: 'Product Warranty', value: '12 Years Manufacturer Warranty' },
      { label: 'DISCOM Approval', value: 'APEPDCL / APSPDCL Compatible' },
      { label: 'Subsidy Support', value: 'Up to ₹78,000 via PM Surya Ghar' }
    ],
    features: [
      'High conversion efficiency in Indian summer temperatures',
      'Anti-reflective, highly transmissive tempered front glass',
      'Heavy-duty anodized aluminium mounting structures for wind load up to 170 km/h',
      'End-to-end grid approval and net-meter testing included'
    ]
  },
  'solar-heater': {
    title: 'Solar Water Heater Systems',
    badge: 'Thermal Energy',
    image: 'assets/solar-water-heater-new.jpg',
    subtitle: 'Cost-effective thermal heating solutions for instant, 24/7 hot water.',
    desc: 'Water geysers are often the largest electricity consumer in residential households. Our Evacuated Tube Collector (ETC) and Flat Plate Collector (FPC) solar water heaters slash water heating costs by over 80%. Designed with food-grade stainless steel inner tanks and multi-layer thermal insulation to deliver piping hot water on cold mornings.',
    specs: [
      { label: 'Capacity Options', value: '100, 150, 200, 300, 500 Liters/Day' },
      { label: 'Collector Type', value: 'High-absorption 3-Target Vacuum Tubes' },
      { label: 'Inner Tank Material', value: 'SS-304L Food Grade Stainless Steel' },
      { label: 'Insulation', value: 'High-density PUF (50mm)' },
      { label: 'Electrical Backup', value: 'Optional 2kW Heating Element' },
      { label: 'Lifespan', value: '15+ Years Trouble-free' }
    ],
    features: [
      'Zero electricity bills for hot water requirements',
      'Retains water temperature for up to 48 hours without sunlight',
      'Specialized sacrificial magnesium anode rod prevents hard water scale buildup',
      'Ideal for residential homes, hospitals, hotels, and hostels'
    ]
  },
  'solar-lights': {
    title: 'Solar Street & Garden Lights',
    badge: 'Autonomous Illumination',
    image: 'assets/solar-lights-new.jpg',
    subtitle: 'Bright, autonomous, dusk-to-dawn lighting for roads, farms, and campuses.',
    desc: 'Eliminate outdoor trenching, complex wiring, and cable maintenance. Our all-in-one integrated solar street lights incorporate monocrystalline solar cells, long-life Lithium Ferro Phosphate (LiFePO4) batteries, and intelligent motion-sensing LED chips. They illuminate roads, residential colonies, remote farms, and parks reliably every single evening.',
    specs: [
      { label: 'Power Rating', value: '15W, 24W, 40W, 60W, 90W LED' },
      { label: 'Battery Type', value: 'Lithium Ferro Phosphate (LiFePO4)' },
      { label: 'Ingress Protection', value: 'IP65 Water & Dust Resistant' },
      { label: 'Autonomy', value: 'Up to 2 Rainy Days Backup' },
      { label: 'Sensor Mode', value: 'Smart Radar Motion & Light Sensor' },
      { label: 'Warranty', value: '3 to 5 Years Full Warranty' }
    ],
    features: [
      'Autonomous automatic power on at dusk, automatic off at sunrise',
      'No power outages - stays illuminated during grid load-shedding',
      'Rapid pole installation without underground cabling or trench digging',
      'Durable pressure die-cast aluminium casing designed for coastal weather'
    ]
  },
  'solar-fencing': {
    title: 'Solar Agricultural & Security Fencing',
    badge: 'Perimeter Defense',
    image: 'assets/solar-fencing-new.jpg',
    subtitle: 'High-security solar-powered electric fencing to safeguard crops and premises.',
    desc: 'Protect valuable agriculture, remote farms, poultry units, and commercial borders against wild animals and trespassers. The system emits brief, safe, non-lethal, high-voltage deterrent electrical pulses. Connected with smart sirens, it immediately alerts owners during tampering attempts without relying on power grid availability.',
    specs: [
      { label: 'Shock Voltage', value: '8kV to 10kV Pulsed (Non-Lethal)' },
      { label: 'Power Source', value: 'Solar PV Module + Deep Cycle Battery' },
      { label: 'Energizer Type', value: 'BIS Certified High-Voltage Pulsator' },
      { label: 'Alarm System', value: 'Cut-Wire & Short-Circuit Siren Alert' },
      { label: 'Applicable Area', value: '1 Acre to 50+ Acres Perimeter' }
    ],
    features: [
      'Legal, government-approved non-lethal deterrent shock',
      'Continues operating 24x7 without dependency on grid power',
      'Instant tamper detection with heavy-duty siren alert',
      'Weather-resistant galvanized steel wire and UV-stabilized virgin insulators'
    ]
  },
  'solar-cleaning': {
    title: 'Solar Cleaning & Maintenance Kits',
    badge: 'Yield Optimization',
    image: 'assets/solar-cleaning-new.jpg',
    subtitle: 'Specialized cleaning tools and periodic maintenance to prevent dust generation loss.',
    desc: 'Accumulated dust, pollen, and bird droppings can reduce your solar panel power generation by 15% to 25%. Omega Solar Power offers specialized telescopic rotating water-fed brush kits and dedicated maintenance contracts to keep your panels at peak generation capacity.',
    specs: [
      { label: 'Cleaning Range', value: 'Telescopic Poles up to 9 Meters' },
      { label: 'Brush Material', value: 'Scratch-Free Nylon Soft Bristles' },
      { label: 'Water Pressure', value: 'Dual Spray Jet Nozzles' },
      { label: 'Power Type', value: 'Solar Battery / 230V AC Adaptable' },
      { label: 'Application', value: 'Rooftops, Commercial Sheds, Ground Plants' }
    ],
    features: [
      'Safely cleans high-pitch rooftops from ground or ladder level',
      'Zero glass scratching guarantee',
      'Saves water compared to standard pressure hose washers',
      'Restores 100% optimum electricity output immediately'
    ]
  }
};

// ============================================================================
// 2. NAVBAR SCROLL & MOBILE DRAWER
// ============================================================================
const headerWrapper = document.getElementById('headerWrapper');
const navbarPill = document.getElementById('navbarPill');
const mobileToggle = document.getElementById('mobileToggle');
const mobileDrawer = document.getElementById('mobileDrawer');
const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbarPill.classList.add('scrolled');
  } else {
    navbarPill.classList.remove('scrolled');
  }
  highlightNavOnScroll();
});

function openMobileDrawer() {
  mobileDrawer.classList.add('open');
  mobileDrawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileDrawer() {
  mobileDrawer.classList.remove('open');
  mobileDrawerOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

if (mobileToggle) mobileToggle.addEventListener('click', openMobileDrawer);
if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileDrawer);
if (mobileDrawerOverlay) mobileDrawerOverlay.addEventListener('click', closeMobileDrawer);

// Scroll Spy for Nav Links
function highlightNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 200;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (scrollPos >= top && scrollPos < top + height) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      if (link) link.classList.add('active');
    }
  });
}

// ============================================================================
// 3. HERO PRODUCT SHOWCASE SLIDER
// ============================================================================
let currentHeroSlide = 0;
let heroSliderInterval = null;

function getHeroSlides() {
  return document.querySelectorAll('.slider-slide');
}

function setHeroSlide(index) {
  const currentSlides = getHeroSlides();
  if (!currentSlides.length) return;
  currentHeroSlide = index % currentSlides.length;
  currentSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentHeroSlide);
    slide.querySelectorAll('.slider-dot').forEach((d, dotIdx) => {
      d.classList.toggle('active', dotIdx === currentHeroSlide);
    });
  });
}

function nextHeroSlide() {
  const currentSlides = getHeroSlides();
  if (!currentSlides.length) return;
  currentHeroSlide = (currentHeroSlide + 1) % currentSlides.length;
  setHeroSlide(currentHeroSlide);
}

function startHeroSlider() {
  if (heroSliderInterval) clearInterval(heroSliderInterval);
  heroSliderInterval = setInterval(nextHeroSlide, 4500);
}

function pauseHeroSlider() {
  if (heroSliderInterval) clearInterval(heroSliderInterval);
}

const sliderContainer = document.getElementById('heroSliderContainer');
if (sliderContainer) {
  sliderContainer.addEventListener('mouseenter', pauseHeroSlider);
  sliderContainer.addEventListener('mouseleave', startHeroSlider);
  startHeroSlider();
}

// ============================================================================
// 4. SOLAR SAVINGS CALCULATOR
// ============================================================================
const monthlyBillInput = document.getElementById('monthlyBillInput');
const monthlyBillSlider = document.getElementById('monthlyBillSlider');
const resultSystemSize = document.getElementById('resultSystemSize');
const resultSubsidy = document.getElementById('resultSubsidy');
const resultAnnualSavings = document.getElementById('resultAnnualSavings');
const resultCo2 = document.getElementById('resultCo2');

function formatCurrency(num) {
  return '₹' + new Intl.NumberFormat('en-IN').format(Math.round(num));
}

function calculateSavings() {
  let bill = parseFloat(monthlyBillInput.value) || 0;
  if (bill < 0) bill = 0;

  // Sync Slider
  if (monthlyBillSlider && monthlyBillSlider.value != bill) {
    monthlyBillSlider.value = Math.min(bill, 25000);
  }

  // Units per month at ₹8/unit
  const monthlyUnits = bill / 8;
  
  // 1 kW yields approx 120 units/month in AP conditions
  let kw = Math.ceil(monthlyUnits / 120);
  if (bill > 0 && kw < 1) kw = 1;
  if (bill === 0) kw = 0;

  // PM Surya Ghar Subsidy Slabs
  // 1 kW: ₹30,000 | 2 kW: ₹60,000 | 3 kW+: ₹78,000
  let subsidy = 0;
  if (kw === 1) subsidy = 30000;
  else if (kw === 2) subsidy = 60000;
  else if (kw >= 3) subsidy = 78000;

  // Annual savings (bill * 12)
  const annualSavings = bill * 12;

  // CO2 reduction (approx 1.2 tonnes per kW per year)
  const co2Tonnes = (kw * 1.2).toFixed(1);

  // Update UI with smooth text updates
  if (resultSystemSize) resultSystemSize.textContent = kw > 0 ? `${kw} kW` : '0 kW';
  if (resultSubsidy) resultSubsidy.textContent = subsidy > 0 ? formatCurrency(subsidy) : '₹0';
  if (resultAnnualSavings) resultAnnualSavings.textContent = formatCurrency(annualSavings);
  if (resultCo2) resultCo2.textContent = kw > 0 ? `${co2Tonnes} Tonnes` : '0 Tonnes';
}

function setBillValue(val) {
  if (monthlyBillInput) {
    monthlyBillInput.value = val;
    calculateSavings();
    // Update active preset pill
    document.querySelectorAll('.preset-pill').forEach(pill => {
      pill.classList.toggle('active', pill.textContent.includes(val.toLocaleString('en-IN')));
    });
  }
}

if (monthlyBillInput) {
  monthlyBillInput.addEventListener('input', calculateSavings);
}

if (monthlyBillSlider) {
  monthlyBillSlider.addEventListener('input', (e) => {
    monthlyBillInput.value = e.target.value;
    calculateSavings();
    document.querySelectorAll('.preset-pill').forEach(p => p.classList.remove('active'));
  });
}

function claimCalculatedSavings() {
  const billVal = monthlyBillInput.value;
  const contactBillInput = document.getElementById('contactBill');
  if (contactBillInput) contactBillInput.value = billVal;

  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    showToast(`Calculated estimate applied to enquiry form!`);
  }
}

function applySubsidyLead() {
  const contactType = document.getElementById('contactType');
  if (contactType) contactType.value = 'Residential';
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    showToast(`Applying for PM Surya Ghar Scheme. Please provide your details.`);
  }
}

// ============================================================================
// 5. GALLERY FILTER & LIGHTBOX
// ============================================================================
function filterGallery(category) {
  const cards = document.querySelectorAll('.gallery-card');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(category));
  });

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-cat');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function openLightbox(src, caption) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImage');
  const cap = document.getElementById('lightboxCaption');
  if (modal && img && cap) {
    img.src = src;
    cap.textContent = caption;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ============================================================================
// 6. MODALS MANAGEMENT
// ============================================================================
function openQuoteModal() {
  const modal = document.getElementById('quoteModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeQuoteModal() {
  const modal = document.getElementById('quoteModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function openBrochureModal() {
  const modal = document.getElementById('brochureModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeBrochureModal() {
  const modal = document.getElementById('brochureModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function openStoryModal() {
  const modal = document.getElementById('storyModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeStoryModal() {
  const modal = document.getElementById('storyModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function openProductDetail(productId) {
  const p = PRODUCTS_DATA[productId];
  if (!p) return;

  const container = document.getElementById('productModalContent');
  if (!container) return;

  let specsHtml = p.specs.map(s => `
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px 14px;">
      <span style="display: block; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase;">${s.label}</span>
      <strong style="font-size: 13.5px; color: #0b1f3a;">${s.value}</strong>
    </div>
  `).join('');

  let featuresHtml = p.features.map(f => `
    <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 13.5px; color: #334155; margin-bottom: 8px;">
      <span style="color: #10b981; font-weight: 800;">✓</span> ${f}
    </li>
  `).join('');

  container.innerHTML = `
    <div style="margin-bottom: 20px;">
      <span class="section-tag">${p.badge}</span>
      <h3 style="font-size: 24px; color: #071426; margin-bottom: 6px;">${p.title}</h3>
      <p style="font-size: 14px; color: #64748b;">${p.subtitle}</p>
    </div>

    <div style="border-radius: 14px; overflow: hidden; max-height: 240px; margin-bottom: 20px;">
      <img src="${p.image}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover;" />
    </div>

    <p style="font-size: 14px; color: #334155; line-height: 1.6; margin-bottom: 20px;">
      ${p.desc}
    </p>

    <h4 style="font-size: 15px; font-weight: 800; color: #071426; margin-bottom: 12px;">Technical Specifications</h4>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px;">
      ${specsHtml}
    </div>

    <h4 style="font-size: 15px; font-weight: 800; color: #071426; margin-bottom: 12px;">Key Advantages</h4>
    <ul style="padding-left: 0; margin-bottom: 24px;">
      ${featuresHtml}
    </ul>

    <button class="btn btn-primary" style="width: 100%;" onclick="closeProductModal(); scrollToContactWithProduct('${p.title}')">
      <span>Get Quote for ${p.title}</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </button>
  `;

  const modal = document.getElementById('productModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function scrollToContactWithProduct(prodTitle) {
  const contactMessage = document.getElementById('contactMessage');
  if (contactMessage) {
    contactMessage.value = `I am interested in getting a detailed quotation and site survey for: ${prodTitle}.`;
  }
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Close modals when clicking backdrop
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});

// Escape key to close any open modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
    closeMobileDrawer();
    document.body.style.overflow = '';
  }
});

// ============================================================================
// 7. TOAST NOTIFICATION
// ============================================================================
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toastNotice');
  const msg = document.getElementById('toastMessage');
  if (!toast || !msg) return;

  msg.textContent = message;
  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

function copyAddress() {
  const addr = "#143-17, Chirra Street, Kadiyam, E.G.Dt - 533126, Andhra Pradesh";
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(addr).then(() => {
      showToast("Address copied to clipboard!");
    }).catch(() => {
      showToast(addr);
    });
  } else {
    showToast("Address: " + addr);
  }
}

// ============================================================================
// 8. FORM SUBMISSIONS
// ============================================================================
function handleEnquirySubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contactName').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const type = document.getElementById('contactType').value;
  const bill = document.getElementById('contactBill').value.trim();
  const message = document.getElementById('contactMessage').value.trim();

  // Create WhatsApp message string
  const textMsg = encodeURIComponent(
    `Hello Omega Solar Power,\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nProperty: ${type}\nMonthly Bill: ₹${bill}\nMessage: ${message}`
  );

  showToast(`Thank you, ${name}! Your enquiry has been received. Our engineer will call you shortly.`);
  document.getElementById('enquiryForm').reset();

  // Optional: prompt opening WhatsApp
  setTimeout(() => {
    const wantWhatsApp = confirm("Would you also like to send this inquiry directly to our WhatsApp support (+91 79810 54609)?");
    if (wantWhatsApp) {
      window.open(`https://wa.me/917981054609?text=${textMsg}`, '_blank');
    }
  }, 800);
}

function handleQuoteSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('modalQuoteName').value.trim();
  closeQuoteModal();
  showToast(`Quote request received! We are preparing your solar estimate.`);
  e.target.reset();
}

function handleBrochureSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('brochureName').value.trim();
  closeBrochureModal();
  
  // Create and trigger mock PDF / text download
  const brochureContent = `
================================================================================
           OMEGA SOLAR POWER - OFFICIAL TECHNICAL BROCHURE 2026
================================================================================
Location: #143-17, Chirra Street, Kadiyam, E.G.Dt - 533126, AP
Phone / WhatsApp: +91 79810 54609
Website: https://www.adityasolarsolutions.in

1. PM SURYA GHAR MUFT BIJLI YOJANA
   - 1 kW: ₹30,000 Govt Direct Bank Subsidy
   - 2 kW: ₹60,000 Govt Direct Bank Subsidy
   - 3 kW+: ₹78,000 Govt Direct Bank Subsidy (Maximum Benefit)
   - Zero electricity bills for up to 300 free units/month

2. PRODUCTS & SPECIFICATIONS:
   - Solar Rooftop Panels (Tier-1 Monocrystalline, 25-Year Warranty)
   - Solar Water Heaters (ETC/FPC 100L - 500L, cuts heating bill by 80%)
   - Solar All-in-One Street & Garden Lights (LiFePO4 battery, IP65)
   - Solar Agricultural Perimeter Fencing (8-10kV non-lethal pulsed security)
   - Solar Panel Specialized Cleaning & Maintenance

3. BRAND PARTNERS:
   - WAAREE, Vikram Solar, ReNew Power, Adani Power, Supreme Solar, Deye

Thank you for downloading our brochure, ${name}!
For a customized site survey, call us at +91 79810 54609.
================================================================================
`;
  const blob = new Blob([brochureContent], { type: 'text/plain;charset=utf-8' });
  const downloadUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = 'Omega-Solar-Power-Brochure-2026.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(downloadUrl);

  showToast(`Brochure downloaded successfully!`);
  e.target.reset();
}

// ============================================================================
// 9. ANIMATED STAT COUNTERS ON SCROLL
// ============================================================================
let countersAnimated = false;
function animateStats() {
  const statElements = document.querySelectorAll('.stat-number');
  if (countersAnimated || !statElements.length) return;

  const impactSection = document.getElementById('impact');
  if (!impactSection) return;

  const rect = impactSection.getBoundingClientRect();
  if (rect.top <= window.innerHeight - 80) {
    countersAnimated = true;
    statElements.forEach(el => {
      const target = parseInt(el.getAttribute('data-count'), 10);
      const isTonnes = el.textContent.includes('CO');
      let count = 0;
      const step = Math.max(1, Math.floor(target / 40));
      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          count = target;
          clearInterval(interval);
          el.textContent = `${target}+`;
        } else {
          el.textContent = `${count}+`;
        }
      }, 30);
    });
  }
}

window.addEventListener('scroll', animateStats);

// ============================================================================
// 10. REVIEWS AUTO-ROTATING CAROUSEL
// ============================================================================
function initReviewsCarousel() {
  const container = document.getElementById('reviewsCarouselContainer');
  const track = document.getElementById('reviewsCarouselTrack');
  const prevBtn = document.getElementById('reviewPrevBtn');
  const nextBtn = document.getElementById('reviewNextBtn');
  const dotsContainer = document.getElementById('reviewsCarouselDots');

  if (!container || !track) return;

  const originalSlides = Array.from(track.querySelectorAll('.review-slide'));
  const totalOriginal = originalSlides.length;
  if (totalOriginal === 0) return;

  // Clone slides to ensure a seamless infinite forward rotation
  originalSlides.forEach(slide => {
    const clone = slide.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });

  let currentIndex = 0;
  let autoPlayTimer = null;
  let isTransitioning = false;

  // Build pagination dots for original 5 reviews
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalOriginal; i++) {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to review slide ${i + 1}`);
      dot.addEventListener('click', () => {
        if (isTransitioning) return;
        goToSlide(i);
        restartAutoPlay();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    if (!dotsContainer) return;
    const activeIndex = currentIndex % totalOriginal;
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIndex);
    });
  }

  function getStepWidth() {
    const slides = track.querySelectorAll('.review-slide');
    if (slides.length >= 2) {
      return slides[1].offsetLeft - slides[0].offsetLeft;
    }
    return slides[0] ? slides[0].offsetWidth + 24 : 0;
  }

  function updateTrackPosition(withTransition = true) {
    const step = getStepWidth();
    if (!withTransition) {
      track.style.transition = 'none';
    } else {
      track.style.transition = 'transform 0.55s cubic-bezier(0.25, 1, 0.5, 1)';
    }
    track.style.transform = `translateX(-${currentIndex * step}px)`;
    updateDots();
  }

  function nextSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex++;
    updateTrackPosition(true);
  }

  function prevSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    if (currentIndex === 0) {
      // Instantly jump to cloned offset without transition
      const step = getStepWidth();
      track.style.transition = 'none';
      currentIndex = totalOriginal;
      track.style.transform = `translateX(-${currentIndex * step}px)`;
      track.offsetHeight; // force reflow
    }
    setTimeout(() => {
      currentIndex--;
      updateTrackPosition(true);
    }, 10);
  }

  function goToSlide(targetIdx) {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex = targetIdx;
    updateTrackPosition(true);
  }

  track.addEventListener('transitionend', () => {
    isTransitioning = false;
    // When the transition to or past the cloned set finishes, wrap cleanly
    if (currentIndex >= totalOriginal) {
      const step = getStepWidth();
      track.style.transition = 'none';
      currentIndex = currentIndex % totalOriginal;
      track.style.transform = `translateX(-${currentIndex * step}px)`;
      track.offsetHeight; // force reflow
      updateDots();
    }
  });

  // Navigation Arrow Handlers
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      restartAutoPlay();
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      restartAutoPlay();
    });
  }

  // Filter pills interaction
  document.querySelectorAll('.review-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.review-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      goToSlide(0);
      restartAutoPlay();
      showToast(`Filter applied: ${btn.textContent.trim()}`);
    });
  });

  // Auto-play Timer (rotates every 3.5 seconds)
  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(nextSlide, 3500);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  function restartAutoPlay() {
    startAutoPlay();
  }

  // Pause on hover so users can comfortably read or click review photos
  container.addEventListener('mouseenter', stopAutoPlay);
  container.addEventListener('mouseleave', startAutoPlay);

  // Touch swipe support for mobile & tablet
  let touchStartX = 0;
  let touchEndX = 0;

  container.addEventListener('touchstart', (e) => {
    stopAutoPlay();
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    startAutoPlay();
  }, { passive: true });

  // Adjust on screen resize
  window.addEventListener('resize', () => {
    updateTrackPosition(false);
  });

  // Start auto-rotation
  startAutoPlay();
}

// ============================================================================
// 10. GALLERY SIDE-BY-SIDE MOUSE-INTERACTIVE AUTOROTATION CAROUSEL
// ============================================================================
function initGalleryInteractiveCarousel() {
  const viewport = document.getElementById('galleryViewport');
  const track = document.getElementById('galleryTrack');
  const prevBtn = document.getElementById('galleryPrevBtn');
  const nextBtn = document.getElementById('galleryNextBtn');
  if (!viewport || !track) return;

  // Duplicate items for infinite seamless wrapping
  const originalCards = Array.from(track.children);
  if (originalCards.length === 0) return;

  originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.classList.add('cloned');
    track.appendChild(clone);
  });

  let scrollPos = 0;
  const baseSpeed = 0.85; // ambient forward auto-rotation speed
  let targetSpeed = baseSpeed;
  let currentSpeed = baseSpeed;
  let isHovered = false;
  let isDragging = false;
  let startX = 0;
  let dragStartPos = 0;
  let dragDistance = 0;

  function getHalfWidth() {
    return track.scrollWidth / 2;
  }

  function loop() {
    if (!isDragging) {
      // Smoothly accelerate / decelerate toward target speed based on mouse
      currentSpeed += (targetSpeed - currentSpeed) * 0.08;
      scrollPos += currentSpeed;

      const halfWidth = getHalfWidth();
      if (halfWidth > 0) {
        if (scrollPos >= halfWidth) {
          scrollPos -= halfWidth;
        } else if (scrollPos < 0) {
          scrollPos += halfWidth;
        }
      }

      track.style.transform = `translate3d(-${scrollPos}px, 0, 0)`;
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  // Mouse movement drives auto-rotation direction & speed
  viewport.addEventListener('mousemove', (e) => {
    isHovered = true;
    const rect = viewport.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const center = rect.width / 2;
    const norm = (mouseX - center) / center; // -1 (left edge) to +1 (right edge)

    if (Math.abs(norm) < 0.06) {
      targetSpeed = 0.2; // subtle slow drift in center
    } else {
      // Scale rotation speed smoothly up to 4.0px per frame
      targetSpeed = norm * 4.0;
    }
  });

  viewport.addEventListener('mouseenter', () => {
    isHovered = true;
  });

  viewport.addEventListener('mouseleave', () => {
    isHovered = false;
    targetSpeed = baseSpeed; // return smoothly to default forward auto-rotation
  });

  // Dragging support (Mouse & Touch)
  viewport.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    isDragging = true;
    startX = e.clientX;
    dragStartPos = scrollPos;
    dragDistance = 0;
    viewport.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    dragDistance = Math.abs(delta);
    scrollPos = dragStartPos - delta;

    const halfWidth = getHalfWidth();
    if (scrollPos >= halfWidth) scrollPos -= halfWidth;
    if (scrollPos < 0) scrollPos += halfWidth;

    track.style.transform = `translate3d(-${scrollPos}px, 0, 0)`;
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      viewport.style.cursor = 'grab';
    }
  });

  // Prevent opening lightbox if user was dragging
  track.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (dragDistance > 6) {
        e.stopImmediatePropagation();
      }
    }, true);
  });

  // Mobile Touch Support
  let touchStartX = 0;
  viewport.addEventListener('touchstart', (e) => {
    isDragging = true;
    touchStartX = e.touches[0].clientX;
    dragStartPos = scrollPos;
    dragDistance = 0;
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - touchStartX;
    dragDistance = Math.abs(delta);
    scrollPos = dragStartPos - delta;

    const halfWidth = getHalfWidth();
    if (scrollPos >= halfWidth) scrollPos -= halfWidth;
    if (scrollPos < 0) scrollPos += halfWidth;

    track.style.transform = `translate3d(-${scrollPos}px, 0, 0)`;
  }, { passive: true });

  viewport.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Navigation Arrows
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      targetSpeed = -4.5;
      setTimeout(() => { targetSpeed = isHovered ? 0 : baseSpeed; }, 450);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      targetSpeed = 4.5;
      setTimeout(() => { targetSpeed = isHovered ? 0 : baseSpeed; }, 450);
    });
  }
}

// ============================================================================
// 11. INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  calculateSavings();
  animateStats();
  initReviewsCarousel();
  initGalleryInteractiveCarousel();
});
