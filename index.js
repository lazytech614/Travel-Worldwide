var tl = gsap.timeline();

tl.from(".content .right img",{
    x: 300,
    opacity: 0
})

tl.from(".nav img",{
    y: -100,
    opacity: 0
})

tl.from(".inner-nav",{
    y: -100,
    opacity: 0
})

tl.from(".nav i",{
    y: -100,
    opacity: 0
})

tl.from("#bold",{
    y: 100,
    opacity: 0
})

tl.from("#worldwide",{
    y: 100,
    opacity: 0
})

tl.from(".content .left p",{
    y: 100,
    opacity: 0
})

tl.from(".footer",{
    opacity: 0
})

tl.from(".circle",{
    x: 1000,
    opacity: 0,
    rotate: 360
})
