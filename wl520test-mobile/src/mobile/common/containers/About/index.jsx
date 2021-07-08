import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { About } from "../components/Icon";
import { Icon } from "../../components/antd";
import BackIcon from "../../components/Icon/Back";
import { NavBar, Toast, Modal } from "../../components/antd";
import intl from "react-intl-universal";
import axios from "axios";
import "./index.css";
import logoImg from './logo.svg'
import mtl from "mtl-js-sdk";
import notice from "mtl-js-sdk/lib/plugins/notice";
import { getCheckVersion } from '@utils'
mtl.loadPlugin(notice);

const alert = Modal.alert;

import { getDomainPrefix } from '@utils'; 

 const DOMAIN_PREFIX = getDomainPrefix();

const AboutPage = () => {
  const history = useHistory();
  const [appVersion, setAppVersion] = useState("0");
  // const checkVersion = window.localStorage.getItem("checkVersion");
  const checkVersion = getCheckVersion();

  // const iconRrl =
  //   "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAA3NCSVQICAjb4U/gAAAI0UlEQVRYhc2ZWWxc1RnH/9+5y9xZvMQmcYkdL+AEQshCNpYuUFUqolBUqaUFuqhSQQHUBx7KAzRVJaqqlSr1sRWC0kDDoiYUQlBRQ4AgEsUEBxwSJ7UNcWzH66yeuffO3c75+uA4kOAGezKF/h9Hd8753f985/v+9w5ZiTj+nyS+aIDzpVf8TSKSUcQMItINHQArxZ8zUOfyzrbWZcMjIwMDH97/wP1b7rvPMq18IT86cvqjwZP9fX29vb09PT2u6wpNY6UqAKL51xAzHnvsT3ffdWekgompTH1dQ22yVhCBiJkBCCIAtuv0fHDkUNehfW/t279/v+eWGQswbgFAAK6+etWbb+xLJuIAFDMzC0077xoBYjABAAql0osvvbTzhZ1vvrZ3nlALAwJw7ebNO3bsbGxoAEBEDIAAZgUwMwFEZ0+KABgAgw92v7P1ka1dB7pA1QYCsG7duld2725Y1ACAcWYLBSaQgmIVKZa6MAQJQAAKAEiEMtz+7N9++fCvCvlClYGIaPnyzpd37Wpd1jbzCTMTETNLDmXk+aErVWAacVNPaEJnSCINpDFz3+DAj+/6yYneE9UEmmFav2Httqe3Xbask4gAMKsgssGq7OcKxRHHKxA0QmhpbMXrLGuRrtfqRr0Xhels/qc/vKfnvSNzrqzphlEBEICx0fGSnem8ojlmJg3DkMoPo6LvZ1xnbLp4yi6OZ/PDuUz/dOGjUnGo7I2FUSEKizLMWlb829+5vbu7Z/T0WDWBiOjY0b6Va9qTNVHJtoUwhNAce8xxhn13suxlcunR6cyUXy67brFcdhw36/sZJUsESKU2X7d5+9M7qgkEgJkPvdNzy63rLdOznWzRtjWjobamJWYYjptxihO26wcSEdj1vFLJc5yCREBCC8MglbD27DlYKJSqCQTAK3vjY+lvfL0zHtNjBksOnXLJi6KG+suaLrn0kkW1sbgVs+oTNUsz+WIQREr6wtAhDEHac8/vLRWd8xa82OHKjDf2dh/s6gm9CRVMxLRMKqFSqRRp0oscQqkuLpfURIutwsaV7YEyfOhKklLhZHrq9PDkpxe8WIcAgMTw4ORNX+3QYWsIDI003TSMuGEkNWGZemBqSCWSE0VHIrqypbkhVa8Z9U899fqxIwP/GyAgnbVbms0ljZEui4J8TdeEUIZmmlaClCPYz/uSGatXXFPfsAJaw6H3B//4u6flXNO3OkAA8jl308Z6ncoGPB2hhkDTY6A4Q3cDIRA2NTYLozEIwn+8+PrWR/7s++Gc61Seh84VHe/L9A2X451WwpwmirTEpZ5sDELTdtxSOXX43aF/Hz0yMTbRc7g/m7UvMP8rASIiOjsuAGYGGIx9b08sbe/UfNW0+IbpqFn6Y64vPzhx6rdbn5iayM6GlM/QfIFmCGLxeFtHx6qrrmpZtqympi4I/L7+Dw+8/VYunQbR+90j3/r+irb2r8VrL4+8ycDP2o7/h0e3TU1kAMyHZh5ARKxUW0f7j+66+8Ybb9q4cYNlxZWMmBWRRoRIRn4o97z22l+ffGLvnr3FYrJpyfowTAfltF/OHesZGT41LsRnZY5PbniB4WpZ1vfuuGPLli3XrFlLBKKZfHP2Tme2IWYFhhf67/UcPp0+tnrVZeXSgDM95JacnbuOP/vMofnT4L85lEgmHnroF/f87N5F9fWCZjMNzjmlzOpjLFKmKa7dtGGTWjOVPzUytM8v5grpUv/AFIEWFGHnADJj5hPb/nLrzbdoQoizCetTmk0dM5uRII0BaMaXGpe7LV95+/UnfY/HRnILosFco4MefvjB2755sy5mdlRzFiOR4HPSKIEhVUgsibmt/WumtSxdUNlceUE0cwKplVc2C8EMJmYANEdFztRNxJCAYlbMIbMCcxi5Cj5xmGpo+Wgo7/vBQoE+3alp1crW66/78qwvH/tDRCBmMKAAxZCKA+aQIaW0pbIBX6BMkIr9TGEKItV/YqRYPD9gXFjnO0REoTcd+FPMwYwXM78Gs1TsM0eAZMiZ4ybDklcaKJd6yvb7kdcnvT4ZDMhoyC4MNjfV3fmD7761/5Xrb9i8gEN/TlEzOjrqN6xuuv3mFq90TMlGTaSEWS8oyTABIQQBEQAiE6Qp6U5nT06d+pdAtrZucSK1iIhZ6MJqyY4f1a0ESQhj+aq1K7sOvjvftvgJIOpoa7ALzo5dx0+eKj/+eMfSlqVGLCUAhgeEAKJACQLAgnTJ7tjQe329B/z8cFPCl4tyUU0KRjyWrB0bz2oo1RqeW/jwZBrPb39hXiNjVh/XUGG67HoRkRhPT//z1e61Gza2d6wDDCYDZBDFQDpBSBUyy0L60OGDuzOTGa/k+Tm7kC+7fmiXfG5YPToxSHrCrLl874HSz+99xLHPz4TzBfqkiiXn78/v7urqDqVIpRYnrYZYrEaIhKYlhZZSQBAWp9MjXtG2HT836SLeaNY3t264zUzWNTa29hx3fv2bZ17a+apddBdEgwuPjjPPflLGE6klTYvb29uvXHFFa2vb2mvWrV+/JpU0HG8olxmKfNt13Ew2fXp0MJsfP9o7/vLLA1AsJcswqibQnNcLQVEUAWhsTD3w4CbTinl2FEWs6RSzBJH2+0ffCKUCCIqllAsFWmjIZ6WUEEIIkc+7z20/AV0jg8lgM07JhNnXO+V7IUueeTmyUJoKgM7RyYGp3g9yRrLG85TjSrssTxzPMEEIIiEqe5t2kY9BtGd3bxgaTkjpTDAyUs5PewRougbMO5Kdq4sN+WU3iMVTZszI591S0R8fLdhFz7QMqbiyV3oXG/JJUH/viFNe4jqObogoUsxMojJ3qgEE5snxXEQqCkNNaJ4f0cyUoUrsqQYQEHi+53pBEDJDBhJEgsRcoeXzAgJEWFaKoaSSgQSYBCk+01cXvFY1gBBFoaZpKmQlmZlICCj1BfShWbGMpBA0awkzKrSnWkAgEAFKSj7Tnyv/i6EKQAToppBKqdkMToTK7KkOEAOkaTKSM52QBClVYZsG8B/q4up4q1SC7QAAAABJRU5ErkJggg==";

  const [iconUrl, setIcon] = useState("");
  useEffect(() => {
    if (mtl.platform !== "h5") {
      mtl.getAppInfo({
        success: function (res) {
          console.log("-------getIcon-----", typeof res, res);
          let resObj = res;
          if (typeof res === "string") {
            try {
              resObj = JSON.parse(res);
            } catch (error) {
              resObj = res;
            }
          }
          const { icon = "" } = resObj;
          let iconBase = icon;
          if (icon.indexOf("data:image") < 0) {
            iconBase = `data:image/jpeg;base64,${icon}`;
          }
          setIcon(iconBase);
        },
        fail: function (err) {
          console.log("-------getIcon-----", err);
        },
      });
      mtl.getSystemInfo({
        success: function (data) {
          console.log("getSystemInfo", data);
          setAppVersion(data.YZVersion);
        },
        fail: function (err) {
          console.log("getSystemInfo_err", err);
        },
      });
    }
  }, []);

  // 检查更新
  const getUpdate = () => {
    mtl.getAppInfo({
      success: function (res) {
        console.log("xxxxxx getAppInfo: ", res);
        const appId = res.appId;
        const version = res.version;
        console.log("xxxxxx checkVersion: ", checkVersion);
        if (!checkVersion || !appId) {
          console.warn("获取应用连接失败");
          return
        }
        axios
          .get(checkVersion, {
            params: {
              applicationId: appId,
            },
            withCredentials: true,
          })
          .then((response) => {
            const data = response?.data?.data;
            console.log("xxxxxx response: ", response);
            console.log(
              "xxxxxx version: ",
              version,
              "  response version: ",
              data?.version
            );
            if (version !== data?.version && data?.downloadUrl) {
              const title = intl.get('upgradeTips');
              const message = `${intl.get('newVersionTips')} ${data?.version} ${data?.description}`
              alert(title, message, [
                { text: intl.get("cancel") },
                {
                  text: intl.get("OK"),
                  onPress: () => {
                    const url = data?.downloadUrl;
                    // TODO 做跳转唤起原生浏览器，传递参数 url
                    mtl.openSchema({
                      url: url,
                      success: function (res) {
                        console.log("-----openUrl-------", typeof res, res);
                      },
                      fail: function (err) {
                        console.log("-----openUrl: error-------", err);
                      },
                    });
                  },
                },
              ]);
            } else {
              Toast.success(intl.get("versionUpdateTips"), 3);
            }
          })
          .catch((error) => {
            console.error(error);
            Toast.fail(intl.get("abnormalNetInter"), 3);
          });
      },
      fail: function (err) {
        console.warn(err);
      },
    });
  };
  return (
    <div className="env-content">
      <NavBar
        mode="light"
        icon={
          <Link to={`${DOMAIN_PREFIX}/workbench/home/mine`} replace>
            <BackIcon />
          </Link>
        }
      >
        {intl.get("about")}
      </NavBar>

      <div className="app-icons">
        <div className='app-icon-background'><img className="app-icon" src={logoImg} /></div>
        <div className="app-name">v{appVersion}</div>
      </div>
      {checkVersion ? (
        <ul className="mine-list mine-about-ul" onClick={getUpdate}>
          <li className="mine-list-c">
            {/* <div className="mine-c-l">
              <About></About>
            </div> */}
            <div className="mine-c-r-line  mine-c-r-l">
              <span>{intl.get("checkVersion")}</span>
              <Icon style={{ color: "#c8c8cd" }} type="right" />
            </div>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default AboutPage;
