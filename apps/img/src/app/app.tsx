import styles from './app.module.scss';
import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import { source } from './source';

const array = new Uint32Array(700*575);
for(let i=0; i < array.length; i++) array[i] = 0xff000000|(Math.sin(i*0.0001)*0xffffff);

export function App() {
  const [src] = React.useState('');
  React.useLayoutEffect(() => {
    console.time('Image load');
    const img = new Image();
    img.onload = () => {
      console.timeEnd('Image load');
    }
    img.src = source;
    console.time('Unit8ClampedArray');
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    const iData = new ImageData(new Uint8ClampedArray(array.buffer), 700, 575);
    context?.putImageData(iData, 0, 0);
    console.timeEnd('Unit8ClampedArray');
  }, []);
  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to img!</h1>
      </header>
      <main>
        <div>
          Test image
          <canvas id="canvas" width="700" height="575"></canvas>
        </div>
      </main>
    </div>
  );
}

export default App;
