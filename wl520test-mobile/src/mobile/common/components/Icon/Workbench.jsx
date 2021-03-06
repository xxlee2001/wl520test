import React from "react";
import { http } from './index'
export const Workbench = (props) => {
    return props.isClick ? (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 56 56"
            version="1.1"
            xmlns={`${http}www.w3.org/2000/svg`}
            xlink={`${http}www.w3.org/1999/xlink`}
            // xmlns="http://www.w3.org/2000/svg"
            // xlink="http://www.w3.org/1999/xlink"
    >
            <title>形状结合</title>
            <g
                id="独立应用"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
      >
                <g
                    id="首页"
                    transform="translate(-159.000000, -1467.000000)"
                    fill="#E14C46"
        >
                    <g id="编组" transform="translate(0.000000, 1457.000000)">
                        <g
                            id="Bars-/-Tab-Bars-/Tab-Bar2-/-Light"
                            transform="translate(0.000000, 1.000000)"
            >
                            <g id="Label" transform="translate(0.000000, 8.000000)">
                                <g id="形状结合-2" transform="translate(159.000000, 1.100505)">
                                    <path
                                        d="M23,32.8994949 C24.1045695,32.8994949 25,33.7949254 25,34.8994949 L25,48.8994949 C25,50.0040644 24.1045695,50.8994949 23,50.8994949 L9,50.8994949 C7.8954305,50.8994949 7,50.0040644 7,48.8994949 L7,34.8994949 C7,33.7949254 7.8954305,32.8994949 9,32.8994949 L23,32.8994949 Z M46,32.8994949 C47.1045695,32.8994949 48,33.7949254 48,34.8994949 L48,48.8994949 C48,50.0040644 47.1045695,50.8994949 46,50.8994949 L32,50.8994949 C30.8954305,50.8994949 30,50.0040644 30,48.8994949 L30,34.8994949 C30,33.7949254 30.8954305,32.8994949 32,32.8994949 L46,32.8994949 Z M40.4142136,7.58578644 L50.3137085,17.4852814 C51.0947571,18.26633 51.0947571,19.5326599 50.3137085,20.3137085 L40.4142136,30.2132034 C39.633165,30.994252 38.366835,30.994252 37.5857864,30.2132034 L27.6862915,20.3137085 C26.9052429,19.5326599 26.9052429,18.26633 27.6862915,17.4852814 L37.5857864,7.58578644 C38.366835,6.80473785 39.633165,6.80473785 40.4142136,7.58578644 Z M23,9.89949494 C24.1045695,9.89949494 25,10.7949254 25,11.8994949 L25,25.8994949 C25,27.0040644 24.1045695,27.8994949 23,27.8994949 L9,27.8994949 C7.8954305,27.8994949 7,27.0040644 7,25.8994949 L7,11.8994949 C7,10.7949254 7.8954305,9.89949494 9,9.89949494 L23,9.89949494 Z"
                                        id="形状结合"
                  ></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
  ) : (
      <svg
          width="100%"
          height="100%"
          viewBox="0 0 56 56"
          version="1.1"
          xmlns={`${http}www.w3.org/2000/svg`}
          xlink={`${http}www.w3.org/1999/xlink`}
          // xmlns="http://www.w3.org/2000/svg"
          // xlink="http://www.w3.org/1999/xlink"
    >
          <title>形状结合</title>
          <defs>
              <linearGradient
                  x1="50%"
                  y1="3.02339234%"
                  x2="50%"
                  y2="100%"
                  id="linearGradient-1"
        >
                  <stop stop-color="#888888" offset="0%"></stop>
                  <stop stop-color="#AAAAAA" offset="100%"></stop>
              </linearGradient>
          </defs>
          <g
              id="独立应用"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
      >
              <g
                  id="我的"
                  transform="translate(-159.000000, -1468.000000)"
                  fill="url(#linearGradient-1)"
                  fill-rule="nonzero"
        >
                  <g id="编组" transform="translate(0.000000, 1458.000000)">
                      <g id="Label" transform="translate(0.000000, 8.000000)">
                          <path
                              d="M182,34 C183.104569,34 184,34.8954305 184,36 L184,50 C184,51.1045695 183.104569,52 182,52 L168,52 C166.895431,52 166,51.1045695 166,50 L166,36 C166,34.8954305 166.895431,34 168,34 L182,34 Z M205,34 C206.104569,34 207,34.8954305 207,36 L207,50 C207,51.1045695 206.104569,52 205,52 L191,52 C189.895431,52 189,51.1045695 189,50 L189,36 C189,34.8954305 189.895431,34 191,34 L205,34 Z M199.414214,8.6862915 L209.313708,18.5857864 C210.094757,19.366835 210.094757,20.633165 209.313708,21.4142136 L199.414214,31.3137085 C198.633165,32.0947571 197.366835,32.0947571 196.585786,31.3137085 L186.686292,21.4142136 C185.905243,20.633165 185.905243,19.366835 186.686292,18.5857864 L196.585786,8.6862915 C197.366835,7.90524292 198.633165,7.90524292 199.414214,8.6862915 Z M182,11 C183.104569,11 184,11.8954305 184,13 L184,27 C184,28.1045695 183.104569,29 182,29 L168,29 C166.895431,29 166,28.1045695 166,27 L166,13 C166,11.8954305 166.895431,11 168,11 L182,11 Z"
                              id="形状结合"
              ></path>
                      </g>
                  </g>
              </g>
          </g>
      </svg>
  );
};
