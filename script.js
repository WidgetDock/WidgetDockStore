// -- Global variables for widget data --
    let widgetData = [];
    let categoriesList = [];

    // Load widget data from JSON file
    async function loadWidgetData() {
      try {
        const response = await fetch('widgets.json');
        const data = await response.json();
        widgetData = data.widgets;
        categoriesList = data.categories;
        return true;
      } catch (error) {
        console.error('Error loading widget data:', error);
        return false;
      }
    }

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
    window.onload = async function(){
      // Load widget data first
      const dataLoaded = await loadWidgetData();
      if (!dataLoaded) {
        console.error('Failed to load widget data');
        return;
      }
      
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