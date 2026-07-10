export type Hobby = {
  title: string;
  description: string;
  icon: string;
};

export const hobbies: Hobby[] = [
  {
    title: "Badminton",
    description:
      "Fast rallies force fast decisions. It sharpens my reflexes and keeps me quick on my feet, on and off the court.",
    icon: "🏸",
  },
  {
    title: "Table Tennis",
    description:
      "A split-second sport — I love the focus it demands and the instant feedback loop of every point.",
    icon: "🏓",
  },
  {
    title: "Snooker",
    description:
      "The opposite pace of table tennis: patience, precision, and thinking several shots ahead before committing to one.",
    icon: "🎱",
  },
  {
    title: "Cycling",
    description:
      "Long rides are where I do my best thinking — a good way to clear my head and build endurance at the same time.",
    icon: "🚴",
  },
  {
    title: "Cooking",
    description:
      "I love inviting friends over and cooking for them — trying out a new cuisine, turning the kitchen into a little experiment, and watching a meal bring everyone to the same table.",
    icon: "🍳",
  },
];
