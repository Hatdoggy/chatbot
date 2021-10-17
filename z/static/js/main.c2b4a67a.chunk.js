(this.webpackJsonpchatbot = this.webpackJsonpchatbot || []).push([
  [0],
  {
    32: function (e, t, c) {
      "use strict";
      c.r(t);
      var s = c(1),
        l = c.n(s),
        a = c(7),
        n = c.n(a),
        i = c(2),
        o = c(3),
        r = (c(13), c(0));
      function j(e) {
        return decodeURI(
          (RegExp(e + "=(.+?)(&|$)").exec(window.location.search) || [
            ,
            null,
          ])[1] || ""
        );
      }
      j("subid"), j("subid2");
      var f = j("firstname"),
        m = j("surname"),
        x =
          (j("city"),
          j("zipcode"),
          j("address"),
          j("phone"),
          j("mobile"),
          j("pid"),
          j("nrp"),
          j("email")),
        d = "https://" + j("ffdomain"),
        u = j("session"),
        b = j("fluxf"),
        h = j("fluxffn");
      var O = Object(i.a)(window.txt.messages, 8),
        g = O[0],
        N = O[1],
        w = O[2],
        p = O[3],
        v = O[4],
        S = O[5],
        C = O[6],
        y = O[7],
        q = function (e) {
          var t = e.set,
            c = e.mess,
            l = g.mes,
            a = Object(s.useState)(!1),
            n = Object(i.a)(a, 2),
            j = n[0],
            f = n[1];
          return (
            Object(s.useEffect)(function () {
              document.querySelector(".chatCont").getBoundingClientRect()
                .height,
                document.querySelector(".loadGif").getBoundingClientRect()
                  .bottom;
              document.querySelector(".loadGif").scrollIntoView(),
                setTimeout(function () {
                  f(!0);
                }, 3e3),
                setTimeout(function () {
                  t(Object(o.a)(Object(o.a)({}, c), {}, { mes2: !0 }));
                }, 3500);
            }, []),
            Object(r.jsxs)("div", {
              className:
                "flx flx-jc-ce flx-ai-strt m-t-2 flx-shr trans fade-l w-100",
              children: [
                Object(r.jsxs)("div", {
                  className: "flx flx-col flx-jc-strt flx-ai-ce h-100 ",
                  children: [
                    Object(r.jsx)("img", {
                      src: "./img/user.png",
                      alt: "user",
                    }),
                    Object(r.jsx)("p", {
                      className: "lato",
                      children: "Julia",
                    }),
                  ],
                }),
                j
                  ? Object(r.jsx)("div", {
                      className:
                        "flx messCont w-30 flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5 fade",
                      children: Object(r.jsx)("p", {
                        className: "lato",
                        children: l,
                      }),
                    })
                  : Object(r.jsx)("div", {
                      className:
                        "flx flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5 loadGif w-30",
                      children: Object(r.jsx)("img", {
                        src: "./img/load.gif",
                        className: "w-30 h-100",
                      }),
                    }),
              ],
            })
          );
        },
        G = function (e) {
          var t = e.set,
            c = e.mess,
            l = N.mes,
            a = N.btn,
            n = Object(s.useState)(!1),
            j = Object(i.a)(n, 2),
            f = j[0],
            m = j[1],
            x = Object(s.useState)(!1),
            d = Object(i.a)(x, 2),
            u = d[0],
            b = d[1];
          document.querySelector(".chatCont").getBoundingClientRect().height;
          Object(s.useEffect)(function () {
            document.querySelector(".loadGif").getBoundingClientRect().top;
            setTimeout(function () {
              m(!0);
            }, 3e3);
          }, []);
          return Object(r.jsxs)("div", {
            className:
              "flx flx-jc-ce flx-ai-strt m-t-2 flx-shr trans fade-l w-100",
            children: [
              Object(r.jsxs)("div", {
                className: "flx flx-col flx-jc-strt flx-ai-ce h-100",
                children: [
                  Object(r.jsx)("img", { src: "./img/user.png", alt: "user" }),
                  Object(r.jsx)("p", { className: "lato", children: "Julia" }),
                ],
              }),
              f
                ? Object(r.jsxs)("div", {
                    className:
                      "flx messCont w-30 flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5",
                    children: [
                      Object(r.jsx)("p", { className: "lato", children: l }),
                      !u &&
                        Object(r.jsx)("button", {
                          className: "m-t-2 btn btn-drk",
                          onClick: function () {
                            b(!0),
                              t(
                                Object(o.a)(
                                  Object(o.a)({}, c),
                                  {},
                                  { mes3: !0 }
                                )
                              );
                          },
                          children: a,
                        }),
                    ],
                  })
                : Object(r.jsx)("div", {
                    className:
                      "flx flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5 loadGif w-30",
                    children: Object(r.jsx)("img", {
                      src: "./img/load.gif",
                      className: "w-30 h-100",
                    }),
                  }),
            ],
          });
        },
        R = function (e) {
          var t = e.set,
            c = e.mess,
            l = Object(s.useState)(!1),
            a = Object(i.a)(l, 2),
            n = a[0],
            j = a[1],
            x = Object(s.useState)(!1),
            d = Object(i.a)(x, 2),
            u = d[0],
            b = d[1],
            h = document.querySelector(".chatCont"),
            O = h.getBoundingClientRect().height + 1e3;
          Object(s.useEffect)(function () {
            document.querySelector(".loadGif").getBoundingClientRect().top;
            document.querySelector(".loadGif").scrollIntoView(),
              setTimeout(function () {
                j(!0), h.scrollTo(0, O);
              }, 3e3);
          }, []);
          var g = w.mes,
            N = w.list;
          return Object(r.jsxs)("div", {
            className:
              "flx flx-jc-ce flx-ai-strt m-t-2 flx-shr trans fade-l w-100",
            children: [
              Object(r.jsxs)("div", {
                className: "flx flx-col flx-jc-strt flx-ai-ce h-100",
                children: [
                  Object(r.jsx)("img", { src: "./img/user.png", alt: "user" }),
                  Object(r.jsx)("p", { className: "lato", children: "Julia" }),
                ],
              }),
              n
                ? Object(r.jsxs)("div", {
                    className:
                      "flx messCont w-30 flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5",
                    children: [
                      Object(r.jsx)("p", { className: "lato", children: g }),
                      Object(r.jsxs)("div", {
                        className: "flx flx-wrp flx-jc-ce flx-ai-ce w-100",
                        children: [
                          !u &&
                            N.map(function (e, t) {
                              return Object(r.jsx)(
                                "button",
                                {
                                  className: "m-t-2 btn btn-trans w-80",
                                  children: e,
                                },
                                t
                              );
                            }),
                          Object(r.jsx)("button", {
                            className: "m-t-2 btn btn-trans w-80",
                            onClick: function () {
                              b(!0),
                                t(
                                  Object(o.a)(
                                    Object(o.a)({}, c),
                                    {},
                                    { mes4: !0 }
                                  )
                                );
                            },
                            children: f ? f + " " + m : "{firstname} {surname}",
                          }),
                        ],
                      }),
                    ],
                  })
                : Object(r.jsx)("div", {
                    className:
                      "flx flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5 loadGif w-30",
                    children: Object(r.jsx)("img", {
                      src: "./img/load.gif",
                      className: "w-30 h-100",
                    }),
                  }),
            ],
          });
        },
        T = function (e) {
          var t = e.set,
            c = e.mess,
            l = Object(s.useState)(!1),
            a = Object(i.a)(l, 2),
            n = a[0],
            j = a[1],
            f = document.querySelector(".chatCont"),
            m = f.getBoundingClientRect().height + 1e3,
            d = Object(s.useState)(!1),
            u = Object(i.a)(d, 2),
            b = u[0],
            h = u[1];
          Object(s.useEffect)(function () {
            document.querySelector(".loadGif").getBoundingClientRect().top;
            document.querySelector(".loadGif").scrollIntoView(),
              setTimeout(function () {
                j(!0), f.scrollTo(0, m);
              }, 3e3);
          }, []);
          var O = p.mes,
            g = p.list;
          return Object(r.jsxs)("div", {
            className:
              "flx flx-jc-ce flx-ai-strt m-t-2 flx-shr trans fade-l w-100",
            children: [
              Object(r.jsxs)("div", {
                className: "flx flx-col flx-jc-strt flx-ai-ce h-100",
                children: [
                  Object(r.jsx)("img", { src: "./img/user.png", alt: "user" }),
                  Object(r.jsx)("p", { className: "lato", children: "Julia" }),
                ],
              }),
              n
                ? Object(r.jsxs)("div", {
                    className:
                      "flx messCont w-30 flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5",
                    children: [
                      Object(r.jsx)("p", { className: "lato", children: O }),
                      Object(r.jsxs)("div", {
                        className: "flx flx-wrp flx-jc-ce flx-ai-ce w-100",
                        children: [
                          !b &&
                            g.map(function (e, t) {
                              return Object(r.jsx)(
                                "button",
                                {
                                  className: "m-t-2 btn btn-trans",
                                  children: e,
                                },
                                t
                              );
                            }),
                          Object(r.jsx)("button", {
                            className: "m-t-2 btn btn-trans",
                            onClick: function () {
                              h(!0),
                                t(
                                  Object(o.a)(
                                    Object(o.a)({}, c),
                                    {},
                                    { mes5: !0 }
                                  )
                                );
                            },
                            children: x || "sample@yahoo.com",
                          }),
                        ],
                      }),
                    ],
                  })
                : Object(r.jsx)("div", {
                    className:
                      "flx flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5 loadGif w-30",
                    children: Object(r.jsx)("img", {
                      src: "./img/load.gif",
                      className: "w-30 h-100",
                    }),
                  }),
            ],
          });
        },
        B = [],
        E = function (e) {
          var t = e.set,
            c = e.mess,
            l = Object(s.useState)(!1),
            a = Object(i.a)(l, 2),
            n = a[0],
            j = a[1],
            f = Object(s.useState)(!1),
            m = Object(i.a)(f, 2),
            x = m[0],
            d = m[1];
          Object(s.useEffect)(function () {
            var e = document.querySelector(".chatCont"),
              t = e.getBoundingClientRect().height + 500;
            document.querySelector(".loadGif").getBoundingClientRect().top;
            document.querySelector(".loadGif").scrollIntoView(),
              setTimeout(function () {
                j(!0), e.scrollTo(0, t);
              }, 3e3);
          }, []);
          var u = v.mes,
            b = v.list;
          return Object(r.jsxs)("div", {
            className:
              "flx flx-jc-ce flx-ai-strt m-t-2 flx-shr trans fade-l w-100",
            children: [
              Object(r.jsxs)("div", {
                className: "flx flx-col flx-jc-strt flx-ai-ce h-100",
                children: [
                  Object(r.jsx)("img", { src: "./img/user.png", alt: "user" }),
                  Object(r.jsx)("p", { className: "lato", children: "Julia" }),
                ],
              }),
              n
                ? Object(r.jsxs)("div", {
                    className:
                      "flx messCont w-30 flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5",
                    children: [
                      Object(r.jsx)("p", { className: "lato", children: u }),
                      Object(r.jsx)("div", {
                        className: "flx flx-wrp flx-jc-ce flx-ai-ce",
                        children: b.map(function (e, s) {
                          return Object(r.jsx)(
                            "button",
                            {
                              id: e.split(" ")[0],
                              className: "m-t-2 btn btn-trans",
                              onClick: function () {
                                return (function (e) {
                                  if (!x) {
                                    var s = document.querySelector(
                                      "#".concat(e.split(" ")[0])
                                    );
                                    s.classList.remove("btn-trans"),
                                      s.classList.add("btn-drk");
                                  }
                                  B.includes(e) || B.push(e),
                                    setTimeout(function () {
                                      d(!0),
                                        t(
                                          Object(o.a)(
                                            Object(o.a)({}, c),
                                            {},
                                            { mes6: !0 }
                                          )
                                        );
                                    }, 5e3);
                                })(e);
                              },
                              children: e,
                            },
                            s
                          );
                        }),
                      }),
                    ],
                  })
                : Object(r.jsx)("div", {
                    className:
                      "flx flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5 loadGif w-30",
                    children: Object(r.jsx)("img", {
                      src: "./img/load.gif",
                      className: "w-30 h-100",
                    }),
                  }),
            ],
          });
        },
        k = function (e) {
          var t = e.set,
            c = e.mess,
            l = Object(s.useState)(!1),
            a = Object(i.a)(l, 2),
            n = a[0],
            j = a[1],
            f = document.querySelector(".chatCont"),
            m = f.getBoundingClientRect().height + 1e3;
          Object(s.useEffect)(function () {
            document.querySelector(".loadGif").getBoundingClientRect().top;
            document.querySelector(".loadGif").scrollIntoView(),
              setTimeout(function () {
                j(!0), f.scrollTo(0, m);
              }, 3e3),
              setTimeout(function () {
                t(Object(o.a)(Object(o.a)({}, c), {}, { mes7: !0 }));
              }, 5e3);
          }, []);
          var x = S.mes,
            d = S.mes2;
          return Object(r.jsxs)("div", {
            className:
              "flx flx-jc-ce flx-ai-strt m-t-2 flx-shr trans fade-l w-100",
            children: [
              Object(r.jsxs)("div", {
                className: "flx flx-col flx-jc-strt flx-ai-ce h-100",
                children: [
                  Object(r.jsx)("img", { src: "./img/user.png", alt: "user" }),
                  Object(r.jsx)("p", { className: "lato", children: "Julia" }),
                ],
              }),
              n
                ? Object(r.jsxs)("div", {
                    className:
                      "flx messCont w-30 flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5",
                    children: [
                      Object(r.jsx)("p", {
                        className: "lato w-100 txt-al-l",
                        children: x,
                      }),
                      0 === B.length
                        ? Object(r.jsx)("button", {
                            className: "m-t-5 btn btn-trans",
                            children: "Pets",
                          })
                        : B.map(function (e, t) {
                            return Object(r.jsx)(
                              "p",
                              {
                                className: "w-100 m-t-5 mont mont-b txt-drk",
                                children: e,
                              },
                              t
                            );
                          }),
                      Object(r.jsx)("p", {
                        className: "lato m-t-5",
                        children: d,
                      }),
                    ],
                  })
                : Object(r.jsx)("div", {
                    className:
                      "flx flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5 loadGif w-30",
                    children: Object(r.jsx)("img", {
                      src: "./img/load.gif",
                      className: "w-30 h-100",
                    }),
                  }),
            ],
          });
        },
        J = function (e) {
          var t = e.set,
            c = e.mess,
            l = Object(s.useState)(!1),
            a = Object(i.a)(l, 2),
            n = a[0],
            j = a[1],
            f = document.querySelector(".chatCont"),
            m = f.getBoundingClientRect().height + 1e3;
          Object(s.useEffect)(function () {
            document.querySelector(".loadGif").getBoundingClientRect().top;
            document.querySelector(".loadGif").scrollIntoView(),
              setTimeout(function () {
                j(!0), f.scrollTo(0, m);
              }, 6e3);
          }, []);
          var x = C.mes,
            d = C.mes2,
            u = C.btn;
          return Object(r.jsxs)("div", {
            className:
              "flx flx-jc-ce flx-ai-strt m-t-2 flx-shr trans fade-l w-100",
            children: [
              Object(r.jsxs)("div", {
                className: "flx flx-col flx-jc-strt flx-ai-ce h-100",
                children: [
                  Object(r.jsx)("img", { src: "./img/user.png", alt: "user" }),
                  Object(r.jsx)("p", { className: "lato", children: "Julia" }),
                ],
              }),
              n
                ? Object(r.jsxs)("div", {
                    className:
                      "flx messCont w-30 flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5",
                    children: [
                      Object(r.jsx)("p", { className: "lato", children: x }),
                      Object(r.jsx)("p", {
                        className: "lato m-t-5",
                        children: d,
                      }),
                      Object(r.jsx)("button", {
                        className: "m-t-5 btn btn-drk",
                        onClick: function () {
                          t(Object(o.a)(Object(o.a)({}, c), {}, { mes8: !0 }));
                        },
                        children: u,
                      }),
                    ],
                  })
                : Object(r.jsx)("div", {
                    className:
                      "flx flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5 loadGif w-30",
                    children: Object(r.jsx)("img", {
                      src: "./img/load.gif",
                      className: "w-30 h-100",
                    }),
                  }),
            ],
          });
        },
        I = function (e) {
          e.set, e.mess;
          var t = Object(s.useState)(!1),
            c = Object(i.a)(t, 2),
            l = c[0],
            a = c[1],
            n = document.querySelector(".chatCont"),
            o = n.getBoundingClientRect().height + 1e3;
          Object(s.useEffect)(function () {
            document.querySelector(".loadGif").getBoundingClientRect().top;
            document.querySelector(".loadGif").scrollIntoView(),
              setTimeout(function () {
                a(!0), n.scrollTo(0, o);
              }, 4500);
          }, []);
          var j = y.mes;
          return (
            Object(s.useEffect)(function () {
              setTimeout(function () {
                var e;
                (e = 1),
                  window.location.replace(
                    d +
                      "/?flux_action=" +
                      e +
                      "&flux_f=" +
                      b +
                      "&flux_ffn=" +
                      h +
                      "&flux_sess=" +
                      u
                  );
              }, 4500);
            }, []),
            Object(r.jsxs)("div", {
              className:
                "flx flx-jc-ce flx-ai-strt m-t-2 flx-shr trans fade-l w-100",
              children: [
                Object(r.jsxs)("div", {
                  className: "flx flx-col flx-jc-strt flx-ai-ce h-100",
                  children: [
                    Object(r.jsx)("img", {
                      src: "./img/user.png",
                      alt: "user",
                    }),
                    Object(r.jsx)("p", {
                      className: "lato",
                      children: "Julia",
                    }),
                  ],
                }),
                l
                  ? Object(r.jsx)("div", {
                      className:
                        "flx messCont w-30 flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5",
                      children: Object(r.jsx)("p", {
                        className: "lato",
                        children: j,
                      }),
                    })
                  : Object(r.jsx)("div", {
                      className:
                        "flx flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5 loadGif w-30",
                      children: Object(r.jsx)("img", {
                        src: "./img/load.gif",
                        className: "w-30 h-100",
                      }),
                    }),
              ],
            })
          );
        },
        V = (window.txt.messages, new Date()),
        z =
          V.getHours() +
          " : " +
          (function (e) {
            return e < 10 ? "0" + e : e;
          })(V.getMinutes()),
        M = function () {
          return Object(r.jsxs)("header", {
            className:
              "w-100 flx flx-col flx-jc-end flx-ai-ce bg-img shdw-bot z-top flx-shr",
            children: [
              Object(r.jsxs)("div", {
                className: "flx w-100 flx-jc-sb flx-ai-ce",
                children: [
                  Object(r.jsx)("p", {
                    className: "mont m-l-2 mont-b txt-wht txt-al-l",
                    children: "HOME",
                  }),
                  Object(r.jsx)("img", {
                    src: "./img/lidl.png",
                    alt: "logo",
                    className: "w-5 m-l-2 logo",
                  }),
                  Object(r.jsx)("p", {
                    className: "mont m-r-2 mont-b txt-wht txt-al-r",
                    children: "MANAGE",
                  }),
                ],
              }),
              Object(r.jsx)("small", {
                className:
                  "lato txt-al-ce txt-wht m-b-2 w-100 flx flx-jc-ce flx-ai-ce",
                children: "Customer Service",
              }),
            ],
          });
        },
        _ = function (e) {
          var t = e.mes,
            c = e.set,
            l = t.mes1,
            a = t.mes2,
            n = t.mes3,
            i = t.mes4,
            o = t.mes5,
            j = t.mes6,
            f = t.mes7,
            m = t.mes8;
          return (
            Object(s.useEffect)(function () {}, []),
            Object(r.jsx)("section", {
              className: "w-100 h-100 trans chatCont  flx-shr",
              children: Object(r.jsx)("div", {
                className: "p-2  w-100 ",
                children: Object(r.jsxs)("div", {
                  className: "w-100 p-b",
                  children: [
                    Object(r.jsx)("small", {
                      className:
                        "w-100 flx flx-jc-ce lato m-t-2 w-100 txt-al-ce z-top",
                      children: z,
                    }),
                    l && Object(r.jsx)(q, { set: c, mess: t }),
                    a && Object(r.jsx)(G, { set: c, mess: t }),
                    n && Object(r.jsx)(R, { set: c, mess: t }),
                    i && Object(r.jsx)(T, { set: c, mess: t }),
                    o && Object(r.jsx)(E, { set: c, mess: t }),
                    j && Object(r.jsx)(k, { set: c, mess: t }),
                    f && Object(r.jsx)(J, { set: c, mess: t }),
                    m && Object(r.jsx)(I, { set: c, mess: t }),
                  ],
                }),
              }),
            })
          );
        };
      var A = function () {
        var e = Object(s.useState)({
            mes1: !0,
            mes2: !1,
            mes3: !1,
            mes4: !1,
            mes5: !1,
            mes6: !1,
            mes7: !1,
            mes8: !1,
          }),
          t = Object(i.a)(e, 2),
          c = t[0],
          l = t[1];
        return (
          Object(s.useEffect)(function () {
            setTimeout(function () {
              var e = document.querySelector(".hidden"),
                t =
                  document.querySelector("header").getBoundingClientRect()
                    .height + 75;
              e.style.height = t + "px";
            }, 300);
          }, []),
          Object(r.jsxs)("div", {
            className:
              "flx flx-col flx-jc-sp flx-ai-ce w-100 h-100 pos-rel z-top",
            children: [
              Object(r.jsx)(M, {}),
              Object(r.jsx)("div", { className: "hidden w-100" }),
              Object(r.jsx)(_, { mes: c, set: l }),
            ],
          })
        );
      };
      n.a.render(
        Object(r.jsx)(l.a.StrictMode, { children: Object(r.jsx)(A, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[32, 1, 2]],
]);
//# sourceMappingURL=main.c2b4a67a.chunk.js.map
