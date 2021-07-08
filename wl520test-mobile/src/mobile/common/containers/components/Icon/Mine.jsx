import React from "react";
import { http } from './index'
export const Mine = (props) => {
    return props.isClick ? (
        <svg
            className={ 'img-show' }
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
                    y1="0%"
                    x2="50%"
                    y2="161.683023%"
                    id="linearGradient-1"
            >
                    <stop stop-color="#E14C46" offset="0%"></stop>
                    <stop stop-color="#E87672" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                    x1="50%"
                    y1="-246.599543%"
                    x2="50%"
                    y2="100%"
                    id="linearGradient-2"
            >
                    <stop stop-color="#E14C46" offset="0%"></stop>
                    <stop stop-color="#E87672" offset="100%"></stop>
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
                    transform="translate(-536.000000, -1468.000000)"
                    fill-rule="nonzero"
            >
                    <g id="编组" transform="translate(0.000000, 1458.000000)">
                        <g
                            id="tabbar/item-5"
                            transform="translate(515.000000, 10.000000)"
                >
                            <g id="编组" transform="translate(21.000000, 0.000000)">
                                <g id="Group-5" transform="translate(8.000000, 8.000000)">
                                    <path
                                        d="M31.4902568,12.5703784 C31.4902568,18.9823598 26.1944841,24.1674054 19.6775541,24.1674054 C13.1598451,24.1674054 7.86390541,18.9825247 7.86390541,12.5703784 C7.86390541,6.15823204 13.1598451,0.973351351 19.6775541,0.973351351 C26.1944841,0.973351351 31.4902568,6.158397 31.4902568,12.5703784 Z"
                                        id="Stroke-1"
                                        fill="url(#linearGradient-2)"
                      ></path>
                                    <path
                                        d="M35.5571486,38.3185203 L3.41863514,38.3185203 C2.06804585,38.3185203 0.972689189,37.2231636 0.972689189,35.8725743 L0.972689189,29.6160878 C0.972689189,27.7426011 2.49161883,26.2241959 4.36458108,26.2241959 L34.6112027,26.2241959 C36.4849001,26.2241959 38.0030946,27.7423904 38.0030946,29.6160878 L38.0030946,35.8725743 C38.0030946,37.2231636 36.9077379,38.3185203 35.5571486,38.3185203 Z"
                                        id="Stroke-3"
                                        fill="url(#linearGradient-2)"
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
              className={ 'img-close' }
              width="100%"
              height="100%"
              viewBox="0 0 56 56"
              version="1.1"
              xmlns={`${http}www.w3.org/2000/svg`}
              xlink={`${http}www.w3.org/1999/xlink`}
          // xml{`${http}://www.w3.org/2000/svg"
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
                      id="首页"
                      transform="translate(-536.000000, -1468.000000)"
                      fill="url(#linearGradient-1)"
                      fill-rule="nonzero"
            >
                      <g id="编组" transform="translate(0.000000, 1457.000000)">
                          <g
                              id="Bars-/-Tab-Bars-/Tab-Bar2-/-Light"
                              transform="translate(0.000000, 1.000000)"
                >
                              <g
                                  id="tabbar/item-5"
                                  transform="translate(515.000000, 10.000000)"
                  >
                                  <g id="Group-5" transform="translate(21.000000, 0.000000)">
                                      <path
                                          d="M42.6112027,34.2241959 C44.4849001,34.2241959 46.0030946,35.7423904 46.0030946,37.6160878 L46.0030946,43.8725743 C46.0030946,45.2231636 44.9077379,46.3185203 43.5571486,46.3185203 L11.4186351,46.3185203 C10.0680458,46.3185203 8.97268919,45.2231636 8.97268919,43.8725743 L8.97268919,37.6160878 C8.97268919,35.7426011 10.4916188,34.2241959 12.3645811,34.2241959 L42.6112027,34.2241959 Z M27.6775541,8.97335135 C34.1944841,8.97335135 39.4902568,14.158397 39.4902568,20.5703784 C39.4902568,26.9823598 34.1944841,32.1674054 27.6775541,32.1674054 C21.1598451,32.1674054 15.8639054,26.9825247 15.8639054,20.5703784 C15.8639054,14.158232 21.1598451,8.97335135 27.6775541,8.97335135 Z"
                                          id="形状结合"
                      ></path>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
      )
};
