import '../css/style.css';

import Bar from './Bar';
import CenterBlock from './CenterBlock';
import Nav from './MainNav';
import Sidebar from './Sidebar';

function Container() {
  return (
    <div className="container">
      <main className="main">
        <Nav />
        <CenterBlock />
        <Sidebar />
      </main>
      <div className="bar">
        <Bar />
      </div>
    </div>
  );
}

export default Container;
