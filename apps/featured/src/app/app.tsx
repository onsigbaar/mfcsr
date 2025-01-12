// eslint-disable-next-line @typescript-eslint/no-unused-vars
import 'semantic-ui-css/semantic.min.css';
import useMarketplace from 'marketplace/Module';

export function App() {
  const {count, reset} = useMarketplace();
  return (
    <div className="ui raised segment">
      <h1>Featured</h1>
      <p>Featured goes here</p>
      <p> {count} people liked the featured</p>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
