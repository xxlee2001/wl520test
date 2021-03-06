import React from 'react'
import './index.css'
import { http } from './index'
export const Change = (props) => {
    return (
        <div {...props} className={`yo-icon ${props.className}`}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 40 40"
                version="1.1"
                xmlns={`${http}www.w3.org/2000/svg`}
                // xmlns="http://www.w3.org/2000/svg"
        // xlink="http://www.w3.org/1999/xlink"
      >
                <title>change</title>
                <defs>
                    <polygon
                        id="path-1"
                        points="0 0.879 33.4999699 0.879 33.4999699 11.4395 0 11.4395"
          ></polygon>
                    <polygon
                        id="path-3"
                        points="0.499865787 0.439 34 0.439 34 11 0.499865787 11"
          ></polygon>
                </defs>
                <g
                    id="change"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
        >
                    <g id="Group-7" transform="translate(3.000000, 5.000000)">
                        <g id="Group-3" transform="translate(0.000000, 0.121100)">
                            <mask id="mask-2" fill="white">
                                <use href="#path-1"></use>
                            </mask>
                            <g id="Clip-2"></g>
                            <path
                                d="M32,11.4395 L0,11.4395 L0,8.4395 L28.379,8.4395 L22.939,3.0005 L25.061,0.8785 L33.061,8.8785 C33.489,9.3075 33.618,9.9535 33.386,10.5135 C33.153,11.0745 32.606,11.4395 32,11.4395"
                                id="Fill-1"
                                fill="#888888"
                                mask="url(#mask-2)"
              ></path>
                        </g>
                        <g id="Group-6" transform="translate(0.000000, 18.121100)">
                            <mask id="mask-4" fill="white">
                                <use href="#path-3"></use>
                            </mask>
                            <g id="Clip-5"></g>
                            <path
                                d="M8.9395,11 L0.9395,3 C0.5105,2.571 0.3815,1.926 0.6145,1.365 C0.8465,0.805 1.3935,0.439 2.0005,0.439 L34.0005,0.439 L34.0005,3.439 L5.6215,3.439 L11.0605,8.879 L8.9395,11 Z"
                                id="Fill-4"
                                fill="#888888"
                                mask="url(#mask-4)"
              ></path>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
};
