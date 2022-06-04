import React from 'react';
import ContentLoader from "react-content-loader";

const MovieCartLoader = () => {
    return (
        <ContentLoader
            speed={2}
            width={200}
            height={351}
            viewBox="0 0 200 351"
            backgroundColor="#858585"
            foregroundColor="#919191"
        >
            <rect x="43" y="232" rx="0" ry="0" width="0" height="2" />
            <rect x="0" y="0" rx="20" ry="20" width="200" height="351" />
        </ContentLoader>
    );
};

export  {MovieCartLoader};
