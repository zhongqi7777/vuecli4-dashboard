/** When your routing table is too long, you can split it into small modules**/

const demoRouter = [
  {
    path: "/china-map-demo1",
    component: () => import("@/views/demo/chinamap/demo1.vue"),
    name: "china-map-demo1",
    // meta: { title: "china-map-demo1", noCache: true },
  },
  {
    path: "/china-map-demo2",
    component: () => import("@/views/demo/chinamap/demo2.vue"),
    name: "china-map-demo1",
    meta: { title: "china-map-demo1", noCache: true },
  },
  {
    path: "/fill-height",
    component: () => import("@/views/demo/fill/height"),
    // meta: { title: "china-map-demo1", noCache: true },
  },
  {
    path: "/responsive",
    component: () => import("@/views/demo/responsive/index"),
    // meta: { title: "china-map-demo1", noCache: true },
  },
  {
    path: "/web-builder",
    component: () => import("@/views/demo/WebBuilder/index"),
    // meta: { title: "china-map-demo1", noCache: true },
  },
];

export default demoRouter;
