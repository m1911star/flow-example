import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import { default as StressFlow } from './flow';
export function App() {
  return (
    <div className={styles.app}>
      <StressFlow />
    </div>
  );
}

export default App;
