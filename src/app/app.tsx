import type { FC } from "react";
import { CounterPage } from '../pages/counter/counter-page.tsx';
import {CounterProvider} from "../modules/solution/counter-provider.tsx";

export const App: FC = () => {
  return (
    <CounterProvider>
      <CounterPage />
    </CounterProvider>
  )
};

export default App;

