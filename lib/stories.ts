export type LocalStory = {
  slug: string;
  name: string;
  role: string;
  since: string;
  order: string;
  bean: number;
  quote: string;
  body: string[];
};

export const LOCAL_STORIES: LocalStory[] = [
  {
    slug: "siobhan",
    name: "Siobhán",
    role: "Teacher, lives off Philipsburgh",
    since: "Regular since 2020",
    order: "Oat flat white, one sugar",
    bean: 0,
    quote: "It took me through lockdown, one takeaway at a time.",
    body: [
      "When the schools closed in March I kept walking the same loop — around the park, past the bus stop, home. The takeaway hatch was the only reason I could tell one week from the next.",
      "Dara had my order before I got to the door. He remembered it through two lockdowns and a rebrand. That counts for a lot in a year when very little did.",
    ],
  },
  {
    slug: "oisin",
    name: "Oisín",
    role: "Designer, back table most Tuesdays",
    since: "Regular since 2021",
    order: "Filter, whatever's on the bar",
    bean: 2,
    quote: "I get more done here than in any office I've worked in.",
    body: [
      "I work from home four days a week, but on Tuesdays I'm at the back table with the plug socket. Headphones on, a filter, a second filter, done by two.",
      "The playlist is the thing that seals it. It's always the right music to think to — never the thing everyone else is playing. Sometimes I Shazam a track and Niamh just nods.",
    ],
  },
  {
    slug: "priya",
    name: "Priya",
    role: "Doctor, Beaumont Hospital",
    since: "Regular since 2022",
    order: "Double espresso, before 7am",
    bean: 3,
    quote: "I walk past three other cafes to get here.",
    body: [
      "My shift starts at 7:30. I live ten minutes in the wrong direction, but I come here first because the Kochere on an espresso is the only thing that's ever woken me up properly.",
      "The bench by the window gets the first of the sun. Five minutes with the cup, then the 27B to the hospital. That's my morning. I don't want to change it.",
    ],
  },
  {
    slug: "hannah",
    name: "Hannah",
    role: "Moved to Dublin from Cork, 2023",
    since: "Regular since 2023",
    order: "Cortado, sometimes a bun",
    bean: 1,
    quote: "First cafe that made me feel like I live in Dublin.",
    body: [
      "I didn't know anybody for the first three months. I'd come in on a Saturday, sit by the window, and that was the social highlight of my week.",
      "Now I know half the regulars. I've been to three birthdays of people I met in the queue. The park's across the road, the room's always warm, and somehow that was enough to make a new city feel like home.",
    ],
  },
];
