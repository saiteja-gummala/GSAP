// gsap.to("#box",
// {
//     x:1000,
//     delay:1,
//     duration:2,
//     rotate:360,
//     backgroundColor:"green"
// })

// gsap.from("#box",{

//     x:1000,
//     duration:2,
//     delay:1,
//     backgroundColor:"purple",
//     rotate:360
// })

let tl = gsap.timeline();

// tl.to("#box1",{
//     x:1200,
//     scale:0.5,
//     duration:2,
//     rotate:360
// })
// tl.to("#box2",{
//     x:1200,
//     scale:0.5,
//     duration:2,
//     rotate:360
// })
// tl.to("#box3",{
//     x:1200,
//     scale:0.5,
//     duration:2,
//     rotate:360
// })
gsap.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.3
})

tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.3
})

tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5,
})

tl.from("#footer h3",{
    y:50,
    opacity:0,
    duration:0.8,
    stagger:0.5
})