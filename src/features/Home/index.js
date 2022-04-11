import React from 'react';
import ArticlesView from './views/ArticlesView';
import LandingView from './views/LandingView';
import ProjectsView from './views/ProjectsView';

function Home() {
  return (
    <div className="pf-home">
      <LandingView />
      <ProjectsView />
      <ArticlesView />
    </div>
  );
}

export default Home;
