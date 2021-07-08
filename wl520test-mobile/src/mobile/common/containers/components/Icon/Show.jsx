import React from 'react'
import './index.css'
import { http } from './index'
export const Show = (props) => {
    return (
        <div {...props} className={`yo-icon ${props.className}`}>
            {props.isShow ? (
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
                    <title>可见</title>
                    <g
                        id="可见"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
          >
                        <path
                            d="M20.5,31 C26.5751322,31 32.0751322,27.5 37,20.5 C32.0751322,13.5 26.5751322,10 20.5,10 C14.4248678,10 8.92486775,13.5 4,20.5 C8.92486775,27.5 14.4248678,31 20.5,31 Z"
                            id="Oval"
                            stroke="#888888"
                            stroke-width="3"
            ></path>
                        <circle
                            id="Oval"
                            fill="#888888"
                            cx="20.5"
                            cy="20.5"
                            r="4.5"
            ></circle>
                    </g>
                </svg>
      ) : (
          <svg
              width="100%"
              height="100%"
              viewBox="0 0 40 40"
              version="1.1"
              xmlns={`${http}www.w3.org/2000/svg`}
              xlink={`${http}www.w3.org/1999/xlink`}
          // xml="http://www.w3.org/2000/svg"
          // xlink="http://www.w3.org/1999/xlink"
        >
              <title>不可见</title>
              <g
                  id="不可见"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
          >
                  <path
                      d="M37.76,20.19 L35.99,22.61 L31.94,19.65 C30.5,21.19 28.77,22.45 26.85,23.339 L29.2,27.679 L26.56,29.1 L24,24.37 C22.67,24.72 21.29,24.9 19.88,24.9 C18.5,24.9 17.15,24.73 15.85,24.4 L13.42,28.89 L10.781,27.47 L12.99,23.38 C11.04,22.49 9.281,21.22 7.821,19.65 L3.77,22.61 L2,20.19 L5.97,17.28 C5.1,15.919 4.42,14.41 3.97,12.8 L6.861,12 C8.47,17.83 13.821,21.9 19.88,21.9 C25.94,21.9 31.29,17.83 32.9,12 L35.79,12.8 C35.34,14.41 34.66,15.919 33.79,17.28 L37.76,20.19 Z"
                      id="Fill-1"
                      fill="#888888"
            ></path>
              </g>
          </svg>
      )}
        </div>
    );
};
