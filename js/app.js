/* ==========================================================================
   JULMAR S.A.S. - EXECUTIVE CORPORATE INTERACTION ENGINE (app.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }
  initStickyHeader();
  initHeroVideoControls();
  initStatsCounters();
  initServicesCatalogFilter();
  initFacilityTabs();
  initQuoteWizard();
  initMobileMenu();
  initProjectSliders();
  initDraggableMarquee();
  initContactForm();
  initGsapAnimations();
});

/* 2. Sticky Executive Header */
function initStickyHeader() {
  const header = document.querySelector('.header-glass');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* 3. Hero Video Controls */
function initHeroVideoControls() {
  const video = document.getElementById('hero-video');
  const playBtn = document.getElementById('btn-play-pause');
  const muteBtn = document.getElementById('btn-mute');

  if (!video) return;

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playBtn.innerHTML = '❚❚';
      } else {
        video.pause();
        playBtn.innerHTML = '▶';
      }
    });
  }

  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      muteBtn.innerHTML = video.muted ? 'Silencio' : 'Sonido';
    });
  }
}

/* 4. Stats Counter Animation (GSAP + ScrollTrigger) */
function initStatsCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  const statsSection = document.querySelector('.stats-section');
  if (!statNumbers.length) return;

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    statNumbers.forEach(stat => {
      const countTo = parseInt(stat.getAttribute('data-target') || '0', 10);
      const prefix = stat.getAttribute('data-prefix') || '';
      const suffix = stat.getAttribute('data-suffix') || '';
      const counterObj = { val: 0 };

      gsap.to(counterObj, {
        val: countTo,
        duration: 2.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: statsSection || stat,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        onUpdate: () => {
          stat.innerText = `${prefix}${Math.floor(counterObj.val)}${suffix}`;
        }
      });
    });
  } else {
    // Fallback directo sin setInterval
    statNumbers.forEach(stat => {
      const countTo = stat.getAttribute('data-target') || '0';
      const prefix = stat.getAttribute('data-prefix') || '';
      const suffix = stat.getAttribute('data-suffix') || '';
      stat.innerText = `${prefix}${countTo}${suffix}`;
    });
  }
}

/* 5. Real-Time Search & Category Filters */
function initServicesCatalogFilter() {
  const searchInput = document.getElementById('service-search-input') || document.getElementById('service-search');
  const filterPills = document.querySelectorAll('.filter-pill, .filter-chip');
  const serviceCards = document.querySelectorAll('.service-item-card, .service-card');

  if (!serviceCards.length) return;

  function filterServices() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const activePill = document.querySelector('.filter-pill.active, .filter-chip.active');
    const category = activePill ? (activePill.getAttribute('data-filter') || activePill.getAttribute('data-category')) : 'all';

    serviceCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardKeywords = card.getAttribute('data-keywords') || '';
      const cardTitle = card.querySelector('.corporate-card-title, .service-card-title')?.innerText.toLowerCase() || '';
      const cardText = card.querySelector('.corporate-card-text, .service-card-desc')?.innerText.toLowerCase() || '';

      const fullText = `${cardTitle} ${cardText} ${cardKeywords}`.toLowerCase();
      const matchesSearch = !query || fullText.includes(query);
      const matchesCategory = (category === 'all' || cardCategory === category);

      if (matchesSearch && matchesCategory) {
        card.style.display = '';
        card.style.opacity = '1';
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterServices);
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      filterServices();
    });
  });
}



/* 7. Facilities & Tab Switching with 3D Dynamic GSAP Transition */
function initFacilityTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane, .tab-content-card');

  if (!tabBtns.length) return;

  function switchTabWithAnimation(targetBtn) {
    const targetId = targetBtn.getAttribute('data-tab');
    const targetPane = document.getElementById(targetId);
    if (!targetPane) return;

    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanes.forEach(pane => {
      pane.classList.remove('active');
      pane.style.display = 'none';
    });

    targetBtn.classList.add('active');
    targetPane.classList.add('active');
    targetPane.style.display = targetPane.classList.contains('tab-content-card') ? 'grid' : 'block';

    // Animar con GSAP 3D la sede revelada dinámicamente
    if (typeof gsap !== 'undefined') {
      gsap.fromTo(targetPane, 
        { rotateX: -6, scale: 0.96, opacity: 0, y: 20 }, 
        { rotateX: 0, scale: 1, opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' }
      );

      const img = targetPane.querySelector('img');
      const listItems = targetPane.querySelectorAll('li');
      const heading = targetPane.querySelector('h3, h2');

      if (img) {
        gsap.fromTo(img, 
          { scale: 1.1, opacity: 0.8 }, 
          { scale: 1, opacity: 1, duration: 0.7, ease: 'power2.out' }
        );
      }
      if (heading) {
        gsap.fromTo(heading, 
          { x: -15, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out', delay: 0.05 }
        );
      }
      if (listItems.length) {
        gsap.fromTo(listItems, 
          { opacity: 0, x: -12 }, 
          { opacity: 1, x: 0, duration: 0.35, stagger: 0.06, ease: 'power2.out', delay: 0.1 }
        );
      }
    }
  }

  // Carga inicial con animación al abrir la página
  const activeBtn = document.querySelector('.tab-btn.active') || tabBtns[0];
  if (activeBtn) {
    switchTabWithAnimation(activeBtn);
  }

  // Event listener para cambio de sede al hacer clic
  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (btn.classList.contains('active')) return;
      switchTabWithAnimation(btn);
    });
  });
}

/* 8. Interactive Step Wizard */
function initQuoteWizard() {
  const dots = document.querySelectorAll('.wizard-step-dot');
  const stepContents = document.querySelectorAll('.wizard-step-content');
  const prevBtn = document.getElementById('wizard-prev');
  const nextBtn = document.getElementById('wizard-next');
  const submitBtn = document.getElementById('wizard-submit');

  if (!dots.length) return;

  let currentStep = 1;

  function updateWizardState() {
    dots.forEach((dot, idx) => {
      const stepNum = idx + 1;
      dot.classList.remove('active', 'completed');
      if (stepNum === currentStep) {
        dot.classList.add('active');
      } else if (stepNum < currentStep) {
        dot.classList.add('completed');
      }
    });

    stepContents.forEach((content, idx) => {
      if (idx + 1 === currentStep) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });

    if (prevBtn) prevBtn.style.display = currentStep === 1 ? 'none' : 'inline-flex';
    if (nextBtn) nextBtn.style.display = currentStep === 3 ? 'none' : 'inline-flex';
    if (submitBtn) submitBtn.style.display = currentStep === 3 ? 'inline-flex' : 'none';
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStep < 3) {
        currentStep++;
        updateWizardState();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateWizardState();
      }
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceType = document.getElementById('wiz-service')?.value || 'General';
      const sector = document.getElementById('wiz-sector')?.value || 'Industrial';
      const name = document.getElementById('wiz-name')?.value || 'Cliente';
      const phone = document.getElementById('wiz-phone')?.value || '';
      const notes = document.getElementById('wiz-notes')?.value || '';

      const msg = `Hola Julmar S.A.S., solicito cotización corporativa:%0A*Cliente:* ${encodeURIComponent(name)}%0A*Teléfono:* ${encodeURIComponent(phone)}%0A*Servicio:* ${encodeURIComponent(serviceType)}%0A*Sector:* ${encodeURIComponent(sector)}%0A*Notas:* ${encodeURIComponent(notes)}`;

      window.open(`https://wa.me/573243259535?text=${msg}`, '_blank');
    });
  }

  updateWizardState();
}

/* 9. Mobile Navigation Collapsible Menu Engine */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.nav-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isActive = menu.classList.contains('active');
    if (isActive) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Auto-close menu when a navigation link is clicked
  const navLinks = menu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (menu.classList.contains('active') && !menu.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  function openMenu() {
    menu.classList.add('active');
    toggle.innerHTML = '✕';
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('active');
    toggle.innerHTML = '☰';
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

/* 10. Project Image Slider / Carousel */
function initProjectSliders() {
  const sliders = document.querySelectorAll('.project-slider-container');
  if (!sliders.length) return;

  sliders.forEach(slider => {
    const track = slider.querySelector('.project-slider-track');
    const slides = slider.querySelectorAll('.project-slide');
    const prevBtn = slider.querySelector('.slider-btn.prev-btn');
    const nextBtn = slider.querySelector('.slider-btn.next-btn');
    const dots = slider.querySelectorAll('.slider-dot');

    if (!track || !slides.length) return;

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideInterval = null;

    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentIndex = index;

      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.style.opacity = '1';
          dot.style.transform = 'scale(1.2)';
        } else {
          dot.style.opacity = '0.4';
          dot.style.transform = 'scale(1)';
        }
      });
    }

    function startAutoSlide() {
      stopAutoSlide();
      autoSlideInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 4000);
    }

    function stopAutoSlide() {
      if (autoSlideInterval) clearInterval(autoSlideInterval);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(currentIndex - 1);
        startAutoSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(currentIndex + 1);
        startAutoSlide();
      });
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const slideIndex = parseInt(dot.getAttribute('data-slide') || '0', 10);
        goToSlide(slideIndex);
        startAutoSlide();
      });
    });

    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);

    goToSlide(0);
    startAutoSlide();
  });
}

/* 11. GSAP + ScrollTrigger Executive Interactive Suite */
function initGsapAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  // 1. Hero del index.html (.hero-corner-box y Parallax video)
  const heroBox = document.querySelector('.hero-corner-box');
  if (heroBox) {
    gsap.from(heroBox.children, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.2
    });
  }

  const heroVideoBg = document.querySelector('#hero-video, .hero-video-bg');
  if (heroVideoBg) {
    gsap.to(heroVideoBg, {
      y: '10%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section, .hero-executive',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // 3. Grid de servicios (.service-card, .service-item-card)
  const serviceCards = gsap.utils.toArray('.service-card, .service-item-card');
  if (serviceCards.length) {
    serviceCards.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }

  // 4. Marquee de clientes reveal (Reveal con clipPath progresivo de izquierda a derecha)
  const marqueeSection = document.querySelector('.marquee-section, .clients-marquee-section');
  if (marqueeSection) {
    gsap.fromTo(marqueeSection, 
      { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
      {
        clipPath: 'inset(0 0% 0 0)',
        opacity: 1,
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: marqueeSection,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // 5. Tabs de instalaciones (.tab-content-card)
  const facilityCards = gsap.utils.toArray('.tab-content-card, .facility-card');
  facilityCards.forEach((card) => {
    const img = card.querySelector('.tab-media-side img, .facility-img');
    const info = card.querySelector('.tab-info-side, .facility-info');

    if (img) {
      gsap.from(img, {
        scale: 1.12,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    }

    if (info) {
      gsap.from(info, {
        x: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    }
  });

  // 6. Carruseles / Cards de proyectos en quienes_somos.html
  const projectContainers = gsap.utils.toArray('.project-slider-container, .project-card, .timeline-item');
  projectContainers.forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      y: 60,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // 7. Hero de servicio_detalle.html (.detail-hero-carousel / .detail-hero)
  const detailHeroImg = document.querySelector('.detail-hero img, .detail-hero-bg');
  if (detailHeroImg) {
    gsap.to(detailHeroImg, {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: '.detail-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  const detailCaption = document.querySelector('.detail-slide-caption, .detail-hero-title');
  if (detailCaption) {
    gsap.from(detailCaption, {
      opacity: 0,
      y: 35,
      duration: 1,
      delay: 0.3,
      ease: 'power2.out'
    });
  }

  // 8. Secciones de Alianzas Estratégicas / Comercializadores
  const allianceLogos = gsap.utils.toArray('.partner-logo, .brand-logo-card, .alliance-grid img, .partner-card');
  if (allianceLogos.length) {
    gsap.from(allianceLogos, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.5)',
      scrollTrigger: {
        trigger: allianceLogos[0].parentElement || allianceLogos[0],
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // 9. CTA final (.detail-cta-card, .cta-banner)
  const ctaCards = gsap.utils.toArray('.detail-cta-card, .cta-banner, .footer-cta-card');
  ctaCards.forEach((cta) => {
    gsap.fromTo(cta,
      { scaleX: 0.8, opacity: 0, transformOrigin: 'center center' },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cta,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
}

/* 10. Image Lightbox Viewer */
function openImageLightbox(src, caption) {
  let lightbox = document.getElementById('image-lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'image-lightbox';
    lightbox.className = 'image-lightbox-modal';
    lightbox.innerHTML = `
      <div class="lightbox-backdrop"></div>
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Cerrar imagen">✕</button>
        <img id="lightbox-img" src="" alt="">
        <div id="lightbox-caption" class="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(lightbox);

    lightbox.querySelector('.lightbox-backdrop').addEventListener('click', closeImageLightbox);
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeImageLightbox);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeImageLightbox();
    });
  }

  const imgEl = lightbox.querySelector('#lightbox-img');
  const captionEl = lightbox.querySelector('#lightbox-caption');
  imgEl.src = src;
  imgEl.alt = caption || '';
  captionEl.textContent = caption || '';

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeImageLightbox() {
  const lightbox = document.getElementById('image-lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* 10. Arrastrar y Deslizar Marquee de Clientes (Mouse & Touch Drag) */
function initDraggableMarquee() {
  const container = document.querySelector('.marquee-track-container') || document.querySelector('.marquee-section');
  const track = document.querySelector('.marquee-track');
  if (!container || !track) return;

  let isDown = false;
  let startX = 0;
  let startScrollLeft = 0;
  let isHovered = false;
  const speed = 1.0; // Velocidad de avance automático (px por frame)

  function getHalfWidth() {
    return track.scrollWidth / 2;
  }

  // Bucle continuo de auto-scroll
  function autoScrollLoop() {
    if (!isDown && !isHovered) {
      container.scrollLeft += speed;
      const hw = getHalfWidth();
      if (hw > 0 && container.scrollLeft >= hw) {
        container.scrollLeft -= hw;
      }
    }
    requestAnimationFrame(autoScrollLoop);
  }
  requestAnimationFrame(autoScrollLoop);

  container.addEventListener('mouseenter', () => { isHovered = true; });
  container.addEventListener('mouseleave', () => {
    isHovered = false;
    isDown = false;
    container.style.cursor = 'grab';
  });

  function startDrag(e) {
    isDown = true;
    container.style.cursor = 'grabbing';
    startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    startScrollLeft = container.scrollLeft;
  }

  function moveDrag(e) {
    if (!isDown) return;
    const currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const deltaX = currentX - startX;
    let newScroll = startScrollLeft - deltaX * 1.5; // Multiplicador para deslizar rápidamente

    const hw = getHalfWidth();
    if (hw > 0) {
      while (newScroll < 0) newScroll += hw;
      while (newScroll >= hw) newScroll -= hw;
    }
    container.scrollLeft = newScroll;
  }

  function endDrag() {
    isDown = false;
    container.style.cursor = 'grab';
  }

  container.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', moveDrag);
  window.addEventListener('mouseup', endDrag);

  container.addEventListener('touchstart', startDrag, { passive: true });
  window.addEventListener('touchmove', moveDrag, { passive: true });
  window.addEventListener('touchend', endDrag);
}

/* 10. Direct Executive Contact Form Integration */
function initContactForm() {
  const form = document.getElementById('contact-page-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const policyCheck = document.getElementById('contact-policy-check');
    if (policyCheck && !policyCheck.checked) {
      alert('Debe aceptar la Política de Tratamiento de Datos Personales para continuar.');
      return;
    }

    const name = document.getElementById('contact-name')?.value || '';
    const email = document.getElementById('contact-email')?.value || '';
    const phone = document.getElementById('contact-phone')?.value || '';
    const subjectSelect = document.getElementById('contact-subject');
    const subject = subjectSelect ? subjectSelect.options[subjectSelect.selectedIndex].text : 'Consulta General';
    const message = document.getElementById('contact-message')?.value || '';

    // Formatear mensaje estructurado corporativo
    const waText = 
      `*NUEVO MENSAJE DE CONTACTO WEB - JULMAR S.A.S.*\n\n` +
      `👤 *Cliente / Razón Social:* ${name}\n` +
      `📧 *Correo Corporativo:* ${email}\n` +
      `📱 *Teléfono / Celular:* ${phone}\n` +
      `📋 *Asunto:* ${subject}\n\n` +
      `💬 *Detalles del Requerimiento:*\n${message}`;

    const waUrl = `https://wa.me/573243259535?text=${encodeURIComponent(waText)}`;

    // Redirección inmediata a WhatsApp de ingeniería y ventas 24/7
    window.open(waUrl, '_blank');
  });
}
