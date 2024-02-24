if (!self.define) {
  let s,
    e = {};
  const l = (l, i) => (
    (l = new URL(l + ".js", i).href),
    e[l] ||
      new Promise((e) => {
        if ("document" in self) {
          const s = document.createElement("script");
          (s.src = l), (s.onload = e), document.head.appendChild(s);
        } else (s = l), importScripts(l), e();
      }).then(() => {
        let s = e[l];
        if (!s) throw new Error(`Module ${l} didn’t register its module`);
        return s;
      })
  );
  self.define = (i, r) => {
    const n =
      s ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (e[n]) return;
    let a = {};
    const u = (s) => l(s, n),
      o = { module: { uri: n }, exports: a, require: u };
    e[n] = Promise.all(i.map((s) => o[s] || u(s))).then((s) => (r(...s), a));
  };
}
define(["./assets/workbox-a63bf7a6"], function (s) {
  "use strict";
  self.skipWaiting(),
    s.clientsClaim(),
    s.precacheAndRoute(
      [
        { url: "assets/_commonjs-dynamic-modules-h-SxKiO4.js", revision: null },
        { url: "assets/arc-Cx1GwNe0.js", revision: null },
        { url: "assets/array-Nw74a44z.js", revision: null },
        { url: "assets/bug-issue-template-RzHCT2ur.js", revision: null },
        { url: "assets/c4Diagram-9cddb37f-U1lQhn5M.js", revision: null },
        { url: "assets/classDiagram-bc733c3b-SpmTqKWh.js", revision: null },
        { url: "assets/classDiagram-v2-8931bdaf-IDErgn3D.js", revision: null },
        { url: "assets/createText-3df630b5-PHAfRAR3.js", revision: null },
        { url: "assets/directory-open-01563666-cQgJ4y3t.js", revision: null },
        { url: "assets/directory-open-4ed118d0-LU9zN15H.js", revision: null },
        { url: "assets/edges-49ac43a2-E1PB9T1p.js", revision: null },
        { url: "assets/erDiagram-f6946109-j7Liorsq.js", revision: null },
        { url: "assets/file-open-002ab408-YYr_q30i.js", revision: null },
        { url: "assets/file-open-7c801643-DzelrtLq.js", revision: null },
        { url: "assets/file-save-3189631c-fOa8IYo3.js", revision: null },
        { url: "assets/file-save-745eba88-h9NxcJsg.js", revision: null },
        {
          url: "assets/flowchart-elk-definition-5082a990-EJyowC4p.js",
          revision: null,
        },
        { url: "assets/flowDb-6a57c1b4-x9TpX-sb.js", revision: null },
        { url: "assets/flowDiagram-93327f21-l5ezeXg5.js", revision: null },
        { url: "assets/flowDiagram-v2-476db779-h9239Vlb.js", revision: null },
        { url: "assets/ganttDiagram-7ce12d6b-MOHRIiwf.js", revision: null },
        { url: "assets/gitGraphDiagram-1e960c50-a0RAjOew.js", revision: null },
        { url: "assets/image-blob-reduce.esm-kuDQZwjv.js", revision: null },
        { url: "assets/index-1fxs3qVS.js", revision: null },
        { url: "assets/index-5Jz4PfUi.js", revision: null },
        { url: "assets/index-a92ac404-e3_EsHoz.js", revision: null },
        { url: "assets/index-udZbbVju.css", revision: null },
        { url: "assets/index-ZdqelcSL.js", revision: null },
        { url: "assets/index.esm-evUcKND4.js", revision: null },
        { url: "assets/index.esm-mS5jt2h_.js", revision: null },
        { url: "assets/index.esm-v_fu183E.js", revision: null },
        { url: "assets/index.esm-VMwDyoU0.js", revision: null },
        { url: "assets/infoDiagram-264bed3e-eez4FgUQ.js", revision: null },
        { url: "assets/init-Hi12RPRh.js", revision: null },
        { url: "assets/journeyDiagram-31be0096-5ejIg45E.js", revision: null },
        { url: "assets/layout-iPdpZrTE.js", revision: null },
        { url: "assets/line-tDJjjyiY.js", revision: null },
        { url: "assets/linear--KuO5iQi.js", revision: null },
        {
          url: "assets/mindmap-definition-4fc2557c-7uWAGpzN.js",
          revision: null,
        },
        { url: "assets/path-aUcfwwLI.js", revision: null },
        { url: "assets/pica-dthc-Kl7.js", revision: null },
        { url: "assets/pieDiagram-157505fe-eIy-JsE_.js", revision: null },
        { url: "assets/quadrantDiagram-fd70f2d0-6j95prMK.js", revision: null },
        { url: "assets/random-username.esm-K7eb4aAo.js", revision: null },
        {
          url: "assets/requirementDiagram-19c99588-hmDZixcv.js",
          revision: null,
        },
        { url: "assets/roundRect-CCyChLky.js", revision: null },
        { url: "assets/selectAll-OHw68QLH.js", revision: null },
        { url: "assets/sequenceDiagram-5dfd0049-CQTJdq-I.js", revision: null },
        { url: "assets/stateDiagram-133e3642-5uV92EDd.js", revision: null },
        { url: "assets/stateDiagram-v2-6371a76b-BeSaP7Di.js", revision: null },
        { url: "assets/styles-5f89df53-Lh1sB0te.js", revision: null },
        { url: "assets/styles-aefe6593-KZksqI0t.js", revision: null },
        { url: "assets/styles-fa41df25-Y0CL2aBC.js", revision: null },
        { url: "assets/svgDraw-0fcc813d-KETrO_6d.js", revision: null },
        { url: "assets/svgDrawCommon-f26cad39-ycZDOrRe.js", revision: null },
        {
          url: "assets/timeline-definition-5ed366f4-cMRDHdmT.js",
          revision: null,
        },
        { url: "assets/workbox-window.prod.es5-prqDwDSL.js", revision: null },
        { url: "index.html", revision: "76f92ed4b5a136e2320af599188cc72e" },
        {
          url: "favicon.ico",
          revision: "1bcbbaf7639d13ce6e4abbd4a785f3dd",
        },
      ],
      {}
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(
      new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))
    ),
    s.registerRoute(
      /locales\/[^/]+.js/,
      new s.CacheFirst({
        cacheName: "locales",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 2592e3 }),
        ],
      }),
      "GET"
    );
});
