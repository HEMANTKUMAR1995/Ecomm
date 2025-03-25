// class App extends React.Component {
// state = { count: 0 };
// render() {
//    return (
//   <div>
//        <p>{this.state.count}</p>
//      <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
//      </div>
// );  }}

// Render prop pattern
const MyComponent = () => (
  <DataProvider> {(data) => <div>{data}</div>} </DataProvider>
);
