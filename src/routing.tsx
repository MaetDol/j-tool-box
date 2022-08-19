import { Home, ProgramQna } from 'pages';
import { useRoutes } from 'react-router-dom';

export enum URLs {
  HOME = '/',

  PROGRAM = '/program',
  PROGRAM_QNA = '/program/qna',
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
    }
  ]);

  return routes;
}
