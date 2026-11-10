/* ==========================================================================
   MEN SALON — Interactive Application Controller
   ========================================================================== */

(function () {
  "use strict";

  const DATA = window.MEN_SALON_DATA;
  const STORAGE_BOOKINGS = "mensalon_bookings_v1";
  const STORAGE_REVIEWS = "mensalon_reviews_v1";
  const STORAGE_COMMENTS = "mensalon_blog_comments_v1";

  function brandWordmarkMarkup() {
    return `
      <span class="brand-wordmark">
        <span class="brand-wordmark-mark" aria-hidden="true">✂</span>
        <span>
          <span class="brand-wordmark-text">Men Salon</span>
          <span class="brand-wordmark-sub">Est. 1998</span>
        </span>
      </span>
    `;
  }

  function currentFile() {
    const path = window.location.pathname.split("/").pop();
    return path || "index.html";
  }

  function isOnePage() {
    return currentFile() === "home-onepage.html";
  }

  /* ------------------------------------------------------------------------
     1. SHARED HEADER, OFFCANVAS, MARQUEE FOOTER, MODAL & LIGHTBOX INJECTION
     ------------------------------------------------------------------------ */
  function navLink(href, label) {
    const file = currentFile();
    const active = file === href ? "active" : "";
    return `<li><a href="${href}" class="${active}">${label}</a></li>`;
  }

  function injectHeader() {
    const mount = document.getElementById("siteHeaderMount");
    if (!mount) return;

    const onePage = isOnePage();
    const navItems = onePage
      ? `
        <li><a href="#home" class="active">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#team">Our Team</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#booking">Booking</a></li>
        <li><a href="blog.html">Blog</a></li>
      `
      : `
        ${navLink("index.html", "Home")}
        ${navLink("about-us.html", "About Us")}
        ${navLink("services.html", "Services")}
        ${navLink("reviews.html", "Reviews")}
        ${navLink("our-team.html", "Our Team")}
        ${navLink("gallery.html", "Gallery")}
        ${navLink("booking.html", "Booking")}
        ${navLink("blog.html", "Blog")}
      `;

    mount.innerHTML = `
      <header class="site-header" id="siteHeader">
        <div class="container header-inner">
          <a href="index.html" class="brand-logo" aria-label="Men Salon Home">
            ${brandWordmarkMarkup()}
          </a>

          <nav aria-label="Primary Navigation">
            <ul class="main-nav">
              ${navItems}
              <li class="has-megamenu" id="demoMegaWrap">
                <a href="#" id="demoMegaToggle">Demo <span aria-hidden="true">▾</span></a>
                <div class="megamenu-panel" role="menu">
                  <div class="mega-col">
                    <div class="mega-col-title">Main</div>
                    <a href="index.html">Multipage</a>
                    <a href="home-onepage.html">One Page</a>
                  </div>
                  <div class="mega-col">
                    <div class="mega-col-title">Slider</div>
                    <a href="home-slider.html">Multipage</a>
                    <a href="home-slider.html#about">One Page</a>
                  </div>
                  <div class="mega-col">
                    <div class="mega-col-title">Video BG</div>
                    <a href="home-video.html">Multipage</a>
                    <a href="home-video.html#about">One Page</a>
                  </div>
                  <div class="mega-col">
                    <div class="mega-col-title">Static Image</div>
                    <a href="home-image.html">Multipage</a>
                    <a href="home-image.html#about">One Page</a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <div class="header-actions">
            <button type="button" class="header-cta" data-open-booking="">Book Your Chair</button>
            <button type="button" class="hamburger-btn" id="openOffcanvasBtn" aria-label="Open menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <div class="offcanvas-backdrop" id="offcanvasBackdrop"></div>
      <aside class="offcanvas-drawer" id="offcanvasDrawer" aria-hidden="true">
        <div>
          <div class="offcanvas-top">
            ${brandWordmarkMarkup()}
            <button type="button" class="offcanvas-close" id="closeOffcanvasBtn" aria-label="Close menu">&times;</button>
          </div>
          <ul class="mobile-nav-list" style="margin-top:20px;">
            <li><a href="index.html">Home</a></li>
            <li><a href="about-us.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="reviews.html">Reviews</a></li>
            <li><a href="our-team.html">Our Team</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="booking.html">Booking</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li>
              <button type="button" class="mobile-demo-toggle" id="mobileDemoBtn">
                <span>Demo Layouts</span><span>+</span>
              </button>
              <div class="mobile-demo-sub" id="mobileDemoSub">
                <a href="index.html">Main Multipage</a>
                <a href="home-onepage.html">Main One Page</a>
                <a href="home-slider.html">Slider Demo</a>
                <a href="home-video.html">Video Demo</a>
                <a href="home-image.html">Image Demo</a>
              </div>
            </li>
          </ul>
        </div>

        <div class="offcanvas-info">
          <h4>Our Studio</h4>
          <p>${DATA.brand.addressLine1}, ${DATA.brand.addressLine2}</p>
          <p style="margin:6px 0;"><a href="${DATA.brand.phoneHref}" style="color:var(--primary);">${DATA.brand.phone}</a></p>
          <p style="font-size:13px;color:var(--text-faint);">Mon–Sat: 09:00 AM – 08:00 PM &middot; Sun: Closed</p>
          <button type="button" class="btn-gold" style="width:100%;margin-top:16px;" data-open-booking="">Book an Appointment</button>
        </div>
      </aside>
    `;

    // Scroll state
    const header = document.getElementById("siteHeader");
    const onScroll = () => {
      if (window.scrollY > 40) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Offcanvas events
    const backdrop = document.getElementById("offcanvasBackdrop");
    const drawer = document.getElementById("offcanvasDrawer");
    const openBtn = document.getElementById("openOffcanvasBtn");
    const closeBtn = document.getElementById("closeOffcanvasBtn");
    const mobileDemoBtn = document.getElementById("mobileDemoBtn");
    const mobileDemoSub = document.getElementById("mobileDemoSub");

    const toggleDrawer = (show) => {
      backdrop.classList.toggle("active", show);
      drawer.classList.toggle("active", show);
      drawer.setAttribute("aria-hidden", String(!show));
    };

    openBtn.addEventListener("click", () => toggleDrawer(true));
    closeBtn.addEventListener("click", () => toggleDrawer(false));
    backdrop.addEventListener("click", () => toggleDrawer(false));

    mobileDemoBtn.addEventListener("click", () => {
      mobileDemoSub.classList.toggle("open");
    });

    const demoToggle = document.getElementById("demoMegaToggle");
    if (demoToggle) {
      demoToggle.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("demoMegaWrap").classList.toggle("open");
      });
    }
  }

  function injectFooter() {
    const mount = document.getElementById("siteFooterMount");
    if (!mount) return;

    const marqueeItems = `
      <span class="marquee-text">Sharp Cuts</span><span class="marquee-sep">/</span>
      <span class="marquee-text dim">Clean Fades</span><span class="marquee-sep">/</span>
      <span class="marquee-text">Classic Shaves</span><span class="marquee-sep">/</span>
      <span class="marquee-text dim">Beard Styling</span><span class="marquee-sep">/</span>
      <span class="marquee-text">Luxury Grooming</span><span class="marquee-sep">/</span>
      <span class="marquee-text dim">Modern Barber</span><span class="marquee-sep">/</span>
    `;

    mount.innerHTML = `
      <div class="marquee-band" aria-hidden="true">
        <div class="marquee-track">
          <div class="marquee-group">${marqueeItems}</div>
          <div class="marquee-group">${marqueeItems}</div>
        </div>
      </div>

      <footer class="site-footer">
        <div class="container">
          <div class="footer-main">
            <div class="footer-col">
              <div style="margin-bottom:18px;">${brandWordmarkMarkup()}</div>
              <p style="max-width:320px;margin-bottom:18px;">${DATA.brand.tagline}</p>
              <p style="color:var(--text-light);font-weight:500;">${DATA.brand.addressLine1}, ${DATA.brand.addressLine2}</p>
              <p><a href="${DATA.brand.phoneHref}" style="color:var(--primary);">${DATA.brand.phone}</a></p>
            </div>

            <div class="footer-col">
              <h4>Explore</h4>
              <ul class="footer-links">
                <li><a href="about-us.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="our-team.html">Team</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="booking.html">Booking</a></li>
                <li><a href="blog.html">Journal &amp; Blog</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Demo Variants</h4>
              <ul class="footer-links">
                <li><a href="index.html">Main Multipage</a></li>
                <li><a href="home-onepage.html">One Page Scroll</a></li>
                <li><a href="home-slider.html">Full Slider Hero</a></li>
                <li><a href="home-video.html">Video Background Hero</a></li>
                <li><a href="home-image.html">Static Image Hero</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Follow Us</h4>
              <p style="margin-bottom:16px;font-size:14px;">Stay connected for daily cut inspirations, seasonal grooming notes, and chair availability.</p>
              <div class="social-row">
                <a href="#facebook" class="social-pill" aria-label="Facebook">f</a>
                <a href="#instagram" class="social-pill" aria-label="Instagram">ig</a>
                <a href="#x" class="social-pill" aria-label="X Twitter">𝕏</a>
                <a href="#youtube" class="social-pill" aria-label="YouTube">▶</a>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <p>${DATA.brand.copyright}</p>
            <p style="color:var(--text-faint);">Mon–Sat 09:00 AM – 08:00 PM &middot; Sunday Closed</p>
          </div>
        </div>
      </footer>

      <button type="button" class="sticky-book-btn" data-open-booking="">Book Your Chair</button>
      <button type="button" class="back-to-top" id="backToTopBtn" aria-label="Back to Top">↑</button>
    `;

    const backTop = document.getElementById("backToTopBtn");
    window.addEventListener("scroll", () => {
      backTop.classList.toggle("visible", window.scrollY > 400);
    }, { passive: true });
    backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ------------------------------------------------------------------------
     2. HERO TITLE SLIDER & FULLSCREEN BANNER SLIDER
     ------------------------------------------------------------------------ */
  function initHeroTitleSlider() {
    const track = document.getElementById("heroTitleTrack");
    if (!track) return;
    const slides = track.querySelectorAll(".ms-title-slider-slide");
    if (slides.length < 2) return;
    let idx = 0;
    setInterval(() => {
      idx = (idx + 1) % slides.length;
      const slideH = slides[0].offsetHeight;
      track.style.transform = `translateY(-${idx * slideH}px)`;
    }, 2800);
  }

  function initBannerSlider() {
    const slider = document.getElementById("heroBannerSlider");
    if (!slider) return;
    const slides = Array.from(slider.querySelectorAll(".hero-slide"));
    const dots = Array.from(slider.querySelectorAll(".slider-dot"));
    const prevBtn = slider.querySelector(".slider-arrow.prev");
    const nextBtn = slider.querySelector(".slider-arrow.next");
    let current = 0;
    let timer = null;

    function goTo(i) {
      current = (i + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle("active", k === current));
      dots.forEach((d, k) => d.classList.toggle("active", k === current));
    }

    function startAuto() {
      stopAuto();
      timer = setInterval(() => goTo(current + 1), 5500);
    }

    function stopAuto() {
      if (timer) clearInterval(timer);
    }

    if (prevBtn) prevBtn.addEventListener("click", () => { goTo(current - 1); startAuto(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { goTo(current + 1); startAuto(); });
    dots.forEach((dot, i) => dot.addEventListener("click", () => { goTo(i); startAuto(); }));

    startAuto();
  }

  /* ------------------------------------------------------------------------
     3. SCROLL REVEAL & PARALLAX
     ------------------------------------------------------------------------ */
  function initRevealAndParallax() {
    const reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && reveals.length) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      reveals.forEach((el) => io.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("in-view"));
    }

    const parallaxImgs = document.querySelectorAll(".parallax-frame img");
    if (parallaxImgs.length) {
      window.addEventListener("scroll", () => {
        parallaxImgs.forEach((img) => {
          const rect = img.parentElement.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < window.innerHeight) {
            const pct = (rect.top / window.innerHeight) * -28;
            img.style.transform = `translateY(${pct}px)`;
          }
        });
      }, { passive: true });
    }
  }

  /* ------------------------------------------------------------------------
     4. SERVICES RENDERING & CATEGORY FILTER
     ------------------------------------------------------------------------ */
  function renderServices(mountId, showFilters) {
    const mount = document.getElementById(mountId);
    if (!mount) return;

    let activeCat = "all";

    function draw() {
      const list = activeCat === "all"
        ? DATA.services
        : DATA.services.filter((s) => s.category === activeCat);

      const filterHtml = showFilters ? `
        <div class="service-filter-tabs">
          <button type="button" class="filter-tab-btn ${activeCat === "all" ? "active" : ""}" data-cat="all">All Services</button>
          <button type="button" class="filter-tab-btn ${activeCat === "haircuts" ? "active" : ""}" data-cat="haircuts">Haircuts</button>
          <button type="button" class="filter-tab-btn ${activeCat === "beard" ? "active" : ""}" data-cat="beard">Beard &amp; Shave</button>
          <button type="button" class="filter-tab-btn ${activeCat === "combos" ? "active" : ""}" data-cat="combos">Combos</button>
        </div>
      ` : "";

      mount.innerHTML = `
        ${filterHtml}
        <div class="services-grid">
          ${list.map((s) => `
            <article class="ms-service-item">
              <div class="ms-service-image">
                <img src="${s.image}" alt="${s.title}" loading="lazy" />
                <div class="ms-service-overlay"></div>
                <div class="gradient-edge-bottom"></div>
              </div>
              <div class="ms-service-content-area">
                <div class="ms-service-top-meta">
                  <span class="ms-service-number">${s.num}</span>
                  <span class="ms-service-price">${s.price}</span>
                </div>
                <h3 class="ms-service-title">${s.title}</h3>
                <div class="ms-service-duration">${s.duration}</div>
                <div class="ms-service-description">
                  <p>${s.description}</p>
                  <button type="button" class="service-book-inline" data-open-booking="${s.title}" style="background:none;border:none;cursor:pointer;">
                    Book This Service →
                  </button>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      `;

      if (showFilters) {
        mount.querySelectorAll(".filter-tab-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            activeCat = btn.getAttribute("data-cat");
            draw();
          });
        });
      }
    }

    draw();
  }

  /* ------------------------------------------------------------------------
     5. TEAM GRID RENDERING (DUAL-IMAGE HOVER SWAP)
     ------------------------------------------------------------------------ */
  function renderTeam(mountId) {
    const mount = document.getElementById(mountId);
    if (!mount) return;
    mount.innerHTML = `
      <div class="team-grid">
        ${DATA.team.map((member) => `
          <article class="ms-team-item">
            <div class="ms-team-image">
              <img src="${member.image}" alt="${member.name} — ${member.role}" class="ms-team-main-image" loading="lazy" />
              <img src="${member.hoverImage}" alt="${member.name} action portrait" class="ms-team-hover-image" loading="lazy" />
              <div class="ms-team-overlay"></div>
            </div>
            <div class="ms-team-content">
              <h3 class="ms-team-name">${member.name}</h3>
              <div class="ms-team-designation">${member.role}</div>
              <div class="ms-team-social">
                <a href="#instagram" aria-label="${member.name} Instagram">ig</a>
                <a href="#facebook" aria-label="${member.name} Facebook">f</a>
                <button type="button" title="Book with ${member.name}" data-open-booking="" data-barber="${member.name}">✂</button>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    `;
  }

  /* ------------------------------------------------------------------------
     6. TESTIMONIALS (HORIZONTAL SCROLL SHOWCASE + REVIEWS PAGE SUBMISSION)
     ------------------------------------------------------------------------ */
  function getAllReviews() {
    try {
      const custom = JSON.parse(localStorage.getItem(STORAGE_REVIEWS) || "[]");
      return [...custom, ...DATA.reviews];
    } catch {
      return DATA.reviews;
    }
  }

  function renderReviewsCard(r) {
    const stars = "★".repeat(r.rating) + "☆".repeat(5 - r.rating);
    return `
      <article class="ms-testi-card">
        <div>
          <div class="ms-quote-icon">“</div>
          <p class="ms-testi-desc">${r.quote}</p>
        </div>
        <div class="testi-author-info">
          <div class="testi-author-left">
            <img src="${r.avatar}" alt="${r.author}" class="autho-img" loading="lazy" />
            <div class="author-info">
              <div class="name">${r.author}</div>
              <div class="designation">${r.service}</div>
            </div>
          </div>
          <div class="testi-rating" aria-label="${r.rating} out of 5 stars">
            <span>${stars}</span>
            <span style="color:var(--text-light);font-weight:600;margin-left:4px;">${r.rating}.0</span>
          </div>
        </div>
      </article>
    `;
  }

  function initHorizontalReviews() {
    const track = document.getElementById("reviewsHorizontalTrack");
    if (!track) return;
    const all = getAllReviews();
    track.innerHTML = all.map(renderReviewsCard).join("");

    const prev = document.getElementById("revPrevBtn");
    const next = document.getElementById("revNextBtn");
    if (prev) prev.addEventListener("click", () => track.scrollBy({ left: -500, behavior: "smooth" }));
    if (next) next.addEventListener("click", () => track.scrollBy({ left: 500, behavior: "smooth" }));

    // Drag to scroll
    let isDown = false, startX = 0, scrollLeft = 0;
    track.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    window.addEventListener("mouseup", () => { isDown = false; });
    track.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      track.scrollLeft = scrollLeft - (x - startX) * 1.4;
    });
  }

  function initReviewsPage() {
    const grid = document.getElementById("reviewsPageGrid");
    const form = document.getElementById("leaveReviewForm");
    if (!grid) return;

    function refresh() {
      grid.innerHTML = getAllReviews().map(renderReviewsCard).join("");
    }
    refresh();

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = form.querySelector("#revName").value.trim();
        const service = form.querySelector("#revService").value;
        const rating = parseInt(form.querySelector("#revRating").value, 10) || 5;
        const quote = form.querySelector("#revQuote").value.trim();
        if (!name || !quote) return;

        const custom = JSON.parse(localStorage.getItem(STORAGE_REVIEWS) || "[]");
        custom.unshift({
          id: Date.now(),
          quote,
          author: name,
          service,
          rating,
          avatar: "assets/images/author-1.webp"
        });
        localStorage.setItem(STORAGE_REVIEWS, JSON.stringify(custom));
        form.reset();
        refresh();
        const msg = document.getElementById("reviewSubmitNotice");
        if (msg) {
          msg.style.display = "block";
          setTimeout(() => { msg.style.display = "none"; }, 4000);
        }
      });
    }
  }

  /* ------------------------------------------------------------------------
     7. MASONRY GALLERY & FULLSCREEN LIGHTBOX
     ------------------------------------------------------------------------ */
  function initGallery(mountId, showFilters) {
    const mount = document.getElementById(mountId);
    if (!mount) return;

    // Ensure shared lightbox exists once
    if (!document.getElementById("galleryLightbox")) {
      const lb = document.createElement("div");
      lb.id = "galleryLightbox";
      lb.className = "lightbox-modal";
      lb.innerHTML = `
        <button type="button" class="lightbox-close" id="lbCloseBtn" aria-label="Close lightbox">&times;</button>
        <button type="button" class="lightbox-prev" id="lbPrevBtn" aria-label="Previous image">&#10094;</button>
        <div class="lightbox-content">
          <img id="lbImage" src="" alt="" />
          <div class="lightbox-caption" id="lbCaption"></div>
        </div>
        <button type="button" class="lightbox-next" id="lbNextBtn" aria-label="Next image">&#10095;</button>
      `;
      document.body.appendChild(lb);
    }

    const lb = document.getElementById("galleryLightbox");
    const lbImg = document.getElementById("lbImage");
    const lbCap = document.getElementById("lbCaption");
    let currentList = DATA.gallery;
    let activeFilter = "all";
    let lbIndex = 0;

    function openLb(idx) {
      lbIndex = (idx + currentList.length) % currentList.length;
      const item = currentList[lbIndex];
      lbImg.src = item.src;
      lbImg.alt = item.title;
      lbCap.textContent = `${item.title} (${lbIndex + 1} / ${currentList.length})`;
      lb.classList.add("active");
    }

    function draw() {
      currentList = activeFilter === "all"
        ? (showFilters ? DATA.gallery : DATA.gallery.slice(0, 5))
        : DATA.gallery.filter((g) => g.category === activeFilter);

      const filterHtml = showFilters ? `
        <div class="service-filter-tabs" style="justify-content:center;">
          <button type="button" class="filter-tab-btn ${activeFilter === "all" ? "active" : ""}" data-gcat="all">All Work</button>
          <button type="button" class="filter-tab-btn ${activeFilter === "classic" ? "active" : ""}" data-gcat="classic">Classic Cuts</button>
          <button type="button" class="filter-tab-btn ${activeFilter === "fade" ? "active" : ""}" data-gcat="fade">Skin Fades</button>
          <button type="button" class="filter-tab-btn ${activeFilter === "beard" ? "active" : ""}" data-gcat="beard">Beard Craft</button>
          <button type="button" class="filter-tab-btn ${activeFilter === "shop" ? "active" : ""}" data-gcat="shop">Studio</button>
        </div>
      ` : "";

      mount.innerHTML = `
        ${filterHtml}
        <div class="masonry-grid">
          ${currentList.map((item, idx) => `
            <div class="masonry-item" data-lb-index="${idx}" tabindex="0" role="button" aria-label="View ${item.title}">
              <img src="${item.src}" alt="${item.title}" loading="lazy" />
              <div class="masonry-hover">
                <span class="masonry-view-badge">View</span>
                <span class="masonry-caption">${item.title}</span>
              </div>
            </div>
          `).join("")}
        </div>
      `;

      mount.querySelectorAll(".masonry-item").forEach((el) => {
        el.addEventListener("click", () => openLb(parseInt(el.getAttribute("data-lb-index"), 10)));
        el.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openLb(parseInt(el.getAttribute("data-lb-index"), 10));
          }
        });
      });

      if (showFilters) {
        mount.querySelectorAll("[data-gcat]").forEach((btn) => {
          btn.addEventListener("click", () => {
            activeFilter = btn.getAttribute("data-gcat");
            draw();
          });
        });
      }
    }

    document.getElementById("lbCloseBtn").onclick = () => lb.classList.remove("active");
    document.getElementById("lbPrevBtn").onclick = () => openLb(lbIndex - 1);
    document.getElementById("lbNextBtn").onclick = () => openLb(lbIndex + 1);
    lb.addEventListener("click", (e) => { if (e.target === lb) lb.classList.remove("active"); });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("active")) return;
      if (e.key === "Escape") lb.classList.remove("active");
      if (e.key === "ArrowLeft") openLb(lbIndex - 1);
      if (e.key === "ArrowRight") openLb(lbIndex + 1);
    });

    draw();
  }

  /* ------------------------------------------------------------------------
     8. BOOKING ENGINE + OPENING HOURS + QUICK BOOKING MODAL
     ------------------------------------------------------------------------ */
  function getBookings() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_BOOKINGS) || "[]");
    } catch {
      return [];
    }
  }

  function saveBooking(item) {
    const list = getBookings();
    list.unshift(item);
    localStorage.setItem(STORAGE_BOOKINGS, JSON.stringify(list));
  }

  function renderHoursTable(mountId) {
    const mount = document.getElementById(mountId);
    if (!mount) return;
    mount.innerHTML = `
      <div class="hours-card">
        <span class="eyebrow">Studio Schedule</span>
        <h3>Opening Hours</h3>
        ${DATA.hours.map((h) => `
          <div class="hours-row ${h.closed ? "closed" : ""}">
            <span>${h.day}</span>
            <span>${h.time}</span>
          </div>
        `).join("")}
        <div style="margin-top:26px;padding-top:20px;border-top:1px solid var(--border-subtle);font-size:14px;">
          <p style="color:var(--text-light);font-weight:600;">Walk-ins Welcome</p>
          <p>Located at ${DATA.brand.addressLine1}, ${DATA.brand.addressLine2}. Call <a href="${DATA.brand.phoneHref}" style="color:var(--primary);">${DATA.brand.phone}</a> for group or wedding grooming reservations.</p>
        </div>
      </div>
    `;
  }

  function bindBookingForm(container, preService, preBarber) {
    const form = container.querySelector("form");
    if (!form) return;

    const serviceSel = form.querySelector("[name='service']");
    const barberSel = form.querySelector("[name='barber']");
    const dateInput = form.querySelector("[name='date']");
    const timeInput = form.querySelector("[name='time']");
    const slotsWrap = form.querySelector(".time-slots-grid");
    const confirmBox = container.querySelector(".booking-confirmation");
    const savedListWrap = container.querySelector(".saved-bookings-list");

    // Populate services
    if (serviceSel && serviceSel.options.length <= 1) {
      DATA.services.forEach((s) => {
        const opt = document.createElement("option");
        opt.value = s.title;
        opt.textContent = `${s.title} (${s.price})`;
        serviceSel.appendChild(opt);
      });
      const washOpt = document.createElement("option");
      washOpt.value = "Hair Wash & Styling";
      washOpt.textContent = "Hair Wash & Styling ($22)";
      serviceSel.appendChild(washOpt);
    }

    if (preService && serviceSel) serviceSel.value = preService;
    if (preBarber && barberSel) barberSel.value = preBarber;

    // Default min date = today
    const today = new Date().toISOString().split("T")[0];
    if (dateInput) {
      dateInput.min = today;
      if (!dateInput.value) dateInput.value = today;
    }

    // Time slots
    if (slotsWrap && timeInput) {
      slotsWrap.innerHTML = DATA.timeSlots.map((slot, i) => `
        <button type="button" class="time-slot-btn ${i === 1 ? "selected" : ""}" data-slot="${slot}">${slot}</button>
      `).join("");
      timeInput.value = DATA.timeSlots[1];

      slotsWrap.querySelectorAll(".time-slot-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          slotsWrap.querySelectorAll(".time-slot-btn").forEach((b) => b.classList.remove("selected"));
          btn.classList.add("selected");
          timeInput.value = btn.getAttribute("data-slot");
        });
      });
    }

    function renderSaved() {
      if (!savedListWrap) return;
      const items = getBookings();
      if (!items.length) {
        savedListWrap.innerHTML = "";
        return;
      }
      savedListWrap.innerHTML = `
        <h4 style="font-size:18px;color:var(--primary);margin-bottom:6px;">Your Upcoming Reservations</h4>
        ${items.slice(0, 4).map((b) => `
          <div class="saved-booking-item">
            <div>
              <strong style="color:var(--text-light);">${b.service}</strong> with ${b.barber || "Any Barber"}<br/>
              <span style="color:var(--text-muted);">${b.date} at ${b.time} &middot; Ref: ${b.ref}</span>
            </div>
            <button type="button" class="filter-tab-btn" style="padding:6px 12px;font-size:11px;" data-cancel-ref="${b.ref}">Cancel</button>
          </div>
        `).join("")}
      `;
      savedListWrap.querySelectorAll("[data-cancel-ref]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const ref = btn.getAttribute("data-cancel-ref");
          const filtered = getBookings().filter((x) => x.ref !== ref);
          localStorage.setItem(STORAGE_BOOKINGS, JSON.stringify(filtered));
          renderSaved();
        });
      });
    }

    renderSaved();

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Honeypot check
      const hp = form.querySelector("[name='website_hp']");
      if (hp && hp.value) return;

      const name = form.querySelector("[name='name']").value.trim();
      const email = form.querySelector("[name='email']").value.trim();
      const phone = form.querySelector("[name='phone']").value.trim();
      const service = serviceSel ? serviceSel.value : "Classic Haircut";
      const barber = barberSel ? barberSel.value : "Any Master Barber";
      const dateVal = dateInput ? dateInput.value : today;
      const timeVal = timeInput ? timeInput.value : "10:00 AM";
      const notes = form.querySelector("[name='notes']") ? form.querySelector("[name='notes']").value.trim() : "";

      if (!name || !email || !phone || !service) return;

      // Sunday Closed check
      const picked = new Date(dateVal + "T00:00:00");
      if (picked.getDay() === 0) {
        alert("Our studio is closed on Sundays. Please select Monday through Saturday.");
        return;
      }

      const ref = "MSL-" + Math.floor(1000 + Math.random() * 9000);
      saveBooking({ ref, name, email, phone, service, barber, date: dateVal, time: timeVal, notes });

      if (confirmBox) {
        confirmBox.innerHTML = `
          <strong style="color:var(--primary);font-size:16px;">Chair Reserved Successfully!</strong>
          <p style="margin-top:6px;font-size:14.5px;">Thank you, <strong>${name}</strong>. Your <strong>${service}</strong> with <strong>${barber}</strong> is confirmed for <strong>${dateVal}</strong> at <strong>${timeVal}</strong>. Reference ID: <strong>${ref}</strong>.</p>
        `;
        confirmBox.classList.add("visible");
      }
      form.reset();
      if (dateInput) dateInput.value = today;
      renderSaved();
    });
  }

  function bookingFormMarkup(prefix) {
    return `
      <form id="${prefix}Form" novalidate>
        <input type="text" name="website_hp" style="display:none;" tabindex="-1" autocomplete="off" />
        <div class="form-grid-2">
          <div class="form-group">
            <label for="${prefix}Name">Your Name</label>
            <input id="${prefix}Name" name="name" type="text" class="form-control" placeholder="e.g. Oliver Bennett" required />
          </div>
          <div class="form-group">
            <label for="${prefix}Email">Email Address</label>
            <input id="${prefix}Email" name="email" type="email" class="form-control" placeholder="you@example.com" required />
          </div>
        </div>
        <div class="form-grid-2">
          <div class="form-group">
            <label for="${prefix}Phone">Phone Number</label>
            <input id="${prefix}Phone" name="phone" type="tel" class="form-control" placeholder="+1 (555) 123-4567" required />
          </div>
          <div class="form-group">
            <label for="${prefix}Service">Select Service</label>
            <select id="${prefix}Service" name="service" class="form-control" required>
              <option value="">Choose a Service...</option>
            </select>
          </div>
        </div>
        <div class="form-grid-2">
          <div class="form-group">
            <label for="${prefix}Barber">Preferred Barber</label>
            <select id="${prefix}Barber" name="barber" class="form-control">
              <option value="Any Master Barber">Any Master Barber</option>
              <option value="Sam">Sam — Master Barber</option>
              <option value="Leo">Leo — Fade Specialist</option>
              <option value="Max">Max — Beard Grooming Expert</option>
            </select>
          </div>
          <div class="form-group">
            <label for="${prefix}Date">Preferred Date</label>
            <input id="${prefix}Date" name="date" type="date" class="form-control" required />
          </div>
        </div>
        <div class="form-group">
          <label>Select Time Slot</label>
          <input type="hidden" name="time" value="10:00 AM" />
          <div class="time-slots-grid"></div>
        </div>
        <div class="form-group">
          <label for="${prefix}Notes">Special Requests (Optional)</label>
          <textarea id="${prefix}Notes" name="notes" rows="2" class="form-control" placeholder="Preferred fade height, beverage, or beard style notes..."></textarea>
        </div>
        <button type="submit" class="btn-gold" style="width:100%;">Book Appointment</button>
      </form>
      <div class="booking-confirmation" role="status"></div>
      <div class="saved-bookings-list"></div>
    `;
  }

  function initInlineBooking() {
    const mount = document.getElementById("inlineBookingCard");
    if (!mount) return;
    mount.innerHTML = bookingFormMarkup("inlineBooking");
    bindBookingForm(mount);
    renderHoursTable("openingHoursMount");
  }

  function initQuickBookingModal() {
    const modal = document.createElement("div");
    modal.id = "quickBookingModal";
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="modal-card">
        <button type="button" class="modal-close" id="closeBookingModal" aria-label="Close booking modal">&times;</button>
        <span class="eyebrow">Instant Reservation</span>
        <h3 style="font-size:32px;margin-bottom:8px;">Book Your Chair</h3>
        <p style="margin-bottom:22px;font-size:14.5px;">Reserve your tailored grooming session at Men Salon Studio.</p>
        <div id="modalBookingMount"></div>
      </div>
    `;
    document.body.appendChild(modal);

    const mount = document.getElementById("modalBookingMount");
    mount.innerHTML = bookingFormMarkup("modalBooking");
    bindBookingForm(mount);

    document.getElementById("closeBookingModal").addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("active"); });

    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-open-booking]");
      if (!trigger) return;
      e.preventDefault();
      const srv = trigger.getAttribute("data-open-booking");
      const brb = trigger.getAttribute("data-barber");
      if (srv) {
        const sSel = mount.querySelector("[name='service']");
        if (sSel) sSel.value = srv;
      }
      if (brb) {
        const bSel = mount.querySelector("[name='barber']");
        if (bSel) bSel.value = brb;
      }
      modal.classList.add("active");
    });
  }

  /* ------------------------------------------------------------------------
     9. BLOG ARCHIVE (SEARCH + CATEGORY + PAGINATION) & SINGLE POST
     ------------------------------------------------------------------------ */
  function initBlogArchive() {
    const mount = document.getElementById("blogArchiveMount");
    if (!mount) return;

    let activeCat = "All";
    let query = "";
    let page = 1;
    const perPage = 4;

    function draw() {
      const filtered = DATA.blogPosts.filter((p) => {
        const matchCat = activeCat === "All" || p.category === activeCat;
        const matchQ = !query || p.title.toLowerCase().includes(query) || p.excerpt.toLowerCase().includes(query);
        return matchCat && matchQ;
      });
      const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
      if (page > totalPages) page = 1;
      const slice = filtered.slice((page - 1) * perPage, page * perPage);

      const grid = document.getElementById("blogCardsGrid");
      const pag = document.getElementById("blogPagination");

      grid.innerHTML = slice.length
        ? slice.map((p) => `
          <article class="blog-card">
            <a href="blog-single.html?id=${p.id}" class="blog-card-img">
              <img src="${p.image}" alt="${p.title}" loading="lazy" />
              <div class="blog-date-badge">
                <h4>${p.day}</h4>
                <span>${p.month}</span>
              </div>
            </a>
            <div class="blog-card-body">
              <div>
                <span class="blog-cat-pill">${p.category} &middot; ${p.readTime}</span>
                <h3><a href="blog-single.html?id=${p.id}">${p.title}</a></h3>
                <p style="margin-bottom:18px;">${p.excerpt}</p>
              </div>
              <a href="blog-single.html?id=${p.id}" class="advance-btn">Read Article <span class="adv-icon">→</span></a>
            </div>
          </article>
        `).join("")
        : `<p style="grid-column:1/-1;text-align:center;padding:40px 0;">No articles matched your search.</p>`;

      pag.innerHTML = Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => `
        <button type="button" class="page-btn ${n === page ? "active" : ""}" data-page="${n}">${n}</button>
      `).join("") + (page < totalPages ? `<button type="button" class="page-btn" data-page="${page + 1}">»</button>` : "");

      pag.querySelectorAll("[data-page]").forEach((btn) => {
        btn.addEventListener("click", () => {
          page = parseInt(btn.getAttribute("data-page"), 10);
          draw();
          window.scrollTo({ top: 320, behavior: "smooth" });
        });
      });
    }

    mount.innerHTML = `
      <div class="blog-toolbar">
        <div class="service-filter-tabs" style="margin-bottom:0;">
          <button type="button" class="filter-tab-btn active" data-bcat="All">All</button>
          <button type="button" class="filter-tab-btn" data-bcat="Barber Tips">Barber Tips</button>
          <button type="button" class="filter-tab-btn" data-bcat="Grooming">Grooming</button>
          <button type="button" class="filter-tab-btn" data-bcat="Hair Care">Hair Care</button>
        </div>
        <input type="search" id="blogSearchInput" class="blog-search-input" placeholder="Search grooming articles..." />
      </div>
      <div class="blog-grid" id="blogCardsGrid"></div>
      <div class="pagination-bar" id="blogPagination"></div>
    `;

    mount.querySelectorAll("[data-bcat]").forEach((btn) => {
      btn.addEventListener("click", () => {
        mount.querySelectorAll("[data-bcat]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeCat = btn.getAttribute("data-bcat");
        page = 1;
        draw();
      });
    });

    document.getElementById("blogSearchInput").addEventListener("input", (e) => {
      query = e.target.value.trim().toLowerCase();
      page = 1;
      draw();
    });

    draw();
  }

  function initBlogSingle() {
    const mount = document.getElementById("blogSingleMount");
    if (!mount) return;
    const params = new URLSearchParams(window.location.search);
    const postId = params.get("id");
    const post = DATA.blogPosts.find((p) => p.id === postId) || DATA.blogPosts[0];

    const titleHero = document.getElementById("singlePostHeroTitle");
    if (titleHero) titleHero.textContent = post.title;
    document.title = `${post.title} — Men Salon`;

    const allComments = JSON.parse(localStorage.getItem(STORAGE_COMMENTS) || "{}");
    const postComments = allComments[post.id] || [
      { author: "Daniel Cooper", text: "Great insight! Switching to a 3-week trim schedule made a night-and-day difference.", date: "Sep 02, 2026" }
    ];

    function renderComments() {
      const list = document.getElementById("commentsList");
      if (!list) return;
      list.innerHTML = postComments.map((c) => `
        <div style="padding:18px;background:var(--bg-dark-2);border:1px solid var(--border-subtle);margin-bottom:12px;">
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
            <strong style="color:var(--text-light);">${c.author}</strong>
            <span style="font-size:12.5px;color:var(--primary);">${c.date}</span>
          </div>
          <p style="font-size:14.5px;">${c.text}</p>
        </div>
      `).join("");
    }

    mount.innerHTML = `
      <article class="single-article">
        <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-bottom:18px;font-size:13.5px;color:var(--primary);">
          <span>${post.category}</span> &middot;
          <span>${post.day} ${post.month} 2026</span> &middot;
          <span>By ${post.author}</span> &middot;
          <span>${post.readTime}</span>
        </div>
        <img src="${post.image}" alt="${post.title}" class="single-article-cover" />
        <div class="single-article-prose">
          ${post.body.map((p) => `<p>${p}</p>`).join("")}
          <blockquote>“${post.quote}”</blockquote>
          <p>Ready to experience tailored craftsmanship in person? Reserve your chair with our master barbers at 123 Barber Street or book directly online.</p>
        </div>

        <div style="margin-top:52px;padding-top:36px;border-top:1px solid var(--border-subtle);">
          <h3 style="font-size:28px;margin-bottom:20px;">Reader Comments</h3>
          <div id="commentsList"></div>
          <form id="commentForm" style="margin-top:24px;background:var(--bg-dark-2);padding:26px;border:1px solid var(--border-subtle);">
            <h4 style="font-size:20px;margin-bottom:14px;">Leave a Comment</h4>
            <div class="form-group">
              <label for="commentAuthor">Your Name</label>
              <input id="commentAuthor" type="text" class="form-control" required placeholder="Your Name" />
            </div>
            <div class="form-group">
              <label for="commentText">Comment</label>
              <textarea id="commentText" rows="3" class="form-control" required placeholder="Share your grooming thoughts..."></textarea>
            </div>
            <button type="submit" class="btn-gold">Post Comment</button>
          </form>
        </div>
      </article>
    `;

    renderComments();

    document.getElementById("commentForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const author = document.getElementById("commentAuthor").value.trim();
      const text = document.getElementById("commentText").value.trim();
      if (!author || !text) return;
      postComments.unshift({ author, text, date: "Just now" });
      allComments[post.id] = postComments;
      localStorage.setItem(STORAGE_COMMENTS, JSON.stringify(allComments));
      e.target.reset();
      renderComments();
    });
  }

  /* ------------------------------------------------------------------------
     BOOT ALL MODULES
     ------------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    injectHeader();
    injectFooter();
    initHeroTitleSlider();
    initBannerSlider();
    initRevealAndParallax();
    renderServices("servicesHomeMount", false);
    renderServices("servicesPageMount", true);
    renderTeam("teamGridMount");
    initHorizontalReviews();
    initReviewsPage();
    initGallery("galleryHomeMount", false);
    initGallery("galleryPageMount", true);
    initInlineBooking();
    initQuickBookingModal();
    initBlogArchive();
    initBlogSingle();
  });
})();
