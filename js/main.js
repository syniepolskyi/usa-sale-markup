const BREAKPOINTS = {
  wdesktop: 1199,
  tablet: 767
};

$(".popular-categories__slider").lightSlider({
    controls: false,
    item: 6,
    loop: true,
    responsive: [
      {
        breakpoint: BREAKPOINTS.wdesktop,
        settings: {
          item: 3,
        },
      },
      {
        breakpoint: BREAKPOINTS.tablet,
        settings: {
          item: 2,
        },
      },
    ],
  });
  $(".shoes-list-slider").lightSlider({
    controls: false,
    item: 6,
    loop: true,
    responsive: [
    {
        breakpoint: BREAKPOINTS.wdesktop,
        settings: {
          item: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          item: 3
        }
      },
    ]
  });
  $(".bags-list-slider").lightSlider({
    controls: false,
    item: 6,
    loop: true,
    responsive: [
    {
        breakpoint: BREAKPOINTS.wdesktop,
        settings: {
          item: 4
        }
      },
      {
        breakpoint: BREAKPOINTS.tablet,
        settings: {
          item: 3
        }
      },
    ]
  });
  $(".brands-list-slider").lightSlider({
    controls: false,
    item: 6,
    loop: true,
    responsive: [
      {
        breakpoint: BREAKPOINTS.wdesktop,
        settings: {
          item: 5
        }
      },
      {
        breakpoint: BREAKPOINTS.tablet,
        settings: {
          item: 3
        }
      }
    ]
  });

document
.querySelector(".header-search-clear-button")
.addEventListener("click", (ev) => {
  document.querySelector(".header-search-input").value = "";
});

document.getElementById("toggle_contacts2")
.addEventListener("click", (ev) =>{
  ev.preventDefault();
  document.querySelector(".contacts-dropdown").classList.toggle("shown");
});

document.getElementById("toggle_contacts")
.addEventListener("click", (ev) =>{
  ev.preventDefault();
  document.querySelector(".contacts-dropdown").classList.toggle("shown");
});

document.querySelector(".header-icon-link")
.addEventListener("click", (ev) => {
  ev.preventDefault();
  const sections = document.querySelectorAll("section.init-section, footer, div.bottom-menu");
  const mainMenuElem = document.querySelector("section.main-menu");
  
  let toggle = mainMenuElem.classList.contains("hidden");
  if(toggle){
    [...sections].forEach(el => {
      el.classList.toggle("main-menu-initial-placed", toggle);
    });
    mainMenuElem.classList.toggle("hidden", !toggle);
    setTimeout(() => {
      mainMenuElem.classList.toggle("main-menu-initial-placed", !toggle);
      [...sections].forEach(el => {
        el.classList.toggle("hidden", toggle);
      });
    }, 100);
    return false;
  }

  mainMenuElem.classList.toggle("main-menu-initial-placed", !toggle);
  setTimeout(() => {
    [...sections].forEach(el => {
      el.classList.toggle("main-menu-initial-placed", toggle);
    });
    mainMenuElem.classList.toggle("hidden", !toggle);
    [...sections].forEach(el => {
      el.classList.toggle("hidden", toggle);
    });
  }, 100);

});


const mainMenuItemOnClick = (ev) => {
  ev.preventDefault();
  const mainMenuElem = document.querySelector("section.main-menu");
  const mainSubMenuElem = document.querySelector("section.main-sub-menu");
  let toggle = mainSubMenuElem.classList.contains("hidden");

  if(toggle){
    mainMenuElem.classList.toggle("main-menu-initial-placed", toggle);
    mainMenuElem.classList.toggle("hidden", toggle);
    mainSubMenuElem.classList.toggle("hidden", !toggle);
    setTimeout(() => {
      mainSubMenuElem.classList.toggle("main-menu-initial-placed", !toggle);
    },100);
    return ;
  }

  mainMenuElem.classList.toggle("hidden", toggle);
  mainSubMenuElem.classList.toggle("main-menu-initial-placed", !toggle);
  setTimeout(() => {
    mainMenuElem.classList.toggle("main-menu-initial-placed", toggle);
    mainSubMenuElem.classList.toggle("hidden", !toggle);
  },100);
  
};
const mainMenuItems = document.querySelectorAll("li.main-menu-item a");
[...mainMenuItems].forEach(el => {
  el.addEventListener("click", mainMenuItemOnClick)
});


///////////////////////////////////////////////

const subMenuItemOnClick = (ev) => {
  ev.preventDefault();
  const childMenuElem = document.querySelector(".child-menu");
  const mainSubMenuElem = document.querySelector(".main-sub-menu");

  mainSubMenuElem.classList.toggle("main-menu-initial-placed", true);
  setTimeout(
    () => {
      mainSubMenuElem.classList.toggle("hidden", true);
      childMenuElem.classList.toggle("hidden", false);
      childMenuElem.classList.toggle("main-menu-initial-placed", false);
      //document.querySelector("header").classList.add("hidden-header");
    }, 300
  );

};
const subMenuItems = document.querySelectorAll("li.sub-menu-item a");
[...subMenuItems].forEach(el => {
  el.addEventListener("click", subMenuItemOnClick)
});

const backLinkElem = document.querySelector(".back-from-child-menu-link")

backLinkElem.addEventListener("click", (ev) => {
  ev.preventDefault();
  const childMenuElem = document.querySelector(".child-menu");
  const mainSubMenuElem = document.querySelector(".main-sub-menu");

  childMenuElem.classList.toggle("main-menu-initial-placed", true);
  setTimeout(
    () => {
      childMenuElem.classList.toggle("hidden", true);
      mainSubMenuElem.classList.toggle("hidden", false);
      mainSubMenuElem.classList.toggle("main-menu-initial-placed", false);
      //document.querySelector("header").classList.remove("hidden-header");
    }, 300
  );
})

const heroListItems = document.querySelectorAll(".hero-top-list li a")
heroListItems.forEach((el,idx) => {
  if(idx > 2) { return ; }
  el.addEventListener("click", (ev) => {
    ev.preventDefault();
    const wdesktopMenuSection = document.querySelector(".wdesktop-menu");
    wdesktopMenuSection.classList.toggle("visually-hidden");
    wdesktopMenuSection.classList.toggle("hidden");
    setTimeout(()=> {
      wdesktopMenuSection.classList.toggle("visually-hidden");
    }, 100)
  })
})

/////////////////////////////////////

const wdesktopMenuLinks = document.querySelectorAll(".wdesktop-main-block-list a");
wdesktopMenuLinks.forEach(el =>{
  el.addEventListener("click", (ev) => {
    ev.preventDefault();
    let elemLink = ev.target;
    if (elemLink.nodeName !== "A"){
      elemLink = elemLink.parentNode;
    }
    wdesktopMenuLinks.forEach(elem => elem.classList.toggle("wdesktop-menu-active-link", false))
    elemLink.classList.toggle("wdesktop-menu-active-link",true);
  })
})