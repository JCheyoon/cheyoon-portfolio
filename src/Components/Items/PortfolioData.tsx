import Begopa from "./MyProjects/Begopa.component";
import Acnh from "./MyProjects/Acnh.component";
import PoketmonCard from "./MyProjects/PoketmonCard.component";
import Introduction from "./MyProjects/Introduction.component";
import AppTitle from "./MyProjects/AppTitle.component";
import IPhoneParody from "./MyProjects/IPhoneParody.component";
import Doughnut from "./MyProjects/Doughnut.component";
import ColaJelly from "./MyProjects/ColaJelly.component";
import WolfDog from "./MyProjects/WolfDog.component";
import ThisPortfolio from "./MyProjects/ThisPortfolio.component";

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
  {
    id: 4,
    imgUrl: "../project4.png",
    title: "Portfolio",
    description: ["React", "TypeScript", "Scss"],
    element: <ThisPortfolio />,
  },
];

export const portfolioDesignItems: ItemType[] = [
  {
    id: 1,
    imgUrl: "../d_project1.png",
    title: "Introduction",
    description: ["AfterEffects", "2D", "Typography"],
    element: <Introduction />,
  },
  {
    id: 2,
    imgUrl: "../d_project2.png",
    title: "App title",
    description: ["AfterEffects", "2D"],
    element: <AppTitle />,
  },
  {
    id: 3,
    imgUrl: "../d_project3.png",
    title: "Doughnut",
    description: ["Cinema4d", "3D", "Loop"],
    element: <Doughnut />,
  },
  {
    id: 4,
    imgUrl: "../d_project4.png",
    title: "Cola Jelly",
    description: ["Cinema4d", "3D", "Loop"],
    element: <ColaJelly />,
  },
  {
    id: 5,
    imgUrl: "../d_project5.png",
    title: "I phone parody",
    description: ["AfterEffects", "2D"],
    element: <IPhoneParody />,
  },
  {
    id: 6,
    imgUrl: "../d_project6.png",
    title: "Wolfdog",
    description: ["Cinema4d", "3D", "Modeling"],
    element: <WolfDog />,
  },
];
