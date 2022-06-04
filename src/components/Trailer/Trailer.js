import React from 'react';
import YouTube from "react-youtube";

const Trailer = ({trailer}) => {
    return (
        <div className="trailer">
            <h2>Official Trailer</h2>

            {trailer?
                <YouTube
                    videoId={trailer.key}
                    className="videoPlayer"
                />
                :
                <YouTube

                    className="videoPlayer"
                />
            }
        </div>
    );
};

export {Trailer};
