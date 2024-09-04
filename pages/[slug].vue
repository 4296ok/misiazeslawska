<template>
  <NuxtLayout 
    name="work-layout"
    :workTitle="work.title"
    :workLocation="work.location"
    :workDescription="work.description"
    :images="work.images"
  >
    <!-- Right Column Content -->
    <template #additionalContent>
      <div v-html="work.rightColumnContent"></div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import { useRoute } from 'vue-router';

// Get the current route's slug parameter
const route = useRoute();
const slug = route.params.slug;

// Define a function to generate image paths
function generateImagePaths(basePath, numImages) {
  return Array.from({ length: numImages }, (_, i) => `${basePath}${i + 1}.png`);
}

// Define the work data, including base image path and number of images
const workData = {
  pizzaiolo: {
    title: "PIZZAIOLO PAWILONY",
    description: "Pizzaiolo’s first restaurant has evolved into an iconic destination for authentic Neapolitan pizza in Warsaw, loved for its premium ingredients and the vibrant community that has grown around the establishment. In 2023, the owners opened a second Pizzaiolo location at Pawilony Nowy Świat in the heart of Warsaw. This time, they envisioned a late-night pizza haven. The focal point of the design is the pizza oven, which is encircled by a kidney-shaped bar. It’s like chilling in a marinara sauce jacuzzi…",
    imageBasePath: '/images/pizzaiolo',
    numImages: 9,
    rightColumnContent: `
      <p><strong>TYPE </strong>Interior commission</p>
      <p><strong>LOCATION </strong>Warsaw, PL 2023</p>
      <p><strong>CLIENT </strong>@PIZZAIOLO.CC</p>
      <p><strong>ADDRESS </strong>Nowy świat 22/28a, Warsaw</p>
      <p><strong>MOSAIC DESIGN </strong>@studio_tafla</p>
      <p><strong>PHOTOS </strong>Misia Zesławska</p>
    `
  },
  kujkoxbush: {
    title: "KUJKO X BUSH NAIL SALON",
    description: "Kejti Kujko and Martyna Bush joined forces to establish a cozy beauty parlour in a raw, industrial basement in Warsaw’s Saska Kępa neighborhood. The space offers a range of services, including nail treatments, piercings, and massage sessions. For this project, I designed a set of dove blue furniture—featuring cabinets and a pedicure deck with shell-shaped sinks. Additionally, the plywood manicure desk from the previous Kujko Nail Bar project has been seamlessly integrated into this new space.",
    imageBasePath: '/images/kujkoxbush',
    numImages: 8,
    rightColumnContent: `
      <p><strong>TYPE </strong>Furniture commission</p>
      <p><strong>LOCATION </strong>Warsaw, PL {2024}</p>
      <p><strong>CLIENT </strong>@kujko.bush</p>
      <p><strong>ADDRESS </strong>Berezyńska 3/1, Warsaw</p>
      <p><strong>PHOTOS </strong>Misia Zesławska</p>
    `
  },
  coolcat: {
    title: "THE COOL CAT WAITER STATIONS",
    description: "The Cool Cat is a renowned bistro brand in Warsaw, inspired by Asian street food. The owners sought assistance in reorganizing the cluttered bars at both of their restaurant locations. My concept was to design waiter stations that resemble food carts found in Asian markets. The result is a pair of colorful storage units. Additionally, for The Cool Cat Solec, we undertook a basic refresh of the entire space—repainting the walls to serve as a canvas for a mural by Klub2020.",
    imageBasePath: '/images/coolcat',
    numImages: 6,
    rightColumnContent: `
      <p><strong>TYPE </strong>Furniture commission</p>
      <p><strong>LOCATION </strong>Warsaw, PL {2023}</p>
      <p><strong>CLIENT </strong>@the_cool_cat_bar</p>
      <p><strong>ADDRESS </strong>(red) Solec 38 / (yellow) Marszałkowska 8, Warsaw</p>
      <p><strong>MURAL </strong>@klub2020</p>
      <p><strong>PHOTOS </strong>Misia Zesławska</p>
      <p><strong>REFERENCE PICTURE COPYRIGHT </strong>© R. Ian Lloyd / Masterﬁle</p>
    `
  },
  houseofphobia: {
    title: "THE HOUSE IN THE SHADOW OF A SPOTLIGHT",
    description: "This project involved designing a unique art installation for the KABK School of Art. The installation is intended to engage viewers through its innovative use of space and light.",
    imageBasePath: '/images/houseofphobia',
    numImages: 8,
    rightColumnContent: `
      <p><strong>TYPE </strong>School project</p>
      <p><strong>LOCATION </strong>KABK, The Hague, NL {2024}</p>
      <p> MA Interior Architecture Studio II, KABK - The House of Phobia <p>
      <p> Project guided by Nasim Razavian, essay guided by Anne Hoogewoning <p>
    `
  },
  kujko: {
    title: "KUJKO NAIL BAR",
    description: "Back in 2022, Kujko launched her first nail bar for which I designed simple plywood furniture. Given the limited space, I combined two built-in manicure work stations into a single table. This project was conceived as a response to the unattractive ready-made nail tech furniture commonly available on the market. The base of the desk are knocked-down flatpack shelves assembled without nails, while the table top is attached with angle brackets and screws, allowing for easy disassembly during transportation. A matching trolley storage unit accompanies the desk. The items have been relocated to the new nail salon by Kujko x Bush.",
    imageBasePath: '/images/kujko',
    numImages: 8,
    rightColumnContent: `
      <p><strong>TYPE </strong>Interior and furniture commission</p>
      <p><strong>LOCATION </strong>Warsaw, PL {2022-2024}</p>
      <p><strong>CLIENT </strong>@kujko</p>
      <p><strong>ADDRESS </strong>Francuska 5, Warsaw</p>
      <p><strong>MURAL </strong>@hoodmood93</p>
      <p><strong>PHOTOS </strong>Misia Zesławska</p>
    `
  },
  debki: {
    title: "HOLIDAY HOUSE IN DĘBKI",
    description: "An all-year-round holiday home of wooden construction, located in Dębki village, in proximity to the Baltic coastline. The body of the building is a visual reference to the style of the holiday homes found in the area, translated into a modern design language. The utility layout of the building is an attempt at creating a space that can adjust to its users' needs, in regard to their number as well as the type of activity they are involved in. Due to the off-grid location, sustainable installations have been utilized, such as a heat pump, rainwater reserve, PV modules etc. The mono-pitched roof is exposed southward due to the best use of photovoltaic technology, collecting the object’s annual electricity demand.",
    imageBasePath: '/images/debki',
    numImages: 10,
    rightColumnContent: `
      <p><strong>TYPE </strong>BA THESIS WAPW, PL {2021}</p>
      <p>BA Architecture, Warsaw University of Technology</p>
      <p>1st supervisor: mgr inż. arch. Sławomir Kowal</p>
      <p>2nd supervisor: dr inż. arch. Anna Grabowska</p>

    `
  },
  green: {
    title: "SALEM GREEN RIETVELD FREESTYLE",
    description: "The object has been conceived out of the need for storage furniture for my room. I used leftover wood, cut to size. I decided to use my imagination only and didn’t prepare any drawings or plan, just intuitively measured and assembled. The project is a tribute to Rietveld’s virtuosity and modernist straightforward way of construction.",
    imageBasePath: '/images/green',
    numImages: 6,
    rightColumnContent: `
      <p><strong>TYPE </strong>Furniture construction research</p>
      <p><strong>LOCATION </strong>The Hague, NL {2024}</p>
      <p><strong>PHOTOS </strong>Misia Zesławska</p>
      <p><strong>REFERENCE PICTURE </strong>Ernst Moritz © Centraal Museum, Utrecht / Ernst Moritz / Pictoright, Amsterdam</p>
    `
  },
  negativespace: {
    title: "THE NEGATIVE SPACE",
    description: "The Negative Space project is an art gallery designed to enhance the viewer's experience through innovative use of space and lighting. The gallery features modern design principles and dynamic exhibitions.",
    imageBasePath: '/images/negativespace',
    numImages: 8,
    rightColumnContent: `
      <p><strong>TYPE </strong>School project</p>
      <p><strong>LOCATION </strong>KABK, The Hague, NL {2023}</p>
      <p><strong>PHOTOS </strong>Misia Zesławska</p>
      <p><strong>REFERENCE PICTURE </strong> Roman Lipiński, Muzeum-Skansen Kurpiowski im. Adama Chętnika w Nowogrodzie</p>
      MA Interior Architecture Studio I, KABK - Workspace
      Project guided by Michou Nanon de Bruijn
    `
  },
  moodforwood: {
    title: "ANGLER SPOT MOOD FOR WOOD",
    description: "Mood for Wood is a project that designs a unique angler spot incorporating natural wood elements to blend with its surroundings. The design provides a comfortable and functional space for outdoor enthusiasts.",
    imageBasePath: '/images/moodforwood',
    numImages: 7,
    rightColumnContent: `
      <p><strong>TYPE </strong>Group Project</p>
      <p><strong>LOCATION </strong>Český Těšín, PL/CZ {2022}</p>
      <p><strong>TEAM </strong> Maria Kwiatkowska, Aleksandra Szczebara, Józek Wierzbowski, Jeremi Mroziński, Mateusz Robak, Krisztián Vnučko</p>
      <p><strong>CONTRIBUTION </strong> research on user needs, 3D model, detail preparation, painting the wood</p>
      <p>Tutored by Marcin Maraszek and Maciej Kaufman of Archigrest studio</p>
    `
  },
};

// Get the work data based on the current slug
const work = workData[slug];
work.images = generateImagePaths(work.imageBasePath, work.numImages);

</script>
