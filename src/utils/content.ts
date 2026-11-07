export interface ReasonItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PromiseItem {
  id: string;
  promise: string;
  vow: string;
}

export interface CouponItem {
  id: string;
  title: string;
  reward: string;
  tag: string;
  iconName: string;
  redeemed?: boolean;
}

export const APOLOGY_SECTIONS = {
  heroTagline: "To the only girl who owns my heart & soul",
  subTagline: "I made a careless mistake. Here is the honest truth, my deepest apology, and all the love I have for you.",
  
  letterOpening: "My Dearest,",
  
  theIncidentBreakdown: [
    {
      title: "1. The Sincere Truth (No excuses, just honesty)",
      text: "I was scrolling and saw two dance reels with energetic choreographies. The instant thought in my head was: 'Imagine my girl trying this dance dare—she'd dance a million times cuter and cooler than anyone else!' That was genuinely the only thought in my mind."
    },
    {
      title: "2. Why I Shared It To My Private Account",
      text: "You know you have the password and access to my account. I saved and shared it right there because I never had a single thought of hiding anything from you. If I ever wanted to hide something, I could have saved it offline or never put it where you have full access. You have the keys to my heart, my phone, and my life."
    },
    {
      title: "3. Where I Was Careless & Made You Hurt",
      text: "Even though my intention was an innocent dance challenge dare for you, I didn't communicate it first. You opened the account and saw those reels with zero context. It must have felt confusing, hurtful, and painful. And that breaks my heart in two. Your peace of mind and your security in our love mean more to me than anything on this planet."
    },
    {
      title: "4. What You Need To Know In Your Heart",
      text: "There is no girl in this world who compares to you. Not a single face, not a single smile. When I look around, the world is just background noise—you are my entire universe. Without you, I feel completely lost and hollow. I am truly, deeply, and unconditionally sorry for causing you even a second of pain."
    }
  ],

  reasonsWhy: [
    {
      id: "reason-1",
      title: "You are my home",
      description: "No matter how chaotic or exhausting the world gets, the moment I talk to you, everything feels safe and peaceful.",
      icon: "Home"
    },
    {
      id: "reason-2",
      title: "Your smile is my favorite thing",
      description: "When you smile with that cute crinkle in your eyes, my whole day is made. Hurting your smile is the worst feeling I've ever felt.",
      icon: "Smile"
    },
    {
      id: "reason-3",
      title: "No one else comes close",
      description: "Nobody else has your laugh, your pure heart, your intelligence, or the way you light up my entire existence.",
      icon: "Sparkles"
    },
    {
      id: "reason-4",
      title: "Without you, I'm simply incomplete",
      description: "You're not just my partner—you're my best friend, my confidante, my biggest blessing, and the reason my days make sense.",
      icon: "HeartHandshake"
    },
    {
      id: "reason-5",
      title: "You make me want to be better",
      description: "Loving you has taught me what real care, loyalty, and empathy look like. I want to spend my life cherishing you.",
      icon: "Flame"
    },
    {
      id: "reason-6",
      title: "My heart is yours forever",
      description: "You have complete transparency and full control over my heart. I promise to protect your trust forever.",
      icon: "ShieldCheck"
    }
  ] as ReasonItem[],

  promises: [
    {
      id: "p1",
      promise: "Clear & Instant Communication",
      vow: "I will always tell you what I'm thinking or planning first, so you never have to wonder or overthink for even a single second."
    },
    {
      id: "p2",
      promise: "Complete Transparency Always",
      vow: "You will always have total access to every corner of my life, my phone, and my heart. Nothing is ever hidden from you."
    },
    {
      id: "p3",
      promise: "Protecting Your Feelings Above All",
      vow: "Your emotional peace and reassurance come before any joke, dare, or careless thought."
    },
    {
      id: "p4",
      promise: "Endless Pampering & Apologies",
      vow: "Whenever I mess up, I will hold you tight, listen patiently to every word, and do whatever it takes to bring back your smile."
    }
  ] as PromiseItem[],

  coupons: [
    {
      id: "c1",
      title: "Emergency Hug & Cuddle Pass",
      reward: "Unlimited tight hugs and forehead kisses on demand, valid for life.",
      tag: "Warmth",
      iconName: "Heart"
    },
    {
      id: "c2",
      title: "Your Favorite Treat / Food Delivery",
      reward: "Whatever sweet dessert or delicious craving you want, ordered right to your doorstep by me.",
      tag: "Sweetness",
      iconName: "Coffee"
    },
    {
      id: "c3",
      title: "We Do Any Dance Challenge Together",
      reward: "I will do any silly, funny, or romantic dance trend with you—even if I look like a goofy potato!",
      tag: "Dance Dare",
      iconName: "Music"
    },
    {
      id: "c4",
      title: "Win Any Argument Forever Pass",
      reward: "Play this card and you are automatically 100% right, no questions asked. I surrender with love.",
      tag: "Power Pass",
      iconName: "Crown"
    },
    {
      id: "c5",
      title: "A 2-Hour Listening & Pampering Call",
      reward: "You rant, talk, or just breathe while I listen, compliment you, and tell you a million reasons why I love you.",
      tag: "Quality Time",
      iconName: "PhoneCall"
    }
  ] as CouponItem[],

  evasiveQuips: [
    "Wait no, please don't tap here! 🥺",
    "Oops! Missed me! Try the other one! 🙈",
    "Error 404: 'No' is permanently out of service! 🌸",
    "Look how big & shiny the 'I Forgive You' button is! 👉",
    "You know deep down you still love this silly boy! 🥰",
    "I promise unlimited hugs and your favorite snacks! 🍫",
    "My heart literally cannot take a 'No'! Please? 🥺",
    "Only forgiveness allowed in this house! ❤️",
    "Nice reflexes, but love always wins! ✨",
    "Come on, my cute angry bird... smile a little? 🕊️"
  ]
};
