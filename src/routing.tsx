import { Home, ProgramContentsBlock, ProgramQna } from 'pages';
import { useRoutes } from 'react-router-dom';

export enum URLs {
  HOME = '/',

  PROGRAM = '/program',
  PROGRAM_QNA = '/program/qna',
  PROGRAM_CONTENTS_BLOCK = '/program/contents-block',
};

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
  ]);

  return routes;
}
