export type ItemType = {
  id?: number;
  imgUrl: string;
  title: string;
  description: string[];
  projectUrl: string;
  element?: JSX.Element;
};

const XyElement = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export const portfolioItems: ItemType[] = [
  {
    id: 1,
    imgUrl: "../project1.png",
    title: "Begopa",
    description: ["React", "Scss"],
    projectUrl: "/",
    element: <XyElement />,
  },
  {
    id: 2,
    imgUrl: "../project2.png",
    title: "javascript",
    description: ["Javascript"],
    projectUrl: "/",
    element: <XyElement />,
  },
  {
    id: 3,
    imgUrl: "../project3.png",
    title: "javascript",
    description: ["React"],
    projectUrl: "/",
    element: <XyElement />,
  },
  {
    id: 4,
    imgUrl: "../project4.png",
    title: "javascript",
    description: ["React"],
    projectUrl: "/",
    element: <XyElement />,
  },
  {
    id: 5,
    imgUrl: "../project5.png",
    title: "javascript",
    description: ["React"],
    projectUrl: "/",
    element: <XyElement />,
  },
  {
    id: 6,
    imgUrl: "../project6.png",
    title: "javascript",
    description: ["React"],
    projectUrl: "/",
    element: <XyElement />,
  },
];
