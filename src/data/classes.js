export const classes = [
  {
    id: 'beginner-hatha',
    name: 'Beginner Hatha',
    style: 'Hatha',
    difficulty: 'Beginner',
    duration: '60 min',
    instructor: 'Maya Chen',
    description: 'Gentle poses and breathwork for newcomers. Perfect first class.',
    price: 22,
    spots: 12,
    schedule: [
      { day: 'Monday', time: '6:30 PM' },
      { day: 'Wednesday', time: '12:00 PM' },
      { day: 'Saturday', time: '10:00 AM' },
    ],
  },
  {
    id: 'vinyasa-flow',
    name: 'Vinyasa Flow',
    style: 'Vinyasa',
    difficulty: 'Intermediate',
    duration: '75 min',
    instructor: 'James Okonkwo',
    description: 'Dynamic sequences linking breath with movement.',
    price: 26,
    spots: 15,
    schedule: [
      { day: 'Tuesday', time: '7:00 AM' },
      { day: 'Thursday', time: '6:30 PM' },
      { day: 'Sunday', time: '9:00 AM' },
    ],
  },
  {
    id: 'restorative',
    name: 'Restorative Yin',
    style: 'Yin',
    difficulty: 'All Levels',
    duration: '90 min',
    instructor: 'Priya Sharma',
    description: 'Slow, supported poses for deep relaxation and recovery.',
    price: 28,
    spots: 10,
    schedule: [
      { day: 'Friday', time: '7:30 PM' },
      { day: 'Sunday', time: '4:00 PM' },
    ],
  },
  {
    id: 'power-yoga',
    name: 'Power Yoga',
    style: 'Power',
    difficulty: 'Advanced',
    duration: '60 min',
    instructor: 'Alex Rivera',
    description: 'Strength-building flow for experienced practitioners.',
    price: 26,
    spots: 14,
    schedule: [
      { day: 'Monday', time: '7:00 AM' },
      { day: 'Wednesday', time: '6:30 PM' },
    ],
  },
];

export const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const timeSlots = [
  '6:30 AM',
  '7:00 AM',
  '12:00 PM',
  '4:00 PM',
  '6:30 PM',
  '7:30 PM',
];
