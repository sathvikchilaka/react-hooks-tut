import useFetchAPI from "./AllHooks/useFetchAPI";
import HookUseCallback from './AllHooks/HookUseCallback';
import HookUseContext from './AllHooks/HookUseContext';
import HookUseEffect from './AllHooks/HookUseEffect';
import HookUseImperativeHandle from './AllHooks/HookUseImperativeHandle';
import HookUseLayoutEffect from './AllHooks/HookUseLayoutEffect';
import HookUseReducer from './AllHooks/HookUseReducer';
import HookUseRef from './AllHooks/HookUseRef';
import HookUseState from './AllHooks/HookUseState';
import HookUseMemo from './AllHooks/HookUseMemo'
import Context from './Context';
import "./App.css";

function App() {
  const { data, loading, error } = useFetchAPI(
    "https://jsonplaceholder.typicode.com/users"
  );

  console.log(data);

  if (error) return <p>Error!</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      {/* <HookUseState /> */}
      {/* <HookUseEffect /> */}
      {/* <HookUseMemo /> */}
      {/* <HookUseCallback /> */}
      {/* <HookUseRef /> */}
      {/* <Context >
        <HookUseContext />
      </Context> */}
      {/* <HookUseReducer /> */}
      {/* <HookUseImperativeHandle /> */}
      <HookUseLayoutEffect />

      {/* <ul>
        {data?.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
