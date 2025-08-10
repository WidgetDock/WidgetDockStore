// -- Demo data for widgets --
    const widgetData = [
      {
        name: "Modern Music",
        desc: "Elegant music controller for Apple Music & Spotify in your Dock. Album artwork, like/shuffle, current song, and more.",
        tags: ["Music", "Dock", "Now Playing"],
        icon: '<i class="fa fa-music"></i>',
        color: 'linear-gradient(120deg,#7e57fe 48%,#3ecfff 151%)',
        download: "https://github.com/WidgetDock/music-widget",
        screenshot: "https://i.imgur.com/dHBYvcl.png",
        featured: true,
        category: "Music",
        locked: true
      },
      {
        name: "Weather Glass",
        desc: "Beautiful, glassy Dock widget for live Weather & forecasts. Retina-ready, with dynamic backgrounds.",
        tags: ["Weather", "Dock"],
        icon: '<i class="fa fa-cloud-sun"></i>',
        color: 'linear-gradient(120deg,#6be8fa 34%,#3396ff 140%)',
        download: "https://github.com/WidgetDock/weather-glass",
        screenshot: "https://i.imgur.com/GLCv53v.png",
        featured: true,
        category: "Weather",
        locked: true
      },
      {
        name: "Calendar Peek",
        desc: "Pops up your iCloud and Google calendar events, days, and invites in a native macOS look.",
        tags: ["Calendar", "Productivity"],
        icon: '<i class="fa fa-calendar-alt"></i>',
        color: 'linear-gradient(120deg,#8df3c9 12%,#417acf 138%)',
        download: "https://github.com/WidgetDock/calendar-peek",
        screenshot: "https://i.imgur.com/31dkRD3.png",
        featured: true,
        category: "Calendar",
        locked: true
      },
      {
        name: "Battery Status+",
        desc: "Monitor MacBook battery health and charging status from your Dock, with real-time percentage and notifications.",
        tags: ["System", "Status"],
        icon: '<i class="fa fa-battery-three-quarters"></i>',
        color: 'linear-gradient(120deg,#fcfe6b 12%,#6bb96e 128%)',
        download: "https://github.com/WidgetDock/battery-status",
        screenshot: "https://i.imgur.com/XKQOV4J.png",
        featured: true,
        category: "System",
        locked: true
      },
      {
        name: "Dock Spaces",
        desc: "Quickly jump between Mission Control spaces from your Dock. See all your desktops and windows.",
        tags: ["Dock", "Productivity"],
        icon: '<i class="fa fa-th-large"></i>',
        color: 'linear-gradient(120deg,#9ecbfa 39%,#1affcf 191%)',
        download: "https://github.com/WidgetDock/spaces-widget",
        screenshot: "https://i.imgur.com/GHgSmEY.png",
        featured: true,
        category: "Dock",
        locked: true
      },
      {
        name: "System Monitor",
        desc: "Live CPU, RAM, and system stats — gorgeous animated graphs right on your Dock.",
        tags: ["System", "Utilities"],
        icon: '<i class="fa fa-microchip"></i>',
        color: 'linear-gradient(120deg,#ffda5b 35%,#34ffe4 172%)',
        download: "https://github.com/WidgetDock/system-monitor",
        screenshot: "https://i.imgur.com/G3vszTW.png",
        featured: true,
        category: "System",
        locked: true
      },
      {
        name: "World Clocks",
        desc: "Display multiple clocks from around the globe in modern macOS style.",
        tags: ["Utilities", "Productivity"],
        icon: '<i class="fa fa-clock"></i>',
        color: 'linear-gradient(120deg,#badcf9 37%,#13e3fb 186%)',
        download: "https://github.com/WidgetDock/world-clocks",
        screenshot: "https://i.imgur.com/V9Phh0V.png",
        featured: false,
        category: "Utilities",
        locked: true
      },
      {
        name: "Pomodoro Focus",
        desc: "A Pomodoro timer with break alerts and task tracking — for deep work right from your Dock.",
        tags: ["Productivity"],
        icon: '<i class="fa fa-hourglass-half"></i>',
        color: 'linear-gradient(120deg,#f5baff 6%,#9083ff 124%)',
        download: "https://github.com/WidgetDock/pomodoro-focus",
        screenshot: "https://i.imgur.com/eMGxU76.png",
        featured: false,
        category: "Productivity",
        locked: true
      },
      {
        name: "Bluetooth Manager",
        desc: "One-tap manage and connect devices from your Dock; battery info for AirPods and more.",
        tags: ["Utilities", "System"],
        icon: '<i class="fa fa-bluetooth-b"></i>',
        color: 'linear-gradient(120deg,#a7e7ff 62%,#446efa 172%)',
        download: "https://github.com/WidgetDock/bluetooth-manager",
        screenshot: "https://i.imgur.com/9HHXWH0.png",
        featured: false,
        category: "Utilities",
        locked: true
      },
      {
        name: "Now Playing Mini",
        desc: "Minimalist music info, works with any media app, super compact.",
        tags: ["Music", "Dock"],
        icon: '<i class="fa fa-headphones"></i>',
        color: 'linear-gradient(120deg,#ffa7ab 10%,#7adfe2 161%)',
        download: "https://github.com/WidgetDock/now-playing-mini",
        screenshot: "https://i.imgur.com/ELrcEZc.png",
        featured: false,
        category: "Music",
        locked: true
      },
      {
        name: "Dark Mode Switch",
        desc: "Switch macOS dark/light modes directly from the Dock with gorgeous animated toggle.",
        tags: ["Utilities", "Dock"],
        icon: '<i class="fa fa-adjust"></i>',
        color: 'linear-gradient(120deg,#181928 10%,#3bfadb 186%)',
        download: "https://github.com/WidgetDock/darkmode-toggle/releases/tag/v1.0",
        screenshot: "https://i.imgur.com/ttml7U0.png",
        featured: false,
        category: "Utilities",
        locked: false
      },
      {
        name: "Now Charging Animation",
        desc: "Animated charging effects for battery status, inspired by iOS charging lock-screen.",
        tags: ["Status", "System"],
        icon: '<i class="fa fa-bolt"></i>',
        color: 'linear-gradient(120deg,#fafe65 26%,#56f6bf 91%)',
        download: "https://github.com/WidgetDock/charging-animation",
        screenshot: "https://i.imgur.com/TwLVeXk.png",
        featured: false,
        category: "Status",
        locked: true
      },
    ];

    const categoriesList = ["All", "Dock", "System", "Utilities", "Productivity", "Weather", "Music", "Calendar", "Status"];

    // --- Featured Widgets Section ---
    function createWidgetCard(widget, allowModal = true) {
        const isLocked = widget.locked || widget.ready === false;
        return `
        <div class="widget-card${(allowModal && !isLocked) ? ' widget-card-selectable' : ''} ${isLocked ? 'widget-card--locked' : ''}" tabindex="0" style="--card-accent:${widget.color}" data-name="${widget.name.replace(/"/g,'&quot;')}">
            <div class="widget-card__icon" style="background:${widget.color}">${widget.icon}</div>
            <div class="widget-card__title">${widget.name}${isLocked ? ' <span style="font-size:0.7em;opacity:0.6">(Coming Soon)</span>' : ''}</div>
            <div class="widget-card__desc">${widget.desc}</div>
            <div class="widget-card__tags">
            ${widget.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            ${isLocked ? '<div class="btn btn--glass widget-card__btn btn--disabled"><i class="fa fa-lock"></i> Coming Soon</div>' : `<a target="_blank" href="${widget.download}" class="btn btn--glass widget-card__btn"><i class="fa fa-download"></i> Download</a>`}
        </div>
        `;

    }
    function renderFeaturedWidgets(){
      let featured = widgetData.filter(w=>w.featured);
      document.getElementById("featuredWidgets").innerHTML = featured.map(w=>createWidgetCard(w,true)).join('');
    }

    // --- Categories section ---
    function renderCategoryFilters(selected) {
      const filters = categoriesList.map(cat => 
        `<button class="filter-btn${selected==cat ? " selected" : ""}" data-cat="${cat}">${cat}</button>`
      ).join('');
      document.getElementById("categoryFilters").innerHTML = filters;
    }
    function renderCategoryWidgets(selectedCat){
      let filtered = selectedCat==="All" ? widgetData : widgetData.filter(w=>w.category===selectedCat);
      document.getElementById("categoryWidgets").innerHTML = filtered.length ?
        filtered.map(w=>createWidgetCard(w,true)).join("") :
        `<div style="color:#abefde;font-size:1.17em;font-weight:600;grid-column:1/-1;padding: 35px 0;text-align:center;opacity:0.78;">No widgets found for "${selectedCat}"</div>`;
    }


    // --- MODAL Popup for widget card info ----
    function showWidgetModal(widgetName){
      let widget = widgetData.find(w=>w.name===widgetName);
      if(!widget) return;
      
      const isLocked = widget.locked || widget.ready === false;
      
      document.getElementById("modalWidgetTitle").textContent = widget.name;
      document.getElementById("modalWidgetDesc").textContent = widget.desc;
      document.getElementById("modalWidgetExtra").innerHTML = `
        <div class="widget-card__tags" style="margin-bottom:15px">
          ${widget.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        ${isLocked ? 
          '<div class="btn btn--glass btn--disabled"><i class="fa fa-lock"></i> Coming Soon</div>' : 
          `<a href="${widget.download}" class="btn"><i class="fa fa-download"></i> Download</a>`
        }
      `;
      document.getElementById("widgetModal").classList.add("open");
    }
    document.getElementById("widgetModalClose").onclick = ()=>{
      document.getElementById("widgetModal").classList.remove("open");
    };
    document.getElementById("widgetModal").onclick = (e)=>{
      if(e.target===document.getElementById("widgetModal")){
        document.getElementById("widgetModal").classList.remove("open");
      }
    }
    // click widget card to open modal
    function enableWidgetCardModals(){
      document.querySelectorAll('.widget-card-selectable').forEach(card=>{
        card.onclick = e=>{
          // Only open modal for non-link clicks
          if((e.target.tagName==="A" && e.target.classList.contains("btn")) || e.target.classList.contains("tag")) return;
          showWidgetModal(card.getAttribute("data-name"));
        }
        card.onkeypress = e=>{
          if(e.key==="Enter" || e.key===" ") {
            showWidgetModal(card.getAttribute("data-name"));
            e.preventDefault();
          }
        }
      });
    }
    // --- NAV Smooth scroll & mobile burger ---
    // Navbar sticky on scroll
    window.addEventListener('scroll',()=>{
      let nav = document.getElementById("nav");
      if(window.scrollY>28) nav.classList.add("sticky");
      else nav.classList.remove("sticky");
    });
    // Nav link highlights
    let navLinks = document.querySelectorAll(".nav__links a");
    navLinks.forEach(link=>{
      link.onclick = function(){
        document.querySelectorAll(".nav__links a").forEach(l=>l.classList.remove("active"));
        link.classList.add("active");
        // close burger nav on mobile
        document.getElementById("navLinks").classList.remove("open");
      };
    });
    // Smooth scroll (for fallback old browsers)
    document.querySelectorAll('.nav__links a[href^="#"]').forEach(anchor=>{
      anchor.onclick = function(e){
        let t = document.querySelector(this.getAttribute('href'));
        if(t){
          e.preventDefault();
          t.scrollIntoView({behavior:'smooth'});
        }
      }
    });
    // Nav burger
    document.getElementById("navBurger").onclick = ()=>{
      document.getElementById("navLinks").classList.toggle("open");
    };

    // -- Scroll-in animations --
    function fadeinObserve(){
      const observer = new IntersectionObserver(function(entries){
        entries.forEach(e=>{
          if(e.isIntersecting) e.target.classList.add("visible");
        });
      },{threshold:.12});
      Array.from(document.querySelectorAll('.fadein')).forEach(el=>observer.observe(el));
    }

    // ---- Hero background animation ----
    function heroBGAnim(){
      let canvas = document.getElementById("heroBG");
      let ctx = canvas.getContext('2d');
      function resize(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      resize();
      window.addEventListener('resize',resize);

      // particles as glassy blur orbs
      const orbs = [];
      for(let i=0;i<18;i++){
        let r = 65+40*Math.random();
        orbs.push({
          x: Math.random()*canvas.width,
          y: Math.random()*canvas.height,
          r: r,
          v: 0.07+Math.random()*0.08,
          dx: (Math.random()-.5)*.14,
          dy: (Math.random()-.5)*.13,
          c: i%2==0?'rgba(109,252,244,.12)':'rgba(44,183,246,.11)',
        });
      }
      function loop(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        for(let i=0;i<orbs.length;i++){
          let o = orbs[i];
          o.x += Math.sin(o.y/77+.12*i)*o.dx+Math.cos(Date.now()*.00013+i)*.17;
          o.y += Math.cos(o.x/61-.21*i)*o.dy+Math.sin(Date.now()*.0002+.13*i)*.15;
          // wrap
          if(o.x<-o.r) o.x=canvas.width+o.r;
          if(o.x>canvas.width+o.r) o.x=-o.r;
          if(o.y<-o.r) o.y=canvas.height+o.r;
          if(o.y>canvas.height+o.r) o.y=-o.r;
          let grad = ctx.createRadialGradient(o.x,o.y,o.r*0.09,o.x,o.y,o.r);
          grad.addColorStop(0,o.c);
          grad.addColorStop(.6,"rgba(31,78,113,0.03)");
          grad.addColorStop(1,"rgba(31,34,54,0.01)");
          ctx.beginPath();
          ctx.arc(o.x,o.y,o.r,0,2*Math.PI);
          ctx.fillStyle = grad;
          ctx.fill();
        }
        requestAnimationFrame(loop);
      }
      loop();
    }

    // -- INIT --
    window.onload = function(){
      renderFeaturedWidgets();
      renderCategoryFilters("All");
      renderCategoryWidgets("All");
      fadeinObserve();
      heroBGAnim();
      enableWidgetCardModals();

      // -- category filter event listeners
      document.getElementById("categoryFilters").onclick = function(e){
        if(e.target.classList.contains("filter-btn")){
          let selected = e.target.getAttribute("data-cat");
          renderCategoryFilters(selected);
          renderCategoryWidgets(selected);
          setTimeout(enableWidgetCardModals,16);
        }
      };

      // keyboard hide modal ESC
      document.body.addEventListener("keydown", function(evt){
        if(evt.key==="Escape"){ document.getElementById("widgetModal").classList.remove("open"); }
      });
    };