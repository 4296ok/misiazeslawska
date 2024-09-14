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
    title: "PIZZAIOLO PAWILONY {2023}",
    description: "Pizzaiolo’s first restaurant has evolved into an iconic destination for authentic Neapolitan pizza in Warsaw, loved for its premium ingredients and the vibrant community that has grown around the establishment. In 2023, the owners opened a second Pizzaiolo location at Pawilony Nowy Świat in the heart of Warsaw. This time, they envisioned a late-night pizza haven. The focal point of the design is the pizza oven, which is encircled by a kidney-shaped bar. It’s like chilling in a marinara sauce jacuzzi…",
    imageBasePath: '/images/pizzaiolo',
    numImages: 9,
    rightColumnContent: `
      <p><strong>TYPE </strong>Interior Commission</p>
      <p><strong>LOCATION </strong>PL, Warsaw, Nowy Świat 22/28a</p>
      <p><strong>CLIENT </strong>@pizzaiolo.cc</p>
      <p><strong>MOSAIC DESIGN </strong>@studio_tafla</p>
      <p><strong>PHOTOS </strong>Misia Zesławska</p>
    `
  },
  kujkoxbush: {
    title: "KUJKO X BUSH NAIL SALON {2024}",
    description: "Kejti Kujko and Martyna Bush joined forces to establish a cozy beauty parlour in a raw, industrial basement in Warsaw’s Saska Kępa neighborhood. The space offers a range of services, including nail treatments, piercings, and massage sessions. For this project, I designed a set of dove blue furniture—featuring cabinets and a pedicure deck with shell-shaped sinks. Additionally, the plywood manicure desk from the previous Kujko Nail Bar project has been seamlessly integrated into this new space.",
    imageBasePath: '/images/kujkoxbush',
    numImages: 8,
    rightColumnContent: `
      <p><strong>TYPE </strong>Furniture Commission</p>
      <p><strong>LOCATION </strong>PL, Warsaw, Berezyńska 3/1</p>
      <p><strong>CLIENT </strong>@kujko.bush</p>
      <p><strong>PHOTOS </strong>Misia Zesławska</p>
    `
  },
  coolcat: {
    title: "THE COOL CAT WAITER STATIONS {2023}",
    description: "The Cool Cat is a renowned bistro brand in Warsaw, inspired by Asian street food. The owners sought assistance in reorganizing the cluttered bars at both of their restaurant locations. My concept was to design waiter stations that resemble food carts found in Asian markets. The result is a pair of colorful storage units. Additionally, for The Cool Cat Solec, we undertook a basic refresh of the entire space—repainting the walls to serve as a canvas for a mural by Klub2020.",
    imageBasePath: '/images/coolcat',
    numImages: 6,
    rightColumnContent: `
      <p><strong>TYPE </strong>Furniture Commission</p>
      <p><strong>LOCATION </strong>PL, Warsaw, (red) Solec 38 / (yellow) Marszałkowska 8</p>
      <p><strong>CLIENT </strong>@the_cool_cat_bar</p>
      <p><strong>MURAL </strong>@klub2020</p>
      <p><strong>PHOTOS </strong>Misia Zesławska</p>
      <p><strong>REFERENCE PICTURE COPYRIGHT </strong>© R. Ian Lloyd / Masterﬁle</p>
    `
  },
  houseofphobia: {
    title: "THE HOUSE IN THE SHADOW OF A SPOTLIGHT {2024}",
    description: "Heliophobia refers to the fear of the Sun and the potential harm its radiation can cause to humans. This essay explores the complex relationship between late-stage capitalism and the human obsession with tanning—touching on issues like the increase in skin cancer due to global warming, the historical association of pale skin with socioeconomic status, the booming sunscreen industry, and the cult of youth. The second part of the booklet presents a contemporary legend centered around vanity and a mysterious dwelling.",
    imageBasePath: '/images/houseofphobia',
    numImages: 8,
    rightColumnContent: `
      <p><strong>TYPE </strong>MA Interior Architecture Studio II, KABK–The House of Phobia</p>
      <p><strong>LOCATION </strong>NL, The Hague</p>
      <p> Project guided by Nasim Razavian, essay guided by Anne Hoogewoning. <p>
    `
  },
  kujko: {
    title: "KUJKO NAIL BAR {2022-2024}",
    description: "Back in 2022, Kujko launched her first nail bar for which I designed simple plywood furniture. Given the limited space, I combined two built-in manicure work stations into a single table. This project was conceived as a response to the unattractive ready-made nail tech furniture commonly available on the market. The base of the desk are knocked-down flatpack shelves assembled without nails, while the table top is attached with angle brackets and screws, allowing for easy disassembly during transportation. A matching trolley storage unit accompanies the desk. The items have been relocated to the new nail salon by Kujko x Bush.",
    imageBasePath: '/images/kujko',
    numImages: 8,
    rightColumnContent: `
      <p><strong>TYPE </strong>Interior and Furniture Commission</p>
      <p><strong>LOCATION </strong>PL, Warsaw, Francuska 5</p>
      <p><strong>CLIENT </strong>@kujko</p>
      <p><strong>MURAL </strong>@hoodmood93</p>
      <p><strong>PHOTOS </strong>Misia Zesławska</p>
    `
  },
  debki: {
    title: "HOLIDAY HOUSE IN DĘBKI, PL {2021}",
    description: "An all-year-round holiday home of wooden construction, located in Dębki village, in proximity to the Baltic coastline. The body of the building is a visual reference to the style of the holiday homes found in the area, translated into a modern design language. The utility layout of the building is an attempt at creating a space that can adjust to its users' needs, in regard to their number as well as the type of activity they are involved in. Due to the off-grid location, sustainable installations have been utilized, such as a heat pump, rainwater reserve, PV modules etc. The mono-pitched roof is exposed southward due to the best use of photovoltaic technology, collecting the object’s annual electricity demand.",
    imageBasePath: '/images/debki',
    numImages: 10,
    rightColumnContent: `
      <p><strong>TYPE </strong>BA Thesis WAPW</p>
      <p>BA Architecture, Warsaw University of Technology</p>
      <p>1st supervisor: mgr inż. arch. Sławomir Kowal</p>
      <p>2nd supervisor: dr inż. arch. Anna Grabowska</p>

    `
  },
  green: {
    title: "SALEM GREEN RIETVELD FREESTYLE {2024}",
    description: "The object has been conceived out of the need for storage furniture for my room. I used leftover wood, cut to size. I decided to use my imagination only and didn’t prepare any drawings or plan, just intuitively measured and assembled. The project is a tribute to Rietveld’s virtuosity and modernist straightforward way of construction.",
    imageBasePath: '/images/green',
    numImages: 6,
    rightColumnContent: `
      <p><strong>TYPE </strong>Furniture Construction Research</p>
      <p><strong>LOCATION </strong>NL, The Hague</p>
      <p><strong>PHOTOS </strong>Misia Zesławska</p>
      <p><strong>REFERENCE PICTURE </strong>Ernst Moritz © Centraal Museum, Utrecht / Ernst Moritz / Pictoright, Amsterdam</p>
    `
  },
  negativespace: {
    title: "THE NEGATIVE SPACE {2023}",
    description: "The tradition of paper cutting is native to many cultures around the world, however it usually varies in the techniques used and captures different topics. In Poland, this form of folklore craft is called Wycinanki [Vytynanky] and started in 1850s thanks to the industrialisation of paper. Traditionally crafted by rural artists and common folk, Wycinanki served as a communal form of relaxation, depicting both abstract and figurative subjects such as animals, plants, notable figures, events, and memories. The intricate shapes, revealed by cutting specific patterns into folded paper, capture the creative energy emanating from the artist’s mind—a beautiful tradition of expressing emotions through the art of negative space. In my exploration of workspaces, I’ve focused on defining the mental space necessary for uninterrupted focus and productivity. The transformation of household textiles into cut-out artworks becomes an act of releasing anxieties and worries, channeling creative energy into an intimate, personal medium. It’s an artistic process that involves creation through the deliberate act of removal.",
    imageBasePath: '/images/negativespace',
    numImages: 8,
    rightColumnContent: `
      <p><strong>TYPE </strong>MA Interior Architecture Studio I, KABK - Workspace</p>
      <p><strong>LOCATION </strong>NL, The Hague</p>
      <p><strong>PHOTOS </strong>Misia Zesławska</p>
      <p><strong>REFERENCE PICTURE </strong> Roman Lipiński, <br>Muzeum-Skansen Kurpiowski im. Adama Chętnika w Nowogrodzie</p>
      Project guided by Michou Nanon de Bruijn
    `
  },
  moodforwood: {
    title: "ANGLER SPOT MOOD FOR WOOD {2022}",
    description: "The group’s design assignment aimed to create a facility dedicated to the fishing enthusiasts of Cieszyn, primarily catering to residents. A key feature of the facility is its integration with the natural landscape, allowing users to fully appreciate the surrounding scenery. Our case study led us to a triangular structure with both the roof and deck supported by double columns. The object stands 4 meters high and stretches nearly 9 meters in length. Based on user needs research, the space comfortably accommodates two anglers simultaneously. Users bring their own equipment and foldable chairs, and conveniently hang their backpacks on nails driven into nearby trees.",
    imageBasePath: '/images/moodforwood',
    numImages: 7,
    rightColumnContent: `
      <p><strong>TYPE </strong>Group Project</p>
      <p><strong>LOCATION </strong>PL/CZ, Český Těšín</p>
      <p><strong>TEAM </strong> Maria Kwiatkowska, Aleksandra Szczebara, Józek Wierzbowski, Jeremi Mroziński, Mateusz Robak, Krisztián Vnučko. Tutored by Marcin Maraszek and Maciej Kaufman of <strong>Archigrest</strong> studio.</p>
      <p><strong>CONTRIBUTION </strong> research on user needs, 3D model, detail preparation, painting the wood</p>
      `
  },
};

// Get the work data based on the current slug
const work = workData[slug];
work.images = generateImagePaths(work.imageBasePath, work.numImages);

</script>
