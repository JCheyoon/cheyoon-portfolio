import Begopa from "./MyProjects/Begopa.component";
import Sample from "./MyProjects/Sample.component";

export type ItemType = {
  id?: number;
  imgUrl: string;
  title: string;
  description: string[];
  element?: JSX.Element;
};

export const portfolioItems: ItemType[] = [
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
    title: "javascript",
    description: ["Javascript", "Scss"],
    element: <Sample />,
  },
  {
    id: 3,
    imgUrl: "../project3.png",
    title: "javascript",
    description: ["Javascript", "Scss"],
    element: <Sample />,
  },
  {
    id: 4,
    imgUrl: "../project4.png",
    title: "javascript",
    description: ["Javascript", "Scss"],
    element: <Sample />,
  },
  {
    id: 5,
    imgUrl: "../project5.png",
    title: "javascript",
    description: ["Javascript", "Scss"],
    element: <Sample />,
  },
  {
    id: 6,
    imgUrl: "../project6.png",
    title: "javascript",
    description: ["Javascript", "Scss"],
    element: <Sample />,
  },
];
