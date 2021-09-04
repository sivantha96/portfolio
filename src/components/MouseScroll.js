import React from 'react';

export default function MouseScroll() {
  return (
    <div className="pf-mouse-scroll text-black dark:text-white">
      <div className="pf-mouse-scroll__mouse">
        <div className="pf-mouse-scroll__wheel animate-bounce"></div>
      </div>
      <div>
        <span className="pf-mouse-scroll__arrow animate-pulse"></span>
        <span className="pf-mouse-scroll__text  text-black dark:text-white">
          Scroll Down
        </span>
      </div>
    </div>
  );
}
