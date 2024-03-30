import './App.css'
import SplitPane from 'react-split-pane';

function App() {

  return (
    <>
    <div className={styles.splitScreen}>
  <div className={styles.topPane}>topPane</div>
  <div className={styles.bottomPane}>bottomPane</div>
</div>
    </>
  );
}

export default App
