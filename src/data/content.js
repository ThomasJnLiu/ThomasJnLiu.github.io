const articles = [
  {
    name: "Innovation in Training",
    title: "Innovation in Training Branding",
    description:
      "Branding, graphics, and promotional material created for Ontario Power Generation's new work initaitive.",
    sideInfo: ["YEAR: 2019", "TOOLS USED: Photoshop, Illustrator"],
    content: [
      `During my internship at Ontario Power Generation I created branding for a work initiative, named "Innovation in Training".
        In addition to making graphics for the work initiative, I designed a vertical vinyl banner that features the branding for
        use in trade shows.`,
      `One element that was chosen to be central to the branding was the lightbulb, since it represented innovation and could
        consequently be seen as a summary of the values the initative stood for. While drafting the first concepts in Illustrator,
        I made sure to place emphasis on the lighbulb.`,
      `Another factor to take into consideration was Ontario Power Generation's style guide. It was important that any graphics produced
        adhered to the identity of Ontario Power Generation through their use of iconography, colour, text, and layout. This can be seen in the 
        picture to the right, where the final banner complements the design of the electronic message board while still being distinctly different.`,
      `The final deliverables of the design consisted of the "Innovation in Training" branding, a banner embodying the
      "Innovation in Training" work initiative, as well as condensed versions of the branding for use in email communications.`,
    ],
    headerImg: "/img/innovation-in-training/innovation-header.png",
    img: [
      "/img/innovation-in-training/innovation-header.png",
      "/img/innovation-in-training/innovation-3.png",
      "/img/innovation-in-training/innovation-banner-pic.jpg",
      "",
      "/img/innovation-in-training/innovation-logo.png",
      "/img/innovation-in-training/innovation-banner.png",
    ],
    heading: [
      "Overview",
      "Central Iconography",
      "Considering Design Language",
      "Final Product",
    ],
    layout: ["0", "1", "0", "2", "3", "3"],
  },
  {
    name: "E-Learning User Interface",
    title: "E-Learning User Interface",
    description:
      "A redesign on old UI buttons made for Ontario Power Generation's e-learning framework.",
    sideInfo: [
      "YEAR: 2020",
      "TOOLS USED: Photoshop, Illustrator, JavaScript, HTML, CSS",
    ],

    content: [
      `During my internship at Ontario Power Generation, I was tasked with updating their e-learning
      framework's user interface buttons to increase accessibility by making them
      complaint for users with colour disabilities.`,
      `The major problem with the previous buttons (seen right) was that they failed to meet the colour contrast standards
      set by the Accessibility for Ontarians with Disabilities Act (AODA). In addition, I was also requested to redesign
      the appearance of the new buttons to be more modern.`,
      `In my first revision of the icons, I moved towards simplifying the forms of the icons. 
        I also got rid of unnecessary extra colours in the design, as seen in the objectives and the glossary icon. While this revision
        was a step in the right direction to making the icons look sharper, I was unhappy with the colours chosen, as the harsh
        orange-red used for the hover state and dark blue was a drastic change from the original colours.`,
      `As a result, many of the variations made afterwards were explorations in what colours would work.
        I experimented with brighter variations of the old icons, as well as outlined versions, and even flat-vector drawings.
        Throughout all these variants, the geometry and shape of the icons remained consistent.`,
      `In the final icons, the orange hover state was darkened to create more contrast when compared to the blue used for the active
       state. In addition, the geometry of the icons were reduced to simple shapes, as seen in the print icon. A subtle dark outline was
       also added around the active states. Both of these changes helped the icons to be more legible, sharper, and easy to recognize.`,
      `Throughout the process, I made sure to test the icons in the e-learning framework to look at them within the context of their use.
        I was given access to the framework's development server, where I used HTML, CSS, and JS to replace the old icons, as well as
        create pages specifically for testing them out. I ensured that the new icons would be cohesive with the rest of the framework
        and all online courses.`,
    ],
    headerImg: "/img/e-learning-buttons/icons-header2.png",
    img: [
      "",
      "/img/e-learning-buttons/icons-old.png",
      "/img/e-learning-buttons/icons-new-rev1.png",
      "/img/e-learning-buttons/icons-workingdocument2.png",
      "/img/e-learning-buttons/icons-new.png",
      "/img/e-learning-buttons/icons-sim3.png",
      "/img/e-learning-buttons/icons-sim4.png",
    ],
    heading: [
      "Overview",
      "Objectives",
      "First Revision",
      "Designing Variations",
      "Final Icons",
      "In-Course Preview",
    ],
    layout: ["2", "0", "1", "0", "1", "3", "3"],
  },
  {
    name: "Generative Fireworks",
    title: "Generative Fireworks",
    description:
      "Generative art featuring exploding particles made with p5.js.",
    sideInfo: ["YEAR: 2018", "TOOLS USED: JavaScript, HTML, CSS, p5.js"],

    content: [
      `Inspired by the works of Sol Lewitt and Casey Reas, this project explores the infinite possibilities of form
      generation through the use of p5.js.`,
      `The sketch begins with a single firework shooting up and exploding into 100 randomly coloured particles. 
      As these particles fade, each one has a 1% chance of exploding again, producing even more particles, and so on. 
      There can not be more than 50 explosions on the screen at a time for performance reasons, which is tracked by the 
      counter in the top left. The final project features a different sequence every time, with colourful particles exploding and dancing across the canvas.`,
      `The project can be viewed at: https://thomasjnliu.github.io/GenerativeFireworks/`,
    ],
    headerImg: "/img/generative-fireworks/fireworks-1.png",
    img: [
      "/img/generative-fireworks/fireworks-6.png",
      "/img/generative-fireworks/fireworks-2.png",
      "/img/generative-fireworks/fireworks-3.png",
    ],
    heading: ["Overview", "How it Works", "Links"],
    layout: ["0", "1", "2", "2"],
    linkText: ["View the project here.", "View the repository here"],
    linkUrl: [
      "https://thomasjnliu.github.io/GenerativeFireworks/",
      "https://github.com/ThomasJnLiu/GenerativeFireworks",
    ],
  },
];

export default articles;
