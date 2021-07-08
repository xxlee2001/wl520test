import React from "react";
import "./index.css";
import { http } from './index'
export const Set = (props) => {
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
                <title>设置</title>
                <g
                    id="设置"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
        >
                    <g id="分组" transform="translate(2.000000, 4.000000)">
                        <path
                            d="M24.2321,15.7895 C24.2321,19.1035 21.5451,21.7895 18.2321,21.7895 C14.9181,21.7895 12.2321,19.1035 12.2321,15.7895 C12.2321,12.4755 14.9181,9.7895 18.2321,9.7895 C21.5451,9.7895 24.2321,12.4755 24.2321,15.7895 Z"
                            id="Stroke-1"
                            stroke-opacity="0.5"
                            stroke="#E14C46"
                            stroke-width="3"
                            stroke-linecap="square"
            ></path>
                        <polygon
                            id="Fill-3"
                            fill="#E14C46"
                            points="9.1161 -0.0001 0.0001 15.7899 5.4811 25.4119 7.9361 23.5359 3.4641 15.7899 10.8481 2.9999 25.6161 2.9999 33.0001 15.7899 25.6161 28.5799 8.8631 28.5799 8.0501 29.2149 9.8951 31.5789 27.3481 31.5789 36.4631 15.7899 27.3481 -0.0001"
            ></polygon>
                        <polygon
                            id="Fill-4"
                            fill-opacity="0.5"
                            fill="#E14C46"
                            points="9.8956 31.5791 8.0496 29.2151 14.0356 24.5411 15.8816 26.9051"
            ></polygon>
                    </g>
                </g>
            </svg>
        </div>
    );
};
