$(document).ready(function(){
    const ww = $(window).width();
    // spot
    gsap.registerPlugin(ScrollTrigger);
    const root = document.documentElement;

    const slideTL = gsap.timeline();
    const maskTL = gsap.timeline();
    const mainTL = gsap.timeline({ 
        repeat: -1, 
        onRepeat: () => {
            gsap.set('.textfour', { opacity: 0 });
            gsap.set('.textthree', { opacity: 0 });
            gsap.set('.texttwo', { opacity: 0 });
            gsap.set('#bar', { scaleY: 0.1 });
            gsap.set('.textone h1', { opacity: 1 });
        }
    });

    gsap.set('.textfour', { opacity: 0 });
    gsap.set('.textthree', { opacity: 0 });
    gsap.set('.texttwo', { opacity: 0 });
    gsap.set('#bar', { scaleY: 0.1 });

    slideTL
        .to('#bar', 1, { 
            y: () => {
                return ww >= 900 ?  225 : 147; 
            },
            scaleY: 1, 
            ease: "back.out" 
        })
        .to('#slidebar', 1.5, { 
            x: () => {
                return ww >= 900 ? 570 : 296
            },
            delay: 0.5, 
            ease: "back.inOut(0.8)" 
        })
        .to('#slidebar', 1.5, { 
            x: () => {
                return ww >= 900 ? -20 : 0
            },
            delay: 0.5, 
            ease: "back.inOut(0.8)" 
        })
        .to('#slidebar', 1.5, { 
            x: () => {
                return ww >= 900 ? 570 : 296
            },
            delay: 0.5, 
            ease: "back.inOut(0.8)" 
        })
        .to('#slidebar', 1.5, { 
            x: () => {
                return ww >= 900 ? -20 : 0
            },
            delay: 0.5, 
            ease: "back.inOut(0.8)" 
        })
        .to('#slidebar', 1.5, { 
            x: () => {
                return ww >= 900 ? 570 : 296
            },
            delay: 0.5, 
            ease: "back.inOut(0.8)" 
        })
        .to('#bar', 1, { 
            y: 500, 
            scaleY: 0.1, 
            ease: "back.in" 
        });

    maskTL
        .to('.textone', 1.5, {
            ease: "back.inOut(0.8)", 
            "clip-path": "polygon(0 0, 91% 0, 81% 100%, 0% 100%)",
            onComplete: () => {
                gsap.set('.texttwo', { opacity: 1 });
            }
        })
        .to('.textone', 1.5, {
            delay: 0.5,
            ease: "back.inOut(0.8)", 
            "clip-path": "polygon(0 0, 18% 0, 8% 100%, 0% 100%)",
            onComplete: () => {
                gsap.set('.textone h1', { opacity: 0 });
                gsap.set('.textthree', { opacity: 1 });
            }
        })
        .to('.textthree', 1.5, {
            delay: 0.5,
            ease: "back.inOut(0.8)", 
            "clip-path": "polygon(0 0, 91% 0, 81% 100%, 0% 100%)",
            onComplete: () => {
                gsap.set('.texttwo', { opacity: 0 });
                gsap.set('.textfour', { opacity: 1 });
            }
        })
        .to('.textthree', 1.5, {
            delay: 0.5,
            ease: "back.inOut(0.8)", 
            "clip-path": "polygon(0 0, 18% 0, 8% 100%, 0% 100%)",
            onComplete: () => {
                gsap.set('.textthree', { opacity: 0 });
            }
        })
        .to('.textone', 1.5, {
            delay: 0.5,
            ease: "back.inOut(0.8)", 
            "clip-path": "polygon(0 0, 91% 0, 81% 100%, 0% 100%)"
        }); 
    

    mainTL
        .add(slideTL)
        .add(maskTL, 1.5);

})

// nav
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        const techSection = document.getElementById('section-tech');
        const workSection = document.getElementById('section-work');
        const reactSection = document.getElementById('section-react');
        const contactSection = document.getElementById('section-contact');
        
         
        const techOffsetTop = Math.floor(techSection.getBoundingClientRect().top + window.pageYOffset);
        const workOffsetTop = Math.floor(workSection.getBoundingClientRect().top + window.pageYOffset);
        const reactOffsetTop = Math.floor(reactSection.getBoundingClientRect().top + window.pageYOffset);
        const contactOffsetTop = Math.floor(contactSection.getBoundingClientRect().top + window.pageYOffset);
    

        const navItems = document.querySelectorAll('.nav_item');
        navItems.forEach(item => {
            item.classList.remove('on');
        });
        console.log(this.window.scroll !== this.document.body.offsetHeight - this.window.innerHeight)
    
        if (window.scrollY < workOffsetTop) {
            document.querySelector('.nav_item.nav_tech').classList.add('on');
        } else if (window.scrollY >= workOffsetTop && window.scrollY < reactOffsetTop) {
            document.querySelector('.nav_item.nav_work').classList.add('on');
        } else if (window.scrollY >= reactOffsetTop && window.scrollY < contactOffsetTop && (window.innerHeight + window.scrollY) < document.body.offsetHeight - 10) {
            document.querySelector('.nav_item.nav_react').classList.add('on');
        } else {
            document.querySelector('.nav_item.nav_contact').classList.add('on');
        }

        if(window.scrollY >= techOffsetTop) {
            document.querySelector('.section_tech').classList.add('active');
            document.querySelector('.content').classList.add('type_fixed');
        } else {
            document.querySelector('.content').classList.remove('type_fixed');
        }
      
    });
});

  
// section_tech
$(document).ready(function(){
    const ww = $(window).width();
  
    const stamps = [
      { name: "icon_html"},
      { name: "icon_css"},
      { name: "icon_scss"},
      { name: "icon_javascript"},
      { name: "icon_jquery"},
      { name: "icon_react"},
      { name: "icon_vscode"},
      { name: "icon_photoshop"},
      { name: "icon_figma"},
      { name: "icon_github"},
    ];
    
    const introBox = document.querySelector('.stamp_box');
    const stampImg = document.createElement('img');
    stampImg.style.position = 'fixed';
    stampImg.style.pointerEvents = 'none'; // 이미지 클릭을 방지
    introBox.appendChild(stampImg); // stamp_box 요소에 추가
    
  
    let currentStamp = null; // 현재 보이는 커서 이미지
  
    function updateStampPosition(event) {
      if (ww <= 900) return; 
  
      const rect = introBox.getBoundingClientRect();
      if (introBox.contains(event.target) &&
          event.clientX >= rect.left && event.clientX <= rect.right &&
          event.clientY >= rect.top && event.clientY <= rect.bottom) {
          if (!currentStamp) {
              currentStamp = stamps[Math.floor(Math.random() * stamps.length)];
              stampImg.src = `../src/img/tech_icon/${currentStamp.name}.svg`;
              currentWidth = ww >= 900 ? Math.floor(Math.random() * (200 - 60 + 1)) + 40 :  Math.floor(Math.random() * (100 - 60 + 1)) + 60;
              currentRotation = Math.floor(Math.random() * 121) - 60;
              stampImg.style.width = `${currentWidth}px`;
              stampImg.style.transform = `rotate(${currentRotation}deg)`;
              stampImg.style.zIndex = 10;
              stampImg.classList.remove('fall');
              stampImg.style.display = 'block';
              gsap.to(stampImg, { opacity: 1, duration: 0.3 });
          }
          stampImg.style.display = 'block';
          stampImg.classList.remove('fall');
          const posX = event.clientX - (stampImg.width / 2);
          const posY = event.clientY - (stampImg.height / 2);
          
  
          stampImg.style.left = `${posX}px`;
          stampImg.style.top = `${posY}px`;
          
      } else {
          currentStamp = null; // 영역을 벗어나면 이미지를 숨김
          stampImg.style.display = 'none';
        }

        
    }
    introBox.addEventListener('mousemove', updateStampPosition);
  
  
    // 박스를 클릭하면 이미지를 추가하는 함수
    let shouldRemoveListeners = false; // 플래그 변수
    function addStamp(event, touch = false) {
        if (shouldRemoveListeners) return; // 플래그 확인하여 실행 방지
  
        if (currentStamp || touch) {
            const clickedStamp = touch ? 
                    stamps[Math.floor(Math.random() * stamps.length)]
                    : currentStamp;
            const clickedWidth = touch ? (ww >= 900 ? Math.floor(Math.random() * (200 - 60 + 1)) + 60 : Math.floor(Math.random() * (100 - 60 + 1)) + 40 ): currentWidth;
            const rotation = touch ? Math.floor(Math.random() * 121) - 60 : currentRotation; // 회전 각도 설정
            
            currentStamp = null; // 현재 보이는 커서 이미지
    
            // 클릭된 커서 이미지를 박스 안에 추가
            const Ckimg = document.createElement('img');
            Ckimg.src = `../src/img/tech_icon/${clickedStamp.name}.svg`;
            Ckimg.style.position = 'absolute';

            Ckimg.style.width = `${clickedWidth}px`;
            Ckimg.style.transform = `rotate(${rotation}deg)`;
            Ckimg.style.pointerEvents = 'none'; // 이미지 클릭 방지
            Ckimg.classList.remove('fall');
    
            // 클릭 이미지를 기준으로 이미지 위치를 설정
            const rect = introBox.getBoundingClientRect();
            const posX = (touch ? event.touches[0].clientX : event.clientX) - rect.left - (clickedWidth / 2);
            const posY = (touch ? event.touches[0].clientY : event.clientY) - rect.top - (clickedWidth / 2);
            

            console.log(clickedWidth, 'test')
            Ckimg.style.left = `${posX}px`;
            Ckimg.style.top = `${posY}px`;
    
            introBox.appendChild(Ckimg);
        }
    }
  
    introBox.addEventListener('click', (event) => addStamp(event));
  
    // 모바일 터치 이벤트를 지원하기 위해 클릭 이벤트에 터치 이벤트 추가
    introBox.addEventListener('touchstart', (event) => {
      if (shouldRemoveListeners) return; // 플래그 확인하여 실행 방지
      addStamp(event, true);
    });
  
    const stickyArea =  document.querySelector('.section_tech .sticky_area');
    const stickyHeight = stickyArea.offsetHeight;


    window.addEventListener('scroll', (event) => {
      const rect = introBox.getBoundingClientRect();
      var windowHeight = $(window).height(); // 브라우저의 높이
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      
      if (scrollTop > $('.stamp_box').offset().top + ($('.stamp_box').outerHeight() * 0.5) - (windowHeight * 0.45) && event.deltaY !== 0) {
        // introBox 내 모든 이미지 요소를 선택하고 'fall' 클래스를 추가
        const images = introBox.querySelectorAll('img'); 
        images.forEach(img => {
          img.classList.add('fall');
        });
  
        stickyArea.style.height = `${stickyHeight + 1000}px`
  
        const textWrap = document.querySelector('.section_tech .text_wrap');
        if (!textWrap.classList.contains('on')) {
          textWrap.classList.add('on');
          ScrollTrigger.refresh()
         
        }

        
        
      }
      
    });
  
    // 감시 대상
    const target = document.querySelector('.stamp_box .text_wrap')
  
    // 인스턴스 만들기
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        shouldRemoveListeners = true; 
        introBox.removeEventListener('click', addStamp);
        introBox.removeEventListener('touchstart', addStamp);
        introBox.removeEventListener('mousemove', updateStampPosition);
        ScrollTrigger.refresh()
      })
  
      // 옵저버 연결 해제
      observer.disconnect();
    });
    // 옵션 설정 (속성 변경 감시)
    const config = { attributes: true };
  
    // MutationObserver를 대상 요소에 연결하고 옵션을 전달하여 감시 시작
    observer.observe(target, config);
    
  
})

// common
$(".move_up").each(function(idx){
    var item = $(this);
    $(window).scroll(function(){
        if($(window).scrollTop() + $(window).outerHeight() >= item.offset().top - 100){
            item.addClass("on");
        } else {
            item.removeClass("on");
        }
    });
});

// work_kb
$(document).ready(function(){
    const ww = $(window).width();

    if(ww >= 900) {
        const imgBoxTl01 = gsap.timeline();
        ScrollTrigger.create({
            animation: imgBoxTl01,
            trigger: ".work_kb .wrap01",
            start:'-100px center',
            end:'center center',
            scrub: 0, 
            markers: false,
        })
        imgBoxTl01.to('.work_kb .wrap01 img', {y: '-320'}, '>')
        imgBoxTl01.fromTo('.work_kb .wrap01 .text_box', {y: '0'}, {y: '152'}, '<')
        
        const imgBoxTl02 = gsap.timeline();
        ScrollTrigger.create({
            animation: imgBoxTl02,
            trigger: ".work_kb .wrap02",
            start:'-100px center',
            end:'center center',
            scrub: 0, 
            markers: false,
        })
        imgBoxTl02.to('.work_kb .wrap02 img', {y: '-320'}, '>')
        imgBoxTl02.fromTo('.work_kb .wrap02 .text_box', {y: '0'}, {y: '196'}, '<')
        
        const imgBoxTl03 = gsap.timeline();
        ScrollTrigger.create({
            animation: imgBoxTl03,
            trigger: ".work_kb .swiper_area",
            start:'-100px 30%',
            end:'center center',
            scrub: 0, 
            markers: false,
        })
        imgBoxTl03.fromTo('.work_kb .swiper_area .work_text', {y: '0'}, {y: '490'}, '<')
    }
})


var kbSwiper = new Swiper('.work_kb_swiper .swiper', {
    loop: true,
    slidesOffsetBefore: 0,
    slidesPerView: '1',
    autoplay: {
        delay:2000,
        disableOnInteraction:false,
    },
    speed: 1000,
    loopedSlides: 1,
    observer: true,
    observeParents: true,
    pagination : {
        el : '.swiper-pagination',
        clickable : true, 
    },
});

// work_snow
var snowSlide = new Swiper(".snow_slide", {
    slidesPerView: "auto",
  
    scrollbar: {
      el: ".swiper-scrollbar",
    },
});

// section_react
const overLap01 = gsap.timeline();
overLap01.to(".section_react .img_box .img_wrap02", {opacity:1, duration:0.5},'<0.5');
overLap01.to(".section_react .img_box .img_wrap03", {opacity:1, duration:0.5},'<1.5');
    
ScrollTrigger.create({
    animation: overLap01,
    trigger: ".section_react .box_wrap",
    start: "top center",
    end: "bottom center",
    markers: false,
    scrub: 0, 
})


lastWidth = window.innerWidth;
$(window).resize(function(){
    if(window.innerWidth != lastWidth){
    location.reload();
    scrollTrigger.refresh();
    }
    lastWidth = window.innerWidth;
});
