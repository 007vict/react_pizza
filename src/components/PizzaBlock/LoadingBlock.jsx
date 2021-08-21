import React from 'react'
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
    return (
      <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        >
        <circle cx="120" cy="112" r="104" />
        <rect x="2" y="226" rx="3" ry="3" width="250" height="26" />
        <rect x="2" y="261" rx="6" ry="6" width="250" height="84" />
        <rect x="10" y="372" rx="4" ry="4" width="96" height="30" />
        <rect x="126" y="361" rx="15" ry="15" width="130" height="49" />
      </ContentLoader>
    );
}

export default LoadingBlock
