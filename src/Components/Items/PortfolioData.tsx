import Begopa from "./MyProjects/Begopa.component";
import Sample from "./MyProjects/Sample.component";
import Acnh from "./MyProjects/Acnh.component";
import PoketmonCard from "./MyProjects/PoketmonCard.component";

export type ItemType = {
  id?: number;
  imgUrl: string;
  title: string;
  description: string[];
  element?: JSX.Element;
};

export const portfolioCodeItems: ItemType[] = [
  {
    id: 1,
    imgUrl: "../project1.png",
    title: "Begopa",
    description: ["React", "Scss"],
    element: <Begopa />,
  },
  {
    id: 2,
    imgUrl: "../project2.png",
    title: "ACNH_v2",
    description: ["React", "TypeScript", "MUI"],
    element: <Acnh />,
  },
  {
    id: 3,
    imgUrl: "../project3.png",
    title: "Poketmon",
    description: ["React", "TypeScript", "Scss"],
    element: <PoketmonCard />,
  },
];

export const portfolioDesignItems: ItemType[] = [
  {
    id: 1,
    imgUrl: "../project6.png",
    title: "Begopa",
    description: ["React", "Scss"],
    element: <Sample />,
  },
  {
    id: 2,
    imgUrl: "../project6.png",
    title: "ACNH_v2",
    description: ["React", "TypeScript", "MUI"],
    element: <Sample />,
  },
  {
    id: 3,
    imgUrl: "../project6.png",
    title: "Poketmon",
    description: ["React", "TypeScript", "Scss"],
    element: <Sample />,
  },
  {
    id: 4,
    imgUrl: "../project6.png",
    title: "sample",
    description: ["Javascript", "Scss"],
    element: <Sample />,
  },
  {
    id: 5,
    imgUrl: "../project6.png",
    title: "sample",
    description: ["Javascript", "Scss"],
    element: <Sample />,
  },
  {
    id: 6,
    imgUrl: "../project6.png",
    title: "sample",
    description: ["Javascript", "Scss"],
    element: <Sample />,
  },
];
