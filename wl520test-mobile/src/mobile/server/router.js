import Router from "koa-router";
import use from "@mdf/plugin-meta/lib/router";
import preview from "./controllers/preview";
import iconSVG from "./controllers/iconSVG";

const router = Router();
if (process.env.PREFIX === undefined) {
  process.env.PREFIX = "";
}
process.env.PREFIX && router.prefix(process.env.PREFIX);
use(router);

router.get("/view/:billtype/:billno", function (ctx) {
  ctx.render();
});

router.post("/server/hash", async function (ctx) {
    await preview.hash(ctx);
});
router.get("/server/preview",async function (ctx) {
  await preview.render(ctx);
});
router.get("/iconfont/geticonsvg", async function (ctx) {
    await iconSVG.getIconSVG(ctx);
});
router.get("/workbench/home/work", function (ctx) {
  ctx.render();
});
router.get("/workbench/home", function (ctx) {
  ctx.render();
});
router.get("/workbench", function (ctx) {
  ctx.render();
});
router.get("/workbench/login", function (ctx) {
  ctx.render();
});
router.get("/workbench/logincode", function (ctx) {
  ctx.render();
});
router.get("/workbench/home/mine", function (ctx) {
  ctx.render();
});
router.get("/workbench/config", function (ctx) {
  ctx.render();
});
router.get("/workbench/config/:config", function (ctx) {
  ctx.render();
});
router.get("/workbench/editor", function (ctx) {
  ctx.render();
});
router.get("/workbench/setting", function (ctx) {
  ctx.render();
});
router.get("/workbench/i18n", function (ctx) {
  ctx.render();
});
router.get("/workbench/region", function (ctx) {
  ctx.render();
});
router.get("/workbench/env", function (ctx) {
  ctx.render();
});
router.get("/workbench/envset", function (ctx) {
  ctx.render();
});
router.get("/workbench/envconfig/:id", function (ctx) {
  ctx.render();
});
router.get("/workbench/debug", function (ctx) {
  ctx.render();
});
router.get("/workbench/about", function (ctx) {
  ctx.render();
});
router.get("/workbench/otherlogin", function (ctx) {
  ctx.render();
});
router.get("/workbench/registerfirst", function (ctx) {
  ctx.render();
});
router.get("/workbench/registersecond", function (ctx) {
  ctx.render();
});
router.get("/workbench/findPwd", function (ctx) {
  ctx.render();
});
router.get("/workbench/findPwd/firststep", function (ctx) {
  ctx.render();
});
router.get("/workbench/findPwd/secondstep", function (ctx) {
  ctx.render();
});

// 微应用
router.get("/microapp/home", function (ctx) {
  ctx.render();
});

//奥分示例
router.get("/custom", function (ctx) {
  ctx.render();
});
router.get("/custom/login", function (ctx) {
  ctx.render();
});


export default router;
