import React from 'react';
import LandingView from './views/LandingView';
import ProjectsView from './views/ProjectsView';

function Home() {
  return (
    <div className="pf-home">
      <LandingView />
      <ProjectsView />
    </div>
  );
}

export default Home;
