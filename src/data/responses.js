const negativeResponses = [
  "Oof.",
  "I haven't seen that much red since the 1984 US presidential election.",
  "You asked, Twitter responded with a resounding NOPE.",
  "You shall not pass.",
  "Michael_Scott_No_God_No.gif",
  "Darth Vader: Noooooooooooooooooooo.",
  "Nein.",
  "Heavens, no.",
  "No Scrubs.",
  "😖",
  "👎",
  "Danger, Will Robinson.",
  "Bad vibes.",
  "Simon_Cowell_Its_A_No_From_Me.gif",
  "(╯°□°）╯︵ ┻━┻",
  "Are they saying boo or boo-urns?"
];

const positiveResponses = [
  "Looks like it's in the clear.",
  "Hakuna Matata.",
  "Ding.",
  "Survey says: all clear!",
  "I sure hope you agree with this sentiment or that'll be awkward.",
  "Stone Cold Steve Austin says: Hell Yeah.",
  "Daniel_Bryan_Yes_Yes_Yes.gif",
  "That's a lot of green (it's legal in Canada now, y'know).",
  "Yeah - Lil Jon.",
  "Okily Dokily - Ned Flanders.",
  "Yarp.",
  "👍",
  "( ͡° ͜ʖ ͡°)",
  "HEYYEYAAEYAAAEYAEYAA - He-Man."
];

const neutralResponses = [
  "The whole is greater than the sum of its parts - Aristotle.",
  "It's not that nobody cares, probably...",
  "Meh - Internet.",
  "¯\\_(ツ)_/¯",
  "🤷",
  "Yeah, well, that's just, like, your opinion, man.",
  "This is my United States of Whatever."
];

const tiedResponses = [
  "Balance has been restored to the force.",
  "Is this result Shia LaBeouf because it's Even Stevens.",
  "It's a line drive down the middle.",
  "The Middle - Jimmy Eat World.mp3"
];

export const responseMap = new Map([
  ["positive", positiveResponses],
  ["negative", negativeResponses],
  ["neutral", neutralResponses]
]);
