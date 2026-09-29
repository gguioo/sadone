import { defineComponent as p, openBlock as a, createElementBlock as d, normalizeClass as y, createElementVNode as s, toDisplayString as c, createStaticVNode as x, renderSlot as z, createCommentVNode as _, Fragment as v, renderList as k, createTextVNode as S, normalizeStyle as $, createVNode as C, computed as V, ref as g, withModifiers as A } from "vue";
const B = {
  viewBox: "0 0 240 64",
  class: "sd-ink",
  fill: "none",
  stroke: "var(--sd-ink)",
  "stroke-width": 1.8
}, T = { key: 0 }, D = { key: 1 }, O = { key: 2 }, U = { key: 3 }, N = { key: 4 }, W = { class: "sd-ribbon-text" }, E = /* @__PURE__ */ p({
  __name: "SRibbon",
  props: {
    text: { default: "Title" },
    variant: { default: "wing" }
  },
  setup(l) {
    const t = l;
    return (n, e) => (a(), d("div", {
      class: y(["sd-base sd-ribbon", `v-${t.variant}`])
    }, [
      (a(), d("svg", B, [
        t.variant === "wing" ? (a(), d("g", T, [...e[0] || (e[0] = [
          s("path", { d: "M56 20 Q120 8 184 20 L184 44 Q120 54 56 44 Z" }, null, -1),
          s("path", { d: "M56 20 36 26 46 32 38 40 58 44" }, null, -1),
          s("path", { d: "M184 20 204 26 194 32 202 40 182 44" }, null, -1)
        ])])) : t.variant === "curve" ? (a(), d("g", D, [...e[1] || (e[1] = [
          s("path", { d: "M50 44 Q56 14 120 14 Q184 14 190 44 Q160 36 120 36 Q80 36 50 44 Z" }, null, -1),
          s("path", { d: "M50 44 40 52M190 44 200 52" }, null, -1)
        ])])) : t.variant === "plain" ? (a(), d("g", O, [...e[2] || (e[2] = [
          s("path", { d: "M52 18h136v28H52z" }, null, -1),
          s("path", { d: "M52 18 40 24l12 6v10l-12 6 12 6M188 18l12 6-12 6v10l12 6-12 6" }, null, -1)
        ])])) : t.variant === "wide" ? (a(), d("g", U, [...e[3] || (e[3] = [
          s("path", { d: "M44 16h152a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H44a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4z" }, null, -1),
          s("path", { d: "M40 22l-10 10 10 10M200 22l10 10-10 10" }, null, -1)
        ])])) : (a(), d("g", N, [...e[4] || (e[4] = [
          s("path", { d: "M58 20 Q120 10 182 20 L182 46 Q120 56 58 46 Z" }, null, -1),
          s("path", { d: "M58 21c-8-6-18-6-22 0-3 5 2 11 10 12 5 .6 9-.6 12-4M182 21c8-6 18-6 22 0 3 5-2 11-10 12-5 .6-9-.6-12-4" }, null, -1),
          s("circle", {
            cx: "56",
            cy: "33",
            r: "3.2"
          }, null, -1),
          s("circle", {
            cx: "184",
            cy: "33",
            r: "3.2"
          }, null, -1)
        ])]))
      ])),
      s("span", W, c(t.text), 1)
    ], 2));
  }
}), u = (l, t) => {
  const n = l.__vccOpts || l;
  for (const [e, o] of t)
    n[e] = o;
  return n;
}, F = /* @__PURE__ */ u(E, [["__scopeId", "data-v-190730bf"]]), Q = {
  key: 0,
  class: "sd-frame-svg sd-ink",
  viewBox: "0 0 300 130",
  fill: "none",
  stroke: "var(--sd-ink)",
  "stroke-width": 1.8
}, R = {
  key: 1,
  class: "sd-frame-svg sd-ink",
  viewBox: "0 0 300 130",
  fill: "none",
  stroke: "var(--sd-ink)",
  "stroke-width": 1.6
}, P = {
  key: 2,
  class: "sd-frame-svg sd-ink",
  viewBox: "0 0 300 130",
  fill: "none",
  stroke: "var(--sd-ink)",
  "stroke-width": 1.8
}, j = {
  key: 3,
  class: "sd-frame-svg sd-ink",
  viewBox: "0 0 300 130",
  fill: "none",
  stroke: "var(--sd-ink-soft)",
  "stroke-width": 1
}, Z = {
  key: 4,
  class: "sd-frame-svg sd-ink",
  viewBox: "0 0 300 130",
  fill: "none",
  stroke: "var(--sd-ink)",
  "stroke-width": 1.7
}, Y = {
  key: 5,
  class: "sd-frame-css"
}, G = {
  key: 6,
  class: "sd-frame-slot"
}, q = /* @__PURE__ */ p({
  __name: "SFrame",
  props: {
    variant: { default: "dashed" }
  },
  setup(l) {
    const t = l;
    return (n, e) => (a(), d("div", {
      class: y(["sd-base sd-frame", `v-${t.variant}`])
    }, [
      t.variant === "cloud" ? (a(), d("svg", Q, [...e[0] || (e[0] = [
        s("path", { d: "M42 108c-16 0-26-10-24-24 1.6-11 10-18 21-19-2-14 8-26 23-27 8-.5 15 2 20 7 4-10 14-17 26-17 13 0 24 8 27 19 5-3 11-4 17-3 13 2 21 12 20 24 12 1 21 9 21 20 0 11-9 20-21 20z" }, null, -1),
        s("path", { d: "M228 30c3-3 8-3 11 0 3-3 8-3 11 0M233 27v-6M240 26v-5" }, null, -1)
      ])])) : t.variant === "wreath" ? (a(), d("svg", R, [...e[1] || (e[1] = [
        s("rect", {
          x: "28",
          y: "18",
          width: "244",
          height: "94",
          rx: "14"
        }, null, -1),
        s("path", { d: "M34 30c8-4 16-3 22 2M34 100c8 4 16 3 22-2M266 30c-8-4-16-3-22 2M266 100c-8 4-16 3-22-2" }, null, -1),
        s("path", { d: "M52 22c3-3 8-3 11 0M60 108c3 3 8 3 11 0M248 22c-3-3-8-3-11 0M240 108c-3 3-8 3-11 0" }, null, -1),
        s("path", { d: "M270 46l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" }, null, -1)
      ])])) : t.variant === "clip" ? (a(), d("svg", P, [...e[2] || (e[2] = [
        s("rect", {
          x: "30",
          y: "26",
          width: "240",
          height: "92",
          rx: "10",
          "stroke-dasharray": "1 0"
        }, null, -1),
        s("path", { d: "M138 26c-2-7 2-12 9-12h6c7 0 11 5 9 12M141 14v-3M159 14v-3" }, null, -1),
        s("circle", {
          cx: "150",
          cy: "18",
          r: "3.4"
        }, null, -1)
      ])])) : t.variant === "grid" ? (a(), d("svg", j, [...e[3] || (e[3] = [
        x('<rect x="30" y="14" width="240" height="104" rx="4" data-v-7defd0c9></rect><path d="M60 14v104M90 14v104M120 14v104M150 14v104M180 14v104M210 14v104M240 14v104M270 14v104" data-v-7defd0c9></path><path d="M30 40h240M30 66h240M30 92h240" data-v-7defd0c9></path><g stroke="var(--sd-ink)" stroke-width="1.6" data-v-7defd0c9><path d="M226 14c8-6 16-6 24 0M226 14c8-2 16-2 24 0" data-v-7defd0c9></path><rect x="230" y="8" width="16" height="9" rx="1.5" transform="rotate(-4 238 12)" data-v-7defd0c9></rect></g>', 4)
      ])])) : t.variant === "hearts" ? (a(), d("svg", Z, [...e[4] || (e[4] = [
        s("rect", {
          x: "34",
          y: "20",
          width: "232",
          height: "90",
          rx: "12",
          "stroke-dasharray": "7 6"
        }, null, -1),
        s("path", { d: "M52 34c-1.8-1.4-3.6-3-3.6-5 0-1.2.9-2 2-2 .7 0 1.3.3 1.6.9.3-.6.9-.9 1.6-.9 1.1 0 2 .8 2 2 0 2-1.8 3.6-3.6 5zM248 96c-1.8-1.4-3.6-3-3.6-5 0-1.2.9-2 2-2 .7 0 1.3.3 1.6.9.3-.6.9-.9 1.6-.9 1.1 0 2 .8 2 2 0 2-1.8 3.6-3.6 5z" }, null, -1),
        s("path", { d: "M60 96c-1.4-1.1-2.8-2.3-2.8-3.9 0-.9.7-1.6 1.6-1.6.5 0 1 .2 1.2.7.2-.5.7-.7 1.2-.7.9 0 1.6.7 1.6 1.6 0 1.6-1.4 2.8-2.8 3.9z" }, null, -1)
      ])])) : (a(), d("div", Y, [
        z(n.$slots, "default", {}, void 0, !0)
      ])),
      t.variant !== "dashed" ? (a(), d("div", G, [
        z(n.$slots, "default", {}, void 0, !0)
      ])) : _("", !0)
    ], 2));
  }
}), J = /* @__PURE__ */ u(q, [["__scopeId", "data-v-7defd0c9"]]), K = {
  class: "sd-note-bg sd-ink",
  viewBox: "0 0 220 240",
  fill: "none",
  stroke: "var(--sd-ink)",
  "stroke-width": 1.8
}, X = { key: 0 }, t1 = { key: 1 }, e1 = {
  key: 2,
  x: "30",
  y: "14",
  width: "160",
  height: "212",
  rx: "6"
}, s1 = { key: 3 }, a1 = { key: 4 }, d1 = ["transform"], l1 = {
  key: 0,
  x: "46",
  y: 66,
  width: "15",
  height: "15",
  rx: "2"
}, n1 = {
  key: 1,
  cx: "53",
  cy: "73",
  r: "7.5"
}, o1 = {
  key: 2,
  cx: "53",
  cy: "73",
  r: "2.6",
  fill: "var(--sd-ink)"
}, r1 = {
  key: 3,
  x1: "70",
  y1: "73.5",
  x2: "176",
  y2: "73.5",
  "stroke-dasharray": "0"
}, i1 = {
  key: 4,
  x1: "40",
  y1: "73.5",
  x2: "180",
  y2: "73.5",
  "stroke-dasharray": "5 5",
  stroke: "var(--sd-ink-soft)"
}, c1 = { key: 5 }, M1 = { key: 6 }, h1 = { class: "sd-note-inner" }, v1 = { class: "sd-note-title" }, p1 = {
  key: 0,
  class: "dot"
}, u1 = /* @__PURE__ */ p({
  __name: "SNote",
  props: {
    title: { default: "To Do List" },
    variant: { default: "todo" },
    rows: { default: 4 }
  },
  setup(l) {
    const t = l;
    return (n, e) => (a(), d("div", {
      class: y(["sd-base sd-note", `v-${t.variant}`])
    }, [
      (a(), d("svg", K, [
        t.variant === "check" ? (a(), d("g", X, [...e[0] || (e[0] = [
          s("path", { d: "M34 14h152l12 12v200H34z" }, null, -1),
          s("path", { d: "M186 14v12h12" }, null, -1),
          s("path", { d: "M148 10c2-5 6-7 11-5" }, null, -1)
        ])])) : t.variant === "notes" ? (a(), d("g", t1, [...e[1] || (e[1] = [
          s("path", { d: "M30 14h160v212H30z" }, null, -1),
          s("path", { d: "M186 14l-14 14" }, null, -1)
        ])])) : (a(), d("rect", e1)),
        t.variant === "memo" ? (a(), d("g", s1, [...e[2] || (e[2] = [
          s("path", {
            d: "M104 12c4-4 10-4 14 0M106 8c2-2 6-2 8 0M118 9c2-2 6-2 8 0",
            transform: "translate(-4 0)"
          }, null, -1)
        ])])) : t.variant === "notes" ? (a(), d("g", a1, [...e[3] || (e[3] = [
          s("path", { d: "M150 10c2-4 6-6 10-5M155 8l1-4" }, null, -1)
        ])])) : _("", !0),
        (a(!0), d(v, null, k(t.rows, (o) => (a(), d("g", {
          key: o,
          transform: `translate(0 ${(o - 1) * 38})`
        }, [
          ["todo", "check", "shopping"].includes(t.variant) ? (a(), d("rect", l1)) : t.variant === "plan" ? (a(), d("circle", n1)) : t.variant === "notes" ? (a(), d("circle", o1)) : _("", !0),
          t.variant !== "memo" ? (a(), d("line", r1)) : (a(), d("line", i1))
        ], 8, d1))), 128)),
        t.variant === "todo" ? (a(), d("g", c1, [...e[4] || (e[4] = [
          s("path", { d: "M182 96c2-5 6-8 11-9-1 5-4 8-9 9zM176 108c0-4 2-7 6-9-.4 4-2.4 7-6 9" }, null, -1)
        ])])) : t.variant === "shopping" ? (a(), d("g", M1, [...e[5] || (e[5] = [
          s("path", { d: "M158 196h34l-3.5-20h-27z M163 176l4-8M187 176l-4-8M164 182l2 8M180 182l-2 8M172 182v8" }, null, -1)
        ])])) : _("", !0)
      ])),
      s("div", h1, [
        s("div", v1, [
          S(c(t.title) + " ", 1),
          t.variant === "plan" ? (a(), d("span", p1, "♥")) : _("", !0)
        ]),
        z(n.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), _1 = /* @__PURE__ */ u(u1, [["__scopeId", "data-v-7fad7fba"]]), k1 = {
  class: "sd-bubble-svg sd-ink",
  viewBox: "0 0 260 110",
  fill: "var(--sd-paper)",
  stroke: "var(--sd-ink)",
  "stroke-width": 1.8
}, y1 = { key: 0 }, f1 = { key: 1 }, z1 = { key: 2 }, b1 = { key: 3 }, $1 = { key: 4 }, x1 = { key: 5 }, g1 = { key: 6 }, m1 = { class: "sd-bubble-text" }, w1 = /* @__PURE__ */ p({
  __name: "SBubble",
  props: {
    variant: { default: "cloud" }
  },
  setup(l) {
    const t = l;
    return (n, e) => (a(), d("div", {
      class: y(["sd-base sd-bubble", `v-${t.variant}`])
    }, [
      (a(), d("svg", k1, [
        t.variant === "cloud" ? (a(), d("g", y1, [...e[0] || (e[0] = [
          s("path", { d: "M56 84c-18 0-30-11-27-26 2-11 11-19 23-20-2-15 9-27 25-28 9-.5 17 2 22 8 5-11 16-18 29-18 14 0 27 9 30 21 6-3 12-4 19-3 14 2 23 13 22 26 13 1 22 10 22 21 0 11-10 19-23 19z" }, null, -1)
        ])])) : t.variant === "rect" ? (a(), d("g", f1, [...e[1] || (e[1] = [
          s("path", { d: "M28 22h204v56H120l-18 20 2-20H28z" }, null, -1)
        ])])) : t.variant === "tail" ? (a(), d("g", z1, [...e[2] || (e[2] = [
          s("path", { d: "M30 20h200v54H96l24 26-52-26H30z" }, null, -1)
        ])])) : t.variant === "dash" ? (a(), d("g", b1, [...e[3] || (e[3] = [
          s("ellipse", {
            cx: "122",
            cy: "48",
            rx: "92",
            ry: "34",
            "stroke-dasharray": "8 7"
          }, null, -1),
          s("path", { d: "M66 82c-4 5-9 8-15 10M58 88c-2 2-5 4-8 5" }, null, -1)
        ])])) : t.variant === "think" ? (a(), d("g", $1, [...e[4] || (e[4] = [
          s("path", { d: "M48 78c-16 0-26-9-24-21 1.6-10 9.5-17 20-18-2-13 8-24 22-25 8-.4 15 2 20 7 4-9 13-16 25-16 13 0 24 8 27 18 5-3 10-4 16-3 12 2 20 11 19 22 11 1 19 9 19 18 0 9-8 18-20 18z" }, null, -1),
          s("circle", {
            cx: "30",
            cy: "92",
            r: "6"
          }, null, -1),
          s("circle", {
            cx: "16",
            cy: "102",
            r: "3.4"
          }, null, -1)
        ])])) : t.variant === "heart" ? (a(), d("g", x1, [...e[5] || (e[5] = [
          s("path", { d: "M130 96S30 60 30 34c0-13 9.5-22 21-22 7 0 14 4 18 11 5-9 14-15 25-15 15 0 28 11 28 26 0 8-3 16-8 24" }, null, -1),
          s("path", { d: "M114 78c8 8 16 14 16 14s-40-6-62-24" }, null, -1)
        ])])) : (a(), d("g", g1, [...e[6] || (e[6] = [
          s("rect", {
            x: "26",
            y: "20",
            width: "208",
            height: "60",
            rx: "26"
          }, null, -1)
        ])]))
      ])),
      s("div", m1, [
        z(n.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), S1 = /* @__PURE__ */ u(w1, [["__scopeId", "data-v-a945582b"]]), C1 = {
  class: "sd-tag-bg sd-ink",
  viewBox: "0 0 120 40",
  fill: "var(--sd-paper)",
  stroke: "var(--sd-ink)",
  "stroke-width": 1.7
}, V1 = {
  key: 0,
  d: "M10 8h100a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6H10l-6-12z"
}, H1 = {
  key: 1,
  d: "M14 6h92a12 12 0 0 1 0 28H14A14 14 0 0 1 14 6z"
}, L1 = {
  key: 2,
  d: "M12 6h96l8 14-8 14H12l-8-14z"
}, I1 = {
  key: 3,
  d: "M12 7h96a8 8 0 0 1 0 26H12a13 13 0 0 1 0-26z"
}, A1 = { class: "sd-tag-text" }, B1 = /* @__PURE__ */ p({
  __name: "STag",
  props: {
    text: {},
    variant: { default: "point" }
  },
  setup(l) {
    const t = l, n = {
      point: "Point ♥",
      tips: "Tips ❀",
      important: "¡Important!",
      remember: "Remember 🎀",
      done: "Done ♥",
      okay: "Okay ☺",
      nice: "Nice ✦"
    };
    return (e, o) => (a(), d("span", {
      class: y(["sd-base sd-tag", `v-${t.variant}`])
    }, [
      (a(), d("svg", C1, [
        ["point", "done"].includes(t.variant) ? (a(), d("path", V1)) : ["tips", "nice"].includes(t.variant) ? (a(), d("path", H1)) : t.variant === "important" ? (a(), d("path", L1)) : (a(), d("path", I1))
      ])),
      s("span", A1, c(t.text || n[t.variant]), 1)
    ], 2));
  }
}), T1 = /* @__PURE__ */ u(B1, [["__scopeId", "data-v-85ea973b"]]), D1 = {
  class: "sd-label-bg sd-ink",
  viewBox: "0 0 120 150",
  fill: "var(--sd-paper)",
  stroke: "var(--sd-ink)",
  "stroke-width": 1.8
}, O1 = { key: 0 }, U1 = { key: 1 }, N1 = { key: 2 }, W1 = { key: 3 }, E1 = { key: 4 }, F1 = { key: 5 }, Q1 = { key: 6 }, R1 = { key: 7 }, P1 = {
  key: 0,
  class: "sd-label-text"
}, j1 = {
  key: 1,
  class: "sd-label-slot"
}, Z1 = /* @__PURE__ */ p({
  __name: "SLabelCard",
  props: {
    text: { default: "" },
    variant: { default: "tag" },
    rotate: { default: 0 }
  },
  setup(l) {
    const t = l;
    return (n, e) => (a(), d("div", {
      class: y(["sd-base sd-label", `v-${t.variant}`]),
      style: $({ transform: `rotate(${t.rotate}deg)` })
    }, [
      (a(), d("svg", D1, [
        t.variant === "tag" ? (a(), d("g", O1, [...e[0] || (e[0] = [
          s("path", {
            d: "M34 26h58l14 16-14 16v88H34V42L20 42z",
            transform: "translate(0 -16) rotate(0)"
          }, null, -1),
          s("path", { d: "M34 10h52l16 14-16 14H34zM20 24h14M20 24l8-5M20 24l8 5" }, null, -1),
          s("circle", {
            cx: "46",
            cy: "24",
            r: "4",
            fill: "var(--sd-paper)"
          }, null, -1)
        ])])) : t.variant === "tag-line" ? (a(), d("g", U1, [...e[1] || (e[1] = [
          s("path", {
            d: "M30 16h60v100a4 4 0 0 1-4 4H34a4 4 0 0 1-4-4z",
            "stroke-dasharray": "6 5"
          }, null, -1),
          s("path", { d: "M26 22c4-5 9-7 15-6" }, null, -1),
          s("circle", {
            cx: "44",
            cy: "28",
            r: "4"
          }, null, -1)
        ])])) : t.variant === "tag-write" ? (a(), d("g", N1, [...e[2] || (e[2] = [
          x('<path d="M26 20h68v116H26z" data-v-5bda8f08></path><path d="M60 20c3-5 9-6 13-1M60 20v-4M73 16v4" data-v-5bda8f08></path><line x1="36" y1="60" x2="84" y2="60" stroke-dasharray="5 5" data-v-5bda8f08></line><line x1="36" y1="82" x2="84" y2="82" stroke-dasharray="5 5" data-v-5bda8f08></line><path d="M70 34c2-3 6-3 8 0 2-3 6-3 8 0" transform="translate(-46 8)" data-v-5bda8f08></path>', 5)
        ])])) : t.variant === "tag-round" ? (a(), d("g", W1, [...e[3] || (e[3] = [
          s("ellipse", {
            cx: "60",
            cy: "70",
            rx: "42",
            ry: "48"
          }, null, -1),
          s("circle", {
            cx: "60",
            cy: "30",
            r: "4",
            fill: "var(--sd-paper)"
          }, null, -1),
          s("path", { d: "M60 26c0-8 4-13 12-15" }, null, -1)
        ])])) : t.variant === "bookmark" ? (a(), d("g", E1, [...e[4] || (e[4] = [
          s("path", { d: "M34 10h52v120l-26-16-26 16z" }, null, -1)
        ])])) : t.variant === "bookmark-dash" ? (a(), d("g", F1, [...e[5] || (e[5] = [
          s("path", {
            d: "M34 10h52v120l-26-16-26 16z",
            "stroke-dasharray": "6 5",
            fill: "none"
          }, null, -1)
        ])])) : t.variant === "bookmark-stripe" ? (a(), d("g", Q1, [...e[6] || (e[6] = [
          s("path", {
            d: "M34 10h52v120l-26-16-26 16z",
            fill: "none"
          }, null, -1),
          s("path", {
            d: "M40 12v96M50 12v104M60 12v108M70 12v104M80 12v96",
            "stroke-dasharray": "1 0"
          }, null, -1)
        ])])) : t.variant === "bookmark-heart" ? (a(), d("g", R1, [...e[7] || (e[7] = [
          s("path", { d: "M34 10h52v120l-26-16-26 16z" }, null, -1),
          s("path", { d: "M60 62c-4-3-8-6.5-8-11 0-2.6 2-4.4 4.3-4.4 1.5 0 2.9.7 3.7 2 .8-1.3 2.2-2 3.7-2 2.3 0 4.3 1.8 4.3 4.4 0 4.5-4 8-8 11z" }, null, -1)
        ])])) : _("", !0)
      ])),
      t.text ? (a(), d("div", P1, c(t.text), 1)) : (a(), d("div", j1, [
        z(n.$slots, "default", {}, void 0, !0)
      ]))
    ], 6));
  }
}), Y1 = /* @__PURE__ */ u(Z1, [["__scopeId", "data-v-5bda8f08"]]), G1 = {
  class: "sd-ink",
  viewBox: "0 0 150 26",
  stroke: "var(--sd-ink)",
  "stroke-width": 1.3
}, q1 = ["fill"], J1 = {
  key: 0,
  class: "sd-tape-text sd-base"
}, K1 = /* @__PURE__ */ p({
  __name: "SWashi",
  props: {
    pattern: { default: "dot" },
    text: { default: "" },
    rotate: { default: -3 },
    width: { default: 150 }
  },
  setup(l) {
    const t = l, n = {
      flower: "sdw-fl",
      grid: "sdw-gr",
      dot: "sdw-dot",
      stripe: "sdw-st",
      wave: "sdw-wv",
      cross: "sdw-cx",
      heart: "sdw-he",
      bow: "sdw-bw"
    };
    return (e, o) => (a(), d("div", {
      class: "sd-tape-wrap",
      style: $({ transform: `rotate(${t.rotate}deg)`, width: t.width + "px" })
    }, [
      (a(), d("svg", G1, [
        o[0] || (o[0] = x('<defs data-v-ec0602e7><pattern id="sdw-fl" width="18" height="18" patternUnits="userSpaceOnUse" data-v-ec0602e7><circle cx="9" cy="9" r="2.2" fill="none" data-v-ec0602e7></circle><circle cx="4" cy="9" r="1.1" fill="none" data-v-ec0602e7></circle><circle cx="14" cy="9" r="1.1" fill="none" data-v-ec0602e7></circle></pattern><pattern id="sdw-gr" width="9" height="9" patternUnits="userSpaceOnUse" data-v-ec0602e7><path d="M0 0h9v9" fill="none" data-v-ec0602e7></path></pattern><pattern id="sdw-dot" width="12" height="12" patternUnits="userSpaceOnUse" data-v-ec0602e7><circle cx="3" cy="3" r="1.8" fill="currentColor" stroke="none" data-v-ec0602e7></circle><circle cx="9" cy="9" r="1.8" fill="currentColor" stroke="none" data-v-ec0602e7></circle></pattern><pattern id="sdw-st" width="8" height="8" patternUnits="userSpaceOnUse" data-v-ec0602e7><path d="M-2 10 10-2M2 14 14 2" fill="none" data-v-ec0602e7></path></pattern><pattern id="sdw-wv" width="14" height="8" patternUnits="userSpaceOnUse" data-v-ec0602e7><path d="M0 6c3.5-5 10.5-5 14 0" fill="none" data-v-ec0602e7></path></pattern><pattern id="sdw-cx" width="10" height="10" patternUnits="userSpaceOnUse" data-v-ec0602e7><path d="M-2 2 12 12M12 2-2 12" fill="none" data-v-ec0602e7></path></pattern><pattern id="sdw-he" width="16" height="12" patternUnits="userSpaceOnUse" data-v-ec0602e7><path d="M8 9c-1.6-1.3-3.2-2.7-3.2-4.4 0-1 .8-1.8 1.7-1.8.6 0 1.1.3 1.5.8.4-.5.9-.8 1.5-.8.9 0 1.7.8 1.7 1.8 0 1.7-1.6 3.1-3.2 4.4z" fill="currentColor" stroke="none" data-v-ec0602e7></path></pattern><pattern id="sdw-bw" width="20" height="12" patternUnits="userSpaceOnUse" data-v-ec0602e7><circle cx="6" cy="6" r="2.4" fill="none" data-v-ec0602e7></circle><circle cx="14" cy="6" r="2.4" fill="none" data-v-ec0602e7></circle><path d="M8.2 6h3.6" fill="none" data-v-ec0602e7></path></pattern></defs>', 1)),
        s("path", {
          d: "M6 3h138l4 10-4 10H6l-4-10z",
          fill: `url(#${n[t.pattern]})`
        }, null, 8, q1)
      ])),
      t.text ? (a(), d("span", J1, c(t.text), 1)) : _("", !0)
    ], 4));
  }
}), H = /* @__PURE__ */ u(K1, [["__scopeId", "data-v-ec0602e7"]]), m = {
  // ---- 天气 ----
  sun: { d: ["M12 7.5a4.5 4.5 0 1 1-.2 9 4.5 4.5 0 0 1 .2-9z", "M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5 5l1.9 1.9M17.1 17.1 19 19M19 5l-1.9 1.9M6.9 17.1 5 19"] },
  moon: { d: ["M14.5 3.8a8.2 8.2 0 1 0 5.7 12.9A9 9 0 0 1 14.5 3.8z"] },
  cloud: { d: ["M6.2 17.5h10.4a3.9 3.9 0 0 0 .6-7.8 5.3 5.3 0 0 0-10.2-1.3 4 4 0 0 0-.8 9.1z"] },
  "cloud-rain": { d: ["M6.2 14.5h10.4a3.9 3.9 0 0 0 .6-7.8 5.3 5.3 0 0 0-10.2-1.3 4 4 0 0 0-.8 9.1z", "M8.5 17.5l-.9 2.6M12.5 17.5l-.9 2.6M16.5 17.5l-.9 2.6"] },
  umbrella: { d: ["M3.8 12.2a8.2 8.2 0 0 1 16.4 0z", "M12 4v.2M12 12.2v6.3a2 2 0 0 1-4 0"] },
  snowflake: { d: ["M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9", "M9.8 4.6 12 6.4l2.2-1.8M9.8 19.4 12 17.6l2.2 1.8"] },
  lightning: { d: ["M13.5 2.8 6.8 13.2h4.2l-1.3 8 7.5-11h-4.4z"] },
  rainbow: { d: ["M3.5 16.5a8.5 8.5 0 0 1 17 0", "M6.8 16.5a5.2 5.2 0 0 1 10.4 0", "M10 16.5a2 2 0 0 1 4 0"] },
  "shooting-star": { d: ["M14.5 12.6l2-2.8a1.6 1.6 0 0 0-2.2-2.2L11.4 9.5a1.7 1.7 0 0 0 2.4 2.4z", "M7 3.5 8.2 6M4 7l2.5 1.2M3 12h3"] },
  sparkles: { d: ["M9 4.5 10.2 8 13.7 9.2 10.2 10.4 9 13.9 7.8 10.4 4.3 9.2 7.8 8z", "M17.5 13l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"] },
  sparkle: { d: ["M12 3l1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6z"] },
  burst: { d: ["M12 4v5M12 15v5M4 12h5M15 12h5M6.3 6.3l3.5 3.5M14.2 14.2l3.5 3.5M17.7 6.3l-3.5 3.5M9.8 14.2l-3.5 3.5"] },
  saturn: { d: ["M9.5 4.9a7.2 7.2 0 1 1-4.6 8.9", "M4.5 16.5c2.8 2 7.5 1.6 11.2-1.2s5.2-7 3.3-9.4"] },
  "star-4": { d: ["M12 4l1.4 5.6L19 11l-5.6 1.4L12 18l-1.4-5.6L5 11l5.6-1.4z"] },
  wind: { d: ["M3.5 9h9a2.5 2.5 0 1 0-2.4-3.2M3.5 13h13a2.6 2.6 0 1 1-2.5 3.4M3.5 17h7"] },
  // ---- 植物 ----
  flower: { d: ["M12 9.2a2.8 2.8 0 1 1-.2 5.6 2.8 2.8 0 0 1 .2-5.6z", "M12 9.2c-.5-2 .5-3.5 0-5.4M14.7 10.3c1.7-1.3 3.6-1 5.3-2.2M14.5 13.7c2 .6 2.9 2.3 4.7 3M9.3 13.6c-1.8 1.1-2 3-3.8 4M9.5 10.3c-1.9-1-3.7-.3-5.5-1.2"] },
  tulip: { d: ["M8 4.5c.4 3 .7 5.4 2 6.5M16 4.5c-.4 3-.7 5.4-2 6.5M8 4.5 9.9 7 12 4.2 14.1 7 16 4.5", "M12 11v9M12 16.5c2.4-.3 3.8-1.8 4.2-3.9-2.3-.2-3.8.9-4.2 3.9zM12 15c-2.3-.4-3.5-1.8-3.8-3.7 2.1 0 3.4 1.2 3.8 3.7z"] },
  rose: { d: ["M12 5.5c2.4 0 4 1.6 4 3.6 0 2.3-1.8 4-4 4s-4-1.7-4-4c0-2 1.6-3.6 4-3.6z", "M12 7.4c1.2.2 2 1 2 2M8.5 12.5c1.7 1.5 5.3 1.5 7 0M12 13v7.5M12 17.5c2-.2 3.2-1.3 3.6-3M12 19c-1.9-.2-3-1.2-3.4-2.9"] },
  sunflower: { d: ["M12 9.5a2.5 2.5 0 1 1-.2 5 2.5 2.5 0 0 1 .2-5z", "M12 9.5V6.8M12 17v.8M9.8 10.2 7.6 8.6M14.2 10.2 16.4 8.6M9.9 14.5l-2.4 1.6M14.1 14.5l2.4 1.6", "M12 17.5c.1 2 .1 3-.2 4M12 20c1.6.1 2.6-.6 3-2-1.7-.3-2.7.3-3 2z"] },
  clover: { d: ["M12 11.5c-2.7 0-4.4-1.3-4.4-3.2C7.6 6.6 9 5.4 10.6 5.9c.7.2 1.2.8 1.4 1.6.2-.8.7-1.4 1.4-1.6 1.6-.5 3 .7 3 2.4 0 1.9-1.7 3.2-4.4 3.2z", "M12 11.5v8M12 15.5c1.8.2 3-1 3.3-2.8-1.9-.2-3 .8-3.3 2.8zM12 17.5c-1.7-.1-2.8-1-3.1-2.7 1.7-.1 2.8.9 3.1 2.7z"] },
  leaf: { d: ["M18.5 4.5C12 5 6.5 8.5 5.5 15.5c-.2 1.6.2 3 .9 4C13 19 18.5 12 18.5 4.5z", "M6.8 18.9C9.5 14 13 10.2 16.5 7"] },
  sprout: { d: ["M12 20.5v-7M12 13.5c0-3.4-1.8-5.3-4.7-5.6.2 3.2 2 5.3 4.7 5.6zM12 12.2c-.1-2.9 1.5-4.6 4.4-4.8-.2 2.9-1.7 4.6-4.4 4.8z"] },
  tree: { d: ["M12 3.5 6.8 10h2.7L5.5 15h13L14.5 10h2.7z", "M12 15v6M12 18.5c1.5 0 2.4-.7 2.8-1.9-1.4-.2-2.3.4-2.8 1.9z"] },
  branch: { d: ["M19 4.5c-6.5.5-11 3.5-13 9.5-.6 1.8-.6 3.7 0 5.5", "M14.5 8.5c-.5-1.8.2-3.2 1.9-4M11 12c-1.6-.8-2.2-2.2-1.9-4.2M8.6 15.5c-1.7-.4-2.6-1.6-2.7-3.5"] },
  berry: { d: ["M12 8.5v11M12 12c1.8-.2 3-1.4 3.3-3.3-1.9-.2-3 .8-3.3 3.3zM12 14.5c-1.8.2-3 1.4-3.3 3.3 1.9.2 3-.8 3.3-3.3z", "M12 8.5c-.3-2 .4-3.4 2.1-4.2.6 1.9 0 3.3-2.1 4.2z"] },
  // ---- 动物 ----
  cat: { d: ["M6.5 9.5 5.8 4.6l3.5 2.2M17.5 9.5l.7-4.9-3.5 2.2", "M12 5.8c4 0 6.8 2.6 6.8 6.2 0 3.7-2.9 6.4-6.8 6.4s-6.8-2.7-6.8-6.4c0-3.6 2.8-6.2 6.8-6.2z", "M9.3 12.2h.01M14.7 12.2h.01M12 14.4v1.4M10.2 16.4c1.1.7 2.5.7 3.6 0"] },
  dog: { d: ["M7 5.5C5 6 3.8 7.5 3.8 9.5c0 1.6.9 2.9 2.2 3.5M17 5.5c2 .5 3.2 2 3.2 4 0 1.6-.9 2.9-2.2 3.5", "M7 5.5h10M7 5.5v13M17 5.5v13M7 18.5h10M9.5 10.5h.01M14.5 10.5h.01M12 13.5v1.2M10.5 16c.9.5 2.1.5 3 0"] },
  bear: { d: ["M6.8 8.2a2.3 2.3 0 1 1 2.4-2M17.2 8.2a2.3 2.3 0 1 0-2.4-2", "M12 6.5c4 0 6.8 2.5 6.8 6 0 3.6-2.9 6.3-6.8 6.3s-6.8-2.7-6.8-6.3c0-3.5 2.8-6 6.8-6z", "M9.3 12.5h.01M14.7 12.5h.01M10.5 15.5c.9.6 2.1.6 3 0M12 14.2v1.3"] },
  rabbit: { d: ["M9.5 8.7C8 7.5 7.4 4.9 8.3 3.2c1.7.4 2.9 2.4 3 4.6M14.5 8.7c1.5-1.2 2.1-3.8 1.2-5.5-1.7.4-2.9 2.4-3 4.6", "M12 6.8c3.8 0 6.5 2.4 6.5 5.8 0 3.5-2.8 6.1-6.5 6.1s-6.5-2.6-6.5-6.1c0-3.4 2.7-5.8 6.5-5.8z", "M9.5 12.8h.01M14.5 12.8h.01M12 15v1.2M10.6 17.2c.9.5 1.9.5 2.8 0"] },
  butterfly: { d: ["M12 6.5c1.5-2.5 4.5-3.8 7-2.6 1.6 2.6.7 6.4-2 8.6 2.7 2.2 3.6 6 2 8.6-2.5 1.2-5.5-.1-7-2.6-1.5 2.5-4.5 3.8-7 2.6-1.6-2.6-.7-6.4 2-8.6-2.7-2.2-3.6-6-2-8.6 2.5-1.2 5.5.1 7 2.6z", "M12 5.5v13"] },
  paw: { d: ["M9.2 8.5a1.9 1.9 0 1 1-.2-3.8 1.9 1.9 0 0 1 .2 3.8zM14.8 8.5a1.9 1.9 0 1 1 .2-3.8 1.9 1.9 0 0 1-.2 3.8zM5.8 12.6a1.8 1.8 0 1 1-.2-3.6 1.8 1.8 0 0 1 .2 3.6zM18.2 12.6a1.8 1.8 0 1 1 .2-3.6 1.8 1.8 0 0 1-.2 3.6z", "M12 11c2.9 0 5.2 2 5.2 4.4 0 2-1.6 3.2-3.6 2.8-1-.2-2.2-.2-3.2 0-2 .4-3.6-.8-3.6-2.8C6.8 13 9.1 11 12 11z"] },
  // ---- 食物 ----
  cherry: { d: ["M12 4.5c2.5 1.5 4 3.5 4.5 6M12 4.5c-2.5 1.5-4 3.5-4.5 6", "M7.5 11a3 3 0 1 1-.2 6 3 3 0 0 1 .2-6zM16.5 11a3 3 0 1 1-.2 6 3 3 0 0 1 .2-6z", "M12 4.5c1.2-.9 2.6-1.2 4.2-.8-.5 1.6-1.8 2.3-4.2.8z"] },
  strawberry: { d: ["M12 7.5c3.4 0 6 2.2 6 5.2 0 3.6-3 6.8-6 6.8s-6-3.2-6-6.8c0-3 2.6-5.2 6-5.2z", "M9 4.5 12 7l3-2.5M12 7V4", "M9.5 12h.01M14.5 12h.01M12 14.5h.01M10.5 16.5h.01M13.5 16.5h.01"] },
  apple: { d: ["M12 8c2.8-1.6 6 .4 6 4 0 3.8-2.6 8-6 8s-6-4.2-6-8c0-3.6 3.2-5.6 6-4z", "M12 8c0-1.8.8-3 2.4-3.7M12 8c.2-1.5 1-2.6 2.5-3.2"] },
  lemon: { d: ["M5 13.5a6.8 6.8 0 0 1 11.6-4.8A6.8 6.8 0 0 1 5 13.5z", "M16.6 8.7c1.3-1.3 2.4-1.7 3.9-1.4M4.2 12.2 3 13.8M17.5 13.8c1 .8 1.4 1.9 1.3 3.4"] },
  watermelon: { d: ["M4 9.5c4.5-1.8 11.5-1.8 16 0-1 6-4.5 9.5-8 9.5s-7-3.5-8-9.5z", "M9.5 13h.01M14.5 13h.01M12 15.5h.01M8 15h.01M16 15h.01"] },
  carrot: { d: ["M8.5 15.5 4.8 19.2M6.2 13.2c-1.3 1.3-1.7 3-1.4 5M13.5 5.5l5 5-9.8 9.3c-1.6 1.5-3.9-.8-2.4-2.4z", "M15.5 3.5c.7 1.4.6 2.7-.5 3.9M18.5 6.5c-1.2 1.1-2.5 1.2-3.9.5"] },
  bread: { d: ["M5 10.5c0-2.5 3.1-4.5 7-4.5s7 2 7 4.5c0 1.2-.8 2.2-2 2.8v5.2H7v-5.2c-1.2-.6-2-1.6-2-2.8z", "M9.5 9.5c.6.6.6 1.4 0 2M14.5 9.5c.6.6.6 1.4 0 2"] },
  "rice-ball": { d: ["M12 4.5c4.2 0 7.5 4 7.5 8.5 0 3.6-2.4 6.5-7.5 6.5s-7.5-2.9-7.5-6.5c0-4.5 3.3-8.5 7.5-8.5z", "M12 11.5l1.5 2.5-1.5 2.5-1.5-2.5z"] },
  "fried-egg": { d: ["M12 5c4.4 0 7.6 3 7 6.5-.5 2.8-3.2 5.5-7 5.5s-6.5-2.7-7-5.5C4.4 8 7.6 5 12 5z", "M12 10a2.3 2.3 0 1 1-.2 4.6A2.3 2.3 0 0 1 12 10z"] },
  cake: { d: ["M5.5 20.5v-6c0-2 1.5-3.5 3.5-3.5h6c2 0 3.5 1.5 3.5 3.5v6z", "M5.5 20.5h13M12 11V8.5M9.5 20.5v-3M14.5 20.5v-3", "M12 8.5c-1.2-.8-1.4-1.9-.6-3.2.8 1 1.6 1.6.6 3.2zM12 8.5c1.2-.8 1.4-1.9.6-3.2"] },
  coffee: { d: ["M5.5 9h11v7a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4z", "M16.5 10.5H18a2.3 2.3 0 0 1 0 4.6h-1.5", "M9 3.5c-.8 1.1-.8 2.2 0 3.3M12.5 3.5c-.8 1.1-.8 2.2 0 3.3"] },
  jar: { d: ["M8 3.5h8M8.5 6A3.5 3.5 0 0 0 6 9.4v9.1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9.4A3.5 3.5 0 0 0 15.5 6", "M9.5 12.5h5M9.5 15.5h5"] },
  candy: { d: ["M12 7.5a4.5 4.5 0 1 1-.2 9 4.5 4.5 0 0 1 .2-9z", "M8 8 5.5 5.5M5.5 5.5v3M5.5 5.5h3M16 8l2.5-2.5M18.5 5.5v3M18.5 5.5h-3"] },
  // ---- 符号/其他 ----
  heart: { d: ["M12 19.5S4 14.5 4 9.2C4 6.6 6 5 8.2 5c1.6 0 3 .9 3.8 2.3C12.8 5.9 14.2 5 15.8 5 18 5 20 6.6 20 9.2c0 5.3-8 10.3-8 10.3z"] },
  "heart-fill": { d: ["M12 19.5S4 14.5 4 9.2C4 6.6 6 5 8.2 5c1.6 0 3 .9 3.8 2.3C12.8 5.9 14.2 5 15.8 5 18 5 20 6.6 20 9.2c0 5.3-8 10.3-8 10.3z"], fill: !0 },
  "star-fill": { d: ["M12 3.5l2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8z"], fill: !0 },
  diamond: { d: ["M7 4h10l4 5.5L12 20.5 3 9.5z", "M3 9.5h18M9.5 9.5 12 20l2.5-10.5M7 4l2.5 5.5L12 4l2.5 5.5L17 4"] },
  music: { d: ["M9 18.5V6l10-2v12.5", "M9 18.5a2.3 2.3 0 1 1-4.6 0 2.3 2.3 0 0 1 4.6 0zM19 16.5a2.3 2.3 0 1 1-4.6 0 2.3 2.3 0 0 1 4.6 0z"] },
  "music-2": { d: ["M10 18V5.5l8 2V18", "M10 18a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0zM18 18a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0z"] },
  headphone: { d: ["M4.5 14v-2a7.5 7.5 0 0 1 15 0v2", "M4.5 13.5h2.4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1zM19.5 13.5h-2.4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.4a1 1 0 0 0 1-1z"] },
  bow: { d: ["M12 12 5.5 8.5C4 7.7 3 8.6 3 10.4v3.2c0 1.8 1 2.7 2.5 1.9zM12 12l6.5-3.5C20 7.7 21 8.6 21 10.4v3.2c0 1.8-1 2.7-2.5 1.9z", "M12 9.5a2.5 2.5 0 1 1-.2 5 2.5 2.5 0 0 1 .2-5z"] },
  crown: { d: ["M4.5 17.5 3 8l4.8 3.2L12 4.5l4.2 6.7L21 8l-1.5 9.5z", "M4.5 17.5h15v3h-15z"] },
  gift: { d: ["M4.5 11.5h15v9h-15zM3.5 8h17v3.5h-17zM12 8v12", "M12 8s-3.8.4-4.6-1.5C6.7 5 8 3.6 9.6 4.2 11.3 4.8 12 8 12 8zM12 8s3.8.4 4.6-1.5C17.3 5 16 3.6 14.4 4.2 12.7 4.8 12 8 12 8z"] },
  balloon: { d: ["M12 3.5c3.3 0 5.8 2.4 5.8 5.6 0 3.5-2.9 6.4-5.8 6.4s-5.8-2.9-5.8-6.4C6.2 5.9 8.7 3.5 12 3.5z", "M12 15.5c0 1.8-.3 3-1.2 4M12 15.5l-.9 2.3c-.4 1 .1 1.9 1.1 2"] },
  smile: { d: ["M12 4a8 8 0 1 1-.2 16A8 8 0 0 1 12 4z", "M9 10h.01M15 10h.01M8.8 14c1.8 1.7 4.6 1.7 6.4 0"] }
}, w = {
  // ---- 文具/学习 ----
  pencil: { d: ["M4.5 19.5 5.2 16 16.7 4.5a1.8 1.8 0 0 1 2.6 2.6L7.8 18.6z", "M15.2 6 17.8 8.6M5.2 16 7.8 18.6"] },
  pen: { d: ["M5 19.5 5.5 16.5 16 6a1.7 1.7 0 0 1 2.4 2.4L8 18.9z", "M14.6 7.4l2 2M5.5 16.5l2 2"] },
  brush: { d: ["M18.5 4.5c1 1 1 2.4 0 3.4l-7.3 7.3-3.4-3.4L15.1 4.5c1-1 2.4-1 3.4 0z", "M7.8 11.8c-1.8.2-2.9 1.3-3.3 3.3-.2 1-.1 1.9-.9 2.9 1.5.6 3.4.5 4.6-.4 1-.8 1.4-1.8 1.3-3.1"] },
  crayon: { d: ["M5 19 6.5 12 15.5 3.5 19.5 7.5 11 16.5zM6.5 12l3 3", "M14 5l3.5 3.5"] },
  ruler: { d: ["M3.5 15.5 15.5 3.5l5 5-12 12z", "M7 12l2 2M10 9l2 2M13 6l2 2"] },
  scissors: { d: ["M6.5 5.5 17 18.5M17.5 5.5 7 18.5", "M5.5 4a2.2 2.2 0 1 1-.2 4.4A2.2 2.2 0 0 1 5.5 4zM5.5 16a2.2 2.2 0 1 1-.2 4.4A2.2 2.2 0 0 1 5.5 16z"] },
  clip: { d: ["M7 9V5.5a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 17 5.5V9", "M5 9h14l-1.2 10.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z"] },
  "binder-clip": { d: ["M8 3.5h8M9 3.5V9H7.5a1.5 1.5 0 0 0-1.4 2l2 9.5M15 3.5V9h1.5a1.5 1.5 0 0 1 1.4 2l-2 9.5", "M10.5 9h3v6h-3z"] },
  pin: { d: ["M12 3.5a1.6 1.6 0 0 1 .3 3.2l.2 5.3 2.5 2.5H9l2.5-2.5.2-5.3A1.6 1.6 0 0 1 12 3.5z", "M12 14.5V21"] },
  "correction-tape": { d: ["M4 13.5 13.5 4a2 2 0 0 1 2.8 0l3.7 3.7a2 2 0 0 1 0 2.8L10.5 20z", "M8 12l4 4M4 13.5 10.5 20a2 2 0 0 0 2.8 0l1.2-1.2-6.5-6.5z"] },
  envelope: { d: ["M3.5 6.5h17v11h-17z", "M3.5 6.5 12 13l8.5-6.5"] },
  "letter-heart": { d: ["M3.5 6.5h17v11h-17z", "M3.5 6.5 12 13l8.5-6.5", "M12 11s-3-1.9-3-4c0-1 .8-1.7 1.7-1.7.6 0 1.1.3 1.3.9.2-.6.7-.9 1.3-.9.9 0 1.7.7 1.7 1.7 0 2.1-3 4-3 4z"] },
  "paper-plane": { d: ["M3.5 11 20.5 3.5 14 20.5l-3.2-6.4z", "M20.5 3.5 10.8 14.1"] },
  bag: { d: ["M6.5 8.5h11l1.2 11a1.5 1.5 0 0 1-1.5 1.5H6.8a1.5 1.5 0 0 1-1.5-1.5z", "M9 10.5V6.8a3 3 0 0 1 6 0v3.7"] },
  camera: { d: ["M4.5 8.5h3l1.5-2h6l1.5 2h3a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18v-8a1.5 1.5 0 0 1 1.5-1.5z", "M12 10.5a3.5 3.5 0 1 1-.2 7 3.5 3.5 0 0 1 .2-7z"] },
  polaroid: { d: ["M4.5 4.5h15v15h-15z", "M4.5 15.5h15", "M7.5 7.5l2.5 3 2-2 2.5 3 1.5-1.5"] },
  clock: { d: ["M12 3.5a8.5 8.5 0 1 1-.2 17A8.5 8.5 0 0 1 12 3.5z", "M12 7v5.5l3.5 2"] },
  alarm: { d: ["M12 5.5a7 7 0 1 1-.2 14A7 7 0 0 1 12 5.5z", "M12 8.5V12l2.5 1.5M4.5 4 6.8 2.5M19.5 4 17.2 2.5"] },
  hourglass: { d: ["M6.5 3.5h11M6.5 20.5h11M7.5 3.5v3.2c0 1.8 4.5 3.3 4.5 5.3s-4.5 3.5-4.5 5.3v3.2M16.5 3.5v3.2c0 1.8-4.5 3.3-4.5 5.3s4.5 3.5 4.5 5.3v3.2"] },
  calendar: { d: ["M4.5 5.5h15v15h-15zM4.5 9.5h15M8 3.5v4M16 3.5v4", "M8 13h2M11 13h2M14 13h2M8 16.5h2M11 16.5h2"] },
  book: { d: ["M12 6.5c-1.8-1.4-4.2-1.8-7.5-1v13c3.3-.8 5.7-.4 7.5 1 1.8-1.4 4.2-1.8 7.5-1v-13c-3.3-.8-5.7-.4-7.5 1z", "M12 6.5v13"] },
  notebook: { d: ["M6 3.5h13v17H6a1.5 1.5 0 0 1-1.5-1.5v-14A1.5 1.5 0 0 1 6 3.5z", "M4.5 7H6M4.5 11H6M4.5 15H6M9.5 8.5h6M9.5 12h6"] },
  laptop: { d: ["M5.5 5.5h13a1 1 0 0 1 1 1v8h-15v-8a1 1 0 0 1 1-1z", "M3 17.5c0-1.5 1-3 2.5-3h13c1.5 0 2.5 1.5 2.5 3z"] },
  tablet: { d: ["M6.5 3.5h11a1.5 1.5 0 0 1 1.5 1.5v14a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19V5a1.5 1.5 0 0 1 1.5-1.5z", "M10.5 17.5h3"] },
  phone: { d: ["M8 3.5h8a1.5 1.5 0 0 1 1.5 1.5v14a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 0 1-1.5-1.5V5A1.5 1.5 0 0 1 8 3.5z", "M10.5 17.5h3"] },
  chat: { d: ["M4 5.5h16v10h-9l-4.5 4v-4H4z", "M8 9h8M8 11.5h5"] },
  "phone-call": { d: ["M7.5 4.5 9 3.5l2.5 3.5-1.7 1.7a10.8 10.8 0 0 0 5.5 5.5L17 12.5l3.5 2.5-1 1.5c-1 1.5-2.6 2-4.3 1.2-4.4-2-7.9-5.5-9.9-9.9-.8-1.7-.3-3.3 1.2-4.3z", "M14.5 3.5c2.5.6 4.4 2.5 5 5M14.5 6.5c1.3.4 2.3 1.4 2.7 2.7"] },
  "pin-location": { d: ["M12 3.5c3.6 0 6.3 2.6 6.3 6 0 4.4-6.3 11-6.3 11S5.7 13.9 5.7 9.5c0-3.4 2.7-6 6.3-6z", "M12 6.8a2.8 2.8 0 1 1-.2 5.6 2.8 2.8 0 0 1 .2-5.6z"] },
  house: { d: ["M4 11 12 4l8 7M6 9.5V20h12V9.5", "M10 20v-5.5h4V20"] },
  shop: { d: ["M4.5 9.5 6 4h12l1.5 5.5", "M4.5 9.5h15V20h-15z", "M9.5 20v-6h5v6"] },
  cart: { d: ["M3.5 4.5h2.5l2.2 11h10l2.3-8H7", "M9.5 19.5h.01M16.5 19.5h.01"] },
  "bag-shopping": { d: ["M5.5 7.5h13l1 12.5h-15z", "M9 10V6a3 3 0 0 1 6 0v4"] },
  basket: { d: ["M4 10h16l-1.5 9.5h-13z", "M8 10l3.5-6M16 10l-3.5-6M8 13.5l.7 3.5M12 13.5v3.5M16 13.5l-.7 3.5"] },
  wallet: { d: ["M4 6.5h16v12H4a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1z", "M3 8.5V7.2A1.7 1.7 0 0 1 4.7 5.5H17", "M15.5 12.5h2"] },
  key: { d: ["M14.5 3.5a5.5 5.5 0 1 1-4.2 9l-6.8 6.8v-3h3v-3h3l2.3-2.3a5.5 5.5 0 0 1 2.7-7.5z", "M16.5 7.5h.01"] },
  lock: { d: ["M6 10.5h12v10H6z", "M8.5 10.5V7a3.5 3.5 0 0 1 7 0v3.5", "M12 14v3"] },
  bulb: { d: ["M12 3.5a6 6 0 0 1 3.5 10.9c-.7.5-1 1.3-1 2.1h-5c0-.8-.3-1.6-1-2.1A6 6 0 0 1 12 3.5z", "M9.5 19.5h5M10.5 21.5h3"] },
  magnifier: { d: ["M10.5 4.5a6 6 0 1 1-.2 12 6 6 0 0 1 .2-12z", "M15 15l5 5"] },
  flag: { d: ["M6 21V3.5M6 4.5c2.5-1.6 5.5 1.4 8-.2 1.8-1.1 3.4-.8 4.5.7v7.5c-1.1-1.5-2.7-1.8-4.5-.7-2.5 1.6-5.5-1.4-8 .2"] },
  plane: { d: ["M10.5 13.5 4 11l1.5-1.5L10 10l4-4.5 3-1.5.5.5-1.5 3L11.5 12l.5 4.5L10.5 18z", "M7 17l-1.5 1.5M9.5 19.5 8 21"] },
  train: { d: ["M6.5 3.5h11v13h-11z", "M6.5 12.5h11M9.5 6.5h5M6.5 16.5 4.5 20M17.5 16.5l2 3.5", "M9 14.5h.01M15 14.5h.01"] },
  bus: { d: ["M5 4.5h14v13H5z", "M5 12.5h14M7.5 4.5V8M16.5 4.5V8M5 17.5v2M19 17.5v2", "M8 14.5h.01M16 14.5h.01"] },
  car: { d: ["M5 13.5 6.5 8a2 2 0 0 1 1.9-1.5h7.2A2 2 0 0 1 17.5 8L19 13.5v5h-2.5v-2h-9v2H5z", "M5 13.5h14M8 15.5h.01M16 15.5h.01"] },
  bike: { d: ["M6.5 13.5a4 4 0 1 1-.2 8 4 4 0 0 1 .2-8zM17.5 13.5a4 4 0 1 1-.2 8 4 4 0 0 1 .2-8z", "M6.5 13.5 10 7h5.5l2 6.5M10 7 14 13.5M12.5 7h3"] },
  "first-aid": { d: ["M8.5 6.5h7V9h4v10.5h-15V9h4z", "M8.5 6.5v-2h7v2M12 11.5v4M10 13.5h4"] },
  pill: { d: ["M8 12 3.7 7.7a3.8 3.8 0 0 1 5.4-5.4L13.4 6.6z", "M8 12l2.6-2.6 8.3 8.3a3.7 3.7 0 0 1-5.2 5.2z", "M6.4 4.4l4.2 4.2"] },
  medicine: { d: ["M6.5 8.5h11v12h-11z", "M9.5 8.5V5.5a2.5 2.5 0 0 1 5 0v3M12 12v5M9.5 14.5h5"] },
  dumbbell: { d: ["M7 8.5v7M4.5 9.5v5M17 8.5v7M19.5 9.5v5M7 12h10", "M2.5 12h2M19.5 12h2"] },
  headphones: { d: ["M4.5 14v-2a7.5 7.5 0 0 1 15 0v2", "M4.5 13.5h2.4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1zM19.5 13.5h-2.4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.4a1 1 0 0 0 1-1z"] },
  "flip-clock": { d: ["M4 4.5h16v15H4z", "M4 12h16M12 4.5v15", "M7 8h2M15 16h2"] }
}, X1 = { class: "sd-base sd-board" }, t2 = {
  class: "sd-board-bg sd-ink",
  viewBox: "0 0 240 170",
  fill: "none",
  stroke: "var(--sd-ink)",
  "stroke-width": 1.8
}, e2 = {
  key: 0,
  transform: "translate(20 18) scale(1.05)",
  fill: "none"
}, s2 = ["d"], a2 = ["y"], d2 = ["y1", "y2"], l2 = { class: "sd-board-inner" }, n2 = { class: "sd-board-title sd-ink" }, o2 = { class: "sd-board-body" }, r2 = /* @__PURE__ */ p({
  __name: "SBoard",
  props: {
    title: { default: "" },
    preset: { default: "ideas" },
    rows: { default: 3 }
  },
  setup(l) {
    const t = l, n = { ...m, ...w }, e = {
      ideas: "Ideas :",
      schedule: "Schedule :",
      goals: "Goals :",
      reminder: "Reminder :",
      study: "Study :",
      work: "Work :"
    }, o = {
      ideas: "bulb",
      schedule: "clock",
      goals: "pin-location",
      reminder: "bow",
      study: "book",
      work: "laptop"
    };
    return (M, r) => (a(), d("div", X1, [
      (a(), d("svg", t2, [
        r[0] || (r[0] = s("rect", {
          x: "8",
          y: "8",
          width: "224",
          height: "154",
          rx: "10"
        }, null, -1)),
        n[o[t.preset]] ? (a(), d("g", e2, [
          (a(!0), d(v, null, k(n[o[t.preset]].d, (i, h) => (a(), d("path", {
            key: h,
            d: i
          }, null, 8, s2))), 128))
        ])) : _("", !0),
        (a(!0), d(v, null, k(t.rows, (i) => (a(), d("g", { key: i }, [
          t.preset === "schedule" || t.preset === "goals" || t.preset === "work" ? (a(), d("rect", {
            key: 0,
            x: "22",
            y: 40 + (i - 1) * 34,
            width: "14",
            height: "14",
            rx: "2"
          }, null, 8, a2)) : _("", !0),
          s("line", {
            x1: "42",
            y1: 47 + (i - 1) * 34,
            x2: "218",
            y2: 47 + (i - 1) * 34
          }, null, 8, d2)
        ]))), 128))
      ])),
      s("div", l2, [
        s("div", n2, c(t.title || e[t.preset]), 1),
        s("div", o2, [
          z(M.$slots, "default", {}, void 0, !0)
        ])
      ])
    ]));
  }
}), i2 = /* @__PURE__ */ u(r2, [["__scopeId", "data-v-b7b12bae"]]), c2 = { class: "sd-base sd-stamp" }, M2 = {
  class: "sd-ink",
  viewBox: "0 0 76 88",
  fill: "var(--sd-paper)",
  stroke: "var(--sd-ink)",
  "stroke-width": 1.6
}, h2 = {
  transform: "translate(14 14) scale(2)",
  fill: "none"
}, v2 = ["d"], p2 = {
  key: 0,
  class: "sd-stamp-text"
}, u2 = /* @__PURE__ */ p({
  __name: "SStamp",
  props: {
    icon: { default: "flower" },
    text: { default: "" }
  },
  setup(l) {
    const t = l, n = { ...m, ...w };
    return (e, o) => {
      var M;
      return a(), d("div", c2, [
        (a(), d("svg", M2, [
          o[0] || (o[0] = s("path", {
            d: "M8 8h60v72H8z M8 8a4 4 0 0 1-4-4 4 4 0 0 0 4-4M20 8a4 4 0 0 1-4-4 4 4 0 0 0 4-4M32 8a4 4 0 0 1-4-4 4 4 0 0 0 4-4M44 8a4 4 0 0 1-4-4 4 4 0 0 0 4-4M56 8a4 4 0 0 1-4-4 4 4 0 0 0 4-4M68 8a4 4 0 0 1-4-4 4 4 0 0 0 4-4M80 8a4 4 0 0 1-4-4 4 4 0 0 0 4-4M8 0a4 4 0 0 0-4 4 4 4 0 0 1-4 4",
            transform: "translate(4 4)"
          }, null, -1)),
          s("g", h2, [
            (a(!0), d(v, null, k(((M = n[t.icon]) == null ? void 0 : M.d) || [], (r, i) => (a(), d("path", {
              key: i,
              d: r
            }, null, 8, v2))), 128))
          ])
        ])),
        t.text ? (a(), d("div", p2, c(t.text), 1)) : _("", !0)
      ]);
    };
  }
}), _2 = /* @__PURE__ */ u(u2, [["__scopeId", "data-v-bd6c527c"]]), k2 = {
  class: "sd-ink",
  viewBox: "0 0 120 130",
  fill: "none",
  stroke: "var(--sd-ink)",
  "stroke-width": 1.6
}, y2 = { key: 0 }, f2 = { key: 1 }, z2 = { class: "sd-wreath-center" }, b2 = /* @__PURE__ */ p({
  __name: "SWreath",
  props: {
    variant: { default: "round" },
    size: { default: 160 }
  },
  setup(l) {
    const t = l;
    return (n, e) => (a(), d("div", {
      class: "sd-base sd-wreath",
      style: $({ width: t.size + "px" })
    }, [
      (a(), d("svg", k2, [
        t.variant === "round" ? (a(), d("g", y2, [...e[0] || (e[0] = [
          x('<path d="M60 12c14 0 25 8 27 20M60 12c-14 0-25 8-27 20M87 32c8 4 13 12 13 21M33 32c-8 4-13 12-13 21M100 53c0 12-5 22-13 28M20 53c0 12 5 22 13 28M87 81c-2 9-10 16-20 18M33 81c2 9 10 16 20 18" data-v-21407218></path><path d="M87 22c6-2 11-1 15 3M33 22C27 20 22 21 18 25" data-v-21407218></path><path d="M92 25c3-3 8-3 11 0M92 25c3-1.5 8-1.5 11 0M28 25c-3-3-8-3-11 0M28 25c-3-1.5-8-1.5-11 0" data-v-21407218></path><path d="M60 100c-6 2-11 7-12 14M60 100c6 2 11 7 12 14" data-v-21407218></path><path d="M60 104c-5-4-11-4.5-16-1 4 5 10 6.5 16 3zM60 104c5-4 11-4.5 16-1-4 5-10 6.5-16 3z" data-v-21407218></path>', 5)
        ])])) : (a(), d("g", f2, [...e[1] || (e[1] = [
          s("path", { d: "M60 8 106 34v52L60 112 14 86V34z" }, null, -1),
          s("path", { d: "M52 14c3 3 3 7 0 10M68 14c-3 3-3 7 0 10M60 8v4M52 106c3-3 3-7 0-10M68 106c-3 3-3 7 0 10" }, null, -1),
          s("path", { d: "M14 60h4M102 60h4" }, null, -1)
        ])]))
      ])),
      s("div", z2, [
        z(n.$slots, "default", {}, void 0, !0)
      ])
    ], 4));
  }
}), $2 = /* @__PURE__ */ u(b2, [["__scopeId", "data-v-21407218"]]), x2 = { key: 0 }, g2 = { key: 1 }, m2 = { key: 2 }, w2 = { key: 3 }, S2 = { key: 4 }, C2 = /* @__PURE__ */ p({
  __name: "SCorner",
  props: {
    variant: { default: "vine" },
    flip: { type: Boolean, default: !1 },
    size: { default: 72 }
  },
  setup(l) {
    const t = l;
    return (n, e) => (a(), d("svg", {
      class: y(["sd-corner sd-ink", { flip: t.flip }]),
      viewBox: "0 0 80 80",
      fill: "none",
      stroke: "var(--sd-ink)",
      "stroke-width": 1.6,
      style: $({ width: t.size + "px" })
    }, [
      t.variant === "vine" ? (a(), d("g", x2, [...e[0] || (e[0] = [
        s("path", { d: "M8 72C8 40 24 14 60 8M8 72c-1-14 2-26 10-36" }, null, -1),
        s("path", { d: "M18 52c-4-1-6-4-6-8 4 0 7 2 8 6zM28 38c-4-1-6-4-6-8 4 0 7 2 8 6zM40 26c-3-2-4-5-3-9 4 1 6 4 6 8zM52 16c-3-2-4-5-3-9 4 1 6 4 6 8z" }, null, -1)
      ])])) : t.variant === "dash" ? (a(), d("g", g2, [...e[1] || (e[1] = [
        s("path", {
          d: "M6 74V20a14 14 0 0 1 14-14h54",
          "stroke-dasharray": "6 6"
        }, null, -1),
        s("path", { d: "M14 60c3-3 8-3 11 0M40 12c3-3 8-3 11 0" }, null, -1)
      ])])) : t.variant === "star" ? (a(), d("g", m2, [...e[2] || (e[2] = [
        s("path", {
          d: "M6 74V18M6 18h56",
          "stroke-dasharray": "2 4"
        }, null, -1),
        s("path", { d: "M20 34l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" }, null, -1),
        s("path", { d: "M40 12l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6z" }, null, -1)
      ])])) : t.variant === "leaf" ? (a(), d("g", w2, [...e[3] || (e[3] = [
        s("path", { d: "M8 72C10 42 26 18 64 10" }, null, -1),
        s("path", { d: "M22 50c6-1 10 1 12 6-6 1-10-1-12-6zM36 34c6-1 10 1 12 6-6 1-10-1-12-6zM52 20c5-1 9 1 11 5-5 1-9-1-11-5z" }, null, -1)
      ])])) : (a(), d("g", S2, [...e[4] || (e[4] = [
        s("path", { d: "M6 70V22a16 16 0 0 1 16-16h48" }, null, -1),
        s("path", { d: "M22 22c2-6 7-9 13-8M22 22c-6 2-9 7-8 13" }, null, -1),
        s("path", { d: "M22 12v6M19 15h6M50 6v6M47 9h6" }, null, -1)
      ])]))
    ], 6));
  }
}), V2 = /* @__PURE__ */ u(C2, [["__scopeId", "data-v-f3eaac77"]]), H2 = { class: "sd-polaroid-photo" }, L2 = { class: "sd-polaroid-caption" }, I2 = /* @__PURE__ */ p({
  __name: "SPolaroid",
  props: {
    caption: { default: "" },
    tape: { default: "grid" },
    rotate: { default: -2 }
  },
  setup(l) {
    const t = l;
    return (n, e) => (a(), d("div", {
      class: "sd-base sd-polaroid",
      style: $({ transform: `rotate(${t.rotate}deg)` })
    }, [
      C(H, {
        pattern: t.tape,
        rotate: -1,
        width: 96,
        class: "sd-polaroid-tape"
      }, null, 8, ["pattern"]),
      s("div", H2, [
        z(n.$slots, "default", {}, void 0, !0)
      ]),
      s("div", L2, c(t.caption), 1)
    ], 4));
  }
}), A2 = /* @__PURE__ */ u(I2, [["__scopeId", "data-v-252a98f4"]]), B2 = {
  key: 0,
  x1: "6",
  y1: "10",
  x2: "254",
  y2: "10",
  "stroke-dasharray": "7 6"
}, T2 = { key: 1 }, D2 = {
  key: 2,
  d: "M8 12c8-8 14-8 22 0s14 8 22 0 14-8 22 0 14 8 22 0 14-8 22 0 14 8 22 0 14-8 22 0 14 8 22 0 14-8 22 0 14 8 22 0 14-8 22 0"
}, O2 = { key: 3 }, U2 = { key: 4 }, N2 = { key: 5 }, W2 = {
  key: 6,
  d: "M6 10c6-7 11-7 17 0s11 7 17 0 11-7 17 0 11 7 17 0 11-7 17 0 11 7 17 0 11-7 17 0 11 7 17 0 11-7 17 0 11 7 17 0 11-7 17 0 11 7 17 0"
}, E2 = {
  key: 7,
  d: "M6 14c5-8 10-8 15 0s10 8 15 0 10-8 15 0 10 8 15 0 10-8 15 0 10 8 15 0 10-8 15 0 10-8 15 0 10 8 15 0 10-8 15 0 10-8 15 0 10-8 15 0 10-8 15 0"
}, F2 = { key: 8 }, Q2 = ["cx"], R2 = { key: 9 }, P2 = ["d"], j2 = {
  key: 10,
  d: "M8 10c4-6 9-6 13 0s9 6 13 0 9-6 13 0 9 6 13 0 9-6 13 0 9 6 13 0 9-6 13 0 9 6 13 0 9-6 13 0 9-6 13 0 9 6 13 0 9-6 13 0 9-6 13 0 9-6 13 0 9 6 13 0 9-6 13 0 9-6 13 0"
}, Z2 = { key: 11 }, Y2 = ["d"], G2 = /* @__PURE__ */ p({
  __name: "SDivider",
  props: {
    variant: { default: "vine" },
    width: { default: 260 }
  },
  setup(l) {
    const t = l;
    return (n, e) => (a(), d("svg", {
      class: "sd-divider sd-ink",
      viewBox: "0 0 260 20",
      fill: "none",
      stroke: "var(--sd-ink)",
      "stroke-width": 1.6,
      style: $({ width: t.width + "px" })
    }, [
      t.variant === "dash" ? (a(), d("line", B2)) : t.variant === "heart-line" ? (a(), d("g", T2, [...e[0] || (e[0] = [
        s("line", {
          x1: "10",
          y1: "10",
          x2: "112",
          y2: "10"
        }, null, -1),
        s("line", {
          x1: "148",
          y1: "10",
          x2: "250",
          y2: "10"
        }, null, -1),
        s("path", { d: "M130 14c-3.4-2.6-6.8-5.4-6.8-8.8 0-2.2 1.7-3.7 3.6-3.7 1.3 0 2.5.6 3.2 1.7.7-1.1 1.9-1.7 3.2-1.7 1.9 0 3.6 1.5 3.6 3.7 0 3.4-3.4 6.2-6.8 8.8z" }, null, -1)
      ])])) : t.variant === "vine" ? (a(), d("path", D2)) : t.variant === "bow-line" ? (a(), d("g", O2, [...e[1] || (e[1] = [
        x('<line x1="10" y1="10" x2="105" y2="10" data-v-3a9d0b03></line><line x1="155" y1="10" x2="250" y2="10" data-v-3a9d0b03></line><circle cx="121" cy="10" r="4.4" data-v-3a9d0b03></circle><circle cx="139" cy="10" r="4.4" data-v-3a9d0b03></circle><path d="M125.4 10h9.2" data-v-3a9d0b03></path>', 5)
      ])])) : t.variant === "star-dot" ? (a(), d("g", U2, [...e[2] || (e[2] = [
        x('<path d="M130 4l1.6 4.4L136 10l-4.4 1.6L130 16l-1.6-4.4L124 10l4.4-1.6z" data-v-3a9d0b03></path><circle cx="90" cy="10" r="1.6" fill="currentColor" stroke="none" data-v-3a9d0b03></circle><circle cx="110" cy="10" r="1.6" fill="currentColor" stroke="none" data-v-3a9d0b03></circle><circle cx="170" cy="10" r="1.6" fill="currentColor" stroke="none" data-v-3a9d0b03></circle><circle cx="190" cy="10" r="1.6" fill="currentColor" stroke="none" data-v-3a9d0b03></circle>', 5)
      ])])) : t.variant === "diamond-wave" ? (a(), d("g", N2, [...e[3] || (e[3] = [
        s("path", {
          d: "M6 10c3-4 6-4 9 0s6 4 9 0",
          transform: "translate(0 0)"
        }, null, -1),
        s("path", { d: "M30 6l4 4-4 4M50 6l4 4-4 4M70 6l4 4-4 4M90 6l4 4-4 4M110 6l4 4-4 4M130 6l4 4-4 4M150 6l4 4-4 4M170 6l4 4-4 4M190 6l4 4-4 4M210 6l4 4-4 4M230 6l4 4-4 4" }, null, -1)
      ])])) : t.variant === "wave" ? (a(), d("path", W2)) : t.variant === "wave2" ? (a(), d("path", E2)) : t.variant === "dots" ? (a(), d("g", F2, [
        (a(), d(v, null, k(17, (o) => s("circle", {
          key: o,
          cx: 10 + (o - 1) * 15,
          cy: "10",
          r: "1.8",
          fill: "currentColor",
          stroke: "none"
        }, null, 8, Q2)), 64))
      ])) : t.variant === "slash" ? (a(), d("g", R2, [
        (a(), d(v, null, k(17, (o) => s("path", {
          key: o,
          d: `M${6 + (o - 1) * 15} 14l7-8`
        }, null, 8, P2)), 64))
      ])) : t.variant === "loop" ? (a(), d("path", j2)) : t.variant === "heart-chain" ? (a(), d("g", Z2, [
        (a(), d(v, null, k(8, (o) => s("path", {
          key: o,
          d: `M${16 + (o - 1) * 32} 12c-2.4-1.8-4.8-3.8-4.8-6.2 0-1.5 1.2-2.6 2.5-2.6.9 0 1.8.5 2.3 1.2.5-.7 1.4-1.2 2.3-1.2 1.3 0 2.5 1.1 2.5 2.6 0 2.4-2.4 4.4-4.8 6.2z`,
          transform: "translate(0 -1)"
        }, null, 8, Y2)), 64))
      ])) : _("", !0)
    ], 4));
  }
}), q2 = /* @__PURE__ */ u(G2, [["__scopeId", "data-v-3a9d0b03"]]), J2 = { key: 0 }, K2 = { key: 1 }, X2 = { key: 2 }, tt = { key: 3 }, et = { key: 4 }, st = { key: 5 }, at = { key: 6 }, dt = ["cx"], lt = /* @__PURE__ */ p({
  __name: "SArrow",
  props: {
    variant: { default: "straight" },
    width: { default: 120 }
  },
  setup(l) {
    const t = l;
    return (n, e) => (a(), d("svg", {
      class: "sd-arrow sd-ink",
      viewBox: "0 0 120 32",
      fill: "none",
      stroke: "var(--sd-ink)",
      "stroke-width": 1.8,
      style: $({ width: t.width + "px" })
    }, [
      t.variant === "straight" ? (a(), d("g", J2, [...e[0] || (e[0] = [
        s("line", {
          x1: "8",
          y1: "16",
          x2: "104",
          y2: "16"
        }, null, -1),
        s("path", { d: "M96 9c3 3 6 5.5 10 7-4 1.5-7 4-10 7" }, null, -1)
      ])])) : t.variant === "dash" ? (a(), d("g", K2, [...e[1] || (e[1] = [
        s("line", {
          x1: "8",
          y1: "16",
          x2: "100",
          y2: "16",
          "stroke-dasharray": "7 6"
        }, null, -1),
        s("path", { d: "M94 9c3 3 6 5.5 10 7-4 1.5-7 4-10 7" }, null, -1)
      ])])) : t.variant === "curve" ? (a(), d("g", X2, [...e[2] || (e[2] = [
        s("path", { d: "M8 24C30 8 62 6 100 13" }, null, -1),
        s("path", { d: "M92 7c3.5 2.4 6.5 4.4 11 6-4 1.8-7 4.2-10.5 7.4" }, null, -1)
      ])])) : t.variant === "thick" ? (a(), d("g", tt, [...e[3] || (e[3] = [
        s("path", {
          d: "M8 22c14-8 30-12 88-12l-14-5M96 10l10 0 2 2-4 4-8 2",
          "stroke-width": "2.6"
        }, null, -1)
      ])])) : t.variant === "wavy" ? (a(), d("g", et, [...e[4] || (e[4] = [
        s("path", { d: "M8 16c5-7 10-7 15 0s10 7 15 0 10-7 15 0 10 7 15 0 10-7 15 0 10 7 15 0" }, null, -1),
        s("path", { d: "M90 9c3 3 6 5.5 10 7-4 1.5-7 4-10 7" }, null, -1)
      ])])) : t.variant === "hook" ? (a(), d("g", st, [...e[5] || (e[5] = [
        s("path", { d: "M14 26c0-12 10-20 24-20 14 0 22 6 24 14" }, null, -1),
        s("path", { d: "M56 15c2.6 1.6 5 2.6 9 3-3.4 2-5.4 4.2-7 8" }, null, -1)
      ])])) : t.variant === "dotted" ? (a(), d("g", at, [
        (a(), d(v, null, k(7, (o) => s("circle", {
          key: o,
          cx: 10 + (o - 1) * 14,
          cy: 16,
          r: "1.7",
          fill: "currentColor",
          stroke: "none"
        }, null, 8, dt)), 64)),
        e[6] || (e[6] = s("path", { d: "M96 9c3 3 6 5.5 10 7-4 1.5-7 4-10 7" }, null, -1))
      ])) : _("", !0)
    ], 4));
  }
}), nt = /* @__PURE__ */ u(lt, [["__scopeId", "data-v-83451958"]]), ot = ["width", "height"], rt = ["d", "fill"], it = /* @__PURE__ */ p({
  __name: "SDoodle",
  props: {
    name: {},
    size: { default: 26 }
  },
  setup(l) {
    const t = l, n = { ...m, ...w }, e = V(() => n[t.name]);
    return (o, M) => e.value ? (a(), d("svg", {
      key: 0,
      width: t.size,
      height: t.size,
      viewBox: "0 0 24 24",
      class: "sd-doodle sd-ink",
      fill: "none",
      stroke: "var(--sd-ink)",
      "stroke-width": 1.7
    }, [
      (a(!0), d(v, null, k(e.value.d, (r, i) => (a(), d("path", {
        key: i,
        d: r,
        fill: e.value.fill ? "currentColor" : "none"
      }, null, 8, rt))), 128))
    ], 8, ot)) : _("", !0);
  }
}), ct = /* @__PURE__ */ u(it, [["__scopeId", "data-v-59163328"]]), Mt = {
  viewBox: "0 0 28 28",
  class: "sd-ink",
  fill: "none",
  stroke: "var(--sd-ink)",
  "stroke-width": 1.8
}, ht = {
  key: 0,
  class: "tick",
  d: "M8 14.5 12.5 19 21 8.5",
  stroke: "var(--sd-accent-2)",
  "stroke-width": 2.6
}, vt = /* @__PURE__ */ p({
  __name: "SCheckbox",
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: t }) {
    const n = l, e = t, o = g(n.modelValue);
    function M() {
      o.value = !o.value, e("update:modelValue", o.value);
    }
    return (r, i) => (a(), d("label", {
      class: "sd-base sd-checkbox",
      onClick: A(M, ["prevent"])
    }, [
      (a(), d("svg", Mt, [
        s("rect", {
          x: "3.5",
          y: "3.5",
          width: "21",
          height: "21",
          rx: "3.5",
          class: y({ dim: o.value })
        }, null, 2),
        o.value ? (a(), d("path", ht)) : _("", !0)
      ])),
      n.label ? (a(), d("span", {
        key: 0,
        class: y(["sd-checkbox-label", { strike: o.value }])
      }, c(n.label), 3)) : _("", !0)
    ]));
  }
}), L = /* @__PURE__ */ u(vt, [["__scopeId", "data-v-7bdac4b0"]]), pt = { class: "sd-base sd-todolist" }, ut = { class: "sd-todo-title" }, _t = {
  key: 0,
  class: "mark"
}, kt = /* @__PURE__ */ p({
  __name: "STodoList",
  props: {
    title: { default: "To Do List" },
    items: {},
    mark: { default: "❀" }
  },
  setup(l) {
    const t = l, n = g({});
    return (e, o) => (a(), d("div", pt, [
      s("div", ut, [
        S(c(t.title) + " ", 1),
        t.mark ? (a(), d("span", _t, c(t.mark), 1)) : _("", !0)
      ]),
      s("ul", null, [
        (a(!0), d(v, null, k(t.items, (M, r) => (a(), d("li", { key: r }, [
          C(L, {
            modelValue: n.value[r],
            "onUpdate:modelValue": (i) => n.value[r] = i,
            label: M
          }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
        ]))), 128))
      ]),
      z(e.$slots, "default", {}, void 0, !0)
    ]));
  }
}), yt = /* @__PURE__ */ u(kt, [["__scopeId", "data-v-5d2e90bc"]]), ft = {
  key: 0,
  class: "sd-hb-title"
}, zt = {
  viewBox: "0 0 20 20",
  class: "sd-ink",
  fill: "none",
  stroke: "var(--sd-ink)",
  "stroke-width": 1.6,
  width: "18"
}, bt = {
  key: 1,
  class: "sd-hb-row"
}, $t = ["onClick"], xt = { class: "sd-wk-grid" }, gt = { class: "sd-wk-day" }, mt = ["onClick"], wt = { class: "sd-mood-row" }, St = ["onClick"], Ct = /* @__PURE__ */ p({
  __name: "SHabit",
  props: {
    variant: { default: "habit" },
    title: { default: "Habit Tracker" }
  },
  setup(l) {
    const t = l, n = ["M", "T", "W", "T", "F", "S", "S"], e = g({});
    function o(i) {
      e.value[i] = !e.value[i];
    }
    const M = ["☺", "😐", "☹", "😤"], r = g(0);
    return (i, h) => (a(), d("div", {
      class: y(["sd-base sd-habit", `v-${t.variant}`])
    }, [
      t.variant === "habit" ? (a(), d("div", ft, [
        (a(), d("svg", zt, [...h[0] || (h[0] = [
          s("path", { d: "M10 3a6.5 6.5 0 1 1-.2 13A6.5 6.5 0 0 1 10 3z" }, null, -1),
          s("path", { d: "M7.8 8.2h.01M12.2 8.2h.01M7.8 11.4c1.4 1.3 3 1.3 4.4 0" }, null, -1)
        ])])),
        S(" " + c(t.title), 1)
      ])) : _("", !0),
      t.variant === "habit" ? (a(), d("div", bt, [
        (a(), d(v, null, k(7, (f) => s("button", {
          key: f,
          class: y(["sd-hb-dot", { on: e.value[f] }]),
          onClick: (b) => o(f),
          type: "button"
        }, [...h[1] || (h[1] = [
          s("span", null, "☺", -1)
        ])], 10, $t)), 64))
      ])) : t.variant === "weekly" ? (a(), d(v, { key: 2 }, [
        h[3] || (h[3] = s("div", { class: "sd-hb-title" }, "Weekly", -1)),
        s("div", xt, [
          (a(), d(v, null, k(n, (f, b) => s("div", {
            key: b,
            class: "sd-wk-col"
          }, [
            s("span", gt, c(f), 1),
            s("button", {
              class: y(["sd-hb-dot sm", { on: e.value[b] }]),
              onClick: (I) => o(b),
              type: "button"
            }, [...h[2] || (h[2] = [
              s("span", null, "✓", -1)
            ])], 10, mt)
          ])), 64))
        ])
      ], 64)) : (a(), d(v, { key: 3 }, [
        h[4] || (h[4] = s("div", { class: "sd-hb-title" }, "Mood :", -1)),
        s("div", wt, [
          (a(), d(v, null, k(M, (f, b) => s("button", {
            key: b,
            class: y(["sd-mood", { on: r.value === b }]),
            onClick: (I) => r.value = b,
            type: "button"
          }, c(f), 11, St)), 64))
        ])
      ], 64))
    ], 2));
  }
}), Vt = /* @__PURE__ */ u(Ct, [["__scopeId", "data-v-b023d8db"]]), Ht = { class: "sd-base sd-cal" }, Lt = { class: "sd-cal-title" }, It = { class: "sd-cal-head" }, At = { class: "sd-cal-grid" }, Bt = { class: "n" }, Tt = /* @__PURE__ */ p({
  __name: "SCalendar",
  props: {
    year: { default: 2026 },
    month: { default: 9 },
    marks: { default: () => ({ 14: "heart", 20: "star" }) },
    title: { default: "Monthly ♥" }
  },
  setup(l) {
    const t = l, n = ["M", "T", "W", "T", "F", "S", "S"], e = V(() => {
      const o = t.year, M = t.month - 1, r = (new Date(o, M, 1).getDay() + 6) % 7, i = new Date(o, M + 1, 0).getDate(), h = Array(r).fill(null);
      for (let f = 1; f <= i; f++) h.push(f);
      for (; h.length % 7; ) h.push(null);
      return h;
    });
    return (o, M) => (a(), d("div", Ht, [
      s("div", Lt, c(t.title), 1),
      s("div", It, [
        (a(), d(v, null, k(n, (r, i) => s("span", { key: i }, c(r), 1)), 64))
      ]),
      s("div", At, [
        (a(!0), d(v, null, k(e.value, (r, i) => (a(), d("div", {
          key: i,
          class: "sd-cal-cell"
        }, [
          r ? (a(), d(v, { key: 0 }, [
            s("span", Bt, c(r), 1),
            t.marks[r] ? (a(), d("span", {
              key: 0,
              class: y(["mk", t.marks[r]])
            }, c(t.marks[r] === "heart" ? "♥" : t.marks[r] === "star" ? "★" : "●"), 3)) : _("", !0)
          ], 64)) : _("", !0)
        ]))), 128))
      ])
    ]));
  }
}), Dt = /* @__PURE__ */ u(Tt, [["__scopeId", "data-v-af89ef32"]]), Ot = { class: "sd-base sd-date" }, Ut = {
  class: "sd-ink",
  viewBox: "0 0 220 34",
  fill: "none",
  stroke: "var(--sd-ink)",
  "stroke-width": 1.7
}, Nt = {
  x: "112",
  y: "22",
  class: "sd-date-txt"
}, Wt = {
  x: "158",
  y: "22",
  class: "sd-date-txt"
}, Et = {
  x: "18",
  y: "22",
  class: "sd-date-txt"
}, Ft = /* @__PURE__ */ p({
  __name: "SDateChip",
  props: {
    variant: { default: "date" },
    year: { default: "26" },
    month: { default: "09" },
    day: { default: "29" },
    dday: { default: 7 }
  },
  setup(l) {
    const t = l;
    return (n, e) => (a(), d("div", Ot, [
      (a(), d("svg", Ut, [
        e[4] || (e[4] = s("rect", {
          x: "3",
          y: "5",
          width: "214",
          height: "24",
          rx: "7"
        }, null, -1)),
        t.variant === "date" ? (a(), d(v, { key: 0 }, [
          e[0] || (e[0] = s("text", {
            x: "18",
            y: "22",
            class: "sd-date-txt"
          }, "Date :", -1)),
          s("text", Nt, c(t.year), 1),
          e[1] || (e[1] = s("text", {
            x: "140",
            y: "22",
            class: "sd-date-txt"
          }, "/", -1)),
          s("text", Wt, c(t.month), 1),
          e[2] || (e[2] = s("text", {
            x: "186",
            y: "22",
            class: "sd-date-txt"
          }, "/", -1))
        ], 64)) : (a(), d(v, { key: 1 }, [
          s("text", Et, "D-" + c(t.dday), 1),
          e[3] || (e[3] = s("path", {
            d: "M182 12c-2-1.6-4-3.4-4-5.6 0-1.3 1-2.2 2.1-2.2.8 0 1.5.4 1.9 1 .4-.6 1.1-1 1.9-1 1.1 0 2.1.9 2.1 2.2 0 2.2-2 4-4 5.6z",
            fill: "var(--sd-accent)",
            stroke: "none"
          }, null, -1))
        ], 64))
      ]))
    ]));
  }
}), Qt = /* @__PURE__ */ u(Ft, [["__scopeId", "data-v-3392be59"]]), Rt = { class: "sd-base sd-week" }, Pt = { class: "sd-week-day" }, jt = ["onClick"], Zt = /* @__PURE__ */ p({
  __name: "SWeekbar",
  props: {
    active: { default: () => [] }
  },
  setup(l) {
    const t = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], n = l, e = g({});
    n.active.forEach((M) => e.value[M] = !0);
    function o(M) {
      e.value[M] = !e.value[M];
    }
    return (M, r) => (a(), d("div", Rt, [
      (a(), d(v, null, k(t, (i, h) => s("div", {
        key: h,
        class: "sd-week-col"
      }, [
        s("span", Pt, c(i), 1),
        s("button", {
          class: y(["sd-week-dot", { on: e.value[h] }]),
          type: "button",
          onClick: (f) => o(h)
        }, [...r[0] || (r[0] = [
          s("span", null, "✓", -1)
        ])], 10, jt)
      ])), 64))
    ]));
  }
}), Yt = /* @__PURE__ */ u(Zt, [["__scopeId", "data-v-76425870"]]);
({ ...m, ...w });
const Gt = {
  SRibbon: F,
  SFrame: J,
  SNote: _1,
  SBubble: S1,
  STag: T1,
  SLabelCard: Y1,
  SWashi: H,
  SBoard: i2,
  SStamp: _2,
  SWreath: $2,
  SCorner: V2,
  SPolaroid: A2,
  SDivider: q2,
  SArrow: nt,
  SDoodle: ct,
  SCheckbox: L,
  STodoList: yt,
  SHabit: Vt,
  SCalendar: Dt,
  SDateChip: Qt,
  SWeekbar: Yt
}, Jt = {
  install(l) {
    for (const [t, n] of Object.entries(Gt))
      l.component(t, n), l.component(t.replace(/^S([A-Z])/, (e, o) => "s-" + o.toLowerCase()), n);
  }
};
export {
  w as LIFE_ICONS,
  m as NATURE_ICONS,
  nt as SArrow,
  i2 as SBoard,
  S1 as SBubble,
  Dt as SCalendar,
  L as SCheckbox,
  V2 as SCorner,
  Qt as SDateChip,
  q2 as SDivider,
  ct as SDoodle,
  J as SFrame,
  Vt as SHabit,
  Y1 as SLabelCard,
  _1 as SNote,
  A2 as SPolaroid,
  F as SRibbon,
  _2 as SStamp,
  T1 as STag,
  yt as STodoList,
  H as SWashi,
  Yt as SWeekbar,
  $2 as SWreath,
  Gt as components,
  Jt as default
};
