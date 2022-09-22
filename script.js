gsap.from(".circle", { duration: 2, y: 100, opacity: 0, ease: "sine.out"});

gsap.from(".container-1 img", { duration: 1, y: 100, opacity: .2});

gsap.registerPlugin(TextPlugin);

gsap.to(".container-1 div h1", { duration: 3, delay: 1, text: "Welcome to My Portfolio"});