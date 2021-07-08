import React from "react";
import "./index.css";
import { http } from './index'
export const About = (props) => {
    return (
        <div {...props} className={`yo-icon ${props.className}`}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 40 40"
                version="1.1"
                xmlns={`${http}www.w3.org/2000/svg`}
                xlink={`${http}www.w3.org/1999/xlink`}
                // xmlns="http://www.w3.org/2000/svg"
                // xlink="http://www.w3.org/1999/xlink"
      >
                <title>文档传列表</title>
                <g
                    id="文档传列表"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="square"
        >
                    <g
                        id="分组"
                        transform="translate(6.000000, 8.000000)"
                        stroke="#E14C46"
                        stroke-width="3"
          >
                        <line
                            x1="0.5"
                            y1="0.5"
                            x2="27.886"
                            y2="0.5"
                            id="Stroke-1"
                            stroke-linejoin="round"
            ></line>
                        <line
                            x1="0.5"
                            y1="11.9814"
                            x2="16.857"
                            y2="11.9814"
                            id="Stroke-3"
                            stroke-linejoin="round"
            ></line>
                        <line
                            x1="27.7642"
                            y1="11.9814"
                            x2="23.2142"
                            y2="11.9814"
                            id="Stroke-5"
                            stroke-opacity="0.5"
            ></line>
                        <line
                            x1="0.5"
                            y1="23.4628"
                            x2="27.886"
                            y2="23.4628"
                            id="Stroke-7"
                            stroke-linejoin="round"
            ></line>
                    </g>
                </g>
            </svg>
        </div>
    );
};
