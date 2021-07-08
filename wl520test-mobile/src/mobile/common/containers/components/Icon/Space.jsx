import React from "react";
import "./index.css";
import { http } from './index'
export const Space = (props) => {
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
                <title>空间管理</title>
                <g
                    id="空间管理"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
        >
                    <g
                        id="分组"
                        transform="translate(5.000000, 2.000000)"
                        stroke="#E14C46"
                        stroke-width="3"
          >
                        <g transform="translate(0.000000, 0.835900)">
                            <polygon
                                id="Stroke-1"
                                stroke-opacity="0.5"
                                stroke-linecap="round"
                                points="29.5 25.9258 15 34.2698 0.5 25.9258 0.5 9.2388 15 0.8948 29.5 9.2388"
              ></polygon>
                            <polyline
                                id="Stroke-3"
                                points="0.5 25.9258 0.5 9.2388 15 0.8948 29.5 9.2388"
              ></polyline>
                        </g>
                        <line
                            x1="15"
                            y1="18.366"
                            x2="22.556"
                            y2="13.833"
                            id="Stroke-5"
                            stroke-linecap="square"
            ></line>
                        <line
                            x1="15"
                            y1="18.366"
                            x2="7.444"
                            y2="13.833"
                            id="Stroke-6"
                            stroke-linecap="square"
            ></line>
                        <line
                            x1="15"
                            y1="18.366"
                            x2="15"
                            y2="26.677"
                            id="Stroke-7"
                            stroke-linecap="square"
            ></line>
                    </g>
                </g>
            </svg>
        </div>
    );
};
