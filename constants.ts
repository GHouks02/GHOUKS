
import { Website, Tag } from './types';

export const WEBSITES: Website[] = [
  {
    id: 1,
    name: 'Prodigy Math',
    link: 'https://www.prodigygame.com/',
    icon: 'https://picsum.photos/seed/prodigy/100/100',
    description: 'An engaging, curriculum-aligned math game for students in grades 1-8. Kids explore a fantasy world, battling monsters by answering math questions.',
    features: ['Adaptive Learning', 'Curriculum-Aligned', 'Parent Dashboard', 'In-Game Rewards'],
    tags: [Tag.Free, Tag.Subscription, Tag.ForKids, Tag.Math]
  },
  {
    id: 2,
    name: 'Khan Academy Kids',
    link: 'https://learn.khanacademy.org/khan-academy-kids/',
    icon: 'https://picsum.photos/seed/khan/100/100',
    description: 'A completely free, award-winning app for young learners ages two to eight. Features thousands of activities, books, and games.',
    features: ['100% Free', 'Reading & Literacy', 'Math & Logic', 'Social-Emotional Learning'],
    tags: [Tag.Free, Tag.ForKids, Tag.Math, Tag.Science]
  },
  {
    id: 3,
    name: 'CodeCombat',
    link: 'https://codecombat.com/',
    icon: 'https://picsum.photos/seed/codecombat/100/100',
    description: 'Learn to code by playing a real game. CodeCombat teaches Python and JavaScript through a fantasy role-playing game.',
    features: ['Real Coding Languages', 'Game-Based Learning', 'Progressive Difficulty', 'Multiplayer Arenas'],
    tags: [Tag.Free, Tag.Paid, Tag.ForAllAges, Tag.Coding]
  },
  {
    id: 4,
    name: 'Duolingo',
    link: 'https://www.duolingo.com/',
    icon: 'https://picsum.photos/seed/duolingo/100/100',
    description: 'The world\'s most popular way to learn a language. It\'s 100% free, fun, and science-based. Gamified lessons make learning addictive.',
    features: ['35+ Languages', 'Gamified Lessons', 'Leaderboards', 'AI-powered Personalization'],
    tags: [Tag.Free, Tag.Subscription, Tag.ForAllAges, Tag.AIPowered]
  },
  {
    id: 5,
    name: 'Scratch',
    link: 'https://scratch.mit.edu/',
    icon: 'https://picsum.photos/seed/scratch/100/100',
    description: 'Create stories, games, and animations. Scratch is a simple visual programming language from MIT, perfect for beginners.',
    features: ['Visual Block-Based Coding', 'Online Community', 'Creative Freedom', 'Completely Free'],
    tags: [Tag.Free, Tag.ForKids, Tag.Coding, Tag.ForAllAges]
  },
  {
    id: 6,
    name: ' Brilliant.org',
    link: 'https://brilliant.org/',
    icon: 'https://picsum.photos/seed/brilliant/100/100',
    description: 'Build quantitative skills in math, science, and computer science with fun and challenging interactive explorations.',
    features: ['Problem Solving Focus', 'Interactive Visuals', 'Guided Lessons', 'AI-assisted feedback'],
    tags: [Tag.Paid, Tag.Subscription, Tag.ForAllAges, Tag.Math, Tag.Science, Tag.AIPowered]
  },
  {
    id: 7,
    name: 'National Geographic Kids',
    link: 'https://kids.nationalgeographic.com/',
    icon: 'https://picsum.photos/seed/natgeo/100/100',
    description: 'Explore the world with games, videos, and quizzes about animals, science, and geography. A fun and safe place for kids to learn.',
    features: ['Animal Videos & Facts', 'Science Experiments', 'Geography Games', 'Quizzes & Puzzles'],
    tags: [Tag.Free, Tag.ForKids, Tag.Science]
  },
  {
    id: 8,
    name: 'ABCmouse',
    link: 'https://www.abcmouse.com/',
    icon: 'https://picsum.photos/seed/abcmouse/100/100',
    description: 'A comprehensive early learning academy for ages 2-8. Full curriculum for preschool through 2nd grade.',
    features: ['Step-by-Step Learning Path', '10,000+ Activities', 'Reading, Math, Art, Music', 'Progress Tracking'],
    tags: [Tag.Paid, Tag.Subscription, Tag.ForKids, Tag.Math]
  }
];

export const ALL_TAGS: Tag[] = [
  Tag.Free,
  Tag.Paid,
  Tag.ForKids,
  Tag.ForAllAges,
  Tag.AIPowered,
  Tag.Coding,
  Tag.Math,
  Tag.Science
];
