import "./home.css";

import { Hero,Category,HomeProducts } from "../../components";

const home = () => {
  return (
    <main className='main-wrapper'>
      <Hero />
      <Category />
      <HomeProducts />
    
    </main>
  );
};

export default home;
