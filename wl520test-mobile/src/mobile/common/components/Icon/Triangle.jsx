import React from "react";
import { http } from './index'
export const Triangle = (props) => {
    return (
        <div {...props}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 13 13"
                version="1.1"
                xmlns={`${http}www.w3.org/2000/svg`}
                xlink={`${http}www.w3.org/1999/xlink`}
                // xmlns="http://www.w3.org/2000/svg"
                // xlink="http://www.w3.org/1999/xlink"
      >
                <title>Rectangle</title>
                <g
                    id="独立应用"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
        >
                    <g
                        id="登录-默认"
                        transform="translate(-133.000000, -485.000000)"
                        fill="#555555"
          >
                        <g id="Rectangle-2" transform="translate(132.000000, 484.000000)">
                            <path
                                d="M14,2.41421356 L14,13 C14,13.5522847 13.5522847,14 13,14 L2.41421356,14 C1.86192881,14 1.41421356,13.5522847 1.41421356,13 C1.41421356,12.7347835 1.5195704,12.4804296 1.70710678,12.2928932 L12.2928932,1.70710678 C12.6834175,1.31658249 13.3165825,1.31658249 13.7071068,1.70710678 C13.8946432,1.89464316 14,2.14899707 14,2.41421356 Z"
                                id="Rectangle"
              ></path>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
};
