import {
  Home,
  ProgramCardGenerator,
  ProgramContentsBlock,
  ProgramQna,
} from "pages";
import { useRoutes } from "react-router-dom";

export enum URLs {
  HOME = "/",

  PROGRAM = "/program",
  PROGRAM_QNA = "/program/qna",
  PROGRAM_CONTENTS_BLOCK = "/program/contents-block",
  PROGRAM_CARD = "/program/card",
}

export default function Routings() {
  const routes = useRoutes([
    {
      path: URLs.HOME,
      element: <Home />,
    },
    {
      path: URLs.PROGRAM_QNA,
      element: <ProgramQna />,
    },
    {
      path: URLs.PROGRAM_CONTENTS_BLOCK,
      element: <ProgramContentsBlock />,
    },
    {
      path: URLs.PROGRAM_CARD,
      element: <ProgramCardGenerator />,
    },
  ]);

  return routes;
}
