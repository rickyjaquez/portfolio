var home = new TimelineLite;

// TweenLite.set("#quote", {perspective:400});
var controller = new ScrollMagic.Controller();

var homeImg = new ScrollMagic.Scene({
    triggerElement: "#home",
    triggerHook: "onEnter",
    duration: 300,
})
.on('enter', homeFunc)
.addTo(controller);

function homeFunc(){
  home
  .set($(".home__stage1 > h1"), {opacity:0, scale:0.5, x: "-250px"})
  .staggerTo($(".home__stage1 > h1"), 0.5, {opacity:1, scale:1, x:"0",  ease:Expo.easeOut}, 1, "+=0")
  .set($(".home__stage1 > h2"), {opacity:0, scale:0.5, x: "-250px"})
  .staggerTo($(".home__stage1 > h2"), 0.5, {opacity:1, scale:1, x:"0",  ease:Expo.easeOut}, 1, "+=0")
  .staggerTo($(".home__stage1 > h1"), 0.5, {opacity:0, scale:0.5, x:"-250",  ease:Expo.easeOut}, 1, "+=1.5")
  .staggerTo($(".home__stage1 > h2"), 0.5, {opacity:0, scale:0.5, x:"-250",  ease:Expo.easeOut}, 1, "+=0")
  .set($(".home__stage1"),{ position:"absolute"})
  .staggerTo($(".home__img"), 1, { left:"0", marginLeft:"0",width: "100%", height: "800px",  ease:Expo.easeOut}, 1)
  .set($(".home__stage1"), {display:"none"})
  .set($(".home__stage2 > h2"), {opacity:0, scale:0.5, x: "-250px"})
  .staggerTo($(".home__stage2 > h2"), 0.5, {opacity:1, scale:1, x:"0",  ease:Expo.easeOut}, 1, "+=0.5")
  .set($(".home__stage2 > h3"), {opacity:0, scale:0.5, x: "-250px"})
  .staggerTo($(".home__stage2 > h3"), 0.5, {opacity:1, scale:1, x:"0",  ease:Expo.easeOut}, 1, "+=0")
  ;
}
