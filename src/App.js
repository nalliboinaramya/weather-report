import React  from 'react';
import SideNav from "./sidenav";
import MainNav from "./mainnav";
const container = {
  background: '#b3d7fa',
  display: "flex",
  padding: "20px",
  height: "100%"
};
const App = () => {
  return (
  <div style={container}>
      <SideNav />
      <MainNav />
    </div>
  
  );
};

export default App;
