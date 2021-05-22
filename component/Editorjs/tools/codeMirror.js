!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.CodeMirror = t())
    : (e.CodeMirror = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var i = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var i in e)
            r.d(
              n,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return n;
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = "/"),
      r((r.s = 9))
    );
  })([
    function (e, t, r) {
      e.exports = (function () {
        "use strict";
        var e = navigator.userAgent,
          t = navigator.platform,
          r = /gecko\/\d/i.test(e),
          n = /MSIE \d/.test(e),
          i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
          o = /Edge\/(\d+)/.exec(e),
          a = n || i || o,
          l = a && (n ? document.documentMode || 6 : +(o || i)[1]),
          s = !o && /WebKit\//.test(e),
          c = s && /Qt\/\d+\.\d+/.test(e),
          u = !o && /Chrome\//.test(e),
          d = /Opera\//.test(e),
          p = /Apple Computer/.test(navigator.vendor),
          f = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
          m = /PhantomJS/.test(e),
          h = !o && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e),
          g = /Android/.test(e),
          v =
            h ||
            g ||
            /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
          b = h || /Mac/.test(t),
          y = /\bCrOS\b/.test(e),
          x = /win/i.test(t),
          k = d && e.match(/Version\/(\d*\.\d*)/);
        k && (k = Number(k[1])), k && k >= 15 && ((d = !1), (s = !0));
        var w = b && (c || (d && (null == k || k < 12.11))),
          _ = r || (a && l >= 9);
        function C(e) {
          return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
        }
        var S,
          M = function (e, t) {
            var r = e.className,
              n = C(t).exec(r);
            if (n) {
              var i = r.slice(n.index + n[0].length);
              e.className = r.slice(0, n.index) + (i ? n[1] + i : "");
            }
          };
        function L(e) {
          for (var t = e.childNodes.length; t > 0; --t)
            e.removeChild(e.firstChild);
          return e;
        }
        function T(e, t) {
          return L(e).appendChild(t);
        }
        function z(e, t, r, n) {
          var i = document.createElement(e);
          if (
            (r && (i.className = r),
            n && (i.style.cssText = n),
            "string" == typeof t)
          )
            i.appendChild(document.createTextNode(t));
          else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
          return i;
        }
        function A(e, t, r, n) {
          var i = z(e, t, r, n);
          return i.setAttribute("role", "presentation"), i;
        }
        function D(e, t) {
          if ((3 == t.nodeType && (t = t.parentNode), e.contains))
            return e.contains(t);
          do {
            if ((11 == t.nodeType && (t = t.host), t == e)) return !0;
          } while ((t = t.parentNode));
        }
        function E() {
          var e;
          try {
            e = document.activeElement;
          } catch (t) {
            e = document.body || null;
          }
          for (; e && e.shadowRoot && e.shadowRoot.activeElement; )
            e = e.shadowRoot.activeElement;
          return e;
        }
        function F(e, t) {
          var r = e.className;
          C(t).test(r) || (e.className += (r ? " " : "") + t);
        }
        function N(e, t) {
          for (var r = e.split(" "), n = 0; n < r.length; n++)
            r[n] && !C(r[n]).test(t) && (t += " " + r[n]);
          return t;
        }
        S = document.createRange
          ? function (e, t, r, n) {
              var i = document.createRange();
              return i.setEnd(n || e, r), i.setStart(e, t), i;
            }
          : function (e, t, r) {
              var n = document.body.createTextRange();
              try {
                n.moveToElementText(e.parentNode);
              } catch (e) {
                return n;
              }
              return (
                n.collapse(!0),
                n.moveEnd("character", r),
                n.moveStart("character", t),
                n
              );
            };
        var O = function (e) {
          e.select();
        };
        function q(e) {
          var t = Array.prototype.slice.call(arguments, 1);
          return function () {
            return e.apply(null, t);
          };
        }
        function I(e, t, r) {
          for (var n in (t || (t = {}), e))
            !e.hasOwnProperty(n) ||
              (!1 === r && t.hasOwnProperty(n)) ||
              (t[n] = e[n]);
          return t;
        }
        function P(e, t, r, n, i) {
          null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
          for (var o = n || 0, a = i || 0; ; ) {
            var l = e.indexOf("\t", o);
            if (l < 0 || l >= t) return a + (t - o);
            (a += l - o), (a += r - (a % r)), (o = l + 1);
          }
        }
        h
          ? (O = function (e) {
              (e.selectionStart = 0), (e.selectionEnd = e.value.length);
            })
          : a &&
            (O = function (e) {
              try {
                e.select();
              } catch (e) {}
            });
        var j = function () {
          (this.id = null),
            (this.f = null),
            (this.time = 0),
            (this.handler = q(this.onTimeout, this));
        };
        function B(e, t) {
          for (var r = 0; r < e.length; ++r) if (e[r] == t) return r;
          return -1;
        }
        (j.prototype.onTimeout = function (e) {
          (e.id = 0),
            e.time <= +new Date()
              ? e.f()
              : setTimeout(e.handler, e.time - +new Date());
        }),
          (j.prototype.set = function (e, t) {
            this.f = t;
            var r = +new Date() + e;
            (!this.id || r < this.time) &&
              (clearTimeout(this.id),
              (this.id = setTimeout(this.handler, e)),
              (this.time = r));
          });
        var W = 30,
          R = {
            toString: function () {
              return "CodeMirror.Pass";
            }
          },
          H = { scroll: !1 },
          $ = { origin: "*mouse" },
          U = { origin: "+move" };
        function V(e, t, r) {
          for (var n = 0, i = 0; ; ) {
            var o = e.indexOf("\t", n);
            -1 == o && (o = e.length);
            var a = o - n;
            if (o == e.length || i + a >= t) return n + Math.min(a, t - i);
            if (((i += o - n), (n = o + 1), (i += r - (i % r)) >= t)) return n;
          }
        }
        var K = [""];
        function G(e) {
          for (; K.length <= e; ) K.push(X(K) + " ");
          return K[e];
        }
        function X(e) {
          return e[e.length - 1];
        }
        function Z(e, t) {
          for (var r = [], n = 0; n < e.length; n++) r[n] = t(e[n], n);
          return r;
        }
        function Y() {}
        function Q(e, t) {
          var r;
          return (
            Object.create
              ? (r = Object.create(e))
              : ((Y.prototype = e), (r = new Y())),
            t && I(t, r),
            r
          );
        }
        var J =
          /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
        function ee(e) {
          return (
            /\w/.test(e) ||
            (e > "" && (e.toUpperCase() != e.toLowerCase() || J.test(e)))
          );
        }
        function te(e, t) {
          return t
            ? !!(t.source.indexOf("\\w") > -1 && ee(e)) || t.test(e)
            : ee(e);
        }
        function re(e) {
          for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
          return !0;
        }
        var ne =
          /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
        function ie(e) {
          return e.charCodeAt(0) >= 768 && ne.test(e);
        }
        function oe(e, t, r) {
          for (; (r < 0 ? t > 0 : t < e.length) && ie(e.charAt(t)); ) t += r;
          return t;
        }
        function ae(e, t, r) {
          for (var n = t > r ? -1 : 1; ; ) {
            if (t == r) return t;
            var i = (t + r) / 2,
              o = n < 0 ? Math.ceil(i) : Math.floor(i);
            if (o == t) return e(o) ? t : r;
            e(o) ? (r = o) : (t = o + n);
          }
        }
        var le = null;
        function se(e, t, r) {
          var n;
          le = null;
          for (var i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.from < t && o.to > t) return i;
            o.to == t && (o.from != o.to && "before" == r ? (n = i) : (le = i)),
              o.from == t &&
                (o.from != o.to && "before" != r ? (n = i) : (le = i));
          }
          return null != n ? n : le;
        }
        var ce = (function () {
          var e =
              "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
            t =
              "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
          var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
            n = /[stwN]/,
            i = /[LRr]/,
            o = /[Lb1n]/,
            a = /[1n]/;
          function l(e, t, r) {
            (this.level = e), (this.from = t), (this.to = r);
          }
          return function (s, c) {
            var u,
              d = "ltr" == c ? "L" : "R";
            if (0 == s.length || ("ltr" == c && !r.test(s))) return !1;
            for (var p = s.length, f = [], m = 0; m < p; ++m)
              f.push(
                (u = s.charCodeAt(m)) <= 247
                  ? e.charAt(u)
                  : 1424 <= u && u <= 1524
                  ? "R"
                  : 1536 <= u && u <= 1785
                  ? t.charAt(u - 1536)
                  : 1774 <= u && u <= 2220
                  ? "r"
                  : 8192 <= u && u <= 8203
                  ? "w"
                  : 8204 == u
                  ? "b"
                  : "L"
              );
            for (var h = 0, g = d; h < p; ++h) {
              var v = f[h];
              "m" == v ? (f[h] = g) : (g = v);
            }
            for (var b = 0, y = d; b < p; ++b) {
              var x = f[b];
              "1" == x && "r" == y
                ? (f[b] = "n")
                : i.test(x) && ((y = x), "r" == x && (f[b] = "R"));
            }
            for (var k = 1, w = f[0]; k < p - 1; ++k) {
              var _ = f[k];
              "+" == _ && "1" == w && "1" == f[k + 1]
                ? (f[k] = "1")
                : "," != _ ||
                  w != f[k + 1] ||
                  ("1" != w && "n" != w) ||
                  (f[k] = w),
                (w = _);
            }
            for (var C = 0; C < p; ++C) {
              var S = f[C];
              if ("," == S) f[C] = "N";
              else if ("%" == S) {
                var M = void 0;
                for (M = C + 1; M < p && "%" == f[M]; ++M);
                for (
                  var L =
                      (C && "!" == f[C - 1]) || (M < p && "1" == f[M])
                        ? "1"
                        : "N",
                    T = C;
                  T < M;
                  ++T
                )
                  f[T] = L;
                C = M - 1;
              }
            }
            for (var z = 0, A = d; z < p; ++z) {
              var D = f[z];
              "L" == A && "1" == D ? (f[z] = "L") : i.test(D) && (A = D);
            }
            for (var E = 0; E < p; ++E)
              if (n.test(f[E])) {
                var F = void 0;
                for (F = E + 1; F < p && n.test(f[F]); ++F);
                for (
                  var N = "L" == (E ? f[E - 1] : d),
                    O = "L" == (F < p ? f[F] : d),
                    q = N == O ? (N ? "L" : "R") : d,
                    I = E;
                  I < F;
                  ++I
                )
                  f[I] = q;
                E = F - 1;
              }
            for (var P, j = [], B = 0; B < p; )
              if (o.test(f[B])) {
                var W = B;
                for (++B; B < p && o.test(f[B]); ++B);
                j.push(new l(0, W, B));
              } else {
                var R = B,
                  H = j.length;
                for (++B; B < p && "L" != f[B]; ++B);
                for (var $ = R; $ < B; )
                  if (a.test(f[$])) {
                    R < $ && j.splice(H, 0, new l(1, R, $));
                    var U = $;
                    for (++$; $ < B && a.test(f[$]); ++$);
                    j.splice(H, 0, new l(2, U, $)), (R = $);
                  } else ++$;
                R < B && j.splice(H, 0, new l(1, R, B));
              }
            return (
              "ltr" == c &&
                (1 == j[0].level &&
                  (P = s.match(/^\s+/)) &&
                  ((j[0].from = P[0].length),
                  j.unshift(new l(0, 0, P[0].length))),
                1 == X(j).level &&
                  (P = s.match(/\s+$/)) &&
                  ((X(j).to -= P[0].length),
                  j.push(new l(0, p - P[0].length, p)))),
              "rtl" == c ? j.reverse() : j
            );
          };
        })();
        function ue(e, t) {
          var r = e.order;
          return null == r && (r = e.order = ce(e.text, t)), r;
        }
        var de = [],
          pe = function (e, t, r) {
            if (e.addEventListener) e.addEventListener(t, r, !1);
            else if (e.attachEvent) e.attachEvent("on" + t, r);
            else {
              var n = e._handlers || (e._handlers = {});
              n[t] = (n[t] || de).concat(r);
            }
          };
        function fe(e, t) {
          return (e._handlers && e._handlers[t]) || de;
        }
        function me(e, t, r) {
          if (e.removeEventListener) e.removeEventListener(t, r, !1);
          else if (e.detachEvent) e.detachEvent("on" + t, r);
          else {
            var n = e._handlers,
              i = n && n[t];
            if (i) {
              var o = B(i, r);
              o > -1 && (n[t] = i.slice(0, o).concat(i.slice(o + 1)));
            }
          }
        }
        function he(e, t) {
          var r = fe(e, t);
          if (r.length)
            for (
              var n = Array.prototype.slice.call(arguments, 2), i = 0;
              i < r.length;
              ++i
            )
              r[i].apply(null, n);
        }
        function ge(e, t, r) {
          return (
            "string" == typeof t &&
              (t = {
                type: t,
                preventDefault: function () {
                  this.defaultPrevented = !0;
                }
              }),
            he(e, r || t.type, e, t),
            we(t) || t.codemirrorIgnore
          );
        }
        function ve(e) {
          var t = e._handlers && e._handlers.cursorActivity;
          if (t)
            for (
              var r =
                  e.curOp.cursorActivityHandlers ||
                  (e.curOp.cursorActivityHandlers = []),
                n = 0;
              n < t.length;
              ++n
            )
              -1 == B(r, t[n]) && r.push(t[n]);
        }
        function be(e, t) {
          return fe(e, t).length > 0;
        }
        function ye(e) {
          (e.prototype.on = function (e, t) {
            pe(this, e, t);
          }),
            (e.prototype.off = function (e, t) {
              me(this, e, t);
            });
        }
        function xe(e) {
          e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
        }
        function ke(e) {
          e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
        }
        function we(e) {
          return null != e.defaultPrevented
            ? e.defaultPrevented
            : 0 == e.returnValue;
        }
        function _e(e) {
          xe(e), ke(e);
        }
        function Ce(e) {
          return e.target || e.srcElement;
        }
        function Se(e) {
          var t = e.which;
          return (
            null == t &&
              (1 & e.button
                ? (t = 1)
                : 2 & e.button
                ? (t = 3)
                : 4 & e.button && (t = 2)),
            b && e.ctrlKey && 1 == t && (t = 3),
            t
          );
        }
        var Me,
          Le,
          Te = (function () {
            if (a && l < 9) return !1;
            var e = z("div");
            return "draggable" in e || "dragDrop" in e;
          })();
        function ze(e) {
          if (null == Me) {
            var t = z("span", "​");
            T(e, z("span", [t, document.createTextNode("x")])),
              0 != e.firstChild.offsetHeight &&
                (Me =
                  t.offsetWidth <= 1 && t.offsetHeight > 2 && !(a && l < 8));
          }
          var r = Me
            ? z("span", "​")
            : z(
                "span",
                " ",
                null,
                "display: inline-block; width: 1px; margin-right: -1px"
              );
          return r.setAttribute("cm-text", ""), r;
        }
        function Ae(e) {
          if (null != Le) return Le;
          var t = T(e, document.createTextNode("AخA")),
            r = S(t, 0, 1).getBoundingClientRect(),
            n = S(t, 1, 2).getBoundingClientRect();
          return (
            L(e), !(!r || r.left == r.right) && (Le = n.right - r.right < 3)
          );
        }
        var De,
          Ee =
            3 != "\n\nb".split(/\n/).length
              ? function (e) {
                  for (var t = 0, r = [], n = e.length; t <= n; ) {
                    var i = e.indexOf("\n", t);
                    -1 == i && (i = e.length);
                    var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                      a = o.indexOf("\r");
                    -1 != a
                      ? (r.push(o.slice(0, a)), (t += a + 1))
                      : (r.push(o), (t = i + 1));
                  }
                  return r;
                }
              : function (e) {
                  return e.split(/\r\n?|\n/);
                },
          Fe = window.getSelection
            ? function (e) {
                try {
                  return e.selectionStart != e.selectionEnd;
                } catch (e) {
                  return !1;
                }
              }
            : function (e) {
                var t;
                try {
                  t = e.ownerDocument.selection.createRange();
                } catch (e) {}
                return (
                  !(!t || t.parentElement() != e) &&
                  0 != t.compareEndPoints("StartToEnd", t)
                );
              },
          Ne =
            "oncopy" in (De = z("div")) ||
            (De.setAttribute("oncopy", "return;"),
            "function" == typeof De.oncopy),
          Oe = null,
          qe = {},
          Ie = {};
        function Pe(e) {
          if ("string" == typeof e && Ie.hasOwnProperty(e)) e = Ie[e];
          else if (
            e &&
            "string" == typeof e.name &&
            Ie.hasOwnProperty(e.name)
          ) {
            var t = Ie[e.name];
            "string" == typeof t && (t = { name: t }),
              ((e = Q(t, e)).name = t.name);
          } else {
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
              return Pe("application/xml");
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
              return Pe("application/json");
          }
          return "string" == typeof e ? { name: e } : e || { name: "null" };
        }
        function je(e, t) {
          t = Pe(t);
          var r = qe[t.name];
          if (!r) return je(e, "text/plain");
          var n = r(e, t);
          if (Be.hasOwnProperty(t.name)) {
            var i = Be[t.name];
            for (var o in i)
              i.hasOwnProperty(o) &&
                (n.hasOwnProperty(o) && (n["_" + o] = n[o]), (n[o] = i[o]));
          }
          if (
            ((n.name = t.name),
            t.helperType && (n.helperType = t.helperType),
            t.modeProps)
          )
            for (var a in t.modeProps) n[a] = t.modeProps[a];
          return n;
        }
        var Be = {};
        function We(e, t) {
          var r = Be.hasOwnProperty(e) ? Be[e] : (Be[e] = {});
          I(t, r);
        }
        function Re(e, t) {
          if (!0 === t) return t;
          if (e.copyState) return e.copyState(t);
          var r = {};
          for (var n in t) {
            var i = t[n];
            i instanceof Array && (i = i.concat([])), (r[n] = i);
          }
          return r;
        }
        function He(e, t) {
          for (var r; e.innerMode && (r = e.innerMode(t)) && r.mode != e; )
            (t = r.state), (e = r.mode);
          return r || { mode: e, state: t };
        }
        function $e(e, t, r) {
          return !e.startState || e.startState(t, r);
        }
        var Ue = function (e, t, r) {
          (this.pos = this.start = 0),
            (this.string = e),
            (this.tabSize = t || 8),
            (this.lastColumnPos = this.lastColumnValue = 0),
            (this.lineStart = 0),
            (this.lineOracle = r);
        };
        function Ve(e, t) {
          if ((t -= e.first) < 0 || t >= e.size)
            throw new Error(
              "There is no line " + (t + e.first) + " in the document."
            );
          for (var r = e; !r.lines; )
            for (var n = 0; ; ++n) {
              var i = r.children[n],
                o = i.chunkSize();
              if (t < o) {
                r = i;
                break;
              }
              t -= o;
            }
          return r.lines[t];
        }
        function Ke(e, t, r) {
          var n = [],
            i = t.line;
          return (
            e.iter(t.line, r.line + 1, function (e) {
              var o = e.text;
              i == r.line && (o = o.slice(0, r.ch)),
                i == t.line && (o = o.slice(t.ch)),
                n.push(o),
                ++i;
            }),
            n
          );
        }
        function Ge(e, t, r) {
          var n = [];
          return (
            e.iter(t, r, function (e) {
              n.push(e.text);
            }),
            n
          );
        }
        function Xe(e, t) {
          var r = t - e.height;
          if (r) for (var n = e; n; n = n.parent) n.height += r;
        }
        function Ze(e) {
          if (null == e.parent) return null;
          for (
            var t = e.parent, r = B(t.lines, e), n = t.parent;
            n;
            t = n, n = n.parent
          )
            for (var i = 0; n.children[i] != t; ++i)
              r += n.children[i].chunkSize();
          return r + t.first;
        }
        function Ye(e, t) {
          var r = e.first;
          e: do {
            for (var n = 0; n < e.children.length; ++n) {
              var i = e.children[n],
                o = i.height;
              if (t < o) {
                e = i;
                continue e;
              }
              (t -= o), (r += i.chunkSize());
            }
            return r;
          } while (!e.lines);
          for (var a = 0; a < e.lines.length; ++a) {
            var l = e.lines[a],
              s = l.height;
            if (t < s) break;
            t -= s;
          }
          return r + a;
        }
        function Qe(e, t) {
          return t >= e.first && t < e.first + e.size;
        }
        function Je(e, t) {
          return String(e.lineNumberFormatter(t + e.firstLineNumber));
        }
        function et(e, t, r) {
          if ((void 0 === r && (r = null), !(this instanceof et)))
            return new et(e, t, r);
          (this.line = e), (this.ch = t), (this.sticky = r);
        }
        function tt(e, t) {
          return e.line - t.line || e.ch - t.ch;
        }
        function rt(e, t) {
          return e.sticky == t.sticky && 0 == tt(e, t);
        }
        function nt(e) {
          return et(e.line, e.ch);
        }
        function it(e, t) {
          return tt(e, t) < 0 ? t : e;
        }
        function ot(e, t) {
          return tt(e, t) < 0 ? e : t;
        }
        function at(e, t) {
          return Math.max(e.first, Math.min(t, e.first + e.size - 1));
        }
        function lt(e, t) {
          if (t.line < e.first) return et(e.first, 0);
          var r = e.first + e.size - 1;
          return t.line > r
            ? et(r, Ve(e, r).text.length)
            : (function (e, t) {
                var r = e.ch;
                return null == r || r > t
                  ? et(e.line, t)
                  : r < 0
                  ? et(e.line, 0)
                  : e;
              })(t, Ve(e, t.line).text.length);
        }
        function st(e, t) {
          for (var r = [], n = 0; n < t.length; n++) r[n] = lt(e, t[n]);
          return r;
        }
        (Ue.prototype.eol = function () {
          return this.pos >= this.string.length;
        }),
          (Ue.prototype.sol = function () {
            return this.pos == this.lineStart;
          }),
          (Ue.prototype.peek = function () {
            return this.string.charAt(this.pos) || void 0;
          }),
          (Ue.prototype.next = function () {
            if (this.pos < this.string.length)
              return this.string.charAt(this.pos++);
          }),
          (Ue.prototype.eat = function (e) {
            var t = this.string.charAt(this.pos);
            if (
              "string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))
            )
              return ++this.pos, t;
          }),
          (Ue.prototype.eatWhile = function (e) {
            for (var t = this.pos; this.eat(e); );
            return this.pos > t;
          }),
          (Ue.prototype.eatSpace = function () {
            for (
              var e = this.pos;
              /[\s\u00a0]/.test(this.string.charAt(this.pos));

            )
              ++this.pos;
            return this.pos > e;
          }),
          (Ue.prototype.skipToEnd = function () {
            this.pos = this.string.length;
          }),
          (Ue.prototype.skipTo = function (e) {
            var t = this.string.indexOf(e, this.pos);
            if (t > -1) return (this.pos = t), !0;
          }),
          (Ue.prototype.backUp = function (e) {
            this.pos -= e;
          }),
          (Ue.prototype.column = function () {
            return (
              this.lastColumnPos < this.start &&
                ((this.lastColumnValue = P(
                  this.string,
                  this.start,
                  this.tabSize,
                  this.lastColumnPos,
                  this.lastColumnValue
                )),
                (this.lastColumnPos = this.start)),
              this.lastColumnValue -
                (this.lineStart
                  ? P(this.string, this.lineStart, this.tabSize)
                  : 0)
            );
          }),
          (Ue.prototype.indentation = function () {
            return (
              P(this.string, null, this.tabSize) -
              (this.lineStart
                ? P(this.string, this.lineStart, this.tabSize)
                : 0)
            );
          }),
          (Ue.prototype.match = function (e, t, r) {
            if ("string" != typeof e) {
              var n = this.string.slice(this.pos).match(e);
              return n && n.index > 0
                ? null
                : (n && !1 !== t && (this.pos += n[0].length), n);
            }
            var i = function (e) {
                return r ? e.toLowerCase() : e;
              },
              o = this.string.substr(this.pos, e.length);
            if (i(o) == i(e)) return !1 !== t && (this.pos += e.length), !0;
          }),
          (Ue.prototype.current = function () {
            return this.string.slice(this.start, this.pos);
          }),
          (Ue.prototype.hideFirstChars = function (e, t) {
            this.lineStart += e;
            try {
              return t();
            } finally {
              this.lineStart -= e;
            }
          }),
          (Ue.prototype.lookAhead = function (e) {
            var t = this.lineOracle;
            return t && t.lookAhead(e);
          }),
          (Ue.prototype.baseToken = function () {
            var e = this.lineOracle;
            return e && e.baseToken(this.pos);
          });
        var ct = function (e, t) {
            (this.state = e), (this.lookAhead = t);
          },
          ut = function (e, t, r, n) {
            (this.state = t),
              (this.doc = e),
              (this.line = r),
              (this.maxLookAhead = n || 0),
              (this.baseTokens = null),
              (this.baseTokenPos = 1);
          };
        function dt(e, t, r, n) {
          var i = [e.state.modeGen],
            o = {};
          xt(
            e,
            t.text,
            e.doc.mode,
            r,
            function (e, t) {
              return i.push(e, t);
            },
            o,
            n
          );
          for (
            var a = r.state,
              l = function (n) {
                r.baseTokens = i;
                var l = e.state.overlays[n],
                  s = 1,
                  c = 0;
                (r.state = !0),
                  xt(
                    e,
                    t.text,
                    l.mode,
                    r,
                    function (e, t) {
                      for (var r = s; c < e; ) {
                        var n = i[s];
                        n > e && i.splice(s, 1, e, i[s + 1], n),
                          (s += 2),
                          (c = Math.min(e, n));
                      }
                      if (t)
                        if (l.opaque)
                          i.splice(r, s - r, e, "overlay " + t), (s = r + 2);
                        else
                          for (; r < s; r += 2) {
                            var o = i[r + 1];
                            i[r + 1] = (o ? o + " " : "") + "overlay " + t;
                          }
                    },
                    o
                  ),
                  (r.state = a),
                  (r.baseTokens = null),
                  (r.baseTokenPos = 1);
              },
              s = 0;
            s < e.state.overlays.length;
            ++s
          )
            l(s);
          return { styles: i, classes: o.bgClass || o.textClass ? o : null };
        }
        function pt(e, t, r) {
          if (!t.styles || t.styles[0] != e.state.modeGen) {
            var n = ft(e, Ze(t)),
              i =
                t.text.length > e.options.maxHighlightLength &&
                Re(e.doc.mode, n.state),
              o = dt(e, t, n);
            i && (n.state = i),
              (t.stateAfter = n.save(!i)),
              (t.styles = o.styles),
              o.classes
                ? (t.styleClasses = o.classes)
                : t.styleClasses && (t.styleClasses = null),
              r === e.doc.highlightFrontier &&
                (e.doc.modeFrontier = Math.max(
                  e.doc.modeFrontier,
                  ++e.doc.highlightFrontier
                ));
          }
          return t.styles;
        }
        function ft(e, t, r) {
          var n = e.doc,
            i = e.display;
          if (!n.mode.startState) return new ut(n, !0, t);
          var o = (function (e, t, r) {
              for (
                var n,
                  i,
                  o = e.doc,
                  a = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100),
                  l = t;
                l > a;
                --l
              ) {
                if (l <= o.first) return o.first;
                var s = Ve(o, l - 1),
                  c = s.stateAfter;
                if (
                  c &&
                  (!r ||
                    l + (c instanceof ct ? c.lookAhead : 0) <= o.modeFrontier)
                )
                  return l;
                var u = P(s.text, null, e.options.tabSize);
                (null == i || n > u) && ((i = l - 1), (n = u));
              }
              return i;
            })(e, t, r),
            a = o > n.first && Ve(n, o - 1).stateAfter,
            l = a ? ut.fromSaved(n, a, o) : new ut(n, $e(n.mode), o);
          return (
            n.iter(o, t, function (r) {
              mt(e, r.text, l);
              var n = l.line;
              (r.stateAfter =
                n == t - 1 || n % 5 == 0 || (n >= i.viewFrom && n < i.viewTo)
                  ? l.save()
                  : null),
                l.nextLine();
            }),
            r && (n.modeFrontier = l.line),
            l
          );
        }
        function mt(e, t, r, n) {
          var i = e.doc.mode,
            o = new Ue(t, e.options.tabSize, r);
          for (o.start = o.pos = n || 0, "" == t && ht(i, r.state); !o.eol(); )
            gt(i, o, r.state), (o.start = o.pos);
        }
        function ht(e, t) {
          if (e.blankLine) return e.blankLine(t);
          if (e.innerMode) {
            var r = He(e, t);
            return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0;
          }
        }
        function gt(e, t, r, n) {
          for (var i = 0; i < 10; i++) {
            n && (n[0] = He(e, r).mode);
            var o = e.token(t, r);
            if (t.pos > t.start) return o;
          }
          throw new Error("Mode " + e.name + " failed to advance stream.");
        }
        (ut.prototype.lookAhead = function (e) {
          var t = this.doc.getLine(this.line + e);
          return (
            null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t
          );
        }),
          (ut.prototype.baseToken = function (e) {
            if (!this.baseTokens) return null;
            for (; this.baseTokens[this.baseTokenPos] <= e; )
              this.baseTokenPos += 2;
            var t = this.baseTokens[this.baseTokenPos + 1];
            return {
              type: t && t.replace(/( |^)overlay .*/, ""),
              size: this.baseTokens[this.baseTokenPos] - e
            };
          }),
          (ut.prototype.nextLine = function () {
            this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
          }),
          (ut.fromSaved = function (e, t, r) {
            return t instanceof ct
              ? new ut(e, Re(e.mode, t.state), r, t.lookAhead)
              : new ut(e, Re(e.mode, t), r);
          }),
          (ut.prototype.save = function (e) {
            var t = !1 !== e ? Re(this.doc.mode, this.state) : this.state;
            return this.maxLookAhead > 0 ? new ct(t, this.maxLookAhead) : t;
          });
        var vt = function (e, t, r) {
          (this.start = e.start),
            (this.end = e.pos),
            (this.string = e.current()),
            (this.type = t || null),
            (this.state = r);
        };
        function bt(e, t, r, n) {
          var i,
            o = e.doc,
            a = o.mode;
          t = lt(o, t);
          var l,
            s = Ve(o, t.line),
            c = ft(e, t.line, r),
            u = new Ue(s.text, e.options.tabSize, c);
          for (n && (l = []); (n || u.pos < t.ch) && !u.eol(); )
            (u.start = u.pos),
              (i = gt(a, u, c.state)),
              n && l.push(new vt(u, i, Re(o.mode, c.state)));
          return n ? l : new vt(u, i, c.state);
        }
        function yt(e, t) {
          if (e)
            for (;;) {
              var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
              if (!r) break;
              e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
              var n = r[1] ? "bgClass" : "textClass";
              null == t[n]
                ? (t[n] = r[2])
                : new RegExp("(?:^|s)" + r[2] + "(?:$|s)").test(t[n]) ||
                  (t[n] += " " + r[2]);
            }
          return e;
        }
        function xt(e, t, r, n, i, o, a) {
          var l = r.flattenSpans;
          null == l && (l = e.options.flattenSpans);
          var s,
            c = 0,
            u = null,
            d = new Ue(t, e.options.tabSize, n),
            p = e.options.addModeClass && [null];
          for ("" == t && yt(ht(r, n.state), o); !d.eol(); ) {
            if (
              (d.pos > e.options.maxHighlightLength
                ? ((l = !1),
                  a && mt(e, t, n, d.pos),
                  (d.pos = t.length),
                  (s = null))
                : (s = yt(gt(r, d, n.state, p), o)),
              p)
            ) {
              var f = p[0].name;
              f && (s = "m-" + (s ? f + " " + s : f));
            }
            if (!l || u != s) {
              for (; c < d.start; ) (c = Math.min(d.start, c + 5e3)), i(c, u);
              u = s;
            }
            d.start = d.pos;
          }
          for (; c < d.pos; ) {
            var m = Math.min(d.pos, c + 5e3);
            i(m, u), (c = m);
          }
        }
        var kt = !1,
          wt = !1;
        function _t(e, t, r) {
          (this.marker = e), (this.from = t), (this.to = r);
        }
        function Ct(e, t) {
          if (e)
            for (var r = 0; r < e.length; ++r) {
              var n = e[r];
              if (n.marker == t) return n;
            }
        }
        function St(e, t) {
          for (var r, n = 0; n < e.length; ++n)
            e[n] != t && (r || (r = [])).push(e[n]);
          return r;
        }
        function Mt(e, t) {
          if (t.full) return null;
          var r = Qe(e, t.from.line) && Ve(e, t.from.line).markedSpans,
            n = Qe(e, t.to.line) && Ve(e, t.to.line).markedSpans;
          if (!r && !n) return null;
          var i = t.from.ch,
            o = t.to.ch,
            a = 0 == tt(t.from, t.to),
            l = (function (e, t, r) {
              var n;
              if (e)
                for (var i = 0; i < e.length; ++i) {
                  var o = e[i],
                    a = o.marker,
                    l =
                      null == o.from ||
                      (a.inclusiveLeft ? o.from <= t : o.from < t);
                  if (
                    l ||
                    (o.from == t &&
                      "bookmark" == a.type &&
                      (!r || !o.marker.insertLeft))
                  ) {
                    var s =
                      null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
                    (n || (n = [])).push(new _t(a, o.from, s ? null : o.to));
                  }
                }
              return n;
            })(r, i, a),
            s = (function (e, t, r) {
              var n;
              if (e)
                for (var i = 0; i < e.length; ++i) {
                  var o = e[i],
                    a = o.marker,
                    l =
                      null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
                  if (
                    l ||
                    (o.from == t &&
                      "bookmark" == a.type &&
                      (!r || o.marker.insertLeft))
                  ) {
                    var s =
                      null == o.from ||
                      (a.inclusiveLeft ? o.from <= t : o.from < t);
                    (n || (n = [])).push(
                      new _t(
                        a,
                        s ? null : o.from - t,
                        null == o.to ? null : o.to - t
                      )
                    );
                  }
                }
              return n;
            })(n, o, a),
            c = 1 == t.text.length,
            u = X(t.text).length + (c ? i : 0);
          if (l)
            for (var d = 0; d < l.length; ++d) {
              var p = l[d];
              if (null == p.to) {
                var f = Ct(s, p.marker);
                f ? c && (p.to = null == f.to ? null : f.to + u) : (p.to = i);
              }
            }
          if (s)
            for (var m = 0; m < s.length; ++m) {
              var h = s[m];
              if ((null != h.to && (h.to += u), null == h.from)) {
                var g = Ct(l, h.marker);
                g || ((h.from = u), c && (l || (l = [])).push(h));
              } else (h.from += u), c && (l || (l = [])).push(h);
            }
          l && (l = Lt(l)), s && s != l && (s = Lt(s));
          var v = [l];
          if (!c) {
            var b,
              y = t.text.length - 2;
            if (y > 0 && l)
              for (var x = 0; x < l.length; ++x)
                null == l[x].to &&
                  (b || (b = [])).push(new _t(l[x].marker, null, null));
            for (var k = 0; k < y; ++k) v.push(b);
            v.push(s);
          }
          return v;
        }
        function Lt(e) {
          for (var t = 0; t < e.length; ++t) {
            var r = e[t];
            null != r.from &&
              r.from == r.to &&
              !1 !== r.marker.clearWhenEmpty &&
              e.splice(t--, 1);
          }
          return e.length ? e : null;
        }
        function Tt(e) {
          var t = e.markedSpans;
          if (t) {
            for (var r = 0; r < t.length; ++r) t[r].marker.detachLine(e);
            e.markedSpans = null;
          }
        }
        function zt(e, t) {
          if (t) {
            for (var r = 0; r < t.length; ++r) t[r].marker.attachLine(e);
            e.markedSpans = t;
          }
        }
        function At(e) {
          return e.inclusiveLeft ? -1 : 0;
        }
        function Dt(e) {
          return e.inclusiveRight ? 1 : 0;
        }
        function Et(e, t) {
          var r = e.lines.length - t.lines.length;
          if (0 != r) return r;
          var n = e.find(),
            i = t.find(),
            o = tt(n.from, i.from) || At(e) - At(t);
          if (o) return -o;
          var a = tt(n.to, i.to) || Dt(e) - Dt(t);
          return a || t.id - e.id;
        }
        function Ft(e, t) {
          var r,
            n = wt && e.markedSpans;
          if (n)
            for (var i = void 0, o = 0; o < n.length; ++o)
              (i = n[o]).marker.collapsed &&
                null == (t ? i.from : i.to) &&
                (!r || Et(r, i.marker) < 0) &&
                (r = i.marker);
          return r;
        }
        function Nt(e) {
          return Ft(e, !0);
        }
        function Ot(e) {
          return Ft(e, !1);
        }
        function qt(e, t) {
          var r,
            n = wt && e.markedSpans;
          if (n)
            for (var i = 0; i < n.length; ++i) {
              var o = n[i];
              o.marker.collapsed &&
                (null == o.from || o.from < t) &&
                (null == o.to || o.to > t) &&
                (!r || Et(r, o.marker) < 0) &&
                (r = o.marker);
            }
          return r;
        }
        function It(e, t, r, n, i) {
          var o = Ve(e, t),
            a = wt && o.markedSpans;
          if (a)
            for (var l = 0; l < a.length; ++l) {
              var s = a[l];
              if (s.marker.collapsed) {
                var c = s.marker.find(0),
                  u = tt(c.from, r) || At(s.marker) - At(i),
                  d = tt(c.to, n) || Dt(s.marker) - Dt(i);
                if (
                  !((u >= 0 && d <= 0) || (u <= 0 && d >= 0)) &&
                  ((u <= 0 &&
                    (s.marker.inclusiveRight && i.inclusiveLeft
                      ? tt(c.to, r) >= 0
                      : tt(c.to, r) > 0)) ||
                    (u >= 0 &&
                      (s.marker.inclusiveRight && i.inclusiveLeft
                        ? tt(c.from, n) <= 0
                        : tt(c.from, n) < 0)))
                )
                  return !0;
              }
            }
        }
        function Pt(e) {
          for (var t; (t = Nt(e)); ) e = t.find(-1, !0).line;
          return e;
        }
        function jt(e, t) {
          var r = Ve(e, t),
            n = Pt(r);
          return r == n ? t : Ze(n);
        }
        function Bt(e, t) {
          if (t > e.lastLine()) return t;
          var r,
            n = Ve(e, t);
          if (!Wt(e, n)) return t;
          for (; (r = Ot(n)); ) n = r.find(1, !0).line;
          return Ze(n) + 1;
        }
        function Wt(e, t) {
          var r = wt && t.markedSpans;
          if (r)
            for (var n = void 0, i = 0; i < r.length; ++i)
              if ((n = r[i]).marker.collapsed) {
                if (null == n.from) return !0;
                if (
                  !n.marker.widgetNode &&
                  0 == n.from &&
                  n.marker.inclusiveLeft &&
                  Rt(e, t, n)
                )
                  return !0;
              }
        }
        function Rt(e, t, r) {
          if (null == r.to) {
            var n = r.marker.find(1, !0);
            return Rt(e, n.line, Ct(n.line.markedSpans, r.marker));
          }
          if (r.marker.inclusiveRight && r.to == t.text.length) return !0;
          for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
            if (
              (i = t.markedSpans[o]).marker.collapsed &&
              !i.marker.widgetNode &&
              i.from == r.to &&
              (null == i.to || i.to != r.from) &&
              (i.marker.inclusiveLeft || r.marker.inclusiveRight) &&
              Rt(e, t, i)
            )
              return !0;
        }
        function Ht(e) {
          e = Pt(e);
          for (var t = 0, r = e.parent, n = 0; n < r.lines.length; ++n) {
            var i = r.lines[n];
            if (i == e) break;
            t += i.height;
          }
          for (var o = r.parent; o; o = (r = o).parent)
            for (var a = 0; a < o.children.length; ++a) {
              var l = o.children[a];
              if (l == r) break;
              t += l.height;
            }
          return t;
        }
        function $t(e) {
          if (0 == e.height) return 0;
          for (var t, r = e.text.length, n = e; (t = Nt(n)); ) {
            var i = t.find(0, !0);
            (n = i.from.line), (r += i.from.ch - i.to.ch);
          }
          for (n = e; (t = Ot(n)); ) {
            var o = t.find(0, !0);
            (r -= n.text.length - o.from.ch),
              (n = o.to.line),
              (r += n.text.length - o.to.ch);
          }
          return r;
        }
        function Ut(e) {
          var t = e.display,
            r = e.doc;
          (t.maxLine = Ve(r, r.first)),
            (t.maxLineLength = $t(t.maxLine)),
            (t.maxLineChanged = !0),
            r.iter(function (e) {
              var r = $t(e);
              r > t.maxLineLength && ((t.maxLineLength = r), (t.maxLine = e));
            });
        }
        var Vt = function (e, t, r) {
          (this.text = e), zt(this, t), (this.height = r ? r(this) : 1);
        };
        function Kt(e) {
          (e.parent = null), Tt(e);
        }
        (Vt.prototype.lineNo = function () {
          return Ze(this);
        }),
          ye(Vt);
        var Gt = {},
          Xt = {};
        function Zt(e, t) {
          if (!e || /^\s*$/.test(e)) return null;
          var r = t.addModeClass ? Xt : Gt;
          return r[e] || (r[e] = e.replace(/\S+/g, "cm-$&"));
        }
        function Yt(e, t) {
          var r = A("span", null, null, s ? "padding-right: .1px" : null),
            n = {
              pre: A("pre", [r], "CodeMirror-line"),
              content: r,
              col: 0,
              pos: 0,
              cm: e,
              trailingSpace: !1,
              splitSpaces: e.getOption("lineWrapping")
            };
          t.measure = {};
          for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
            var o = i ? t.rest[i - 1] : t.line,
              a = void 0;
            (n.pos = 0),
              (n.addToken = Jt),
              Ae(e.display.measure) &&
                (a = ue(o, e.doc.direction)) &&
                (n.addToken = er(n.addToken, a)),
              (n.map = []);
            var l = t != e.display.externalMeasured && Ze(o);
            rr(o, n, pt(e, o, l)),
              o.styleClasses &&
                (o.styleClasses.bgClass &&
                  (n.bgClass = N(o.styleClasses.bgClass, n.bgClass || "")),
                o.styleClasses.textClass &&
                  (n.textClass = N(
                    o.styleClasses.textClass,
                    n.textClass || ""
                  ))),
              0 == n.map.length &&
                n.map.push(0, 0, n.content.appendChild(ze(e.display.measure))),
              0 == i
                ? ((t.measure.map = n.map), (t.measure.cache = {}))
                : ((t.measure.maps || (t.measure.maps = [])).push(n.map),
                  (t.measure.caches || (t.measure.caches = [])).push({}));
          }
          if (s) {
            var c = n.content.lastChild;
            (/\bcm-tab\b/.test(c.className) ||
              (c.querySelector && c.querySelector(".cm-tab"))) &&
              (n.content.className = "cm-tab-wrap-hack");
          }
          return (
            he(e, "renderLine", e, t.line, n.pre),
            n.pre.className &&
              (n.textClass = N(n.pre.className, n.textClass || "")),
            n
          );
        }
        function Qt(e) {
          var t = z("span", "•", "cm-invalidchar");
          return (
            (t.title = "\\u" + e.charCodeAt(0).toString(16)),
            t.setAttribute("aria-label", t.title),
            t
          );
        }
        function Jt(e, t, r, n, i, o, s) {
          if (t) {
            var c,
              u = e.splitSpaces
                ? (function (e, t) {
                    if (e.length > 1 && !/  /.test(e)) return e;
                    for (var r = t, n = "", i = 0; i < e.length; i++) {
                      var o = e.charAt(i);
                      " " != o ||
                        !r ||
                        (i != e.length - 1 && 32 != e.charCodeAt(i + 1)) ||
                        (o = " "),
                        (n += o),
                        (r = " " == o);
                    }
                    return n;
                  })(t, e.trailingSpace)
                : t,
              d = e.cm.state.specialChars,
              p = !1;
            if (d.test(t)) {
              c = document.createDocumentFragment();
              for (var f = 0; ; ) {
                d.lastIndex = f;
                var m = d.exec(t),
                  h = m ? m.index - f : t.length - f;
                if (h) {
                  var g = document.createTextNode(u.slice(f, f + h));
                  a && l < 9 ? c.appendChild(z("span", [g])) : c.appendChild(g),
                    e.map.push(e.pos, e.pos + h, g),
                    (e.col += h),
                    (e.pos += h);
                }
                if (!m) break;
                f += h + 1;
                var v = void 0;
                if ("\t" == m[0]) {
                  var b = e.cm.options.tabSize,
                    y = b - (e.col % b);
                  (v = c.appendChild(z("span", G(y), "cm-tab"))).setAttribute(
                    "role",
                    "presentation"
                  ),
                    v.setAttribute("cm-text", "\t"),
                    (e.col += y);
                } else
                  "\r" == m[0] || "\n" == m[0]
                    ? ((v = c.appendChild(
                        z("span", "\r" == m[0] ? "␍" : "␤", "cm-invalidchar")
                      )).setAttribute("cm-text", m[0]),
                      (e.col += 1))
                    : ((v = e.cm.options.specialCharPlaceholder(
                        m[0]
                      )).setAttribute("cm-text", m[0]),
                      a && l < 9
                        ? c.appendChild(z("span", [v]))
                        : c.appendChild(v),
                      (e.col += 1));
                e.map.push(e.pos, e.pos + 1, v), e.pos++;
              }
            } else
              (e.col += t.length),
                (c = document.createTextNode(u)),
                e.map.push(e.pos, e.pos + t.length, c),
                a && l < 9 && (p = !0),
                (e.pos += t.length);
            if (
              ((e.trailingSpace = 32 == u.charCodeAt(t.length - 1)),
              r || n || i || p || o)
            ) {
              var x = r || "";
              n && (x += n), i && (x += i);
              var k = z("span", [c], x, o);
              if (s)
                for (var w in s)
                  s.hasOwnProperty(w) &&
                    "style" != w &&
                    "class" != w &&
                    k.setAttribute(w, s[w]);
              return e.content.appendChild(k);
            }
            e.content.appendChild(c);
          }
        }
        function er(e, t) {
          return function (r, n, i, o, a, l, s) {
            i = i ? i + " cm-force-border" : "cm-force-border";
            for (var c = r.pos, u = c + n.length; ; ) {
              for (
                var d = void 0, p = 0;
                p < t.length && !((d = t[p]).to > c && d.from <= c);
                p++
              );
              if (d.to >= u) return e(r, n, i, o, a, l, s);
              e(r, n.slice(0, d.to - c), i, o, null, l, s),
                (o = null),
                (n = n.slice(d.to - c)),
                (c = d.to);
            }
          };
        }
        function tr(e, t, r, n) {
          var i = !n && r.widgetNode;
          i && e.map.push(e.pos, e.pos + t, i),
            !n &&
              e.cm.display.input.needsContentAttribute &&
              (i || (i = e.content.appendChild(document.createElement("span"))),
              i.setAttribute("cm-marker", r.id)),
            i &&
              (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
            (e.pos += t),
            (e.trailingSpace = !1);
        }
        function rr(e, t, r) {
          var n = e.markedSpans,
            i = e.text,
            o = 0;
          if (n)
            for (
              var a,
                l,
                s,
                c,
                u,
                d,
                p,
                f = i.length,
                m = 0,
                h = 1,
                g = "",
                v = 0;
              ;

            ) {
              if (v == m) {
                (s = c = u = l = ""), (p = null), (d = null), (v = 1 / 0);
                for (var b = [], y = void 0, x = 0; x < n.length; ++x) {
                  var k = n[x],
                    w = k.marker;
                  if ("bookmark" == w.type && k.from == m && w.widgetNode)
                    b.push(w);
                  else if (
                    k.from <= m &&
                    (null == k.to ||
                      k.to > m ||
                      (w.collapsed && k.to == m && k.from == m))
                  ) {
                    if (
                      (null != k.to &&
                        k.to != m &&
                        v > k.to &&
                        ((v = k.to), (c = "")),
                      w.className && (s += " " + w.className),
                      w.css && (l = (l ? l + ";" : "") + w.css),
                      w.startStyle && k.from == m && (u += " " + w.startStyle),
                      w.endStyle &&
                        k.to == v &&
                        (y || (y = [])).push(w.endStyle, k.to),
                      w.title && ((p || (p = {})).title = w.title),
                      w.attributes)
                    )
                      for (var _ in w.attributes)
                        (p || (p = {}))[_] = w.attributes[_];
                    w.collapsed && (!d || Et(d.marker, w) < 0) && (d = k);
                  } else k.from > m && v > k.from && (v = k.from);
                }
                if (y)
                  for (var C = 0; C < y.length; C += 2)
                    y[C + 1] == v && (c += " " + y[C]);
                if (!d || d.from == m)
                  for (var S = 0; S < b.length; ++S) tr(t, 0, b[S]);
                if (d && (d.from || 0) == m) {
                  if (
                    (tr(
                      t,
                      (null == d.to ? f + 1 : d.to) - m,
                      d.marker,
                      null == d.from
                    ),
                    null == d.to)
                  )
                    return;
                  d.to == m && (d = !1);
                }
              }
              if (m >= f) break;
              for (var M = Math.min(f, v); ; ) {
                if (g) {
                  var L = m + g.length;
                  if (!d) {
                    var T = L > M ? g.slice(0, M - m) : g;
                    t.addToken(
                      t,
                      T,
                      a ? a + s : s,
                      u,
                      m + T.length == v ? c : "",
                      l,
                      p
                    );
                  }
                  if (L >= M) {
                    (g = g.slice(M - m)), (m = M);
                    break;
                  }
                  (m = L), (u = "");
                }
                (g = i.slice(o, (o = r[h++]))), (a = Zt(r[h++], t.cm.options));
              }
            }
          else
            for (var z = 1; z < r.length; z += 2)
              t.addToken(t, i.slice(o, (o = r[z])), Zt(r[z + 1], t.cm.options));
        }
        function nr(e, t, r) {
          (this.line = t),
            (this.rest = (function (e) {
              for (var t, r; (t = Ot(e)); )
                (e = t.find(1, !0).line), (r || (r = [])).push(e);
              return r;
            })(t)),
            (this.size = this.rest ? Ze(X(this.rest)) - r + 1 : 1),
            (this.node = this.text = null),
            (this.hidden = Wt(e, t));
        }
        function ir(e, t, r) {
          for (var n, i = [], o = t; o < r; o = n) {
            var a = new nr(e.doc, Ve(e.doc, o), o);
            (n = o + a.size), i.push(a);
          }
          return i;
        }
        var or = null,
          ar = null;
        function lr(e, t) {
          var r = fe(e, t);
          if (r.length) {
            var n,
              i = Array.prototype.slice.call(arguments, 2);
            or
              ? (n = or.delayedCallbacks)
              : ar
              ? (n = ar)
              : ((n = ar = []), setTimeout(sr, 0));
            for (
              var o = function (e) {
                  n.push(function () {
                    return r[e].apply(null, i);
                  });
                },
                a = 0;
              a < r.length;
              ++a
            )
              o(a);
          }
        }
        function sr() {
          var e = ar;
          ar = null;
          for (var t = 0; t < e.length; ++t) e[t]();
        }
        function cr(e, t, r, n) {
          for (var i = 0; i < t.changes.length; i++) {
            var o = t.changes[i];
            "text" == o
              ? pr(e, t)
              : "gutter" == o
              ? mr(e, t, r, n)
              : "class" == o
              ? fr(e, t)
              : "widget" == o && hr(e, t, n);
          }
          t.changes = null;
        }
        function ur(e) {
          return (
            e.node == e.text &&
              ((e.node = z("div", null, null, "position: relative")),
              e.text.parentNode &&
                e.text.parentNode.replaceChild(e.node, e.text),
              e.node.appendChild(e.text),
              a && l < 8 && (e.node.style.zIndex = 2)),
            e.node
          );
        }
        function dr(e, t) {
          var r = e.display.externalMeasured;
          return r && r.line == t.line
            ? ((e.display.externalMeasured = null),
              (t.measure = r.measure),
              r.built)
            : Yt(e, t);
        }
        function pr(e, t) {
          var r = t.text.className,
            n = dr(e, t);
          t.text == t.node && (t.node = n.pre),
            t.text.parentNode.replaceChild(n.pre, t.text),
            (t.text = n.pre),
            n.bgClass != t.bgClass || n.textClass != t.textClass
              ? ((t.bgClass = n.bgClass), (t.textClass = n.textClass), fr(e, t))
              : r && (t.text.className = r);
        }
        function fr(e, t) {
          !(function (e, t) {
            var r = t.bgClass
              ? t.bgClass + " " + (t.line.bgClass || "")
              : t.line.bgClass;
            if ((r && (r += " CodeMirror-linebackground"), t.background))
              r
                ? (t.background.className = r)
                : (t.background.parentNode.removeChild(t.background),
                  (t.background = null));
            else if (r) {
              var n = ur(t);
              (t.background = n.insertBefore(z("div", null, r), n.firstChild)),
                e.display.input.setUneditable(t.background);
            }
          })(e, t),
            t.line.wrapClass
              ? (ur(t).className = t.line.wrapClass)
              : t.node != t.text && (t.node.className = "");
          var r = t.textClass
            ? t.textClass + " " + (t.line.textClass || "")
            : t.line.textClass;
          t.text.className = r || "";
        }
        function mr(e, t, r, n) {
          if (
            (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
            t.gutterBackground &&
              (t.node.removeChild(t.gutterBackground),
              (t.gutterBackground = null)),
            t.line.gutterClass)
          ) {
            var i = ur(t);
            (t.gutterBackground = z(
              "div",
              null,
              "CodeMirror-gutter-background " + t.line.gutterClass,
              "left: " +
                (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) +
                "px; width: " +
                n.gutterTotalWidth +
                "px"
            )),
              e.display.input.setUneditable(t.gutterBackground),
              i.insertBefore(t.gutterBackground, t.text);
          }
          var o = t.line.gutterMarkers;
          if (e.options.lineNumbers || o) {
            var a = ur(t),
              l = (t.gutter = z(
                "div",
                null,
                "CodeMirror-gutter-wrapper",
                "left: " +
                  (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) +
                  "px"
              ));
            if (
              (e.display.input.setUneditable(l),
              a.insertBefore(l, t.text),
              t.line.gutterClass && (l.className += " " + t.line.gutterClass),
              !e.options.lineNumbers ||
                (o && o["CodeMirror-linenumbers"]) ||
                (t.lineNumber = l.appendChild(
                  z(
                    "div",
                    Je(e.options, r),
                    "CodeMirror-linenumber CodeMirror-gutter-elt",
                    "left: " +
                      n.gutterLeft["CodeMirror-linenumbers"] +
                      "px; width: " +
                      e.display.lineNumInnerWidth +
                      "px"
                  )
                )),
              o)
            )
              for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
                var c = e.display.gutterSpecs[s].className,
                  u = o.hasOwnProperty(c) && o[c];
                u &&
                  l.appendChild(
                    z(
                      "div",
                      [u],
                      "CodeMirror-gutter-elt",
                      "left: " +
                        n.gutterLeft[c] +
                        "px; width: " +
                        n.gutterWidth[c] +
                        "px"
                    )
                  );
              }
          }
        }
        function hr(e, t, r) {
          t.alignable && (t.alignable = null);
          for (
            var n = C("CodeMirror-linewidget"),
              i = t.node.firstChild,
              o = void 0;
            i;
            i = o
          )
            (o = i.nextSibling), n.test(i.className) && t.node.removeChild(i);
          vr(e, t, r);
        }
        function gr(e, t, r, n) {
          var i = dr(e, t);
          return (
            (t.text = t.node = i.pre),
            i.bgClass && (t.bgClass = i.bgClass),
            i.textClass && (t.textClass = i.textClass),
            fr(e, t),
            mr(e, t, r, n),
            vr(e, t, n),
            t.node
          );
        }
        function vr(e, t, r) {
          if ((br(e, t.line, t, r, !0), t.rest))
            for (var n = 0; n < t.rest.length; n++) br(e, t.rest[n], t, r, !1);
        }
        function br(e, t, r, n, i) {
          if (t.widgets)
            for (var o = ur(r), a = 0, l = t.widgets; a < l.length; ++a) {
              var s = l[a],
                c = z(
                  "div",
                  [s.node],
                  "CodeMirror-linewidget" +
                    (s.className ? " " + s.className : "")
                );
              s.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"),
                yr(s, c, r, n),
                e.display.input.setUneditable(c),
                i && s.above
                  ? o.insertBefore(c, r.gutter || r.text)
                  : o.appendChild(c),
                lr(s, "redraw");
            }
        }
        function yr(e, t, r, n) {
          if (e.noHScroll) {
            (r.alignable || (r.alignable = [])).push(t);
            var i = n.wrapperWidth;
            (t.style.left = n.fixedPos + "px"),
              e.coverGutter ||
                ((i -= n.gutterTotalWidth),
                (t.style.paddingLeft = n.gutterTotalWidth + "px")),
              (t.style.width = i + "px");
          }
          e.coverGutter &&
            ((t.style.zIndex = 5),
            (t.style.position = "relative"),
            e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px"));
        }
        function xr(e) {
          if (null != e.height) return e.height;
          var t = e.doc.cm;
          if (!t) return 0;
          if (!D(document.body, e.node)) {
            var r = "position: relative;";
            e.coverGutter &&
              (r += "margin-left: -" + t.display.gutters.offsetWidth + "px;"),
              e.noHScroll &&
                (r += "width: " + t.display.wrapper.clientWidth + "px;"),
              T(t.display.measure, z("div", [e.node], null, r));
          }
          return (e.height = e.node.parentNode.offsetHeight);
        }
        function kr(e, t) {
          for (var r = Ce(t); r != e.wrapper; r = r.parentNode)
            if (
              !r ||
              (1 == r.nodeType &&
                "true" == r.getAttribute("cm-ignore-events")) ||
              (r.parentNode == e.sizer && r != e.mover)
            )
              return !0;
        }
        function wr(e) {
          return e.lineSpace.offsetTop;
        }
        function _r(e) {
          return e.mover.offsetHeight - e.lineSpace.offsetHeight;
        }
        function Cr(e) {
          if (e.cachedPaddingH) return e.cachedPaddingH;
          var t = T(e.measure, z("pre", "x", "CodeMirror-line-like")),
            r = window.getComputedStyle
              ? window.getComputedStyle(t)
              : t.currentStyle,
            n = {
              left: parseInt(r.paddingLeft),
              right: parseInt(r.paddingRight)
            };
          return isNaN(n.left) || isNaN(n.right) || (e.cachedPaddingH = n), n;
        }
        function Sr(e) {
          return W - e.display.nativeBarWidth;
        }
        function Mr(e) {
          return e.display.scroller.clientWidth - Sr(e) - e.display.barWidth;
        }
        function Lr(e) {
          return e.display.scroller.clientHeight - Sr(e) - e.display.barHeight;
        }
        function Tr(e, t, r) {
          if (e.line == t)
            return { map: e.measure.map, cache: e.measure.cache };
          for (var n = 0; n < e.rest.length; n++)
            if (e.rest[n] == t)
              return { map: e.measure.maps[n], cache: e.measure.caches[n] };
          for (var i = 0; i < e.rest.length; i++)
            if (Ze(e.rest[i]) > r)
              return {
                map: e.measure.maps[i],
                cache: e.measure.caches[i],
                before: !0
              };
        }
        function zr(e, t, r, n) {
          return Er(e, Dr(e, t), r, n);
        }
        function Ar(e, t) {
          if (t >= e.display.viewFrom && t < e.display.viewTo)
            return e.display.view[sn(e, t)];
          var r = e.display.externalMeasured;
          return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0;
        }
        function Dr(e, t) {
          var r = Ze(t),
            n = Ar(e, r);
          n && !n.text
            ? (n = null)
            : n &&
              n.changes &&
              (cr(e, n, r, rn(e)), (e.curOp.forceUpdate = !0)),
            n ||
              (n = (function (e, t) {
                var r = Ze((t = Pt(t))),
                  n = (e.display.externalMeasured = new nr(e.doc, t, r));
                n.lineN = r;
                var i = (n.built = Yt(e, n));
                return (n.text = i.pre), T(e.display.lineMeasure, i.pre), n;
              })(e, t));
          var i = Tr(n, t, r);
          return {
            line: t,
            view: n,
            rect: null,
            map: i.map,
            cache: i.cache,
            before: i.before,
            hasHeights: !1
          };
        }
        function Er(e, t, r, n, i) {
          t.before && (r = -1);
          var o,
            s = r + (n || "");
          return (
            t.cache.hasOwnProperty(s)
              ? (o = t.cache[s])
              : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
                t.hasHeights ||
                  ((function (e, t, r) {
                    var n = e.options.lineWrapping,
                      i = n && Mr(e);
                    if (!t.measure.heights || (n && t.measure.width != i)) {
                      var o = (t.measure.heights = []);
                      if (n) {
                        t.measure.width = i;
                        for (
                          var a = t.text.firstChild.getClientRects(), l = 0;
                          l < a.length - 1;
                          l++
                        ) {
                          var s = a[l],
                            c = a[l + 1];
                          Math.abs(s.bottom - c.bottom) > 2 &&
                            o.push((s.bottom + c.top) / 2 - r.top);
                        }
                      }
                      o.push(r.bottom - r.top);
                    }
                  })(e, t.view, t.rect),
                  (t.hasHeights = !0)),
                (o = (function (e, t, r, n) {
                  var i,
                    o = Or(t.map, r, n),
                    s = o.node,
                    c = o.start,
                    u = o.end,
                    d = o.collapse;
                  if (3 == s.nodeType) {
                    for (var p = 0; p < 4; p++) {
                      for (; c && ie(t.line.text.charAt(o.coverStart + c)); )
                        --c;
                      for (
                        ;
                        o.coverStart + u < o.coverEnd &&
                        ie(t.line.text.charAt(o.coverStart + u));

                      )
                        ++u;
                      if (
                        (i =
                          a && l < 9 && 0 == c && u == o.coverEnd - o.coverStart
                            ? s.parentNode.getBoundingClientRect()
                            : qr(S(s, c, u).getClientRects(), n)).left ||
                        i.right ||
                        0 == c
                      )
                        break;
                      (u = c), (c -= 1), (d = "right");
                    }
                    a &&
                      l < 11 &&
                      (i = (function (e, t) {
                        if (
                          !window.screen ||
                          null == screen.logicalXDPI ||
                          screen.logicalXDPI == screen.deviceXDPI ||
                          !(function (e) {
                            if (null != Oe) return Oe;
                            var t = T(e, z("span", "x")),
                              r = t.getBoundingClientRect(),
                              n = S(t, 0, 1).getBoundingClientRect();
                            return (Oe = Math.abs(r.left - n.left) > 1);
                          })(e)
                        )
                          return t;
                        var r = screen.logicalXDPI / screen.deviceXDPI,
                          n = screen.logicalYDPI / screen.deviceYDPI;
                        return {
                          left: t.left * r,
                          right: t.right * r,
                          top: t.top * n,
                          bottom: t.bottom * n
                        };
                      })(e.display.measure, i));
                  } else {
                    var f;
                    c > 0 && (d = n = "right"),
                      (i =
                        e.options.lineWrapping &&
                        (f = s.getClientRects()).length > 1
                          ? f["right" == n ? f.length - 1 : 0]
                          : s.getBoundingClientRect());
                  }
                  if (a && l < 9 && !c && (!i || (!i.left && !i.right))) {
                    var m = s.parentNode.getClientRects()[0];
                    i = m
                      ? {
                          left: m.left,
                          right: m.left + tn(e.display),
                          top: m.top,
                          bottom: m.bottom
                        }
                      : Nr;
                  }
                  for (
                    var h = i.top - t.rect.top,
                      g = i.bottom - t.rect.top,
                      v = (h + g) / 2,
                      b = t.view.measure.heights,
                      y = 0;
                    y < b.length - 1 && !(v < b[y]);
                    y++
                  );
                  var x = y ? b[y - 1] : 0,
                    k = b[y],
                    w = {
                      left: ("right" == d ? i.right : i.left) - t.rect.left,
                      right: ("left" == d ? i.left : i.right) - t.rect.left,
                      top: x,
                      bottom: k
                    };
                  return (
                    i.left || i.right || (w.bogus = !0),
                    e.options.singleCursorHeightPerLine ||
                      ((w.rtop = h), (w.rbottom = g)),
                    w
                  );
                })(e, t, r, n)).bogus || (t.cache[s] = o)),
            {
              left: o.left,
              right: o.right,
              top: i ? o.rtop : o.top,
              bottom: i ? o.rbottom : o.bottom
            }
          );
        }
        var Fr,
          Nr = { left: 0, right: 0, top: 0, bottom: 0 };
        function Or(e, t, r) {
          for (var n, i, o, a, l, s, c = 0; c < e.length; c += 3)
            if (
              ((l = e[c]),
              (s = e[c + 1]),
              t < l
                ? ((i = 0), (o = 1), (a = "left"))
                : t < s
                ? (o = 1 + (i = t - l))
                : (c == e.length - 3 || (t == s && e[c + 3] > t)) &&
                  ((i = (o = s - l) - 1), t >= s && (a = "right")),
              null != i)
            ) {
              if (
                ((n = e[c + 2]),
                l == s && r == (n.insertLeft ? "left" : "right") && (a = r),
                "left" == r && 0 == i)
              )
                for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft; )
                  (n = e[2 + (c -= 3)]), (a = "left");
              if ("right" == r && i == s - l)
                for (
                  ;
                  c < e.length - 3 &&
                  e[c + 3] == e[c + 4] &&
                  !e[c + 5].insertLeft;

                )
                  (n = e[(c += 3) + 2]), (a = "right");
              break;
            }
          return {
            node: n,
            start: i,
            end: o,
            collapse: a,
            coverStart: l,
            coverEnd: s
          };
        }
        function qr(e, t) {
          var r = Nr;
          if ("left" == t)
            for (var n = 0; n < e.length && (r = e[n]).left == r.right; n++);
          else
            for (
              var i = e.length - 1;
              i >= 0 && (r = e[i]).left == r.right;
              i--
            );
          return r;
        }
        function Ir(e) {
          if (
            e.measure &&
            ((e.measure.cache = {}), (e.measure.heights = null), e.rest)
          )
            for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
        }
        function Pr(e) {
          (e.display.externalMeasure = null), L(e.display.lineMeasure);
          for (var t = 0; t < e.display.view.length; t++) Ir(e.display.view[t]);
        }
        function jr(e) {
          Pr(e),
            (e.display.cachedCharWidth =
              e.display.cachedTextHeight =
              e.display.cachedPaddingH =
                null),
            e.options.lineWrapping || (e.display.maxLineChanged = !0),
            (e.display.lineNumChars = null);
        }
        function Br() {
          return u && g
            ? -(
                document.body.getBoundingClientRect().left -
                parseInt(getComputedStyle(document.body).marginLeft)
              )
            : window.pageXOffset ||
                (document.documentElement || document.body).scrollLeft;
        }
        function Wr() {
          return u && g
            ? -(
                document.body.getBoundingClientRect().top -
                parseInt(getComputedStyle(document.body).marginTop)
              )
            : window.pageYOffset ||
                (document.documentElement || document.body).scrollTop;
        }
        function Rr(e) {
          var t = 0;
          if (e.widgets)
            for (var r = 0; r < e.widgets.length; ++r)
              e.widgets[r].above && (t += xr(e.widgets[r]));
          return t;
        }
        function Hr(e, t, r, n, i) {
          if (!i) {
            var o = Rr(t);
            (r.top += o), (r.bottom += o);
          }
          if ("line" == n) return r;
          n || (n = "local");
          var a = Ht(t);
          if (
            ("local" == n ? (a += wr(e.display)) : (a -= e.display.viewOffset),
            "page" == n || "window" == n)
          ) {
            var l = e.display.lineSpace.getBoundingClientRect();
            a += l.top + ("window" == n ? 0 : Wr());
            var s = l.left + ("window" == n ? 0 : Br());
            (r.left += s), (r.right += s);
          }
          return (r.top += a), (r.bottom += a), r;
        }
        function $r(e, t, r) {
          if ("div" == r) return t;
          var n = t.left,
            i = t.top;
          if ("page" == r) (n -= Br()), (i -= Wr());
          else if ("local" == r || !r) {
            var o = e.display.sizer.getBoundingClientRect();
            (n += o.left), (i += o.top);
          }
          var a = e.display.lineSpace.getBoundingClientRect();
          return { left: n - a.left, top: i - a.top };
        }
        function Ur(e, t, r, n, i) {
          return n || (n = Ve(e.doc, t.line)), Hr(e, n, zr(e, n, t.ch, i), r);
        }
        function Vr(e, t, r, n, i, o) {
          function a(t, a) {
            var l = Er(e, i, t, a ? "right" : "left", o);
            return a ? (l.left = l.right) : (l.right = l.left), Hr(e, n, l, r);
          }
          (n = n || Ve(e.doc, t.line)), i || (i = Dr(e, n));
          var l = ue(n, e.doc.direction),
            s = t.ch,
            c = t.sticky;
          if (
            (s >= n.text.length
              ? ((s = n.text.length), (c = "before"))
              : s <= 0 && ((s = 0), (c = "after")),
            !l)
          )
            return a("before" == c ? s - 1 : s, "before" == c);
          function u(e, t, r) {
            var n = l[t],
              i = 1 == n.level;
            return a(r ? e - 1 : e, i != r);
          }
          var d = se(l, s, c),
            p = le,
            f = u(s, d, "before" == c);
          return null != p && (f.other = u(s, p, "before" != c)), f;
        }
        function Kr(e, t) {
          var r = 0;
          (t = lt(e.doc, t)),
            e.options.lineWrapping || (r = tn(e.display) * t.ch);
          var n = Ve(e.doc, t.line),
            i = Ht(n) + wr(e.display);
          return { left: r, right: r, top: i, bottom: i + n.height };
        }
        function Gr(e, t, r, n, i) {
          var o = et(e, t, r);
          return (o.xRel = i), n && (o.outside = n), o;
        }
        function Xr(e, t, r) {
          var n = e.doc;
          if ((r += e.display.viewOffset) < 0)
            return Gr(n.first, 0, null, -1, -1);
          var i = Ye(n, r),
            o = n.first + n.size - 1;
          if (i > o)
            return Gr(n.first + n.size - 1, Ve(n, o).text.length, null, 1, 1);
          t < 0 && (t = 0);
          for (var a = Ve(n, i); ; ) {
            var l = Jr(e, a, i, t, r),
              s = qt(a, l.ch + (l.xRel > 0 || l.outside > 0 ? 1 : 0));
            if (!s) return l;
            var c = s.find(1);
            if (c.line == i) return c;
            a = Ve(n, (i = c.line));
          }
        }
        function Zr(e, t, r, n) {
          n -= Rr(t);
          var i = t.text.length,
            o = ae(
              function (t) {
                return Er(e, r, t - 1).bottom <= n;
              },
              i,
              0
            );
          return (
            (i = ae(
              function (t) {
                return Er(e, r, t).top > n;
              },
              o,
              i
            )),
            { begin: o, end: i }
          );
        }
        function Yr(e, t, r, n) {
          r || (r = Dr(e, t));
          var i = Hr(e, t, Er(e, r, n), "line").top;
          return Zr(e, t, r, i);
        }
        function Qr(e, t, r, n) {
          return !(e.bottom <= r) && (e.top > r || (n ? e.left : e.right) > t);
        }
        function Jr(e, t, r, n, i) {
          i -= Ht(t);
          var o = Dr(e, t),
            a = Rr(t),
            l = 0,
            s = t.text.length,
            c = !0,
            u = ue(t, e.doc.direction);
          if (u) {
            var d = (
              e.options.lineWrapping
                ? function (e, t, r, n, i, o, a) {
                    var l = Zr(e, t, n, a),
                      s = l.begin,
                      c = l.end;
                    /\s/.test(t.text.charAt(c - 1)) && c--;
                    for (var u = null, d = null, p = 0; p < i.length; p++) {
                      var f = i[p];
                      if (!(f.from >= c || f.to <= s)) {
                        var m = 1 != f.level,
                          h = Er(
                            e,
                            n,
                            m ? Math.min(c, f.to) - 1 : Math.max(s, f.from)
                          ).right,
                          g = h < o ? o - h + 1e9 : h - o;
                        (!u || d > g) && ((u = f), (d = g));
                      }
                    }
                    return (
                      u || (u = i[i.length - 1]),
                      u.from < s && (u = { from: s, to: u.to, level: u.level }),
                      u.to > c && (u = { from: u.from, to: c, level: u.level }),
                      u
                    );
                  }
                : function (e, t, r, n, i, o, a) {
                    var l = ae(
                        function (l) {
                          var s = i[l],
                            c = 1 != s.level;
                          return Qr(
                            Vr(
                              e,
                              et(r, c ? s.to : s.from, c ? "before" : "after"),
                              "line",
                              t,
                              n
                            ),
                            o,
                            a,
                            !0
                          );
                        },
                        0,
                        i.length - 1
                      ),
                      s = i[l];
                    if (l > 0) {
                      var c = 1 != s.level,
                        u = Vr(
                          e,
                          et(r, c ? s.from : s.to, c ? "after" : "before"),
                          "line",
                          t,
                          n
                        );
                      Qr(u, o, a, !0) && u.top > a && (s = i[l - 1]);
                    }
                    return s;
                  }
            )(e, t, r, o, u, n, i);
            (c = 1 != d.level),
              (l = c ? d.from : d.to - 1),
              (s = c ? d.to : d.from - 1);
          }
          var p,
            f,
            m = null,
            h = null,
            g = ae(
              function (t) {
                var r = Er(e, o, t);
                return (
                  (r.top += a),
                  (r.bottom += a),
                  !!Qr(r, n, i, !1) &&
                    (r.top <= i && r.left <= n && ((m = t), (h = r)), !0)
                );
              },
              l,
              s
            ),
            v = !1;
          if (h) {
            var b = n - h.left < h.right - n,
              y = b == c;
            (g = m + (y ? 0 : 1)),
              (f = y ? "after" : "before"),
              (p = b ? h.left : h.right);
          } else {
            c || (g != s && g != l) || g++,
              (f =
                0 == g
                  ? "after"
                  : g == t.text.length
                  ? "before"
                  : Er(e, o, g - (c ? 1 : 0)).bottom + a <= i == c
                  ? "after"
                  : "before");
            var x = Vr(e, et(r, g, f), "line", t, o);
            (p = x.left), (v = i < x.top ? -1 : i >= x.bottom ? 1 : 0);
          }
          return (g = oe(t.text, g, 1)), Gr(r, g, f, v, n - p);
        }
        function en(e) {
          if (null != e.cachedTextHeight) return e.cachedTextHeight;
          if (null == Fr) {
            Fr = z("pre", null, "CodeMirror-line-like");
            for (var t = 0; t < 49; ++t)
              Fr.appendChild(document.createTextNode("x")),
                Fr.appendChild(z("br"));
            Fr.appendChild(document.createTextNode("x"));
          }
          T(e.measure, Fr);
          var r = Fr.offsetHeight / 50;
          return r > 3 && (e.cachedTextHeight = r), L(e.measure), r || 1;
        }
        function tn(e) {
          if (null != e.cachedCharWidth) return e.cachedCharWidth;
          var t = z("span", "xxxxxxxxxx"),
            r = z("pre", [t], "CodeMirror-line-like");
          T(e.measure, r);
          var n = t.getBoundingClientRect(),
            i = (n.right - n.left) / 10;
          return i > 2 && (e.cachedCharWidth = i), i || 10;
        }
        function rn(e) {
          for (
            var t = e.display,
              r = {},
              n = {},
              i = t.gutters.clientLeft,
              o = t.gutters.firstChild,
              a = 0;
            o;
            o = o.nextSibling, ++a
          ) {
            var l = e.display.gutterSpecs[a].className;
            (r[l] = o.offsetLeft + o.clientLeft + i), (n[l] = o.clientWidth);
          }
          return {
            fixedPos: nn(t),
            gutterTotalWidth: t.gutters.offsetWidth,
            gutterLeft: r,
            gutterWidth: n,
            wrapperWidth: t.wrapper.clientWidth
          };
        }
        function nn(e) {
          return (
            e.scroller.getBoundingClientRect().left -
            e.sizer.getBoundingClientRect().left
          );
        }
        function on(e) {
          var t = en(e.display),
            r = e.options.lineWrapping,
            n =
              r &&
              Math.max(5, e.display.scroller.clientWidth / tn(e.display) - 3);
          return function (i) {
            if (Wt(e.doc, i)) return 0;
            var o = 0;
            if (i.widgets)
              for (var a = 0; a < i.widgets.length; a++)
                i.widgets[a].height && (o += i.widgets[a].height);
            return r ? o + (Math.ceil(i.text.length / n) || 1) * t : o + t;
          };
        }
        function an(e) {
          var t = e.doc,
            r = on(e);
          t.iter(function (e) {
            var t = r(e);
            t != e.height && Xe(e, t);
          });
        }
        function ln(e, t, r, n) {
          var i = e.display;
          if (!r && "true" == Ce(t).getAttribute("cm-not-content")) return null;
          var o,
            a,
            l = i.lineSpace.getBoundingClientRect();
          try {
            (o = t.clientX - l.left), (a = t.clientY - l.top);
          } catch (t) {
            return null;
          }
          var s,
            c = Xr(e, o, a);
          if (n && c.xRel > 0 && (s = Ve(e.doc, c.line).text).length == c.ch) {
            var u = P(s, s.length, e.options.tabSize) - s.length;
            c = et(
              c.line,
              Math.max(
                0,
                Math.round((o - Cr(e.display).left) / tn(e.display)) - u
              )
            );
          }
          return c;
        }
        function sn(e, t) {
          if (t >= e.display.viewTo) return null;
          if ((t -= e.display.viewFrom) < 0) return null;
          for (var r = e.display.view, n = 0; n < r.length; n++)
            if ((t -= r[n].size) < 0) return n;
        }
        function cn(e, t, r, n) {
          null == t && (t = e.doc.first),
            null == r && (r = e.doc.first + e.doc.size),
            n || (n = 0);
          var i = e.display;
          if (
            (n &&
              r < i.viewTo &&
              (null == i.updateLineNumbers || i.updateLineNumbers > t) &&
              (i.updateLineNumbers = t),
            (e.curOp.viewChanged = !0),
            t >= i.viewTo)
          )
            wt && jt(e.doc, t) < i.viewTo && dn(e);
          else if (r <= i.viewFrom)
            wt && Bt(e.doc, r + n) > i.viewFrom
              ? dn(e)
              : ((i.viewFrom += n), (i.viewTo += n));
          else if (t <= i.viewFrom && r >= i.viewTo) dn(e);
          else if (t <= i.viewFrom) {
            var o = pn(e, r, r + n, 1);
            o
              ? ((i.view = i.view.slice(o.index)),
                (i.viewFrom = o.lineN),
                (i.viewTo += n))
              : dn(e);
          } else if (r >= i.viewTo) {
            var a = pn(e, t, t, -1);
            a
              ? ((i.view = i.view.slice(0, a.index)), (i.viewTo = a.lineN))
              : dn(e);
          } else {
            var l = pn(e, t, t, -1),
              s = pn(e, r, r + n, 1);
            l && s
              ? ((i.view = i.view
                  .slice(0, l.index)
                  .concat(ir(e, l.lineN, s.lineN))
                  .concat(i.view.slice(s.index))),
                (i.viewTo += n))
              : dn(e);
          }
          var c = i.externalMeasured;
          c &&
            (r < c.lineN
              ? (c.lineN += n)
              : t < c.lineN + c.size && (i.externalMeasured = null));
        }
        function un(e, t, r) {
          e.curOp.viewChanged = !0;
          var n = e.display,
            i = e.display.externalMeasured;
          if (
            (i &&
              t >= i.lineN &&
              t < i.lineN + i.size &&
              (n.externalMeasured = null),
            !(t < n.viewFrom || t >= n.viewTo))
          ) {
            var o = n.view[sn(e, t)];
            if (null != o.node) {
              var a = o.changes || (o.changes = []);
              -1 == B(a, r) && a.push(r);
            }
          }
        }
        function dn(e) {
          (e.display.viewFrom = e.display.viewTo = e.doc.first),
            (e.display.view = []),
            (e.display.viewOffset = 0);
        }
        function pn(e, t, r, n) {
          var i,
            o = sn(e, t),
            a = e.display.view;
          if (!wt || r == e.doc.first + e.doc.size)
            return { index: o, lineN: r };
          for (var l = e.display.viewFrom, s = 0; s < o; s++) l += a[s].size;
          if (l != t) {
            if (n > 0) {
              if (o == a.length - 1) return null;
              (i = l + a[o].size - t), o++;
            } else i = l - t;
            (t += i), (r += i);
          }
          for (; jt(e.doc, r) != r; ) {
            if (o == (n < 0 ? 0 : a.length - 1)) return null;
            (r += n * a[o - (n < 0 ? 1 : 0)].size), (o += n);
          }
          return { index: o, lineN: r };
        }
        function fn(e) {
          for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
            var i = t[n];
            i.hidden || (i.node && !i.changes) || ++r;
          }
          return r;
        }
        function mn(e) {
          e.display.input.showSelection(e.display.input.prepareSelection());
        }
        function hn(e, t) {
          void 0 === t && (t = !0);
          for (
            var r = e.doc,
              n = {},
              i = (n.cursors = document.createDocumentFragment()),
              o = (n.selection = document.createDocumentFragment()),
              a = 0;
            a < r.sel.ranges.length;
            a++
          )
            if (t || a != r.sel.primIndex) {
              var l = r.sel.ranges[a];
              if (
                !(
                  l.from().line >= e.display.viewTo ||
                  l.to().line < e.display.viewFrom
                )
              ) {
                var s = l.empty();
                (s || e.options.showCursorWhenSelecting) && gn(e, l.head, i),
                  s || bn(e, l, o);
              }
            }
          return n;
        }
        function gn(e, t, r) {
          var n = Vr(
              e,
              t,
              "div",
              null,
              null,
              !e.options.singleCursorHeightPerLine
            ),
            i = r.appendChild(z("div", " ", "CodeMirror-cursor"));
          if (
            ((i.style.left = n.left + "px"),
            (i.style.top = n.top + "px"),
            (i.style.height =
              Math.max(0, n.bottom - n.top) * e.options.cursorHeight + "px"),
            n.other)
          ) {
            var o = r.appendChild(
              z("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor")
            );
            (o.style.display = ""),
              (o.style.left = n.other.left + "px"),
              (o.style.top = n.other.top + "px"),
              (o.style.height = 0.85 * (n.other.bottom - n.other.top) + "px");
          }
        }
        function vn(e, t) {
          return e.top - t.top || e.left - t.left;
        }
        function bn(e, t, r) {
          var n = e.display,
            i = e.doc,
            o = document.createDocumentFragment(),
            a = Cr(e.display),
            l = a.left,
            s = Math.max(n.sizerWidth, Mr(e) - n.sizer.offsetLeft) - a.right,
            c = "ltr" == i.direction;
          function u(e, t, r, n) {
            t < 0 && (t = 0),
              (t = Math.round(t)),
              (n = Math.round(n)),
              o.appendChild(
                z(
                  "div",
                  null,
                  "CodeMirror-selected",
                  "position: absolute; left: " +
                    e +
                    "px;\n                             top: " +
                    t +
                    "px; width: " +
                    (null == r ? s - e : r) +
                    "px;\n                             height: " +
                    (n - t) +
                    "px"
                )
              );
          }
          function d(t, r, n) {
            var o,
              a,
              d = Ve(i, t),
              p = d.text.length;
            function f(r, n) {
              return Ur(e, et(t, r), "div", d, n);
            }
            function m(t, r, n) {
              var i = Yr(e, d, null, t),
                o = ("ltr" == r) == ("after" == n) ? "left" : "right",
                a =
                  "after" == n
                    ? i.begin
                    : i.end - (/\s/.test(d.text.charAt(i.end - 1)) ? 2 : 1);
              return f(a, o)[o];
            }
            var h = ue(d, i.direction);
            return (
              (function (e, t, r, n) {
                if (!e) return n(t, r, "ltr", 0);
                for (var i = !1, o = 0; o < e.length; ++o) {
                  var a = e[o];
                  ((a.from < r && a.to > t) || (t == r && a.to == t)) &&
                    (n(
                      Math.max(a.from, t),
                      Math.min(a.to, r),
                      1 == a.level ? "rtl" : "ltr",
                      o
                    ),
                    (i = !0));
                }
                i || n(t, r, "ltr");
              })(h, r || 0, null == n ? p : n, function (e, t, i, d) {
                var g = "ltr" == i,
                  v = f(e, g ? "left" : "right"),
                  b = f(t - 1, g ? "right" : "left"),
                  y = null == r && 0 == e,
                  x = null == n && t == p,
                  k = 0 == d,
                  w = !h || d == h.length - 1;
                if (b.top - v.top <= 3) {
                  var _ = (c ? y : x) && k,
                    C = (c ? x : y) && w,
                    S = _ ? l : (g ? v : b).left,
                    M = C ? s : (g ? b : v).right;
                  u(S, v.top, M - S, v.bottom);
                } else {
                  var L, T, z, A;
                  g
                    ? ((L = c && y && k ? l : v.left),
                      (T = c ? s : m(e, i, "before")),
                      (z = c ? l : m(t, i, "after")),
                      (A = c && x && w ? s : b.right))
                    : ((L = c ? m(e, i, "before") : l),
                      (T = !c && y && k ? s : v.right),
                      (z = !c && x && w ? l : b.left),
                      (A = c ? m(t, i, "after") : s)),
                    u(L, v.top, T - L, v.bottom),
                    v.bottom < b.top && u(l, v.bottom, null, b.top),
                    u(z, b.top, A - z, b.bottom);
                }
                (!o || vn(v, o) < 0) && (o = v),
                  vn(b, o) < 0 && (o = b),
                  (!a || vn(v, a) < 0) && (a = v),
                  vn(b, a) < 0 && (a = b);
              }),
              { start: o, end: a }
            );
          }
          var p = t.from(),
            f = t.to();
          if (p.line == f.line) d(p.line, p.ch, f.ch);
          else {
            var m = Ve(i, p.line),
              h = Ve(i, f.line),
              g = Pt(m) == Pt(h),
              v = d(p.line, p.ch, g ? m.text.length + 1 : null).end,
              b = d(f.line, g ? 0 : null, f.ch).start;
            g &&
              (v.top < b.top - 2
                ? (u(v.right, v.top, null, v.bottom),
                  u(l, b.top, b.left, b.bottom))
                : u(v.right, v.top, b.left - v.right, v.bottom)),
              v.bottom < b.top && u(l, v.bottom, null, b.top);
          }
          r.appendChild(o);
        }
        function yn(e) {
          if (e.state.focused) {
            var t = e.display;
            clearInterval(t.blinker);
            var r = !0;
            (t.cursorDiv.style.visibility = ""),
              e.options.cursorBlinkRate > 0
                ? (t.blinker = setInterval(function () {
                    return (t.cursorDiv.style.visibility = (r = !r)
                      ? ""
                      : "hidden");
                  }, e.options.cursorBlinkRate))
                : e.options.cursorBlinkRate < 0 &&
                  (t.cursorDiv.style.visibility = "hidden");
          }
        }
        function xn(e) {
          e.state.focused || (e.display.input.focus(), wn(e));
        }
        function kn(e) {
          (e.state.delayingBlurEvent = !0),
            setTimeout(function () {
              e.state.delayingBlurEvent &&
                ((e.state.delayingBlurEvent = !1), _n(e));
            }, 100);
        }
        function wn(e, t) {
          e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
            "nocursor" != e.options.readOnly &&
              (e.state.focused ||
                (he(e, "focus", e, t),
                (e.state.focused = !0),
                F(e.display.wrapper, "CodeMirror-focused"),
                e.curOp ||
                  e.display.selForContextMenu == e.doc.sel ||
                  (e.display.input.reset(),
                  s &&
                    setTimeout(function () {
                      return e.display.input.reset(!0);
                    }, 20)),
                e.display.input.receivedFocus()),
              yn(e));
        }
        function _n(e, t) {
          e.state.delayingBlurEvent ||
            (e.state.focused &&
              (he(e, "blur", e, t),
              (e.state.focused = !1),
              M(e.display.wrapper, "CodeMirror-focused")),
            clearInterval(e.display.blinker),
            setTimeout(function () {
              e.state.focused || (e.display.shift = !1);
            }, 150));
        }
        function Cn(e) {
          for (
            var t = e.display, r = t.lineDiv.offsetTop, n = 0;
            n < t.view.length;
            n++
          ) {
            var i = t.view[n],
              o = e.options.lineWrapping,
              s = void 0,
              c = 0;
            if (!i.hidden) {
              if (a && l < 8) {
                var u = i.node.offsetTop + i.node.offsetHeight;
                (s = u - r), (r = u);
              } else {
                var d = i.node.getBoundingClientRect();
                (s = d.bottom - d.top),
                  !o &&
                    i.text.firstChild &&
                    (c =
                      i.text.firstChild.getBoundingClientRect().right -
                      d.left -
                      1);
              }
              var p = i.line.height - s;
              if (
                (p > 0.005 || p < -0.005) &&
                (Xe(i.line, s), Sn(i.line), i.rest)
              )
                for (var f = 0; f < i.rest.length; f++) Sn(i.rest[f]);
              if (c > e.display.sizerWidth) {
                var m = Math.ceil(c / tn(e.display));
                m > e.display.maxLineLength &&
                  ((e.display.maxLineLength = m),
                  (e.display.maxLine = i.line),
                  (e.display.maxLineChanged = !0));
              }
            }
          }
        }
        function Sn(e) {
          if (e.widgets)
            for (var t = 0; t < e.widgets.length; ++t) {
              var r = e.widgets[t],
                n = r.node.parentNode;
              n && (r.height = n.offsetHeight);
            }
        }
        function Mn(e, t, r) {
          var n =
            r && null != r.top ? Math.max(0, r.top) : e.scroller.scrollTop;
          n = Math.floor(n - wr(e));
          var i = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight,
            o = Ye(t, n),
            a = Ye(t, i);
          if (r && r.ensure) {
            var l = r.ensure.from.line,
              s = r.ensure.to.line;
            l < o
              ? ((o = l), (a = Ye(t, Ht(Ve(t, l)) + e.wrapper.clientHeight)))
              : Math.min(s, t.lastLine()) >= a &&
                ((o = Ye(t, Ht(Ve(t, s)) - e.wrapper.clientHeight)), (a = s));
          }
          return { from: o, to: Math.max(a, o + 1) };
        }
        function Ln(e, t) {
          var r = e.display,
            n = en(e.display);
          t.top < 0 && (t.top = 0);
          var i =
              e.curOp && null != e.curOp.scrollTop
                ? e.curOp.scrollTop
                : r.scroller.scrollTop,
            o = Lr(e),
            a = {};
          t.bottom - t.top > o && (t.bottom = t.top + o);
          var l = e.doc.height + _r(r),
            s = t.top < n,
            c = t.bottom > l - n;
          if (t.top < i) a.scrollTop = s ? 0 : t.top;
          else if (t.bottom > i + o) {
            var u = Math.min(t.top, (c ? l : t.bottom) - o);
            u != i && (a.scrollTop = u);
          }
          var d =
              e.curOp && null != e.curOp.scrollLeft
                ? e.curOp.scrollLeft
                : r.scroller.scrollLeft,
            p = Mr(e) - (e.options.fixedGutter ? r.gutters.offsetWidth : 0),
            f = t.right - t.left > p;
          return (
            f && (t.right = t.left + p),
            t.left < 10
              ? (a.scrollLeft = 0)
              : t.left < d
              ? (a.scrollLeft = Math.max(0, t.left - (f ? 0 : 10)))
              : t.right > p + d - 3 &&
                (a.scrollLeft = t.right + (f ? 0 : 10) - p),
            a
          );
        }
        function Tn(e, t) {
          null != t &&
            (Dn(e),
            (e.curOp.scrollTop =
              (null == e.curOp.scrollTop
                ? e.doc.scrollTop
                : e.curOp.scrollTop) + t));
        }
        function zn(e) {
          Dn(e);
          var t = e.getCursor();
          e.curOp.scrollToPos = {
            from: t,
            to: t,
            margin: e.options.cursorScrollMargin
          };
        }
        function An(e, t, r) {
          (null == t && null == r) || Dn(e),
            null != t && (e.curOp.scrollLeft = t),
            null != r && (e.curOp.scrollTop = r);
        }
        function Dn(e) {
          var t = e.curOp.scrollToPos;
          if (t) {
            e.curOp.scrollToPos = null;
            var r = Kr(e, t.from),
              n = Kr(e, t.to);
            En(e, r, n, t.margin);
          }
        }
        function En(e, t, r, n) {
          var i = Ln(e, {
            left: Math.min(t.left, r.left),
            top: Math.min(t.top, r.top) - n,
            right: Math.max(t.right, r.right),
            bottom: Math.max(t.bottom, r.bottom) + n
          });
          An(e, i.scrollLeft, i.scrollTop);
        }
        function Fn(e, t) {
          Math.abs(e.doc.scrollTop - t) < 2 ||
            (r || oi(e, { top: t }), Nn(e, t, !0), r && oi(e), ei(e, 100));
        }
        function Nn(e, t, r) {
          (t = Math.min(
            e.display.scroller.scrollHeight - e.display.scroller.clientHeight,
            t
          )),
            (e.display.scroller.scrollTop != t || r) &&
              ((e.doc.scrollTop = t),
              e.display.scrollbars.setScrollTop(t),
              e.display.scroller.scrollTop != t &&
                (e.display.scroller.scrollTop = t));
        }
        function On(e, t, r, n) {
          (t = Math.min(
            t,
            e.display.scroller.scrollWidth - e.display.scroller.clientWidth
          )),
            ((r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) &&
              !n) ||
              ((e.doc.scrollLeft = t),
              si(e),
              e.display.scroller.scrollLeft != t &&
                (e.display.scroller.scrollLeft = t),
              e.display.scrollbars.setScrollLeft(t));
        }
        function qn(e) {
          var t = e.display,
            r = t.gutters.offsetWidth,
            n = Math.round(e.doc.height + _r(e.display));
          return {
            clientHeight: t.scroller.clientHeight,
            viewHeight: t.wrapper.clientHeight,
            scrollWidth: t.scroller.scrollWidth,
            clientWidth: t.scroller.clientWidth,
            viewWidth: t.wrapper.clientWidth,
            barLeft: e.options.fixedGutter ? r : 0,
            docHeight: n,
            scrollHeight: n + Sr(e) + t.barHeight,
            nativeBarWidth: t.nativeBarWidth,
            gutterWidth: r
          };
        }
        var In = function (e, t, r) {
          this.cm = r;
          var n = (this.vert = z(
              "div",
              [z("div", null, null, "min-width: 1px")],
              "CodeMirror-vscrollbar"
            )),
            i = (this.horiz = z(
              "div",
              [z("div", null, null, "height: 100%; min-height: 1px")],
              "CodeMirror-hscrollbar"
            ));
          (n.tabIndex = i.tabIndex = -1),
            e(n),
            e(i),
            pe(n, "scroll", function () {
              n.clientHeight && t(n.scrollTop, "vertical");
            }),
            pe(i, "scroll", function () {
              i.clientWidth && t(i.scrollLeft, "horizontal");
            }),
            (this.checkedZeroWidth = !1),
            a &&
              l < 8 &&
              (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
        };
        (In.prototype.update = function (e) {
          var t = e.scrollWidth > e.clientWidth + 1,
            r = e.scrollHeight > e.clientHeight + 1,
            n = e.nativeBarWidth;
          if (r) {
            (this.vert.style.display = "block"),
              (this.vert.style.bottom = t ? n + "px" : "0");
            var i = e.viewHeight - (t ? n : 0);
            this.vert.firstChild.style.height =
              Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
          } else
            (this.vert.style.display = ""),
              (this.vert.firstChild.style.height = "0");
          if (t) {
            (this.horiz.style.display = "block"),
              (this.horiz.style.right = r ? n + "px" : "0"),
              (this.horiz.style.left = e.barLeft + "px");
            var o = e.viewWidth - e.barLeft - (r ? n : 0);
            this.horiz.firstChild.style.width =
              Math.max(0, e.scrollWidth - e.clientWidth + o) + "px";
          } else
            (this.horiz.style.display = ""),
              (this.horiz.firstChild.style.width = "0");
          return (
            !this.checkedZeroWidth &&
              e.clientHeight > 0 &&
              (0 == n && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
            { right: r ? n : 0, bottom: t ? n : 0 }
          );
        }),
          (In.prototype.setScrollLeft = function (e) {
            this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
              this.disableHoriz &&
                this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
          }),
          (In.prototype.setScrollTop = function (e) {
            this.vert.scrollTop != e && (this.vert.scrollTop = e),
              this.disableVert &&
                this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
          }),
          (In.prototype.zeroWidthHack = function () {
            var e = b && !f ? "12px" : "18px";
            (this.horiz.style.height = this.vert.style.width = e),
              (this.horiz.style.pointerEvents = this.vert.style.pointerEvents =
                "none"),
              (this.disableHoriz = new j()),
              (this.disableVert = new j());
          }),
          (In.prototype.enableZeroWidthBar = function (e, t, r) {
            (e.style.pointerEvents = "auto"),
              t.set(1e3, function n() {
                var i = e.getBoundingClientRect(),
                  o =
                    "vert" == r
                      ? document.elementFromPoint(
                          i.right - 1,
                          (i.top + i.bottom) / 2
                        )
                      : document.elementFromPoint(
                          (i.right + i.left) / 2,
                          i.bottom - 1
                        );
                o != e ? (e.style.pointerEvents = "none") : t.set(1e3, n);
              });
          }),
          (In.prototype.clear = function () {
            var e = this.horiz.parentNode;
            e.removeChild(this.horiz), e.removeChild(this.vert);
          });
        var Pn = function () {};
        function jn(e, t) {
          t || (t = qn(e));
          var r = e.display.barWidth,
            n = e.display.barHeight;
          Bn(e, t);
          for (
            var i = 0;
            (i < 4 && r != e.display.barWidth) || n != e.display.barHeight;
            i++
          )
            r != e.display.barWidth && e.options.lineWrapping && Cn(e),
              Bn(e, qn(e)),
              (r = e.display.barWidth),
              (n = e.display.barHeight);
        }
        function Bn(e, t) {
          var r = e.display,
            n = r.scrollbars.update(t);
          (r.sizer.style.paddingRight = (r.barWidth = n.right) + "px"),
            (r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + "px"),
            (r.heightForcer.style.borderBottom =
              n.bottom + "px solid transparent"),
            n.right && n.bottom
              ? ((r.scrollbarFiller.style.display = "block"),
                (r.scrollbarFiller.style.height = n.bottom + "px"),
                (r.scrollbarFiller.style.width = n.right + "px"))
              : (r.scrollbarFiller.style.display = ""),
            n.bottom &&
            e.options.coverGutterNextToScrollbar &&
            e.options.fixedGutter
              ? ((r.gutterFiller.style.display = "block"),
                (r.gutterFiller.style.height = n.bottom + "px"),
                (r.gutterFiller.style.width = t.gutterWidth + "px"))
              : (r.gutterFiller.style.display = "");
        }
        (Pn.prototype.update = function () {
          return { bottom: 0, right: 0 };
        }),
          (Pn.prototype.setScrollLeft = function () {}),
          (Pn.prototype.setScrollTop = function () {}),
          (Pn.prototype.clear = function () {});
        var Wn = { native: In, null: Pn };
        function Rn(e) {
          e.display.scrollbars &&
            (e.display.scrollbars.clear(),
            e.display.scrollbars.addClass &&
              M(e.display.wrapper, e.display.scrollbars.addClass)),
            (e.display.scrollbars = new Wn[e.options.scrollbarStyle](
              function (t) {
                e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                  pe(t, "mousedown", function () {
                    e.state.focused &&
                      setTimeout(function () {
                        return e.display.input.focus();
                      }, 0);
                  }),
                  t.setAttribute("cm-not-content", "true");
              },
              function (t, r) {
                "horizontal" == r ? On(e, t) : Fn(e, t);
              },
              e
            )),
            e.display.scrollbars.addClass &&
              F(e.display.wrapper, e.display.scrollbars.addClass);
        }
        var Hn = 0;
        function $n(e) {
          var t;
          (e.curOp = {
            cm: e,
            viewChanged: !1,
            startHeight: e.doc.height,
            forceUpdate: !1,
            updateInput: 0,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: !1,
            id: ++Hn
          }),
            (t = e.curOp),
            or
              ? or.ops.push(t)
              : (t.ownsGroup = or = { ops: [t], delayedCallbacks: [] });
        }
        function Un(e) {
          var t = e.curOp;
          t &&
            (function (e, t) {
              var r = e.ownsGroup;
              if (r)
                try {
                  !(function (e) {
                    var t = e.delayedCallbacks,
                      r = 0;
                    do {
                      for (; r < t.length; r++) t[r].call(null);
                      for (var n = 0; n < e.ops.length; n++) {
                        var i = e.ops[n];
                        if (i.cursorActivityHandlers)
                          for (
                            ;
                            i.cursorActivityCalled <
                            i.cursorActivityHandlers.length;

                          )
                            i.cursorActivityHandlers[
                              i.cursorActivityCalled++
                            ].call(null, i.cm);
                      }
                    } while (r < t.length);
                  })(r);
                } finally {
                  (or = null), t(r);
                }
            })(t, function (e) {
              for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
              !(function (e) {
                for (var t = e.ops, r = 0; r < t.length; r++) Vn(t[r]);
                for (var n = 0; n < t.length; n++)
                  (i = t[n]).updatedDisplay =
                    i.mustUpdate && ni(i.cm, i.update);
                for (var i, o = 0; o < t.length; o++) Kn(t[o]);
                for (var a = 0; a < t.length; a++) Gn(t[a]);
                for (var l = 0; l < t.length; l++) Xn(t[l]);
              })(e);
            });
        }
        function Vn(e) {
          var t = e.cm,
            r = t.display;
          !(function (e) {
            var t = e.display;
            !t.scrollbarsClipped &&
              t.scroller.offsetWidth &&
              ((t.nativeBarWidth =
                t.scroller.offsetWidth - t.scroller.clientWidth),
              (t.heightForcer.style.height = Sr(e) + "px"),
              (t.sizer.style.marginBottom = -t.nativeBarWidth + "px"),
              (t.sizer.style.borderRightWidth = Sr(e) + "px"),
              (t.scrollbarsClipped = !0));
          })(t),
            e.updateMaxLine && Ut(t),
            (e.mustUpdate =
              e.viewChanged ||
              e.forceUpdate ||
              null != e.scrollTop ||
              (e.scrollToPos &&
                (e.scrollToPos.from.line < r.viewFrom ||
                  e.scrollToPos.to.line >= r.viewTo)) ||
              (r.maxLineChanged && t.options.lineWrapping)),
            (e.update =
              e.mustUpdate &&
              new ri(
                t,
                e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos },
                e.forceUpdate
              ));
        }
        function Kn(e) {
          var t = e.cm,
            r = t.display;
          e.updatedDisplay && Cn(t),
            (e.barMeasure = qn(t)),
            r.maxLineChanged &&
              !t.options.lineWrapping &&
              ((e.adjustWidthTo =
                zr(t, r.maxLine, r.maxLine.text.length).left + 3),
              (t.display.sizerWidth = e.adjustWidthTo),
              (e.barMeasure.scrollWidth = Math.max(
                r.scroller.clientWidth,
                r.sizer.offsetLeft +
                  e.adjustWidthTo +
                  Sr(t) +
                  t.display.barWidth
              )),
              (e.maxScrollLeft = Math.max(
                0,
                r.sizer.offsetLeft + e.adjustWidthTo - Mr(t)
              ))),
            (e.updatedDisplay || e.selectionChanged) &&
              (e.preparedSelection = r.input.prepareSelection());
        }
        function Gn(e) {
          var t = e.cm;
          null != e.adjustWidthTo &&
            ((t.display.sizer.style.minWidth = e.adjustWidthTo + "px"),
            e.maxScrollLeft < t.doc.scrollLeft &&
              On(
                t,
                Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft),
                !0
              ),
            (t.display.maxLineChanged = !1));
          var r = e.focus && e.focus == E();
          e.preparedSelection &&
            t.display.input.showSelection(e.preparedSelection, r),
            (e.updatedDisplay || e.startHeight != t.doc.height) &&
              jn(t, e.barMeasure),
            e.updatedDisplay && li(t, e.barMeasure),
            e.selectionChanged && yn(t),
            t.state.focused && e.updateInput && t.display.input.reset(e.typing),
            r && xn(e.cm);
        }
        function Xn(e) {
          var t = e.cm,
            r = t.display,
            n = t.doc;
          if (
            (e.updatedDisplay && ii(t, e.update),
            null == r.wheelStartX ||
              (null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos) ||
              (r.wheelStartX = r.wheelStartY = null),
            null != e.scrollTop && Nn(t, e.scrollTop, e.forceScroll),
            null != e.scrollLeft && On(t, e.scrollLeft, !0, !0),
            e.scrollToPos)
          ) {
            var i = (function (e, t, r, n) {
              var i;
              null == n && (n = 0),
                e.options.lineWrapping ||
                  t != r ||
                  ((t = t.ch
                    ? et(
                        t.line,
                        "before" == t.sticky ? t.ch - 1 : t.ch,
                        "after"
                      )
                    : t),
                  (r =
                    "before" == t.sticky ? et(t.line, t.ch + 1, "before") : t));
              for (var o = 0; o < 5; o++) {
                var a = !1,
                  l = Vr(e, t),
                  s = r && r != t ? Vr(e, r) : l;
                i = {
                  left: Math.min(l.left, s.left),
                  top: Math.min(l.top, s.top) - n,
                  right: Math.max(l.left, s.left),
                  bottom: Math.max(l.bottom, s.bottom) + n
                };
                var c = Ln(e, i),
                  u = e.doc.scrollTop,
                  d = e.doc.scrollLeft;
                if (
                  (null != c.scrollTop &&
                    (Fn(e, c.scrollTop),
                    Math.abs(e.doc.scrollTop - u) > 1 && (a = !0)),
                  null != c.scrollLeft &&
                    (On(e, c.scrollLeft),
                    Math.abs(e.doc.scrollLeft - d) > 1 && (a = !0)),
                  !a)
                )
                  break;
              }
              return i;
            })(
              t,
              lt(n, e.scrollToPos.from),
              lt(n, e.scrollToPos.to),
              e.scrollToPos.margin
            );
            !(function (e, t) {
              if (!ge(e, "scrollCursorIntoView")) {
                var r = e.display,
                  n = r.sizer.getBoundingClientRect(),
                  i = null;
                if (
                  (t.top + n.top < 0
                    ? (i = !0)
                    : t.bottom + n.top >
                        (window.innerHeight ||
                          document.documentElement.clientHeight) && (i = !1),
                  null != i && !m)
                ) {
                  var o = z(
                    "div",
                    "​",
                    null,
                    "position: absolute;\n                         top: " +
                      (t.top - r.viewOffset - wr(e.display)) +
                      "px;\n                         height: " +
                      (t.bottom - t.top + Sr(e) + r.barHeight) +
                      "px;\n                         left: " +
                      t.left +
                      "px; width: " +
                      Math.max(2, t.right - t.left) +
                      "px;"
                  );
                  e.display.lineSpace.appendChild(o),
                    o.scrollIntoView(i),
                    e.display.lineSpace.removeChild(o);
                }
              }
            })(t, i);
          }
          var o = e.maybeHiddenMarkers,
            a = e.maybeUnhiddenMarkers;
          if (o)
            for (var l = 0; l < o.length; ++l)
              o[l].lines.length || he(o[l], "hide");
          if (a)
            for (var s = 0; s < a.length; ++s)
              a[s].lines.length && he(a[s], "unhide");
          r.wrapper.offsetHeight &&
            (n.scrollTop = t.display.scroller.scrollTop),
            e.changeObjs && he(t, "changes", t, e.changeObjs),
            e.update && e.update.finish();
        }
        function Zn(e, t) {
          if (e.curOp) return t();
          $n(e);
          try {
            return t();
          } finally {
            Un(e);
          }
        }
        function Yn(e, t) {
          return function () {
            if (e.curOp) return t.apply(e, arguments);
            $n(e);
            try {
              return t.apply(e, arguments);
            } finally {
              Un(e);
            }
          };
        }
        function Qn(e) {
          return function () {
            if (this.curOp) return e.apply(this, arguments);
            $n(this);
            try {
              return e.apply(this, arguments);
            } finally {
              Un(this);
            }
          };
        }
        function Jn(e) {
          return function () {
            var t = this.cm;
            if (!t || t.curOp) return e.apply(this, arguments);
            $n(t);
            try {
              return e.apply(this, arguments);
            } finally {
              Un(t);
            }
          };
        }
        function ei(e, t) {
          e.doc.highlightFrontier < e.display.viewTo &&
            e.state.highlight.set(t, q(ti, e));
        }
        function ti(e) {
          var t = e.doc;
          if (!(t.highlightFrontier >= e.display.viewTo)) {
            var r = +new Date() + e.options.workTime,
              n = ft(e, t.highlightFrontier),
              i = [];
            t.iter(
              n.line,
              Math.min(t.first + t.size, e.display.viewTo + 500),
              function (o) {
                if (n.line >= e.display.viewFrom) {
                  var a = o.styles,
                    l =
                      o.text.length > e.options.maxHighlightLength
                        ? Re(t.mode, n.state)
                        : null,
                    s = dt(e, o, n, !0);
                  l && (n.state = l), (o.styles = s.styles);
                  var c = o.styleClasses,
                    u = s.classes;
                  u ? (o.styleClasses = u) : c && (o.styleClasses = null);
                  for (
                    var d =
                        !a ||
                        a.length != o.styles.length ||
                        (c != u &&
                          (!c ||
                            !u ||
                            c.bgClass != u.bgClass ||
                            c.textClass != u.textClass)),
                      p = 0;
                    !d && p < a.length;
                    ++p
                  )
                    d = a[p] != o.styles[p];
                  d && i.push(n.line), (o.stateAfter = n.save()), n.nextLine();
                } else
                  o.text.length <= e.options.maxHighlightLength &&
                    mt(e, o.text, n),
                    (o.stateAfter = n.line % 5 == 0 ? n.save() : null),
                    n.nextLine();
                if (+new Date() > r) return ei(e, e.options.workDelay), !0;
              }
            ),
              (t.highlightFrontier = n.line),
              (t.modeFrontier = Math.max(t.modeFrontier, n.line)),
              i.length &&
                Zn(e, function () {
                  for (var t = 0; t < i.length; t++) un(e, i[t], "text");
                });
          }
        }
        var ri = function (e, t, r) {
          var n = e.display;
          (this.viewport = t),
            (this.visible = Mn(n, e.doc, t)),
            (this.editorIsHidden = !n.wrapper.offsetWidth),
            (this.wrapperHeight = n.wrapper.clientHeight),
            (this.wrapperWidth = n.wrapper.clientWidth),
            (this.oldDisplayWidth = Mr(e)),
            (this.force = r),
            (this.dims = rn(e)),
            (this.events = []);
        };
        function ni(e, t) {
          var r = e.display,
            n = e.doc;
          if (t.editorIsHidden) return dn(e), !1;
          if (
            !t.force &&
            t.visible.from >= r.viewFrom &&
            t.visible.to <= r.viewTo &&
            (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) &&
            r.renderedView == r.view &&
            0 == fn(e)
          )
            return !1;
          ci(e) && (dn(e), (t.dims = rn(e)));
          var i = n.first + n.size,
            o = Math.max(t.visible.from - e.options.viewportMargin, n.first),
            a = Math.min(i, t.visible.to + e.options.viewportMargin);
          r.viewFrom < o &&
            o - r.viewFrom < 20 &&
            (o = Math.max(n.first, r.viewFrom)),
            r.viewTo > a && r.viewTo - a < 20 && (a = Math.min(i, r.viewTo)),
            wt && ((o = jt(e.doc, o)), (a = Bt(e.doc, a)));
          var l =
            o != r.viewFrom ||
            a != r.viewTo ||
            r.lastWrapHeight != t.wrapperHeight ||
            r.lastWrapWidth != t.wrapperWidth;
          !(function (e, t, r) {
            var n = e.display;
            0 == n.view.length || t >= n.viewTo || r <= n.viewFrom
              ? ((n.view = ir(e, t, r)), (n.viewFrom = t))
              : (n.viewFrom > t
                  ? (n.view = ir(e, t, n.viewFrom).concat(n.view))
                  : n.viewFrom < t && (n.view = n.view.slice(sn(e, t))),
                (n.viewFrom = t),
                n.viewTo < r
                  ? (n.view = n.view.concat(ir(e, n.viewTo, r)))
                  : n.viewTo > r && (n.view = n.view.slice(0, sn(e, r)))),
              (n.viewTo = r);
          })(e, o, a),
            (r.viewOffset = Ht(Ve(e.doc, r.viewFrom))),
            (e.display.mover.style.top = r.viewOffset + "px");
          var c = fn(e);
          if (
            !l &&
            0 == c &&
            !t.force &&
            r.renderedView == r.view &&
            (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)
          )
            return !1;
          var u = (function (e) {
            if (e.hasFocus()) return null;
            var t = E();
            if (!t || !D(e.display.lineDiv, t)) return null;
            var r = { activeElt: t };
            if (window.getSelection) {
              var n = window.getSelection();
              n.anchorNode &&
                n.extend &&
                D(e.display.lineDiv, n.anchorNode) &&
                ((r.anchorNode = n.anchorNode),
                (r.anchorOffset = n.anchorOffset),
                (r.focusNode = n.focusNode),
                (r.focusOffset = n.focusOffset));
            }
            return r;
          })(e);
          return (
            c > 4 && (r.lineDiv.style.display = "none"),
            (function (e, t, r) {
              var n = e.display,
                i = e.options.lineNumbers,
                o = n.lineDiv,
                a = o.firstChild;
              function l(t) {
                var r = t.nextSibling;
                return (
                  s && b && e.display.currentWheelTarget == t
                    ? (t.style.display = "none")
                    : t.parentNode.removeChild(t),
                  r
                );
              }
              for (var c = n.view, u = n.viewFrom, d = 0; d < c.length; d++) {
                var p = c[d];
                if (p.hidden);
                else if (p.node && p.node.parentNode == o) {
                  for (; a != p.node; ) a = l(a);
                  var f = i && null != t && t <= u && p.lineNumber;
                  p.changes &&
                    (B(p.changes, "gutter") > -1 && (f = !1), cr(e, p, u, r)),
                    f &&
                      (L(p.lineNumber),
                      p.lineNumber.appendChild(
                        document.createTextNode(Je(e.options, u))
                      )),
                    (a = p.node.nextSibling);
                } else {
                  var m = gr(e, p, u, r);
                  o.insertBefore(m, a);
                }
                u += p.size;
              }
              for (; a; ) a = l(a);
            })(e, r.updateLineNumbers, t.dims),
            c > 4 && (r.lineDiv.style.display = ""),
            (r.renderedView = r.view),
            (function (e) {
              if (
                e &&
                e.activeElt &&
                e.activeElt != E() &&
                (e.activeElt.focus(),
                e.anchorNode &&
                  D(document.body, e.anchorNode) &&
                  D(document.body, e.focusNode))
              ) {
                var t = window.getSelection(),
                  r = document.createRange();
                r.setEnd(e.anchorNode, e.anchorOffset),
                  r.collapse(!1),
                  t.removeAllRanges(),
                  t.addRange(r),
                  t.extend(e.focusNode, e.focusOffset);
              }
            })(u),
            L(r.cursorDiv),
            L(r.selectionDiv),
            (r.gutters.style.height = r.sizer.style.minHeight = 0),
            l &&
              ((r.lastWrapHeight = t.wrapperHeight),
              (r.lastWrapWidth = t.wrapperWidth),
              ei(e, 400)),
            (r.updateLineNumbers = null),
            !0
          );
        }
        function ii(e, t) {
          for (
            var r = t.viewport, n = !0;
            ((n && e.options.lineWrapping && t.oldDisplayWidth != Mr(e)) ||
              (r &&
                null != r.top &&
                (r = {
                  top: Math.min(e.doc.height + _r(e.display) - Lr(e), r.top)
                }),
              (t.visible = Mn(e.display, e.doc, r)),
              !(
                t.visible.from >= e.display.viewFrom &&
                t.visible.to <= e.display.viewTo
              ))) &&
            ni(e, t);
            n = !1
          ) {
            Cn(e);
            var i = qn(e);
            mn(e), jn(e, i), li(e, i), (t.force = !1);
          }
          t.signal(e, "update", e),
            (e.display.viewFrom == e.display.reportedViewFrom &&
              e.display.viewTo == e.display.reportedViewTo) ||
              (t.signal(
                e,
                "viewportChange",
                e,
                e.display.viewFrom,
                e.display.viewTo
              ),
              (e.display.reportedViewFrom = e.display.viewFrom),
              (e.display.reportedViewTo = e.display.viewTo));
        }
        function oi(e, t) {
          var r = new ri(e, t);
          if (ni(e, r)) {
            Cn(e), ii(e, r);
            var n = qn(e);
            mn(e), jn(e, n), li(e, n), r.finish();
          }
        }
        function ai(e) {
          var t = e.gutters.offsetWidth;
          e.sizer.style.marginLeft = t + "px";
        }
        function li(e, t) {
          (e.display.sizer.style.minHeight = t.docHeight + "px"),
            (e.display.heightForcer.style.top = t.docHeight + "px"),
            (e.display.gutters.style.height =
              t.docHeight + e.display.barHeight + Sr(e) + "px");
        }
        function si(e) {
          var t = e.display,
            r = t.view;
          if (
            t.alignWidgets ||
            (t.gutters.firstChild && e.options.fixedGutter)
          ) {
            for (
              var n = nn(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
                i = t.gutters.offsetWidth,
                o = n + "px",
                a = 0;
              a < r.length;
              a++
            )
              if (!r[a].hidden) {
                e.options.fixedGutter &&
                  (r[a].gutter && (r[a].gutter.style.left = o),
                  r[a].gutterBackground &&
                    (r[a].gutterBackground.style.left = o));
                var l = r[a].alignable;
                if (l) for (var s = 0; s < l.length; s++) l[s].style.left = o;
              }
            e.options.fixedGutter && (t.gutters.style.left = n + i + "px");
          }
        }
        function ci(e) {
          if (!e.options.lineNumbers) return !1;
          var t = e.doc,
            r = Je(e.options, t.first + t.size - 1),
            n = e.display;
          if (r.length != n.lineNumChars) {
            var i = n.measure.appendChild(
                z(
                  "div",
                  [z("div", r)],
                  "CodeMirror-linenumber CodeMirror-gutter-elt"
                )
              ),
              o = i.firstChild.offsetWidth,
              a = i.offsetWidth - o;
            return (
              (n.lineGutter.style.width = ""),
              (n.lineNumInnerWidth =
                Math.max(o, n.lineGutter.offsetWidth - a) + 1),
              (n.lineNumWidth = n.lineNumInnerWidth + a),
              (n.lineNumChars = n.lineNumInnerWidth ? r.length : -1),
              (n.lineGutter.style.width = n.lineNumWidth + "px"),
              ai(e.display),
              !0
            );
          }
          return !1;
        }
        function ui(e, t) {
          for (var r = [], n = !1, i = 0; i < e.length; i++) {
            var o = e[i],
              a = null;
            if (
              ("string" != typeof o && ((a = o.style), (o = o.className)),
              "CodeMirror-linenumbers" == o)
            ) {
              if (!t) continue;
              n = !0;
            }
            r.push({ className: o, style: a });
          }
          return (
            t &&
              !n &&
              r.push({ className: "CodeMirror-linenumbers", style: null }),
            r
          );
        }
        function di(e) {
          var t = e.gutters,
            r = e.gutterSpecs;
          L(t), (e.lineGutter = null);
          for (var n = 0; n < r.length; ++n) {
            var i = r[n],
              o = i.className,
              a = i.style,
              l = t.appendChild(z("div", null, "CodeMirror-gutter " + o));
            a && (l.style.cssText = a),
              "CodeMirror-linenumbers" == o &&
                ((e.lineGutter = l),
                (l.style.width = (e.lineNumWidth || 1) + "px"));
          }
          (t.style.display = r.length ? "" : "none"), ai(e);
        }
        function pi(e) {
          di(e.display), cn(e), si(e);
        }
        function fi(e, t, n, i) {
          var o = this;
          (this.input = n),
            (o.scrollbarFiller = z("div", null, "CodeMirror-scrollbar-filler")),
            o.scrollbarFiller.setAttribute("cm-not-content", "true"),
            (o.gutterFiller = z("div", null, "CodeMirror-gutter-filler")),
            o.gutterFiller.setAttribute("cm-not-content", "true"),
            (o.lineDiv = A("div", null, "CodeMirror-code")),
            (o.selectionDiv = z(
              "div",
              null,
              null,
              "position: relative; z-index: 1"
            )),
            (o.cursorDiv = z("div", null, "CodeMirror-cursors")),
            (o.measure = z("div", null, "CodeMirror-measure")),
            (o.lineMeasure = z("div", null, "CodeMirror-measure")),
            (o.lineSpace = A(
              "div",
              [
                o.measure,
                o.lineMeasure,
                o.selectionDiv,
                o.cursorDiv,
                o.lineDiv
              ],
              null,
              "position: relative; outline: none"
            ));
          var c = A("div", [o.lineSpace], "CodeMirror-lines");
          (o.mover = z("div", [c], null, "position: relative")),
            (o.sizer = z("div", [o.mover], "CodeMirror-sizer")),
            (o.sizerWidth = null),
            (o.heightForcer = z(
              "div",
              null,
              null,
              "position: absolute; height: " + W + "px; width: 1px;"
            )),
            (o.gutters = z("div", null, "CodeMirror-gutters")),
            (o.lineGutter = null),
            (o.scroller = z(
              "div",
              [o.sizer, o.heightForcer, o.gutters],
              "CodeMirror-scroll"
            )),
            o.scroller.setAttribute("tabIndex", "-1"),
            (o.wrapper = z(
              "div",
              [o.scrollbarFiller, o.gutterFiller, o.scroller],
              "CodeMirror"
            )),
            a &&
              l < 8 &&
              ((o.gutters.style.zIndex = -1),
              (o.scroller.style.paddingRight = 0)),
            s || (r && v) || (o.scroller.draggable = !0),
            e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
            (o.viewFrom = o.viewTo = t.first),
            (o.reportedViewFrom = o.reportedViewTo = t.first),
            (o.view = []),
            (o.renderedView = null),
            (o.externalMeasured = null),
            (o.viewOffset = 0),
            (o.lastWrapHeight = o.lastWrapWidth = 0),
            (o.updateLineNumbers = null),
            (o.nativeBarWidth = o.barHeight = o.barWidth = 0),
            (o.scrollbarsClipped = !1),
            (o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null),
            (o.alignWidgets = !1),
            (o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null),
            (o.maxLine = null),
            (o.maxLineLength = 0),
            (o.maxLineChanged = !1),
            (o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null),
            (o.shift = !1),
            (o.selForContextMenu = null),
            (o.activeTouch = null),
            (o.gutterSpecs = ui(i.gutters, i.lineNumbers)),
            di(o),
            n.init(o);
        }
        (ri.prototype.signal = function (e, t) {
          be(e, t) && this.events.push(arguments);
        }),
          (ri.prototype.finish = function () {
            for (var e = 0; e < this.events.length; e++)
              he.apply(null, this.events[e]);
          });
        var mi = 0,
          hi = null;
        function gi(e) {
          var t = e.wheelDeltaX,
            r = e.wheelDeltaY;
          return (
            null == t &&
              e.detail &&
              e.axis == e.HORIZONTAL_AXIS &&
              (t = e.detail),
            null == r && e.detail && e.axis == e.VERTICAL_AXIS
              ? (r = e.detail)
              : null == r && (r = e.wheelDelta),
            { x: t, y: r }
          );
        }
        function vi(e) {
          var t = gi(e);
          return (t.x *= hi), (t.y *= hi), t;
        }
        function bi(e, t) {
          var n = gi(t),
            i = n.x,
            o = n.y,
            a = e.display,
            l = a.scroller,
            c = l.scrollWidth > l.clientWidth,
            u = l.scrollHeight > l.clientHeight;
          if ((i && c) || (o && u)) {
            if (o && b && s)
              e: for (var p = t.target, f = a.view; p != l; p = p.parentNode)
                for (var m = 0; m < f.length; m++)
                  if (f[m].node == p) {
                    e.display.currentWheelTarget = p;
                    break e;
                  }
            if (i && !r && !d && null != hi)
              return (
                o && u && Fn(e, Math.max(0, l.scrollTop + o * hi)),
                On(e, Math.max(0, l.scrollLeft + i * hi)),
                (!o || (o && u)) && xe(t),
                void (a.wheelStartX = null)
              );
            if (o && null != hi) {
              var h = o * hi,
                g = e.doc.scrollTop,
                v = g + a.wrapper.clientHeight;
              h < 0
                ? (g = Math.max(0, g + h - 50))
                : (v = Math.min(e.doc.height, v + h + 50)),
                oi(e, { top: g, bottom: v });
            }
            mi < 20 &&
              (null == a.wheelStartX
                ? ((a.wheelStartX = l.scrollLeft),
                  (a.wheelStartY = l.scrollTop),
                  (a.wheelDX = i),
                  (a.wheelDY = o),
                  setTimeout(function () {
                    if (null != a.wheelStartX) {
                      var e = l.scrollLeft - a.wheelStartX,
                        t = l.scrollTop - a.wheelStartY,
                        r =
                          (t && a.wheelDY && t / a.wheelDY) ||
                          (e && a.wheelDX && e / a.wheelDX);
                      (a.wheelStartX = a.wheelStartY = null),
                        r && ((hi = (hi * mi + r) / (mi + 1)), ++mi);
                    }
                  }, 200))
                : ((a.wheelDX += i), (a.wheelDY += o)));
          }
        }
        a ? (hi = -0.53) : r ? (hi = 15) : u ? (hi = -0.7) : p && (hi = -1 / 3);
        var yi = function (e, t) {
          (this.ranges = e), (this.primIndex = t);
        };
        (yi.prototype.primary = function () {
          return this.ranges[this.primIndex];
        }),
          (yi.prototype.equals = function (e) {
            if (e == this) return !0;
            if (
              e.primIndex != this.primIndex ||
              e.ranges.length != this.ranges.length
            )
              return !1;
            for (var t = 0; t < this.ranges.length; t++) {
              var r = this.ranges[t],
                n = e.ranges[t];
              if (!rt(r.anchor, n.anchor) || !rt(r.head, n.head)) return !1;
            }
            return !0;
          }),
          (yi.prototype.deepCopy = function () {
            for (var e = [], t = 0; t < this.ranges.length; t++)
              e[t] = new xi(nt(this.ranges[t].anchor), nt(this.ranges[t].head));
            return new yi(e, this.primIndex);
          }),
          (yi.prototype.somethingSelected = function () {
            for (var e = 0; e < this.ranges.length; e++)
              if (!this.ranges[e].empty()) return !0;
            return !1;
          }),
          (yi.prototype.contains = function (e, t) {
            t || (t = e);
            for (var r = 0; r < this.ranges.length; r++) {
              var n = this.ranges[r];
              if (tt(t, n.from()) >= 0 && tt(e, n.to()) <= 0) return r;
            }
            return -1;
          });
        var xi = function (e, t) {
          (this.anchor = e), (this.head = t);
        };
        function ki(e, t, r) {
          var n = e && e.options.selectionsMayTouch,
            i = t[r];
          t.sort(function (e, t) {
            return tt(e.from(), t.from());
          }),
            (r = B(t, i));
          for (var o = 1; o < t.length; o++) {
            var a = t[o],
              l = t[o - 1],
              s = tt(l.to(), a.from());
            if (n && !a.empty() ? s > 0 : s >= 0) {
              var c = ot(l.from(), a.from()),
                u = it(l.to(), a.to()),
                d = l.empty() ? a.from() == a.head : l.from() == l.head;
              o <= r && --r, t.splice(--o, 2, new xi(d ? u : c, d ? c : u));
            }
          }
          return new yi(t, r);
        }
        function wi(e, t) {
          return new yi([new xi(e, t || e)], 0);
        }
        function _i(e) {
          return e.text
            ? et(
                e.from.line + e.text.length - 1,
                X(e.text).length + (1 == e.text.length ? e.from.ch : 0)
              )
            : e.to;
        }
        function Ci(e, t) {
          if (tt(e, t.from) < 0) return e;
          if (tt(e, t.to) <= 0) return _i(t);
          var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
            n = e.ch;
          return e.line == t.to.line && (n += _i(t).ch - t.to.ch), et(r, n);
        }
        function Si(e, t) {
          for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
            var i = e.sel.ranges[n];
            r.push(new xi(Ci(i.anchor, t), Ci(i.head, t)));
          }
          return ki(e.cm, r, e.sel.primIndex);
        }
        function Mi(e, t, r) {
          return e.line == t.line
            ? et(r.line, e.ch - t.ch + r.ch)
            : et(r.line + (e.line - t.line), e.ch);
        }
        function Li(e) {
          (e.doc.mode = je(e.options, e.doc.modeOption)), Ti(e);
        }
        function Ti(e) {
          e.doc.iter(function (e) {
            e.stateAfter && (e.stateAfter = null),
              e.styles && (e.styles = null);
          }),
            (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
            ei(e, 100),
            e.state.modeGen++,
            e.curOp && cn(e);
        }
        function zi(e, t) {
          return (
            0 == t.from.ch &&
            0 == t.to.ch &&
            "" == X(t.text) &&
            (!e.cm || e.cm.options.wholeLineUpdateBefore)
          );
        }
        function Ai(e, t, r, n) {
          function i(e) {
            return r ? r[e] : null;
          }
          function o(e, r, i) {
            !(function (e, t, r, n) {
              (e.text = t),
                e.stateAfter && (e.stateAfter = null),
                e.styles && (e.styles = null),
                null != e.order && (e.order = null),
                Tt(e),
                zt(e, r);
              var i = n ? n(e) : 1;
              i != e.height && Xe(e, i);
            })(e, r, i, n),
              lr(e, "change", e, t);
          }
          function a(e, t) {
            for (var r = [], o = e; o < t; ++o) r.push(new Vt(c[o], i(o), n));
            return r;
          }
          var l = t.from,
            s = t.to,
            c = t.text,
            u = Ve(e, l.line),
            d = Ve(e, s.line),
            p = X(c),
            f = i(c.length - 1),
            m = s.line - l.line;
          if (t.full)
            e.insert(0, a(0, c.length)), e.remove(c.length, e.size - c.length);
          else if (zi(e, t)) {
            var h = a(0, c.length - 1);
            o(d, d.text, f),
              m && e.remove(l.line, m),
              h.length && e.insert(l.line, h);
          } else if (u == d)
            if (1 == c.length)
              o(u, u.text.slice(0, l.ch) + p + u.text.slice(s.ch), f);
            else {
              var g = a(1, c.length - 1);
              g.push(new Vt(p + u.text.slice(s.ch), f, n)),
                o(u, u.text.slice(0, l.ch) + c[0], i(0)),
                e.insert(l.line + 1, g);
            }
          else if (1 == c.length)
            o(u, u.text.slice(0, l.ch) + c[0] + d.text.slice(s.ch), i(0)),
              e.remove(l.line + 1, m);
          else {
            o(u, u.text.slice(0, l.ch) + c[0], i(0)),
              o(d, p + d.text.slice(s.ch), f);
            var v = a(1, c.length - 1);
            m > 1 && e.remove(l.line + 1, m - 1), e.insert(l.line + 1, v);
          }
          lr(e, "change", e, t);
        }
        function Di(e, t, r) {
          !(function e(n, i, o) {
            if (n.linked)
              for (var a = 0; a < n.linked.length; ++a) {
                var l = n.linked[a];
                if (l.doc != i) {
                  var s = o && l.sharedHist;
                  (r && !s) || (t(l.doc, s), e(l.doc, n, s));
                }
              }
          })(e, null, !0);
        }
        function Ei(e, t) {
          if (t.cm) throw new Error("This document is already in use.");
          (e.doc = t),
            (t.cm = e),
            an(e),
            Li(e),
            Fi(e),
            e.options.lineWrapping || Ut(e),
            (e.options.mode = t.modeOption),
            cn(e);
        }
        function Fi(e) {
          ("rtl" == e.doc.direction ? F : M)(
            e.display.lineDiv,
            "CodeMirror-rtl"
          );
        }
        function Ni(e) {
          (this.done = []),
            (this.undone = []),
            (this.undoDepth = 1 / 0),
            (this.lastModTime = this.lastSelTime = 0),
            (this.lastOp = this.lastSelOp = null),
            (this.lastOrigin = this.lastSelOrigin = null),
            (this.generation = this.maxGeneration = e || 1);
        }
        function Oi(e, t) {
          var r = { from: nt(t.from), to: _i(t), text: Ke(e, t.from, t.to) };
          return (
            Bi(e, r, t.from.line, t.to.line + 1),
            Di(
              e,
              function (e) {
                return Bi(e, r, t.from.line, t.to.line + 1);
              },
              !0
            ),
            r
          );
        }
        function qi(e) {
          for (; e.length; ) {
            var t = X(e);
            if (!t.ranges) break;
            e.pop();
          }
        }
        function Ii(e, t, r, n) {
          var i = e.history;
          i.undone.length = 0;
          var o,
            a,
            l = +new Date();
          if (
            (i.lastOp == n ||
              (i.lastOrigin == t.origin &&
                t.origin &&
                (("+" == t.origin.charAt(0) &&
                  i.lastModTime >
                    l - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
                  "*" == t.origin.charAt(0)))) &&
            (o = (function (e, t) {
              return t
                ? (qi(e.done), X(e.done))
                : e.done.length && !X(e.done).ranges
                ? X(e.done)
                : e.done.length > 1 && !e.done[e.done.length - 2].ranges
                ? (e.done.pop(), X(e.done))
                : void 0;
            })(i, i.lastOp == n))
          )
            (a = X(o.changes)),
              0 == tt(t.from, t.to) && 0 == tt(t.from, a.to)
                ? (a.to = _i(t))
                : o.changes.push(Oi(e, t));
          else {
            var s = X(i.done);
            for (
              (s && s.ranges) || ji(e.sel, i.done),
                o = { changes: [Oi(e, t)], generation: i.generation },
                i.done.push(o);
              i.done.length > i.undoDepth;

            )
              i.done.shift(), i.done[0].ranges || i.done.shift();
          }
          i.done.push(r),
            (i.generation = ++i.maxGeneration),
            (i.lastModTime = i.lastSelTime = l),
            (i.lastOp = i.lastSelOp = n),
            (i.lastOrigin = i.lastSelOrigin = t.origin),
            a || he(e, "historyAdded");
        }
        function Pi(e, t, r, n) {
          var i = e.history,
            o = n && n.origin;
          r == i.lastSelOp ||
          (o &&
            i.lastSelOrigin == o &&
            ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
              (function (e, t, r, n) {
                var i = t.charAt(0);
                return (
                  "*" == i ||
                  ("+" == i &&
                    r.ranges.length == n.ranges.length &&
                    r.somethingSelected() == n.somethingSelected() &&
                    new Date() - e.history.lastSelTime <=
                      (e.cm ? e.cm.options.historyEventDelay : 500))
                );
              })(e, o, X(i.done), t)))
            ? (i.done[i.done.length - 1] = t)
            : ji(t, i.done),
            (i.lastSelTime = +new Date()),
            (i.lastSelOrigin = o),
            (i.lastSelOp = r),
            n && !1 !== n.clearRedo && qi(i.undone);
        }
        function ji(e, t) {
          var r = X(t);
          (r && r.ranges && r.equals(e)) || t.push(e);
        }
        function Bi(e, t, r, n) {
          var i = t["spans_" + e.id],
            o = 0;
          e.iter(
            Math.max(e.first, r),
            Math.min(e.first + e.size, n),
            function (r) {
              r.markedSpans &&
                ((i || (i = t["spans_" + e.id] = {}))[o] = r.markedSpans),
                ++o;
            }
          );
        }
        function Wi(e) {
          if (!e) return null;
          for (var t, r = 0; r < e.length; ++r)
            e[r].marker.explicitlyCleared
              ? t || (t = e.slice(0, r))
              : t && t.push(e[r]);
          return t ? (t.length ? t : null) : e;
        }
        function Ri(e, t) {
          var r = (function (e, t) {
              var r = t["spans_" + e.id];
              if (!r) return null;
              for (var n = [], i = 0; i < t.text.length; ++i) n.push(Wi(r[i]));
              return n;
            })(e, t),
            n = Mt(e, t);
          if (!r) return n;
          if (!n) return r;
          for (var i = 0; i < r.length; ++i) {
            var o = r[i],
              a = n[i];
            if (o && a)
              e: for (var l = 0; l < a.length; ++l) {
                for (var s = a[l], c = 0; c < o.length; ++c)
                  if (o[c].marker == s.marker) continue e;
                o.push(s);
              }
            else a && (r[i] = a);
          }
          return r;
        }
        function Hi(e, t, r) {
          for (var n = [], i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.ranges) n.push(r ? yi.prototype.deepCopy.call(o) : o);
            else {
              var a = o.changes,
                l = [];
              n.push({ changes: l });
              for (var s = 0; s < a.length; ++s) {
                var c = a[s],
                  u = void 0;
                if ((l.push({ from: c.from, to: c.to, text: c.text }), t))
                  for (var d in c)
                    (u = d.match(/^spans_(\d+)$/)) &&
                      B(t, Number(u[1])) > -1 &&
                      ((X(l)[d] = c[d]), delete c[d]);
              }
            }
          }
          return n;
        }
        function $i(e, t, r, n) {
          if (n) {
            var i = e.anchor;
            if (r) {
              var o = tt(t, i) < 0;
              o != tt(r, i) < 0
                ? ((i = t), (t = r))
                : o != tt(t, r) < 0 && (t = r);
            }
            return new xi(i, t);
          }
          return new xi(r || t, t);
        }
        function Ui(e, t, r, n, i) {
          null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
            Zi(e, new yi([$i(e.sel.primary(), t, r, i)], 0), n);
        }
        function Vi(e, t, r) {
          for (
            var n = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0;
            o < e.sel.ranges.length;
            o++
          )
            n[o] = $i(e.sel.ranges[o], t[o], null, i);
          var a = ki(e.cm, n, e.sel.primIndex);
          Zi(e, a, r);
        }
        function Ki(e, t, r, n) {
          var i = e.sel.ranges.slice(0);
          (i[t] = r), Zi(e, ki(e.cm, i, e.sel.primIndex), n);
        }
        function Gi(e, t, r, n) {
          Zi(e, wi(t, r), n);
        }
        function Xi(e, t, r) {
          var n = e.history.done,
            i = X(n);
          i && i.ranges ? ((n[n.length - 1] = t), Yi(e, t, r)) : Zi(e, t, r);
        }
        function Zi(e, t, r) {
          Yi(e, t, r), Pi(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r);
        }
        function Yi(e, t, r) {
          (be(e, "beforeSelectionChange") ||
            (e.cm && be(e.cm, "beforeSelectionChange"))) &&
            (t = (function (e, t, r) {
              var n = {
                ranges: t.ranges,
                update: function (t) {
                  this.ranges = [];
                  for (var r = 0; r < t.length; r++)
                    this.ranges[r] = new xi(
                      lt(e, t[r].anchor),
                      lt(e, t[r].head)
                    );
                },
                origin: r && r.origin
              };
              return (
                he(e, "beforeSelectionChange", e, n),
                e.cm && he(e.cm, "beforeSelectionChange", e.cm, n),
                n.ranges != t.ranges
                  ? ki(e.cm, n.ranges, n.ranges.length - 1)
                  : t
              );
            })(e, t, r));
          var n =
            (r && r.bias) ||
            (tt(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
          Qi(e, eo(e, t, n, !0)), (r && !1 === r.scroll) || !e.cm || zn(e.cm);
        }
        function Qi(e, t) {
          t.equals(e.sel) ||
            ((e.sel = t),
            e.cm &&
              ((e.cm.curOp.updateInput = 1),
              (e.cm.curOp.selectionChanged = !0),
              ve(e.cm)),
            lr(e, "cursorActivity", e));
        }
        function Ji(e) {
          Qi(e, eo(e, e.sel, null, !1));
        }
        function eo(e, t, r, n) {
          for (var i, o = 0; o < t.ranges.length; o++) {
            var a = t.ranges[o],
              l = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
              s = ro(e, a.anchor, l && l.anchor, r, n),
              c = ro(e, a.head, l && l.head, r, n);
            (i || s != a.anchor || c != a.head) &&
              (i || (i = t.ranges.slice(0, o)), (i[o] = new xi(s, c)));
          }
          return i ? ki(e.cm, i, t.primIndex) : t;
        }
        function to(e, t, r, n, i) {
          var o = Ve(e, t.line);
          if (o.markedSpans)
            for (var a = 0; a < o.markedSpans.length; ++a) {
              var l = o.markedSpans[a],
                s = l.marker,
                c = "selectLeft" in s ? !s.selectLeft : s.inclusiveLeft,
                u = "selectRight" in s ? !s.selectRight : s.inclusiveRight;
              if (
                (null == l.from || (c ? l.from <= t.ch : l.from < t.ch)) &&
                (null == l.to || (u ? l.to >= t.ch : l.to > t.ch))
              ) {
                if (i && (he(s, "beforeCursorEnter"), s.explicitlyCleared)) {
                  if (o.markedSpans) {
                    --a;
                    continue;
                  }
                  break;
                }
                if (!s.atomic) continue;
                if (r) {
                  var d = s.find(n < 0 ? 1 : -1),
                    p = void 0;
                  if (
                    ((n < 0 ? u : c) &&
                      (d = no(e, d, -n, d && d.line == t.line ? o : null)),
                    d &&
                      d.line == t.line &&
                      (p = tt(d, r)) &&
                      (n < 0 ? p < 0 : p > 0))
                  )
                    return to(e, d, t, n, i);
                }
                var f = s.find(n < 0 ? -1 : 1);
                return (
                  (n < 0 ? c : u) &&
                    (f = no(e, f, n, f.line == t.line ? o : null)),
                  f ? to(e, f, t, n, i) : null
                );
              }
            }
          return t;
        }
        function ro(e, t, r, n, i) {
          var o = n || 1,
            a =
              to(e, t, r, o, i) ||
              (!i && to(e, t, r, o, !0)) ||
              to(e, t, r, -o, i) ||
              (!i && to(e, t, r, -o, !0));
          return a || ((e.cantEdit = !0), et(e.first, 0));
        }
        function no(e, t, r, n) {
          return r < 0 && 0 == t.ch
            ? t.line > e.first
              ? lt(e, et(t.line - 1))
              : null
            : r > 0 && t.ch == (n || Ve(e, t.line)).text.length
            ? t.line < e.first + e.size - 1
              ? et(t.line + 1, 0)
              : null
            : new et(t.line, t.ch + r);
        }
        function io(e) {
          e.setSelection(et(e.firstLine(), 0), et(e.lastLine()), H);
        }
        function oo(e, t, r) {
          var n = {
            canceled: !1,
            from: t.from,
            to: t.to,
            text: t.text,
            origin: t.origin,
            cancel: function () {
              return (n.canceled = !0);
            }
          };
          return (
            r &&
              (n.update = function (t, r, i, o) {
                t && (n.from = lt(e, t)),
                  r && (n.to = lt(e, r)),
                  i && (n.text = i),
                  void 0 !== o && (n.origin = o);
              }),
            he(e, "beforeChange", e, n),
            e.cm && he(e.cm, "beforeChange", e.cm, n),
            n.canceled
              ? (e.cm && (e.cm.curOp.updateInput = 2), null)
              : { from: n.from, to: n.to, text: n.text, origin: n.origin }
          );
        }
        function ao(e, t, r) {
          if (e.cm) {
            if (!e.cm.curOp) return Yn(e.cm, ao)(e, t, r);
            if (e.cm.state.suppressEdits) return;
          }
          if (
            !(be(e, "beforeChange") || (e.cm && be(e.cm, "beforeChange"))) ||
            (t = oo(e, t, !0))
          ) {
            var n =
              kt &&
              !r &&
              (function (e, t, r) {
                var n = null;
                if (
                  (e.iter(t.line, r.line + 1, function (e) {
                    if (e.markedSpans)
                      for (var t = 0; t < e.markedSpans.length; ++t) {
                        var r = e.markedSpans[t].marker;
                        !r.readOnly ||
                          (n && -1 != B(n, r)) ||
                          (n || (n = [])).push(r);
                      }
                  }),
                  !n)
                )
                  return null;
                for (var i = [{ from: t, to: r }], o = 0; o < n.length; ++o)
                  for (var a = n[o], l = a.find(0), s = 0; s < i.length; ++s) {
                    var c = i[s];
                    if (!(tt(c.to, l.from) < 0 || tt(c.from, l.to) > 0)) {
                      var u = [s, 1],
                        d = tt(c.from, l.from),
                        p = tt(c.to, l.to);
                      (d < 0 || (!a.inclusiveLeft && !d)) &&
                        u.push({ from: c.from, to: l.from }),
                        (p > 0 || (!a.inclusiveRight && !p)) &&
                          u.push({ from: l.to, to: c.to }),
                        i.splice.apply(i, u),
                        (s += u.length - 3);
                    }
                  }
                return i;
              })(e, t.from, t.to);
            if (n)
              for (var i = n.length - 1; i >= 0; --i)
                lo(e, {
                  from: n[i].from,
                  to: n[i].to,
                  text: i ? [""] : t.text,
                  origin: t.origin
                });
            else lo(e, t);
          }
        }
        function lo(e, t) {
          if (1 != t.text.length || "" != t.text[0] || 0 != tt(t.from, t.to)) {
            var r = Si(e, t);
            Ii(e, t, r, e.cm ? e.cm.curOp.id : NaN), uo(e, t, r, Mt(e, t));
            var n = [];
            Di(e, function (e, r) {
              r ||
                -1 != B(n, e.history) ||
                (ho(e.history, t), n.push(e.history)),
                uo(e, t, null, Mt(e, t));
            });
          }
        }
        function so(e, t, r) {
          var n = e.cm && e.cm.state.suppressEdits;
          if (!n || r) {
            for (
              var i,
                o = e.history,
                a = e.sel,
                l = "undo" == t ? o.done : o.undone,
                s = "undo" == t ? o.undone : o.done,
                c = 0;
              c < l.length &&
              ((i = l[c]), r ? !i.ranges || i.equals(e.sel) : i.ranges);
              c++
            );
            if (c != l.length) {
              for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
                if (!(i = l.pop()).ranges) {
                  if (n) return void l.push(i);
                  break;
                }
                if ((ji(i, s), r && !i.equals(e.sel)))
                  return void Zi(e, i, { clearRedo: !1 });
                a = i;
              }
              var u = [];
              ji(a, s),
                s.push({ changes: u, generation: o.generation }),
                (o.generation = i.generation || ++o.maxGeneration);
              for (
                var d =
                    be(e, "beforeChange") || (e.cm && be(e.cm, "beforeChange")),
                  p = function (r) {
                    var n = i.changes[r];
                    if (((n.origin = t), d && !oo(e, n, !1)))
                      return (l.length = 0), {};
                    u.push(Oi(e, n));
                    var o = r ? Si(e, n) : X(l);
                    uo(e, n, o, Ri(e, n)),
                      !r &&
                        e.cm &&
                        e.cm.scrollIntoView({ from: n.from, to: _i(n) });
                    var a = [];
                    Di(e, function (e, t) {
                      t ||
                        -1 != B(a, e.history) ||
                        (ho(e.history, n), a.push(e.history)),
                        uo(e, n, null, Ri(e, n));
                    });
                  },
                  f = i.changes.length - 1;
                f >= 0;
                --f
              ) {
                var m = p(f);
                if (m) return m.v;
              }
            }
          }
        }
        function co(e, t) {
          if (
            0 != t &&
            ((e.first += t),
            (e.sel = new yi(
              Z(e.sel.ranges, function (e) {
                return new xi(
                  et(e.anchor.line + t, e.anchor.ch),
                  et(e.head.line + t, e.head.ch)
                );
              }),
              e.sel.primIndex
            )),
            e.cm)
          ) {
            cn(e.cm, e.first, e.first - t, t);
            for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++)
              un(e.cm, n, "gutter");
          }
        }
        function uo(e, t, r, n) {
          if (e.cm && !e.cm.curOp) return Yn(e.cm, uo)(e, t, r, n);
          if (t.to.line < e.first)
            co(e, t.text.length - 1 - (t.to.line - t.from.line));
          else if (!(t.from.line > e.lastLine())) {
            if (t.from.line < e.first) {
              var i = t.text.length - 1 - (e.first - t.from.line);
              co(e, i),
                (t = {
                  from: et(e.first, 0),
                  to: et(t.to.line + i, t.to.ch),
                  text: [X(t.text)],
                  origin: t.origin
                });
            }
            var o = e.lastLine();
            t.to.line > o &&
              (t = {
                from: t.from,
                to: et(o, Ve(e, o).text.length),
                text: [t.text[0]],
                origin: t.origin
              }),
              (t.removed = Ke(e, t.from, t.to)),
              r || (r = Si(e, t)),
              e.cm
                ? (function (e, t, r) {
                    var n = e.doc,
                      i = e.display,
                      o = t.from,
                      a = t.to,
                      l = !1,
                      s = o.line;
                    e.options.lineWrapping ||
                      ((s = Ze(Pt(Ve(n, o.line)))),
                      n.iter(s, a.line + 1, function (e) {
                        if (e == i.maxLine) return (l = !0), !0;
                      })),
                      n.sel.contains(t.from, t.to) > -1 && ve(e),
                      Ai(n, t, r, on(e)),
                      e.options.lineWrapping ||
                        (n.iter(s, o.line + t.text.length, function (e) {
                          var t = $t(e);
                          t > i.maxLineLength &&
                            ((i.maxLine = e),
                            (i.maxLineLength = t),
                            (i.maxLineChanged = !0),
                            (l = !1));
                        }),
                        l && (e.curOp.updateMaxLine = !0)),
                      (function (e, t) {
                        if (
                          ((e.modeFrontier = Math.min(e.modeFrontier, t)),
                          !(e.highlightFrontier < t - 10))
                        ) {
                          for (var r = e.first, n = t - 1; n > r; n--) {
                            var i = Ve(e, n).stateAfter;
                            if (
                              i &&
                              (!(i instanceof ct) || n + i.lookAhead < t)
                            ) {
                              r = n + 1;
                              break;
                            }
                          }
                          e.highlightFrontier = Math.min(
                            e.highlightFrontier,
                            r
                          );
                        }
                      })(n, o.line),
                      ei(e, 400);
                    var c = t.text.length - (a.line - o.line) - 1;
                    t.full
                      ? cn(e)
                      : o.line != a.line || 1 != t.text.length || zi(e.doc, t)
                      ? cn(e, o.line, a.line + 1, c)
                      : un(e, o.line, "text");
                    var u = be(e, "changes"),
                      d = be(e, "change");
                    if (d || u) {
                      var p = {
                        from: o,
                        to: a,
                        text: t.text,
                        removed: t.removed,
                        origin: t.origin
                      };
                      d && lr(e, "change", e, p),
                        u &&
                          (
                            e.curOp.changeObjs || (e.curOp.changeObjs = [])
                          ).push(p);
                    }
                    e.display.selForContextMenu = null;
                  })(e.cm, t, n)
                : Ai(e, t, n),
              Yi(e, r, H),
              e.cantEdit && ro(e, et(e.firstLine(), 0)) && (e.cantEdit = !1);
          }
        }
        function po(e, t, r, n, i) {
          var o;
          n || (n = r),
            tt(n, r) < 0 && ((r = (o = [n, r])[0]), (n = o[1])),
            "string" == typeof t && (t = e.splitLines(t)),
            ao(e, { from: r, to: n, text: t, origin: i });
        }
        function fo(e, t, r, n) {
          r < e.line ? (e.line += n) : t < e.line && ((e.line = t), (e.ch = 0));
        }
        function mo(e, t, r, n) {
          for (var i = 0; i < e.length; ++i) {
            var o = e[i],
              a = !0;
            if (o.ranges) {
              o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
              for (var l = 0; l < o.ranges.length; l++)
                fo(o.ranges[l].anchor, t, r, n), fo(o.ranges[l].head, t, r, n);
            } else {
              for (var s = 0; s < o.changes.length; ++s) {
                var c = o.changes[s];
                if (r < c.from.line)
                  (c.from = et(c.from.line + n, c.from.ch)),
                    (c.to = et(c.to.line + n, c.to.ch));
                else if (t <= c.to.line) {
                  a = !1;
                  break;
                }
              }
              a || (e.splice(0, i + 1), (i = 0));
            }
          }
        }
        function ho(e, t) {
          var r = t.from.line,
            n = t.to.line,
            i = t.text.length - (n - r) - 1;
          mo(e.done, r, n, i), mo(e.undone, r, n, i);
        }
        function go(e, t, r, n) {
          var i = t,
            o = t;
          return (
            "number" == typeof t ? (o = Ve(e, at(e, t))) : (i = Ze(t)),
            null == i ? null : (n(o, i) && e.cm && un(e.cm, i, r), o)
          );
        }
        function vo(e) {
          (this.lines = e), (this.parent = null);
          for (var t = 0, r = 0; r < e.length; ++r)
            (e[r].parent = this), (t += e[r].height);
          this.height = t;
        }
        function bo(e) {
          this.children = e;
          for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
            var i = e[n];
            (t += i.chunkSize()), (r += i.height), (i.parent = this);
          }
          (this.size = t), (this.height = r), (this.parent = null);
        }
        (xi.prototype.from = function () {
          return ot(this.anchor, this.head);
        }),
          (xi.prototype.to = function () {
            return it(this.anchor, this.head);
          }),
          (xi.prototype.empty = function () {
            return (
              this.head.line == this.anchor.line &&
              this.head.ch == this.anchor.ch
            );
          }),
          (vo.prototype = {
            chunkSize: function () {
              return this.lines.length;
            },
            removeInner: function (e, t) {
              for (var r = e, n = e + t; r < n; ++r) {
                var i = this.lines[r];
                (this.height -= i.height), Kt(i), lr(i, "delete");
              }
              this.lines.splice(e, t);
            },
            collapse: function (e) {
              e.push.apply(e, this.lines);
            },
            insertInner: function (e, t, r) {
              (this.height += r),
                (this.lines = this.lines
                  .slice(0, e)
                  .concat(t)
                  .concat(this.lines.slice(e)));
              for (var n = 0; n < t.length; ++n) t[n].parent = this;
            },
            iterN: function (e, t, r) {
              for (var n = e + t; e < n; ++e) if (r(this.lines[e])) return !0;
            }
          }),
          (bo.prototype = {
            chunkSize: function () {
              return this.size;
            },
            removeInner: function (e, t) {
              this.size -= t;
              for (var r = 0; r < this.children.length; ++r) {
                var n = this.children[r],
                  i = n.chunkSize();
                if (e < i) {
                  var o = Math.min(t, i - e),
                    a = n.height;
                  if (
                    (n.removeInner(e, o),
                    (this.height -= a - n.height),
                    i == o && (this.children.splice(r--, 1), (n.parent = null)),
                    0 == (t -= o))
                  )
                    break;
                  e = 0;
                } else e -= i;
              }
              if (
                this.size - t < 25 &&
                (this.children.length > 1 || !(this.children[0] instanceof vo))
              ) {
                var l = [];
                this.collapse(l),
                  (this.children = [new vo(l)]),
                  (this.children[0].parent = this);
              }
            },
            collapse: function (e) {
              for (var t = 0; t < this.children.length; ++t)
                this.children[t].collapse(e);
            },
            insertInner: function (e, t, r) {
              (this.size += t.length), (this.height += r);
              for (var n = 0; n < this.children.length; ++n) {
                var i = this.children[n],
                  o = i.chunkSize();
                if (e <= o) {
                  if (
                    (i.insertInner(e, t, r), i.lines && i.lines.length > 50)
                  ) {
                    for (
                      var a = (i.lines.length % 25) + 25, l = a;
                      l < i.lines.length;

                    ) {
                      var s = new vo(i.lines.slice(l, (l += 25)));
                      (i.height -= s.height),
                        this.children.splice(++n, 0, s),
                        (s.parent = this);
                    }
                    (i.lines = i.lines.slice(0, a)), this.maybeSpill();
                  }
                  break;
                }
                e -= o;
              }
            },
            maybeSpill: function () {
              if (!(this.children.length <= 10)) {
                var e = this;
                do {
                  var t = e.children.splice(e.children.length - 5, 5),
                    r = new bo(t);
                  if (e.parent) {
                    (e.size -= r.size), (e.height -= r.height);
                    var n = B(e.parent.children, e);
                    e.parent.children.splice(n + 1, 0, r);
                  } else {
                    var i = new bo(e.children);
                    (i.parent = e), (e.children = [i, r]), (e = i);
                  }
                  r.parent = e.parent;
                } while (e.children.length > 10);
                e.parent.maybeSpill();
              }
            },
            iterN: function (e, t, r) {
              for (var n = 0; n < this.children.length; ++n) {
                var i = this.children[n],
                  o = i.chunkSize();
                if (e < o) {
                  var a = Math.min(t, o - e);
                  if (i.iterN(e, a, r)) return !0;
                  if (0 == (t -= a)) break;
                  e = 0;
                } else e -= o;
              }
            }
          });
        var yo = function (e, t, r) {
          if (r) for (var n in r) r.hasOwnProperty(n) && (this[n] = r[n]);
          (this.doc = e), (this.node = t);
        };
        function xo(e, t, r) {
          Ht(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) &&
            Tn(e, r);
        }
        (yo.prototype.clear = function () {
          var e = this.doc.cm,
            t = this.line.widgets,
            r = this.line,
            n = Ze(r);
          if (null != n && t) {
            for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
            t.length || (r.widgets = null);
            var o = xr(this);
            Xe(r, Math.max(0, r.height - o)),
              e &&
                (Zn(e, function () {
                  xo(e, r, -o), un(e, n, "widget");
                }),
                lr(e, "lineWidgetCleared", e, this, n));
          }
        }),
          (yo.prototype.changed = function () {
            var e = this,
              t = this.height,
              r = this.doc.cm,
              n = this.line;
            this.height = null;
            var i = xr(this) - t;
            i &&
              (Wt(this.doc, n) || Xe(n, n.height + i),
              r &&
                Zn(r, function () {
                  (r.curOp.forceUpdate = !0),
                    xo(r, n, i),
                    lr(r, "lineWidgetChanged", r, e, Ze(n));
                }));
          }),
          ye(yo);
        var ko = 0,
          wo = function (e, t) {
            (this.lines = []),
              (this.type = t),
              (this.doc = e),
              (this.id = ++ko);
          };
        function _o(e, t, r, n, i) {
          if (n && n.shared)
            return (function (e, t, r, n, i) {
              (n = I(n)).shared = !1;
              var o = [_o(e, t, r, n, i)],
                a = o[0],
                l = n.widgetNode;
              return (
                Di(e, function (e) {
                  l && (n.widgetNode = l.cloneNode(!0)),
                    o.push(_o(e, lt(e, t), lt(e, r), n, i));
                  for (var s = 0; s < e.linked.length; ++s)
                    if (e.linked[s].isParent) return;
                  a = X(o);
                }),
                new Co(o, a)
              );
            })(e, t, r, n, i);
          if (e.cm && !e.cm.curOp) return Yn(e.cm, _o)(e, t, r, n, i);
          var o = new wo(e, i),
            a = tt(t, r);
          if ((n && I(n, o, !1), a > 0 || (0 == a && !1 !== o.clearWhenEmpty)))
            return o;
          if (
            (o.replacedWith &&
              ((o.collapsed = !0),
              (o.widgetNode = A("span", [o.replacedWith], "CodeMirror-widget")),
              n.handleMouseEvents ||
                o.widgetNode.setAttribute("cm-ignore-events", "true"),
              n.insertLeft && (o.widgetNode.insertLeft = !0)),
            o.collapsed)
          ) {
            if (
              It(e, t.line, t, r, o) ||
              (t.line != r.line && It(e, r.line, t, r, o))
            )
              throw new Error(
                "Inserting collapsed marker partially overlapping an existing one"
              );
            wt = !0;
          }
          o.addToHistory &&
            Ii(e, { from: t, to: r, origin: "markText" }, e.sel, NaN);
          var l,
            s = t.line,
            c = e.cm;
          if (
            (e.iter(s, r.line + 1, function (e) {
              c &&
                o.collapsed &&
                !c.options.lineWrapping &&
                Pt(e) == c.display.maxLine &&
                (l = !0),
                o.collapsed && s != t.line && Xe(e, 0),
                (function (e, t) {
                  (e.markedSpans = e.markedSpans
                    ? e.markedSpans.concat([t])
                    : [t]),
                    t.marker.attachLine(e);
                })(
                  e,
                  new _t(
                    o,
                    s == t.line ? t.ch : null,
                    s == r.line ? r.ch : null
                  )
                ),
                ++s;
            }),
            o.collapsed &&
              e.iter(t.line, r.line + 1, function (t) {
                Wt(e, t) && Xe(t, 0);
              }),
            o.clearOnEnter &&
              pe(o, "beforeCursorEnter", function () {
                return o.clear();
              }),
            o.readOnly &&
              ((kt = !0),
              (e.history.done.length || e.history.undone.length) &&
                e.clearHistory()),
            o.collapsed && ((o.id = ++ko), (o.atomic = !0)),
            c)
          ) {
            if ((l && (c.curOp.updateMaxLine = !0), o.collapsed))
              cn(c, t.line, r.line + 1);
            else if (
              o.className ||
              o.startStyle ||
              o.endStyle ||
              o.css ||
              o.attributes ||
              o.title
            )
              for (var u = t.line; u <= r.line; u++) un(c, u, "text");
            o.atomic && Ji(c.doc), lr(c, "markerAdded", c, o);
          }
          return o;
        }
        (wo.prototype.clear = function () {
          if (!this.explicitlyCleared) {
            var e = this.doc.cm,
              t = e && !e.curOp;
            if ((t && $n(e), be(this, "clear"))) {
              var r = this.find();
              r && lr(this, "clear", r.from, r.to);
            }
            for (var n = null, i = null, o = 0; o < this.lines.length; ++o) {
              var a = this.lines[o],
                l = Ct(a.markedSpans, this);
              e && !this.collapsed
                ? un(e, Ze(a), "text")
                : e &&
                  (null != l.to && (i = Ze(a)), null != l.from && (n = Ze(a))),
                (a.markedSpans = St(a.markedSpans, l)),
                null == l.from &&
                  this.collapsed &&
                  !Wt(this.doc, a) &&
                  e &&
                  Xe(a, en(e.display));
            }
            if (e && this.collapsed && !e.options.lineWrapping)
              for (var s = 0; s < this.lines.length; ++s) {
                var c = Pt(this.lines[s]),
                  u = $t(c);
                u > e.display.maxLineLength &&
                  ((e.display.maxLine = c),
                  (e.display.maxLineLength = u),
                  (e.display.maxLineChanged = !0));
              }
            null != n && e && this.collapsed && cn(e, n, i + 1),
              (this.lines.length = 0),
              (this.explicitlyCleared = !0),
              this.atomic &&
                this.doc.cantEdit &&
                ((this.doc.cantEdit = !1), e && Ji(e.doc)),
              e && lr(e, "markerCleared", e, this, n, i),
              t && Un(e),
              this.parent && this.parent.clear();
          }
        }),
          (wo.prototype.find = function (e, t) {
            var r, n;
            null == e && "bookmark" == this.type && (e = 1);
            for (var i = 0; i < this.lines.length; ++i) {
              var o = this.lines[i],
                a = Ct(o.markedSpans, this);
              if (null != a.from && ((r = et(t ? o : Ze(o), a.from)), -1 == e))
                return r;
              if (null != a.to && ((n = et(t ? o : Ze(o), a.to)), 1 == e))
                return n;
            }
            return r && { from: r, to: n };
          }),
          (wo.prototype.changed = function () {
            var e = this,
              t = this.find(-1, !0),
              r = this,
              n = this.doc.cm;
            t &&
              n &&
              Zn(n, function () {
                var i = t.line,
                  o = Ze(t.line),
                  a = Ar(n, o);
                if (
                  (a &&
                    (Ir(a),
                    (n.curOp.selectionChanged = n.curOp.forceUpdate = !0)),
                  (n.curOp.updateMaxLine = !0),
                  !Wt(r.doc, i) && null != r.height)
                ) {
                  var l = r.height;
                  r.height = null;
                  var s = xr(r) - l;
                  s && Xe(i, i.height + s);
                }
                lr(n, "markerChanged", n, e);
              });
          }),
          (wo.prototype.attachLine = function (e) {
            if (!this.lines.length && this.doc.cm) {
              var t = this.doc.cm.curOp;
              (t.maybeHiddenMarkers && -1 != B(t.maybeHiddenMarkers, this)) ||
                (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(
                  this
                );
            }
            this.lines.push(e);
          }),
          (wo.prototype.detachLine = function (e) {
            if (
              (this.lines.splice(B(this.lines, e), 1),
              !this.lines.length && this.doc.cm)
            ) {
              var t = this.doc.cm.curOp;
              (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
            }
          }),
          ye(wo);
        var Co = function (e, t) {
          (this.markers = e), (this.primary = t);
          for (var r = 0; r < e.length; ++r) e[r].parent = this;
        };
        function So(e) {
          return e.findMarks(
            et(e.first, 0),
            e.clipPos(et(e.lastLine())),
            function (e) {
              return e.parent;
            }
          );
        }
        function Mo(e) {
          for (
            var t = function (t) {
                var r = e[t],
                  n = [r.primary.doc];
                Di(r.primary.doc, function (e) {
                  return n.push(e);
                });
                for (var i = 0; i < r.markers.length; i++) {
                  var o = r.markers[i];
                  -1 == B(n, o.doc) &&
                    ((o.parent = null), r.markers.splice(i--, 1));
                }
              },
              r = 0;
            r < e.length;
            r++
          )
            t(r);
        }
        (Co.prototype.clear = function () {
          if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var e = 0; e < this.markers.length; ++e)
              this.markers[e].clear();
            lr(this, "clear");
          }
        }),
          (Co.prototype.find = function (e, t) {
            return this.primary.find(e, t);
          }),
          ye(Co);
        var Lo = 0,
          To = function (e, t, r, n, i) {
            if (!(this instanceof To)) return new To(e, t, r, n, i);
            null == r && (r = 0),
              bo.call(this, [new vo([new Vt("", null)])]),
              (this.first = r),
              (this.scrollTop = this.scrollLeft = 0),
              (this.cantEdit = !1),
              (this.cleanGeneration = 1),
              (this.modeFrontier = this.highlightFrontier = r);
            var o = et(r, 0);
            (this.sel = wi(o)),
              (this.history = new Ni(null)),
              (this.id = ++Lo),
              (this.modeOption = t),
              (this.lineSep = n),
              (this.direction = "rtl" == i ? "rtl" : "ltr"),
              (this.extend = !1),
              "string" == typeof e && (e = this.splitLines(e)),
              Ai(this, { from: o, to: o, text: e }),
              Zi(this, wi(o), H);
          };
        (To.prototype = Q(bo.prototype, {
          constructor: To,
          iter: function (e, t, r) {
            r
              ? this.iterN(e - this.first, t - e, r)
              : this.iterN(this.first, this.first + this.size, e);
          },
          insert: function (e, t) {
            for (var r = 0, n = 0; n < t.length; ++n) r += t[n].height;
            this.insertInner(e - this.first, t, r);
          },
          remove: function (e, t) {
            this.removeInner(e - this.first, t);
          },
          getValue: function (e) {
            var t = Ge(this, this.first, this.first + this.size);
            return !1 === e ? t : t.join(e || this.lineSeparator());
          },
          setValue: Jn(function (e) {
            var t = et(this.first, 0),
              r = this.first + this.size - 1;
            ao(
              this,
              {
                from: t,
                to: et(r, Ve(this, r).text.length),
                text: this.splitLines(e),
                origin: "setValue",
                full: !0
              },
              !0
            ),
              this.cm && An(this.cm, 0, 0),
              Zi(this, wi(t), H);
          }),
          replaceRange: function (e, t, r, n) {
            (t = lt(this, t)), (r = r ? lt(this, r) : t), po(this, e, t, r, n);
          },
          getRange: function (e, t, r) {
            var n = Ke(this, lt(this, e), lt(this, t));
            return !1 === r ? n : n.join(r || this.lineSeparator());
          },
          getLine: function (e) {
            var t = this.getLineHandle(e);
            return t && t.text;
          },
          getLineHandle: function (e) {
            if (Qe(this, e)) return Ve(this, e);
          },
          getLineNumber: function (e) {
            return Ze(e);
          },
          getLineHandleVisualStart: function (e) {
            return "number" == typeof e && (e = Ve(this, e)), Pt(e);
          },
          lineCount: function () {
            return this.size;
          },
          firstLine: function () {
            return this.first;
          },
          lastLine: function () {
            return this.first + this.size - 1;
          },
          clipPos: function (e) {
            return lt(this, e);
          },
          getCursor: function (e) {
            var t = this.sel.primary();
            return null == e || "head" == e
              ? t.head
              : "anchor" == e
              ? t.anchor
              : "end" == e || "to" == e || !1 === e
              ? t.to()
              : t.from();
          },
          listSelections: function () {
            return this.sel.ranges;
          },
          somethingSelected: function () {
            return this.sel.somethingSelected();
          },
          setCursor: Jn(function (e, t, r) {
            Gi(
              this,
              lt(this, "number" == typeof e ? et(e, t || 0) : e),
              null,
              r
            );
          }),
          setSelection: Jn(function (e, t, r) {
            Gi(this, lt(this, e), lt(this, t || e), r);
          }),
          extendSelection: Jn(function (e, t, r) {
            Ui(this, lt(this, e), t && lt(this, t), r);
          }),
          extendSelections: Jn(function (e, t) {
            Vi(this, st(this, e), t);
          }),
          extendSelectionsBy: Jn(function (e, t) {
            var r = Z(this.sel.ranges, e);
            Vi(this, st(this, r), t);
          }),
          setSelections: Jn(function (e, t, r) {
            if (e.length) {
              for (var n = [], i = 0; i < e.length; i++)
                n[i] = new xi(lt(this, e[i].anchor), lt(this, e[i].head));
              null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
                Zi(this, ki(this.cm, n, t), r);
            }
          }),
          addSelection: Jn(function (e, t, r) {
            var n = this.sel.ranges.slice(0);
            n.push(new xi(lt(this, e), lt(this, t || e))),
              Zi(this, ki(this.cm, n, n.length - 1), r);
          }),
          getSelection: function (e) {
            for (var t, r = this.sel.ranges, n = 0; n < r.length; n++) {
              var i = Ke(this, r[n].from(), r[n].to());
              t = t ? t.concat(i) : i;
            }
            return !1 === e ? t : t.join(e || this.lineSeparator());
          },
          getSelections: function (e) {
            for (var t = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
              var i = Ke(this, r[n].from(), r[n].to());
              !1 !== e && (i = i.join(e || this.lineSeparator())), (t[n] = i);
            }
            return t;
          },
          replaceSelection: function (e, t, r) {
            for (var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = e;
            this.replaceSelections(n, t, r || "+input");
          },
          replaceSelections: Jn(function (e, t, r) {
            for (var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
              var a = i.ranges[o];
              n[o] = {
                from: a.from(),
                to: a.to(),
                text: this.splitLines(e[o]),
                origin: r
              };
            }
            for (
              var l =
                  t &&
                  "end" != t &&
                  (function (e, t, r) {
                    for (
                      var n = [], i = et(e.first, 0), o = i, a = 0;
                      a < t.length;
                      a++
                    ) {
                      var l = t[a],
                        s = Mi(l.from, i, o),
                        c = Mi(_i(l), i, o);
                      if (((i = l.to), (o = c), "around" == r)) {
                        var u = e.sel.ranges[a],
                          d = tt(u.head, u.anchor) < 0;
                        n[a] = new xi(d ? c : s, d ? s : c);
                      } else n[a] = new xi(s, s);
                    }
                    return new yi(n, e.sel.primIndex);
                  })(this, n, t),
                s = n.length - 1;
              s >= 0;
              s--
            )
              ao(this, n[s]);
            l ? Xi(this, l) : this.cm && zn(this.cm);
          }),
          undo: Jn(function () {
            so(this, "undo");
          }),
          redo: Jn(function () {
            so(this, "redo");
          }),
          undoSelection: Jn(function () {
            so(this, "undo", !0);
          }),
          redoSelection: Jn(function () {
            so(this, "redo", !0);
          }),
          setExtending: function (e) {
            this.extend = e;
          },
          getExtending: function () {
            return this.extend;
          },
          historySize: function () {
            for (
              var e = this.history, t = 0, r = 0, n = 0;
              n < e.done.length;
              n++
            )
              e.done[n].ranges || ++t;
            for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++r;
            return { undo: t, redo: r };
          },
          clearHistory: function () {
            var e = this;
            (this.history = new Ni(this.history.maxGeneration)),
              Di(
                this,
                function (t) {
                  return (t.history = e.history);
                },
                !0
              );
          },
          markClean: function () {
            this.cleanGeneration = this.changeGeneration(!0);
          },
          changeGeneration: function (e) {
            return (
              e &&
                (this.history.lastOp =
                  this.history.lastSelOp =
                  this.history.lastOrigin =
                    null),
              this.history.generation
            );
          },
          isClean: function (e) {
            return this.history.generation == (e || this.cleanGeneration);
          },
          getHistory: function () {
            return {
              done: Hi(this.history.done),
              undone: Hi(this.history.undone)
            };
          },
          setHistory: function (e) {
            var t = (this.history = new Ni(this.history.maxGeneration));
            (t.done = Hi(e.done.slice(0), null, !0)),
              (t.undone = Hi(e.undone.slice(0), null, !0));
          },
          setGutterMarker: Jn(function (e, t, r) {
            return go(this, e, "gutter", function (e) {
              var n = e.gutterMarkers || (e.gutterMarkers = {});
              return (n[t] = r), !r && re(n) && (e.gutterMarkers = null), !0;
            });
          }),
          clearGutter: Jn(function (e) {
            var t = this;
            this.iter(function (r) {
              r.gutterMarkers &&
                r.gutterMarkers[e] &&
                go(t, r, "gutter", function () {
                  return (
                    (r.gutterMarkers[e] = null),
                    re(r.gutterMarkers) && (r.gutterMarkers = null),
                    !0
                  );
                });
            });
          }),
          lineInfo: function (e) {
            var t;
            if ("number" == typeof e) {
              if (!Qe(this, e)) return null;
              if (((t = e), !(e = Ve(this, e)))) return null;
            } else if (null == (t = Ze(e))) return null;
            return {
              line: t,
              handle: e,
              text: e.text,
              gutterMarkers: e.gutterMarkers,
              textClass: e.textClass,
              bgClass: e.bgClass,
              wrapClass: e.wrapClass,
              widgets: e.widgets
            };
          },
          addLineClass: Jn(function (e, t, r) {
            return go(
              this,
              e,
              "gutter" == t ? "gutter" : "class",
              function (e) {
                var n =
                  "text" == t
                    ? "textClass"
                    : "background" == t
                    ? "bgClass"
                    : "gutter" == t
                    ? "gutterClass"
                    : "wrapClass";
                if (e[n]) {
                  if (C(r).test(e[n])) return !1;
                  e[n] += " " + r;
                } else e[n] = r;
                return !0;
              }
            );
          }),
          removeLineClass: Jn(function (e, t, r) {
            return go(
              this,
              e,
              "gutter" == t ? "gutter" : "class",
              function (e) {
                var n =
                    "text" == t
                      ? "textClass"
                      : "background" == t
                      ? "bgClass"
                      : "gutter" == t
                      ? "gutterClass"
                      : "wrapClass",
                  i = e[n];
                if (!i) return !1;
                if (null == r) e[n] = null;
                else {
                  var o = i.match(C(r));
                  if (!o) return !1;
                  var a = o.index + o[0].length;
                  e[n] =
                    i.slice(0, o.index) +
                      (o.index && a != i.length ? " " : "") +
                      i.slice(a) || null;
                }
                return !0;
              }
            );
          }),
          addLineWidget: Jn(function (e, t, r) {
            return (function (e, t, r, n) {
              var i = new yo(e, r, n),
                o = e.cm;
              return (
                o && i.noHScroll && (o.display.alignWidgets = !0),
                go(e, t, "widget", function (t) {
                  var r = t.widgets || (t.widgets = []);
                  if (
                    (null == i.insertAt
                      ? r.push(i)
                      : r.splice(
                          Math.min(r.length - 1, Math.max(0, i.insertAt)),
                          0,
                          i
                        ),
                    (i.line = t),
                    o && !Wt(e, t))
                  ) {
                    var n = Ht(t) < e.scrollTop;
                    Xe(t, t.height + xr(i)),
                      n && Tn(o, i.height),
                      (o.curOp.forceUpdate = !0);
                  }
                  return !0;
                }),
                o &&
                  lr(
                    o,
                    "lineWidgetAdded",
                    o,
                    i,
                    "number" == typeof t ? t : Ze(t)
                  ),
                i
              );
            })(this, e, t, r);
          }),
          removeLineWidget: function (e) {
            e.clear();
          },
          markText: function (e, t, r) {
            return _o(
              this,
              lt(this, e),
              lt(this, t),
              r,
              (r && r.type) || "range"
            );
          },
          setBookmark: function (e, t) {
            var r = {
              replacedWith: t && (null == t.nodeType ? t.widget : t),
              insertLeft: t && t.insertLeft,
              clearWhenEmpty: !1,
              shared: t && t.shared,
              handleMouseEvents: t && t.handleMouseEvents
            };
            return _o(this, (e = lt(this, e)), e, r, "bookmark");
          },
          findMarksAt: function (e) {
            e = lt(this, e);
            var t = [],
              r = Ve(this, e.line).markedSpans;
            if (r)
              for (var n = 0; n < r.length; ++n) {
                var i = r[n];
                (null == i.from || i.from <= e.ch) &&
                  (null == i.to || i.to >= e.ch) &&
                  t.push(i.marker.parent || i.marker);
              }
            return t;
          },
          findMarks: function (e, t, r) {
            (e = lt(this, e)), (t = lt(this, t));
            var n = [],
              i = e.line;
            return (
              this.iter(e.line, t.line + 1, function (o) {
                var a = o.markedSpans;
                if (a)
                  for (var l = 0; l < a.length; l++) {
                    var s = a[l];
                    (null != s.to && i == e.line && e.ch >= s.to) ||
                      (null == s.from && i != e.line) ||
                      (null != s.from && i == t.line && s.from >= t.ch) ||
                      (r && !r(s.marker)) ||
                      n.push(s.marker.parent || s.marker);
                  }
                ++i;
              }),
              n
            );
          },
          getAllMarks: function () {
            var e = [];
            return (
              this.iter(function (t) {
                var r = t.markedSpans;
                if (r)
                  for (var n = 0; n < r.length; ++n)
                    null != r[n].from && e.push(r[n].marker);
              }),
              e
            );
          },
          posFromIndex: function (e) {
            var t,
              r = this.first,
              n = this.lineSeparator().length;
            return (
              this.iter(function (i) {
                var o = i.text.length + n;
                if (o > e) return (t = e), !0;
                (e -= o), ++r;
              }),
              lt(this, et(r, t))
            );
          },
          indexFromPos: function (e) {
            var t = (e = lt(this, e)).ch;
            if (e.line < this.first || e.ch < 0) return 0;
            var r = this.lineSeparator().length;
            return (
              this.iter(this.first, e.line, function (e) {
                t += e.text.length + r;
              }),
              t
            );
          },
          copy: function (e) {
            var t = new To(
              Ge(this, this.first, this.first + this.size),
              this.modeOption,
              this.first,
              this.lineSep,
              this.direction
            );
            return (
              (t.scrollTop = this.scrollTop),
              (t.scrollLeft = this.scrollLeft),
              (t.sel = this.sel),
              (t.extend = !1),
              e &&
                ((t.history.undoDepth = this.history.undoDepth),
                t.setHistory(this.getHistory())),
              t
            );
          },
          linkedDoc: function (e) {
            e || (e = {});
            var t = this.first,
              r = this.first + this.size;
            null != e.from && e.from > t && (t = e.from),
              null != e.to && e.to < r && (r = e.to);
            var n = new To(
              Ge(this, t, r),
              e.mode || this.modeOption,
              t,
              this.lineSep,
              this.direction
            );
            return (
              e.sharedHist && (n.history = this.history),
              (this.linked || (this.linked = [])).push({
                doc: n,
                sharedHist: e.sharedHist
              }),
              (n.linked = [
                { doc: this, isParent: !0, sharedHist: e.sharedHist }
              ]),
              (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = t[r],
                    i = n.find(),
                    o = e.clipPos(i.from),
                    a = e.clipPos(i.to);
                  if (tt(o, a)) {
                    var l = _o(e, o, a, n.primary, n.primary.type);
                    n.markers.push(l), (l.parent = n);
                  }
                }
              })(n, So(this)),
              n
            );
          },
          unlinkDoc: function (e) {
            if ((e instanceof Ca && (e = e.doc), this.linked))
              for (var t = 0; t < this.linked.length; ++t) {
                var r = this.linked[t];
                if (r.doc == e) {
                  this.linked.splice(t, 1), e.unlinkDoc(this), Mo(So(this));
                  break;
                }
              }
            if (e.history == this.history) {
              var n = [e.id];
              Di(
                e,
                function (e) {
                  return n.push(e.id);
                },
                !0
              ),
                (e.history = new Ni(null)),
                (e.history.done = Hi(this.history.done, n)),
                (e.history.undone = Hi(this.history.undone, n));
            }
          },
          iterLinkedDocs: function (e) {
            Di(this, e);
          },
          getMode: function () {
            return this.mode;
          },
          getEditor: function () {
            return this.cm;
          },
          splitLines: function (e) {
            return this.lineSep ? e.split(this.lineSep) : Ee(e);
          },
          lineSeparator: function () {
            return this.lineSep || "\n";
          },
          setDirection: Jn(function (e) {
            var t;
            "rtl" != e && (e = "ltr"),
              e != this.direction &&
                ((this.direction = e),
                this.iter(function (e) {
                  return (e.order = null);
                }),
                this.cm &&
                  Zn((t = this.cm), function () {
                    Fi(t), cn(t);
                  }));
          })
        })),
          (To.prototype.eachLine = To.prototype.iter);
        var zo = 0;
        function Ao(e) {
          var t = this;
          if ((Do(t), !ge(t, e) && !kr(t.display, e))) {
            xe(e), a && (zo = +new Date());
            var r = ln(t, e, !0),
              n = e.dataTransfer.files;
            if (r && !t.isReadOnly())
              if (n && n.length && window.FileReader && window.File)
                for (
                  var i = n.length,
                    o = Array(i),
                    l = 0,
                    s = function () {
                      ++l == i &&
                        Yn(t, function () {
                          var e = {
                            from: (r = lt(t.doc, r)),
                            to: r,
                            text: t.doc.splitLines(
                              o
                                .filter(function (e) {
                                  return null != e;
                                })
                                .join(t.doc.lineSeparator())
                            ),
                            origin: "paste"
                          };
                          ao(t.doc, e), Xi(t.doc, wi(r, _i(e)));
                        })();
                    },
                    c = function (e, r) {
                      if (
                        t.options.allowDropFileTypes &&
                        -1 == B(t.options.allowDropFileTypes, e.type)
                      )
                        s();
                      else {
                        var n = new FileReader();
                        (n.onerror = function () {
                          return s();
                        }),
                          (n.onload = function () {
                            var e = n.result;
                            /[\x00-\x08\x0e-\x1f]{2}/.test(e)
                              ? s()
                              : ((o[r] = e), s());
                          }),
                          n.readAsText(e);
                      }
                    },
                    u = 0;
                  u < n.length;
                  u++
                )
                  c(n[u], u);
              else {
                if (t.state.draggingText && t.doc.sel.contains(r) > -1)
                  return (
                    t.state.draggingText(e),
                    void setTimeout(function () {
                      return t.display.input.focus();
                    }, 20)
                  );
                try {
                  var d = e.dataTransfer.getData("Text");
                  if (d) {
                    var p;
                    if (
                      (t.state.draggingText &&
                        !t.state.draggingText.copy &&
                        (p = t.listSelections()),
                      Yi(t.doc, wi(r, r)),
                      p)
                    )
                      for (var f = 0; f < p.length; ++f)
                        po(t.doc, "", p[f].anchor, p[f].head, "drag");
                    t.replaceSelection(d, "around", "paste"),
                      t.display.input.focus();
                  }
                } catch (e) {}
              }
          }
        }
        function Do(e) {
          e.display.dragCursor &&
            (e.display.lineSpace.removeChild(e.display.dragCursor),
            (e.display.dragCursor = null));
        }
        function Eo(e) {
          if (document.getElementsByClassName) {
            for (
              var t = document.getElementsByClassName("CodeMirror"),
                r = [],
                n = 0;
              n < t.length;
              n++
            ) {
              var i = t[n].CodeMirror;
              i && r.push(i);
            }
            r.length &&
              r[0].operation(function () {
                for (var t = 0; t < r.length; t++) e(r[t]);
              });
          }
        }
        var Fo = !1;
        function No() {
          var e;
          Fo ||
            (pe(window, "resize", function () {
              null == e &&
                (e = setTimeout(function () {
                  (e = null), Eo(Oo);
                }, 100));
            }),
            pe(window, "blur", function () {
              return Eo(_n);
            }),
            (Fo = !0));
        }
        function Oo(e) {
          var t = e.display;
          (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
            (t.scrollbarsClipped = !1),
            e.setSize();
        }
        for (
          var qo = {
              3: "Pause",
              8: "Backspace",
              9: "Tab",
              13: "Enter",
              16: "Shift",
              17: "Ctrl",
              18: "Alt",
              19: "Pause",
              20: "CapsLock",
              27: "Esc",
              32: "Space",
              33: "PageUp",
              34: "PageDown",
              35: "End",
              36: "Home",
              37: "Left",
              38: "Up",
              39: "Right",
              40: "Down",
              44: "PrintScrn",
              45: "Insert",
              46: "Delete",
              59: ";",
              61: "=",
              91: "Mod",
              92: "Mod",
              93: "Mod",
              106: "*",
              107: "=",
              109: "-",
              110: ".",
              111: "/",
              145: "ScrollLock",
              173: "-",
              186: ";",
              187: "=",
              188: ",",
              189: "-",
              190: ".",
              191: "/",
              192: "`",
              219: "[",
              220: "\\",
              221: "]",
              222: "'",
              63232: "Up",
              63233: "Down",
              63234: "Left",
              63235: "Right",
              63272: "Delete",
              63273: "Home",
              63275: "End",
              63276: "PageUp",
              63277: "PageDown",
              63302: "Insert"
            },
            Io = 0;
          Io < 10;
          Io++
        )
          qo[Io + 48] = qo[Io + 96] = String(Io);
        for (var Po = 65; Po <= 90; Po++) qo[Po] = String.fromCharCode(Po);
        for (var jo = 1; jo <= 12; jo++)
          qo[jo + 111] = qo[jo + 63235] = "F" + jo;
        var Bo = {};
        function Wo(e) {
          var t,
            r,
            n,
            i,
            o = e.split(/-(?!$)/);
          e = o[o.length - 1];
          for (var a = 0; a < o.length - 1; a++) {
            var l = o[a];
            if (/^(cmd|meta|m)$/i.test(l)) i = !0;
            else if (/^a(lt)?$/i.test(l)) t = !0;
            else if (/^(c|ctrl|control)$/i.test(l)) r = !0;
            else {
              if (!/^s(hift)?$/i.test(l))
                throw new Error("Unrecognized modifier name: " + l);
              n = !0;
            }
          }
          return (
            t && (e = "Alt-" + e),
            r && (e = "Ctrl-" + e),
            i && (e = "Cmd-" + e),
            n && (e = "Shift-" + e),
            e
          );
        }
        function Ro(e) {
          var t = {};
          for (var r in e)
            if (e.hasOwnProperty(r)) {
              var n = e[r];
              if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;
              if ("..." == n) {
                delete e[r];
                continue;
              }
              for (var i = Z(r.split(" "), Wo), o = 0; o < i.length; o++) {
                var a = void 0,
                  l = void 0;
                o == i.length - 1
                  ? ((l = i.join(" ")), (a = n))
                  : ((l = i.slice(0, o + 1).join(" ")), (a = "..."));
                var s = t[l];
                if (s) {
                  if (s != a) throw new Error("Inconsistent bindings for " + l);
                } else t[l] = a;
              }
              delete e[r];
            }
          for (var c in t) e[c] = t[c];
          return e;
        }
        function Ho(e, t, r, n) {
          var i = (t = Ko(t)).call ? t.call(e, n) : t[e];
          if (!1 === i) return "nothing";
          if ("..." === i) return "multi";
          if (null != i && r(i)) return "handled";
          if (t.fallthrough) {
            if (
              "[object Array]" != Object.prototype.toString.call(t.fallthrough)
            )
              return Ho(e, t.fallthrough, r, n);
            for (var o = 0; o < t.fallthrough.length; o++) {
              var a = Ho(e, t.fallthrough[o], r, n);
              if (a) return a;
            }
          }
        }
        function $o(e) {
          var t = "string" == typeof e ? e : qo[e.keyCode];
          return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
        }
        function Uo(e, t, r) {
          var n = e;
          return (
            t.altKey && "Alt" != n && (e = "Alt-" + e),
            (w ? t.metaKey : t.ctrlKey) && "Ctrl" != n && (e = "Ctrl-" + e),
            (w ? t.ctrlKey : t.metaKey) && "Cmd" != n && (e = "Cmd-" + e),
            !r && t.shiftKey && "Shift" != n && (e = "Shift-" + e),
            e
          );
        }
        function Vo(e, t) {
          if (d && 34 == e.keyCode && e.char) return !1;
          var r = qo[e.keyCode];
          return (
            null != r &&
            !e.altGraphKey &&
            (3 == e.keyCode && e.code && (r = e.code), Uo(r, e, t))
          );
        }
        function Ko(e) {
          return "string" == typeof e ? Bo[e] : e;
        }
        function Go(e, t) {
          for (var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
            for (var o = t(r[i]); n.length && tt(o.from, X(n).to) <= 0; ) {
              var a = n.pop();
              if (tt(a.from, o.from) < 0) {
                o.from = a.from;
                break;
              }
            }
            n.push(o);
          }
          Zn(e, function () {
            for (var t = n.length - 1; t >= 0; t--)
              po(e.doc, "", n[t].from, n[t].to, "+delete");
            zn(e);
          });
        }
        function Xo(e, t, r) {
          var n = oe(e.text, t + r, r);
          return n < 0 || n > e.text.length ? null : n;
        }
        function Zo(e, t, r) {
          var n = Xo(e, t.ch, r);
          return null == n
            ? null
            : new et(t.line, n, r < 0 ? "after" : "before");
        }
        function Yo(e, t, r, n, i) {
          if (e) {
            "rtl" == t.getOption("direction") && (i = -i);
            var o = ue(r, t.doc.direction);
            if (o) {
              var a,
                l = i < 0 ? X(o) : o[0],
                s = i < 0 == (1 == l.level),
                c = s ? "after" : "before";
              if (l.level > 0 || "rtl" == t.doc.direction) {
                var u = Dr(t, r);
                a = i < 0 ? r.text.length - 1 : 0;
                var d = Er(t, u, a).top;
                (a = ae(
                  function (e) {
                    return Er(t, u, e).top == d;
                  },
                  i < 0 == (1 == l.level) ? l.from : l.to - 1,
                  a
                )),
                  "before" == c && (a = Xo(r, a, 1));
              } else a = i < 0 ? l.to : l.from;
              return new et(n, a, c);
            }
          }
          return new et(
            n,
            i < 0 ? r.text.length : 0,
            i < 0 ? "before" : "after"
          );
        }
        (Bo.basic = {
          Left: "goCharLeft",
          Right: "goCharRight",
          Up: "goLineUp",
          Down: "goLineDown",
          End: "goLineEnd",
          Home: "goLineStartSmart",
          PageUp: "goPageUp",
          PageDown: "goPageDown",
          Delete: "delCharAfter",
          Backspace: "delCharBefore",
          "Shift-Backspace": "delCharBefore",
          Tab: "defaultTab",
          "Shift-Tab": "indentAuto",
          Enter: "newlineAndIndent",
          Insert: "toggleOverwrite",
          Esc: "singleSelection"
        }),
          (Bo.pcDefault = {
            "Ctrl-A": "selectAll",
            "Ctrl-D": "deleteLine",
            "Ctrl-Z": "undo",
            "Shift-Ctrl-Z": "redo",
            "Ctrl-Y": "redo",
            "Ctrl-Home": "goDocStart",
            "Ctrl-End": "goDocEnd",
            "Ctrl-Up": "goLineUp",
            "Ctrl-Down": "goLineDown",
            "Ctrl-Left": "goGroupLeft",
            "Ctrl-Right": "goGroupRight",
            "Alt-Left": "goLineStart",
            "Alt-Right": "goLineEnd",
            "Ctrl-Backspace": "delGroupBefore",
            "Ctrl-Delete": "delGroupAfter",
            "Ctrl-S": "save",
            "Ctrl-F": "find",
            "Ctrl-G": "findNext",
            "Shift-Ctrl-G": "findPrev",
            "Shift-Ctrl-F": "replace",
            "Shift-Ctrl-R": "replaceAll",
            "Ctrl-[": "indentLess",
            "Ctrl-]": "indentMore",
            "Ctrl-U": "undoSelection",
            "Shift-Ctrl-U": "redoSelection",
            "Alt-U": "redoSelection",
            fallthrough: "basic"
          }),
          (Bo.emacsy = {
            "Ctrl-F": "goCharRight",
            "Ctrl-B": "goCharLeft",
            "Ctrl-P": "goLineUp",
            "Ctrl-N": "goLineDown",
            "Alt-F": "goWordRight",
            "Alt-B": "goWordLeft",
            "Ctrl-A": "goLineStart",
            "Ctrl-E": "goLineEnd",
            "Ctrl-V": "goPageDown",
            "Shift-Ctrl-V": "goPageUp",
            "Ctrl-D": "delCharAfter",
            "Ctrl-H": "delCharBefore",
            "Alt-D": "delWordAfter",
            "Alt-Backspace": "delWordBefore",
            "Ctrl-K": "killLine",
            "Ctrl-T": "transposeChars",
            "Ctrl-O": "openLine"
          }),
          (Bo.macDefault = {
            "Cmd-A": "selectAll",
            "Cmd-D": "deleteLine",
            "Cmd-Z": "undo",
            "Shift-Cmd-Z": "redo",
            "Cmd-Y": "redo",
            "Cmd-Home": "goDocStart",
            "Cmd-Up": "goDocStart",
            "Cmd-End": "goDocEnd",
            "Cmd-Down": "goDocEnd",
            "Alt-Left": "goGroupLeft",
            "Alt-Right": "goGroupRight",
            "Cmd-Left": "goLineLeft",
            "Cmd-Right": "goLineRight",
            "Alt-Backspace": "delGroupBefore",
            "Ctrl-Alt-Backspace": "delGroupAfter",
            "Alt-Delete": "delGroupAfter",
            "Cmd-S": "save",
            "Cmd-F": "find",
            "Cmd-G": "findNext",
            "Shift-Cmd-G": "findPrev",
            "Cmd-Alt-F": "replace",
            "Shift-Cmd-Alt-F": "replaceAll",
            "Cmd-[": "indentLess",
            "Cmd-]": "indentMore",
            "Cmd-Backspace": "delWrappedLineLeft",
            "Cmd-Delete": "delWrappedLineRight",
            "Cmd-U": "undoSelection",
            "Shift-Cmd-U": "redoSelection",
            "Ctrl-Up": "goDocStart",
            "Ctrl-Down": "goDocEnd",
            fallthrough: ["basic", "emacsy"]
          }),
          (Bo.default = b ? Bo.macDefault : Bo.pcDefault);
        var Qo = {
          selectAll: io,
          singleSelection: function (e) {
            return e.setSelection(
              e.getCursor("anchor"),
              e.getCursor("head"),
              H
            );
          },
          killLine: function (e) {
            return Go(e, function (t) {
              if (t.empty()) {
                var r = Ve(e.doc, t.head.line).text.length;
                return t.head.ch == r && t.head.line < e.lastLine()
                  ? { from: t.head, to: et(t.head.line + 1, 0) }
                  : { from: t.head, to: et(t.head.line, r) };
              }
              return { from: t.from(), to: t.to() };
            });
          },
          deleteLine: function (e) {
            return Go(e, function (t) {
              return {
                from: et(t.from().line, 0),
                to: lt(e.doc, et(t.to().line + 1, 0))
              };
            });
          },
          delLineLeft: function (e) {
            return Go(e, function (e) {
              return { from: et(e.from().line, 0), to: e.from() };
            });
          },
          delWrappedLineLeft: function (e) {
            return Go(e, function (t) {
              var r = e.charCoords(t.head, "div").top + 5,
                n = e.coordsChar({ left: 0, top: r }, "div");
              return { from: n, to: t.from() };
            });
          },
          delWrappedLineRight: function (e) {
            return Go(e, function (t) {
              var r = e.charCoords(t.head, "div").top + 5,
                n = e.coordsChar(
                  { left: e.display.lineDiv.offsetWidth + 100, top: r },
                  "div"
                );
              return { from: t.from(), to: n };
            });
          },
          undo: function (e) {
            return e.undo();
          },
          redo: function (e) {
            return e.redo();
          },
          undoSelection: function (e) {
            return e.undoSelection();
          },
          redoSelection: function (e) {
            return e.redoSelection();
          },
          goDocStart: function (e) {
            return e.extendSelection(et(e.firstLine(), 0));
          },
          goDocEnd: function (e) {
            return e.extendSelection(et(e.lastLine()));
          },
          goLineStart: function (e) {
            return e.extendSelectionsBy(
              function (t) {
                return Jo(e, t.head.line);
              },
              { origin: "+move", bias: 1 }
            );
          },
          goLineStartSmart: function (e) {
            return e.extendSelectionsBy(
              function (t) {
                return ea(e, t.head);
              },
              { origin: "+move", bias: 1 }
            );
          },
          goLineEnd: function (e) {
            return e.extendSelectionsBy(
              function (t) {
                return (function (e, t) {
                  var r = Ve(e.doc, t),
                    n = (function (e) {
                      for (var t; (t = Ot(e)); ) e = t.find(1, !0).line;
                      return e;
                    })(r);
                  return n != r && (t = Ze(n)), Yo(!0, e, r, t, -1);
                })(e, t.head.line);
              },
              { origin: "+move", bias: -1 }
            );
          },
          goLineRight: function (e) {
            return e.extendSelectionsBy(function (t) {
              var r = e.cursorCoords(t.head, "div").top + 5;
              return e.coordsChar(
                { left: e.display.lineDiv.offsetWidth + 100, top: r },
                "div"
              );
            }, U);
          },
          goLineLeft: function (e) {
            return e.extendSelectionsBy(function (t) {
              var r = e.cursorCoords(t.head, "div").top + 5;
              return e.coordsChar({ left: 0, top: r }, "div");
            }, U);
          },
          goLineLeftSmart: function (e) {
            return e.extendSelectionsBy(function (t) {
              var r = e.cursorCoords(t.head, "div").top + 5,
                n = e.coordsChar({ left: 0, top: r }, "div");
              return n.ch < e.getLine(n.line).search(/\S/) ? ea(e, t.head) : n;
            }, U);
          },
          goLineUp: function (e) {
            return e.moveV(-1, "line");
          },
          goLineDown: function (e) {
            return e.moveV(1, "line");
          },
          goPageUp: function (e) {
            return e.moveV(-1, "page");
          },
          goPageDown: function (e) {
            return e.moveV(1, "page");
          },
          goCharLeft: function (e) {
            return e.moveH(-1, "char");
          },
          goCharRight: function (e) {
            return e.moveH(1, "char");
          },
          goColumnLeft: function (e) {
            return e.moveH(-1, "column");
          },
          goColumnRight: function (e) {
            return e.moveH(1, "column");
          },
          goWordLeft: function (e) {
            return e.moveH(-1, "word");
          },
          goGroupRight: function (e) {
            return e.moveH(1, "group");
          },
          goGroupLeft: function (e) {
            return e.moveH(-1, "group");
          },
          goWordRight: function (e) {
            return e.moveH(1, "word");
          },
          delCharBefore: function (e) {
            return e.deleteH(-1, "char");
          },
          delCharAfter: function (e) {
            return e.deleteH(1, "char");
          },
          delWordBefore: function (e) {
            return e.deleteH(-1, "word");
          },
          delWordAfter: function (e) {
            return e.deleteH(1, "word");
          },
          delGroupBefore: function (e) {
            return e.deleteH(-1, "group");
          },
          delGroupAfter: function (e) {
            return e.deleteH(1, "group");
          },
          indentAuto: function (e) {
            return e.indentSelection("smart");
          },
          indentMore: function (e) {
            return e.indentSelection("add");
          },
          indentLess: function (e) {
            return e.indentSelection("subtract");
          },
          insertTab: function (e) {
            return e.replaceSelection("\t");
          },
          insertSoftTab: function (e) {
            for (
              var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0;
              i < r.length;
              i++
            ) {
              var o = r[i].from(),
                a = P(e.getLine(o.line), o.ch, n);
              t.push(G(n - (a % n)));
            }
            e.replaceSelections(t);
          },
          defaultTab: function (e) {
            e.somethingSelected()
              ? e.indentSelection("add")
              : e.execCommand("insertTab");
          },
          transposeChars: function (e) {
            return Zn(e, function () {
              for (var t = e.listSelections(), r = [], n = 0; n < t.length; n++)
                if (t[n].empty()) {
                  var i = t[n].head,
                    o = Ve(e.doc, i.line).text;
                  if (o)
                    if (
                      (i.ch == o.length && (i = new et(i.line, i.ch - 1)),
                      i.ch > 0)
                    )
                      (i = new et(i.line, i.ch + 1)),
                        e.replaceRange(
                          o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                          et(i.line, i.ch - 2),
                          i,
                          "+transpose"
                        );
                    else if (i.line > e.doc.first) {
                      var a = Ve(e.doc, i.line - 1).text;
                      a &&
                        ((i = new et(i.line, 1)),
                        e.replaceRange(
                          o.charAt(0) +
                            e.doc.lineSeparator() +
                            a.charAt(a.length - 1),
                          et(i.line - 1, a.length - 1),
                          i,
                          "+transpose"
                        ));
                    }
                  r.push(new xi(i, i));
                }
              e.setSelections(r);
            });
          },
          newlineAndIndent: function (e) {
            return Zn(e, function () {
              for (var t = e.listSelections(), r = t.length - 1; r >= 0; r--)
                e.replaceRange(
                  e.doc.lineSeparator(),
                  t[r].anchor,
                  t[r].head,
                  "+input"
                );
              t = e.listSelections();
              for (var n = 0; n < t.length; n++)
                e.indentLine(t[n].from().line, null, !0);
              zn(e);
            });
          },
          openLine: function (e) {
            return e.replaceSelection("\n", "start");
          },
          toggleOverwrite: function (e) {
            return e.toggleOverwrite();
          }
        };
        function Jo(e, t) {
          var r = Ve(e.doc, t),
            n = Pt(r);
          return n != r && (t = Ze(n)), Yo(!0, e, n, t, 1);
        }
        function ea(e, t) {
          var r = Jo(e, t.line),
            n = Ve(e.doc, r.line),
            i = ue(n, e.doc.direction);
          if (!i || 0 == i[0].level) {
            var o = Math.max(0, n.text.search(/\S/)),
              a = t.line == r.line && t.ch <= o && t.ch;
            return et(r.line, a ? 0 : o, r.sticky);
          }
          return r;
        }
        function ta(e, t, r) {
          if ("string" == typeof t && !(t = Qo[t])) return !1;
          e.display.input.ensurePolled();
          var n = e.display.shift,
            i = !1;
          try {
            e.isReadOnly() && (e.state.suppressEdits = !0),
              r && (e.display.shift = !1),
              (i = t(e) != R);
          } finally {
            (e.display.shift = n), (e.state.suppressEdits = !1);
          }
          return i;
        }
        var ra = new j();
        function na(e, t, r, n) {
          var i = e.state.keySeq;
          if (i) {
            if ($o(t)) return "handled";
            if (
              (/\'$/.test(t)
                ? (e.state.keySeq = null)
                : ra.set(50, function () {
                    e.state.keySeq == i &&
                      ((e.state.keySeq = null), e.display.input.reset());
                  }),
              ia(e, i + " " + t, r, n))
            )
              return !0;
          }
          return ia(e, t, r, n);
        }
        function ia(e, t, r, n) {
          var i = (function (e, t, r) {
            for (var n = 0; n < e.state.keyMaps.length; n++) {
              var i = Ho(t, e.state.keyMaps[n], r, e);
              if (i) return i;
            }
            return (
              (e.options.extraKeys && Ho(t, e.options.extraKeys, r, e)) ||
              Ho(t, e.options.keyMap, r, e)
            );
          })(e, t, n);
          return (
            "multi" == i && (e.state.keySeq = t),
            "handled" == i && lr(e, "keyHandled", e, t, r),
            ("handled" != i && "multi" != i) || (xe(r), yn(e)),
            !!i
          );
        }
        function oa(e, t) {
          var r = Vo(t, !0);
          return (
            !!r &&
            (t.shiftKey && !e.state.keySeq
              ? na(e, "Shift-" + r, t, function (t) {
                  return ta(e, t, !0);
                }) ||
                na(e, r, t, function (t) {
                  if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion)
                    return ta(e, t);
                })
              : na(e, r, t, function (t) {
                  return ta(e, t);
                }))
          );
        }
        var aa = null;
        function la(e) {
          var t = this;
          if (((t.curOp.focus = E()), !ge(t, e))) {
            a && l < 11 && 27 == e.keyCode && (e.returnValue = !1);
            var n = e.keyCode;
            t.display.shift = 16 == n || e.shiftKey;
            var i = oa(t, e);
            d &&
              ((aa = i ? n : null),
              !i &&
                88 == n &&
                !Ne &&
                (b ? e.metaKey : e.ctrlKey) &&
                t.replaceSelection("", null, "cut")),
              r &&
                !b &&
                !i &&
                46 == n &&
                e.shiftKey &&
                !e.ctrlKey &&
                document.execCommand &&
                document.execCommand("cut"),
              18 != n ||
                /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) ||
                (function (e) {
                  var t = e.display.lineDiv;
                  function r(e) {
                    (18 != e.keyCode && e.altKey) ||
                      (M(t, "CodeMirror-crosshair"),
                      me(document, "keyup", r),
                      me(document, "mouseover", r));
                  }
                  F(t, "CodeMirror-crosshair"),
                    pe(document, "keyup", r),
                    pe(document, "mouseover", r);
                })(t);
          }
        }
        function sa(e) {
          16 == e.keyCode && (this.doc.sel.shift = !1), ge(this, e);
        }
        function ca(e) {
          var t = this;
          if (
            !(
              kr(t.display, e) ||
              ge(t, e) ||
              (e.ctrlKey && !e.altKey) ||
              (b && e.metaKey)
            )
          ) {
            var r = e.keyCode,
              n = e.charCode;
            if (d && r == aa) return (aa = null), void xe(e);
            if (!d || (e.which && !(e.which < 10)) || !oa(t, e)) {
              var i = String.fromCharCode(null == n ? r : n);
              "\b" != i &&
                ((function (e, t, r) {
                  return na(e, "'" + r + "'", t, function (t) {
                    return ta(e, t, !0);
                  });
                })(t, e, i) ||
                  t.display.input.onKeyPress(e));
            }
          }
        }
        var ua,
          da,
          pa = function (e, t, r) {
            (this.time = e), (this.pos = t), (this.button = r);
          };
        function fa(e) {
          var t = this,
            r = t.display;
          if (!(ge(t, e) || (r.activeTouch && r.input.supportsTouch())))
            if ((r.input.ensurePolled(), (r.shift = e.shiftKey), kr(r, e)))
              s ||
                ((r.scroller.draggable = !1),
                setTimeout(function () {
                  return (r.scroller.draggable = !0);
                }, 100));
            else if (!ga(t, e)) {
              var n = ln(t, e),
                i = Se(e),
                o = n
                  ? (function (e, t) {
                      var r = +new Date();
                      return da && da.compare(r, e, t)
                        ? ((ua = da = null), "triple")
                        : ua && ua.compare(r, e, t)
                        ? ((da = new pa(r, e, t)), (ua = null), "double")
                        : ((ua = new pa(r, e, t)), (da = null), "single");
                    })(n, i)
                  : "single";
              window.focus(),
                1 == i && t.state.selectingText && t.state.selectingText(e),
                (n &&
                  (function (e, t, r, n, i) {
                    var o = "Click";
                    return (
                      "double" == n
                        ? (o = "Double" + o)
                        : "triple" == n && (o = "Triple" + o),
                      na(
                        e,
                        Uo(
                          (o =
                            (1 == t ? "Left" : 2 == t ? "Middle" : "Right") +
                            o),
                          i
                        ),
                        i,
                        function (t) {
                          if (("string" == typeof t && (t = Qo[t]), !t))
                            return !1;
                          var n = !1;
                          try {
                            e.isReadOnly() && (e.state.suppressEdits = !0),
                              (n = t(e, r) != R);
                          } finally {
                            e.state.suppressEdits = !1;
                          }
                          return n;
                        }
                      )
                    );
                  })(t, i, n, o, e)) ||
                  (1 == i
                    ? n
                      ? (function (e, t, r, n) {
                          a ? setTimeout(q(xn, e), 0) : (e.curOp.focus = E());
                          var i,
                            o = (function (e, t, r) {
                              var n = e.getOption("configureMouse"),
                                i = n ? n(e, t, r) : {};
                              if (null == i.unit) {
                                var o = y ? r.shiftKey && r.metaKey : r.altKey;
                                i.unit = o
                                  ? "rectangle"
                                  : "single" == t
                                  ? "char"
                                  : "double" == t
                                  ? "word"
                                  : "line";
                              }
                              return (
                                (null == i.extend || e.doc.extend) &&
                                  (i.extend = e.doc.extend || r.shiftKey),
                                null == i.addNew &&
                                  (i.addNew = b ? r.metaKey : r.ctrlKey),
                                null == i.moveOnDrag &&
                                  (i.moveOnDrag = !(b ? r.altKey : r.ctrlKey)),
                                i
                              );
                            })(e, r, n),
                            c = e.doc.sel;
                          e.options.dragDrop &&
                          Te &&
                          !e.isReadOnly() &&
                          "single" == r &&
                          (i = c.contains(t)) > -1 &&
                          (tt((i = c.ranges[i]).from(), t) < 0 || t.xRel > 0) &&
                          (tt(i.to(), t) > 0 || t.xRel < 0)
                            ? (function (e, t, r, n) {
                                var i = e.display,
                                  o = !1,
                                  c = Yn(e, function (t) {
                                    s && (i.scroller.draggable = !1),
                                      (e.state.draggingText = !1),
                                      me(i.wrapper.ownerDocument, "mouseup", c),
                                      me(
                                        i.wrapper.ownerDocument,
                                        "mousemove",
                                        u
                                      ),
                                      me(i.scroller, "dragstart", d),
                                      me(i.scroller, "drop", c),
                                      o ||
                                        (xe(t),
                                        n.addNew ||
                                          Ui(e.doc, r, null, null, n.extend),
                                        s || (a && 9 == l)
                                          ? setTimeout(function () {
                                              i.wrapper.ownerDocument.body.focus(),
                                                i.input.focus();
                                            }, 20)
                                          : i.input.focus());
                                  }),
                                  u = function (e) {
                                    o =
                                      o ||
                                      Math.abs(t.clientX - e.clientX) +
                                        Math.abs(t.clientY - e.clientY) >=
                                        10;
                                  },
                                  d = function () {
                                    return (o = !0);
                                  };
                                s && (i.scroller.draggable = !0),
                                  (e.state.draggingText = c),
                                  (c.copy = !n.moveOnDrag),
                                  i.scroller.dragDrop && i.scroller.dragDrop(),
                                  pe(i.wrapper.ownerDocument, "mouseup", c),
                                  pe(i.wrapper.ownerDocument, "mousemove", u),
                                  pe(i.scroller, "dragstart", d),
                                  pe(i.scroller, "drop", c),
                                  kn(e),
                                  setTimeout(function () {
                                    return i.input.focus();
                                  }, 20);
                              })(e, n, t, o)
                            : (function (e, t, r, n) {
                                var i = e.display,
                                  o = e.doc;
                                xe(t);
                                var a,
                                  l,
                                  s = o.sel,
                                  c = s.ranges;
                                if (
                                  (n.addNew && !n.extend
                                    ? ((l = o.sel.contains(r)),
                                      (a = l > -1 ? c[l] : new xi(r, r)))
                                    : ((a = o.sel.primary()),
                                      (l = o.sel.primIndex)),
                                  "rectangle" == n.unit)
                                )
                                  n.addNew || (a = new xi(r, r)),
                                    (r = ln(e, t, !0, !0)),
                                    (l = -1);
                                else {
                                  var u = ma(e, r, n.unit);
                                  a = n.extend
                                    ? $i(a, u.anchor, u.head, n.extend)
                                    : u;
                                }
                                n.addNew
                                  ? -1 == l
                                    ? ((l = c.length),
                                      Zi(o, ki(e, c.concat([a]), l), {
                                        scroll: !1,
                                        origin: "*mouse"
                                      }))
                                    : c.length > 1 &&
                                      c[l].empty() &&
                                      "char" == n.unit &&
                                      !n.extend
                                    ? (Zi(
                                        o,
                                        ki(
                                          e,
                                          c.slice(0, l).concat(c.slice(l + 1)),
                                          0
                                        ),
                                        { scroll: !1, origin: "*mouse" }
                                      ),
                                      (s = o.sel))
                                    : Ki(o, l, a, $)
                                  : ((l = 0),
                                    Zi(o, new yi([a], 0), $),
                                    (s = o.sel));
                                var d = r;
                                function p(t) {
                                  if (0 != tt(d, t))
                                    if (((d = t), "rectangle" == n.unit)) {
                                      for (
                                        var i = [],
                                          c = e.options.tabSize,
                                          u = P(Ve(o, r.line).text, r.ch, c),
                                          p = P(Ve(o, t.line).text, t.ch, c),
                                          f = Math.min(u, p),
                                          m = Math.max(u, p),
                                          h = Math.min(r.line, t.line),
                                          g = Math.min(
                                            e.lastLine(),
                                            Math.max(r.line, t.line)
                                          );
                                        h <= g;
                                        h++
                                      ) {
                                        var v = Ve(o, h).text,
                                          b = V(v, f, c);
                                        f == m
                                          ? i.push(new xi(et(h, b), et(h, b)))
                                          : v.length > b &&
                                            i.push(
                                              new xi(
                                                et(h, b),
                                                et(h, V(v, m, c))
                                              )
                                            );
                                      }
                                      i.length || i.push(new xi(r, r)),
                                        Zi(
                                          o,
                                          ki(
                                            e,
                                            s.ranges.slice(0, l).concat(i),
                                            l
                                          ),
                                          { origin: "*mouse", scroll: !1 }
                                        ),
                                        e.scrollIntoView(t);
                                    } else {
                                      var y,
                                        x = a,
                                        k = ma(e, t, n.unit),
                                        w = x.anchor;
                                      tt(k.anchor, w) > 0
                                        ? ((y = k.head),
                                          (w = ot(x.from(), k.anchor)))
                                        : ((y = k.anchor),
                                          (w = it(x.to(), k.head)));
                                      var _ = s.ranges.slice(0);
                                      (_[l] = (function (e, t) {
                                        var r = t.anchor,
                                          n = t.head,
                                          i = Ve(e.doc, r.line);
                                        if (
                                          0 == tt(r, n) &&
                                          r.sticky == n.sticky
                                        )
                                          return t;
                                        var o = ue(i);
                                        if (!o) return t;
                                        var a = se(o, r.ch, r.sticky),
                                          l = o[a];
                                        if (l.from != r.ch && l.to != r.ch)
                                          return t;
                                        var s,
                                          c =
                                            a +
                                            ((l.from == r.ch) == (1 != l.level)
                                              ? 0
                                              : 1);
                                        if (0 == c || c == o.length) return t;
                                        if (n.line != r.line)
                                          s =
                                            (n.line - r.line) *
                                              ("ltr" == e.doc.direction
                                                ? 1
                                                : -1) >
                                            0;
                                        else {
                                          var u = se(o, n.ch, n.sticky),
                                            d =
                                              u - a ||
                                              (n.ch - r.ch) *
                                                (1 == l.level ? -1 : 1);
                                          s =
                                            u == c - 1 || u == c
                                              ? d < 0
                                              : d > 0;
                                        }
                                        var p = o[c + (s ? -1 : 0)],
                                          f = s == (1 == p.level),
                                          m = f ? p.from : p.to,
                                          h = f ? "after" : "before";
                                        return r.ch == m && r.sticky == h
                                          ? t
                                          : new xi(new et(r.line, m, h), n);
                                      })(e, new xi(lt(o, w), y))),
                                        Zi(o, ki(e, _, l), $);
                                    }
                                }
                                var f = i.wrapper.getBoundingClientRect(),
                                  m = 0;
                                function h(t) {
                                  (e.state.selectingText = !1),
                                    (m = 1 / 0),
                                    t && (xe(t), i.input.focus()),
                                    me(i.wrapper.ownerDocument, "mousemove", g),
                                    me(i.wrapper.ownerDocument, "mouseup", v),
                                    (o.history.lastSelOrigin = null);
                                }
                                var g = Yn(e, function (t) {
                                    0 !== t.buttons && Se(t)
                                      ? (function t(r) {
                                          var a = ++m,
                                            l = ln(
                                              e,
                                              r,
                                              !0,
                                              "rectangle" == n.unit
                                            );
                                          if (l)
                                            if (0 != tt(l, d)) {
                                              (e.curOp.focus = E()), p(l);
                                              var s = Mn(i, o);
                                              (l.line >= s.to ||
                                                l.line < s.from) &&
                                                setTimeout(
                                                  Yn(e, function () {
                                                    m == a && t(r);
                                                  }),
                                                  150
                                                );
                                            } else {
                                              var c =
                                                r.clientY < f.top
                                                  ? -20
                                                  : r.clientY > f.bottom
                                                  ? 20
                                                  : 0;
                                              c &&
                                                setTimeout(
                                                  Yn(e, function () {
                                                    m == a &&
                                                      ((i.scroller.scrollTop +=
                                                        c),
                                                      t(r));
                                                  }),
                                                  50
                                                );
                                            }
                                        })(t)
                                      : h(t);
                                  }),
                                  v = Yn(e, h);
                                (e.state.selectingText = v),
                                  pe(i.wrapper.ownerDocument, "mousemove", g),
                                  pe(i.wrapper.ownerDocument, "mouseup", v);
                              })(e, n, t, o);
                        })(t, n, o, e)
                      : Ce(e) == r.scroller && xe(e)
                    : 2 == i
                    ? (n && Ui(t.doc, n),
                      setTimeout(function () {
                        return r.input.focus();
                      }, 20))
                    : 3 == i && (_ ? t.display.input.onContextMenu(e) : kn(t)));
            }
        }
        function ma(e, t, r) {
          if ("char" == r) return new xi(t, t);
          if ("word" == r) return e.findWordAt(t);
          if ("line" == r)
            return new xi(et(t.line, 0), lt(e.doc, et(t.line + 1, 0)));
          var n = r(e, t);
          return new xi(n.from, n.to);
        }
        function ha(e, t, r, n) {
          var i, o;
          if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
          else
            try {
              (i = t.clientX), (o = t.clientY);
            } catch (t) {
              return !1;
            }
          if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
            return !1;
          n && xe(t);
          var a = e.display,
            l = a.lineDiv.getBoundingClientRect();
          if (o > l.bottom || !be(e, r)) return we(t);
          o -= l.top - a.viewOffset;
          for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
            var c = a.gutters.childNodes[s];
            if (c && c.getBoundingClientRect().right >= i) {
              var u = Ye(e.doc, o),
                d = e.display.gutterSpecs[s];
              return he(e, r, e, u, d.className, t), we(t);
            }
          }
        }
        function ga(e, t) {
          return ha(e, t, "gutterClick", !0);
        }
        function va(e, t) {
          kr(e.display, t) ||
            (function (e, t) {
              return (
                !!be(e, "gutterContextMenu") &&
                ha(e, t, "gutterContextMenu", !1)
              );
            })(e, t) ||
            ge(e, t, "contextmenu") ||
            _ ||
            e.display.input.onContextMenu(t);
        }
        function ba(e) {
          (e.display.wrapper.className =
            e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
            e.options.theme.replace(/(^|\s)\s*/g, " cm-s-")),
            jr(e);
        }
        pa.prototype.compare = function (e, t, r) {
          return (
            this.time + 400 > e && 0 == tt(t, this.pos) && r == this.button
          );
        };
        var ya = {
            toString: function () {
              return "CodeMirror.Init";
            }
          },
          xa = {},
          ka = {};
        function wa(e, t, r) {
          var n = r && r != ya;
          if (!t != !n) {
            var i = e.display.dragFunctions,
              o = t ? pe : me;
            o(e.display.scroller, "dragstart", i.start),
              o(e.display.scroller, "dragenter", i.enter),
              o(e.display.scroller, "dragover", i.over),
              o(e.display.scroller, "dragleave", i.leave),
              o(e.display.scroller, "drop", i.drop);
          }
        }
        function _a(e) {
          e.options.lineWrapping
            ? (F(e.display.wrapper, "CodeMirror-wrap"),
              (e.display.sizer.style.minWidth = ""),
              (e.display.sizerWidth = null))
            : (M(e.display.wrapper, "CodeMirror-wrap"), Ut(e)),
            an(e),
            cn(e),
            jr(e),
            setTimeout(function () {
              return jn(e);
            }, 100);
        }
        function Ca(e, t) {
          var r = this;
          if (!(this instanceof Ca)) return new Ca(e, t);
          (this.options = t = t ? I(t) : {}), I(xa, t, !1);
          var n = t.value;
          "string" == typeof n
            ? (n = new To(n, t.mode, null, t.lineSeparator, t.direction))
            : t.mode && (n.modeOption = t.mode),
            (this.doc = n);
          var i = new Ca.inputStyles[t.inputStyle](this),
            o = (this.display = new fi(e, n, i, t));
          for (var c in ((o.wrapper.CodeMirror = this),
          ba(this),
          t.lineWrapping &&
            (this.display.wrapper.className += " CodeMirror-wrap"),
          Rn(this),
          (this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            delayingBlurEvent: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: -1,
            cutIncoming: -1,
            selectingText: !1,
            draggingText: !1,
            highlight: new j(),
            keySeq: null,
            specialChars: null
          }),
          t.autofocus && !v && o.input.focus(),
          a &&
            l < 11 &&
            setTimeout(function () {
              return r.display.input.reset(!0);
            }, 20),
          (function (e) {
            var t = e.display;
            pe(t.scroller, "mousedown", Yn(e, fa)),
              pe(
                t.scroller,
                "dblclick",
                a && l < 11
                  ? Yn(e, function (t) {
                      if (!ge(e, t)) {
                        var r = ln(e, t);
                        if (r && !ga(e, t) && !kr(e.display, t)) {
                          xe(t);
                          var n = e.findWordAt(r);
                          Ui(e.doc, n.anchor, n.head);
                        }
                      }
                    })
                  : function (t) {
                      return ge(e, t) || xe(t);
                    }
              ),
              pe(t.scroller, "contextmenu", function (t) {
                return va(e, t);
              }),
              pe(t.input.getField(), "contextmenu", function (r) {
                t.scroller.contains(r.target) || va(e, r);
              });
            var r,
              n = { end: 0 };
            function i() {
              t.activeTouch &&
                ((r = setTimeout(function () {
                  return (t.activeTouch = null);
                }, 1e3)),
                ((n = t.activeTouch).end = +new Date()));
            }
            function o(e, t) {
              if (null == t.left) return !0;
              var r = t.left - e.left,
                n = t.top - e.top;
              return r * r + n * n > 400;
            }
            pe(t.scroller, "touchstart", function (i) {
              if (
                !ge(e, i) &&
                !(function (e) {
                  if (1 != e.touches.length) return !1;
                  var t = e.touches[0];
                  return t.radiusX <= 1 && t.radiusY <= 1;
                })(i) &&
                !ga(e, i)
              ) {
                t.input.ensurePolled(), clearTimeout(r);
                var o = +new Date();
                (t.activeTouch = {
                  start: o,
                  moved: !1,
                  prev: o - n.end <= 300 ? n : null
                }),
                  1 == i.touches.length &&
                    ((t.activeTouch.left = i.touches[0].pageX),
                    (t.activeTouch.top = i.touches[0].pageY));
              }
            }),
              pe(t.scroller, "touchmove", function () {
                t.activeTouch && (t.activeTouch.moved = !0);
              }),
              pe(t.scroller, "touchend", function (r) {
                var n = t.activeTouch;
                if (
                  n &&
                  !kr(t, r) &&
                  null != n.left &&
                  !n.moved &&
                  new Date() - n.start < 300
                ) {
                  var a,
                    l = e.coordsChar(t.activeTouch, "page");
                  (a =
                    !n.prev || o(n, n.prev)
                      ? new xi(l, l)
                      : !n.prev.prev || o(n, n.prev.prev)
                      ? e.findWordAt(l)
                      : new xi(et(l.line, 0), lt(e.doc, et(l.line + 1, 0)))),
                    e.setSelection(a.anchor, a.head),
                    e.focus(),
                    xe(r);
                }
                i();
              }),
              pe(t.scroller, "touchcancel", i),
              pe(t.scroller, "scroll", function () {
                t.scroller.clientHeight &&
                  (Fn(e, t.scroller.scrollTop),
                  On(e, t.scroller.scrollLeft, !0),
                  he(e, "scroll", e));
              }),
              pe(t.scroller, "mousewheel", function (t) {
                return bi(e, t);
              }),
              pe(t.scroller, "DOMMouseScroll", function (t) {
                return bi(e, t);
              }),
              pe(t.wrapper, "scroll", function () {
                return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
              }),
              (t.dragFunctions = {
                enter: function (t) {
                  ge(e, t) || _e(t);
                },
                over: function (t) {
                  ge(e, t) ||
                    ((function (e, t) {
                      var r = ln(e, t);
                      if (r) {
                        var n = document.createDocumentFragment();
                        gn(e, r, n),
                          e.display.dragCursor ||
                            ((e.display.dragCursor = z(
                              "div",
                              null,
                              "CodeMirror-cursors CodeMirror-dragcursors"
                            )),
                            e.display.lineSpace.insertBefore(
                              e.display.dragCursor,
                              e.display.cursorDiv
                            )),
                          T(e.display.dragCursor, n);
                      }
                    })(e, t),
                    _e(t));
                },
                start: function (t) {
                  return (function (e, t) {
                    if (a && (!e.state.draggingText || +new Date() - zo < 100))
                      _e(t);
                    else if (
                      !ge(e, t) &&
                      !kr(e.display, t) &&
                      (t.dataTransfer.setData("Text", e.getSelection()),
                      (t.dataTransfer.effectAllowed = "copyMove"),
                      t.dataTransfer.setDragImage && !p)
                    ) {
                      var r = z(
                        "img",
                        null,
                        null,
                        "position: fixed; left: 0; top: 0;"
                      );
                      (r.src =
                        "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                        d &&
                          ((r.width = r.height = 1),
                          e.display.wrapper.appendChild(r),
                          (r._top = r.offsetTop)),
                        t.dataTransfer.setDragImage(r, 0, 0),
                        d && r.parentNode.removeChild(r);
                    }
                  })(e, t);
                },
                drop: Yn(e, Ao),
                leave: function (t) {
                  ge(e, t) || Do(e);
                }
              });
            var s = t.input.getField();
            pe(s, "keyup", function (t) {
              return sa.call(e, t);
            }),
              pe(s, "keydown", Yn(e, la)),
              pe(s, "keypress", Yn(e, ca)),
              pe(s, "focus", function (t) {
                return wn(e, t);
              }),
              pe(s, "blur", function (t) {
                return _n(e, t);
              });
          })(this),
          No(),
          $n(this),
          (this.curOp.forceUpdate = !0),
          Ei(this, n),
          (t.autofocus && !v) || this.hasFocus()
            ? setTimeout(q(wn, this), 20)
            : _n(this),
          ka))
            ka.hasOwnProperty(c) && ka[c](this, t[c], ya);
          ci(this), t.finishInit && t.finishInit(this);
          for (var u = 0; u < Sa.length; ++u) Sa[u](this);
          Un(this),
            s &&
              t.lineWrapping &&
              "optimizelegibility" ==
                getComputedStyle(o.lineDiv).textRendering &&
              (o.lineDiv.style.textRendering = "auto");
        }
        (Ca.defaults = xa), (Ca.optionHandlers = ka);
        var Sa = [];
        function Ma(e, t, r, n) {
          var i,
            o = e.doc;
          null == r && (r = "add"),
            "smart" == r &&
              (o.mode.indent ? (i = ft(e, t).state) : (r = "prev"));
          var a = e.options.tabSize,
            l = Ve(o, t),
            s = P(l.text, null, a);
          l.stateAfter && (l.stateAfter = null);
          var c,
            u = l.text.match(/^\s*/)[0];
          if (n || /\S/.test(l.text)) {
            if (
              "smart" == r &&
              ((c = o.mode.indent(i, l.text.slice(u.length), l.text)) == R ||
                c > 150)
            ) {
              if (!n) return;
              r = "prev";
            }
          } else (c = 0), (r = "not");
          "prev" == r
            ? (c = t > o.first ? P(Ve(o, t - 1).text, null, a) : 0)
            : "add" == r
            ? (c = s + e.options.indentUnit)
            : "subtract" == r
            ? (c = s - e.options.indentUnit)
            : "number" == typeof r && (c = s + r),
            (c = Math.max(0, c));
          var d = "",
            p = 0;
          if (e.options.indentWithTabs)
            for (var f = Math.floor(c / a); f; --f) (p += a), (d += "\t");
          if ((p < c && (d += G(c - p)), d != u))
            return (
              po(o, d, et(t, 0), et(t, u.length), "+input"),
              (l.stateAfter = null),
              !0
            );
          for (var m = 0; m < o.sel.ranges.length; m++) {
            var h = o.sel.ranges[m];
            if (h.head.line == t && h.head.ch < u.length) {
              var g = et(t, u.length);
              Ki(o, m, new xi(g, g));
              break;
            }
          }
        }
        Ca.defineInitHook = function (e) {
          return Sa.push(e);
        };
        var La = null;
        function Ta(e) {
          La = e;
        }
        function za(e, t, r, n, i) {
          var o = e.doc;
          (e.display.shift = !1), n || (n = o.sel);
          var a = +new Date() - 200,
            l = "paste" == i || e.state.pasteIncoming > a,
            s = Ee(t),
            c = null;
          if (l && n.ranges.length > 1)
            if (La && La.text.join("\n") == t) {
              if (n.ranges.length % La.text.length == 0) {
                c = [];
                for (var u = 0; u < La.text.length; u++)
                  c.push(o.splitLines(La.text[u]));
              }
            } else
              s.length == n.ranges.length &&
                e.options.pasteLinesPerSelection &&
                (c = Z(s, function (e) {
                  return [e];
                }));
          for (
            var d = e.curOp.updateInput, p = n.ranges.length - 1;
            p >= 0;
            p--
          ) {
            var f = n.ranges[p],
              m = f.from(),
              h = f.to();
            f.empty() &&
              (r && r > 0
                ? (m = et(m.line, m.ch - r))
                : e.state.overwrite && !l
                ? (h = et(
                    h.line,
                    Math.min(Ve(o, h.line).text.length, h.ch + X(s).length)
                  ))
                : l &&
                  La &&
                  La.lineWise &&
                  La.text.join("\n") == t &&
                  (m = h = et(m.line, 0)));
            var g = {
              from: m,
              to: h,
              text: c ? c[p % c.length] : s,
              origin:
                i || (l ? "paste" : e.state.cutIncoming > a ? "cut" : "+input")
            };
            ao(e.doc, g), lr(e, "inputRead", e, g);
          }
          t && !l && Da(e, t),
            zn(e),
            e.curOp.updateInput < 2 && (e.curOp.updateInput = d),
            (e.curOp.typing = !0),
            (e.state.pasteIncoming = e.state.cutIncoming = -1);
        }
        function Aa(e, t) {
          var r = e.clipboardData && e.clipboardData.getData("Text");
          if (r)
            return (
              e.preventDefault(),
              t.isReadOnly() ||
                t.options.disableInput ||
                Zn(t, function () {
                  return za(t, r, 0, null, "paste");
                }),
              !0
            );
        }
        function Da(e, t) {
          if (e.options.electricChars && e.options.smartIndent)
            for (var r = e.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
              var i = r.ranges[n];
              if (
                !(
                  i.head.ch > 100 ||
                  (n && r.ranges[n - 1].head.line == i.head.line)
                )
              ) {
                var o = e.getModeAt(i.head),
                  a = !1;
                if (o.electricChars) {
                  for (var l = 0; l < o.electricChars.length; l++)
                    if (t.indexOf(o.electricChars.charAt(l)) > -1) {
                      a = Ma(e, i.head.line, "smart");
                      break;
                    }
                } else
                  o.electricInput &&
                    o.electricInput.test(
                      Ve(e.doc, i.head.line).text.slice(0, i.head.ch)
                    ) &&
                    (a = Ma(e, i.head.line, "smart"));
                a && lr(e, "electricInput", e, i.head.line);
              }
            }
        }
        function Ea(e) {
          for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
            var i = e.doc.sel.ranges[n].head.line,
              o = { anchor: et(i, 0), head: et(i + 1, 0) };
            r.push(o), t.push(e.getRange(o.anchor, o.head));
          }
          return { text: t, ranges: r };
        }
        function Fa(e, t, r, n) {
          e.setAttribute("autocorrect", r ? "" : "off"),
            e.setAttribute("autocapitalize", n ? "" : "off"),
            e.setAttribute("spellcheck", !!t);
        }
        function Na() {
          var e = z(
              "textarea",
              null,
              null,
              "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"
            ),
            t = z(
              "div",
              [e],
              null,
              "overflow: hidden; position: relative; width: 3px; height: 0px;"
            );
          return (
            s ? (e.style.width = "1000px") : e.setAttribute("wrap", "off"),
            h && (e.style.border = "1px solid black"),
            Fa(e),
            t
          );
        }
        function Oa(e, t, r, n, i) {
          var o = t,
            a = r,
            l = Ve(e, t.line),
            s = i && e.cm && "rtl" == e.cm.getOption("direction") ? -r : r;
          function c(n) {
            var o, a;
            if (
              null ==
              (o = i
                ? (function (e, t, r, n) {
                    var i = ue(t, e.doc.direction);
                    if (!i) return Zo(t, r, n);
                    r.ch >= t.text.length
                      ? ((r.ch = t.text.length), (r.sticky = "before"))
                      : r.ch <= 0 && ((r.ch = 0), (r.sticky = "after"));
                    var o = se(i, r.ch, r.sticky),
                      a = i[o];
                    if (
                      "ltr" == e.doc.direction &&
                      a.level % 2 == 0 &&
                      (n > 0 ? a.to > r.ch : a.from < r.ch)
                    )
                      return Zo(t, r, n);
                    var l,
                      s = function (e, r) {
                        return Xo(t, e instanceof et ? e.ch : e, r);
                      },
                      c = function (r) {
                        return e.options.lineWrapping
                          ? ((l = l || Dr(e, t)), Yr(e, t, l, r))
                          : { begin: 0, end: t.text.length };
                      },
                      u = c("before" == r.sticky ? s(r, -1) : r.ch);
                    if ("rtl" == e.doc.direction || 1 == a.level) {
                      var d = (1 == a.level) == n < 0,
                        p = s(r, d ? 1 : -1);
                      if (
                        null != p &&
                        (d
                          ? p <= a.to && p <= u.end
                          : p >= a.from && p >= u.begin)
                      ) {
                        var f = d ? "before" : "after";
                        return new et(r.line, p, f);
                      }
                    }
                    var m = function (e, t, n) {
                        for (
                          var o = function (e, t) {
                            return t
                              ? new et(r.line, s(e, 1), "before")
                              : new et(r.line, e, "after");
                          };
                          e >= 0 && e < i.length;
                          e += t
                        ) {
                          var a = i[e],
                            l = t > 0 == (1 != a.level),
                            c = l ? n.begin : s(n.end, -1);
                          if (a.from <= c && c < a.to) return o(c, l);
                          if (
                            ((c = l ? a.from : s(a.to, -1)),
                            n.begin <= c && c < n.end)
                          )
                            return o(c, l);
                        }
                      },
                      h = m(o + n, n, u);
                    if (h) return h;
                    var g = n > 0 ? u.end : s(u.begin, -1);
                    return null == g ||
                      (n > 0 && g == t.text.length) ||
                      !(h = m(n > 0 ? 0 : i.length - 1, n, c(g)))
                      ? null
                      : h;
                  })(e.cm, l, t, r)
                : Zo(l, t, r))
            ) {
              if (
                n ||
                (a = t.line + s) < e.first ||
                a >= e.first + e.size ||
                ((t = new et(a, t.ch, t.sticky)), !(l = Ve(e, a)))
              )
                return !1;
              t = Yo(i, e.cm, l, t.line, s);
            } else t = o;
            return !0;
          }
          if ("char" == n) c();
          else if ("column" == n) c(!0);
          else if ("word" == n || "group" == n)
            for (
              var u = null,
                d = "group" == n,
                p = e.cm && e.cm.getHelper(t, "wordChars"),
                f = !0;
              !(r < 0) || c(!f);
              f = !1
            ) {
              var m = l.text.charAt(t.ch) || "\n",
                h = te(m, p)
                  ? "w"
                  : d && "\n" == m
                  ? "n"
                  : !d || /\s/.test(m)
                  ? null
                  : "p";
              if ((!d || f || h || (h = "s"), u && u != h)) {
                r < 0 && ((r = 1), c(), (t.sticky = "after"));
                break;
              }
              if ((h && (u = h), r > 0 && !c(!f))) break;
            }
          var g = ro(e, t, o, a, !0);
          return rt(o, g) && (g.hitSide = !0), g;
        }
        function qa(e, t, r, n) {
          var i,
            o,
            a = e.doc,
            l = t.left;
          if ("page" == n) {
            var s = Math.min(
                e.display.wrapper.clientHeight,
                window.innerHeight || document.documentElement.clientHeight
              ),
              c = Math.max(s - 0.5 * en(e.display), 3);
            i = (r > 0 ? t.bottom : t.top) + r * c;
          } else "line" == n && (i = r > 0 ? t.bottom + 3 : t.top - 3);
          for (; (o = Xr(e, l, i)).outside; ) {
            if (r < 0 ? i <= 0 : i >= a.height) {
              o.hitSide = !0;
              break;
            }
            i += 5 * r;
          }
          return o;
        }
        var Ia = function (e) {
          (this.cm = e),
            (this.lastAnchorNode =
              this.lastAnchorOffset =
              this.lastFocusNode =
              this.lastFocusOffset =
                null),
            (this.polling = new j()),
            (this.composing = null),
            (this.gracePeriod = !1),
            (this.readDOMTimeout = null);
        };
        function Pa(e, t) {
          var r = Ar(e, t.line);
          if (!r || r.hidden) return null;
          var n = Ve(e.doc, t.line),
            i = Tr(r, n, t.line),
            o = ue(n, e.doc.direction),
            a = "left";
          if (o) {
            var l = se(o, t.ch);
            a = l % 2 ? "right" : "left";
          }
          var s = Or(i.map, t.ch, a);
          return (s.offset = "right" == s.collapse ? s.end : s.start), s;
        }
        function ja(e, t) {
          return t && (e.bad = !0), e;
        }
        function Ba(e, t, r) {
          var n;
          if (t == e.display.lineDiv) {
            if (!(n = e.display.lineDiv.childNodes[r]))
              return ja(e.clipPos(et(e.display.viewTo - 1)), !0);
            (t = null), (r = 0);
          } else
            for (n = t; ; n = n.parentNode) {
              if (!n || n == e.display.lineDiv) return null;
              if (n.parentNode && n.parentNode == e.display.lineDiv) break;
            }
          for (var i = 0; i < e.display.view.length; i++) {
            var o = e.display.view[i];
            if (o.node == n) return Wa(o, t, r);
          }
        }
        function Wa(e, t, r) {
          var n = e.text.firstChild,
            i = !1;
          if (!t || !D(n, t)) return ja(et(Ze(e.line), 0), !0);
          if (t == n && ((i = !0), (t = n.childNodes[r]), (r = 0), !t)) {
            var o = e.rest ? X(e.rest) : e.line;
            return ja(et(Ze(o), o.text.length), i);
          }
          var a = 3 == t.nodeType ? t : null,
            l = t;
          for (
            a ||
            1 != t.childNodes.length ||
            3 != t.firstChild.nodeType ||
            ((a = t.firstChild), r && (r = a.nodeValue.length));
            l.parentNode != n;

          )
            l = l.parentNode;
          var s = e.measure,
            c = s.maps;
          function u(t, r, n) {
            for (var i = -1; i < (c ? c.length : 0); i++)
              for (var o = i < 0 ? s.map : c[i], a = 0; a < o.length; a += 3) {
                var l = o[a + 2];
                if (l == t || l == r) {
                  var u = Ze(i < 0 ? e.line : e.rest[i]),
                    d = o[a] + n;
                  return (
                    (n < 0 || l != t) && (d = o[a + (n ? 1 : 0)]), et(u, d)
                  );
                }
              }
          }
          var d = u(a, l, r);
          if (d) return ja(d, i);
          for (
            var p = l.nextSibling, f = a ? a.nodeValue.length - r : 0;
            p;
            p = p.nextSibling
          ) {
            if ((d = u(p, p.firstChild, 0))) return ja(et(d.line, d.ch - f), i);
            f += p.textContent.length;
          }
          for (var m = l.previousSibling, h = r; m; m = m.previousSibling) {
            if ((d = u(m, m.firstChild, -1)))
              return ja(et(d.line, d.ch + h), i);
            h += m.textContent.length;
          }
        }
        (Ia.prototype.init = function (e) {
          var t = this,
            r = this,
            n = r.cm,
            i = (r.div = e.lineDiv);
          function o(e) {
            if (!ge(n, e)) {
              if (n.somethingSelected())
                Ta({ lineWise: !1, text: n.getSelections() }),
                  "cut" == e.type && n.replaceSelection("", null, "cut");
              else {
                if (!n.options.lineWiseCopyCut) return;
                var t = Ea(n);
                Ta({ lineWise: !0, text: t.text }),
                  "cut" == e.type &&
                    n.operation(function () {
                      n.setSelections(t.ranges, 0, H),
                        n.replaceSelection("", null, "cut");
                    });
              }
              if (e.clipboardData) {
                e.clipboardData.clearData();
                var o = La.text.join("\n");
                if (
                  (e.clipboardData.setData("Text", o),
                  e.clipboardData.getData("Text") == o)
                )
                  return void e.preventDefault();
              }
              var a = Na(),
                l = a.firstChild;
              n.display.lineSpace.insertBefore(
                a,
                n.display.lineSpace.firstChild
              ),
                (l.value = La.text.join("\n"));
              var s = document.activeElement;
              O(l),
                setTimeout(function () {
                  n.display.lineSpace.removeChild(a),
                    s.focus(),
                    s == i && r.showPrimarySelection();
                }, 50);
            }
          }
          Fa(
            i,
            n.options.spellcheck,
            n.options.autocorrect,
            n.options.autocapitalize
          ),
            pe(i, "paste", function (e) {
              ge(n, e) ||
                Aa(e, n) ||
                (l <= 11 &&
                  setTimeout(
                    Yn(n, function () {
                      return t.updateFromDOM();
                    }),
                    20
                  ));
            }),
            pe(i, "compositionstart", function (e) {
              t.composing = { data: e.data, done: !1 };
            }),
            pe(i, "compositionupdate", function (e) {
              t.composing || (t.composing = { data: e.data, done: !1 });
            }),
            pe(i, "compositionend", function (e) {
              t.composing &&
                (e.data != t.composing.data && t.readFromDOMSoon(),
                (t.composing.done = !0));
            }),
            pe(i, "touchstart", function () {
              return r.forceCompositionEnd();
            }),
            pe(i, "input", function () {
              t.composing || t.readFromDOMSoon();
            }),
            pe(i, "copy", o),
            pe(i, "cut", o);
        }),
          (Ia.prototype.prepareSelection = function () {
            var e = hn(this.cm, !1);
            return (e.focus = this.cm.state.focused), e;
          }),
          (Ia.prototype.showSelection = function (e, t) {
            e &&
              this.cm.display.view.length &&
              ((e.focus || t) && this.showPrimarySelection(),
              this.showMultipleSelections(e));
          }),
          (Ia.prototype.getSelection = function () {
            return this.cm.display.wrapper.ownerDocument.getSelection();
          }),
          (Ia.prototype.showPrimarySelection = function () {
            var e = this.getSelection(),
              t = this.cm,
              n = t.doc.sel.primary(),
              i = n.from(),
              o = n.to();
            if (
              t.display.viewTo == t.display.viewFrom ||
              i.line >= t.display.viewTo ||
              o.line < t.display.viewFrom
            )
              e.removeAllRanges();
            else {
              var a = Ba(t, e.anchorNode, e.anchorOffset),
                l = Ba(t, e.focusNode, e.focusOffset);
              if (
                !a ||
                a.bad ||
                !l ||
                l.bad ||
                0 != tt(ot(a, l), i) ||
                0 != tt(it(a, l), o)
              ) {
                var s = t.display.view,
                  c = (i.line >= t.display.viewFrom && Pa(t, i)) || {
                    node: s[0].measure.map[2],
                    offset: 0
                  },
                  u = o.line < t.display.viewTo && Pa(t, o);
                if (!u) {
                  var d = s[s.length - 1].measure,
                    p = d.maps ? d.maps[d.maps.length - 1] : d.map;
                  u = {
                    node: p[p.length - 1],
                    offset: p[p.length - 2] - p[p.length - 3]
                  };
                }
                if (c && u) {
                  var f,
                    m = e.rangeCount && e.getRangeAt(0);
                  try {
                    f = S(c.node, c.offset, u.offset, u.node);
                  } catch (e) {}
                  f &&
                    (!r && t.state.focused
                      ? (e.collapse(c.node, c.offset),
                        f.collapsed || (e.removeAllRanges(), e.addRange(f)))
                      : (e.removeAllRanges(), e.addRange(f)),
                    m && null == e.anchorNode
                      ? e.addRange(m)
                      : r && this.startGracePeriod()),
                    this.rememberSelection();
                } else e.removeAllRanges();
              }
            }
          }),
          (Ia.prototype.startGracePeriod = function () {
            var e = this;
            clearTimeout(this.gracePeriod),
              (this.gracePeriod = setTimeout(function () {
                (e.gracePeriod = !1),
                  e.selectionChanged() &&
                    e.cm.operation(function () {
                      return (e.cm.curOp.selectionChanged = !0);
                    });
              }, 20));
          }),
          (Ia.prototype.showMultipleSelections = function (e) {
            T(this.cm.display.cursorDiv, e.cursors),
              T(this.cm.display.selectionDiv, e.selection);
          }),
          (Ia.prototype.rememberSelection = function () {
            var e = this.getSelection();
            (this.lastAnchorNode = e.anchorNode),
              (this.lastAnchorOffset = e.anchorOffset),
              (this.lastFocusNode = e.focusNode),
              (this.lastFocusOffset = e.focusOffset);
          }),
          (Ia.prototype.selectionInEditor = function () {
            var e = this.getSelection();
            if (!e.rangeCount) return !1;
            var t = e.getRangeAt(0).commonAncestorContainer;
            return D(this.div, t);
          }),
          (Ia.prototype.focus = function () {
            "nocursor" != this.cm.options.readOnly &&
              (this.selectionInEditor() ||
                this.showSelection(this.prepareSelection(), !0),
              this.div.focus());
          }),
          (Ia.prototype.blur = function () {
            this.div.blur();
          }),
          (Ia.prototype.getField = function () {
            return this.div;
          }),
          (Ia.prototype.supportsTouch = function () {
            return !0;
          }),
          (Ia.prototype.receivedFocus = function () {
            var e = this;
            this.selectionInEditor()
              ? this.pollSelection()
              : Zn(this.cm, function () {
                  return (e.cm.curOp.selectionChanged = !0);
                }),
              this.polling.set(this.cm.options.pollInterval, function t() {
                e.cm.state.focused &&
                  (e.pollSelection(),
                  e.polling.set(e.cm.options.pollInterval, t));
              });
          }),
          (Ia.prototype.selectionChanged = function () {
            var e = this.getSelection();
            return (
              e.anchorNode != this.lastAnchorNode ||
              e.anchorOffset != this.lastAnchorOffset ||
              e.focusNode != this.lastFocusNode ||
              e.focusOffset != this.lastFocusOffset
            );
          }),
          (Ia.prototype.pollSelection = function () {
            if (
              null == this.readDOMTimeout &&
              !this.gracePeriod &&
              this.selectionChanged()
            ) {
              var e = this.getSelection(),
                t = this.cm;
              if (
                g &&
                u &&
                this.cm.display.gutterSpecs.length &&
                (function (e) {
                  for (var t = e; t; t = t.parentNode)
                    if (/CodeMirror-gutter-wrapper/.test(t.className))
                      return !0;
                  return !1;
                })(e.anchorNode)
              )
                return (
                  this.cm.triggerOnKeyDown({
                    type: "keydown",
                    keyCode: 8,
                    preventDefault: Math.abs
                  }),
                  this.blur(),
                  void this.focus()
                );
              if (!this.composing) {
                this.rememberSelection();
                var r = Ba(t, e.anchorNode, e.anchorOffset),
                  n = Ba(t, e.focusNode, e.focusOffset);
                r &&
                  n &&
                  Zn(t, function () {
                    Zi(t.doc, wi(r, n), H),
                      (r.bad || n.bad) && (t.curOp.selectionChanged = !0);
                  });
              }
            }
          }),
          (Ia.prototype.pollContent = function () {
            null != this.readDOMTimeout &&
              (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
            var e,
              t,
              r,
              n = this.cm,
              i = n.display,
              o = n.doc.sel.primary(),
              a = o.from(),
              l = o.to();
            if (
              (0 == a.ch &&
                a.line > n.firstLine() &&
                (a = et(a.line - 1, Ve(n.doc, a.line - 1).length)),
              l.ch == Ve(n.doc, l.line).text.length &&
                l.line < n.lastLine() &&
                (l = et(l.line + 1, 0)),
              a.line < i.viewFrom || l.line > i.viewTo - 1)
            )
              return !1;
            a.line == i.viewFrom || 0 == (e = sn(n, a.line))
              ? ((t = Ze(i.view[0].line)), (r = i.view[0].node))
              : ((t = Ze(i.view[e].line)),
                (r = i.view[e - 1].node.nextSibling));
            var s,
              c,
              u = sn(n, l.line);
            if (
              (u == i.view.length - 1
                ? ((s = i.viewTo - 1), (c = i.lineDiv.lastChild))
                : ((s = Ze(i.view[u + 1].line) - 1),
                  (c = i.view[u + 1].node.previousSibling)),
              !r)
            )
              return !1;
            for (
              var d = n.doc.splitLines(
                  (function (e, t, r, n, i) {
                    var o = "",
                      a = !1,
                      l = e.doc.lineSeparator(),
                      s = !1;
                    function c() {
                      a && ((o += l), s && (o += l), (a = s = !1));
                    }
                    function u(e) {
                      e && (c(), (o += e));
                    }
                    function d(t) {
                      if (1 == t.nodeType) {
                        var r = t.getAttribute("cm-text");
                        if (r) return void u(r);
                        var o,
                          p = t.getAttribute("cm-marker");
                        if (p) {
                          var f = e.findMarks(
                            et(n, 0),
                            et(i + 1, 0),
                            ((g = +p),
                            function (e) {
                              return e.id == g;
                            })
                          );
                          return void (
                            f.length &&
                            (o = f[0].find(0)) &&
                            u(Ke(e.doc, o.from, o.to).join(l))
                          );
                        }
                        if ("false" == t.getAttribute("contenteditable"))
                          return;
                        var m = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                        if (
                          !/^br$/i.test(t.nodeName) &&
                          0 == t.textContent.length
                        )
                          return;
                        m && c();
                        for (var h = 0; h < t.childNodes.length; h++)
                          d(t.childNodes[h]);
                        /^(pre|p)$/i.test(t.nodeName) && (s = !0),
                          m && (a = !0);
                      } else
                        3 == t.nodeType &&
                          u(
                            t.nodeValue
                              .replace(/\u200b/g, "")
                              .replace(/\u00a0/g, " ")
                          );
                      var g;
                    }
                    for (; d(t), t != r; ) (t = t.nextSibling), (s = !1);
                    return o;
                  })(n, r, c, t, s)
                ),
                p = Ke(n.doc, et(t, 0), et(s, Ve(n.doc, s).text.length));
              d.length > 1 && p.length > 1;

            )
              if (X(d) == X(p)) d.pop(), p.pop(), s--;
              else {
                if (d[0] != p[0]) break;
                d.shift(), p.shift(), t++;
              }
            for (
              var f = 0,
                m = 0,
                h = d[0],
                g = p[0],
                v = Math.min(h.length, g.length);
              f < v && h.charCodeAt(f) == g.charCodeAt(f);

            )
              ++f;
            for (
              var b = X(d),
                y = X(p),
                x = Math.min(
                  b.length - (1 == d.length ? f : 0),
                  y.length - (1 == p.length ? f : 0)
                );
              m < x &&
              b.charCodeAt(b.length - m - 1) == y.charCodeAt(y.length - m - 1);

            )
              ++m;
            if (1 == d.length && 1 == p.length && t == a.line)
              for (
                ;
                f &&
                f > a.ch &&
                b.charCodeAt(b.length - m - 1) ==
                  y.charCodeAt(y.length - m - 1);

              )
                f--, m++;
            (d[d.length - 1] = b
              .slice(0, b.length - m)
              .replace(/^\u200b+/, "")),
              (d[0] = d[0].slice(f).replace(/\u200b+$/, ""));
            var k = et(t, f),
              w = et(s, p.length ? X(p).length - m : 0);
            return d.length > 1 || d[0] || tt(k, w)
              ? (po(n.doc, d, k, w, "+input"), !0)
              : void 0;
          }),
          (Ia.prototype.ensurePolled = function () {
            this.forceCompositionEnd();
          }),
          (Ia.prototype.reset = function () {
            this.forceCompositionEnd();
          }),
          (Ia.prototype.forceCompositionEnd = function () {
            this.composing &&
              (clearTimeout(this.readDOMTimeout),
              (this.composing = null),
              this.updateFromDOM(),
              this.div.blur(),
              this.div.focus());
          }),
          (Ia.prototype.readFromDOMSoon = function () {
            var e = this;
            null == this.readDOMTimeout &&
              (this.readDOMTimeout = setTimeout(function () {
                if (((e.readDOMTimeout = null), e.composing)) {
                  if (!e.composing.done) return;
                  e.composing = null;
                }
                e.updateFromDOM();
              }, 80));
          }),
          (Ia.prototype.updateFromDOM = function () {
            var e = this;
            (!this.cm.isReadOnly() && this.pollContent()) ||
              Zn(this.cm, function () {
                return cn(e.cm);
              });
          }),
          (Ia.prototype.setUneditable = function (e) {
            e.contentEditable = "false";
          }),
          (Ia.prototype.onKeyPress = function (e) {
            0 == e.charCode ||
              this.composing ||
              (e.preventDefault(),
              this.cm.isReadOnly() ||
                Yn(this.cm, za)(
                  this.cm,
                  String.fromCharCode(
                    null == e.charCode ? e.keyCode : e.charCode
                  ),
                  0
                ));
          }),
          (Ia.prototype.readOnlyChanged = function (e) {
            this.div.contentEditable = String("nocursor" != e);
          }),
          (Ia.prototype.onContextMenu = function () {}),
          (Ia.prototype.resetPosition = function () {}),
          (Ia.prototype.needsContentAttribute = !0);
        var Ra = function (e) {
          (this.cm = e),
            (this.prevInput = ""),
            (this.pollingFast = !1),
            (this.polling = new j()),
            (this.hasSelection = !1),
            (this.composing = null);
        };
        (Ra.prototype.init = function (e) {
          var t = this,
            r = this,
            n = this.cm;
          this.createField(e);
          var i = this.textarea;
          function o(e) {
            if (!ge(n, e)) {
              if (n.somethingSelected())
                Ta({ lineWise: !1, text: n.getSelections() });
              else {
                if (!n.options.lineWiseCopyCut) return;
                var t = Ea(n);
                Ta({ lineWise: !0, text: t.text }),
                  "cut" == e.type
                    ? n.setSelections(t.ranges, null, H)
                    : ((r.prevInput = ""), (i.value = t.text.join("\n")), O(i));
              }
              "cut" == e.type && (n.state.cutIncoming = +new Date());
            }
          }
          e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
            h && (i.style.width = "0px"),
            pe(i, "input", function () {
              a && l >= 9 && t.hasSelection && (t.hasSelection = null),
                r.poll();
            }),
            pe(i, "paste", function (e) {
              ge(n, e) ||
                Aa(e, n) ||
                ((n.state.pasteIncoming = +new Date()), r.fastPoll());
            }),
            pe(i, "cut", o),
            pe(i, "copy", o),
            pe(e.scroller, "paste", function (t) {
              if (!kr(e, t) && !ge(n, t)) {
                if (!i.dispatchEvent)
                  return (n.state.pasteIncoming = +new Date()), void r.focus();
                var o = new Event("paste");
                (o.clipboardData = t.clipboardData), i.dispatchEvent(o);
              }
            }),
            pe(e.lineSpace, "selectstart", function (t) {
              kr(e, t) || xe(t);
            }),
            pe(i, "compositionstart", function () {
              var e = n.getCursor("from");
              r.composing && r.composing.range.clear(),
                (r.composing = {
                  start: e,
                  range: n.markText(e, n.getCursor("to"), {
                    className: "CodeMirror-composing"
                  })
                });
            }),
            pe(i, "compositionend", function () {
              r.composing &&
                (r.poll(), r.composing.range.clear(), (r.composing = null));
            });
        }),
          (Ra.prototype.createField = function (e) {
            (this.wrapper = Na()), (this.textarea = this.wrapper.firstChild);
          }),
          (Ra.prototype.prepareSelection = function () {
            var e = this.cm,
              t = e.display,
              r = e.doc,
              n = hn(e);
            if (e.options.moveInputWithCursor) {
              var i = Vr(e, r.sel.primary().head, "div"),
                o = t.wrapper.getBoundingClientRect(),
                a = t.lineDiv.getBoundingClientRect();
              (n.teTop = Math.max(
                0,
                Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)
              )),
                (n.teLeft = Math.max(
                  0,
                  Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left)
                ));
            }
            return n;
          }),
          (Ra.prototype.showSelection = function (e) {
            var t = this.cm,
              r = t.display;
            T(r.cursorDiv, e.cursors),
              T(r.selectionDiv, e.selection),
              null != e.teTop &&
                ((this.wrapper.style.top = e.teTop + "px"),
                (this.wrapper.style.left = e.teLeft + "px"));
          }),
          (Ra.prototype.reset = function (e) {
            if (!this.contextMenuPending && !this.composing) {
              var t = this.cm;
              if (t.somethingSelected()) {
                this.prevInput = "";
                var r = t.getSelection();
                (this.textarea.value = r),
                  t.state.focused && O(this.textarea),
                  a && l >= 9 && (this.hasSelection = r);
              } else
                e ||
                  ((this.prevInput = this.textarea.value = ""),
                  a && l >= 9 && (this.hasSelection = null));
            }
          }),
          (Ra.prototype.getField = function () {
            return this.textarea;
          }),
          (Ra.prototype.supportsTouch = function () {
            return !1;
          }),
          (Ra.prototype.focus = function () {
            if (
              "nocursor" != this.cm.options.readOnly &&
              (!v || E() != this.textarea)
            )
              try {
                this.textarea.focus();
              } catch (e) {}
          }),
          (Ra.prototype.blur = function () {
            this.textarea.blur();
          }),
          (Ra.prototype.resetPosition = function () {
            this.wrapper.style.top = this.wrapper.style.left = 0;
          }),
          (Ra.prototype.receivedFocus = function () {
            this.slowPoll();
          }),
          (Ra.prototype.slowPoll = function () {
            var e = this;
            this.pollingFast ||
              this.polling.set(this.cm.options.pollInterval, function () {
                e.poll(), e.cm.state.focused && e.slowPoll();
              });
          }),
          (Ra.prototype.fastPoll = function () {
            var e = !1,
              t = this;
            (t.pollingFast = !0),
              t.polling.set(20, function r() {
                var n = t.poll();
                n || e
                  ? ((t.pollingFast = !1), t.slowPoll())
                  : ((e = !0), t.polling.set(60, r));
              });
          }),
          (Ra.prototype.poll = function () {
            var e = this,
              t = this.cm,
              r = this.textarea,
              n = this.prevInput;
            if (
              this.contextMenuPending ||
              !t.state.focused ||
              (Fe(r) && !n && !this.composing) ||
              t.isReadOnly() ||
              t.options.disableInput ||
              t.state.keySeq
            )
              return !1;
            var i = r.value;
            if (i == n && !t.somethingSelected()) return !1;
            if (
              (a && l >= 9 && this.hasSelection === i) ||
              (b && /[\uf700-\uf7ff]/.test(i))
            )
              return t.display.input.reset(), !1;
            if (t.doc.sel == t.display.selForContextMenu) {
              var o = i.charCodeAt(0);
              if ((8203 != o || n || (n = "​"), 8666 == o))
                return this.reset(), this.cm.execCommand("undo");
            }
            for (
              var s = 0, c = Math.min(n.length, i.length);
              s < c && n.charCodeAt(s) == i.charCodeAt(s);

            )
              ++s;
            return (
              Zn(t, function () {
                za(
                  t,
                  i.slice(s),
                  n.length - s,
                  null,
                  e.composing ? "*compose" : null
                ),
                  i.length > 1e3 || i.indexOf("\n") > -1
                    ? (r.value = e.prevInput = "")
                    : (e.prevInput = i),
                  e.composing &&
                    (e.composing.range.clear(),
                    (e.composing.range = t.markText(
                      e.composing.start,
                      t.getCursor("to"),
                      { className: "CodeMirror-composing" }
                    )));
              }),
              !0
            );
          }),
          (Ra.prototype.ensurePolled = function () {
            this.pollingFast && this.poll() && (this.pollingFast = !1);
          }),
          (Ra.prototype.onKeyPress = function () {
            a && l >= 9 && (this.hasSelection = null), this.fastPoll();
          }),
          (Ra.prototype.onContextMenu = function (e) {
            var t = this,
              r = t.cm,
              n = r.display,
              i = t.textarea;
            t.contextMenuPending && t.contextMenuPending();
            var o = ln(r, e),
              c = n.scroller.scrollTop;
            if (o && !d) {
              var u = r.options.resetSelectionOnContextMenu;
              u && -1 == r.doc.sel.contains(o) && Yn(r, Zi)(r.doc, wi(o), H);
              var p,
                f = i.style.cssText,
                m = t.wrapper.style.cssText,
                h = t.wrapper.offsetParent.getBoundingClientRect();
              if (
                ((t.wrapper.style.cssText = "position: static"),
                (i.style.cssText =
                  "position: absolute; width: 30px; height: 30px;\n      top: " +
                  (e.clientY - h.top - 5) +
                  "px; left: " +
                  (e.clientX - h.left - 5) +
                  "px;\n      z-index: 1000; background: " +
                  (a ? "rgba(255, 255, 255, .05)" : "transparent") +
                  ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"),
                s && (p = window.scrollY),
                n.input.focus(),
                s && window.scrollTo(null, p),
                n.input.reset(),
                r.somethingSelected() || (i.value = t.prevInput = " "),
                (t.contextMenuPending = b),
                (n.selForContextMenu = r.doc.sel),
                clearTimeout(n.detectingSelectAll),
                a && l >= 9 && v(),
                _)
              ) {
                _e(e);
                var g = function () {
                  me(window, "mouseup", g), setTimeout(b, 20);
                };
                pe(window, "mouseup", g);
              } else setTimeout(b, 50);
            }
            function v() {
              if (null != i.selectionStart) {
                var e = r.somethingSelected(),
                  o = "​" + (e ? i.value : "");
                (i.value = "⇚"),
                  (i.value = o),
                  (t.prevInput = e ? "" : "​"),
                  (i.selectionStart = 1),
                  (i.selectionEnd = o.length),
                  (n.selForContextMenu = r.doc.sel);
              }
            }
            function b() {
              if (
                t.contextMenuPending == b &&
                ((t.contextMenuPending = !1),
                (t.wrapper.style.cssText = m),
                (i.style.cssText = f),
                a &&
                  l < 9 &&
                  n.scrollbars.setScrollTop((n.scroller.scrollTop = c)),
                null != i.selectionStart)
              ) {
                (!a || (a && l < 9)) && v();
                var e = 0,
                  o = function () {
                    n.selForContextMenu == r.doc.sel &&
                    0 == i.selectionStart &&
                    i.selectionEnd > 0 &&
                    "​" == t.prevInput
                      ? Yn(r, io)(r)
                      : e++ < 10
                      ? (n.detectingSelectAll = setTimeout(o, 500))
                      : ((n.selForContextMenu = null), n.input.reset());
                  };
                n.detectingSelectAll = setTimeout(o, 200);
              }
            }
          }),
          (Ra.prototype.readOnlyChanged = function (e) {
            e || this.reset(), (this.textarea.disabled = "nocursor" == e);
          }),
          (Ra.prototype.setUneditable = function () {}),
          (Ra.prototype.needsContentAttribute = !1),
          (function (e) {
            var t = e.optionHandlers;
            function r(r, n, i, o) {
              (e.defaults[r] = n),
                i &&
                  (t[r] = o
                    ? function (e, t, r) {
                        r != ya && i(e, t, r);
                      }
                    : i);
            }
            (e.defineOption = r),
              (e.Init = ya),
              r(
                "value",
                "",
                function (e, t) {
                  return e.setValue(t);
                },
                !0
              ),
              r(
                "mode",
                null,
                function (e, t) {
                  (e.doc.modeOption = t), Li(e);
                },
                !0
              ),
              r("indentUnit", 2, Li, !0),
              r("indentWithTabs", !1),
              r("smartIndent", !0),
              r(
                "tabSize",
                4,
                function (e) {
                  Ti(e), jr(e), cn(e);
                },
                !0
              ),
              r("lineSeparator", null, function (e, t) {
                if (((e.doc.lineSep = t), t)) {
                  var r = [],
                    n = e.doc.first;
                  e.doc.iter(function (e) {
                    for (var i = 0; ; ) {
                      var o = e.text.indexOf(t, i);
                      if (-1 == o) break;
                      (i = o + t.length), r.push(et(n, o));
                    }
                    n++;
                  });
                  for (var i = r.length - 1; i >= 0; i--)
                    po(e.doc, t, r[i], et(r[i].line, r[i].ch + t.length));
                }
              }),
              r(
                "specialChars",
                /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,
                function (e, t, r) {
                  (e.state.specialChars = new RegExp(
                    t.source + (t.test("\t") ? "" : "|\t"),
                    "g"
                  )),
                    r != ya && e.refresh();
                }
              ),
              r(
                "specialCharPlaceholder",
                Qt,
                function (e) {
                  return e.refresh();
                },
                !0
              ),
              r("electricChars", !0),
              r(
                "inputStyle",
                v ? "contenteditable" : "textarea",
                function () {
                  throw new Error(
                    "inputStyle can not (yet) be changed in a running editor"
                  );
                },
                !0
              ),
              r(
                "spellcheck",
                !1,
                function (e, t) {
                  return (e.getInputField().spellcheck = t);
                },
                !0
              ),
              r(
                "autocorrect",
                !1,
                function (e, t) {
                  return (e.getInputField().autocorrect = t);
                },
                !0
              ),
              r(
                "autocapitalize",
                !1,
                function (e, t) {
                  return (e.getInputField().autocapitalize = t);
                },
                !0
              ),
              r("rtlMoveVisually", !x),
              r("wholeLineUpdateBefore", !0),
              r(
                "theme",
                "default",
                function (e) {
                  ba(e), pi(e);
                },
                !0
              ),
              r("keyMap", "default", function (e, t, r) {
                var n = Ko(t),
                  i = r != ya && Ko(r);
                i && i.detach && i.detach(e, n),
                  n.attach && n.attach(e, i || null);
              }),
              r("extraKeys", null),
              r("configureMouse", null),
              r("lineWrapping", !1, _a, !0),
              r(
                "gutters",
                [],
                function (e, t) {
                  (e.display.gutterSpecs = ui(t, e.options.lineNumbers)), pi(e);
                },
                !0
              ),
              r(
                "fixedGutter",
                !0,
                function (e, t) {
                  (e.display.gutters.style.left = t
                    ? nn(e.display) + "px"
                    : "0"),
                    e.refresh();
                },
                !0
              ),
              r(
                "coverGutterNextToScrollbar",
                !1,
                function (e) {
                  return jn(e);
                },
                !0
              ),
              r(
                "scrollbarStyle",
                "native",
                function (e) {
                  Rn(e),
                    jn(e),
                    e.display.scrollbars.setScrollTop(e.doc.scrollTop),
                    e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
                },
                !0
              ),
              r(
                "lineNumbers",
                !1,
                function (e, t) {
                  (e.display.gutterSpecs = ui(e.options.gutters, t)), pi(e);
                },
                !0
              ),
              r("firstLineNumber", 1, pi, !0),
              r(
                "lineNumberFormatter",
                function (e) {
                  return e;
                },
                pi,
                !0
              ),
              r("showCursorWhenSelecting", !1, mn, !0),
              r("resetSelectionOnContextMenu", !0),
              r("lineWiseCopyCut", !0),
              r("pasteLinesPerSelection", !0),
              r("selectionsMayTouch", !1),
              r("readOnly", !1, function (e, t) {
                "nocursor" == t && (_n(e), e.display.input.blur()),
                  e.display.input.readOnlyChanged(t);
              }),
              r(
                "disableInput",
                !1,
                function (e, t) {
                  t || e.display.input.reset();
                },
                !0
              ),
              r("dragDrop", !0, wa),
              r("allowDropFileTypes", null),
              r("cursorBlinkRate", 530),
              r("cursorScrollMargin", 0),
              r("cursorHeight", 1, mn, !0),
              r("singleCursorHeightPerLine", !0, mn, !0),
              r("workTime", 100),
              r("workDelay", 100),
              r("flattenSpans", !0, Ti, !0),
              r("addModeClass", !1, Ti, !0),
              r("pollInterval", 100),
              r("undoDepth", 200, function (e, t) {
                return (e.doc.history.undoDepth = t);
              }),
              r("historyEventDelay", 1250),
              r(
                "viewportMargin",
                10,
                function (e) {
                  return e.refresh();
                },
                !0
              ),
              r("maxHighlightLength", 1e4, Ti, !0),
              r("moveInputWithCursor", !0, function (e, t) {
                t || e.display.input.resetPosition();
              }),
              r("tabindex", null, function (e, t) {
                return (e.display.input.getField().tabIndex = t || "");
              }),
              r("autofocus", null),
              r(
                "direction",
                "ltr",
                function (e, t) {
                  return e.doc.setDirection(t);
                },
                !0
              ),
              r("phrases", null);
          })(Ca),
          (function (e) {
            var t = e.optionHandlers,
              r = (e.helpers = {});
            (e.prototype = {
              constructor: e,
              focus: function () {
                window.focus(), this.display.input.focus();
              },
              setOption: function (e, r) {
                var n = this.options,
                  i = n[e];
                (n[e] == r && "mode" != e) ||
                  ((n[e] = r),
                  t.hasOwnProperty(e) && Yn(this, t[e])(this, r, i),
                  he(this, "optionChange", this, e));
              },
              getOption: function (e) {
                return this.options[e];
              },
              getDoc: function () {
                return this.doc;
              },
              addKeyMap: function (e, t) {
                this.state.keyMaps[t ? "push" : "unshift"](Ko(e));
              },
              removeKeyMap: function (e) {
                for (var t = this.state.keyMaps, r = 0; r < t.length; ++r)
                  if (t[r] == e || t[r].name == e) return t.splice(r, 1), !0;
              },
              addOverlay: Qn(function (t, r) {
                var n = t.token ? t : e.getMode(this.options, t);
                if (n.startState)
                  throw new Error("Overlays may not be stateful.");
                !(function (e, t, r) {
                  for (var n = 0, i = r(t); n < e.length && r(e[n]) <= i; ) n++;
                  e.splice(n, 0, t);
                })(
                  this.state.overlays,
                  {
                    mode: n,
                    modeSpec: t,
                    opaque: r && r.opaque,
                    priority: (r && r.priority) || 0
                  },
                  function (e) {
                    return e.priority;
                  }
                ),
                  this.state.modeGen++,
                  cn(this);
              }),
              removeOverlay: Qn(function (e) {
                for (var t = this.state.overlays, r = 0; r < t.length; ++r) {
                  var n = t[r].modeSpec;
                  if (n == e || ("string" == typeof e && n.name == e))
                    return t.splice(r, 1), this.state.modeGen++, void cn(this);
                }
              }),
              indentLine: Qn(function (e, t, r) {
                "string" != typeof t &&
                  "number" != typeof t &&
                  (t =
                    null == t
                      ? this.options.smartIndent
                        ? "smart"
                        : "prev"
                      : t
                      ? "add"
                      : "subtract"),
                  Qe(this.doc, e) && Ma(this, e, t, r);
              }),
              indentSelection: Qn(function (e) {
                for (
                  var t = this.doc.sel.ranges, r = -1, n = 0;
                  n < t.length;
                  n++
                ) {
                  var i = t[n];
                  if (i.empty())
                    i.head.line > r &&
                      (Ma(this, i.head.line, e, !0),
                      (r = i.head.line),
                      n == this.doc.sel.primIndex && zn(this));
                  else {
                    var o = i.from(),
                      a = i.to(),
                      l = Math.max(r, o.line);
                    r = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                    for (var s = l; s < r; ++s) Ma(this, s, e);
                    var c = this.doc.sel.ranges;
                    0 == o.ch &&
                      t.length == c.length &&
                      c[n].from().ch > 0 &&
                      Ki(this.doc, n, new xi(o, c[n].to()), H);
                  }
                }
              }),
              getTokenAt: function (e, t) {
                return bt(this, e, t);
              },
              getLineTokens: function (e, t) {
                return bt(this, et(e), t, !0);
              },
              getTokenTypeAt: function (e) {
                e = lt(this.doc, e);
                var t,
                  r = pt(this, Ve(this.doc, e.line)),
                  n = 0,
                  i = (r.length - 1) / 2,
                  o = e.ch;
                if (0 == o) t = r[2];
                else
                  for (;;) {
                    var a = (n + i) >> 1;
                    if ((a ? r[2 * a - 1] : 0) >= o) i = a;
                    else {
                      if (!(r[2 * a + 1] < o)) {
                        t = r[2 * a + 2];
                        break;
                      }
                      n = a + 1;
                    }
                  }
                var l = t ? t.indexOf("overlay ") : -1;
                return l < 0 ? t : 0 == l ? null : t.slice(0, l - 1);
              },
              getModeAt: function (t) {
                var r = this.doc.mode;
                return r.innerMode
                  ? e.innerMode(r, this.getTokenAt(t).state).mode
                  : r;
              },
              getHelper: function (e, t) {
                return this.getHelpers(e, t)[0];
              },
              getHelpers: function (e, t) {
                var n = [];
                if (!r.hasOwnProperty(t)) return n;
                var i = r[t],
                  o = this.getModeAt(e);
                if ("string" == typeof o[t]) i[o[t]] && n.push(i[o[t]]);
                else if (o[t])
                  for (var a = 0; a < o[t].length; a++) {
                    var l = i[o[t][a]];
                    l && n.push(l);
                  }
                else
                  o.helperType && i[o.helperType]
                    ? n.push(i[o.helperType])
                    : i[o.name] && n.push(i[o.name]);
                for (var s = 0; s < i._global.length; s++) {
                  var c = i._global[s];
                  c.pred(o, this) && -1 == B(n, c.val) && n.push(c.val);
                }
                return n;
              },
              getStateAfter: function (e, t) {
                var r = this.doc;
                return ft(
                  this,
                  (e = at(r, null == e ? r.first + r.size - 1 : e)) + 1,
                  t
                ).state;
              },
              cursorCoords: function (e, t) {
                var r = this.doc.sel.primary();
                return Vr(
                  this,
                  null == e
                    ? r.head
                    : "object" == typeof e
                    ? lt(this.doc, e)
                    : e
                    ? r.from()
                    : r.to(),
                  t || "page"
                );
              },
              charCoords: function (e, t) {
                return Ur(this, lt(this.doc, e), t || "page");
              },
              coordsChar: function (e, t) {
                return Xr(this, (e = $r(this, e, t || "page")).left, e.top);
              },
              lineAtHeight: function (e, t) {
                return (
                  (e = $r(this, { top: e, left: 0 }, t || "page").top),
                  Ye(this.doc, e + this.display.viewOffset)
                );
              },
              heightAtLine: function (e, t, r) {
                var n,
                  i = !1;
                if ("number" == typeof e) {
                  var o = this.doc.first + this.doc.size - 1;
                  e < this.doc.first
                    ? (e = this.doc.first)
                    : e > o && ((e = o), (i = !0)),
                    (n = Ve(this.doc, e));
                } else n = e;
                return (
                  Hr(this, n, { top: 0, left: 0 }, t || "page", r || i).top +
                  (i ? this.doc.height - Ht(n) : 0)
                );
              },
              defaultTextHeight: function () {
                return en(this.display);
              },
              defaultCharWidth: function () {
                return tn(this.display);
              },
              getViewport: function () {
                return { from: this.display.viewFrom, to: this.display.viewTo };
              },
              addWidget: function (e, t, r, n, i) {
                var o,
                  a,
                  l,
                  s = this.display,
                  c = (e = Vr(this, lt(this.doc, e))).bottom,
                  u = e.left;
                if (
                  ((t.style.position = "absolute"),
                  t.setAttribute("cm-ignore-events", "true"),
                  this.display.input.setUneditable(t),
                  s.sizer.appendChild(t),
                  "over" == n)
                )
                  c = e.top;
                else if ("above" == n || "near" == n) {
                  var d = Math.max(s.wrapper.clientHeight, this.doc.height),
                    p = Math.max(s.sizer.clientWidth, s.lineSpace.clientWidth);
                  ("above" == n || e.bottom + t.offsetHeight > d) &&
                  e.top > t.offsetHeight
                    ? (c = e.top - t.offsetHeight)
                    : e.bottom + t.offsetHeight <= d && (c = e.bottom),
                    u + t.offsetWidth > p && (u = p - t.offsetWidth);
                }
                (t.style.top = c + "px"),
                  (t.style.left = t.style.right = ""),
                  "right" == i
                    ? ((u = s.sizer.clientWidth - t.offsetWidth),
                      (t.style.right = "0px"))
                    : ("left" == i
                        ? (u = 0)
                        : "middle" == i &&
                          (u = (s.sizer.clientWidth - t.offsetWidth) / 2),
                      (t.style.left = u + "px")),
                  r &&
                    ((o = this),
                    (a = {
                      left: u,
                      top: c,
                      right: u + t.offsetWidth,
                      bottom: c + t.offsetHeight
                    }),
                    null != (l = Ln(o, a)).scrollTop && Fn(o, l.scrollTop),
                    null != l.scrollLeft && On(o, l.scrollLeft));
              },
              triggerOnKeyDown: Qn(la),
              triggerOnKeyPress: Qn(ca),
              triggerOnKeyUp: sa,
              triggerOnMouseDown: Qn(fa),
              execCommand: function (e) {
                if (Qo.hasOwnProperty(e)) return Qo[e].call(null, this);
              },
              triggerElectric: Qn(function (e) {
                Da(this, e);
              }),
              findPosH: function (e, t, r, n) {
                var i = 1;
                t < 0 && ((i = -1), (t = -t));
                for (
                  var o = lt(this.doc, e), a = 0;
                  a < t && !(o = Oa(this.doc, o, i, r, n)).hitSide;
                  ++a
                );
                return o;
              },
              moveH: Qn(function (e, t) {
                var r = this;
                this.extendSelectionsBy(function (n) {
                  return r.display.shift || r.doc.extend || n.empty()
                    ? Oa(r.doc, n.head, e, t, r.options.rtlMoveVisually)
                    : e < 0
                    ? n.from()
                    : n.to();
                }, U);
              }),
              deleteH: Qn(function (e, t) {
                var r = this.doc.sel,
                  n = this.doc;
                r.somethingSelected()
                  ? n.replaceSelection("", null, "+delete")
                  : Go(this, function (r) {
                      var i = Oa(n, r.head, e, t, !1);
                      return e < 0
                        ? { from: i, to: r.head }
                        : { from: r.head, to: i };
                    });
              }),
              findPosV: function (e, t, r, n) {
                var i = 1,
                  o = n;
                t < 0 && ((i = -1), (t = -t));
                for (var a = lt(this.doc, e), l = 0; l < t; ++l) {
                  var s = Vr(this, a, "div");
                  if (
                    (null == o ? (o = s.left) : (s.left = o),
                    (a = qa(this, s, i, r)).hitSide)
                  )
                    break;
                }
                return a;
              },
              moveV: Qn(function (e, t) {
                var r = this,
                  n = this.doc,
                  i = [],
                  o =
                    !this.display.shift &&
                    !n.extend &&
                    n.sel.somethingSelected();
                if (
                  (n.extendSelectionsBy(function (a) {
                    if (o) return e < 0 ? a.from() : a.to();
                    var l = Vr(r, a.head, "div");
                    null != a.goalColumn && (l.left = a.goalColumn),
                      i.push(l.left);
                    var s = qa(r, l, e, t);
                    return (
                      "page" == t &&
                        a == n.sel.primary() &&
                        Tn(r, Ur(r, s, "div").top - l.top),
                      s
                    );
                  }, U),
                  i.length)
                )
                  for (var a = 0; a < n.sel.ranges.length; a++)
                    n.sel.ranges[a].goalColumn = i[a];
              }),
              findWordAt: function (e) {
                var t = this.doc,
                  r = Ve(t, e.line).text,
                  n = e.ch,
                  i = e.ch;
                if (r) {
                  var o = this.getHelper(e, "wordChars");
                  ("before" != e.sticky && i != r.length) || !n ? ++i : --n;
                  for (
                    var a = r.charAt(n),
                      l = te(a, o)
                        ? function (e) {
                            return te(e, o);
                          }
                        : /\s/.test(a)
                        ? function (e) {
                            return /\s/.test(e);
                          }
                        : function (e) {
                            return !/\s/.test(e) && !te(e);
                          };
                    n > 0 && l(r.charAt(n - 1));

                  )
                    --n;
                  for (; i < r.length && l(r.charAt(i)); ) ++i;
                }
                return new xi(et(e.line, n), et(e.line, i));
              },
              toggleOverwrite: function (e) {
                (null != e && e == this.state.overwrite) ||
                  ((this.state.overwrite = !this.state.overwrite)
                    ? F(this.display.cursorDiv, "CodeMirror-overwrite")
                    : M(this.display.cursorDiv, "CodeMirror-overwrite"),
                  he(this, "overwriteToggle", this, this.state.overwrite));
              },
              hasFocus: function () {
                return this.display.input.getField() == E();
              },
              isReadOnly: function () {
                return !(!this.options.readOnly && !this.doc.cantEdit);
              },
              scrollTo: Qn(function (e, t) {
                An(this, e, t);
              }),
              getScrollInfo: function () {
                var e = this.display.scroller;
                return {
                  left: e.scrollLeft,
                  top: e.scrollTop,
                  height: e.scrollHeight - Sr(this) - this.display.barHeight,
                  width: e.scrollWidth - Sr(this) - this.display.barWidth,
                  clientHeight: Lr(this),
                  clientWidth: Mr(this)
                };
              },
              scrollIntoView: Qn(function (e, t) {
                null == e
                  ? ((e = { from: this.doc.sel.primary().head, to: null }),
                    null == t && (t = this.options.cursorScrollMargin))
                  : "number" == typeof e
                  ? (e = { from: et(e, 0), to: null })
                  : null == e.from && (e = { from: e, to: null }),
                  e.to || (e.to = e.from),
                  (e.margin = t || 0),
                  null != e.from.line
                    ? (function (e, t) {
                        Dn(e), (e.curOp.scrollToPos = t);
                      })(this, e)
                    : En(this, e.from, e.to, e.margin);
              }),
              setSize: Qn(function (e, t) {
                var r = this,
                  n = function (e) {
                    return "number" == typeof e || /^\d+$/.test(String(e))
                      ? e + "px"
                      : e;
                  };
                null != e && (this.display.wrapper.style.width = n(e)),
                  null != t && (this.display.wrapper.style.height = n(t)),
                  this.options.lineWrapping && Pr(this);
                var i = this.display.viewFrom;
                this.doc.iter(i, this.display.viewTo, function (e) {
                  if (e.widgets)
                    for (var t = 0; t < e.widgets.length; t++)
                      if (e.widgets[t].noHScroll) {
                        un(r, i, "widget");
                        break;
                      }
                  ++i;
                }),
                  (this.curOp.forceUpdate = !0),
                  he(this, "refresh", this);
              }),
              operation: function (e) {
                return Zn(this, e);
              },
              startOperation: function () {
                return $n(this);
              },
              endOperation: function () {
                return Un(this);
              },
              refresh: Qn(function () {
                var e = this.display.cachedTextHeight;
                cn(this),
                  (this.curOp.forceUpdate = !0),
                  jr(this),
                  An(this, this.doc.scrollLeft, this.doc.scrollTop),
                  ai(this.display),
                  (null == e || Math.abs(e - en(this.display)) > 0.5) &&
                    an(this),
                  he(this, "refresh", this);
              }),
              swapDoc: Qn(function (e) {
                var t = this.doc;
                return (
                  (t.cm = null),
                  this.state.selectingText && this.state.selectingText(),
                  Ei(this, e),
                  jr(this),
                  this.display.input.reset(),
                  An(this, e.scrollLeft, e.scrollTop),
                  (this.curOp.forceScroll = !0),
                  lr(this, "swapDoc", this, t),
                  t
                );
              }),
              phrase: function (e) {
                var t = this.options.phrases;
                return t && Object.prototype.hasOwnProperty.call(t, e)
                  ? t[e]
                  : e;
              },
              getInputField: function () {
                return this.display.input.getField();
              },
              getWrapperElement: function () {
                return this.display.wrapper;
              },
              getScrollerElement: function () {
                return this.display.scroller;
              },
              getGutterElement: function () {
                return this.display.gutters;
              }
            }),
              ye(e),
              (e.registerHelper = function (t, n, i) {
                r.hasOwnProperty(t) || (r[t] = e[t] = { _global: [] }),
                  (r[t][n] = i);
              }),
              (e.registerGlobalHelper = function (t, n, i, o) {
                e.registerHelper(t, n, o),
                  r[t]._global.push({ pred: i, val: o });
              });
          })(Ca);
        var Ha = "iter insert remove copy getEditor constructor".split(" ");
        for (var $a in To.prototype)
          To.prototype.hasOwnProperty($a) &&
            B(Ha, $a) < 0 &&
            (Ca.prototype[$a] = (function (e) {
              return function () {
                return e.apply(this.doc, arguments);
              };
            })(To.prototype[$a]));
        return (
          ye(To),
          (Ca.inputStyles = { textarea: Ra, contenteditable: Ia }),
          (Ca.defineMode = function (e) {
            Ca.defaults.mode || "null" == e || (Ca.defaults.mode = e),
              function (e, t) {
                arguments.length > 2 &&
                  (t.dependencies = Array.prototype.slice.call(arguments, 2)),
                  (qe[e] = t);
              }.apply(this, arguments);
          }),
          (Ca.defineMIME = function (e, t) {
            Ie[e] = t;
          }),
          Ca.defineMode("null", function () {
            return {
              token: function (e) {
                return e.skipToEnd();
              }
            };
          }),
          Ca.defineMIME("text/plain", "null"),
          (Ca.defineExtension = function (e, t) {
            Ca.prototype[e] = t;
          }),
          (Ca.defineDocExtension = function (e, t) {
            To.prototype[e] = t;
          }),
          (Ca.fromTextArea = function (e, t) {
            if (
              (((t = t ? I(t) : {}).value = e.value),
              !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
              !t.placeholder &&
                e.placeholder &&
                (t.placeholder = e.placeholder),
              null == t.autofocus)
            ) {
              var r = E();
              t.autofocus =
                r == e ||
                (null != e.getAttribute("autofocus") && r == document.body);
            }
            function n() {
              e.value = l.getValue();
            }
            var i;
            if (
              e.form &&
              (pe(e.form, "submit", n), !t.leaveSubmitMethodAlone)
            ) {
              var o = e.form;
              i = o.submit;
              try {
                var a = (o.submit = function () {
                  n(), (o.submit = i), o.submit(), (o.submit = a);
                });
              } catch (e) {}
            }
            (t.finishInit = function (r) {
              (r.save = n),
                (r.getTextArea = function () {
                  return e;
                }),
                (r.toTextArea = function () {
                  (r.toTextArea = isNaN),
                    n(),
                    e.parentNode.removeChild(r.getWrapperElement()),
                    (e.style.display = ""),
                    e.form &&
                      (me(e.form, "submit", n),
                      t.leaveSubmitMethodAlone ||
                        "function" != typeof e.form.submit ||
                        (e.form.submit = i));
                });
            }),
              (e.style.display = "none");
            var l = Ca(function (t) {
              return e.parentNode.insertBefore(t, e.nextSibling);
            }, t);
            return l;
          }),
          (function (e) {
            (e.off = me),
              (e.on = pe),
              (e.wheelEventPixels = vi),
              (e.Doc = To),
              (e.splitLines = Ee),
              (e.countColumn = P),
              (e.findColumn = V),
              (e.isWordChar = ee),
              (e.Pass = R),
              (e.signal = he),
              (e.Line = Vt),
              (e.changeEnd = _i),
              (e.scrollbarModel = Wn),
              (e.Pos = et),
              (e.cmpPos = tt),
              (e.modes = qe),
              (e.mimeModes = Ie),
              (e.resolveMode = Pe),
              (e.getMode = je),
              (e.modeExtensions = Be),
              (e.extendMode = We),
              (e.copyState = Re),
              (e.startState = $e),
              (e.innerMode = He),
              (e.commands = Qo),
              (e.keyMap = Bo),
              (e.keyName = Vo),
              (e.isModifierKey = $o),
              (e.lookupKey = Ho),
              (e.normalizeKeyMap = Ro),
              (e.StringStream = Ue),
              (e.SharedTextMarker = Co),
              (e.TextMarker = wo),
              (e.LineWidget = yo),
              (e.e_preventDefault = xe),
              (e.e_stopPropagation = ke),
              (e.e_stop = _e),
              (e.addClass = F),
              (e.contains = D),
              (e.rmClass = M),
              (e.keyNames = qo);
          })(Ca),
          (Ca.version = "5.51.0"),
          Ca
        );
      })();
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        function t(e) {
          for (var t = {}, r = 0; r < e.length; ++r) t[e[r].toLowerCase()] = !0;
          return t;
        }
        e.defineMode("css", function (t, r) {
          var n = r.inline;
          r.propertyKeywords || (r = e.resolveMode("text/css"));
          var i,
            o,
            a = t.indentUnit,
            l = r.tokenHooks,
            s = r.documentTypes || {},
            c = r.mediaTypes || {},
            u = r.mediaFeatures || {},
            d = r.mediaValueKeywords || {},
            p = r.propertyKeywords || {},
            f = r.nonStandardPropertyKeywords || {},
            m = r.fontProperties || {},
            h = r.counterDescriptors || {},
            g = r.colorKeywords || {},
            v = r.valueKeywords || {},
            b = r.allowNested,
            y = r.lineComment,
            x = !0 === r.supportsAtComponent;
          function k(e, t) {
            return (i = t), e;
          }
          function w(e) {
            return function (t, r) {
              for (var n, i = !1; null != (n = t.next()); ) {
                if (n == e && !i) {
                  ")" == e && t.backUp(1);
                  break;
                }
                i = !i && "\\" == n;
              }
              return (
                (n == e || (!i && ")" != e)) && (r.tokenize = null),
                k("string", "string")
              );
            };
          }
          function _(e, t) {
            return (
              e.next(),
              e.match(/\s*[\"\')]/, !1)
                ? (t.tokenize = null)
                : (t.tokenize = w(")")),
              k(null, "(")
            );
          }
          function C(e, t, r) {
            (this.type = e), (this.indent = t), (this.prev = r);
          }
          function S(e, t, r, n) {
            return (
              (e.context = new C(
                r,
                t.indentation() + (!1 === n ? 0 : a),
                e.context
              )),
              r
            );
          }
          function M(e) {
            return (
              e.context.prev && (e.context = e.context.prev), e.context.type
            );
          }
          function L(e, t, r) {
            return A[r.context.type](e, t, r);
          }
          function T(e, t, r, n) {
            for (var i = n || 1; i > 0; i--) r.context = r.context.prev;
            return L(e, t, r);
          }
          function z(e) {
            var t = e.current().toLowerCase();
            o = v.hasOwnProperty(t)
              ? "atom"
              : g.hasOwnProperty(t)
              ? "keyword"
              : "variable";
          }
          var A = {
            top: function (e, t, r) {
              if ("{" == e) return S(r, t, "block");
              if ("}" == e && r.context.prev) return M(r);
              if (x && /@component/i.test(e))
                return S(r, t, "atComponentBlock");
              if (/^@(-moz-)?document$/i.test(e))
                return S(r, t, "documentTypes");
              if (/^@(media|supports|(-moz-)?document|import)$/i.test(e))
                return S(r, t, "atBlock");
              if (/^@(font-face|counter-style)/i.test(e))
                return (r.stateArg = e), "restricted_atBlock_before";
              if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e))
                return "keyframes";
              if (e && "@" == e.charAt(0)) return S(r, t, "at");
              if ("hash" == e) o = "builtin";
              else if ("word" == e) o = "tag";
              else {
                if ("variable-definition" == e) return "maybeprop";
                if ("interpolation" == e) return S(r, t, "interpolation");
                if (":" == e) return "pseudo";
                if (b && "(" == e) return S(r, t, "parens");
              }
              return r.context.type;
            },
            block: function (e, t, r) {
              if ("word" == e) {
                var n = t.current().toLowerCase();
                return p.hasOwnProperty(n)
                  ? ((o = "property"), "maybeprop")
                  : f.hasOwnProperty(n)
                  ? ((o = "string-2"), "maybeprop")
                  : b
                  ? ((o = t.match(/^\s*:(?:\s|$)/, !1) ? "property" : "tag"),
                    "block")
                  : ((o += " error"), "maybeprop");
              }
              return "meta" == e
                ? "block"
                : b || ("hash" != e && "qualifier" != e)
                ? A.top(e, t, r)
                : ((o = "error"), "block");
            },
            maybeprop: function (e, t, r) {
              return ":" == e ? S(r, t, "prop") : L(e, t, r);
            },
            prop: function (e, t, r) {
              if (";" == e) return M(r);
              if ("{" == e && b) return S(r, t, "propBlock");
              if ("}" == e || "{" == e) return T(e, t, r);
              if ("(" == e) return S(r, t, "parens");
              if (
                "hash" != e ||
                /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(
                  t.current()
                )
              ) {
                if ("word" == e) z(t);
                else if ("interpolation" == e) return S(r, t, "interpolation");
              } else o += " error";
              return "prop";
            },
            propBlock: function (e, t, r) {
              return "}" == e
                ? M(r)
                : "word" == e
                ? ((o = "property"), "maybeprop")
                : r.context.type;
            },
            parens: function (e, t, r) {
              return "{" == e || "}" == e
                ? T(e, t, r)
                : ")" == e
                ? M(r)
                : "(" == e
                ? S(r, t, "parens")
                : "interpolation" == e
                ? S(r, t, "interpolation")
                : ("word" == e && z(t), "parens");
            },
            pseudo: function (e, t, r) {
              return "meta" == e
                ? "pseudo"
                : "word" == e
                ? ((o = "variable-3"), r.context.type)
                : L(e, t, r);
            },
            documentTypes: function (e, t, r) {
              return "word" == e && s.hasOwnProperty(t.current())
                ? ((o = "tag"), r.context.type)
                : A.atBlock(e, t, r);
            },
            atBlock: function (e, t, r) {
              if ("(" == e) return S(r, t, "atBlock_parens");
              if ("}" == e || ";" == e) return T(e, t, r);
              if ("{" == e) return M(r) && S(r, t, b ? "block" : "top");
              if ("interpolation" == e) return S(r, t, "interpolation");
              if ("word" == e) {
                var n = t.current().toLowerCase();
                o =
                  "only" == n || "not" == n || "and" == n || "or" == n
                    ? "keyword"
                    : c.hasOwnProperty(n)
                    ? "attribute"
                    : u.hasOwnProperty(n)
                    ? "property"
                    : d.hasOwnProperty(n)
                    ? "keyword"
                    : p.hasOwnProperty(n)
                    ? "property"
                    : f.hasOwnProperty(n)
                    ? "string-2"
                    : v.hasOwnProperty(n)
                    ? "atom"
                    : g.hasOwnProperty(n)
                    ? "keyword"
                    : "error";
              }
              return r.context.type;
            },
            atComponentBlock: function (e, t, r) {
              return "}" == e
                ? T(e, t, r)
                : "{" == e
                ? M(r) && S(r, t, b ? "block" : "top", !1)
                : ("word" == e && (o = "error"), r.context.type);
            },
            atBlock_parens: function (e, t, r) {
              return ")" == e
                ? M(r)
                : "{" == e || "}" == e
                ? T(e, t, r, 2)
                : A.atBlock(e, t, r);
            },
            restricted_atBlock_before: function (e, t, r) {
              return "{" == e
                ? S(r, t, "restricted_atBlock")
                : "word" == e && "@counter-style" == r.stateArg
                ? ((o = "variable"), "restricted_atBlock_before")
                : L(e, t, r);
            },
            restricted_atBlock: function (e, t, r) {
              return "}" == e
                ? ((r.stateArg = null), M(r))
                : "word" == e
                ? ((o =
                    ("@font-face" == r.stateArg &&
                      !m.hasOwnProperty(t.current().toLowerCase())) ||
                    ("@counter-style" == r.stateArg &&
                      !h.hasOwnProperty(t.current().toLowerCase()))
                      ? "error"
                      : "property"),
                  "maybeprop")
                : "restricted_atBlock";
            },
            keyframes: function (e, t, r) {
              return "word" == e
                ? ((o = "variable"), "keyframes")
                : "{" == e
                ? S(r, t, "top")
                : L(e, t, r);
            },
            at: function (e, t, r) {
              return ";" == e
                ? M(r)
                : "{" == e || "}" == e
                ? T(e, t, r)
                : ("word" == e ? (o = "tag") : "hash" == e && (o = "builtin"),
                  "at");
            },
            interpolation: function (e, t, r) {
              return "}" == e
                ? M(r)
                : "{" == e || ";" == e
                ? T(e, t, r)
                : ("word" == e
                    ? (o = "variable")
                    : "variable" != e && "(" != e && ")" != e && (o = "error"),
                  "interpolation");
            }
          };
          return {
            startState: function (e) {
              return {
                tokenize: null,
                state: n ? "block" : "top",
                stateArg: null,
                context: new C(n ? "block" : "top", e || 0, null)
              };
            },
            token: function (e, t) {
              if (!t.tokenize && e.eatSpace()) return null;
              var r = (
                t.tokenize ||
                function (e, t) {
                  var r = e.next();
                  if (l[r]) {
                    var n = l[r](e, t);
                    if (!1 !== n) return n;
                  }
                  return "@" == r
                    ? (e.eatWhile(/[\w\\\-]/), k("def", e.current()))
                    : "=" == r || (("~" == r || "|" == r) && e.eat("="))
                    ? k(null, "compare")
                    : '"' == r || "'" == r
                    ? ((t.tokenize = w(r)), t.tokenize(e, t))
                    : "#" == r
                    ? (e.eatWhile(/[\w\\\-]/), k("atom", "hash"))
                    : "!" == r
                    ? (e.match(/^\s*\w*/), k("keyword", "important"))
                    : /\d/.test(r) || ("." == r && e.eat(/\d/))
                    ? (e.eatWhile(/[\w.%]/), k("number", "unit"))
                    : "-" !== r
                    ? /[,+>*\/]/.test(r)
                      ? k(null, "select-op")
                      : "." == r && e.match(/^-?[_a-z][_a-z0-9-]*/i)
                      ? k("qualifier", "qualifier")
                      : /[:;{}\[\]\(\)]/.test(r)
                      ? k(null, r)
                      : e.match(/[\w-.]+(?=\()/)
                      ? (/^(url(-prefix)?|domain|regexp)$/.test(
                          e.current().toLowerCase()
                        ) && (t.tokenize = _),
                        k("variable callee", "variable"))
                      : /[\w\\\-]/.test(r)
                      ? (e.eatWhile(/[\w\\\-]/), k("property", "word"))
                      : k(null, null)
                    : /[\d.]/.test(e.peek())
                    ? (e.eatWhile(/[\w.%]/), k("number", "unit"))
                    : e.match(/^-[\w\\\-]*/)
                    ? (e.eatWhile(/[\w\\\-]/),
                      e.match(/^\s*:/, !1)
                        ? k("variable-2", "variable-definition")
                        : k("variable-2", "variable"))
                    : e.match(/^\w+-/)
                    ? k("meta", "meta")
                    : void 0;
                }
              )(e, t);
              return (
                r && "object" == typeof r && ((i = r[1]), (r = r[0])),
                (o = r),
                "comment" != i && (t.state = A[t.state](i, e, t)),
                o
              );
            },
            indent: function (e, t) {
              var r = e.context,
                n = t && t.charAt(0),
                i = r.indent;
              return (
                "prop" != r.type || ("}" != n && ")" != n) || (r = r.prev),
                r.prev &&
                  ("}" != n ||
                  ("block" != r.type &&
                    "top" != r.type &&
                    "interpolation" != r.type &&
                    "restricted_atBlock" != r.type)
                    ? ((")" != n ||
                        ("parens" != r.type && "atBlock_parens" != r.type)) &&
                        ("{" != n ||
                          ("at" != r.type && "atBlock" != r.type))) ||
                      (i = Math.max(0, r.indent - a))
                    : ((r = r.prev), (i = r.indent))),
                i
              );
            },
            electricChars: "}",
            blockCommentStart: "/*",
            blockCommentEnd: "*/",
            blockCommentContinue: " * ",
            lineComment: y,
            fold: "brace"
          };
        });
        var r = ["domain", "regexp", "url", "url-prefix"],
          n = t(r),
          i = [
            "all",
            "aural",
            "braille",
            "handheld",
            "print",
            "projection",
            "screen",
            "tty",
            "tv",
            "embossed"
          ],
          o = t(i),
          a = [
            "width",
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height",
            "device-width",
            "min-device-width",
            "max-device-width",
            "device-height",
            "min-device-height",
            "max-device-height",
            "aspect-ratio",
            "min-aspect-ratio",
            "max-aspect-ratio",
            "device-aspect-ratio",
            "min-device-aspect-ratio",
            "max-device-aspect-ratio",
            "color",
            "min-color",
            "max-color",
            "color-index",
            "min-color-index",
            "max-color-index",
            "monochrome",
            "min-monochrome",
            "max-monochrome",
            "resolution",
            "min-resolution",
            "max-resolution",
            "scan",
            "grid",
            "orientation",
            "device-pixel-ratio",
            "min-device-pixel-ratio",
            "max-device-pixel-ratio",
            "pointer",
            "any-pointer",
            "hover",
            "any-hover"
          ],
          l = t(a),
          s = [
            "landscape",
            "portrait",
            "none",
            "coarse",
            "fine",
            "on-demand",
            "hover",
            "interlace",
            "progressive"
          ],
          c = t(s),
          u = [
            "align-content",
            "align-items",
            "align-self",
            "alignment-adjust",
            "alignment-baseline",
            "anchor-point",
            "animation",
            "animation-delay",
            "animation-direction",
            "animation-duration",
            "animation-fill-mode",
            "animation-iteration-count",
            "animation-name",
            "animation-play-state",
            "animation-timing-function",
            "appearance",
            "azimuth",
            "backface-visibility",
            "background",
            "background-attachment",
            "background-blend-mode",
            "background-clip",
            "background-color",
            "background-image",
            "background-origin",
            "background-position",
            "background-repeat",
            "background-size",
            "baseline-shift",
            "binding",
            "bleed",
            "bookmark-label",
            "bookmark-level",
            "bookmark-state",
            "bookmark-target",
            "border",
            "border-bottom",
            "border-bottom-color",
            "border-bottom-left-radius",
            "border-bottom-right-radius",
            "border-bottom-style",
            "border-bottom-width",
            "border-collapse",
            "border-color",
            "border-image",
            "border-image-outset",
            "border-image-repeat",
            "border-image-slice",
            "border-image-source",
            "border-image-width",
            "border-left",
            "border-left-color",
            "border-left-style",
            "border-left-width",
            "border-radius",
            "border-right",
            "border-right-color",
            "border-right-style",
            "border-right-width",
            "border-spacing",
            "border-style",
            "border-top",
            "border-top-color",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-top-style",
            "border-top-width",
            "border-width",
            "bottom",
            "box-decoration-break",
            "box-shadow",
            "box-sizing",
            "break-after",
            "break-before",
            "break-inside",
            "caption-side",
            "caret-color",
            "clear",
            "clip",
            "color",
            "color-profile",
            "column-count",
            "column-fill",
            "column-gap",
            "column-rule",
            "column-rule-color",
            "column-rule-style",
            "column-rule-width",
            "column-span",
            "column-width",
            "columns",
            "content",
            "counter-increment",
            "counter-reset",
            "crop",
            "cue",
            "cue-after",
            "cue-before",
            "cursor",
            "direction",
            "display",
            "dominant-baseline",
            "drop-initial-after-adjust",
            "drop-initial-after-align",
            "drop-initial-before-adjust",
            "drop-initial-before-align",
            "drop-initial-size",
            "drop-initial-value",
            "elevation",
            "empty-cells",
            "fit",
            "fit-position",
            "flex",
            "flex-basis",
            "flex-direction",
            "flex-flow",
            "flex-grow",
            "flex-shrink",
            "flex-wrap",
            "float",
            "float-offset",
            "flow-from",
            "flow-into",
            "font",
            "font-feature-settings",
            "font-family",
            "font-kerning",
            "font-language-override",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-synthesis",
            "font-variant",
            "font-variant-alternates",
            "font-variant-caps",
            "font-variant-east-asian",
            "font-variant-ligatures",
            "font-variant-numeric",
            "font-variant-position",
            "font-weight",
            "grid",
            "grid-area",
            "grid-auto-columns",
            "grid-auto-flow",
            "grid-auto-rows",
            "grid-column",
            "grid-column-end",
            "grid-column-gap",
            "grid-column-start",
            "grid-gap",
            "grid-row",
            "grid-row-end",
            "grid-row-gap",
            "grid-row-start",
            "grid-template",
            "grid-template-areas",
            "grid-template-columns",
            "grid-template-rows",
            "hanging-punctuation",
            "height",
            "hyphens",
            "icon",
            "image-orientation",
            "image-rendering",
            "image-resolution",
            "inline-box-align",
            "justify-content",
            "justify-items",
            "justify-self",
            "left",
            "letter-spacing",
            "line-break",
            "line-height",
            "line-stacking",
            "line-stacking-ruby",
            "line-stacking-shift",
            "line-stacking-strategy",
            "list-style",
            "list-style-image",
            "list-style-position",
            "list-style-type",
            "margin",
            "margin-bottom",
            "margin-left",
            "margin-right",
            "margin-top",
            "marks",
            "marquee-direction",
            "marquee-loop",
            "marquee-play-count",
            "marquee-speed",
            "marquee-style",
            "max-height",
            "max-width",
            "min-height",
            "min-width",
            "mix-blend-mode",
            "move-to",
            "nav-down",
            "nav-index",
            "nav-left",
            "nav-right",
            "nav-up",
            "object-fit",
            "object-position",
            "opacity",
            "order",
            "orphans",
            "outline",
            "outline-color",
            "outline-offset",
            "outline-style",
            "outline-width",
            "overflow",
            "overflow-style",
            "overflow-wrap",
            "overflow-x",
            "overflow-y",
            "padding",
            "padding-bottom",
            "padding-left",
            "padding-right",
            "padding-top",
            "page",
            "page-break-after",
            "page-break-before",
            "page-break-inside",
            "page-policy",
            "pause",
            "pause-after",
            "pause-before",
            "perspective",
            "perspective-origin",
            "pitch",
            "pitch-range",
            "place-content",
            "place-items",
            "place-self",
            "play-during",
            "position",
            "presentation-level",
            "punctuation-trim",
            "quotes",
            "region-break-after",
            "region-break-before",
            "region-break-inside",
            "region-fragment",
            "rendering-intent",
            "resize",
            "rest",
            "rest-after",
            "rest-before",
            "richness",
            "right",
            "rotation",
            "rotation-point",
            "ruby-align",
            "ruby-overhang",
            "ruby-position",
            "ruby-span",
            "shape-image-threshold",
            "shape-inside",
            "shape-margin",
            "shape-outside",
            "size",
            "speak",
            "speak-as",
            "speak-header",
            "speak-numeral",
            "speak-punctuation",
            "speech-rate",
            "stress",
            "string-set",
            "tab-size",
            "table-layout",
            "target",
            "target-name",
            "target-new",
            "target-position",
            "text-align",
            "text-align-last",
            "text-decoration",
            "text-decoration-color",
            "text-decoration-line",
            "text-decoration-skip",
            "text-decoration-style",
            "text-emphasis",
            "text-emphasis-color",
            "text-emphasis-position",
            "text-emphasis-style",
            "text-height",
            "text-indent",
            "text-justify",
            "text-outline",
            "text-overflow",
            "text-shadow",
            "text-size-adjust",
            "text-space-collapse",
            "text-transform",
            "text-underline-position",
            "text-wrap",
            "top",
            "transform",
            "transform-origin",
            "transform-style",
            "transition",
            "transition-delay",
            "transition-duration",
            "transition-property",
            "transition-timing-function",
            "unicode-bidi",
            "user-select",
            "vertical-align",
            "visibility",
            "voice-balance",
            "voice-duration",
            "voice-family",
            "voice-pitch",
            "voice-range",
            "voice-rate",
            "voice-stress",
            "voice-volume",
            "volume",
            "white-space",
            "widows",
            "width",
            "will-change",
            "word-break",
            "word-spacing",
            "word-wrap",
            "z-index",
            "clip-path",
            "clip-rule",
            "mask",
            "enable-background",
            "filter",
            "flood-color",
            "flood-opacity",
            "lighting-color",
            "stop-color",
            "stop-opacity",
            "pointer-events",
            "color-interpolation",
            "color-interpolation-filters",
            "color-rendering",
            "fill",
            "fill-opacity",
            "fill-rule",
            "image-rendering",
            "marker",
            "marker-end",
            "marker-mid",
            "marker-start",
            "shape-rendering",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "text-rendering",
            "baseline-shift",
            "dominant-baseline",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "text-anchor",
            "writing-mode"
          ],
          d = t(u),
          p = [
            "scrollbar-arrow-color",
            "scrollbar-base-color",
            "scrollbar-dark-shadow-color",
            "scrollbar-face-color",
            "scrollbar-highlight-color",
            "scrollbar-shadow-color",
            "scrollbar-3d-light-color",
            "scrollbar-track-color",
            "shape-inside",
            "searchfield-cancel-button",
            "searchfield-decoration",
            "searchfield-results-button",
            "searchfield-results-decoration",
            "zoom"
          ],
          f = t(p),
          m = t([
            "font-family",
            "src",
            "unicode-range",
            "font-variant",
            "font-feature-settings",
            "font-stretch",
            "font-weight",
            "font-style"
          ]),
          h = t([
            "additive-symbols",
            "fallback",
            "negative",
            "pad",
            "prefix",
            "range",
            "speak-as",
            "suffix",
            "symbols",
            "system"
          ]),
          g = [
            "aliceblue",
            "antiquewhite",
            "aqua",
            "aquamarine",
            "azure",
            "beige",
            "bisque",
            "black",
            "blanchedalmond",
            "blue",
            "blueviolet",
            "brown",
            "burlywood",
            "cadetblue",
            "chartreuse",
            "chocolate",
            "coral",
            "cornflowerblue",
            "cornsilk",
            "crimson",
            "cyan",
            "darkblue",
            "darkcyan",
            "darkgoldenrod",
            "darkgray",
            "darkgreen",
            "darkkhaki",
            "darkmagenta",
            "darkolivegreen",
            "darkorange",
            "darkorchid",
            "darkred",
            "darksalmon",
            "darkseagreen",
            "darkslateblue",
            "darkslategray",
            "darkturquoise",
            "darkviolet",
            "deeppink",
            "deepskyblue",
            "dimgray",
            "dodgerblue",
            "firebrick",
            "floralwhite",
            "forestgreen",
            "fuchsia",
            "gainsboro",
            "ghostwhite",
            "gold",
            "goldenrod",
            "gray",
            "grey",
            "green",
            "greenyellow",
            "honeydew",
            "hotpink",
            "indianred",
            "indigo",
            "ivory",
            "khaki",
            "lavender",
            "lavenderblush",
            "lawngreen",
            "lemonchiffon",
            "lightblue",
            "lightcoral",
            "lightcyan",
            "lightgoldenrodyellow",
            "lightgray",
            "lightgreen",
            "lightpink",
            "lightsalmon",
            "lightseagreen",
            "lightskyblue",
            "lightslategray",
            "lightsteelblue",
            "lightyellow",
            "lime",
            "limegreen",
            "linen",
            "magenta",
            "maroon",
            "mediumaquamarine",
            "mediumblue",
            "mediumorchid",
            "mediumpurple",
            "mediumseagreen",
            "mediumslateblue",
            "mediumspringgreen",
            "mediumturquoise",
            "mediumvioletred",
            "midnightblue",
            "mintcream",
            "mistyrose",
            "moccasin",
            "navajowhite",
            "navy",
            "oldlace",
            "olive",
            "olivedrab",
            "orange",
            "orangered",
            "orchid",
            "palegoldenrod",
            "palegreen",
            "paleturquoise",
            "palevioletred",
            "papayawhip",
            "peachpuff",
            "peru",
            "pink",
            "plum",
            "powderblue",
            "purple",
            "rebeccapurple",
            "red",
            "rosybrown",
            "royalblue",
            "saddlebrown",
            "salmon",
            "sandybrown",
            "seagreen",
            "seashell",
            "sienna",
            "silver",
            "skyblue",
            "slateblue",
            "slategray",
            "snow",
            "springgreen",
            "steelblue",
            "tan",
            "teal",
            "thistle",
            "tomato",
            "turquoise",
            "violet",
            "wheat",
            "white",
            "whitesmoke",
            "yellow",
            "yellowgreen"
          ],
          v = t(g),
          b = [
            "above",
            "absolute",
            "activeborder",
            "additive",
            "activecaption",
            "afar",
            "after-white-space",
            "ahead",
            "alias",
            "all",
            "all-scroll",
            "alphabetic",
            "alternate",
            "always",
            "amharic",
            "amharic-abegede",
            "antialiased",
            "appworkspace",
            "arabic-indic",
            "armenian",
            "asterisks",
            "attr",
            "auto",
            "auto-flow",
            "avoid",
            "avoid-column",
            "avoid-page",
            "avoid-region",
            "background",
            "backwards",
            "baseline",
            "below",
            "bidi-override",
            "binary",
            "bengali",
            "blink",
            "block",
            "block-axis",
            "bold",
            "bolder",
            "border",
            "border-box",
            "both",
            "bottom",
            "break",
            "break-all",
            "break-word",
            "bullets",
            "button",
            "button-bevel",
            "buttonface",
            "buttonhighlight",
            "buttonshadow",
            "buttontext",
            "calc",
            "cambodian",
            "capitalize",
            "caps-lock-indicator",
            "caption",
            "captiontext",
            "caret",
            "cell",
            "center",
            "checkbox",
            "circle",
            "cjk-decimal",
            "cjk-earthly-branch",
            "cjk-heavenly-stem",
            "cjk-ideographic",
            "clear",
            "clip",
            "close-quote",
            "col-resize",
            "collapse",
            "color",
            "color-burn",
            "color-dodge",
            "column",
            "column-reverse",
            "compact",
            "condensed",
            "contain",
            "content",
            "contents",
            "content-box",
            "context-menu",
            "continuous",
            "copy",
            "counter",
            "counters",
            "cover",
            "crop",
            "cross",
            "crosshair",
            "currentcolor",
            "cursive",
            "cyclic",
            "darken",
            "dashed",
            "decimal",
            "decimal-leading-zero",
            "default",
            "default-button",
            "dense",
            "destination-atop",
            "destination-in",
            "destination-out",
            "destination-over",
            "devanagari",
            "difference",
            "disc",
            "discard",
            "disclosure-closed",
            "disclosure-open",
            "document",
            "dot-dash",
            "dot-dot-dash",
            "dotted",
            "double",
            "down",
            "e-resize",
            "ease",
            "ease-in",
            "ease-in-out",
            "ease-out",
            "element",
            "ellipse",
            "ellipsis",
            "embed",
            "end",
            "ethiopic",
            "ethiopic-abegede",
            "ethiopic-abegede-am-et",
            "ethiopic-abegede-gez",
            "ethiopic-abegede-ti-er",
            "ethiopic-abegede-ti-et",
            "ethiopic-halehame-aa-er",
            "ethiopic-halehame-aa-et",
            "ethiopic-halehame-am-et",
            "ethiopic-halehame-gez",
            "ethiopic-halehame-om-et",
            "ethiopic-halehame-sid-et",
            "ethiopic-halehame-so-et",
            "ethiopic-halehame-ti-er",
            "ethiopic-halehame-ti-et",
            "ethiopic-halehame-tig",
            "ethiopic-numeric",
            "ew-resize",
            "exclusion",
            "expanded",
            "extends",
            "extra-condensed",
            "extra-expanded",
            "fantasy",
            "fast",
            "fill",
            "fixed",
            "flat",
            "flex",
            "flex-end",
            "flex-start",
            "footnotes",
            "forwards",
            "from",
            "geometricPrecision",
            "georgian",
            "graytext",
            "grid",
            "groove",
            "gujarati",
            "gurmukhi",
            "hand",
            "hangul",
            "hangul-consonant",
            "hard-light",
            "hebrew",
            "help",
            "hidden",
            "hide",
            "higher",
            "highlight",
            "highlighttext",
            "hiragana",
            "hiragana-iroha",
            "horizontal",
            "hsl",
            "hsla",
            "hue",
            "icon",
            "ignore",
            "inactiveborder",
            "inactivecaption",
            "inactivecaptiontext",
            "infinite",
            "infobackground",
            "infotext",
            "inherit",
            "initial",
            "inline",
            "inline-axis",
            "inline-block",
            "inline-flex",
            "inline-grid",
            "inline-table",
            "inset",
            "inside",
            "intrinsic",
            "invert",
            "italic",
            "japanese-formal",
            "japanese-informal",
            "justify",
            "kannada",
            "katakana",
            "katakana-iroha",
            "keep-all",
            "khmer",
            "korean-hangul-formal",
            "korean-hanja-formal",
            "korean-hanja-informal",
            "landscape",
            "lao",
            "large",
            "larger",
            "left",
            "level",
            "lighter",
            "lighten",
            "line-through",
            "linear",
            "linear-gradient",
            "lines",
            "list-item",
            "listbox",
            "listitem",
            "local",
            "logical",
            "loud",
            "lower",
            "lower-alpha",
            "lower-armenian",
            "lower-greek",
            "lower-hexadecimal",
            "lower-latin",
            "lower-norwegian",
            "lower-roman",
            "lowercase",
            "ltr",
            "luminosity",
            "malayalam",
            "match",
            "matrix",
            "matrix3d",
            "media-controls-background",
            "media-current-time-display",
            "media-fullscreen-button",
            "media-mute-button",
            "media-play-button",
            "media-return-to-realtime-button",
            "media-rewind-button",
            "media-seek-back-button",
            "media-seek-forward-button",
            "media-slider",
            "media-sliderthumb",
            "media-time-remaining-display",
            "media-volume-slider",
            "media-volume-slider-container",
            "media-volume-sliderthumb",
            "medium",
            "menu",
            "menulist",
            "menulist-button",
            "menulist-text",
            "menulist-textfield",
            "menutext",
            "message-box",
            "middle",
            "min-intrinsic",
            "mix",
            "mongolian",
            "monospace",
            "move",
            "multiple",
            "multiply",
            "myanmar",
            "n-resize",
            "narrower",
            "ne-resize",
            "nesw-resize",
            "no-close-quote",
            "no-drop",
            "no-open-quote",
            "no-repeat",
            "none",
            "normal",
            "not-allowed",
            "nowrap",
            "ns-resize",
            "numbers",
            "numeric",
            "nw-resize",
            "nwse-resize",
            "oblique",
            "octal",
            "opacity",
            "open-quote",
            "optimizeLegibility",
            "optimizeSpeed",
            "oriya",
            "oromo",
            "outset",
            "outside",
            "outside-shape",
            "overlay",
            "overline",
            "padding",
            "padding-box",
            "painted",
            "page",
            "paused",
            "persian",
            "perspective",
            "plus-darker",
            "plus-lighter",
            "pointer",
            "polygon",
            "portrait",
            "pre",
            "pre-line",
            "pre-wrap",
            "preserve-3d",
            "progress",
            "push-button",
            "radial-gradient",
            "radio",
            "read-only",
            "read-write",
            "read-write-plaintext-only",
            "rectangle",
            "region",
            "relative",
            "repeat",
            "repeating-linear-gradient",
            "repeating-radial-gradient",
            "repeat-x",
            "repeat-y",
            "reset",
            "reverse",
            "rgb",
            "rgba",
            "ridge",
            "right",
            "rotate",
            "rotate3d",
            "rotateX",
            "rotateY",
            "rotateZ",
            "round",
            "row",
            "row-resize",
            "row-reverse",
            "rtl",
            "run-in",
            "running",
            "s-resize",
            "sans-serif",
            "saturation",
            "scale",
            "scale3d",
            "scaleX",
            "scaleY",
            "scaleZ",
            "screen",
            "scroll",
            "scrollbar",
            "scroll-position",
            "se-resize",
            "searchfield",
            "searchfield-cancel-button",
            "searchfield-decoration",
            "searchfield-results-button",
            "searchfield-results-decoration",
            "self-start",
            "self-end",
            "semi-condensed",
            "semi-expanded",
            "separate",
            "serif",
            "show",
            "sidama",
            "simp-chinese-formal",
            "simp-chinese-informal",
            "single",
            "skew",
            "skewX",
            "skewY",
            "skip-white-space",
            "slide",
            "slider-horizontal",
            "slider-vertical",
            "sliderthumb-horizontal",
            "sliderthumb-vertical",
            "slow",
            "small",
            "small-caps",
            "small-caption",
            "smaller",
            "soft-light",
            "solid",
            "somali",
            "source-atop",
            "source-in",
            "source-out",
            "source-over",
            "space",
            "space-around",
            "space-between",
            "space-evenly",
            "spell-out",
            "square",
            "square-button",
            "start",
            "static",
            "status-bar",
            "stretch",
            "stroke",
            "sub",
            "subpixel-antialiased",
            "super",
            "sw-resize",
            "symbolic",
            "symbols",
            "system-ui",
            "table",
            "table-caption",
            "table-cell",
            "table-column",
            "table-column-group",
            "table-footer-group",
            "table-header-group",
            "table-row",
            "table-row-group",
            "tamil",
            "telugu",
            "text",
            "text-bottom",
            "text-top",
            "textarea",
            "textfield",
            "thai",
            "thick",
            "thin",
            "threeddarkshadow",
            "threedface",
            "threedhighlight",
            "threedlightshadow",
            "threedshadow",
            "tibetan",
            "tigre",
            "tigrinya-er",
            "tigrinya-er-abegede",
            "tigrinya-et",
            "tigrinya-et-abegede",
            "to",
            "top",
            "trad-chinese-formal",
            "trad-chinese-informal",
            "transform",
            "translate",
            "translate3d",
            "translateX",
            "translateY",
            "translateZ",
            "transparent",
            "ultra-condensed",
            "ultra-expanded",
            "underline",
            "unset",
            "up",
            "upper-alpha",
            "upper-armenian",
            "upper-greek",
            "upper-hexadecimal",
            "upper-latin",
            "upper-norwegian",
            "upper-roman",
            "uppercase",
            "urdu",
            "url",
            "var",
            "vertical",
            "vertical-text",
            "visible",
            "visibleFill",
            "visiblePainted",
            "visibleStroke",
            "visual",
            "w-resize",
            "wait",
            "wave",
            "wider",
            "window",
            "windowframe",
            "windowtext",
            "words",
            "wrap",
            "wrap-reverse",
            "x-large",
            "x-small",
            "xor",
            "xx-large",
            "xx-small"
          ],
          y = t(b),
          x = r
            .concat(i)
            .concat(a)
            .concat(s)
            .concat(u)
            .concat(p)
            .concat(g)
            .concat(b);
        function k(e, t) {
          for (var r, n = !1; null != (r = e.next()); ) {
            if (n && "/" == r) {
              t.tokenize = null;
              break;
            }
            n = "*" == r;
          }
          return ["comment", "comment"];
        }
        e.registerHelper("hintWords", "css", x),
          e.defineMIME("text/css", {
            documentTypes: n,
            mediaTypes: o,
            mediaFeatures: l,
            mediaValueKeywords: c,
            propertyKeywords: d,
            nonStandardPropertyKeywords: f,
            fontProperties: m,
            counterDescriptors: h,
            colorKeywords: v,
            valueKeywords: y,
            tokenHooks: {
              "/": function (e, t) {
                return !!e.eat("*") && ((t.tokenize = k), k(e, t));
              }
            },
            name: "css"
          }),
          e.defineMIME("text/x-scss", {
            mediaTypes: o,
            mediaFeatures: l,
            mediaValueKeywords: c,
            propertyKeywords: d,
            nonStandardPropertyKeywords: f,
            colorKeywords: v,
            valueKeywords: y,
            fontProperties: m,
            allowNested: !0,
            lineComment: "//",
            tokenHooks: {
              "/": function (e, t) {
                return e.eat("/")
                  ? (e.skipToEnd(), ["comment", "comment"])
                  : e.eat("*")
                  ? ((t.tokenize = k), k(e, t))
                  : ["operator", "operator"];
              },
              ":": function (e) {
                return !!e.match(/\s*\{/, !1) && [null, null];
              },
              $: function (e) {
                return (
                  e.match(/^[\w-]+/),
                  e.match(/^\s*:/, !1)
                    ? ["variable-2", "variable-definition"]
                    : ["variable-2", "variable"]
                );
              },
              "#": function (e) {
                return !!e.eat("{") && [null, "interpolation"];
              }
            },
            name: "css",
            helperType: "scss"
          }),
          e.defineMIME("text/x-less", {
            mediaTypes: o,
            mediaFeatures: l,
            mediaValueKeywords: c,
            propertyKeywords: d,
            nonStandardPropertyKeywords: f,
            colorKeywords: v,
            valueKeywords: y,
            fontProperties: m,
            allowNested: !0,
            lineComment: "//",
            tokenHooks: {
              "/": function (e, t) {
                return e.eat("/")
                  ? (e.skipToEnd(), ["comment", "comment"])
                  : e.eat("*")
                  ? ((t.tokenize = k), k(e, t))
                  : ["operator", "operator"];
              },
              "@": function (e) {
                return e.eat("{")
                  ? [null, "interpolation"]
                  : !e.match(
                      /^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,
                      !1
                    ) &&
                      (e.eatWhile(/[\w\\\-]/),
                      e.match(/^\s*:/, !1)
                        ? ["variable-2", "variable-definition"]
                        : ["variable-2", "variable"]);
              },
              "&": function () {
                return ["atom", "atom"];
              }
            },
            name: "css",
            helperType: "less"
          }),
          e.defineMIME("text/x-gss", {
            documentTypes: n,
            mediaTypes: o,
            mediaFeatures: l,
            propertyKeywords: d,
            nonStandardPropertyKeywords: f,
            fontProperties: m,
            counterDescriptors: h,
            colorKeywords: v,
            valueKeywords: y,
            supportsAtComponent: !0,
            tokenHooks: {
              "/": function (e, t) {
                return !!e.eat("*") && ((t.tokenize = k), k(e, t));
              }
            },
            name: "css",
            helperType: "gss"
          });
      })(r(0));
    },
    function (e, t) {
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var r = (function (e, t) {
                var r = e[1] || "",
                  n = e[3];
                if (!n) return r;
                if (t && "function" == typeof btoa) {
                  var i =
                      ((a = n),
                      "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                        btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
                        " */"),
                    o = n.sources.map(function (e) {
                      return "/*# sourceURL=" + n.sourceRoot + e + " */";
                    });
                  return [r].concat(o).concat([i]).join("\n");
                }
                var a;
                return [r].join("\n");
              })(t, e);
              return t[2] ? "@media " + t[2] + "{" + r + "}" : r;
            }).join("");
          }),
          (t.i = function (e, r) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var n = {}, i = 0; i < this.length; i++) {
              var o = this[i][0];
              "number" == typeof o && (n[o] = !0);
            }
            for (i = 0; i < e.length; i++) {
              var a = e[i];
              ("number" == typeof a[0] && n[a[0]]) ||
                (r && !a[2]
                  ? (a[2] = r)
                  : r && (a[2] = "(" + a[2] + ") and (" + r + ")"),
                t.push(a));
            }
          }),
          t
        );
      };
    },
    function (e, t, r) {
      var n,
        i,
        o = {},
        a =
          ((n = function () {
            return window && document && document.all && !window.atob;
          }),
          function () {
            return void 0 === i && (i = n.apply(this, arguments)), i;
          }),
        l = (function (e) {
          var t = {};
          return function (e) {
            if ("function" == typeof e) return e();
            if (void 0 === t[e]) {
              var r = function (e) {
                return document.querySelector(e);
              }.call(this, e);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (e) {
                  r = null;
                }
              t[e] = r;
            }
            return t[e];
          };
        })(),
        s = null,
        c = 0,
        u = [],
        d = r(12);
      function p(e, t) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r],
            i = o[n.id];
          if (i) {
            i.refs++;
            for (var a = 0; a < i.parts.length; a++) i.parts[a](n.parts[a]);
            for (; a < n.parts.length; a++) i.parts.push(b(n.parts[a], t));
          } else {
            var l = [];
            for (a = 0; a < n.parts.length; a++) l.push(b(n.parts[a], t));
            o[n.id] = { id: n.id, refs: 1, parts: l };
          }
        }
      }
      function f(e, t) {
        for (var r = [], n = {}, i = 0; i < e.length; i++) {
          var o = e[i],
            a = t.base ? o[0] + t.base : o[0],
            l = { css: o[1], media: o[2], sourceMap: o[3] };
          n[a] ? n[a].parts.push(l) : r.push((n[a] = { id: a, parts: [l] }));
        }
        return r;
      }
      function m(e, t) {
        var r = l(e.insertInto);
        if (!r)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
          );
        var n = u[u.length - 1];
        if ("top" === e.insertAt)
          n
            ? n.nextSibling
              ? r.insertBefore(t, n.nextSibling)
              : r.appendChild(t)
            : r.insertBefore(t, r.firstChild),
            u.push(t);
        else if ("bottom" === e.insertAt) r.appendChild(t);
        else {
          if ("object" != typeof e.insertAt || !e.insertAt.before)
            throw new Error(
              "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
            );
          var i = l(e.insertInto + " " + e.insertAt.before);
          r.insertBefore(t, i);
        }
      }
      function h(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = u.indexOf(e);
        t >= 0 && u.splice(t, 1);
      }
      function g(e) {
        var t = document.createElement("style");
        return (
          void 0 === e.attrs.type && (e.attrs.type = "text/css"),
          v(t, e.attrs),
          m(e, t),
          t
        );
      }
      function v(e, t) {
        Object.keys(t).forEach(function (r) {
          e.setAttribute(r, t[r]);
        });
      }
      function b(e, t) {
        var r, n, i, o;
        if (t.transform && e.css) {
          if (!(o = t.transform(e.css))) return function () {};
          e.css = o;
        }
        if (t.singleton) {
          var a = c++;
          (r = s || (s = g(t))),
            (n = k.bind(null, r, a, !1)),
            (i = k.bind(null, r, a, !0));
        } else
          e.sourceMap &&
          "function" == typeof URL &&
          "function" == typeof URL.createObjectURL &&
          "function" == typeof URL.revokeObjectURL &&
          "function" == typeof Blob &&
          "function" == typeof btoa
            ? ((r = (function (e) {
                var t = document.createElement("link");
                return (
                  void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                  (e.attrs.rel = "stylesheet"),
                  v(t, e.attrs),
                  m(e, t),
                  t
                );
              })(t)),
              (n = function (e, t, r) {
                var n = r.css,
                  i = r.sourceMap,
                  o = void 0 === t.convertToAbsoluteUrls && i;
                (t.convertToAbsoluteUrls || o) && (n = d(n));
                i &&
                  (n +=
                    "\n/*# sourceMappingURL=data:application/json;base64," +
                    btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
                    " */");
                var a = new Blob([n], { type: "text/css" }),
                  l = e.href;
                (e.href = URL.createObjectURL(a)), l && URL.revokeObjectURL(l);
              }.bind(null, r, t)),
              (i = function () {
                h(r), r.href && URL.revokeObjectURL(r.href);
              }))
            : ((r = g(t)),
              (n = function (e, t) {
                var r = t.css,
                  n = t.media;
                n && e.setAttribute("media", n);
                if (e.styleSheet) e.styleSheet.cssText = r;
                else {
                  for (; e.firstChild; ) e.removeChild(e.firstChild);
                  e.appendChild(document.createTextNode(r));
                }
              }.bind(null, r)),
              (i = function () {
                h(r);
              }));
        return (
          n(e),
          function (t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              n((e = t));
            } else i();
          }
        );
      }
      e.exports = function (e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
          throw new Error(
            "The style-loader cannot be used in a non-browser environment"
          );
        ((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}),
          t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()),
          t.insertInto || (t.insertInto = "head"),
          t.insertAt || (t.insertAt = "bottom");
        var r = f(e, t);
        return (
          p(r, t),
          function (e) {
            for (var n = [], i = 0; i < r.length; i++) {
              var a = r[i];
              (l = o[a.id]).refs--, n.push(l);
            }
            e && p(f(e, t), t);
            for (i = 0; i < n.length; i++) {
              var l;
              if (0 === (l = n[i]).refs) {
                for (var s = 0; s < l.parts.length; s++) l.parts[s]();
                delete o[l.id];
              }
            }
          }
        );
      };
      var y,
        x =
          ((y = []),
          function (e, t) {
            return (y[e] = t), y.filter(Boolean).join("\n");
          });
      function k(e, t, r, n) {
        var i = r ? "" : n.css;
        if (e.styleSheet) e.styleSheet.cssText = x(t, i);
        else {
          var o = document.createTextNode(i),
            a = e.childNodes;
          a[t] && e.removeChild(a[t]),
            a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
        }
      }
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        var t = {
            autoSelfClosers: {
              area: !0,
              base: !0,
              br: !0,
              col: !0,
              command: !0,
              embed: !0,
              frame: !0,
              hr: !0,
              img: !0,
              input: !0,
              keygen: !0,
              link: !0,
              meta: !0,
              param: !0,
              source: !0,
              track: !0,
              wbr: !0,
              menuitem: !0
            },
            implicitlyClosed: {
              dd: !0,
              li: !0,
              optgroup: !0,
              option: !0,
              p: !0,
              rp: !0,
              rt: !0,
              tbody: !0,
              td: !0,
              tfoot: !0,
              th: !0,
              tr: !0
            },
            contextGrabbers: {
              dd: { dd: !0, dt: !0 },
              dt: { dd: !0, dt: !0 },
              li: { li: !0 },
              option: { option: !0, optgroup: !0 },
              optgroup: { optgroup: !0 },
              p: {
                address: !0,
                article: !0,
                aside: !0,
                blockquote: !0,
                dir: !0,
                div: !0,
                dl: !0,
                fieldset: !0,
                footer: !0,
                form: !0,
                h1: !0,
                h2: !0,
                h3: !0,
                h4: !0,
                h5: !0,
                h6: !0,
                header: !0,
                hgroup: !0,
                hr: !0,
                menu: !0,
                nav: !0,
                ol: !0,
                p: !0,
                pre: !0,
                section: !0,
                table: !0,
                ul: !0
              },
              rp: { rp: !0, rt: !0 },
              rt: { rp: !0, rt: !0 },
              tbody: { tbody: !0, tfoot: !0 },
              td: { td: !0, th: !0 },
              tfoot: { tbody: !0 },
              th: { td: !0, th: !0 },
              thead: { tbody: !0, tfoot: !0 },
              tr: { tr: !0 }
            },
            doNotIndent: { pre: !0 },
            allowUnquoted: !0,
            allowMissing: !0,
            caseFold: !0
          },
          r = {
            autoSelfClosers: {},
            implicitlyClosed: {},
            contextGrabbers: {},
            doNotIndent: {},
            allowUnquoted: !1,
            allowMissing: !1,
            allowMissingTagName: !1,
            caseFold: !1
          };
        e.defineMode("xml", function (n, i) {
          var o,
            a,
            l = n.indentUnit,
            s = {},
            c = i.htmlMode ? t : r;
          for (var u in c) s[u] = c[u];
          for (var u in i) s[u] = i[u];
          function d(e, t) {
            function r(r) {
              return (t.tokenize = r), r(e, t);
            }
            var n = e.next();
            return "<" == n
              ? e.eat("!")
                ? e.eat("[")
                  ? e.match("CDATA[")
                    ? r(f("atom", "]]>"))
                    : null
                  : e.match("--")
                  ? r(f("comment", "--\x3e"))
                  : e.match("DOCTYPE", !0, !0)
                  ? (e.eatWhile(/[\w\._\-]/),
                    r(
                      (function e(t) {
                        return function (r, n) {
                          for (var i; null != (i = r.next()); ) {
                            if ("<" == i)
                              return (n.tokenize = e(t + 1)), n.tokenize(r, n);
                            if (">" == i) {
                              if (1 == t) {
                                n.tokenize = d;
                                break;
                              }
                              return (n.tokenize = e(t - 1)), n.tokenize(r, n);
                            }
                          }
                          return "meta";
                        };
                      })(1)
                    ))
                  : null
                : e.eat("?")
                ? (e.eatWhile(/[\w\._\-]/),
                  (t.tokenize = f("meta", "?>")),
                  "meta")
                : ((o = e.eat("/") ? "closeTag" : "openTag"),
                  (t.tokenize = p),
                  "tag bracket")
              : "&" == n
              ? (
                  e.eat("#")
                    ? e.eat("x")
                      ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";")
                      : e.eatWhile(/[\d]/) && e.eat(";")
                    : e.eatWhile(/[\w\.\-:]/) && e.eat(";")
                )
                ? "atom"
                : "error"
              : (e.eatWhile(/[^&<]/), null);
          }
          function p(e, t) {
            var r,
              n,
              i = e.next();
            if (">" == i || ("/" == i && e.eat(">")))
              return (
                (t.tokenize = d),
                (o = ">" == i ? "endTag" : "selfcloseTag"),
                "tag bracket"
              );
            if ("=" == i) return (o = "equals"), null;
            if ("<" == i) {
              (t.tokenize = d), (t.state = v), (t.tagName = t.tagStart = null);
              var a = t.tokenize(e, t);
              return a ? a + " tag error" : "tag error";
            }
            return /[\'\"]/.test(i)
              ? ((t.tokenize =
                  ((r = i),
                  ((n = function (e, t) {
                    for (; !e.eol(); )
                      if (e.next() == r) {
                        t.tokenize = p;
                        break;
                      }
                    return "string";
                  }).isInAttribute = !0),
                  n)),
                (t.stringStartCol = e.column()),
                t.tokenize(e, t))
              : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word");
          }
          function f(e, t) {
            return function (r, n) {
              for (; !r.eol(); ) {
                if (r.match(t)) {
                  n.tokenize = d;
                  break;
                }
                r.next();
              }
              return e;
            };
          }
          function m(e, t, r) {
            (this.prev = e.context),
              (this.tagName = t),
              (this.indent = e.indented),
              (this.startOfLine = r),
              (s.doNotIndent.hasOwnProperty(t) ||
                (e.context && e.context.noIndent)) &&
                (this.noIndent = !0);
          }
          function h(e) {
            e.context && (e.context = e.context.prev);
          }
          function g(e, t) {
            for (var r; ; ) {
              if (!e.context) return;
              if (
                ((r = e.context.tagName),
                !s.contextGrabbers.hasOwnProperty(r) ||
                  !s.contextGrabbers[r].hasOwnProperty(t))
              )
                return;
              h(e);
            }
          }
          function v(e, t, r) {
            return "openTag" == e
              ? ((r.tagStart = t.column()), b)
              : "closeTag" == e
              ? y
              : v;
          }
          function b(e, t, r) {
            return "word" == e
              ? ((r.tagName = t.current()), (a = "tag"), w)
              : s.allowMissingTagName && "endTag" == e
              ? ((a = "tag bracket"), w(e, 0, r))
              : ((a = "error"), b);
          }
          function y(e, t, r) {
            if ("word" == e) {
              var n = t.current();
              return (
                r.context &&
                  r.context.tagName != n &&
                  s.implicitlyClosed.hasOwnProperty(r.context.tagName) &&
                  h(r),
                (r.context && r.context.tagName == n) || !1 === s.matchClosing
                  ? ((a = "tag"), x)
                  : ((a = "tag error"), k)
              );
            }
            return s.allowMissingTagName && "endTag" == e
              ? ((a = "tag bracket"), x(e, 0, r))
              : ((a = "error"), k);
          }
          function x(e, t, r) {
            return "endTag" != e ? ((a = "error"), x) : (h(r), v);
          }
          function k(e, t, r) {
            return (a = "error"), x(e, 0, r);
          }
          function w(e, t, r) {
            if ("word" == e) return (a = "attribute"), _;
            if ("endTag" == e || "selfcloseTag" == e) {
              var n = r.tagName,
                i = r.tagStart;
              return (
                (r.tagName = r.tagStart = null),
                "selfcloseTag" == e || s.autoSelfClosers.hasOwnProperty(n)
                  ? g(r, n)
                  : (g(r, n), (r.context = new m(r, n, i == r.indented))),
                v
              );
            }
            return (a = "error"), w;
          }
          function _(e, t, r) {
            return "equals" == e
              ? C
              : (s.allowMissing || (a = "error"), w(e, 0, r));
          }
          function C(e, t, r) {
            return "string" == e
              ? S
              : "word" == e && s.allowUnquoted
              ? ((a = "string"), w)
              : ((a = "error"), w(e, 0, r));
          }
          function S(e, t, r) {
            return "string" == e ? S : w(e, 0, r);
          }
          return (
            (d.isInText = !0),
            {
              startState: function (e) {
                var t = {
                  tokenize: d,
                  state: v,
                  indented: e || 0,
                  tagName: null,
                  tagStart: null,
                  context: null
                };
                return null != e && (t.baseIndent = e), t;
              },
              token: function (e, t) {
                if (
                  (!t.tagName && e.sol() && (t.indented = e.indentation()),
                  e.eatSpace())
                )
                  return null;
                o = null;
                var r = t.tokenize(e, t);
                return (
                  (r || o) &&
                    "comment" != r &&
                    ((a = null),
                    (t.state = t.state(o || r, e, t)),
                    a && (r = "error" == a ? r + " error" : a)),
                  r
                );
              },
              indent: function (t, r, n) {
                var i = t.context;
                if (t.tokenize.isInAttribute)
                  return t.tagStart == t.indented
                    ? t.stringStartCol + 1
                    : t.indented + l;
                if (i && i.noIndent) return e.Pass;
                if (t.tokenize != p && t.tokenize != d)
                  return n ? n.match(/^(\s*)/)[0].length : 0;
                if (t.tagName)
                  return !1 !== s.multilineTagIndentPastTag
                    ? t.tagStart + t.tagName.length + 2
                    : t.tagStart + l * (s.multilineTagIndentFactor || 1);
                if (s.alignCDATA && /<!\[CDATA\[/.test(r)) return 0;
                var o = r && /^<(\/)?([\w_:\.-]*)/.exec(r);
                if (o && o[1])
                  for (; i; ) {
                    if (i.tagName == o[2]) {
                      i = i.prev;
                      break;
                    }
                    if (!s.implicitlyClosed.hasOwnProperty(i.tagName)) break;
                    i = i.prev;
                  }
                else if (o)
                  for (; i; ) {
                    var a = s.contextGrabbers[i.tagName];
                    if (!a || !a.hasOwnProperty(o[2])) break;
                    i = i.prev;
                  }
                for (; i && i.prev && !i.startOfLine; ) i = i.prev;
                return i ? i.indent + l : t.baseIndent || 0;
              },
              electricInput: /<\/[\s\w:]+>$/,
              blockCommentStart: "\x3c!--",
              blockCommentEnd: "--\x3e",
              configuration: s.htmlMode ? "html" : "xml",
              helperType: s.htmlMode ? "html" : "xml",
              skipAttribute: function (e) {
                e.state == C && (e.state = w);
              },
              xmlCurrentTag: function (e) {
                return e.tagName
                  ? { name: e.tagName, close: "closeTag" == e.type }
                  : null;
              },
              xmlCurrentContext: function (e) {
                for (var t = [], r = e.context; r; r = r.prev)
                  r.tagName && t.push(r.tagName);
                return t.reverse();
              }
            }
          );
        }),
          e.defineMIME("text/xml", "xml"),
          e.defineMIME("application/xml", "xml"),
          e.mimeModes.hasOwnProperty("text/html") ||
            e.defineMIME("text/html", { name: "xml", htmlMode: !0 });
      })(r(0));
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        e.defineMode("javascript", function (t, r) {
          var n,
            i,
            o = t.indentUnit,
            a = r.statementIndent,
            l = r.jsonld,
            s = r.json || l,
            c = r.typescript,
            u = r.wordCharacters || /[\w$\xa1-\uffff]/,
            d = (function () {
              function e(e) {
                return { type: e, style: "keyword" };
              }
              var t = e("keyword a"),
                r = e("keyword b"),
                n = e("keyword c"),
                i = e("keyword d"),
                o = e("operator"),
                a = { type: "atom", style: "atom" };
              return {
                if: e("if"),
                while: t,
                with: t,
                else: r,
                do: r,
                try: r,
                finally: r,
                return: i,
                break: i,
                continue: i,
                new: e("new"),
                delete: n,
                void: n,
                throw: n,
                debugger: e("debugger"),
                var: e("var"),
                const: e("var"),
                let: e("var"),
                function: e("function"),
                catch: e("catch"),
                for: e("for"),
                switch: e("switch"),
                case: e("case"),
                default: e("default"),
                in: o,
                typeof: o,
                instanceof: o,
                true: a,
                false: a,
                null: a,
                undefined: a,
                NaN: a,
                Infinity: a,
                this: e("this"),
                class: e("class"),
                super: e("atom"),
                yield: n,
                export: e("export"),
                import: e("import"),
                extends: n,
                await: n
              };
            })(),
            p = /[+\-*&%=<>!?|~^@]/,
            f =
              /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
          function m(e, t, r) {
            return (n = e), (i = r), t;
          }
          function h(e, t) {
            var r,
              n = e.next();
            if ('"' == n || "'" == n)
              return (
                (t.tokenize =
                  ((r = n),
                  function (e, t) {
                    var n,
                      i = !1;
                    if (l && "@" == e.peek() && e.match(f))
                      return (t.tokenize = h), m("jsonld-keyword", "meta");
                    for (; null != (n = e.next()) && (n != r || i); )
                      i = !i && "\\" == n;
                    return i || (t.tokenize = h), m("string", "string");
                  })),
                t.tokenize(e, t)
              );
            if ("." == n && e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
              return m("number", "number");
            if ("." == n && e.match("..")) return m("spread", "meta");
            if (/[\[\]{}\(\),;\:\.]/.test(n)) return m(n);
            if ("=" == n && e.eat(">")) return m("=>", "operator");
            if ("0" == n && e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
              return m("number", "number");
            if (/\d/.test(n))
              return (
                e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),
                m("number", "number")
              );
            if ("/" == n)
              return e.eat("*")
                ? ((t.tokenize = g), g(e, t))
                : e.eat("/")
                ? (e.skipToEnd(), m("comment", "comment"))
                : Ge(e, t, 1)
                ? ((function (e) {
                    for (var t, r = !1, n = !1; null != (t = e.next()); ) {
                      if (!r) {
                        if ("/" == t && !n) return;
                        "[" == t ? (n = !0) : n && "]" == t && (n = !1);
                      }
                      r = !r && "\\" == t;
                    }
                  })(e),
                  e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
                  m("regexp", "string-2"))
                : (e.eat("="), m("operator", "operator", e.current()));
            if ("`" == n) return (t.tokenize = v), v(e, t);
            if ("#" == n) return e.skipToEnd(), m("error", "error");
            if (("<" == n && e.match("!--")) || ("-" == n && e.match("->")))
              return e.skipToEnd(), m("comment", "comment");
            if (p.test(n))
              return (
                (">" == n && t.lexical && ">" == t.lexical.type) ||
                  (e.eat("=")
                    ? ("!" != n && "=" != n) || e.eat("=")
                    : /[<>*+\-]/.test(n) && (e.eat(n), ">" == n && e.eat(n))),
                m("operator", "operator", e.current())
              );
            if (u.test(n)) {
              e.eatWhile(u);
              var i = e.current();
              if ("." != t.lastType) {
                if (d.propertyIsEnumerable(i)) {
                  var o = d[i];
                  return m(o.type, o.style, i);
                }
                if ("async" == i && e.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, !1))
                  return m("async", "keyword", i);
              }
              return m("variable", "variable", i);
            }
          }
          function g(e, t) {
            for (var r, n = !1; (r = e.next()); ) {
              if ("/" == r && n) {
                t.tokenize = h;
                break;
              }
              n = "*" == r;
            }
            return m("comment", "comment");
          }
          function v(e, t) {
            for (var r, n = !1; null != (r = e.next()); ) {
              if (!n && ("`" == r || ("$" == r && e.eat("{")))) {
                t.tokenize = h;
                break;
              }
              n = !n && "\\" == r;
            }
            return m("quasi", "string-2", e.current());
          }
          var b = "([{}])";
          function y(e, t) {
            t.fatArrowAt && (t.fatArrowAt = null);
            var r = e.string.indexOf("=>", e.start);
            if (!(r < 0)) {
              if (c) {
                var n = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
                  e.string.slice(e.start, r)
                );
                n && (r = n.index);
              }
              for (var i = 0, o = !1, a = r - 1; a >= 0; --a) {
                var l = e.string.charAt(a),
                  s = b.indexOf(l);
                if (s >= 0 && s < 3) {
                  if (!i) {
                    ++a;
                    break;
                  }
                  if (0 == --i) {
                    "(" == l && (o = !0);
                    break;
                  }
                } else if (s >= 3 && s < 6) ++i;
                else if (u.test(l)) o = !0;
                else if (/["'\/`]/.test(l))
                  for (; ; --a) {
                    if (0 == a) return;
                    var d = e.string.charAt(a - 1);
                    if (d == l && "\\" != e.string.charAt(a - 2)) {
                      a--;
                      break;
                    }
                  }
                else if (o && !i) {
                  ++a;
                  break;
                }
              }
              o && !i && (t.fatArrowAt = a);
            }
          }
          var x = {
            atom: !0,
            number: !0,
            variable: !0,
            string: !0,
            regexp: !0,
            this: !0,
            "jsonld-keyword": !0
          };
          function k(e, t, r, n, i, o) {
            (this.indented = e),
              (this.column = t),
              (this.type = r),
              (this.prev = i),
              (this.info = o),
              null != n && (this.align = n);
          }
          function w(e, t) {
            for (var r = e.localVars; r; r = r.next) if (r.name == t) return !0;
            for (var n = e.context; n; n = n.prev)
              for (var r = n.vars; r; r = r.next) if (r.name == t) return !0;
          }
          var _ = { state: null, column: null, marked: null, cc: null };
          function C() {
            for (var e = arguments.length - 1; e >= 0; e--)
              _.cc.push(arguments[e]);
          }
          function S() {
            return C.apply(null, arguments), !0;
          }
          function M(e, t) {
            for (var r = t; r; r = r.next) if (r.name == e) return !0;
            return !1;
          }
          function L(e) {
            var t = _.state;
            if (((_.marked = "def"), t.context))
              if ("var" == t.lexical.info && t.context && t.context.block) {
                var n = (function e(t, r) {
                  if (r) {
                    if (r.block) {
                      var n = e(t, r.prev);
                      return n
                        ? n == r.prev
                          ? r
                          : new z(n, r.vars, !0)
                        : null;
                    }
                    return M(t, r.vars)
                      ? r
                      : new z(r.prev, new A(t, r.vars), !1);
                  }
                  return null;
                })(e, t.context);
                if (null != n) return void (t.context = n);
              } else if (!M(e, t.localVars))
                return void (t.localVars = new A(e, t.localVars));
            r.globalVars &&
              !M(e, t.globalVars) &&
              (t.globalVars = new A(e, t.globalVars));
          }
          function T(e) {
            return (
              "public" == e ||
              "private" == e ||
              "protected" == e ||
              "abstract" == e ||
              "readonly" == e
            );
          }
          function z(e, t, r) {
            (this.prev = e), (this.vars = t), (this.block = r);
          }
          function A(e, t) {
            (this.name = e), (this.next = t);
          }
          var D = new A("this", new A("arguments", null));
          function E() {
            (_.state.context = new z(_.state.context, _.state.localVars, !1)),
              (_.state.localVars = D);
          }
          function F() {
            (_.state.context = new z(_.state.context, _.state.localVars, !0)),
              (_.state.localVars = null);
          }
          function N() {
            (_.state.localVars = _.state.context.vars),
              (_.state.context = _.state.context.prev);
          }
          function O(e, t) {
            var r = function () {
              var r = _.state,
                n = r.indented;
              if ("stat" == r.lexical.type) n = r.lexical.indented;
              else
                for (
                  var i = r.lexical;
                  i && ")" == i.type && i.align;
                  i = i.prev
                )
                  n = i.indented;
              r.lexical = new k(n, _.stream.column(), e, null, r.lexical, t);
            };
            return (r.lex = !0), r;
          }
          function q() {
            var e = _.state;
            e.lexical.prev &&
              (")" == e.lexical.type && (e.indented = e.lexical.indented),
              (e.lexical = e.lexical.prev));
          }
          function I(e) {
            return function t(r) {
              return r == e
                ? S()
                : ";" == e || "}" == r || ")" == r || "]" == r
                ? C()
                : S(t);
            };
          }
          function P(e, t) {
            return "var" == e
              ? S(O("vardef", t), ye, I(";"), q)
              : "keyword a" == e
              ? S(O("form"), R, P, q)
              : "keyword b" == e
              ? S(O("form"), P, q)
              : "keyword d" == e
              ? _.stream.match(/^\s*$/, !1)
                ? S()
                : S(O("stat"), $, I(";"), q)
              : "debugger" == e
              ? S(I(";"))
              : "{" == e
              ? S(O("}"), F, ae, q, N)
              : ";" == e
              ? S()
              : "if" == e
              ? ("else" == _.state.lexical.info &&
                  _.state.cc[_.state.cc.length - 1] == q &&
                  _.state.cc.pop()(),
                S(O("form"), R, P, q, Se))
              : "function" == e
              ? S(ze)
              : "for" == e
              ? S(O("form"), Me, P, q)
              : "class" == e || (c && "interface" == t)
              ? ((_.marked = "keyword"),
                S(O("form", "class" == e ? e : t), Ne, q))
              : "variable" == e
              ? c && "declare" == t
                ? ((_.marked = "keyword"), S(P))
                : c &&
                  ("module" == t || "enum" == t || "type" == t) &&
                  _.stream.match(/^\s*\w/, !1)
                ? ((_.marked = "keyword"),
                  "enum" == t
                    ? S(Ve)
                    : "type" == t
                    ? S(De, I("operator"), de, I(";"))
                    : S(O("form"), xe, I("{"), O("}"), ae, q, q))
                : c && "namespace" == t
                ? ((_.marked = "keyword"), S(O("form"), B, P, q))
                : c && "abstract" == t
                ? ((_.marked = "keyword"), S(P))
                : S(O("stat"), J)
              : "switch" == e
              ? S(O("form"), R, I("{"), O("}", "switch"), F, ae, q, q, N)
              : "case" == e
              ? S(B, I(":"))
              : "default" == e
              ? S(I(":"))
              : "catch" == e
              ? S(O("form"), E, j, P, q, N)
              : "export" == e
              ? S(O("stat"), Pe, q)
              : "import" == e
              ? S(O("stat"), Be, q)
              : "async" == e
              ? S(P)
              : "@" == t
              ? S(B, P)
              : C(O("stat"), B, I(";"), q);
          }
          function j(e) {
            if ("(" == e) return S(Ee, I(")"));
          }
          function B(e, t) {
            return H(e, t, !1);
          }
          function W(e, t) {
            return H(e, t, !0);
          }
          function R(e) {
            return "(" != e ? C() : S(O(")"), B, I(")"), q);
          }
          function H(e, t, r) {
            if (_.state.fatArrowAt == _.stream.start) {
              var n = r ? Z : X;
              if ("(" == e) return S(E, O(")"), ie(Ee, ")"), q, I("=>"), n, N);
              if ("variable" == e) return C(E, xe, I("=>"), n, N);
            }
            var i = r ? V : U;
            return x.hasOwnProperty(e)
              ? S(i)
              : "function" == e
              ? S(ze, i)
              : "class" == e || (c && "interface" == t)
              ? ((_.marked = "keyword"), S(O("form"), Fe, q))
              : "keyword c" == e || "async" == e
              ? S(r ? W : B)
              : "(" == e
              ? S(O(")"), $, I(")"), q, i)
              : "operator" == e || "spread" == e
              ? S(r ? W : B)
              : "[" == e
              ? S(O("]"), Ue, q, i)
              : "{" == e
              ? oe(te, "}", null, i)
              : "quasi" == e
              ? C(K, i)
              : "new" == e
              ? S(
                  (function (e) {
                    return function (t) {
                      return "." == t
                        ? S(e ? Q : Y)
                        : "variable" == t && c
                        ? S(ge, e ? V : U)
                        : C(e ? W : B);
                    };
                  })(r)
                )
              : "import" == e
              ? S(B)
              : S();
          }
          function $(e) {
            return e.match(/[;\}\)\],]/) ? C() : C(B);
          }
          function U(e, t) {
            return "," == e ? S(B) : V(e, t, !1);
          }
          function V(e, t, r) {
            var n = 0 == r ? U : V,
              i = 0 == r ? B : W;
            return "=>" == e
              ? S(E, r ? Z : X, N)
              : "operator" == e
              ? /\+\+|--/.test(t) || (c && "!" == t)
                ? S(n)
                : c && "<" == t && _.stream.match(/^([^>]|<.*?>)*>\s*\(/, !1)
                ? S(O(">"), ie(de, ">"), q, n)
                : "?" == t
                ? S(B, I(":"), i)
                : S(i)
              : "quasi" == e
              ? C(K, n)
              : ";" != e
              ? "(" == e
                ? oe(W, ")", "call", n)
                : "." == e
                ? S(ee, n)
                : "[" == e
                ? S(O("]"), $, I("]"), q, n)
                : c && "as" == t
                ? ((_.marked = "keyword"), S(de, n))
                : "regexp" == e
                ? ((_.state.lastType = _.marked = "operator"),
                  _.stream.backUp(_.stream.pos - _.stream.start - 1),
                  S(i))
                : void 0
              : void 0;
          }
          function K(e, t) {
            return "quasi" != e
              ? C()
              : "${" != t.slice(t.length - 2)
              ? S(K)
              : S(B, G);
          }
          function G(e) {
            if ("}" == e)
              return (_.marked = "string-2"), (_.state.tokenize = v), S(K);
          }
          function X(e) {
            return y(_.stream, _.state), C("{" == e ? P : B);
          }
          function Z(e) {
            return y(_.stream, _.state), C("{" == e ? P : W);
          }
          function Y(e, t) {
            if ("target" == t) return (_.marked = "keyword"), S(U);
          }
          function Q(e, t) {
            if ("target" == t) return (_.marked = "keyword"), S(V);
          }
          function J(e) {
            return ":" == e ? S(q, P) : C(U, I(";"), q);
          }
          function ee(e) {
            if ("variable" == e) return (_.marked = "property"), S();
          }
          function te(e, t) {
            return "async" == e
              ? ((_.marked = "property"), S(te))
              : "variable" == e || "keyword" == _.style
              ? ((_.marked = "property"),
                "get" == t || "set" == t
                  ? S(re)
                  : (c &&
                      _.state.fatArrowAt == _.stream.start &&
                      (r = _.stream.match(/^\s*:\s*/, !1)) &&
                      (_.state.fatArrowAt = _.stream.pos + r[0].length),
                    S(ne)))
              : "number" == e || "string" == e
              ? ((_.marked = l ? "property" : _.style + " property"), S(ne))
              : "jsonld-keyword" == e
              ? S(ne)
              : c && T(t)
              ? ((_.marked = "keyword"), S(te))
              : "[" == e
              ? S(B, le, I("]"), ne)
              : "spread" == e
              ? S(W, ne)
              : "*" == t
              ? ((_.marked = "keyword"), S(te))
              : ":" == e
              ? C(ne)
              : void 0;
            var r;
          }
          function re(e) {
            return "variable" != e ? C(ne) : ((_.marked = "property"), S(ze));
          }
          function ne(e) {
            return ":" == e ? S(W) : "(" == e ? C(ze) : void 0;
          }
          function ie(e, t, r) {
            function n(i, o) {
              if (r ? r.indexOf(i) > -1 : "," == i) {
                var a = _.state.lexical;
                return (
                  "call" == a.info && (a.pos = (a.pos || 0) + 1),
                  S(function (r, n) {
                    return r == t || n == t ? C() : C(e);
                  }, n)
                );
              }
              return i == t || o == t
                ? S()
                : r && r.indexOf(";") > -1
                ? C(e)
                : S(I(t));
            }
            return function (r, i) {
              return r == t || i == t ? S() : C(e, n);
            };
          }
          function oe(e, t, r) {
            for (var n = 3; n < arguments.length; n++) _.cc.push(arguments[n]);
            return S(O(t, r), ie(e, t), q);
          }
          function ae(e) {
            return "}" == e ? S() : C(P, ae);
          }
          function le(e, t) {
            if (c) {
              if (":" == e) return S(de);
              if ("?" == t) return S(le);
            }
          }
          function se(e, t) {
            if (c && (":" == e || "in" == t)) return S(de);
          }
          function ce(e) {
            if (c && ":" == e)
              return _.stream.match(/^\s*\w+\s+is\b/, !1)
                ? S(B, ue, de)
                : S(de);
          }
          function ue(e, t) {
            if ("is" == t) return (_.marked = "keyword"), S();
          }
          function de(e, t) {
            return "keyof" == t || "typeof" == t || "infer" == t
              ? ((_.marked = "keyword"), S("typeof" == t ? W : de))
              : "variable" == e || "void" == t
              ? ((_.marked = "type"), S(he))
              : "|" == t || "&" == t
              ? S(de)
              : "string" == e || "number" == e || "atom" == e
              ? S(he)
              : "[" == e
              ? S(O("]"), ie(de, "]", ","), q, he)
              : "{" == e
              ? S(O("}"), ie(fe, "}", ",;"), q, he)
              : "(" == e
              ? S(ie(me, ")"), pe, he)
              : "<" == e
              ? S(ie(de, ">"), de)
              : void 0;
          }
          function pe(e) {
            if ("=>" == e) return S(de);
          }
          function fe(e, t) {
            return "variable" == e || "keyword" == _.style
              ? ((_.marked = "property"), S(fe))
              : "?" == t || "number" == e || "string" == e
              ? S(fe)
              : ":" == e
              ? S(de)
              : "[" == e
              ? S(I("variable"), se, I("]"), fe)
              : "(" == e
              ? C(Ae, fe)
              : void 0;
          }
          function me(e, t) {
            return ("variable" == e && _.stream.match(/^\s*[?:]/, !1)) ||
              "?" == t
              ? S(me)
              : ":" == e
              ? S(de)
              : "spread" == e
              ? S(me)
              : C(de);
          }
          function he(e, t) {
            return "<" == t
              ? S(O(">"), ie(de, ">"), q, he)
              : "|" == t || "." == e || "&" == t
              ? S(de)
              : "[" == e
              ? S(de, I("]"), he)
              : "extends" == t || "implements" == t
              ? ((_.marked = "keyword"), S(de))
              : "?" == t
              ? S(de, I(":"), de)
              : void 0;
          }
          function ge(e, t) {
            if ("<" == t) return S(O(">"), ie(de, ">"), q, he);
          }
          function ve() {
            return C(de, be);
          }
          function be(e, t) {
            if ("=" == t) return S(de);
          }
          function ye(e, t) {
            return "enum" == t
              ? ((_.marked = "keyword"), S(Ve))
              : C(xe, le, _e, Ce);
          }
          function xe(e, t) {
            return c && T(t)
              ? ((_.marked = "keyword"), S(xe))
              : "variable" == e
              ? (L(t), S())
              : "spread" == e
              ? S(xe)
              : "[" == e
              ? oe(we, "]")
              : "{" == e
              ? oe(ke, "}")
              : void 0;
          }
          function ke(e, t) {
            return "variable" != e || _.stream.match(/^\s*:/, !1)
              ? ("variable" == e && (_.marked = "property"),
                "spread" == e
                  ? S(xe)
                  : "}" == e
                  ? C()
                  : "[" == e
                  ? S(B, I("]"), I(":"), ke)
                  : S(I(":"), xe, _e))
              : (L(t), S(_e));
          }
          function we() {
            return C(xe, _e);
          }
          function _e(e, t) {
            if ("=" == t) return S(W);
          }
          function Ce(e) {
            if ("," == e) return S(ye);
          }
          function Se(e, t) {
            if ("keyword b" == e && "else" == t)
              return S(O("form", "else"), P, q);
          }
          function Me(e, t) {
            return "await" == t ? S(Me) : "(" == e ? S(O(")"), Le, q) : void 0;
          }
          function Le(e) {
            return "var" == e ? S(ye, Te) : "variable" == e ? S(Te) : C(Te);
          }
          function Te(e, t) {
            return ")" == e
              ? S()
              : ";" == e
              ? S(Te)
              : "in" == t || "of" == t
              ? ((_.marked = "keyword"), S(B, Te))
              : C(B, Te);
          }
          function ze(e, t) {
            return "*" == t
              ? ((_.marked = "keyword"), S(ze))
              : "variable" == e
              ? (L(t), S(ze))
              : "(" == e
              ? S(E, O(")"), ie(Ee, ")"), q, ce, P, N)
              : c && "<" == t
              ? S(O(">"), ie(ve, ">"), q, ze)
              : void 0;
          }
          function Ae(e, t) {
            return "*" == t
              ? ((_.marked = "keyword"), S(Ae))
              : "variable" == e
              ? (L(t), S(Ae))
              : "(" == e
              ? S(E, O(")"), ie(Ee, ")"), q, ce, N)
              : c && "<" == t
              ? S(O(">"), ie(ve, ">"), q, Ae)
              : void 0;
          }
          function De(e, t) {
            return "keyword" == e || "variable" == e
              ? ((_.marked = "type"), S(De))
              : "<" == t
              ? S(O(">"), ie(ve, ">"), q)
              : void 0;
          }
          function Ee(e, t) {
            return (
              "@" == t && S(B, Ee),
              "spread" == e
                ? S(Ee)
                : c && T(t)
                ? ((_.marked = "keyword"), S(Ee))
                : c && "this" == e
                ? S(le, _e)
                : C(xe, le, _e)
            );
          }
          function Fe(e, t) {
            return "variable" == e ? Ne(e, t) : Oe(e, t);
          }
          function Ne(e, t) {
            if ("variable" == e) return L(t), S(Oe);
          }
          function Oe(e, t) {
            return "<" == t
              ? S(O(">"), ie(ve, ">"), q, Oe)
              : "extends" == t || "implements" == t || (c && "," == e)
              ? ("implements" == t && (_.marked = "keyword"), S(c ? de : B, Oe))
              : "{" == e
              ? S(O("}"), qe, q)
              : void 0;
          }
          function qe(e, t) {
            return "async" == e ||
              ("variable" == e &&
                ("static" == t || "get" == t || "set" == t || (c && T(t))) &&
                _.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
              ? ((_.marked = "keyword"), S(qe))
              : "variable" == e || "keyword" == _.style
              ? ((_.marked = "property"), S(c ? Ie : ze, qe))
              : "number" == e || "string" == e
              ? S(c ? Ie : ze, qe)
              : "[" == e
              ? S(B, le, I("]"), c ? Ie : ze, qe)
              : "*" == t
              ? ((_.marked = "keyword"), S(qe))
              : c && "(" == e
              ? C(Ae, qe)
              : ";" == e || "," == e
              ? S(qe)
              : "}" == e
              ? S()
              : "@" == t
              ? S(B, qe)
              : void 0;
          }
          function Ie(e, t) {
            if ("?" == t) return S(Ie);
            if (":" == e) return S(de, _e);
            if ("=" == t) return S(W);
            var r = _.state.lexical.prev,
              n = r && "interface" == r.info;
            return C(n ? Ae : ze);
          }
          function Pe(e, t) {
            return "*" == t
              ? ((_.marked = "keyword"), S($e, I(";")))
              : "default" == t
              ? ((_.marked = "keyword"), S(B, I(";")))
              : "{" == e
              ? S(ie(je, "}"), $e, I(";"))
              : C(P);
          }
          function je(e, t) {
            return "as" == t
              ? ((_.marked = "keyword"), S(I("variable")))
              : "variable" == e
              ? C(W, je)
              : void 0;
          }
          function Be(e) {
            return "string" == e ? S() : "(" == e ? C(B) : C(We, Re, $e);
          }
          function We(e, t) {
            return "{" == e
              ? oe(We, "}")
              : ("variable" == e && L(t),
                "*" == t && (_.marked = "keyword"),
                S(He));
          }
          function Re(e) {
            if ("," == e) return S(We, Re);
          }
          function He(e, t) {
            if ("as" == t) return (_.marked = "keyword"), S(We);
          }
          function $e(e, t) {
            if ("from" == t) return (_.marked = "keyword"), S(B);
          }
          function Ue(e) {
            return "]" == e ? S() : C(ie(W, "]"));
          }
          function Ve() {
            return C(O("form"), xe, I("{"), O("}"), ie(Ke, "}"), q, q);
          }
          function Ke() {
            return C(xe, _e);
          }
          function Ge(e, t, r) {
            return (
              (t.tokenize == h &&
                /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                  t.lastType
                )) ||
              ("quasi" == t.lastType &&
                /\{\s*$/.test(e.string.slice(0, e.pos - (r || 0))))
            );
          }
          return (
            (N.lex = !0),
            (q.lex = !0),
            {
              startState: function (e) {
                var t = {
                  tokenize: h,
                  lastType: "sof",
                  cc: [],
                  lexical: new k((e || 0) - o, 0, "block", !1),
                  localVars: r.localVars,
                  context: r.localVars && new z(null, null, !1),
                  indented: e || 0
                };
                return (
                  r.globalVars &&
                    "object" == typeof r.globalVars &&
                    (t.globalVars = r.globalVars),
                  t
                );
              },
              token: function (e, t) {
                if (
                  (e.sol() &&
                    (t.lexical.hasOwnProperty("align") ||
                      (t.lexical.align = !1),
                    (t.indented = e.indentation()),
                    y(e, t)),
                  t.tokenize != g && e.eatSpace())
                )
                  return null;
                var r = t.tokenize(e, t);
                return "comment" == n
                  ? r
                  : ((t.lastType =
                      "operator" != n || ("++" != i && "--" != i)
                        ? n
                        : "incdec"),
                    (function (e, t, r, n, i) {
                      var o = e.cc;
                      for (
                        _.state = e,
                          _.stream = i,
                          _.marked = null,
                          _.cc = o,
                          _.style = t,
                          e.lexical.hasOwnProperty("align") ||
                            (e.lexical.align = !0);
                        ;

                      ) {
                        var a = o.length ? o.pop() : s ? B : P;
                        if (a(r, n)) {
                          for (; o.length && o[o.length - 1].lex; ) o.pop()();
                          return _.marked
                            ? _.marked
                            : "variable" == r && w(e, n)
                            ? "variable-2"
                            : t;
                        }
                      }
                    })(t, r, n, i, e));
              },
              indent: function (t, n) {
                if (t.tokenize == g) return e.Pass;
                if (t.tokenize != h) return 0;
                var i,
                  l = n && n.charAt(0),
                  s = t.lexical;
                if (!/^\s*else\b/.test(n))
                  for (var c = t.cc.length - 1; c >= 0; --c) {
                    var u = t.cc[c];
                    if (u == q) s = s.prev;
                    else if (u != Se) break;
                  }
                for (
                  ;
                  ("stat" == s.type || "form" == s.type) &&
                  ("}" == l ||
                    ((i = t.cc[t.cc.length - 1]) &&
                      (i == U || i == V) &&
                      !/^[,\.=+\-*:?[\(]/.test(n)));

                )
                  s = s.prev;
                a && ")" == s.type && "stat" == s.prev.type && (s = s.prev);
                var d = s.type,
                  f = l == d;
                return "vardef" == d
                  ? s.indented +
                      ("operator" == t.lastType || "," == t.lastType
                        ? s.info.length + 1
                        : 0)
                  : "form" == d && "{" == l
                  ? s.indented
                  : "form" == d
                  ? s.indented + o
                  : "stat" == d
                  ? s.indented +
                    ((function (e, t) {
                      return (
                        "operator" == e.lastType ||
                        "," == e.lastType ||
                        p.test(t.charAt(0)) ||
                        /[,.]/.test(t.charAt(0))
                      );
                    })(t, n)
                      ? a || o
                      : 0)
                  : "switch" != s.info || f || 0 == r.doubleIndentSwitch
                  ? s.align
                    ? s.column + (f ? 0 : 1)
                    : s.indented + (f ? 0 : o)
                  : s.indented + (/^(?:case|default)\b/.test(n) ? o : 2 * o);
              },
              electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
              blockCommentStart: s ? null : "/*",
              blockCommentEnd: s ? null : "*/",
              blockCommentContinue: s ? null : " * ",
              lineComment: s ? null : "//",
              fold: "brace",
              closeBrackets: "()[]{}''\"\"``",
              helperType: s ? "json" : "javascript",
              jsonldMode: l,
              jsonMode: s,
              expressionAllowed: Ge,
              skipExpression: function (e) {
                var t = e.cc[e.cc.length - 1];
                (t != B && t != W) || e.cc.pop();
              }
            }
          );
        }),
          e.registerHelper("wordChars", "javascript", /[\w$]/),
          e.defineMIME("text/javascript", "javascript"),
          e.defineMIME("text/ecmascript", "javascript"),
          e.defineMIME("application/javascript", "javascript"),
          e.defineMIME("application/x-javascript", "javascript"),
          e.defineMIME("application/ecmascript", "javascript"),
          e.defineMIME("application/json", { name: "javascript", json: !0 }),
          e.defineMIME("application/x-json", { name: "javascript", json: !0 }),
          e.defineMIME("application/ld+json", {
            name: "javascript",
            jsonld: !0
          }),
          e.defineMIME("text/typescript", {
            name: "javascript",
            typescript: !0
          }),
          e.defineMIME("application/typescript", {
            name: "javascript",
            typescript: !0
          });
      })(r(0));
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        var t = {
            script: [
              ["lang", /(javascript|babel)/i, "javascript"],
              [
                "type",
                /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,
                "javascript"
              ],
              ["type", /./, "text/plain"],
              [null, null, "javascript"]
            ],
            style: [
              ["lang", /^css$/i, "css"],
              ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"],
              ["type", /./, "text/plain"],
              [null, null, "css"]
            ]
          },
          r = {};
        function n(e, t) {
          var n = e.match(
            (function (e) {
              var t = r[e];
              return (
                t ||
                (r[e] = new RegExp(
                  "\\s+" + e + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"
                ))
              );
            })(t)
          );
          return n ? /^\s*(.*?)\s*$/.exec(n[2])[1] : "";
        }
        function i(e, t) {
          return new RegExp((t ? "^" : "") + "</s*" + e + "s*>", "i");
        }
        function o(e, t) {
          for (var r in e)
            for (
              var n = t[r] || (t[r] = []), i = e[r], o = i.length - 1;
              o >= 0;
              o--
            )
              n.unshift(i[o]);
        }
        e.defineMode(
          "htmlmixed",
          function (r, a) {
            var l = e.getMode(r, {
                name: "xml",
                htmlMode: !0,
                multilineTagIndentFactor: a.multilineTagIndentFactor,
                multilineTagIndentPastTag: a.multilineTagIndentPastTag
              }),
              s = {},
              c = a && a.tags,
              u = a && a.scriptTypes;
            if ((o(t, s), c && o(c, s), u))
              for (var d = u.length - 1; d >= 0; d--)
                s.script.unshift(["type", u[d].matches, u[d].mode]);
            function p(t, o) {
              var a,
                c = l.token(t, o.htmlState),
                u = /\btag\b/.test(c);
              if (
                u &&
                !/[<>\s\/]/.test(t.current()) &&
                (a =
                  o.htmlState.tagName && o.htmlState.tagName.toLowerCase()) &&
                s.hasOwnProperty(a)
              )
                o.inTag = a + " ";
              else if (o.inTag && u && />$/.test(t.current())) {
                var d = /^([\S]+) (.*)/.exec(o.inTag);
                o.inTag = null;
                var f =
                    ">" == t.current() &&
                    (function (e, t) {
                      for (var r = 0; r < e.length; r++) {
                        var i = e[r];
                        if (!i[0] || i[1].test(n(t, i[0]))) return i[2];
                      }
                    })(s[d[1]], d[2]),
                  m = e.getMode(r, f),
                  h = i(d[1], !0),
                  g = i(d[1], !1);
                (o.token = function (e, t) {
                  return e.match(h, !1)
                    ? ((t.token = p), (t.localState = t.localMode = null), null)
                    : (function (e, t, r) {
                        var n = e.current(),
                          i = n.search(t);
                        return (
                          i > -1
                            ? e.backUp(n.length - i)
                            : n.match(/<\/?$/) &&
                              (e.backUp(n.length),
                              e.match(t, !1) || e.match(n)),
                          r
                        );
                      })(e, g, t.localMode.token(e, t.localState));
                }),
                  (o.localMode = m),
                  (o.localState = e.startState(
                    m,
                    l.indent(o.htmlState, "", "")
                  ));
              } else
                o.inTag &&
                  ((o.inTag += t.current()), t.eol() && (o.inTag += " "));
              return c;
            }
            return {
              startState: function () {
                var t = e.startState(l);
                return {
                  token: p,
                  inTag: null,
                  localMode: null,
                  localState: null,
                  htmlState: t
                };
              },
              copyState: function (t) {
                var r;
                return (
                  t.localState && (r = e.copyState(t.localMode, t.localState)),
                  {
                    token: t.token,
                    inTag: t.inTag,
                    localMode: t.localMode,
                    localState: r,
                    htmlState: e.copyState(l, t.htmlState)
                  }
                );
              },
              token: function (e, t) {
                return t.token(e, t);
              },
              indent: function (t, r, n) {
                return !t.localMode || /^\s*<\//.test(r)
                  ? l.indent(t.htmlState, r, n)
                  : t.localMode.indent
                  ? t.localMode.indent(t.localState, r, n)
                  : e.Pass;
              },
              innerMode: function (e) {
                return {
                  state: e.localState || e.htmlState,
                  mode: e.localMode || l
                };
              }
            };
          },
          "xml",
          "javascript",
          "css"
        ),
          e.defineMIME("text/html", "htmlmixed");
      })(r(0), r(4), r(5), r(1));
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        function t(e, t) {
          if (!e.hasOwnProperty(t))
            throw new Error("Undefined state " + t + " in simple mode");
        }
        function r(e, t) {
          if (!e) return /(?:)/;
          var r = "";
          return (
            e instanceof RegExp
              ? (e.ignoreCase && (r = "i"), (e = e.source))
              : (e = String(e)),
            new RegExp((!1 === t ? "" : "^") + "(?:" + e + ")", r)
          );
        }
        function n(e, n) {
          (e.next || e.push) && t(n, e.next || e.push),
            (this.regex = r(e.regex)),
            (this.token = (function (e) {
              if (!e) return null;
              if (e.apply) return e;
              if ("string" == typeof e) return e.replace(/\./g, " ");
              for (var t = [], r = 0; r < e.length; r++)
                t.push(e[r] && e[r].replace(/\./g, " "));
              return t;
            })(e.token)),
            (this.data = e);
        }
        function i(e, t) {
          if (e === t) return !0;
          if (!e || "object" != typeof e || !t || "object" != typeof t)
            return !1;
          var r = 0;
          for (var n in e)
            if (e.hasOwnProperty(n)) {
              if (!t.hasOwnProperty(n) || !i(e[n], t[n])) return !1;
              r++;
            }
          for (var n in t) t.hasOwnProperty(n) && r--;
          return 0 == r;
        }
        function o(t, n, o, a) {
          var l;
          if (o.persistent)
            for (var s = n.persistentStates; s && !l; s = s.next)
              (o.spec ? i(o.spec, s.spec) : o.mode == s.mode) && (l = s);
          var c = l ? l.mode : o.mode || e.getMode(t, o.spec),
            u = l ? l.state : e.startState(c);
          o.persistent &&
            !l &&
            (n.persistentStates = {
              mode: c,
              spec: o.spec,
              state: u,
              next: n.persistentStates
            }),
            (n.localState = u),
            (n.local = {
              mode: c,
              end: o.end && r(o.end),
              endScan: o.end && !1 !== o.forceEnd && r(o.end, !1),
              endToken: a && a.join ? a[a.length - 1] : a
            });
        }
        (e.defineSimpleMode = function (t, r) {
          e.defineMode(t, function (t) {
            return e.simpleMode(t, r);
          });
        }),
          (e.simpleMode = function (r, i) {
            t(i, "start");
            var a = {},
              l = i.meta || {},
              s = !1;
            for (var c in i)
              if (c != l && i.hasOwnProperty(c))
                for (var u = (a[c] = []), d = i[c], p = 0; p < d.length; p++) {
                  var f = d[p];
                  u.push(new n(f, i)), (f.indent || f.dedent) && (s = !0);
                }
            var m = {
              startState: function () {
                return {
                  state: "start",
                  pending: null,
                  local: null,
                  localState: null,
                  indent: s ? [] : null
                };
              },
              copyState: function (t) {
                var r = {
                  state: t.state,
                  pending: t.pending,
                  local: t.local,
                  localState: null,
                  indent: t.indent && t.indent.slice(0)
                };
                t.localState &&
                  (r.localState = e.copyState(t.local.mode, t.localState)),
                  t.stack && (r.stack = t.stack.slice(0));
                for (var n = t.persistentStates; n; n = n.next)
                  r.persistentStates = {
                    mode: n.mode,
                    spec: n.spec,
                    state:
                      n.state == t.localState
                        ? r.localState
                        : e.copyState(n.mode, n.state),
                    next: r.persistentStates
                  };
                return r;
              },
              token: (function (e, t) {
                return function (r, n) {
                  if (n.pending) {
                    var i = n.pending.shift();
                    return (
                      0 == n.pending.length && (n.pending = null),
                      (r.pos += i.text.length),
                      i.token
                    );
                  }
                  if (n.local) {
                    if (n.local.end && r.match(n.local.end)) {
                      var a = n.local.endToken || null;
                      return (n.local = n.localState = null), a;
                    }
                    var l,
                      a = n.local.mode.token(r, n.localState);
                    return (
                      n.local.endScan &&
                        (l = n.local.endScan.exec(r.current())) &&
                        (r.pos = r.start + l.index),
                      a
                    );
                  }
                  for (var s = e[n.state], c = 0; c < s.length; c++) {
                    var u = s[c],
                      d = (!u.data.sol || r.sol()) && r.match(u.regex);
                    if (d) {
                      u.data.next
                        ? (n.state = u.data.next)
                        : u.data.push
                        ? ((n.stack || (n.stack = [])).push(n.state),
                          (n.state = u.data.push))
                        : u.data.pop &&
                          n.stack &&
                          n.stack.length &&
                          (n.state = n.stack.pop()),
                        u.data.mode && o(t, n, u.data.mode, u.token),
                        u.data.indent &&
                          n.indent.push(r.indentation() + t.indentUnit),
                        u.data.dedent && n.indent.pop();
                      var p = u.token;
                      if (
                        (p && p.apply && (p = p(d)),
                        d.length > 2 && u.token && "string" != typeof u.token)
                      ) {
                        n.pending = [];
                        for (var f = 2; f < d.length; f++)
                          d[f] &&
                            n.pending.push({
                              text: d[f],
                              token: u.token[f - 1]
                            });
                        return (
                          r.backUp(d[0].length - (d[1] ? d[1].length : 0)), p[0]
                        );
                      }
                      return p && p.join ? p[0] : p;
                    }
                  }
                  return r.next(), null;
                };
              })(a, r),
              innerMode: function (e) {
                return e.local && { mode: e.local.mode, state: e.localState };
              },
              indent: (function (t, r) {
                return function (n, i, o) {
                  if (n.local && n.local.mode.indent)
                    return n.local.mode.indent(n.localState, i, o);
                  if (
                    null == n.indent ||
                    n.local ||
                    (r.dontIndentStates &&
                      (function (e, t) {
                        for (var r = 0; r < t.length; r++)
                          if (t[r] === e) return !0;
                      })(n.state, r.dontIndentStates) > -1)
                  )
                    return e.Pass;
                  var a = n.indent.length - 1,
                    l = t[n.state];
                  e: for (;;) {
                    for (var s = 0; s < l.length; s++) {
                      var c = l[s];
                      if (c.data.dedent && !1 !== c.data.dedentIfLineStart) {
                        var u = c.regex.exec(i);
                        if (u && u[0]) {
                          a--,
                            (c.next || c.push) && (l = t[c.next || c.push]),
                            (i = i.slice(u[0].length));
                          continue e;
                        }
                      }
                    }
                    break;
                  }
                  return a < 0 ? 0 : n.indent[a];
                };
              })(a, l)
            };
            if (l) for (var h in l) l.hasOwnProperty(h) && (m[h] = l[h]);
            return m;
          });
      })(r(0));
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        e.defineMode(
          "sass",
          function (t) {
            var r,
              n = e.mimeModes["text/css"],
              i = n.propertyKeywords || {},
              o = n.colorKeywords || {},
              a = n.valueKeywords || {},
              l = n.fontProperties || {},
              s = new RegExp("^" + ["true", "false", "null", "auto"].join("|")),
              c = new RegExp(
                "^" +
                  [
                    "\\(",
                    "\\)",
                    "=",
                    ">",
                    "<",
                    "==",
                    ">=",
                    "<=",
                    "\\+",
                    "-",
                    "\\!=",
                    "/",
                    "\\*",
                    "%",
                    "and",
                    "or",
                    "not",
                    ";",
                    "\\{",
                    "\\}",
                    ":"
                  ].join("|")
              ),
              u = /^::?[a-zA-Z_][\w\-]*/;
            function d(e) {
              return !e.peek() || e.match(/\s+$/, !1);
            }
            function p(e, t) {
              var r = e.peek();
              return ")" === r
                ? (e.next(), (t.tokenizer = b), "operator")
                : "(" === r
                ? (e.next(), e.eatSpace(), "operator")
                : "'" === r || '"' === r
                ? ((t.tokenizer = m(e.next())), "string")
                : ((t.tokenizer = m(")", !1)), "string");
            }
            function f(e, t) {
              return function (r, n) {
                return r.sol() && r.indentation() <= e
                  ? ((n.tokenizer = b), b(r, n))
                  : (t && r.skipTo("*/")
                      ? (r.next(), r.next(), (n.tokenizer = b))
                      : r.skipToEnd(),
                    "comment");
              };
            }
            function m(e, t) {
              return (
                null == t && (t = !0),
                function r(n, i) {
                  var o = n.next(),
                    a = n.peek(),
                    l = n.string.charAt(n.pos - 2),
                    s = ("\\" !== o && a === e) || (o === e && "\\" !== l);
                  return s
                    ? (o !== e && t && n.next(),
                      d(n) && (i.cursorHalf = 0),
                      (i.tokenizer = b),
                      "string")
                    : "#" === o && "{" === a
                    ? ((i.tokenizer = h(r)), n.next(), "operator")
                    : "string";
                }
              );
            }
            function h(e) {
              return function (t, r) {
                return "}" === t.peek()
                  ? (t.next(), (r.tokenizer = e), "operator")
                  : b(t, r);
              };
            }
            function g(e) {
              if (0 == e.indentCount) {
                e.indentCount++;
                var r = e.scopes[0].offset,
                  n = r + t.indentUnit;
                e.scopes.unshift({ offset: n });
              }
            }
            function v(e) {
              1 != e.scopes.length && e.scopes.shift();
            }
            function b(e, t) {
              var n = e.peek();
              if (e.match("/*"))
                return (
                  (t.tokenizer = f(e.indentation(), !0)), t.tokenizer(e, t)
                );
              if (e.match("//"))
                return (
                  (t.tokenizer = f(e.indentation(), !1)), t.tokenizer(e, t)
                );
              if (e.match("#{")) return (t.tokenizer = h(b)), "operator";
              if ('"' === n || "'" === n)
                return e.next(), (t.tokenizer = m(n)), "string";
              if (t.cursorHalf) {
                if (
                  "#" === n &&
                  (e.next(), e.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/))
                )
                  return d(e) && (t.cursorHalf = 0), "number";
                if (e.match(/^-?[0-9\.]+/))
                  return d(e) && (t.cursorHalf = 0), "number";
                if (e.match(/^(px|em|in)\b/))
                  return d(e) && (t.cursorHalf = 0), "unit";
                if (e.match(s)) return d(e) && (t.cursorHalf = 0), "keyword";
                if (e.match(/^url/) && "(" === e.peek())
                  return (t.tokenizer = p), d(e) && (t.cursorHalf = 0), "atom";
                if ("$" === n)
                  return (
                    e.next(),
                    e.eatWhile(/[\w-]/),
                    d(e) && (t.cursorHalf = 0),
                    "variable-2"
                  );
                if ("!" === n)
                  return (
                    e.next(),
                    (t.cursorHalf = 0),
                    e.match(/^[\w]+/) ? "keyword" : "operator"
                  );
                if (e.match(c)) return d(e) && (t.cursorHalf = 0), "operator";
                if (e.eatWhile(/[\w-]/))
                  return (
                    d(e) && (t.cursorHalf = 0),
                    (r = e.current().toLowerCase()),
                    a.hasOwnProperty(r)
                      ? "atom"
                      : o.hasOwnProperty(r)
                      ? "keyword"
                      : i.hasOwnProperty(r)
                      ? ((t.prevProp = e.current().toLowerCase()), "property")
                      : "tag"
                  );
                if (d(e)) return (t.cursorHalf = 0), null;
              } else {
                if ("-" === n && e.match(/^-\w+-/)) return "meta";
                if ("." === n) {
                  if ((e.next(), e.match(/^[\w-]+/))) return g(t), "qualifier";
                  if ("#" === e.peek()) return g(t), "tag";
                }
                if ("#" === n) {
                  if ((e.next(), e.match(/^[\w-]+/))) return g(t), "builtin";
                  if ("#" === e.peek()) return g(t), "tag";
                }
                if ("$" === n)
                  return e.next(), e.eatWhile(/[\w-]/), "variable-2";
                if (e.match(/^-?[0-9\.]+/)) return "number";
                if (e.match(/^(px|em|in)\b/)) return "unit";
                if (e.match(s)) return "keyword";
                if (e.match(/^url/) && "(" === e.peek())
                  return (t.tokenizer = p), "atom";
                if ("=" === n && e.match(/^=[\w-]+/)) return g(t), "meta";
                if ("+" === n && e.match(/^\+[\w-]+/)) return "variable-3";
                if (
                  ("@" === n &&
                    e.match(/@extend/) &&
                    (e.match(/\s*[\w]/) || v(t)),
                  e.match(
                    /^@(else if|if|media|else|for|each|while|mixin|function)/
                  ))
                )
                  return g(t), "def";
                if ("@" === n) return e.next(), e.eatWhile(/[\w-]/), "def";
                if (e.eatWhile(/[\w-]/)) {
                  if (e.match(/ *: *[\w-\+\$#!\("']/, !1)) {
                    r = e.current().toLowerCase();
                    var y = t.prevProp + "-" + r;
                    return i.hasOwnProperty(y)
                      ? "property"
                      : i.hasOwnProperty(r)
                      ? ((t.prevProp = r), "property")
                      : l.hasOwnProperty(r)
                      ? "property"
                      : "tag";
                  }
                  return e.match(/ *:/, !1)
                    ? (g(t),
                      (t.cursorHalf = 1),
                      (t.prevProp = e.current().toLowerCase()),
                      "property")
                    : e.match(/ *,/, !1)
                    ? "tag"
                    : (g(t), "tag");
                }
                if (":" === n)
                  return e.match(u)
                    ? "variable-3"
                    : (e.next(), (t.cursorHalf = 1), "operator");
              }
              return e.match(c) ? "operator" : (e.next(), null);
            }
            return {
              startState: function () {
                return {
                  tokenizer: b,
                  scopes: [{ offset: 0, type: "sass" }],
                  indentCount: 0,
                  cursorHalf: 0,
                  definedVars: [],
                  definedMixins: []
                };
              },
              token: function (e, r) {
                var n = (function (e, r) {
                  e.sol() && (r.indentCount = 0);
                  var n = r.tokenizer(e, r),
                    i = e.current();
                  if ((("@return" !== i && "}" !== i) || v(r), null !== n)) {
                    for (
                      var o = e.pos - i.length,
                        a = o + t.indentUnit * r.indentCount,
                        l = [],
                        s = 0;
                      s < r.scopes.length;
                      s++
                    ) {
                      var c = r.scopes[s];
                      c.offset <= a && l.push(c);
                    }
                    r.scopes = l;
                  }
                  return n;
                })(e, r);
                return (r.lastToken = { style: n, content: e.current() }), n;
              },
              indent: function (e) {
                return e.scopes[0].offset;
              }
            };
          },
          "css"
        ),
          e.defineMIME("text/x-sass", "sass");
      })(r(0), r(1));
    },
    function (e, t, r) {
      function n(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, r = new Array(e.length); t < e.length; t++)
                r[t] = e[t];
              return r;
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function i(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      function o(e, t, r, n, i, o, a) {
        try {
          var l = e[o](a),
            s = l.value;
        } catch (e) {
          return void r(e);
        }
        l.done ? t(s) : Promise.resolve(s).then(n, i);
      }
      function a(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, i) {
            var a = e.apply(t, r);
            function l(e) {
              o(a, n, i, l, s, "next", e);
            }
            function s(e) {
              o(a, n, i, l, s, "throw", e);
            }
            l(void 0);
          });
        };
      }
      function l(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function s(e, t, r) {
        return t && l(e.prototype, t), r && l(e, r), e;
      }
      var c = r(0),
        u = window.CodeMirror || c;
      r(10),
        r(13).toString(),
        r(15),
        r(17),
        r(19),
        r(1),
        r(20),
        r(6),
        r(21),
        r(5),
        r(23),
        r(25),
        r(8),
        r(26),
        r(27),
        r(28),
        r(4);
      var d = {
          Python: "Pytho ",
          CSS: "CSS",
          HTML: "htmlmixed",
          MarkDown: "MarkDown",
          Javascript: "Javascript",
          PHP: "PHP",
          R: "R",
          SASS: "sass",
          SQL: "sql",
          Swift: "swift",
          Vue: "vue",
          XML: "xmls"
        },
        p = (function () {
          function e(t) {
            var r = t.data,
              n = t.config,
              i = t.api;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.api = i),
              (this.textPlaceholder =
                n.textPlaceholder || e.DEFAULT_CODE_PLACEHOLDER),
              (this.languagePlaceholder =
                n.languagePlaceholder || e.DEFAULT_LANGUAGE_PLACEHOLDER),
              (this.format = n.format || e.DEFAULT_FORMAT_CONFIG),
              (this.data = {
                language: r.language || "Python",
                text: r.text || ""
              });
          }
          return (
            s(
              e,
              [
                {
                  key: "CSS",
                  get: function () {
                    return {
                      baseClass: this.api.styles.block,
                      wrapper: "cdx-codemirror",
                      input: this.api.styles.input,
                      language: "cdx-codemirror__language",
                      textarea: "cdx-codemirror__textarea"
                    };
                  }
                }
              ],
              [
                {
                  key: "toolbox",
                  get: function () {
                    return {
                      icon: '<svg width="14" height="14" viewBox="0 -1 14 14" xmlns="http://www.w3.org/2000/svg" > <path d="M3.177 6.852c.205.253.347.572.427.954.078.372.117.844.117 1.417 0 .418.01.725.03.92.02.18.057.314.107.396.046.075.093.117.14.134.075.027.218.056.42.083a.855.855 0 0 1 .56.297c.145.167.215.38.215.636 0 .612-.432.934-1.216.934-.457 0-.87-.087-1.233-.262a1.995 1.995 0 0 1-.853-.751 2.09 2.09 0 0 1-.305-1.097c-.014-.648-.029-1.168-.043-1.56-.013-.383-.034-.631-.06-.733-.064-.263-.158-.455-.276-.578a2.163 2.163 0 0 0-.505-.376c-.238-.134-.41-.256-.519-.371C.058 6.76 0 6.567 0 6.315c0-.37.166-.657.493-.846.329-.186.56-.342.693-.466a.942.942 0 0 0 .26-.447c.056-.2.088-.42.097-.658.01-.25.024-.85.043-1.802.015-.629.239-1.14.672-1.522C2.691.19 3.268 0 3.977 0c.783 0 1.216.317 1.216.921 0 .264-.069.48-.211.643a.858.858 0 0 1-.563.29c-.249.03-.417.076-.498.126-.062.04-.112.134-.139.291-.031.187-.052.562-.061 1.119a8.828 8.828 0 0 1-.112 1.378 2.24 2.24 0 0 1-.404.963c-.159.212-.373.406-.64.583.25.163.454.342.612.538zm7.34 0c.157-.196.362-.375.612-.538a2.544 2.544 0 0 1-.641-.583 2.24 2.24 0 0 1-.404-.963 8.828 8.828 0 0 1-.112-1.378c-.009-.557-.03-.932-.061-1.119-.027-.157-.077-.251-.14-.29-.08-.051-.248-.096-.496-.127a.858.858 0 0 1-.564-.29C8.57 1.401 8.5 1.185 8.5.921 8.5.317 8.933 0 9.716 0c.71 0 1.286.19 1.72.574.432.382.656.893.671 1.522.02.952.033 1.553.043 1.802.009.238.041.458.097.658a.942.942 0 0 0 .26.447c.133.124.364.28.693.466a.926.926 0 0 1 .493.846c0 .252-.058.446-.183.58-.109.115-.281.237-.52.371-.21.118-.377.244-.504.376-.118.123-.212.315-.277.578-.025.102-.045.35-.06.733-.013.392-.027.912-.042 1.56a2.09 2.09 0 0 1-.305 1.097c-.2.323-.486.574-.853.75a2.811 2.811 0 0 1-1.233.263c-.784 0-1.216-.322-1.216-.934 0-.256.07-.47.214-.636a.855.855 0 0 1 .562-.297c.201-.027.344-.056.418-.083.048-.017.096-.06.14-.134a.996.996 0 0 0 .107-.396c.02-.195.031-.502.031-.92 0-.573.039-1.045.117-1.417.08-.382.222-.701.427-.954z" /> </svg>',
                      title: "Code"
                    };
                  }
                },
                {
                  key: "contentless",
                  get: function () {
                    return !0;
                  }
                },
                {
                  key: "enableLineBreaks",
                  get: function () {
                    return !0;
                  }
                },
                {
                  key: "DEFAULT_CODE_PLACEHOLDER",
                  get: function () {
                    return "Enter some code";
                  }
                },
                {
                  key: "DEFAULT_LANGUAGE_PLACEHOLDER",
                  get: function () {
                    return "Python";
                  }
                },
                {
                  key: "DEFAULT_FORMAT_CONFIG",
                  get: function () {
                    return Object.keys(d);
                  }
                }
              ]
            ),
            s(
              e,
              [
                {
                  key: "appendCallback",
                  value: function () {
                    (codemirror = this.codemirror),
                      setTimeout(
                        a(
                          regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    codemirror.focus(),
                                      codemirror.setCursor(
                                        codemirror.lineCount(),
                                        0
                                      ),
                                      codemirror.refresh();
                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        ),
                        100
                      );
                  }
                },
                {
                  key: "render",
                  value: function () {
                    var e,
                      t = this._make(
                        "div",
                        [this.CSS.wrapper, this.CSS.baseClass],
                        {}
                      ),
                      r = this._make(
                        "textarea",
                        [this.CSS.input, this.CSS.textarea],
                        { contentEditable: !1, innerHTML: this.data.text }
                      ),
                      n = this._make("div", this.CSS.input),
                      o = this._make("select", this.CSS.language);
                    (r.dataset.placeholder = this.textPlaceholder),
                      (o.dataset.placeholder = this.languagePlaceholder);
                    var l = this.format;
                    for (var s in l) {
                      var c = document.createElement("option"),
                        p = document.createAttribute("value"),
                        f = document.createTextNode(l[s]);
                      (p.value = l[s]),
                        c.appendChild(f),
                        c.setAttributeNode(p),
                        o.appendChild(c);
                    }
                    (o.value = this.data.language),
                      n.appendChild(o),
                      t.appendChild(n),
                      t.appendChild(r);
                    var m = u.fromTextArea(
                      r,
                      (i(
                        (e = {
                          tabSize: 4,
                          styleActiveLine: { nonEmpty: !0 },
                          styleActiveSelected: !0,
                          lineNumbers: !0,
                          line: !1,
                          foldGutter: !0,
                          autofocus: !1,
                          styleSelectedText: !0,
                          mode: d[this.data.language].toLowerCase(),
                          matchBrackets: !0,
                          showCursorWhenSelecting: !0,
                          theme: "dracula",
                          autoCloseTags: !0
                        }),
                        "foldGutter",
                        !0
                      ),
                      i(e, "dragDrop", !0),
                      i(e, "lint", !0),
                      i(e, "extraKeys", { Ctrl: "autocomplete" }),
                      i(e, "hintOptions", { completeSingle: !1 }),
                      e)
                    );
                    return (
                      (this.codemirror = m),
                      this.codemirror.focus(),
                      this.codemirror.setCursor({ line: 0, ch: 0 }),
                      this.codemirror.refresh(),
                      setTimeout(
                        a(
                          regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    m.focus(),
                                      m.setCursor(m.lineCount(), 0),
                                      m.refresh();
                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        ),
                        100
                      ),
                      (o.onchange = function (e) {
                        m.setOption("mode", d[e.target.value].toLowerCase());
                      }),
                      (this.language = o),
                      t
                    );
                  }
                },
                {
                  key: "onPaste",
                  value: function (e) {
                    var t = e.detail.data;
                    this.data = { text: t.textContent };
                  }
                },
                {
                  key: "save",
                  value: function (e) {
                    return Object.assign(this.data, {
                      text: this.codemirror.getValue(),
                      language: this.language.value
                    });
                  }
                },
                {
                  key: "_make",
                  value: function (e) {
                    var t,
                      r =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {},
                      o = document.createElement(e);
                    Array.isArray(r)
                      ? (t = o.classList).add.apply(t, n(r))
                      : r && o.classList.add(r);
                    for (var a in i) o[a] = i[a];
                    return o;
                  }
                }
              ],
              [
                {
                  key: "sanitize",
                  get: function () {
                    return { language: {}, text: {} };
                  }
                },
                {
                  key: "pasteConfig",
                  get: function () {
                    return { tags: ["pre"] };
                  }
                }
              ]
            ),
            e
          );
        })();
      e.exports = p;
    },
    function (e, t, r) {
      var n = r(11);
      "string" == typeof n && (n = [[e.i, n, ""]]);
      var i = { hmr: !0, transform: void 0, insertInto: void 0 };
      r(3)(n, i);
      n.locals && (e.exports = n.locals);
    },
    function (e, t, r) {
      (e.exports = r(2)(!1)).push([
        e.i,
        "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: 0;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre.CodeMirror-line,\n.CodeMirror-wrap pre.CodeMirror-line-like {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n",
        ""
      ]);
    },
    function (e, t) {
      e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var r = t.protocol + "//" + t.host,
          n = r + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(
          /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
          function (e, t) {
            var i,
              o = t
                .trim()
                .replace(/^"(.*)"$/, function (e, t) {
                  return t;
                })
                .replace(/^'(.*)'$/, function (e, t) {
                  return t;
                });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)
              ? e
              : ((i =
                  0 === o.indexOf("//")
                    ? o
                    : 0 === o.indexOf("/")
                    ? r + o
                    : n + o.replace(/^\.\//, "")),
                "url(" + JSON.stringify(i) + ")");
          }
        );
      };
    },
    function (e, t, r) {
      var n = r(14);
      "string" == typeof n && (n = [[e.i, n, ""]]);
      var i = { hmr: !0, transform: void 0, insertInto: void 0 };
      r(3)(n, i);
      n.locals && (e.exports = n.locals);
    },
    function (e, t, r) {
      (e.exports = r(2)(!1)).push([
        e.i,
        ".cdx-codemirror__textarea {\n    min-height: 200px;\n    font-family: Menlo, Monaco, Consolas, Courier New, monospace;\n    color: #41314e;\n    line-height: 1.6em;\n    font-size: 12px;\n    background: #f8f7fa;\n    border: 1px solid #f1f1f4;\n    box-shadow: none;\n    white-space: pre;\n    word-wrap: normal;\n    overflow-x: auto;\n    resize: vertical;\n}\n\n.cdx-codemirror__language {\n    width: 100%;\n    cursor: pointer;\n    padding-right: 2em;\n    border: none;\n    background: transparent;\n    background-image: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    text-indent: 0.01px;\n    text-overflow: '';\n}\n\n.cdx-codemirror__language:focus {\n    border: 0;\n    outline: 0;;\n}\n\n.cdx-codemirror__language:active {\n    border: 0;\n    outline: 0;;\n}",
        ""
      ]);
    },
    function (e, t, r) {
      var n = r(16);
      "string" == typeof n && (n = [[e.i, n, ""]]);
      var i = { hmr: !0, transform: void 0, insertInto: void 0 };
      r(3)(n, i);
      n.locals && (e.exports = n.locals);
    },
    function (e, t, r) {
      (e.exports = r(2)(!1)).push([
        e.i,
        "/*\n\n    Name:       dracula\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original dracula color scheme by Zeno Rocha (https://github.com/zenorocha/dracula-theme)\n\n*/\n\n\n.cm-s-dracula.CodeMirror, .cm-s-dracula .CodeMirror-gutters {\n  background-color: #282a36 !important;\n  color: #f8f8f2 !important;\n  border: none;\n}\n.cm-s-dracula .CodeMirror-gutters { color: #282a36; }\n.cm-s-dracula .CodeMirror-cursor { border-left: solid thin #f8f8f0; }\n.cm-s-dracula .CodeMirror-linenumber { color: #6D8A88; }\n.cm-s-dracula .CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::selection, .cm-s-dracula .CodeMirror-line > span::selection, .cm-s-dracula .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::-moz-selection, .cm-s-dracula .CodeMirror-line > span::-moz-selection, .cm-s-dracula .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula span.cm-comment { color: #6272a4; }\n.cm-s-dracula span.cm-string, .cm-s-dracula span.cm-string-2 { color: #f1fa8c; }\n.cm-s-dracula span.cm-number { color: #bd93f9; }\n.cm-s-dracula span.cm-variable { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-2 { color: white; }\n.cm-s-dracula span.cm-def { color: #50fa7b; }\n.cm-s-dracula span.cm-operator { color: #ff79c6; }\n.cm-s-dracula span.cm-keyword { color: #ff79c6; }\n.cm-s-dracula span.cm-atom { color: #bd93f9; }\n.cm-s-dracula span.cm-meta { color: #f8f8f2; }\n.cm-s-dracula span.cm-tag { color: #ff79c6; }\n.cm-s-dracula span.cm-attribute { color: #50fa7b; }\n.cm-s-dracula span.cm-qualifier { color: #50fa7b; }\n.cm-s-dracula span.cm-property { color: #66d9ef; }\n.cm-s-dracula span.cm-builtin { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-3, .cm-s-dracula span.cm-type { color: #ffb86c; }\n\n.cm-s-dracula .CodeMirror-activeline-background { background: rgba(255,255,255,0.1); }\n.cm-s-dracula .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n",
        ""
      ]);
    },
    function (e, t, r) {
      var n = r(18);
      "string" == typeof n && (n = [[e.i, n, ""]]);
      var i = { hmr: !0, transform: void 0, insertInto: void 0 };
      r(3)(n, i);
      n.locals && (e.exports = n.locals);
    },
    function (e, t, r) {
      (e.exports = r(2)(!1)).push([
        e.i,
        "/**\n    Name: IntelliJ IDEA darcula theme\n    From IntelliJ IDEA by JetBrains\n */\n\n.cm-s-darcula  { font-family: Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace, serif;}\n.cm-s-darcula.CodeMirror { background: #2B2B2B; color: #A9B7C6; }\n\n.cm-s-darcula span.cm-meta { color: #BBB529; }\n.cm-s-darcula span.cm-number { color: #6897BB; }\n.cm-s-darcula span.cm-keyword { color: #CC7832; line-height: 1em; font-weight: bold; }\n.cm-s-darcula span.cm-def { color: #A9B7C6; font-style: italic; }\n.cm-s-darcula span.cm-variable { color: #A9B7C6; }\n.cm-s-darcula span.cm-variable-2 { color: #A9B7C6; }\n.cm-s-darcula span.cm-variable-3 { color: #9876AA; }\n.cm-s-darcula span.cm-type { color: #AABBCC; font-weight: bold; }\n.cm-s-darcula span.cm-property { color: #FFC66D; }\n.cm-s-darcula span.cm-operator { color: #A9B7C6; }\n.cm-s-darcula span.cm-string { color: #6A8759; }\n.cm-s-darcula span.cm-string-2 { color: #6A8759; }\n.cm-s-darcula span.cm-comment { color: #61A151; font-style: italic; }\n.cm-s-darcula span.cm-link { color: #CC7832; }\n.cm-s-darcula span.cm-atom { color: #CC7832; }\n.cm-s-darcula span.cm-error { color: #BC3F3C; }\n.cm-s-darcula span.cm-tag { color: #629755; font-weight: bold; font-style: italic; text-decoration: underline; }\n.cm-s-darcula span.cm-attribute { color: #6897bb; }\n.cm-s-darcula span.cm-qualifier { color: #6A8759; }\n.cm-s-darcula span.cm-bracket { color: #A9B7C6; }\n.cm-s-darcula span.cm-builtin { color: #FF9E59; }\n.cm-s-darcula span.cm-special { color: #FF9E59; }\n.cm-s-darcula span.cm-matchhighlight { color: #FFFFFF; background-color: rgba(50, 89, 48, .7); font-weight: normal;}\n.cm-s-darcula span.cm-searching { color: #FFFFFF; background-color: rgba(61, 115, 59, .7); font-weight: normal;}\n\n.cm-s-darcula .CodeMirror-cursor { border-left: 1px solid #A9B7C6; }\n.cm-s-darcula .CodeMirror-activeline-background { background: #323232; }\n.cm-s-darcula .CodeMirror-gutters { background: #313335; border-right: 1px solid #313335; }\n.cm-s-darcula .CodeMirror-guttermarker { color: #FFEE80; }\n.cm-s-darcula .CodeMirror-guttermarker-subtle { color: #D0D0D0; }\n.cm-s-darcula .CodeMirrir-linenumber { color: #606366; }\n.cm-s-darcula .CodeMirror-matchingbracket { background-color: #3B514D; color: #FFEF28 !important; font-weight: bold; }\n\n.cm-s-darcula div.CodeMirror-selected { background: #214283; }\n\n.CodeMirror-hints.darcula {\n  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;\n  color: #9C9E9E;\n  background-color: #3B3E3F !important;\n}\n\n.CodeMirror-hints.darcula .CodeMirror-hint-active {\n  background-color: #494D4E !important;\n  color: #9C9E9E !important;\n}\n",
        ""
      ]);
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        function t(e) {
          return new RegExp("^((" + e.join(")|(") + "))\\b");
        }
        var r,
          n = t(["and", "or", "not", "is"]),
          i = [
            "as",
            "assert",
            "break",
            "class",
            "continue",
            "def",
            "del",
            "elif",
            "else",
            "except",
            "finally",
            "for",
            "from",
            "global",
            "if",
            "import",
            "lambda",
            "pass",
            "raise",
            "return",
            "try",
            "while",
            "with",
            "yield",
            "in"
          ],
          o = [
            "abs",
            "all",
            "any",
            "bin",
            "bool",
            "bytearray",
            "callable",
            "chr",
            "classmethod",
            "compile",
            "complex",
            "delattr",
            "dict",
            "dir",
            "divmod",
            "enumerate",
            "eval",
            "filter",
            "float",
            "format",
            "frozenset",
            "getattr",
            "globals",
            "hasattr",
            "hash",
            "help",
            "hex",
            "id",
            "input",
            "int",
            "isinstance",
            "issubclass",
            "iter",
            "len",
            "list",
            "locals",
            "map",
            "max",
            "memoryview",
            "min",
            "next",
            "object",
            "oct",
            "open",
            "ord",
            "pow",
            "property",
            "range",
            "repr",
            "reversed",
            "round",
            "set",
            "setattr",
            "slice",
            "sorted",
            "staticmethod",
            "str",
            "sum",
            "super",
            "tuple",
            "type",
            "vars",
            "zip",
            "__import__",
            "NotImplemented",
            "Ellipsis",
            "__debug__"
          ];
        function a(e) {
          return e.scopes[e.scopes.length - 1];
        }
        e.registerHelper("hintWords", "python", i.concat(o)),
          e.defineMode("python", function (r, l) {
            for (
              var s = "error",
                c =
                  l.delimiters ||
                  l.singleDelimiters ||
                  /^[\(\)\[\]\{\}@,:`=;\.\\]/,
                u = [
                  l.singleOperators,
                  l.doubleOperators,
                  l.doubleDelimiters,
                  l.tripleDelimiters,
                  l.operators ||
                    /^([-+*\/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/
                ],
                d = 0;
              d < u.length;
              d++
            )
              u[d] || u.splice(d--, 1);
            var p = l.hangingIndent || r.indentUnit,
              f = i,
              m = o;
            null != l.extra_keywords && (f = f.concat(l.extra_keywords)),
              null != l.extra_builtins && (m = m.concat(l.extra_builtins));
            var h = !(l.version && Number(l.version) < 3);
            if (h) {
              var g =
                l.identifiers ||
                /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
              (f = f.concat([
                "nonlocal",
                "False",
                "True",
                "None",
                "async",
                "await"
              ])),
                (m = m.concat(["ascii", "bytes", "exec", "print"]));
              var v = new RegExp(
                "^(([rbuf]|(br)|(fr))?('{3}|\"{3}|['\"]))",
                "i"
              );
            } else {
              var g = l.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/;
              (f = f.concat(["exec", "print"])),
                (m = m.concat([
                  "apply",
                  "basestring",
                  "buffer",
                  "cmp",
                  "coerce",
                  "execfile",
                  "file",
                  "intern",
                  "long",
                  "raw_input",
                  "reduce",
                  "reload",
                  "unichr",
                  "unicode",
                  "xrange",
                  "False",
                  "True",
                  "None"
                ]));
              var v = new RegExp(
                "^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))",
                "i"
              );
            }
            var b = t(f),
              y = t(m);
            function x(e, t) {
              var r = e.sol() && "\\" != t.lastToken;
              if ((r && (t.indent = e.indentation()), r && "py" == a(t).type)) {
                var n = a(t).offset;
                if (e.eatSpace()) {
                  var i = e.indentation();
                  return (
                    i > n
                      ? w(t)
                      : i < n &&
                        _(e, t) &&
                        "#" != e.peek() &&
                        (t.errorToken = !0),
                    null
                  );
                }
                var o = k(e, t);
                return n > 0 && _(e, t) && (o += " " + s), o;
              }
              return k(e, t);
            }
            function k(e, t) {
              if (e.eatSpace()) return null;
              if (e.match(/^#.*/)) return "comment";
              if (e.match(/^[0-9\.]/, !1)) {
                var r = !1;
                if (
                  (e.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i) && (r = !0),
                  e.match(/^[\d_]+\.\d*/) && (r = !0),
                  e.match(/^\.\d+/) && (r = !0),
                  r)
                )
                  return e.eat(/J/i), "number";
                var i = !1;
                if (
                  (e.match(/^0x[0-9a-f_]+/i) && (i = !0),
                  e.match(/^0b[01_]+/i) && (i = !0),
                  e.match(/^0o[0-7_]+/i) && (i = !0),
                  e.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/) &&
                    (e.eat(/J/i), (i = !0)),
                  e.match(/^0(?![\dx])/i) && (i = !0),
                  i)
                )
                  return e.eat(/L/i), "number";
              }
              if (e.match(v)) {
                var o = -1 !== e.current().toLowerCase().indexOf("f");
                return o
                  ? ((t.tokenize = (function (e, t) {
                      for (; "rubf".indexOf(e.charAt(0).toLowerCase()) >= 0; )
                        e = e.substr(1);
                      var r = 1 == e.length,
                        n = "string";
                      function i(e) {
                        return function (t, r) {
                          var n = k(t, r);
                          return (
                            "punctuation" == n &&
                              ("{" == t.current()
                                ? (r.tokenize = i(e + 1))
                                : "}" == t.current() &&
                                  (r.tokenize = e > 1 ? i(e - 1) : o)),
                            n
                          );
                        };
                      }
                      function o(o, a) {
                        for (; !o.eol(); )
                          if ((o.eatWhile(/[^'"\{\}\\]/), o.eat("\\"))) {
                            if ((o.next(), r && o.eol())) return n;
                          } else {
                            if (o.match(e)) return (a.tokenize = t), n;
                            if (o.match("{{")) return n;
                            if (o.match("{", !1))
                              return (
                                (a.tokenize = i(0)),
                                o.current() ? n : a.tokenize(o, a)
                              );
                            if (o.match("}}")) return n;
                            if (o.match("}")) return s;
                            o.eat(/['"]/);
                          }
                        if (r) {
                          if (l.singleLineStringErrors) return s;
                          a.tokenize = t;
                        }
                        return n;
                      }
                      return (o.isString = !0), o;
                    })(e.current(), t.tokenize)),
                    t.tokenize(e, t))
                  : ((t.tokenize = (function (e, t) {
                      for (; "rubf".indexOf(e.charAt(0).toLowerCase()) >= 0; )
                        e = e.substr(1);
                      var r = 1 == e.length,
                        n = "string";
                      function i(i, o) {
                        for (; !i.eol(); )
                          if ((i.eatWhile(/[^'"\\]/), i.eat("\\"))) {
                            if ((i.next(), r && i.eol())) return n;
                          } else {
                            if (i.match(e)) return (o.tokenize = t), n;
                            i.eat(/['"]/);
                          }
                        if (r) {
                          if (l.singleLineStringErrors) return s;
                          o.tokenize = t;
                        }
                        return n;
                      }
                      return (i.isString = !0), i;
                    })(e.current(), t.tokenize)),
                    t.tokenize(e, t));
              }
              for (var a = 0; a < u.length; a++)
                if (e.match(u[a])) return "operator";
              return e.match(c)
                ? "punctuation"
                : "." == t.lastToken && e.match(g)
                ? "property"
                : e.match(b) || e.match(n)
                ? "keyword"
                : e.match(y)
                ? "builtin"
                : e.match(/^(self|cls)\b/)
                ? "variable-2"
                : e.match(g)
                ? "def" == t.lastToken || "class" == t.lastToken
                  ? "def"
                  : "variable"
                : (e.next(), s);
            }
            function w(e) {
              for (; "py" != a(e).type; ) e.scopes.pop();
              e.scopes.push({
                offset: a(e).offset + r.indentUnit,
                type: "py",
                align: null
              });
            }
            function _(e, t) {
              for (
                var r = e.indentation();
                t.scopes.length > 1 && a(t).offset > r;

              ) {
                if ("py" != a(t).type) return !0;
                t.scopes.pop();
              }
              return a(t).offset != r;
            }
            function C(e, t) {
              e.sol() && (t.beginningOfLine = !0);
              var r = t.tokenize(e, t),
                n = e.current();
              if (t.beginningOfLine && "@" == n)
                return e.match(g, !1) ? "meta" : h ? "operator" : s;
              if (
                (/\S/.test(n) && (t.beginningOfLine = !1),
                ("variable" != r && "builtin" != r) ||
                  "meta" != t.lastToken ||
                  (r = "meta"),
                ("pass" != n && "return" != n) || (t.dedent += 1),
                "lambda" == n && (t.lambda = !0),
                ":" != n || t.lambda || "py" != a(t).type || w(t),
                1 == n.length && !/string|comment/.test(r))
              ) {
                var i = "[({".indexOf(n);
                if (
                  (-1 != i &&
                    (function (e, t, r) {
                      var n = e.match(/^([\s\[\{\(]|#.*)*$/, !1)
                        ? null
                        : e.column() + 1;
                      t.scopes.push({
                        offset: t.indent + p,
                        type: r,
                        align: n
                      });
                    })(e, t, "])}".slice(i, i + 1)),
                  -1 != (i = "])}".indexOf(n)))
                ) {
                  if (a(t).type != n) return s;
                  t.indent = t.scopes.pop().offset - p;
                }
              }
              return (
                t.dedent > 0 &&
                  e.eol() &&
                  "py" == a(t).type &&
                  (t.scopes.length > 1 && t.scopes.pop(), (t.dedent -= 1)),
                r
              );
            }
            var S = {
              startState: function (e) {
                return {
                  tokenize: x,
                  scopes: [{ offset: e || 0, type: "py", align: null }],
                  indent: e || 0,
                  lastToken: null,
                  lambda: !1,
                  dedent: 0
                };
              },
              token: function (e, t) {
                var r = t.errorToken;
                r && (t.errorToken = !1);
                var n = C(e, t);
                return (
                  n &&
                    "comment" != n &&
                    (t.lastToken =
                      "keyword" == n || "punctuation" == n ? e.current() : n),
                  "punctuation" == n && (n = null),
                  e.eol() && t.lambda && (t.lambda = !1),
                  r ? n + " " + s : n
                );
              },
              indent: function (t, r) {
                if (t.tokenize != x) return t.tokenize.isString ? e.Pass : 0;
                var n = a(t),
                  i = n.type == r.charAt(0);
                return null != n.align
                  ? n.align - (i ? 1 : 0)
                  : n.offset - (i ? p : 0);
              },
              electricInput: /^\s*[\}\]\)]$/,
              closeBrackets: { triples: "'\"" },
              lineComment: "#",
              fold: "indent"
            };
            return S;
          }),
          e.defineMIME("text/x-python", "python"),
          e.defineMIME("text/x-cython", {
            name: "python",
            extra_keywords:
              ((r =
                "by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE"),
              r.split(" "))
          });
      })(r(0));
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        var t = "from",
          r = new RegExp("^(\\s*)\\b(" + t + ")\\b", "i"),
          n = ["run", "cmd", "entrypoint", "shell"],
          i = new RegExp("^(\\s*)(" + n.join("|") + ")(\\s+\\[)", "i"),
          o = "expose",
          a = new RegExp("^(\\s*)(" + o + ")(\\s+)", "i"),
          l =
            "(" +
            [t, o]
              .concat(n)
              .concat([
                "arg",
                "from",
                "maintainer",
                "label",
                "env",
                "add",
                "copy",
                "volume",
                "user",
                "workdir",
                "onbuild",
                "stopsignal",
                "healthcheck",
                "shell"
              ])
              .join("|") +
            ")",
          s = new RegExp("^(\\s*)" + l + "(\\s*)(#.*)?$", "i"),
          c = new RegExp("^(\\s*)" + l + "(\\s+)", "i");
        e.defineSimpleMode("dockerfile", {
          start: [
            { regex: /^\s*#.*$/, sol: !0, token: "comment" },
            { regex: r, token: [null, "keyword"], sol: !0, next: "from" },
            { regex: s, token: [null, "keyword", null, "error"], sol: !0 },
            {
              regex: i,
              token: [null, "keyword", null],
              sol: !0,
              next: "array"
            },
            {
              regex: a,
              token: [null, "keyword", null],
              sol: !0,
              next: "expose"
            },
            {
              regex: c,
              token: [null, "keyword", null],
              sol: !0,
              next: "arguments"
            },
            { regex: /./, token: null }
          ],
          from: [
            { regex: /\s*$/, token: null, next: "start" },
            { regex: /(\s*)(#.*)$/, token: [null, "error"], next: "start" },
            {
              regex: /(\s*\S+\s+)(as)/i,
              token: [null, "keyword"],
              next: "start"
            },
            { token: null, next: "start" }
          ],
          single: [
            { regex: /(?:[^\\']|\\.)/, token: "string" },
            { regex: /'/, token: "string", pop: !0 }
          ],
          double: [
            { regex: /(?:[^\\"]|\\.)/, token: "string" },
            { regex: /"/, token: "string", pop: !0 }
          ],
          array: [
            { regex: /\]/, token: null, next: "start" },
            { regex: /"(?:[^\\"]|\\.)*"?/, token: "string" }
          ],
          expose: [
            { regex: /\d+$/, token: "number", next: "start" },
            { regex: /[^\d]+$/, token: null, next: "start" },
            { regex: /\d+/, token: "number" },
            { regex: /[^\d]+/, token: null },
            { token: null, next: "start" }
          ],
          arguments: [
            { regex: /^\s*#.*$/, sol: !0, token: "comment" },
            { regex: /"(?:[^\\"]|\\.)*"?$/, token: "string", next: "start" },
            { regex: /"/, token: "string", push: "double" },
            { regex: /'(?:[^\\']|\\.)*'?$/, token: "string", next: "start" },
            { regex: /'/, token: "string", push: "single" },
            { regex: /[^#"']+[\\`]$/, token: null },
            { regex: /[^#"']+$/, token: null, next: "start" },
            { regex: /[^#"']+/, token: null },
            { token: null, next: "start" }
          ],
          meta: { lineComment: "#" }
        }),
          e.defineMIME("text/x-dockerfile", "dockerfile");
      })(r(0), r(7));
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        e.defineMode(
          "markdown",
          function (t, r) {
            var n = e.getMode(t, "text/html"),
              i = "null" == n.name;
            void 0 === r.highlightFormatting && (r.highlightFormatting = !1),
              void 0 === r.maxBlockquoteDepth && (r.maxBlockquoteDepth = 0),
              void 0 === r.taskLists && (r.taskLists = !1),
              void 0 === r.strikethrough && (r.strikethrough = !1),
              void 0 === r.emoji && (r.emoji = !1),
              void 0 === r.fencedCodeBlockHighlighting &&
                (r.fencedCodeBlockHighlighting = !0),
              void 0 === r.xml && (r.xml = !0),
              void 0 === r.tokenTypeOverrides && (r.tokenTypeOverrides = {});
            var o = {
              header: "header",
              code: "comment",
              quote: "quote",
              list1: "variable-2",
              list2: "variable-3",
              list3: "keyword",
              hr: "hr",
              image: "image",
              imageAltText: "image-alt-text",
              imageMarker: "image-marker",
              formatting: "formatting",
              linkInline: "link",
              linkEmail: "link",
              linkText: "link",
              linkHref: "string",
              em: "em",
              strong: "strong",
              strikethrough: "strikethrough",
              emoji: "builtin"
            };
            for (var a in o)
              o.hasOwnProperty(a) &&
                r.tokenTypeOverrides[a] &&
                (o[a] = r.tokenTypeOverrides[a]);
            var l = /^([*\-_])(?:\s*\1){2,}\s*$/,
              s = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
              c = /^\[(x| )\](?=\s)/i,
              u = r.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
              d = /^ *(?:\={1,}|-{1,})\s*$/,
              p = /^[^#!\[\]*_\\<>` "'(~:]+/,
              f = /^(~~~+|```+)[ \t]*([\w+#-]*)[^\n`]*$/,
              m = /^\s*\[[^\]]+?\]:.*$/,
              h =
                /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/;
            function g(e, t, r) {
              return (t.f = t.inline = r), r(e, t);
            }
            function v(e, t, r) {
              return (t.f = t.block = r), r(e, t);
            }
            function b(t) {
              if (
                ((t.linkTitle = !1),
                (t.linkHref = !1),
                (t.linkText = !1),
                (t.em = !1),
                (t.strong = !1),
                (t.strikethrough = !1),
                (t.quote = 0),
                (t.indentedCode = !1),
                t.f == x)
              ) {
                var r = i;
                if (!r) {
                  var o = e.innerMode(n, t.htmlState);
                  r =
                    "xml" == o.mode.name &&
                    null === o.state.tagStart &&
                    !o.state.context &&
                    o.state.tokenize.isInText;
                }
                r && ((t.f = C), (t.block = y), (t.htmlState = null));
              }
              return (
                (t.trailingSpace = 0),
                (t.trailingSpaceNewLine = !1),
                (t.prevLine = t.thisLine),
                (t.thisLine = { stream: null }),
                null
              );
            }
            function y(n, i) {
              var a,
                p = n.column() === i.indentation,
                h = !(a = i.prevLine.stream) || !/\S/.test(a.string),
                v = i.indentedCode,
                b = i.prevLine.hr,
                y = !1 !== i.list,
                x = (i.listStack[i.listStack.length - 1] || 0) + 3;
              i.indentedCode = !1;
              var _ = i.indentation;
              if (
                null === i.indentationDiff &&
                ((i.indentationDiff = i.indentation), y)
              ) {
                for (i.list = null; _ < i.listStack[i.listStack.length - 1]; )
                  i.listStack.pop(),
                    i.listStack.length
                      ? (i.indentation = i.listStack[i.listStack.length - 1])
                      : (i.list = !1);
                !1 !== i.list &&
                  (i.indentationDiff = _ - i.listStack[i.listStack.length - 1]);
              }
              var C = !(
                  h ||
                  b ||
                  i.prevLine.header ||
                  (y && v) ||
                  i.prevLine.fencedCodeEnd
                ),
                S =
                  (!1 === i.list || b || h) && i.indentation <= x && n.match(l),
                M = null;
              if (
                i.indentationDiff >= 4 &&
                (v || i.prevLine.fencedCodeEnd || i.prevLine.header || h)
              )
                return n.skipToEnd(), (i.indentedCode = !0), o.code;
              if (n.eatSpace()) return null;
              if (
                p &&
                i.indentation <= x &&
                (M = n.match(u)) &&
                M[1].length <= 6
              )
                return (
                  (i.quote = 0),
                  (i.header = M[1].length),
                  (i.thisLine.header = !0),
                  r.highlightFormatting && (i.formatting = "header"),
                  (i.f = i.inline),
                  w(i)
                );
              if (i.indentation <= x && n.eat(">"))
                return (
                  (i.quote = p ? 1 : i.quote + 1),
                  r.highlightFormatting && (i.formatting = "quote"),
                  n.eatSpace(),
                  w(i)
                );
              if (
                !S &&
                !i.setext &&
                p &&
                i.indentation <= x &&
                (M = n.match(s))
              ) {
                var L = M[1] ? "ol" : "ul";
                return (
                  (i.indentation = _ + n.current().length),
                  (i.list = !0),
                  (i.quote = 0),
                  i.listStack.push(i.indentation),
                  (i.em = !1),
                  (i.strong = !1),
                  (i.code = !1),
                  (i.strikethrough = !1),
                  r.taskLists && n.match(c, !1) && (i.taskList = !0),
                  (i.f = i.inline),
                  r.highlightFormatting &&
                    (i.formatting = ["list", "list-" + L]),
                  w(i)
                );
              }
              return p && i.indentation <= x && (M = n.match(f, !0))
                ? ((i.quote = 0),
                  (i.fencedEndRE = new RegExp(M[1] + "+ *$")),
                  (i.localMode =
                    r.fencedCodeBlockHighlighting &&
                    (function (r) {
                      if (e.findModeByName) {
                        var n = e.findModeByName(r);
                        n && (r = n.mime || n.mimes[0]);
                      }
                      var i = e.getMode(t, r);
                      return "null" == i.name ? null : i;
                    })(M[2])),
                  i.localMode && (i.localState = e.startState(i.localMode)),
                  (i.f = i.block = k),
                  r.highlightFormatting && (i.formatting = "code-block"),
                  (i.code = -1),
                  w(i))
                : i.setext ||
                  (!(
                    (C && y) ||
                    i.quote ||
                    !1 !== i.list ||
                    i.code ||
                    S ||
                    m.test(n.string)
                  ) &&
                    (M = n.lookAhead(1)) &&
                    (M = M.match(d)))
                ? (i.setext
                    ? ((i.header = i.setext),
                      (i.setext = 0),
                      n.skipToEnd(),
                      r.highlightFormatting && (i.formatting = "header"))
                    : ((i.header = "=" == M[0].charAt(0) ? 1 : 2),
                      (i.setext = i.header)),
                  (i.thisLine.header = !0),
                  (i.f = i.inline),
                  w(i))
                : S
                ? (n.skipToEnd(), (i.hr = !0), (i.thisLine.hr = !0), o.hr)
                : "[" === n.peek()
                ? g(n, i, T)
                : g(n, i, i.inline);
            }
            function x(t, r) {
              var o = n.token(t, r.htmlState);
              if (!i) {
                var a = e.innerMode(n, r.htmlState);
                (("xml" == a.mode.name &&
                  null === a.state.tagStart &&
                  !a.state.context &&
                  a.state.tokenize.isInText) ||
                  (r.md_inside && t.current().indexOf(">") > -1)) &&
                  ((r.f = C), (r.block = y), (r.htmlState = null));
              }
              return o;
            }
            function k(e, t) {
              var n,
                i = t.listStack[t.listStack.length - 1] || 0,
                a = t.indentation < i,
                l = i + 3;
              return t.fencedEndRE &&
                t.indentation <= l &&
                (a || e.match(t.fencedEndRE))
                ? (r.highlightFormatting && (t.formatting = "code-block"),
                  a || (n = w(t)),
                  (t.localMode = t.localState = null),
                  (t.block = y),
                  (t.f = C),
                  (t.fencedEndRE = null),
                  (t.code = 0),
                  (t.thisLine.fencedCodeEnd = !0),
                  a ? v(e, t, t.block) : n)
                : t.localMode
                ? t.localMode.token(e, t.localState)
                : (e.skipToEnd(), o.code);
            }
            function w(e) {
              var t = [];
              if (e.formatting) {
                t.push(o.formatting),
                  "string" == typeof e.formatting &&
                    (e.formatting = [e.formatting]);
                for (var n = 0; n < e.formatting.length; n++)
                  t.push(o.formatting + "-" + e.formatting[n]),
                    "header" === e.formatting[n] &&
                      t.push(
                        o.formatting + "-" + e.formatting[n] + "-" + e.header
                      ),
                    "quote" === e.formatting[n] &&
                      (!r.maxBlockquoteDepth || r.maxBlockquoteDepth >= e.quote
                        ? t.push(
                            o.formatting + "-" + e.formatting[n] + "-" + e.quote
                          )
                        : t.push("error"));
              }
              if (e.taskOpen)
                return t.push("meta"), t.length ? t.join(" ") : null;
              if (e.taskClosed)
                return t.push("property"), t.length ? t.join(" ") : null;
              if (
                (e.linkHref
                  ? t.push(o.linkHref, "url")
                  : (e.strong && t.push(o.strong),
                    e.em && t.push(o.em),
                    e.strikethrough && t.push(o.strikethrough),
                    e.emoji && t.push(o.emoji),
                    e.linkText && t.push(o.linkText),
                    e.code && t.push(o.code),
                    e.image && t.push(o.image),
                    e.imageAltText && t.push(o.imageAltText, "link"),
                    e.imageMarker && t.push(o.imageMarker)),
                e.header && t.push(o.header, o.header + "-" + e.header),
                e.quote &&
                  (t.push(o.quote),
                  !r.maxBlockquoteDepth || r.maxBlockquoteDepth >= e.quote
                    ? t.push(o.quote + "-" + e.quote)
                    : t.push(o.quote + "-" + r.maxBlockquoteDepth)),
                !1 !== e.list)
              ) {
                var i = (e.listStack.length - 1) % 3;
                i
                  ? 1 === i
                    ? t.push(o.list2)
                    : t.push(o.list3)
                  : t.push(o.list1);
              }
              return (
                e.trailingSpaceNewLine
                  ? t.push("trailing-space-new-line")
                  : e.trailingSpace &&
                    t.push(
                      "trailing-space-" + (e.trailingSpace % 2 ? "a" : "b")
                    ),
                t.length ? t.join(" ") : null
              );
            }
            function _(e, t) {
              if (e.match(p, !0)) return w(t);
            }
            function C(t, i) {
              var a = i.text(t, i);
              if (void 0 !== a) return a;
              if (i.list) return (i.list = null), w(i);
              if (i.taskList) {
                var l = " " === t.match(c, !0)[1];
                return (
                  l ? (i.taskOpen = !0) : (i.taskClosed = !0),
                  r.highlightFormatting && (i.formatting = "task"),
                  (i.taskList = !1),
                  w(i)
                );
              }
              if (
                ((i.taskOpen = !1),
                (i.taskClosed = !1),
                i.header && t.match(/^#+$/, !0))
              )
                return r.highlightFormatting && (i.formatting = "header"), w(i);
              var s = t.next();
              if (i.linkTitle) {
                i.linkTitle = !1;
                var u = s;
                "(" === s && (u = ")");
                var d =
                  "^\\s*(?:[^" +
                  (u = (u + "").replace(/([.?*+^\[\]\\(){}|-])/g, "\\$1")) +
                  "\\\\]+|\\\\\\\\|\\\\.)" +
                  u;
                if (t.match(new RegExp(d), !0)) return o.linkHref;
              }
              if ("`" === s) {
                var p = i.formatting;
                r.highlightFormatting && (i.formatting = "code"),
                  t.eatWhile("`");
                var f = t.current().length;
                if (0 != i.code || (i.quote && 1 != f)) {
                  if (f == i.code) {
                    var m = w(i);
                    return (i.code = 0), m;
                  }
                  return (i.formatting = p), w(i);
                }
                return (i.code = f), w(i);
              }
              if (i.code) return w(i);
              if ("\\" === s && (t.next(), r.highlightFormatting)) {
                var g = w(i),
                  b = o.formatting + "-escape";
                return g ? g + " " + b : b;
              }
              if ("!" === s && t.match(/\[[^\]]*\] ?(?:\(|\[)/, !1))
                return (
                  (i.imageMarker = !0),
                  (i.image = !0),
                  r.highlightFormatting && (i.formatting = "image"),
                  w(i)
                );
              if (
                "[" === s &&
                i.imageMarker &&
                t.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1)
              )
                return (
                  (i.imageMarker = !1),
                  (i.imageAltText = !0),
                  r.highlightFormatting && (i.formatting = "image"),
                  w(i)
                );
              if ("]" === s && i.imageAltText) {
                r.highlightFormatting && (i.formatting = "image");
                var g = w(i);
                return (
                  (i.imageAltText = !1), (i.image = !1), (i.inline = i.f = M), g
                );
              }
              if ("[" === s && !i.image)
                return i.linkText && t.match(/^.*?\]/)
                  ? w(i)
                  : ((i.linkText = !0),
                    r.highlightFormatting && (i.formatting = "link"),
                    w(i));
              if ("]" === s && i.linkText) {
                r.highlightFormatting && (i.formatting = "link");
                var g = w(i);
                return (
                  (i.linkText = !1),
                  (i.inline = i.f = t.match(/\(.*?\)| ?\[.*?\]/, !1) ? M : C),
                  g
                );
              }
              if (
                "<" === s &&
                t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)
              ) {
                (i.f = i.inline = S),
                  r.highlightFormatting && (i.formatting = "link");
                var g = w(i);
                return g ? (g += " ") : (g = ""), g + o.linkInline;
              }
              if ("<" === s && t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) {
                (i.f = i.inline = S),
                  r.highlightFormatting && (i.formatting = "link");
                var g = w(i);
                return g ? (g += " ") : (g = ""), g + o.linkEmail;
              }
              if (
                r.xml &&
                "<" === s &&
                t.match(
                  /^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,
                  !1
                )
              ) {
                var y = t.string.indexOf(">", t.pos);
                if (-1 != y) {
                  var k = t.string.substring(t.start, y);
                  /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(k) &&
                    (i.md_inside = !0);
                }
                return t.backUp(1), (i.htmlState = e.startState(n)), v(t, i, x);
              }
              if (r.xml && "<" === s && t.match(/^\/\w*?>/))
                return (i.md_inside = !1), "tag";
              if ("*" === s || "_" === s) {
                for (
                  var _ = 1, L = 1 == t.pos ? " " : t.string.charAt(t.pos - 2);
                  _ < 3 && t.eat(s);

                )
                  _++;
                var T = t.peek() || " ",
                  z =
                    !/\s/.test(T) && (!h.test(T) || /\s/.test(L) || h.test(L)),
                  A =
                    !/\s/.test(L) && (!h.test(L) || /\s/.test(T) || h.test(T)),
                  D = null,
                  E = null;
                if (
                  (_ % 2 &&
                    (i.em || !z || ("*" !== s && A && !h.test(L))
                      ? i.em != s ||
                        !A ||
                        ("*" !== s && z && !h.test(T)) ||
                        (D = !1)
                      : (D = !0)),
                  _ > 1 &&
                    (i.strong || !z || ("*" !== s && A && !h.test(L))
                      ? i.strong != s ||
                        !A ||
                        ("*" !== s && z && !h.test(T)) ||
                        (E = !1)
                      : (E = !0)),
                  null != E || null != D)
                ) {
                  r.highlightFormatting &&
                    (i.formatting =
                      null == D ? "strong" : null == E ? "em" : "strong em"),
                    !0 === D && (i.em = s),
                    !0 === E && (i.strong = s);
                  var m = w(i);
                  return (
                    !1 === D && (i.em = !1), !1 === E && (i.strong = !1), m
                  );
                }
              } else if (" " === s && (t.eat("*") || t.eat("_"))) {
                if (" " === t.peek()) return w(i);
                t.backUp(1);
              }
              if (r.strikethrough)
                if ("~" === s && t.eatWhile(s)) {
                  if (i.strikethrough) {
                    r.highlightFormatting && (i.formatting = "strikethrough");
                    var m = w(i);
                    return (i.strikethrough = !1), m;
                  }
                  if (t.match(/^[^\s]/, !1))
                    return (
                      (i.strikethrough = !0),
                      r.highlightFormatting && (i.formatting = "strikethrough"),
                      w(i)
                    );
                } else if (" " === s && t.match(/^~~/, !0)) {
                  if (" " === t.peek()) return w(i);
                  t.backUp(2);
                }
              if (
                r.emoji &&
                ":" === s &&
                t.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)
              ) {
                (i.emoji = !0),
                  r.highlightFormatting && (i.formatting = "emoji");
                var F = w(i);
                return (i.emoji = !1), F;
              }
              return (
                " " === s &&
                  (t.match(/^ +$/, !1)
                    ? i.trailingSpace++
                    : i.trailingSpace && (i.trailingSpaceNewLine = !0)),
                w(i)
              );
            }
            function S(e, t) {
              var n = e.next();
              if (">" === n) {
                (t.f = t.inline = C),
                  r.highlightFormatting && (t.formatting = "link");
                var i = w(t);
                return i ? (i += " ") : (i = ""), i + o.linkInline;
              }
              return e.match(/^[^>]+/, !0), o.linkInline;
            }
            function M(e, t) {
              if (e.eatSpace()) return null;
              var n,
                i = e.next();
              return "(" === i || "[" === i
                ? ((t.f = t.inline =
                    ((n = "(" === i ? ")" : "]"),
                    function (e, t) {
                      var i = e.next();
                      if (i === n) {
                        (t.f = t.inline = C),
                          r.highlightFormatting &&
                            (t.formatting = "link-string");
                        var o = w(t);
                        return (t.linkHref = !1), o;
                      }
                      return e.match(L[n]), (t.linkHref = !0), w(t);
                    })),
                  r.highlightFormatting && (t.formatting = "link-string"),
                  (t.linkHref = !0),
                  w(t))
                : "error";
            }
            var L = {
              ")": /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
              "]": /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/
            };
            function T(e, t) {
              return e.match(/^([^\]\\]|\\.)*\]:/, !1)
                ? ((t.f = z),
                  e.next(),
                  r.highlightFormatting && (t.formatting = "link"),
                  (t.linkText = !0),
                  w(t))
                : g(e, t, C);
            }
            function z(e, t) {
              if (e.match(/^\]:/, !0)) {
                (t.f = t.inline = A),
                  r.highlightFormatting && (t.formatting = "link");
                var n = w(t);
                return (t.linkText = !1), n;
              }
              return e.match(/^([^\]\\]|\\.)+/, !0), o.linkText;
            }
            function A(e, t) {
              return e.eatSpace()
                ? null
                : (e.match(/^[^\s]+/, !0),
                  void 0 === e.peek()
                    ? (t.linkTitle = !0)
                    : e.match(
                        /^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/,
                        !0
                      ),
                  (t.f = t.inline = C),
                  o.linkHref + " url");
            }
            var D = {
              startState: function () {
                return {
                  f: y,
                  prevLine: { stream: null },
                  thisLine: { stream: null },
                  block: y,
                  htmlState: null,
                  indentation: 0,
                  inline: C,
                  text: _,
                  formatting: !1,
                  linkText: !1,
                  linkHref: !1,
                  linkTitle: !1,
                  code: 0,
                  em: !1,
                  strong: !1,
                  header: 0,
                  setext: 0,
                  hr: !1,
                  taskList: !1,
                  list: !1,
                  listStack: [],
                  quote: 0,
                  trailingSpace: 0,
                  trailingSpaceNewLine: !1,
                  strikethrough: !1,
                  emoji: !1,
                  fencedEndRE: null
                };
              },
              copyState: function (t) {
                return {
                  f: t.f,
                  prevLine: t.prevLine,
                  thisLine: t.thisLine,
                  block: t.block,
                  htmlState: t.htmlState && e.copyState(n, t.htmlState),
                  indentation: t.indentation,
                  localMode: t.localMode,
                  localState: t.localMode
                    ? e.copyState(t.localMode, t.localState)
                    : null,
                  inline: t.inline,
                  text: t.text,
                  formatting: !1,
                  linkText: t.linkText,
                  linkTitle: t.linkTitle,
                  linkHref: t.linkHref,
                  code: t.code,
                  em: t.em,
                  strong: t.strong,
                  strikethrough: t.strikethrough,
                  emoji: t.emoji,
                  header: t.header,
                  setext: t.setext,
                  hr: t.hr,
                  taskList: t.taskList,
                  list: t.list,
                  listStack: t.listStack.slice(0),
                  quote: t.quote,
                  indentedCode: t.indentedCode,
                  trailingSpace: t.trailingSpace,
                  trailingSpaceNewLine: t.trailingSpaceNewLine,
                  md_inside: t.md_inside,
                  fencedEndRE: t.fencedEndRE
                };
              },
              token: function (e, t) {
                if (((t.formatting = !1), e != t.thisLine.stream)) {
                  if (((t.header = 0), (t.hr = !1), e.match(/^\s*$/, !0)))
                    return b(t), null;
                  if (
                    ((t.prevLine = t.thisLine),
                    (t.thisLine = { stream: e }),
                    (t.taskList = !1),
                    (t.trailingSpace = 0),
                    (t.trailingSpaceNewLine = !1),
                    !t.localState && ((t.f = t.block), t.f != x))
                  ) {
                    var r = e
                      .match(/^\s*/, !0)[0]
                      .replace(/\t/g, "    ").length;
                    if (
                      ((t.indentation = r), (t.indentationDiff = null), r > 0)
                    )
                      return null;
                  }
                }
                return t.f(e, t);
              },
              innerMode: function (e) {
                return e.block == x
                  ? { state: e.htmlState, mode: n }
                  : e.localState
                  ? { state: e.localState, mode: e.localMode }
                  : { state: e, mode: D };
              },
              indent: function (t, r, i) {
                return t.block == x && n.indent
                  ? n.indent(t.htmlState, r, i)
                  : t.localState && t.localMode.indent
                  ? t.localMode.indent(t.localState, r, i)
                  : e.Pass;
              },
              blankLine: b,
              getType: w,
              blockCommentStart: "\x3c!--",
              blockCommentEnd: "--\x3e",
              closeBrackets: "()[]{}''\"\"``",
              fold: "markdown"
            };
            return D;
          },
          "xml"
        ),
          e.defineMIME("text/markdown", "markdown"),
          e.defineMIME("text/x-markdown", "markdown");
      })(r(0), r(4), r(22));
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        e.modeInfo = [
          {
            name: "APL",
            mime: "text/apl",
            mode: "apl",
            ext: ["dyalog", "apl"]
          },
          {
            name: "PGP",
            mimes: [
              "application/pgp",
              "application/pgp-encrypted",
              "application/pgp-keys",
              "application/pgp-signature"
            ],
            mode: "asciiarmor",
            ext: ["asc", "pgp", "sig"]
          },
          {
            name: "ASN.1",
            mime: "text/x-ttcn-asn",
            mode: "asn.1",
            ext: ["asn", "asn1"]
          },
          {
            name: "Asterisk",
            mime: "text/x-asterisk",
            mode: "asterisk",
            file: /^extensions\.conf$/i
          },
          {
            name: "Brainfuck",
            mime: "text/x-brainfuck",
            mode: "brainfuck",
            ext: ["b", "bf"]
          },
          {
            name: "C",
            mime: "text/x-csrc",
            mode: "clike",
            ext: ["c", "h", "ino"]
          },
          {
            name: "C++",
            mime: "text/x-c++src",
            mode: "clike",
            ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"],
            alias: ["cpp"]
          },
          {
            name: "Cobol",
            mime: "text/x-cobol",
            mode: "cobol",
            ext: ["cob", "cpy"]
          },
          {
            name: "C#",
            mime: "text/x-csharp",
            mode: "clike",
            ext: ["cs"],
            alias: ["csharp", "cs"]
          },
          {
            name: "Clojure",
            mime: "text/x-clojure",
            mode: "clojure",
            ext: ["clj", "cljc", "cljx"]
          },
          {
            name: "ClojureScript",
            mime: "text/x-clojurescript",
            mode: "clojure",
            ext: ["cljs"]
          },
          {
            name: "Closure Stylesheets (GSS)",
            mime: "text/x-gss",
            mode: "css",
            ext: ["gss"]
          },
          {
            name: "CMake",
            mime: "text/x-cmake",
            mode: "cmake",
            ext: ["cmake", "cmake.in"],
            file: /^CMakeLists.txt$/
          },
          {
            name: "CoffeeScript",
            mimes: [
              "application/vnd.coffeescript",
              "text/coffeescript",
              "text/x-coffeescript"
            ],
            mode: "coffeescript",
            ext: ["coffee"],
            alias: ["coffee", "coffee-script"]
          },
          {
            name: "Common Lisp",
            mime: "text/x-common-lisp",
            mode: "commonlisp",
            ext: ["cl", "lisp", "el"],
            alias: ["lisp"]
          },
          {
            name: "Cypher",
            mime: "application/x-cypher-query",
            mode: "cypher",
            ext: ["cyp", "cypher"]
          },
          {
            name: "Cython",
            mime: "text/x-cython",
            mode: "python",
            ext: ["pyx", "pxd", "pxi"]
          },
          {
            name: "Crystal",
            mime: "text/x-crystal",
            mode: "crystal",
            ext: ["cr"]
          },
          { name: "CSS", mime: "text/css", mode: "css", ext: ["css"] },
          { name: "CQL", mime: "text/x-cassandra", mode: "sql", ext: ["cql"] },
          { name: "D", mime: "text/x-d", mode: "d", ext: ["d"] },
          {
            name: "Dart",
            mimes: ["application/dart", "text/x-dart"],
            mode: "dart",
            ext: ["dart"]
          },
          {
            name: "diff",
            mime: "text/x-diff",
            mode: "diff",
            ext: ["diff", "patch"]
          },
          { name: "Django", mime: "text/x-django", mode: "django" },
          {
            name: "Dockerfile",
            mime: "text/x-dockerfile",
            mode: "dockerfile",
            file: /^Dockerfile$/
          },
          {
            name: "DTD",
            mime: "application/xml-dtd",
            mode: "dtd",
            ext: ["dtd"]
          },
          {
            name: "Dylan",
            mime: "text/x-dylan",
            mode: "dylan",
            ext: ["dylan", "dyl", "intr"]
          },
          { name: "EBNF", mime: "text/x-ebnf", mode: "ebnf" },
          { name: "ECL", mime: "text/x-ecl", mode: "ecl", ext: ["ecl"] },
          {
            name: "edn",
            mime: "application/edn",
            mode: "clojure",
            ext: ["edn"]
          },
          { name: "Eiffel", mime: "text/x-eiffel", mode: "eiffel", ext: ["e"] },
          { name: "Elm", mime: "text/x-elm", mode: "elm", ext: ["elm"] },
          {
            name: "Embedded Javascript",
            mime: "application/x-ejs",
            mode: "htmlembedded",
            ext: ["ejs"]
          },
          {
            name: "Embedded Ruby",
            mime: "application/x-erb",
            mode: "htmlembedded",
            ext: ["erb"]
          },
          {
            name: "Erlang",
            mime: "text/x-erlang",
            mode: "erlang",
            ext: ["erl"]
          },
          { name: "Esper", mime: "text/x-esper", mode: "sql" },
          {
            name: "Factor",
            mime: "text/x-factor",
            mode: "factor",
            ext: ["factor"]
          },
          { name: "FCL", mime: "text/x-fcl", mode: "fcl" },
          {
            name: "Forth",
            mime: "text/x-forth",
            mode: "forth",
            ext: ["forth", "fth", "4th"]
          },
          {
            name: "Fortran",
            mime: "text/x-fortran",
            mode: "fortran",
            ext: ["f", "for", "f77", "f90", "f95"]
          },
          {
            name: "F#",
            mime: "text/x-fsharp",
            mode: "mllike",
            ext: ["fs"],
            alias: ["fsharp"]
          },
          { name: "Gas", mime: "text/x-gas", mode: "gas", ext: ["s"] },
          {
            name: "Gherkin",
            mime: "text/x-feature",
            mode: "gherkin",
            ext: ["feature"]
          },
          {
            name: "GitHub Flavored Markdown",
            mime: "text/x-gfm",
            mode: "gfm",
            file: /^(readme|contributing|history).md$/i
          },
          { name: "Go", mime: "text/x-go", mode: "go", ext: ["go"] },
          {
            name: "Groovy",
            mime: "text/x-groovy",
            mode: "groovy",
            ext: ["groovy", "gradle"],
            file: /^Jenkinsfile$/
          },
          { name: "HAML", mime: "text/x-haml", mode: "haml", ext: ["haml"] },
          {
            name: "Haskell",
            mime: "text/x-haskell",
            mode: "haskell",
            ext: ["hs"]
          },
          {
            name: "Haskell (Literate)",
            mime: "text/x-literate-haskell",
            mode: "haskell-literate",
            ext: ["lhs"]
          },
          { name: "Haxe", mime: "text/x-haxe", mode: "haxe", ext: ["hx"] },
          { name: "HXML", mime: "text/x-hxml", mode: "haxe", ext: ["hxml"] },
          {
            name: "ASP.NET",
            mime: "application/x-aspx",
            mode: "htmlembedded",
            ext: ["aspx"],
            alias: ["asp", "aspx"]
          },
          {
            name: "HTML",
            mime: "text/html",
            mode: "htmlmixed",
            ext: ["html", "htm", "handlebars", "hbs"],
            alias: ["xhtml"]
          },
          { name: "HTTP", mime: "message/http", mode: "http" },
          { name: "IDL", mime: "text/x-idl", mode: "idl", ext: ["pro"] },
          {
            name: "Pug",
            mime: "text/x-pug",
            mode: "pug",
            ext: ["jade", "pug"],
            alias: ["jade"]
          },
          { name: "Java", mime: "text/x-java", mode: "clike", ext: ["java"] },
          {
            name: "Java Server Pages",
            mime: "application/x-jsp",
            mode: "htmlembedded",
            ext: ["jsp"],
            alias: ["jsp"]
          },
          {
            name: "JavaScript",
            mimes: [
              "text/javascript",
              "text/ecmascript",
              "application/javascript",
              "application/x-javascript",
              "application/ecmascript"
            ],
            mode: "javascript",
            ext: ["js"],
            alias: ["ecmascript", "js", "node"]
          },
          {
            name: "JSON",
            mimes: ["application/json", "application/x-json"],
            mode: "javascript",
            ext: ["json", "map"],
            alias: ["json5"]
          },
          {
            name: "JSON-LD",
            mime: "application/ld+json",
            mode: "javascript",
            ext: ["jsonld"],
            alias: ["jsonld"]
          },
          { name: "JSX", mime: "text/jsx", mode: "jsx", ext: ["jsx"] },
          {
            name: "Jinja2",
            mime: "text/jinja2",
            mode: "jinja2",
            ext: ["j2", "jinja", "jinja2"]
          },
          { name: "Julia", mime: "text/x-julia", mode: "julia", ext: ["jl"] },
          { name: "Kotlin", mime: "text/x-kotlin", mode: "clike", ext: ["kt"] },
          { name: "LESS", mime: "text/x-less", mode: "css", ext: ["less"] },
          {
            name: "LiveScript",
            mime: "text/x-livescript",
            mode: "livescript",
            ext: ["ls"],
            alias: ["ls"]
          },
          { name: "Lua", mime: "text/x-lua", mode: "lua", ext: ["lua"] },
          {
            name: "Markdown",
            mime: "text/x-markdown",
            mode: "markdown",
            ext: ["markdown", "md", "mkd"]
          },
          { name: "mIRC", mime: "text/mirc", mode: "mirc" },
          { name: "MariaDB SQL", mime: "text/x-mariadb", mode: "sql" },
          {
            name: "Mathematica",
            mime: "text/x-mathematica",
            mode: "mathematica",
            ext: ["m", "nb", "wl", "wls"]
          },
          {
            name: "Modelica",
            mime: "text/x-modelica",
            mode: "modelica",
            ext: ["mo"]
          },
          { name: "MUMPS", mime: "text/x-mumps", mode: "mumps", ext: ["mps"] },
          { name: "MS SQL", mime: "text/x-mssql", mode: "sql" },
          {
            name: "mbox",
            mime: "application/mbox",
            mode: "mbox",
            ext: ["mbox"]
          },
          { name: "MySQL", mime: "text/x-mysql", mode: "sql" },
          {
            name: "Nginx",
            mime: "text/x-nginx-conf",
            mode: "nginx",
            file: /nginx.*\.conf$/i
          },
          {
            name: "NSIS",
            mime: "text/x-nsis",
            mode: "nsis",
            ext: ["nsh", "nsi"]
          },
          {
            name: "NTriples",
            mimes: [
              "application/n-triples",
              "application/n-quads",
              "text/n-triples"
            ],
            mode: "ntriples",
            ext: ["nt", "nq"]
          },
          {
            name: "Objective-C",
            mime: "text/x-objectivec",
            mode: "clike",
            ext: ["m"],
            alias: ["objective-c", "objc"]
          },
          {
            name: "Objective-C++",
            mime: "text/x-objectivec++",
            mode: "clike",
            ext: ["mm"],
            alias: ["objective-c++", "objc++"]
          },
          {
            name: "OCaml",
            mime: "text/x-ocaml",
            mode: "mllike",
            ext: ["ml", "mli", "mll", "mly"]
          },
          { name: "Octave", mime: "text/x-octave", mode: "octave", ext: ["m"] },
          { name: "Oz", mime: "text/x-oz", mode: "oz", ext: ["oz"] },
          {
            name: "Pascal",
            mime: "text/x-pascal",
            mode: "pascal",
            ext: ["p", "pas"]
          },
          { name: "PEG.js", mime: "null", mode: "pegjs", ext: ["jsonld"] },
          {
            name: "Perl",
            mime: "text/x-perl",
            mode: "perl",
            ext: ["pl", "pm"]
          },
          {
            name: "PHP",
            mimes: [
              "text/x-php",
              "application/x-httpd-php",
              "application/x-httpd-php-open"
            ],
            mode: "php",
            ext: ["php", "php3", "php4", "php5", "php7", "phtml"]
          },
          { name: "Pig", mime: "text/x-pig", mode: "pig", ext: ["pig"] },
          {
            name: "Plain Text",
            mime: "text/plain",
            mode: "null",
            ext: ["txt", "text", "conf", "def", "list", "log"]
          },
          { name: "PLSQL", mime: "text/x-plsql", mode: "sql", ext: ["pls"] },
          { name: "PostgreSQL", mime: "text/x-pgsql", mode: "sql" },
          {
            name: "PowerShell",
            mime: "application/x-powershell",
            mode: "powershell",
            ext: ["ps1", "psd1", "psm1"]
          },
          {
            name: "Properties files",
            mime: "text/x-properties",
            mode: "properties",
            ext: ["properties", "ini", "in"],
            alias: ["ini", "properties"]
          },
          {
            name: "ProtoBuf",
            mime: "text/x-protobuf",
            mode: "protobuf",
            ext: ["proto"]
          },
          {
            name: "Python",
            mime: "text/x-python",
            mode: "python",
            ext: ["BUILD", "bzl", "py", "pyw"],
            file: /^(BUCK|BUILD)$/
          },
          {
            name: "Puppet",
            mime: "text/x-puppet",
            mode: "puppet",
            ext: ["pp"]
          },
          { name: "Q", mime: "text/x-q", mode: "q", ext: ["q"] },
          {
            name: "R",
            mime: "text/x-rsrc",
            mode: "r",
            ext: ["r", "R"],
            alias: ["rscript"]
          },
          {
            name: "reStructuredText",
            mime: "text/x-rst",
            mode: "rst",
            ext: ["rst"],
            alias: ["rst"]
          },
          { name: "RPM Changes", mime: "text/x-rpm-changes", mode: "rpm" },
          {
            name: "RPM Spec",
            mime: "text/x-rpm-spec",
            mode: "rpm",
            ext: ["spec"]
          },
          {
            name: "Ruby",
            mime: "text/x-ruby",
            mode: "ruby",
            ext: ["rb"],
            alias: ["jruby", "macruby", "rake", "rb", "rbx"]
          },
          { name: "Rust", mime: "text/x-rustsrc", mode: "rust", ext: ["rs"] },
          { name: "SAS", mime: "text/x-sas", mode: "sas", ext: ["sas"] },
          { name: "Sass", mime: "text/x-sass", mode: "sass", ext: ["sass"] },
          {
            name: "Scala",
            mime: "text/x-scala",
            mode: "clike",
            ext: ["scala"]
          },
          {
            name: "Scheme",
            mime: "text/x-scheme",
            mode: "scheme",
            ext: ["scm", "ss"]
          },
          { name: "SCSS", mime: "text/x-scss", mode: "css", ext: ["scss"] },
          {
            name: "Shell",
            mimes: ["text/x-sh", "application/x-sh"],
            mode: "shell",
            ext: ["sh", "ksh", "bash"],
            alias: ["bash", "sh", "zsh"],
            file: /^PKGBUILD$/
          },
          {
            name: "Sieve",
            mime: "application/sieve",
            mode: "sieve",
            ext: ["siv", "sieve"]
          },
          {
            name: "Slim",
            mimes: ["text/x-slim", "application/x-slim"],
            mode: "slim",
            ext: ["slim"]
          },
          {
            name: "Smalltalk",
            mime: "text/x-stsrc",
            mode: "smalltalk",
            ext: ["st"]
          },
          {
            name: "Smarty",
            mime: "text/x-smarty",
            mode: "smarty",
            ext: ["tpl"]
          },
          { name: "Solr", mime: "text/x-solr", mode: "solr" },
          {
            name: "SML",
            mime: "text/x-sml",
            mode: "mllike",
            ext: ["sml", "sig", "fun", "smackspec"]
          },
          {
            name: "Soy",
            mime: "text/x-soy",
            mode: "soy",
            ext: ["soy"],
            alias: ["closure template"]
          },
          {
            name: "SPARQL",
            mime: "application/sparql-query",
            mode: "sparql",
            ext: ["rq", "sparql"],
            alias: ["sparul"]
          },
          {
            name: "Spreadsheet",
            mime: "text/x-spreadsheet",
            mode: "spreadsheet",
            alias: ["excel", "formula"]
          },
          { name: "SQL", mime: "text/x-sql", mode: "sql", ext: ["sql"] },
          { name: "SQLite", mime: "text/x-sqlite", mode: "sql" },
          {
            name: "Squirrel",
            mime: "text/x-squirrel",
            mode: "clike",
            ext: ["nut"]
          },
          {
            name: "Stylus",
            mime: "text/x-styl",
            mode: "stylus",
            ext: ["styl"]
          },
          {
            name: "Swift",
            mime: "text/x-swift",
            mode: "swift",
            ext: ["swift"]
          },
          { name: "sTeX", mime: "text/x-stex", mode: "stex" },
          {
            name: "LaTeX",
            mime: "text/x-latex",
            mode: "stex",
            ext: ["text", "ltx", "tex"],
            alias: ["tex"]
          },
          {
            name: "SystemVerilog",
            mime: "text/x-systemverilog",
            mode: "verilog",
            ext: ["v", "sv", "svh"]
          },
          { name: "Tcl", mime: "text/x-tcl", mode: "tcl", ext: ["tcl"] },
          {
            name: "Textile",
            mime: "text/x-textile",
            mode: "textile",
            ext: ["textile"]
          },
          {
            name: "TiddlyWiki ",
            mime: "text/x-tiddlywiki",
            mode: "tiddlywiki"
          },
          { name: "Tiki wiki", mime: "text/tiki", mode: "tiki" },
          { name: "TOML", mime: "text/x-toml", mode: "toml", ext: ["toml"] },
          { name: "Tornado", mime: "text/x-tornado", mode: "tornado" },
          {
            name: "troff",
            mime: "text/troff",
            mode: "troff",
            ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
          },
          {
            name: "TTCN",
            mime: "text/x-ttcn",
            mode: "ttcn",
            ext: ["ttcn", "ttcn3", "ttcnpp"]
          },
          {
            name: "TTCN_CFG",
            mime: "text/x-ttcn-cfg",
            mode: "ttcn-cfg",
            ext: ["cfg"]
          },
          { name: "Turtle", mime: "text/turtle", mode: "turtle", ext: ["ttl"] },
          {
            name: "TypeScript",
            mime: "application/typescript",
            mode: "javascript",
            ext: ["ts"],
            alias: ["ts"]
          },
          {
            name: "TypeScript-JSX",
            mime: "text/typescript-jsx",
            mode: "jsx",
            ext: ["tsx"],
            alias: ["tsx"]
          },
          { name: "Twig", mime: "text/x-twig", mode: "twig" },
          {
            name: "Web IDL",
            mime: "text/x-webidl",
            mode: "webidl",
            ext: ["webidl"]
          },
          { name: "VB.NET", mime: "text/x-vb", mode: "vb", ext: ["vb"] },
          {
            name: "VBScript",
            mime: "text/vbscript",
            mode: "vbscript",
            ext: ["vbs"]
          },
          {
            name: "Velocity",
            mime: "text/velocity",
            mode: "velocity",
            ext: ["vtl"]
          },
          {
            name: "Verilog",
            mime: "text/x-verilog",
            mode: "verilog",
            ext: ["v"]
          },
          {
            name: "VHDL",
            mime: "text/x-vhdl",
            mode: "vhdl",
            ext: ["vhd", "vhdl"]
          },
          {
            name: "Vue.js Component",
            mimes: ["script/x-vue", "text/x-vue"],
            mode: "vue",
            ext: ["vue"]
          },
          {
            name: "XML",
            mimes: ["application/xml", "text/xml"],
            mode: "xml",
            ext: ["xml", "xsl", "xsd", "svg"],
            alias: ["rss", "wsdl", "xsd"]
          },
          {
            name: "XQuery",
            mime: "application/xquery",
            mode: "xquery",
            ext: ["xy", "xquery"]
          },
          { name: "Yacas", mime: "text/x-yacas", mode: "yacas", ext: ["ys"] },
          {
            name: "YAML",
            mimes: ["text/x-yaml", "text/yaml"],
            mode: "yaml",
            ext: ["yaml", "yml"],
            alias: ["yml"]
          },
          { name: "Z80", mime: "text/x-z80", mode: "z80", ext: ["z80"] },
          {
            name: "mscgen",
            mime: "text/x-mscgen",
            mode: "mscgen",
            ext: ["mscgen", "mscin", "msc"]
          },
          { name: "xu", mime: "text/x-xu", mode: "mscgen", ext: ["xu"] },
          {
            name: "msgenny",
            mime: "text/x-msgenny",
            mode: "mscgen",
            ext: ["msgenny"]
          }
        ];
        for (var t = 0; t < e.modeInfo.length; t++) {
          var r = e.modeInfo[t];
          r.mimes && (r.mime = r.mimes[0]);
        }
        (e.findModeByMIME = function (t) {
          t = t.toLowerCase();
          for (var r = 0; r < e.modeInfo.length; r++) {
            var n = e.modeInfo[r];
            if (n.mime == t) return n;
            if (n.mimes)
              for (var i = 0; i < n.mimes.length; i++)
                if (n.mimes[i] == t) return n;
          }
          return /\+xml$/.test(t)
            ? e.findModeByMIME("application/xml")
            : /\+json$/.test(t)
            ? e.findModeByMIME("application/json")
            : void 0;
        }),
          (e.findModeByExtension = function (t) {
            t = t.toLowerCase();
            for (var r = 0; r < e.modeInfo.length; r++) {
              var n = e.modeInfo[r];
              if (n.ext)
                for (var i = 0; i < n.ext.length; i++)
                  if (n.ext[i] == t) return n;
            }
          }),
          (e.findModeByFileName = function (t) {
            for (var r = 0; r < e.modeInfo.length; r++) {
              var n = e.modeInfo[r];
              if (n.file && n.file.test(t)) return n;
            }
            var i = t.lastIndexOf("."),
              o = i > -1 && t.substring(i + 1, t.length);
            if (o) return e.findModeByExtension(o);
          }),
          (e.findModeByName = function (t) {
            t = t.toLowerCase();
            for (var r = 0; r < e.modeInfo.length; r++) {
              var n = e.modeInfo[r];
              if (n.name.toLowerCase() == t) return n;
              if (n.alias)
                for (var i = 0; i < n.alias.length; i++)
                  if (n.alias[i].toLowerCase() == t) return n;
            }
          });
      })(r(0));
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        function t(e) {
          for (var t = {}, r = e.split(" "), n = 0; n < r.length; ++n)
            t[r[n]] = !0;
          return t;
        }
        function r(e, t, i) {
          return 0 == e.length
            ? n(t)
            : function (o, a) {
                for (var l = e[0], s = 0; s < l.length; s++)
                  if (o.match(l[s][0]))
                    return (a.tokenize = r(e.slice(1), t)), l[s][1];
                return (a.tokenize = n(t, i)), "string";
              };
        }
        function n(e, t) {
          return function (n, i) {
            return (function (e, t, n, i) {
              if ((!1 !== i && e.match("${", !1)) || e.match("{$", !1))
                return (t.tokenize = null), "string";
              if (!1 !== i && e.match(/^\$[a-zA-Z_][a-zA-Z0-9_]*/))
                return (
                  e.match("[", !1) &&
                    (t.tokenize = r(
                      [
                        [["[", null]],
                        [
                          [/\d[\w\.]*/, "number"],
                          [/\$[a-zA-Z_][a-zA-Z0-9_]*/, "variable-2"],
                          [/[\w\$]+/, "variable"]
                        ],
                        [["]", null]]
                      ],
                      n,
                      i
                    )),
                  e.match(/\-\>\w/, !1) &&
                    (t.tokenize = r(
                      [[["->", null]], [[/[\w]+/, "variable"]]],
                      n,
                      i
                    )),
                  "variable-2"
                );
              for (
                var o = !1;
                !e.eol() &&
                (o ||
                  !1 === i ||
                  (!e.match("{$", !1) &&
                    !e.match(/^(\$[a-zA-Z_][a-zA-Z0-9_]*|\$\{)/, !1)));

              ) {
                if (!o && e.match(n)) {
                  (t.tokenize = null), t.tokStack.pop(), t.tokStack.pop();
                  break;
                }
                o = "\\" == e.next() && !o;
              }
              return "string";
            })(n, i, e, t);
          };
        }
        var i =
            "abstract and array as break case catch class clone const continue declare default do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach function global goto if implements interface instanceof namespace new or private protected public static switch throw trait try use var while xor die echo empty exit eval include include_once isset list require require_once return print unset __halt_compiler self static parent yield insteadof finally",
          o =
            "true false null TRUE FALSE NULL __CLASS__ __DIR__ __FILE__ __LINE__ __METHOD__ __FUNCTION__ __NAMESPACE__ __TRAIT__",
          a =
            "func_num_args func_get_arg func_get_args strlen strcmp strncmp strcasecmp strncasecmp each error_reporting define defined trigger_error user_error set_error_handler restore_error_handler get_declared_classes get_loaded_extensions extension_loaded get_extension_funcs debug_backtrace constant bin2hex hex2bin sleep usleep time mktime gmmktime strftime gmstrftime strtotime date gmdate getdate localtime checkdate flush wordwrap htmlspecialchars htmlentities html_entity_decode md5 md5_file crc32 getimagesize image_type_to_mime_type phpinfo phpversion phpcredits strnatcmp strnatcasecmp substr_count strspn strcspn strtok strtoupper strtolower strpos strrpos strrev hebrev hebrevc nl2br basename dirname pathinfo stripslashes stripcslashes strstr stristr strrchr str_shuffle str_word_count strcoll substr substr_replace quotemeta ucfirst ucwords strtr addslashes addcslashes rtrim str_replace str_repeat count_chars chunk_split trim ltrim strip_tags similar_text explode implode setlocale localeconv parse_str str_pad chop strchr sprintf printf vprintf vsprintf sscanf fscanf parse_url urlencode urldecode rawurlencode rawurldecode readlink linkinfo link unlink exec system escapeshellcmd escapeshellarg passthru shell_exec proc_open proc_close rand srand getrandmax mt_rand mt_srand mt_getrandmax base64_decode base64_encode abs ceil floor round is_finite is_nan is_infinite bindec hexdec octdec decbin decoct dechex base_convert number_format fmod ip2long long2ip getenv putenv getopt microtime gettimeofday getrusage uniqid quoted_printable_decode set_time_limit get_cfg_var magic_quotes_runtime set_magic_quotes_runtime get_magic_quotes_gpc get_magic_quotes_runtime import_request_variables error_log serialize unserialize memory_get_usage var_dump var_export debug_zval_dump print_r highlight_file show_source highlight_string ini_get ini_get_all ini_set ini_alter ini_restore get_include_path set_include_path restore_include_path setcookie header headers_sent connection_aborted connection_status ignore_user_abort parse_ini_file is_uploaded_file move_uploaded_file intval floatval doubleval strval gettype settype is_null is_resource is_bool is_long is_float is_int is_integer is_double is_real is_numeric is_string is_array is_object is_scalar ereg ereg_replace eregi eregi_replace split spliti join sql_regcase dl pclose popen readfile rewind rmdir umask fclose feof fgetc fgets fgetss fread fopen fpassthru ftruncate fstat fseek ftell fflush fwrite fputs mkdir rename copy tempnam tmpfile file file_get_contents file_put_contents stream_select stream_context_create stream_context_set_params stream_context_set_option stream_context_get_options stream_filter_prepend stream_filter_append fgetcsv flock get_meta_tags stream_set_write_buffer set_file_buffer set_socket_blocking stream_set_blocking socket_set_blocking stream_get_meta_data stream_register_wrapper stream_wrapper_register stream_set_timeout socket_set_timeout socket_get_status realpath fnmatch fsockopen pfsockopen pack unpack get_browser crypt opendir closedir chdir getcwd rewinddir readdir dir glob fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype file_exists is_writable is_writeable is_readable is_executable is_file is_dir is_link stat lstat chown touch clearstatcache mail ob_start ob_flush ob_clean ob_end_flush ob_end_clean ob_get_flush ob_get_clean ob_get_length ob_get_level ob_get_status ob_get_contents ob_implicit_flush ob_list_handlers ksort krsort natsort natcasesort asort arsort sort rsort usort uasort uksort shuffle array_walk count end prev next reset current key min max in_array array_search extract compact array_fill range array_multisort array_push array_pop array_shift array_unshift array_splice array_slice array_merge array_merge_recursive array_keys array_values array_count_values array_reverse array_reduce array_pad array_flip array_change_key_case array_rand array_unique array_intersect array_intersect_assoc array_diff array_diff_assoc array_sum array_filter array_map array_chunk array_key_exists array_intersect_key array_combine array_column pos sizeof key_exists assert assert_options version_compare ftok str_rot13 aggregate session_name session_module_name session_save_path session_id session_regenerate_id session_decode session_register session_unregister session_is_registered session_encode session_start session_destroy session_unset session_set_save_handler session_cache_limiter session_cache_expire session_set_cookie_params session_get_cookie_params session_write_close preg_match preg_match_all preg_replace preg_replace_callback preg_split preg_quote preg_grep overload ctype_alnum ctype_alpha ctype_cntrl ctype_digit ctype_lower ctype_graph ctype_print ctype_punct ctype_space ctype_upper ctype_xdigit virtual apache_request_headers apache_note apache_lookup_uri apache_child_terminate apache_setenv apache_response_headers apache_get_version getallheaders mysql_connect mysql_pconnect mysql_close mysql_select_db mysql_create_db mysql_drop_db mysql_query mysql_unbuffered_query mysql_db_query mysql_list_dbs mysql_list_tables mysql_list_fields mysql_list_processes mysql_error mysql_errno mysql_affected_rows mysql_insert_id mysql_result mysql_num_rows mysql_num_fields mysql_fetch_row mysql_fetch_array mysql_fetch_assoc mysql_fetch_object mysql_data_seek mysql_fetch_lengths mysql_fetch_field mysql_field_seek mysql_free_result mysql_field_name mysql_field_table mysql_field_len mysql_field_type mysql_field_flags mysql_escape_string mysql_real_escape_string mysql_stat mysql_thread_id mysql_client_encoding mysql_get_client_info mysql_get_host_info mysql_get_proto_info mysql_get_server_info mysql_info mysql mysql_fieldname mysql_fieldtable mysql_fieldlen mysql_fieldtype mysql_fieldflags mysql_selectdb mysql_createdb mysql_dropdb mysql_freeresult mysql_numfields mysql_numrows mysql_listdbs mysql_listtables mysql_listfields mysql_db_name mysql_dbname mysql_tablename mysql_table_name pg_connect pg_pconnect pg_close pg_connection_status pg_connection_busy pg_connection_reset pg_host pg_dbname pg_port pg_tty pg_options pg_ping pg_query pg_send_query pg_cancel_query pg_fetch_result pg_fetch_row pg_fetch_assoc pg_fetch_array pg_fetch_object pg_fetch_all pg_affected_rows pg_get_result pg_result_seek pg_result_status pg_free_result pg_last_oid pg_num_rows pg_num_fields pg_field_name pg_field_num pg_field_size pg_field_type pg_field_prtlen pg_field_is_null pg_get_notify pg_get_pid pg_result_error pg_last_error pg_last_notice pg_put_line pg_end_copy pg_copy_to pg_copy_from pg_trace pg_untrace pg_lo_create pg_lo_unlink pg_lo_open pg_lo_close pg_lo_read pg_lo_write pg_lo_read_all pg_lo_import pg_lo_export pg_lo_seek pg_lo_tell pg_escape_string pg_escape_bytea pg_unescape_bytea pg_client_encoding pg_set_client_encoding pg_meta_data pg_convert pg_insert pg_update pg_delete pg_select pg_exec pg_getlastoid pg_cmdtuples pg_errormessage pg_numrows pg_numfields pg_fieldname pg_fieldsize pg_fieldtype pg_fieldnum pg_fieldprtlen pg_fieldisnull pg_freeresult pg_result pg_loreadall pg_locreate pg_lounlink pg_loopen pg_loclose pg_loread pg_lowrite pg_loimport pg_loexport http_response_code get_declared_traits getimagesizefromstring socket_import_stream stream_set_chunk_size trait_exists header_register_callback class_uses session_status session_register_shutdown echo print global static exit array empty eval isset unset die include require include_once require_once json_decode json_encode json_last_error json_last_error_msg curl_close curl_copy_handle curl_errno curl_error curl_escape curl_exec curl_file_create curl_getinfo curl_init curl_multi_add_handle curl_multi_close curl_multi_exec curl_multi_getcontent curl_multi_info_read curl_multi_init curl_multi_remove_handle curl_multi_select curl_multi_setopt curl_multi_strerror curl_pause curl_reset curl_setopt_array curl_setopt curl_share_close curl_share_init curl_share_setopt curl_strerror curl_unescape curl_version mysqli_affected_rows mysqli_autocommit mysqli_change_user mysqli_character_set_name mysqli_close mysqli_commit mysqli_connect_errno mysqli_connect_error mysqli_connect mysqli_data_seek mysqli_debug mysqli_dump_debug_info mysqli_errno mysqli_error_list mysqli_error mysqli_fetch_all mysqli_fetch_array mysqli_fetch_assoc mysqli_fetch_field_direct mysqli_fetch_field mysqli_fetch_fields mysqli_fetch_lengths mysqli_fetch_object mysqli_fetch_row mysqli_field_count mysqli_field_seek mysqli_field_tell mysqli_free_result mysqli_get_charset mysqli_get_client_info mysqli_get_client_stats mysqli_get_client_version mysqli_get_connection_stats mysqli_get_host_info mysqli_get_proto_info mysqli_get_server_info mysqli_get_server_version mysqli_info mysqli_init mysqli_insert_id mysqli_kill mysqli_more_results mysqli_multi_query mysqli_next_result mysqli_num_fields mysqli_num_rows mysqli_options mysqli_ping mysqli_prepare mysqli_query mysqli_real_connect mysqli_real_escape_string mysqli_real_query mysqli_reap_async_query mysqli_refresh mysqli_rollback mysqli_select_db mysqli_set_charset mysqli_set_local_infile_default mysqli_set_local_infile_handler mysqli_sqlstate mysqli_ssl_set mysqli_stat mysqli_stmt_init mysqli_store_result mysqli_thread_id mysqli_thread_safe mysqli_use_result mysqli_warning_count";
        e.registerHelper("hintWords", "php", [i, o, a].join(" ").split(" ")),
          e.registerHelper("wordChars", "php", /[\w$]/);
        var l = {
          name: "clike",
          helperType: "php",
          keywords: t(i),
          blockKeywords: t(
            "catch do else elseif for foreach if switch try while finally"
          ),
          defKeywords: t("class function interface namespace trait"),
          atoms: t(o),
          builtin: t(a),
          multiLineStrings: !0,
          hooks: {
            $: function (e) {
              return e.eatWhile(/[\w\$_]/), "variable-2";
            },
            "<": function (e, t) {
              var r;
              if ((r = e.match(/<<\s*/))) {
                var i = e.eat(/['"]/);
                e.eatWhile(/[\w\.]/);
                var o = e.current().slice(r[0].length + (i ? 2 : 1));
                if ((i && e.eat(i), o))
                  return (
                    (t.tokStack || (t.tokStack = [])).push(o, 0),
                    (t.tokenize = n(o, "'" != i)),
                    "string"
                  );
              }
              return !1;
            },
            "#": function (e) {
              for (; !e.eol() && !e.match("?>", !1); ) e.next();
              return "comment";
            },
            "/": function (e) {
              if (e.eat("/")) {
                for (; !e.eol() && !e.match("?>", !1); ) e.next();
                return "comment";
              }
              return !1;
            },
            '"': function (e, t) {
              return (
                (t.tokStack || (t.tokStack = [])).push('"', 0),
                (t.tokenize = n('"')),
                "string"
              );
            },
            "{": function (e, t) {
              return (
                t.tokStack &&
                  t.tokStack.length &&
                  t.tokStack[t.tokStack.length - 1]++,
                !1
              );
            },
            "}": function (e, t) {
              return (
                t.tokStack &&
                  t.tokStack.length > 0 &&
                  !--t.tokStack[t.tokStack.length - 1] &&
                  (t.tokenize = n(t.tokStack[t.tokStack.length - 2])),
                !1
              );
            }
          }
        };
        e.defineMode(
          "php",
          function (t, r) {
            var n = e.getMode(t, (r && r.htmlMode) || "text/html"),
              i = e.getMode(t, l);
            return {
              startState: function () {
                var t = e.startState(n),
                  o = r.startOpen ? e.startState(i) : null;
                return {
                  html: t,
                  php: o,
                  curMode: r.startOpen ? i : n,
                  curState: r.startOpen ? o : t,
                  pending: null
                };
              },
              copyState: function (t) {
                var r,
                  o = t.html,
                  a = e.copyState(n, o),
                  l = t.php,
                  s = l && e.copyState(i, l);
                return (
                  (r = t.curMode == n ? a : s),
                  {
                    html: a,
                    php: s,
                    curMode: t.curMode,
                    curState: r,
                    pending: t.pending
                  }
                );
              },
              token: function (t, r) {
                var o = r.curMode == i;
                if (
                  (t.sol() &&
                    r.pending &&
                    '"' != r.pending &&
                    "'" != r.pending &&
                    (r.pending = null),
                  o)
                )
                  return o && null == r.php.tokenize && t.match("?>")
                    ? ((r.curMode = n),
                      (r.curState = r.html),
                      r.php.context.prev || (r.php = null),
                      "meta")
                    : i.token(t, r.curState);
                if (t.match(/^<\?\w*/))
                  return (
                    (r.curMode = i),
                    r.php ||
                      (r.php = e.startState(i, n.indent(r.html, "", ""))),
                    (r.curState = r.php),
                    "meta"
                  );
                if ('"' == r.pending || "'" == r.pending) {
                  for (; !t.eol() && t.next() != r.pending; );
                  var a = "string";
                } else if (r.pending && t.pos < r.pending.end) {
                  t.pos = r.pending.end;
                  var a = r.pending.style;
                } else var a = n.token(t, r.curState);
                r.pending && (r.pending = null);
                var l,
                  s = t.current(),
                  c = s.search(/<\?/);
                return (
                  -1 != c &&
                    ("string" == a && (l = s.match(/[\'\"]$/)) && !/\?>/.test(s)
                      ? (r.pending = l[0])
                      : (r.pending = { end: t.pos, style: a }),
                    t.backUp(s.length - c)),
                  a
                );
              },
              indent: function (e, t, r) {
                return (e.curMode != i && /^\s*<\//.test(t)) ||
                  (e.curMode == i && /^\?>/.test(t))
                  ? n.indent(e.html, t, r)
                  : e.curMode.indent(e.curState, t, r);
              },
              blockCommentStart: "/*",
              blockCommentEnd: "*/",
              lineComment: "//",
              innerMode: function (e) {
                return { state: e.curState, mode: e.curMode };
              }
            };
          },
          "htmlmixed",
          "clike"
        ),
          e.defineMIME("application/x-httpd-php", "php"),
          e.defineMIME("application/x-httpd-php-open", {
            name: "php",
            startOpen: !0
          }),
          e.defineMIME("text/x-php", l);
      })(r(0), r(6), r(24));
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        function t(e, t, r, n, i, o) {
          (this.indented = e),
            (this.column = t),
            (this.type = r),
            (this.info = n),
            (this.align = i),
            (this.prev = o);
        }
        function r(e, r, n, i) {
          var o = e.indented;
          return (
            e.context &&
              "statement" == e.context.type &&
              "statement" != n &&
              (o = e.context.indented),
            (e.context = new t(o, r, n, i, null, e.context))
          );
        }
        function n(e) {
          var t = e.context.type;
          return (
            (")" != t && "]" != t && "}" != t) ||
              (e.indented = e.context.indented),
            (e.context = e.context.prev)
          );
        }
        function i(e, t, r) {
          return (
            "variable" == t.prevToken ||
            "type" == t.prevToken ||
            !!/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e.string.slice(0, r)) ||
            !(!t.typeAtEndOfLine || e.column() != e.indentation()) ||
            void 0
          );
        }
        function o(e) {
          for (;;) {
            if (!e || "top" == e.type) return !0;
            if ("}" == e.type && "namespace" != e.prev.info) return !1;
            e = e.prev;
          }
        }
        function a(e) {
          for (var t = {}, r = e.split(" "), n = 0; n < r.length; ++n)
            t[r[n]] = !0;
          return t;
        }
        function l(e, t) {
          return "function" == typeof e ? e(t) : e.propertyIsEnumerable(t);
        }
        e.defineMode("clike", function (a, s) {
          var c,
            u,
            d = a.indentUnit,
            p = s.statementIndentUnit || d,
            f = s.dontAlignCalls,
            m = s.keywords || {},
            h = s.types || {},
            g = s.builtin || {},
            v = s.blockKeywords || {},
            b = s.defKeywords || {},
            y = s.atoms || {},
            x = s.hooks || {},
            k = s.multiLineStrings,
            w = !1 !== s.indentStatements,
            _ = !1 !== s.indentSwitch,
            C = s.namespaceSeparator,
            S = s.isPunctuationChar || /[\[\]{}\(\),;\:\.]/,
            M = s.numberStart || /[\d\.]/,
            L =
              s.number ||
              /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,
            T = s.isOperatorChar || /[+\-*&%=<>!?|\/]/,
            z = s.isIdentifierChar || /[\w\$_\xa1-\uffff]/,
            A = s.isReservedIdentifier || !1;
          function D(e, t) {
            var r,
              n = e.next();
            if (x[n]) {
              var i = x[n](e, t);
              if (!1 !== i) return i;
            }
            if ('"' == n || "'" == n)
              return (
                (t.tokenize =
                  ((r = n),
                  function (e, t) {
                    for (var n, i = !1, o = !1; null != (n = e.next()); ) {
                      if (n == r && !i) {
                        o = !0;
                        break;
                      }
                      i = !i && "\\" == n;
                    }
                    return (o || (!i && !k)) && (t.tokenize = null), "string";
                  })),
                t.tokenize(e, t)
              );
            if (S.test(n)) return (c = n), null;
            if (M.test(n)) {
              if ((e.backUp(1), e.match(L))) return "number";
              e.next();
            }
            if ("/" == n) {
              if (e.eat("*")) return (t.tokenize = E), E(e, t);
              if (e.eat("/")) return e.skipToEnd(), "comment";
            }
            if (T.test(n)) {
              for (; !e.match(/^\/[\/*]/, !1) && e.eat(T); );
              return "operator";
            }
            if ((e.eatWhile(z), C)) for (; e.match(C); ) e.eatWhile(z);
            var o = e.current();
            return l(m, o)
              ? (l(v, o) && (c = "newstatement"),
                l(b, o) && (u = !0),
                "keyword")
              : l(h, o)
              ? "type"
              : l(g, o) || (A && A(o))
              ? (l(v, o) && (c = "newstatement"), "builtin")
              : l(y, o)
              ? "atom"
              : "variable";
          }
          function E(e, t) {
            for (var r, n = !1; (r = e.next()); ) {
              if ("/" == r && n) {
                t.tokenize = null;
                break;
              }
              n = "*" == r;
            }
            return "comment";
          }
          function F(e, t) {
            s.typeFirstDefinitions &&
              e.eol() &&
              o(t.context) &&
              (t.typeAtEndOfLine = i(e, t, e.pos));
          }
          return {
            startState: function (e) {
              return {
                tokenize: null,
                context: new t((e || 0) - d, 0, "top", null, !1),
                indented: 0,
                startOfLine: !0,
                prevToken: null
              };
            },
            token: function (e, t) {
              var a = t.context;
              if (
                (e.sol() &&
                  (null == a.align && (a.align = !1),
                  (t.indented = e.indentation()),
                  (t.startOfLine = !0)),
                e.eatSpace())
              )
                return F(e, t), null;
              c = u = null;
              var l = (t.tokenize || D)(e, t);
              if ("comment" == l || "meta" == l) return l;
              if (
                (null == a.align && (a.align = !0),
                ";" == c ||
                  ":" == c ||
                  ("," == c && e.match(/^\s*(?:\/\/.*)?$/, !1)))
              )
                for (; "statement" == t.context.type; ) n(t);
              else if ("{" == c) r(t, e.column(), "}");
              else if ("[" == c) r(t, e.column(), "]");
              else if ("(" == c) r(t, e.column(), ")");
              else if ("}" == c) {
                for (; "statement" == a.type; ) a = n(t);
                for ("}" == a.type && (a = n(t)); "statement" == a.type; )
                  a = n(t);
              } else
                c == a.type
                  ? n(t)
                  : w &&
                    ((("}" == a.type || "top" == a.type) && ";" != c) ||
                      ("statement" == a.type && "newstatement" == c)) &&
                    r(t, e.column(), "statement", e.current());
              if (
                ("variable" == l &&
                  ("def" == t.prevToken ||
                    (s.typeFirstDefinitions &&
                      i(e, t, e.start) &&
                      o(t.context) &&
                      e.match(/^\s*\(/, !1))) &&
                  (l = "def"),
                x.token)
              ) {
                var d = x.token(e, t, l);
                void 0 !== d && (l = d);
              }
              return (
                "def" == l && !1 === s.styleDefs && (l = "variable"),
                (t.startOfLine = !1),
                (t.prevToken = u ? "def" : l || c),
                F(e, t),
                l
              );
            },
            indent: function (t, r) {
              if ((t.tokenize != D && null != t.tokenize) || t.typeAtEndOfLine)
                return e.Pass;
              var n = t.context,
                i = r && r.charAt(0),
                o = i == n.type;
              if (
                ("statement" == n.type && "}" == i && (n = n.prev),
                s.dontIndentStatements)
              )
                for (
                  ;
                  "statement" == n.type && s.dontIndentStatements.test(n.info);

                )
                  n = n.prev;
              if (x.indent) {
                var a = x.indent(t, n, r, d);
                if ("number" == typeof a) return a;
              }
              var l = n.prev && "switch" == n.prev.info;
              if (s.allmanIndentation && /[{(]/.test(i)) {
                for (; "top" != n.type && "}" != n.type; ) n = n.prev;
                return n.indented;
              }
              return "statement" == n.type
                ? n.indented + ("{" == i ? 0 : p)
                : !n.align || (f && ")" == n.type)
                ? ")" != n.type || o
                  ? n.indented +
                    (o ? 0 : d) +
                    (o || !l || /^(?:case|default)\b/.test(r) ? 0 : d)
                  : n.indented + p
                : n.column + (o ? 0 : 1);
            },
            electricInput: _
              ? /^\s*(?:case .*?:|default:|\{\}?|\})$/
              : /^\s*[{}]$/,
            blockCommentStart: "/*",
            blockCommentEnd: "*/",
            blockCommentContinue: " * ",
            lineComment: "//",
            fold: "brace"
          };
        });
        var s =
            "auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",
          c =
            "alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",
          u =
            "bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",
          d =
            "FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",
          p = a("int long char short double float unsigned signed void bool"),
          f = a("SEL instancetype id Class Protocol BOOL");
        function m(e) {
          return l(p, e) || /.+_t$/.test(e);
        }
        function h(e) {
          return m(e) || l(f, e);
        }
        var g = "case do else for if switch while struct enum union";
        function v(e, t) {
          if (!t.startOfLine) return !1;
          for (var r, n = null; (r = e.peek()); ) {
            if ("\\" == r && e.match(/^.$/)) {
              n = v;
              break;
            }
            if ("/" == r && e.match(/^\/[\/\*]/, !1)) break;
            e.next();
          }
          return (t.tokenize = n), "meta";
        }
        function b(e, t) {
          return "type" == t.prevToken && "type";
        }
        function y(e) {
          return !(
            !e ||
            e.length < 2 ||
            "_" != e[0] ||
            ("_" != e[1] && e[1] === e[1].toLowerCase())
          );
        }
        function x(e) {
          return e.eatWhile(/[\w\.']/), "number";
        }
        function k(e, t) {
          if ((e.backUp(1), e.match(/(R|u8R|uR|UR|LR)/))) {
            var r = e.match(/"([^\s\\()]{0,16})\(/);
            return (
              !!r && ((t.cpp11RawStringDelim = r[1]), (t.tokenize = C), C(e, t))
            );
          }
          return e.match(/(u8|u|U|L)/)
            ? !!e.match(/["']/, !1) && "string"
            : (e.next(), !1);
        }
        function w(e) {
          var t = /(\w+)::~?(\w+)$/.exec(e);
          return t && t[1] == t[2];
        }
        function _(e, t) {
          for (var r; null != (r = e.next()); )
            if ('"' == r && !e.eat('"')) {
              t.tokenize = null;
              break;
            }
          return "string";
        }
        function C(e, t) {
          var r = t.cpp11RawStringDelim.replace(/[^\w\s]/g, "\\$&"),
            n = e.match(new RegExp(".*?\\)" + r + '"'));
          return n ? (t.tokenize = null) : e.skipToEnd(), "string";
        }
        function S(t, r) {
          "string" == typeof t && (t = [t]);
          var n = [];
          function i(e) {
            if (e) for (var t in e) e.hasOwnProperty(t) && n.push(t);
          }
          i(r.keywords),
            i(r.types),
            i(r.builtin),
            i(r.atoms),
            n.length &&
              ((r.helperType = t[0]), e.registerHelper("hintWords", t[0], n));
          for (var o = 0; o < t.length; ++o) e.defineMIME(t[o], r);
        }
        function M(e, t) {
          for (var r = !1; !e.eol(); ) {
            if (!r && e.match('"""')) {
              t.tokenize = null;
              break;
            }
            r = "\\" == e.next() && !r;
          }
          return "string";
        }
        function L(e) {
          return function (t, r) {
            for (var n; (n = t.next()); ) {
              if ("*" == n && t.eat("/")) {
                if (1 == e) {
                  r.tokenize = null;
                  break;
                }
                return (r.tokenize = L(e - 1)), r.tokenize(t, r);
              }
              if ("/" == n && t.eat("*"))
                return (r.tokenize = L(e + 1)), r.tokenize(t, r);
            }
            return "comment";
          };
        }
        S(["text/x-csrc", "text/x-c", "text/x-chdr"], {
          name: "clike",
          keywords: a(s),
          types: m,
          blockKeywords: a(g),
          defKeywords: a("struct enum union"),
          typeFirstDefinitions: !0,
          atoms: a("NULL true false"),
          isReservedIdentifier: y,
          hooks: { "#": v, "*": b },
          modeProps: { fold: ["brace", "include"] }
        }),
          S(["text/x-c++src", "text/x-c++hdr"], {
            name: "clike",
            keywords: a(s + " " + c),
            types: m,
            blockKeywords: a(g + " class try catch"),
            defKeywords: a("struct enum union class namespace"),
            typeFirstDefinitions: !0,
            atoms: a("true false NULL nullptr"),
            dontIndentStatements: /^template$/,
            isIdentifierChar: /[\w\$_~\xa1-\uffff]/,
            isReservedIdentifier: y,
            hooks: {
              "#": v,
              "*": b,
              u: k,
              U: k,
              L: k,
              R: k,
              0: x,
              1: x,
              2: x,
              3: x,
              4: x,
              5: x,
              6: x,
              7: x,
              8: x,
              9: x,
              token: function (e, t, r) {
                if (
                  "variable" == r &&
                  "(" == e.peek() &&
                  (";" == t.prevToken ||
                    null == t.prevToken ||
                    "}" == t.prevToken) &&
                  w(e.current())
                )
                  return "def";
              }
            },
            namespaceSeparator: "::",
            modeProps: { fold: ["brace", "include"] }
          }),
          S("text/x-java", {
            name: "clike",
            keywords: a(
              "abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"
            ),
            types: a(
              "byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"
            ),
            blockKeywords: a(
              "catch class do else finally for if switch try while"
            ),
            defKeywords: a("class interface enum @interface"),
            typeFirstDefinitions: !0,
            atoms: a("true false null"),
            number:
              /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
            hooks: {
              "@": function (e) {
                return (
                  !e.match("interface", !1) && (e.eatWhile(/[\w\$_]/), "meta")
                );
              }
            },
            modeProps: { fold: ["brace", "import"] }
          }),
          S("text/x-csharp", {
            name: "clike",
            keywords: a(
              "abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"
            ),
            types: a(
              "Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"
            ),
            blockKeywords: a(
              "catch class do else finally for foreach if struct switch try while"
            ),
            defKeywords: a("class interface namespace struct var"),
            typeFirstDefinitions: !0,
            atoms: a("true false null"),
            hooks: {
              "@": function (e, t) {
                return e.eat('"')
                  ? ((t.tokenize = _), _(e, t))
                  : (e.eatWhile(/[\w\$_]/), "meta");
              }
            }
          }),
          S("text/x-scala", {
            name: "clike",
            keywords: a(
              "abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"
            ),
            types: a(
              "AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"
            ),
            multiLineStrings: !0,
            blockKeywords: a(
              "catch class enum do else finally for forSome if match switch try while"
            ),
            defKeywords: a("class enum def object package trait type val var"),
            atoms: a("true false null"),
            indentStatements: !1,
            indentSwitch: !1,
            isOperatorChar: /[+\-*&%=<>!?|\/#:@]/,
            hooks: {
              "@": function (e) {
                return e.eatWhile(/[\w\$_]/), "meta";
              },
              '"': function (e, t) {
                return !!e.match('""') && ((t.tokenize = M), t.tokenize(e, t));
              },
              "'": function (e) {
                return e.eatWhile(/[\w\$_\xa1-\uffff]/), "atom";
              },
              "=": function (e, r) {
                var n = r.context;
                return (
                  !("}" != n.type || !n.align || !e.eat(">")) &&
                  ((r.context = new t(
                    n.indented,
                    n.column,
                    n.type,
                    n.info,
                    null,
                    n.prev
                  )),
                  "operator")
                );
              },
              "/": function (e, t) {
                return !!e.eat("*") && ((t.tokenize = L(1)), t.tokenize(e, t));
              }
            },
            modeProps: { closeBrackets: { pairs: '()[]{}""', triples: '"' } }
          }),
          S("text/x-kotlin", {
            name: "clike",
            keywords: a(
              "package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam"
            ),
            types: a(
              "Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"
            ),
            intendSwitch: !1,
            indentStatements: !1,
            multiLineStrings: !0,
            number:
              /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
            blockKeywords: a(
              "catch class do else finally for if where try while enum"
            ),
            defKeywords: a("class val var object interface fun"),
            atoms: a("true false null this"),
            hooks: {
              "@": function (e) {
                return e.eatWhile(/[\w\$_]/), "meta";
              },
              "*": function (e, t) {
                return "." == t.prevToken ? "variable" : "operator";
              },
              '"': function (e, t) {
                var r;
                return (
                  (t.tokenize =
                    ((r = e.match('""')),
                    function (e, t) {
                      for (var n, i = !1, o = !1; !e.eol(); ) {
                        if (!r && !i && e.match('"')) {
                          o = !0;
                          break;
                        }
                        if (r && e.match('"""')) {
                          o = !0;
                          break;
                        }
                        (n = e.next()),
                          !i && "$" == n && e.match("{") && e.skipTo("}"),
                          (i = !i && "\\" == n && !r);
                      }
                      return (!o && r) || (t.tokenize = null), "string";
                    })),
                  t.tokenize(e, t)
                );
              },
              "/": function (e, t) {
                return !!e.eat("*") && ((t.tokenize = L(1)), t.tokenize(e, t));
              },
              indent: function (e, t, r, n) {
                var i = r && r.charAt(0);
                return ("}" != e.prevToken && ")" != e.prevToken) || "" != r
                  ? ("operator" == e.prevToken &&
                      "}" != r &&
                      "}" != e.context.type) ||
                    ("variable" == e.prevToken && "." == i) ||
                    (("}" == e.prevToken || ")" == e.prevToken) && "." == i)
                    ? 2 * n + t.indented
                    : t.align && "}" == t.type
                    ? t.indented +
                      (e.context.type == (r || "").charAt(0) ? 0 : n)
                    : void 0
                  : e.indented;
              }
            },
            modeProps: { closeBrackets: { triples: '"' } }
          }),
          S(["x-shader/x-vertex", "x-shader/x-fragment"], {
            name: "clike",
            keywords: a(
              "sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"
            ),
            types: a(
              "float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"
            ),
            blockKeywords: a("for while do if else struct"),
            builtin: a(
              "radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"
            ),
            atoms: a(
              "true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"
            ),
            indentSwitch: !1,
            hooks: { "#": v },
            modeProps: { fold: ["brace", "include"] }
          }),
          S("text/x-nesc", {
            name: "clike",
            keywords: a(
              s +
                " as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"
            ),
            types: m,
            blockKeywords: a(g),
            atoms: a("null true false"),
            hooks: { "#": v },
            modeProps: { fold: ["brace", "include"] }
          }),
          S("text/x-objectivec", {
            name: "clike",
            keywords: a(s + " " + u),
            types: h,
            builtin: a(d),
            blockKeywords: a(
              g +
                " @synthesize @try @catch @finally @autoreleasepool @synchronized"
            ),
            defKeywords: a(
              "struct enum union @interface @implementation @protocol @class"
            ),
            dontIndentStatements: /^@.*$/,
            typeFirstDefinitions: !0,
            atoms: a("YES NO NULL Nil nil true false nullptr"),
            isReservedIdentifier: y,
            hooks: { "#": v, "*": b },
            modeProps: { fold: ["brace", "include"] }
          }),
          S("text/x-objectivec++", {
            name: "clike",
            keywords: a(s + " " + u + " " + c),
            types: h,
            builtin: a(d),
            blockKeywords: a(
              g +
                " @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"
            ),
            defKeywords: a(
              "struct enum union @interface @implementation @protocol @class class namespace"
            ),
            dontIndentStatements: /^@.*$|^template$/,
            typeFirstDefinitions: !0,
            atoms: a("YES NO NULL Nil nil true false nullptr"),
            isReservedIdentifier: y,
            hooks: {
              "#": v,
              "*": b,
              u: k,
              U: k,
              L: k,
              R: k,
              0: x,
              1: x,
              2: x,
              3: x,
              4: x,
              5: x,
              6: x,
              7: x,
              8: x,
              9: x,
              token: function (e, t, r) {
                if (
                  "variable" == r &&
                  "(" == e.peek() &&
                  (";" == t.prevToken ||
                    null == t.prevToken ||
                    "}" == t.prevToken) &&
                  w(e.current())
                )
                  return "def";
              }
            },
            namespaceSeparator: "::",
            modeProps: { fold: ["brace", "include"] }
          }),
          S("text/x-squirrel", {
            name: "clike",
            keywords: a(
              "base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"
            ),
            types: m,
            blockKeywords: a(
              "case catch class else for foreach if switch try while"
            ),
            defKeywords: a("function local class"),
            typeFirstDefinitions: !0,
            atoms: a("true false null"),
            hooks: { "#": v },
            modeProps: { fold: ["brace", "include"] }
          });
        var T = null;
        S("text/x-ceylon", {
          name: "clike",
          keywords: a(
            "abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"
          ),
          types: function (e) {
            var t = e.charAt(0);
            return t === t.toUpperCase() && t !== t.toLowerCase();
          },
          blockKeywords: a(
            "case catch class dynamic else finally for function if interface module new object switch try while"
          ),
          defKeywords: a(
            "class dynamic function interface module object package value"
          ),
          builtin: a(
            "abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"
          ),
          isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
          isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
          numberStart: /[\d#$]/,
          number:
            /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
          multiLineStrings: !0,
          typeFirstDefinitions: !0,
          atoms: a("true false null larger smaller equal empty finished"),
          indentSwitch: !1,
          styleDefs: !1,
          hooks: {
            "@": function (e) {
              return e.eatWhile(/[\w\$_]/), "meta";
            },
            '"': function (e, t) {
              return (
                (t.tokenize = (function e(t) {
                  return function (r, n) {
                    for (var i, o = !1, a = !1; !r.eol(); ) {
                      if (
                        !o &&
                        r.match('"') &&
                        ("single" == t || r.match('""'))
                      ) {
                        a = !0;
                        break;
                      }
                      if (!o && r.match("``")) {
                        (T = e(t)), (a = !0);
                        break;
                      }
                      (i = r.next()), (o = "single" == t && !o && "\\" == i);
                    }
                    return a && (n.tokenize = null), "string";
                  };
                })(e.match('""') ? "triple" : "single")),
                t.tokenize(e, t)
              );
            },
            "`": function (e, t) {
              return (
                !(!T || !e.match("`")) &&
                ((t.tokenize = T), (T = null), t.tokenize(e, t))
              );
            },
            "'": function (e) {
              return e.eatWhile(/[\w\$_\xa1-\uffff]/), "atom";
            },
            token: function (e, t, r) {
              if (("variable" == r || "type" == r) && "." == t.prevToken)
                return "variable-2";
            }
          },
          modeProps: {
            fold: ["brace", "import"],
            closeBrackets: { triples: '"' }
          }
        });
      })(r(0));
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        e.registerHelper("wordChars", "r", /[\w.]/),
          e.defineMode("r", function (t) {
            function r(e) {
              for (var t = {}, r = 0; r < e.length; ++r) t[e[r]] = !0;
              return t;
            }
            var n = [
                "NULL",
                "NA",
                "Inf",
                "NaN",
                "NA_integer_",
                "NA_real_",
                "NA_complex_",
                "NA_character_",
                "TRUE",
                "FALSE"
              ],
              i = [
                "list",
                "quote",
                "bquote",
                "eval",
                "return",
                "call",
                "parse",
                "deparse"
              ],
              o = [
                "if",
                "else",
                "repeat",
                "while",
                "function",
                "for",
                "in",
                "next",
                "break"
              ];
            e.registerHelper("hintWords", "r", n.concat(i, o));
            var a,
              l = r(n),
              s = r(i),
              c = r(o),
              u = r(["if", "else", "repeat", "while", "function", "for"]),
              d = /[+\-*\/^<>=!&|~$:]/;
            function p(e, t) {
              a = null;
              var r,
                n = e.next();
              if ("#" == n) return e.skipToEnd(), "comment";
              if ("0" == n && e.eat("x"))
                return e.eatWhile(/[\da-f]/i), "number";
              if ("." == n && e.eat(/\d/))
                return e.match(/\d*(?:e[+\-]?\d+)?/), "number";
              if (/\d/.test(n))
                return e.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/), "number";
              if ("'" == n || '"' == n)
                return (
                  (t.tokenize =
                    ((r = n),
                    function (e, t) {
                      if (e.eat("\\")) {
                        var n = e.next();
                        return (
                          "x" == n
                            ? e.match(/^[a-f0-9]{2}/i)
                            : ("u" == n || "U" == n) &&
                              e.eat("{") &&
                              e.skipTo("}")
                            ? e.next()
                            : "u" == n
                            ? e.match(/^[a-f0-9]{4}/i)
                            : "U" == n
                            ? e.match(/^[a-f0-9]{8}/i)
                            : /[0-7]/.test(n) && e.match(/^[0-7]{1,2}/),
                          "string-2"
                        );
                      }
                      for (var i; null != (i = e.next()); ) {
                        if (i == r) {
                          t.tokenize = p;
                          break;
                        }
                        if ("\\" == i) {
                          e.backUp(1);
                          break;
                        }
                      }
                      return "string";
                    })),
                  "string"
                );
              if ("`" == n) return e.match(/[^`]+`/), "variable-3";
              if ("." == n && e.match(/.[.\d]+/)) return "keyword";
              if (/[\w\.]/.test(n) && "_" != n) {
                e.eatWhile(/[\w\.]/);
                var i = e.current();
                return l.propertyIsEnumerable(i)
                  ? "atom"
                  : c.propertyIsEnumerable(i)
                  ? (u.propertyIsEnumerable(i) &&
                      !e.match(/\s*if(\s+|$)/, !1) &&
                      (a = "block"),
                    "keyword")
                  : s.propertyIsEnumerable(i)
                  ? "builtin"
                  : "variable";
              }
              return "%" == n
                ? (e.skipTo("%") && e.next(), "operator variable-2")
                : ("<" == n && e.eat("-")) ||
                  ("<" == n && e.match("<-")) ||
                  ("-" == n && e.match(/>>?/))
                ? "operator arrow"
                : "=" == n && t.ctx.argList
                ? "arg-is"
                : d.test(n)
                ? "$" == n
                  ? "operator dollar"
                  : (e.eatWhile(d), "operator")
                : /[\(\){}\[\];]/.test(n)
                ? ((a = n), ";" == n ? "semi" : null)
                : null;
            }
            function f(e, t, r) {
              e.ctx = {
                type: t,
                indent: e.indent,
                flags: 0,
                column: r.column(),
                prev: e.ctx
              };
            }
            function m(e, t) {
              var r = e.ctx;
              e.ctx = {
                type: r.type,
                indent: r.indent,
                flags: r.flags | t,
                column: r.column,
                prev: r.prev
              };
            }
            function h(e) {
              (e.indent = e.ctx.indent), (e.ctx = e.ctx.prev);
            }
            return {
              startState: function () {
                return {
                  tokenize: p,
                  ctx: { type: "top", indent: -t.indentUnit, flags: 2 },
                  indent: 0,
                  afterIdent: !1
                };
              },
              token: function (e, t) {
                if (
                  (e.sol() &&
                    (0 == (3 & t.ctx.flags) && (t.ctx.flags |= 2),
                    4 & t.ctx.flags && h(t),
                    (t.indent = e.indentation())),
                  e.eatSpace())
                )
                  return null;
                var r = t.tokenize(e, t);
                return (
                  "comment" != r && 0 == (2 & t.ctx.flags) && m(t, 1),
                  (";" != a && "{" != a && "}" != a) ||
                    "block" != t.ctx.type ||
                    h(t),
                  "{" == a
                    ? f(t, "}", e)
                    : "(" == a
                    ? (f(t, ")", e), t.afterIdent && (t.ctx.argList = !0))
                    : "[" == a
                    ? f(t, "]", e)
                    : "block" == a
                    ? f(t, "block", e)
                    : a == t.ctx.type
                    ? h(t)
                    : "block" == t.ctx.type && "comment" != r && m(t, 4),
                  (t.afterIdent = "variable" == r || "keyword" == r),
                  r
                );
              },
              indent: function (e, r) {
                if (e.tokenize != p) return 0;
                var n = r && r.charAt(0),
                  i = e.ctx,
                  o = n == i.type;
                return (
                  4 & i.flags && (i = i.prev),
                  "block" == i.type
                    ? i.indent + ("{" == n ? 0 : t.indentUnit)
                    : 1 & i.flags
                    ? i.column + (o ? 0 : 1)
                    : i.indent + (o ? 0 : t.indentUnit)
                );
              },
              lineComment: "#"
            };
          }),
          e.defineMIME("text/x-rsrc", "r");
      })(r(0));
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        function t(e) {
          for (var t; null != (t = e.next()); )
            if ("`" == t && !e.eat("`")) return "variable-2";
          return (
            e.backUp(e.current().length - 1),
            e.eatWhile(/\w/) ? "variable-2" : null
          );
        }
        function r(e) {
          return (
            e.eat("@") &&
              (e.match(/^session\./),
              e.match(/^local\./),
              e.match(/^global\./)),
            e.eat("'")
              ? (e.match(/^.*'/), "variable-2")
              : e.eat('"')
              ? (e.match(/^.*"/), "variable-2")
              : e.eat("`")
              ? (e.match(/^.*`/), "variable-2")
              : e.match(/^[0-9a-zA-Z$\.\_]+/)
              ? "variable-2"
              : null
          );
        }
        function n(e) {
          return e.eat("N")
            ? "atom"
            : e.match(/^[a-zA-Z.#!?]/)
            ? "variable-2"
            : null;
        }
        e.defineMode("sql", function (t, r) {
          var n = r.client || {},
            l = r.atoms || { false: !0, true: !0, null: !0 },
            s = r.builtin || o(a),
            c = r.keywords || o(i),
            u = r.operatorChars || /^[*+\-%<>!=&|~^\/]/,
            d = r.support || {},
            p = r.hooks || {},
            f = r.dateSQL || { date: !0, time: !0, timestamp: !0 },
            m = !1 !== r.backslashStringEscapes,
            h = r.brackets || /^[\{}\(\)\[\]]/,
            g = r.punctuation || /^[;.,:]/;
          function v(e, t) {
            var r = e.next();
            if (p[r]) {
              var i = p[r](e, t);
              if (!1 !== i) return i;
            }
            if (
              d.hexNumber &&
              (("0" == r && e.match(/^[xX][0-9a-fA-F]+/)) ||
                (("x" == r || "X" == r) && e.match(/^'[0-9a-fA-F]+'/)))
            )
              return "number";
            if (
              d.binaryNumber &&
              ((("b" == r || "B" == r) && e.match(/^'[01]+'/)) ||
                ("0" == r && e.match(/^b[01]+/)))
            )
              return "number";
            if (r.charCodeAt(0) > 47 && r.charCodeAt(0) < 58)
              return (
                e.match(/^[0-9]*(\.[0-9]+)?([eE][-+]?[0-9]+)?/),
                d.decimallessFloat && e.match(/^\.(?!\.)/),
                "number"
              );
            if ("?" == r && (e.eatSpace() || e.eol() || e.eat(";")))
              return "variable-3";
            if ("'" == r || ('"' == r && d.doubleQuote))
              return (t.tokenize = b(r)), t.tokenize(e, t);
            if (
              ((d.nCharCast && ("n" == r || "N" == r)) ||
                (d.charsetCast && "_" == r && e.match(/[a-z][a-z0-9]*/i))) &&
              ("'" == e.peek() || '"' == e.peek())
            )
              return "keyword";
            if (
              d.escapeConstant &&
              ("e" == r || "E" == r) &&
              ("'" == e.peek() || ('"' == e.peek() && d.doubleQuote))
            )
              return (
                (t.tokenize = function (e, t) {
                  return (t.tokenize = b(e.next(), !0))(e, t);
                }),
                "keyword"
              );
            if (d.commentSlashSlash && "/" == r && e.eat("/"))
              return e.skipToEnd(), "comment";
            if (
              (d.commentHash && "#" == r) ||
              ("-" == r &&
                e.eat("-") &&
                (!d.commentSpaceRequired || e.eat(" ")))
            )
              return e.skipToEnd(), "comment";
            if ("/" == r && e.eat("*"))
              return (
                (t.tokenize = (function e(t) {
                  return function (r, n) {
                    var i = r.match(/^.*?(\/\*|\*\/)/);
                    return (
                      i
                        ? "/*" == i[1]
                          ? (n.tokenize = e(t + 1))
                          : (n.tokenize = t > 1 ? e(t - 1) : v)
                        : r.skipToEnd(),
                      "comment"
                    );
                  };
                })(1)),
                t.tokenize(e, t)
              );
            if ("." != r) {
              if (u.test(r)) return e.eatWhile(u), "operator";
              if (h.test(r)) return "bracket";
              if (g.test(r)) return e.eatWhile(g), "punctuation";
              if (
                "{" == r &&
                (e.match(/^( )*(d|D|t|T|ts|TS)( )*'[^']*'( )*}/) ||
                  e.match(/^( )*(d|D|t|T|ts|TS)( )*"[^"]*"( )*}/))
              )
                return "number";
              e.eatWhile(/^[_\w\d]/);
              var o = e.current().toLowerCase();
              return f.hasOwnProperty(o) &&
                (e.match(/^( )+'[^']*'/) || e.match(/^( )+"[^"]*"/))
                ? "number"
                : l.hasOwnProperty(o)
                ? "atom"
                : s.hasOwnProperty(o)
                ? "builtin"
                : c.hasOwnProperty(o)
                ? "keyword"
                : n.hasOwnProperty(o)
                ? "string-2"
                : null;
            }
            return d.zerolessFloat && e.match(/^(?:\d+(?:e[+-]?\d+)?)/i)
              ? "number"
              : e.match(/^\.+/)
              ? null
              : d.ODBCdotTable && e.match(/^[\w\d_]+/)
              ? "variable-2"
              : void 0;
          }
          function b(e, t) {
            return function (r, n) {
              for (var i, o = !1; null != (i = r.next()); ) {
                if (i == e && !o) {
                  n.tokenize = v;
                  break;
                }
                o = (m || t) && !o && "\\" == i;
              }
              return "string";
            };
          }
          function y(e, t, r) {
            t.context = {
              prev: t.context,
              indent: e.indentation(),
              col: e.column(),
              type: r
            };
          }
          return {
            startState: function () {
              return { tokenize: v, context: null };
            },
            token: function (e, t) {
              if (
                (e.sol() &&
                  t.context &&
                  null == t.context.align &&
                  (t.context.align = !1),
                t.tokenize == v && e.eatSpace())
              )
                return null;
              var r = t.tokenize(e, t);
              if ("comment" == r) return r;
              t.context && null == t.context.align && (t.context.align = !0);
              var n = e.current();
              return (
                "(" == n
                  ? y(e, t, ")")
                  : "[" == n
                  ? y(e, t, "]")
                  : t.context &&
                    t.context.type == n &&
                    (function (e) {
                      (e.indent = e.context.indent),
                        (e.context = e.context.prev);
                    })(t),
                r
              );
            },
            indent: function (r, n) {
              var i = r.context;
              if (!i) return e.Pass;
              var o = n.charAt(0) == i.type;
              return i.align
                ? i.col + (o ? 0 : 1)
                : i.indent + (o ? 0 : t.indentUnit);
            },
            blockCommentStart: "/*",
            blockCommentEnd: "*/",
            lineComment: d.commentSlashSlash
              ? "//"
              : d.commentHash
              ? "#"
              : "--",
            closeBrackets: "()[]{}''\"\"``"
          };
        });
        var i =
          "alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit ";
        function o(e) {
          for (var t = {}, r = e.split(" "), n = 0; n < r.length; ++n)
            t[r[n]] = !0;
          return t;
        }
        var a =
          "bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric";
        e.defineMIME("text/x-sql", {
          name: "sql",
          keywords: o(i + "begin"),
          builtin: o(a),
          atoms: o("false true null unknown"),
          dateSQL: o("date time timestamp"),
          support: o("ODBCdotTable doubleQuote binaryNumber hexNumber")
        }),
          e.defineMIME("text/x-mssql", {
            name: "sql",
            client: o(
              "$partition binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id"
            ),
            keywords: o(
              i +
                "begin trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx updlock with"
            ),
            builtin: o(
              "bigint numeric bit smallint decimal smallmoney int tinyint money float real char varchar text nchar nvarchar ntext binary varbinary image cursor timestamp hierarchyid uniqueidentifier sql_variant xml table "
            ),
            atoms: o(
              "is not null like and or in left right between inner outer join all any some cross unpivot pivot exists"
            ),
            operatorChars: /^[*+\-%<>!=^\&|\/]/,
            brackets: /^[\{}\(\)]/,
            punctuation: /^[;.,:\/]/,
            backslashStringEscapes: !1,
            dateSQL: o(
              "date datetimeoffset datetime2 smalldatetime datetime time"
            ),
            hooks: { "@": r }
          }),
          e.defineMIME("text/x-mysql", {
            name: "sql",
            client: o(
              "charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"
            ),
            keywords: o(
              i +
                "accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"
            ),
            builtin: o(
              "bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"
            ),
            atoms: o("false true null unknown"),
            operatorChars: /^[*+\-%<>!=&|^]/,
            dateSQL: o("date time timestamp"),
            support: o(
              "ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"
            ),
            hooks: { "@": r, "`": t, "\\": n }
          }),
          e.defineMIME("text/x-mariadb", {
            name: "sql",
            client: o(
              "charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"
            ),
            keywords: o(
              i +
                "accessible action add after algorithm all always analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general generated get global grant grants group groupby_concat handler hard hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password persistent phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show shutdown signal slave slow smallint snapshot soft soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views virtual warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"
            ),
            builtin: o(
              "bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"
            ),
            atoms: o("false true null unknown"),
            operatorChars: /^[*+\-%<>!=&|^]/,
            dateSQL: o("date time timestamp"),
            support: o(
              "ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"
            ),
            hooks: { "@": r, "`": t, "\\": n }
          }),
          e.defineMIME("text/x-sqlite", {
            name: "sql",
            client: o(
              "auth backup bail binary changes check clone databases dbinfo dump echo eqp exit explain fullschema headers help import imposter indexes iotrace limit lint load log mode nullvalue once open output print prompt quit read restore save scanstats schema separator session shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width"
            ),
            keywords: o(
              i +
                "abort action add after all analyze attach autoincrement before begin cascade case cast check collate column commit conflict constraint cross current_date current_time current_timestamp database default deferrable deferred detach each else end escape except exclusive exists explain fail for foreign full glob if ignore immediate index indexed initially inner instead intersect isnull key left limit match natural no notnull null of offset outer plan pragma primary query raise recursive references regexp reindex release rename replace restrict right rollback row savepoint temp temporary then to transaction trigger unique using vacuum view virtual when with without"
            ),
            builtin: o(
              "bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text clob bigint int int2 int8 integer float double char varchar date datetime year unsigned signed numeric real"
            ),
            atoms: o("null current_date current_time current_timestamp"),
            operatorChars: /^[*+\-%<>!=&|\/~]/,
            dateSQL: o("date time timestamp datetime"),
            support: o("decimallessFloat zerolessFloat"),
            identifierQuote: '"',
            hooks: {
              "@": r,
              ":": r,
              "?": r,
              $: r,
              '"': function (e) {
                for (var t; null != (t = e.next()); )
                  if ('"' == t && !e.eat('"')) return "variable-2";
                return (
                  e.backUp(e.current().length - 1),
                  e.eatWhile(/\w/) ? "variable-2" : null
                );
              },
              "`": t
            }
          }),
          e.defineMIME("text/x-cassandra", {
            name: "sql",
            client: {},
            keywords: o(
              "add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime"
            ),
            builtin: o(
              "ascii bigint blob boolean counter decimal double float frozen inet int list map static text timestamp timeuuid tuple uuid varchar varint"
            ),
            atoms: o("false true infinity NaN"),
            operatorChars: /^[<>=]/,
            dateSQL: {},
            support: o("commentSlashSlash decimallessFloat"),
            hooks: {}
          }),
          e.defineMIME("text/x-plsql", {
            name: "sql",
            client: o(
              "appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define describe echo editfile embedded escape exec execute feedback flagger flush heading headsep instance linesize lno loboffset logsource long longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar release repfooter repheader serveroutput shiftinout show showmode size spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout time timing trimout trimspool ttitle underline verify version wrap"
            ),
            keywords: o(
              "abort accept access add all alter and any array arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body boolean by case cast char char_base check close cluster clusters colauth column comment commit compress connect connected constant constraint crash create current currval cursor data_base database date dba deallocate debugoff debugon decimal declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry escape exception exception_init exchange exclusive exists exit external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging long loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base object of off offline on online only open option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw read rebuild record ref references refresh release rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate session set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work"
            ),
            builtin: o(
              "abs acos add_months ascii asin atan atan2 average bfile bfilename bigserial bit blob ceil character chartorowid chr clob concat convert cos cosh count dec decode deref dual dump dup_val_on_index empty error exp false float floor found glb greatest hextoraw initcap instr instrb int integer isopen last_day least length lengthb ln lower lpad ltrim lub make_ref max min mlslabel mod months_between natural naturaln nchar nclob new_time next_day nextval nls_charset_decl_len nls_charset_id nls_charset_name nls_initcap nls_lower nls_sort nls_upper nlssort no_data_found notfound null number numeric nvarchar2 nvl others power rawtohex real reftohex round rowcount rowidtochar rowtype rpad rtrim serial sign signtype sin sinh smallint soundex sqlcode sqlerrm sqrt stddev string substr substrb sum sysdate tan tanh to_char text to_date to_label to_multi_byte to_number to_single_byte translate true trunc uid unlogged upper user userenv varchar varchar2 variance varying vsize xml"
            ),
            operatorChars: /^[*\/+\-%<>!=~]/,
            dateSQL: o("date time timestamp"),
            support: o(
              "doubleQuote nCharCast zerolessFloat binaryNumber hexNumber"
            )
          }),
          e.defineMIME("text/x-hive", {
            name: "sql",
            keywords: o(
              "select alter $elem$ $key$ $value$ add after all analyze and archive as asc before between binary both bucket buckets by cascade case cast change cluster clustered clusterstatus collection column columns comment compute concatenate continue create cross cursor data database databases dbproperties deferred delete delimited desc describe directory disable distinct distribute drop else enable end escaped exclusive exists explain export extended external fetch fields fileformat first format formatted from full function functions grant group having hold_ddltime idxproperties if import in index indexes inpath inputdriver inputformat insert intersect into is items join keys lateral left like limit lines load local location lock locks mapjoin materialized minus msck no_drop nocompress not of offline on option or order out outer outputdriver outputformat overwrite partition partitioned partitions percent plus preserve procedure purge range rcfile read readonly reads rebuild recordreader recordwriter recover reduce regexp rename repair replace restrict revoke right rlike row schema schemas semi sequencefile serde serdeproperties set shared show show_database sort sorted ssl statistics stored streamtable table tables tablesample tblproperties temporary terminated textfile then tmp to touch transform trigger unarchive undo union uniquejoin unlock update use using utc utc_tmestamp view when where while with admin authorization char compact compactions conf cube current current_date current_timestamp day decimal defined dependency directories elem_type exchange file following for grouping hour ignore inner interval jar less logical macro minute month more none noscan over owner partialscan preceding pretty principals protection reload rewrite role roles rollup rows second server sets skewed transactions truncate unbounded unset uri user values window year"
            ),
            builtin: o(
              "bool boolean long timestamp tinyint smallint bigint int float double date datetime unsigned string array struct map uniontype key_type utctimestamp value_type varchar"
            ),
            atoms: o("false true null unknown"),
            operatorChars: /^[*+\-%<>!=]/,
            dateSQL: o("date timestamp"),
            support: o("ODBCdotTable doubleQuote binaryNumber hexNumber")
          }),
          e.defineMIME("text/x-pgsql", {
            name: "sql",
            client: o("source"),
            keywords: o(
              i +
                "a abort abs absent absolute access according action ada add admin after aggregate alias all allocate also alter always analyse analyze and any are array array_agg array_max_cardinality as asc asensitive assert assertion assignment asymmetric at atomic attach attribute attributes authorization avg backward base64 before begin begin_frame begin_partition bernoulli between bigint binary bit bit_length blob blocked bom boolean both breadth by c cache call called cardinality cascade cascaded case cast catalog catalog_name ceil ceiling chain char char_length character character_length character_set_catalog character_set_name character_set_schema characteristics characters check checkpoint class class_origin clob close cluster coalesce cobol collate collation collation_catalog collation_name collation_schema collect column column_name columns command_function command_function_code comment comments commit committed concurrently condition condition_number configuration conflict connect connection connection_name constant constraint constraint_catalog constraint_name constraint_schema constraints constructor contains content continue control conversion convert copy corr corresponding cost count covar_pop covar_samp create cross csv cube cume_dist current current_catalog current_date current_default_transform_group current_path current_role current_row current_schema current_time current_timestamp current_transform_group_for_type current_user cursor cursor_name cycle data database datalink datatype date datetime_interval_code datetime_interval_precision day db deallocate debug dec decimal declare default defaults deferrable deferred defined definer degree delete delimiter delimiters dense_rank depends depth deref derived desc describe descriptor detach detail deterministic diagnostics dictionary disable discard disconnect dispatch distinct dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue do document domain double drop dump dynamic dynamic_function dynamic_function_code each element else elseif elsif empty enable encoding encrypted end end_frame end_partition endexec enforced enum equals errcode error escape event every except exception exclude excluding exclusive exec execute exists exit exp explain expression extension external extract false family fetch file filter final first first_value flag float floor following for force foreach foreign fortran forward found frame_row free freeze from fs full function functions fusion g general generated get global go goto grant granted greatest group grouping groups handler having header hex hierarchy hint hold hour id identity if ignore ilike immediate immediately immutable implementation implicit import in include including increment indent index indexes indicator info inherit inherits initially inline inner inout input insensitive insert instance instantiable instead int integer integrity intersect intersection interval into invoker is isnull isolation join k key key_member key_type label lag language large last last_value lateral lead leading leakproof least left length level library like like_regex limit link listen ln load local localtime localtimestamp location locator lock locked log logged loop lower m map mapping match matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text method min minute minvalue mod mode modifies module month more move multiset mumps name names namespace national natural nchar nclob nesting new next nfc nfd nfkc nfkd nil no none normalize normalized not nothing notice notify notnull nowait nth_value ntile null nullable nullif nulls number numeric object occurrences_regex octet_length octets of off offset oids old on only open operator option options or order ordering ordinality others out outer output over overlaps overlay overriding owned owner p pad parallel parameter parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partial partition pascal passing passthrough password path percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding precision prepare prepared preserve primary print_strict_params prior privileges procedural procedure procedures program public publication query quote raise range rank read reads real reassign recheck recovery recursive ref references referencing refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex relative release rename repeatable replace replica requiring reset respect restart restore restrict result result_oid return returned_cardinality returned_length returned_octet_length returned_sqlstate returning returns reverse revoke right role rollback rollup routine routine_catalog routine_name routine_schema routines row row_count row_number rows rowtype rule savepoint scale schema schema_name schemas scope scope_catalog scope_name scope_schema scroll search second section security select selective self sensitive sequence sequences serializable server server_name session session_user set setof sets share show similar simple size skip slice smallint snapshot some source space specific specific_name specifictype sql sqlcode sqlerror sqlexception sqlstate sqlwarning sqrt stable stacked standalone start state statement static statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time system_user t table table_name tables tablesample tablespace temp template temporary text then ties time timestamp timezone_hour timezone_minute to token top_level_count trailing transaction transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex translation treat trigger trigger_catalog trigger_name trigger_schema trim trim_array true truncate trusted type types uescape unbounded uncommitted under unencrypted union unique unknown unlink unlisten unlogged unnamed unnest until untyped update upper uri usage use_column use_variable user user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema using vacuum valid validate validator value value_of values var_pop var_samp varbinary varchar variable_conflict variadic varying verbose version versioning view views volatile warning when whenever where while whitespace width_bucket window with within without work wrapper write xml xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate year yes zone"
            ),
            builtin: o(
              "bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"
            ),
            atoms: o("false true null unknown"),
            operatorChars: /^[*\/+\-%<>!=&|^\/#@?~]/,
            backslashStringEscapes: !1,
            dateSQL: o("date time timestamp"),
            support: o(
              "ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast escapeConstant"
            )
          }),
          e.defineMIME("text/x-gql", {
            name: "sql",
            keywords: o(
              "ancestor and asc by contains desc descendant distinct from group has in is limit offset on order select superset where"
            ),
            atoms: o("false true"),
            builtin: o(
              "blob datetime first key __key__ string integer double boolean null"
            ),
            operatorChars: /^[*+\-%<>!=]/
          }),
          e.defineMIME("text/x-gpsql", {
            name: "sql",
            client: o("source"),
            keywords: o(
              "abort absolute access action active add admin after aggregate all also alter always analyse analyze and any array as asc assertion assignment asymmetric at authorization backward before begin between bigint binary bit boolean both by cache called cascade cascaded case cast chain char character characteristics check checkpoint class close cluster coalesce codegen collate column comment commit committed concurrency concurrently configuration connection constraint constraints contains content continue conversion copy cost cpu_rate_limit create createdb createexttable createrole createuser cross csv cube current current_catalog current_date current_role current_schema current_time current_timestamp current_user cursor cycle data database day deallocate dec decimal declare decode default defaults deferrable deferred definer delete delimiter delimiters deny desc dictionary disable discard distinct distributed do document domain double drop dxl each else enable encoding encrypted end enum errors escape every except exchange exclude excluding exclusive execute exists explain extension external extract false family fetch fields filespace fill filter first float following for force foreign format forward freeze from full function global grant granted greatest group group_id grouping handler hash having header hold host hour identity if ignore ilike immediate immutable implicit in including inclusive increment index indexes inherit inherits initially inline inner inout input insensitive insert instead int integer intersect interval into invoker is isnull isolation join key language large last leading least left level like limit list listen load local localtime localtimestamp location lock log login mapping master match maxvalue median merge minute minvalue missing mode modifies modify month move name names national natural nchar new newline next no nocreatedb nocreateexttable nocreaterole nocreateuser noinherit nologin none noovercommit nosuperuser not nothing notify notnull nowait null nullif nulls numeric object of off offset oids old on only operator option options or order ordered others out outer over overcommit overlaps overlay owned owner parser partial partition partitions passing password percent percentile_cont percentile_disc placing plans position preceding precision prepare prepared preserve primary prior privileges procedural procedure protocol queue quote randomly range read readable reads real reassign recheck recursive ref references reindex reject relative release rename repeatable replace replica reset resource restart restrict returning returns revoke right role rollback rollup rootpartition row rows rule savepoint scatter schema scroll search second security segment select sequence serializable session session_user set setof sets share show similar simple smallint some split sql stable standalone start statement statistics stdin stdout storage strict strip subpartition subpartitions substring superuser symmetric sysid system table tablespace temp template temporary text then threshold ties time timestamp to trailing transaction treat trigger trim true truncate trusted type unbounded uncommitted unencrypted union unique unknown unlisten until update user using vacuum valid validation validator value values varchar variadic varying verbose version view volatile web when where whitespace window with within without work writable write xml xmlattributes xmlconcat xmlelement xmlexists xmlforest xmlparse xmlpi xmlroot xmlserialize year yes zone"
            ),
            builtin: o(
              "bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"
            ),
            atoms: o("false true null unknown"),
            operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
            dateSQL: o("date time timestamp"),
            support: o(
              "ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast"
            )
          }),
          e.defineMIME("text/x-sparksql", {
            name: "sql",
            keywords: o(
              "add after all alter analyze and anti archive array as asc at between bucket buckets by cache cascade case cast change clear cluster clustered codegen collection column columns comment commit compact compactions compute concatenate cost create cross cube current current_date current_timestamp database databases datata dbproperties defined delete delimited deny desc describe dfs directories distinct distribute drop else end escaped except exchange exists explain export extended external false fields fileformat first following for format formatted from full function functions global grant group grouping having if ignore import in index indexes inner inpath inputformat insert intersect interval into is items join keys last lateral lazy left like limit lines list load local location lock locks logical macro map minus msck natural no not null nulls of on optimize option options or order out outer outputformat over overwrite partition partitioned partitions percent preceding principals purge range recordreader recordwriter recover reduce refresh regexp rename repair replace reset restrict revoke right rlike role roles rollback rollup row rows schema schemas select semi separated serde serdeproperties set sets show skewed sort sorted start statistics stored stratify struct table tables tablesample tblproperties temp temporary terminated then to touch transaction transactions transform true truncate unarchive unbounded uncache union unlock unset use using values view when where window with"
            ),
            builtin: o(
              "tinyint smallint int bigint boolean float double string binary timestamp decimal array map struct uniontype delimited serde sequencefile textfile rcfile inputformat outputformat"
            ),
            atoms: o("false true null"),
            operatorChars: /^[*\/+\-%<>!=~&|^]/,
            dateSQL: o("date time timestamp"),
            support: o("ODBCdotTable doubleQuote zerolessFloat")
          }),
          e.defineMIME("text/x-esper", {
            name: "sql",
            client: o("source"),
            keywords: o(
              "alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit after all and as at asc avedev avg between by case cast coalesce count create current_timestamp day days delete define desc distinct else end escape events every exists false first from full group having hour hours in inner insert instanceof into irstream is istream join last lastweekday left limit like max match_recognize matches median measures metadatasql min minute minutes msec millisecond milliseconds not null offset on or order outer output partition pattern prev prior regexp retain-union retain-intersection right rstream sec second seconds select set some snapshot sql stddev sum then true unidirectional until update variable weekday when where window"
            ),
            builtin: {},
            atoms: o("false true null"),
            operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
            dateSQL: o("time"),
            support: o("decimallessFloat zerolessFloat binaryNumber hexNumber")
          });
      })(r(0));
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        function t(e) {
          for (var t = {}, r = 0; r < e.length; r++) t[e[r]] = !0;
          return t;
        }
        var r = t([
            "_",
            "var",
            "let",
            "class",
            "enum",
            "extension",
            "import",
            "protocol",
            "struct",
            "func",
            "typealias",
            "associatedtype",
            "open",
            "public",
            "internal",
            "fileprivate",
            "private",
            "deinit",
            "init",
            "new",
            "override",
            "self",
            "subscript",
            "super",
            "convenience",
            "dynamic",
            "final",
            "indirect",
            "lazy",
            "required",
            "static",
            "unowned",
            "unowned(safe)",
            "unowned(unsafe)",
            "weak",
            "as",
            "is",
            "break",
            "case",
            "continue",
            "default",
            "else",
            "fallthrough",
            "for",
            "guard",
            "if",
            "in",
            "repeat",
            "switch",
            "where",
            "while",
            "defer",
            "return",
            "inout",
            "mutating",
            "nonmutating",
            "catch",
            "do",
            "rethrows",
            "throw",
            "throws",
            "try",
            "didSet",
            "get",
            "set",
            "willSet",
            "assignment",
            "associativity",
            "infix",
            "left",
            "none",
            "operator",
            "postfix",
            "precedence",
            "precedencegroup",
            "prefix",
            "right",
            "Any",
            "AnyObject",
            "Type",
            "dynamicType",
            "Self",
            "Protocol",
            "__COLUMN__",
            "__FILE__",
            "__FUNCTION__",
            "__LINE__"
          ]),
          n = t([
            "var",
            "let",
            "class",
            "enum",
            "extension",
            "import",
            "protocol",
            "struct",
            "func",
            "typealias",
            "associatedtype",
            "for"
          ]),
          i = t(["true", "false", "nil", "self", "super", "_"]),
          o = t([
            "Array",
            "Bool",
            "Character",
            "Dictionary",
            "Double",
            "Float",
            "Int",
            "Int8",
            "Int16",
            "Int32",
            "Int64",
            "Never",
            "Optional",
            "Set",
            "String",
            "UInt8",
            "UInt16",
            "UInt32",
            "UInt64",
            "Void"
          ]),
          a = "+-/*%=|&<>~^?!",
          l = ":;,.(){}[]",
          s = /^\-?0b[01][01_]*/,
          c = /^\-?0o[0-7][0-7_]*/,
          u =
            /^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/,
          d = /^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/,
          p = /^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/,
          f = /^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/,
          m = /^\#[A-Za-z]+/,
          h = /^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;
        function g(e, t, g) {
          if ((e.sol() && (t.indented = e.indentation()), e.eatSpace()))
            return null;
          var y,
            x = e.peek();
          if ("/" == x) {
            if (e.match("//")) return e.skipToEnd(), "comment";
            if (e.match("/*")) return t.tokenize.push(b), b(e, t);
          }
          if (e.match(m)) return "builtin";
          if (e.match(h)) return "attribute";
          if (e.match(s)) return "number";
          if (e.match(c)) return "number";
          if (e.match(u)) return "number";
          if (e.match(d)) return "number";
          if (e.match(f)) return "property";
          if (a.indexOf(x) > -1) return e.next(), "operator";
          if (l.indexOf(x) > -1) return e.next(), e.match(".."), "punctuation";
          if ((y = e.match(/("""|"|')/))) {
            var k = function (e, t, r) {
              for (var n, i = 1 == e.length, o = !1; (n = t.peek()); )
                if (o) {
                  if ((t.next(), "(" == n))
                    return r.tokenize.push(v()), "string";
                  o = !1;
                } else {
                  if (t.match(e)) return r.tokenize.pop(), "string";
                  t.next(), (o = "\\" == n);
                }
              return i && r.tokenize.pop(), "string";
            }.bind(null, y[0]);
            return t.tokenize.push(k), k(e, t);
          }
          if (e.match(p)) {
            var w = e.current();
            return o.hasOwnProperty(w)
              ? "variable-2"
              : i.hasOwnProperty(w)
              ? "atom"
              : r.hasOwnProperty(w)
              ? (n.hasOwnProperty(w) && (t.prev = "define"), "keyword")
              : "define" == g
              ? "def"
              : "variable";
          }
          return e.next(), null;
        }
        function v() {
          var e = 0;
          return function (t, r, n) {
            var i = g(t, r, n);
            if ("punctuation" == i)
              if ("(" == t.current()) ++e;
              else if (")" == t.current()) {
                if (0 == e)
                  return (
                    t.backUp(1),
                    r.tokenize.pop(),
                    r.tokenize[r.tokenize.length - 1](t, r)
                  );
                --e;
              }
            return i;
          };
        }
        function b(e, t) {
          for (var r; e.match(/^[^\/*]+/, !0), (r = e.next()); )
            "/" === r && e.eat("*")
              ? t.tokenize.push(b)
              : "*" === r && e.eat("/") && t.tokenize.pop();
          return "comment";
        }
        function y(e, t, r) {
          (this.prev = e), (this.align = t), (this.indented = r);
        }
        e.defineMode("swift", function (e) {
          return {
            startState: function () {
              return { prev: null, context: null, indented: 0, tokenize: [] };
            },
            token: function (e, t) {
              var r = t.prev;
              t.prev = null;
              var n = t.tokenize[t.tokenize.length - 1] || g,
                i = n(e, t, r);
              if (
                (i && "comment" != i ? t.prev || (t.prev = i) : (t.prev = r),
                "punctuation" == i)
              ) {
                var o = /[\(\[\{]|([\]\)\}])/.exec(e.current());
                o &&
                  (o[1]
                    ? function (e) {
                        e.context &&
                          ((e.indented = e.context.indented),
                          (e.context = e.context.prev));
                      }
                    : function (e, t) {
                        var r = t.match(/^\s*($|\/[\/\*])/, !1)
                          ? null
                          : t.column() + 1;
                        e.context = new y(e.context, r, e.indented);
                      })(t, e);
              }
              return i;
            },
            indent: function (t, r) {
              var n = t.context;
              if (!n) return 0;
              var i = /^[\]\}\)]/.test(r);
              return null != n.align
                ? n.align - (i ? 1 : 0)
                : n.indented + (i ? 0 : e.indentUnit);
            },
            electricInput: /^\s*[\)\}\]]$/,
            lineComment: "//",
            blockCommentStart: "/*",
            blockCommentEnd: "*/",
            fold: "brace",
            closeBrackets: "()[]{}''\"\"``"
          };
        }),
          e.defineMIME("text/x-swift", "swift");
      })(r(0));
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        var t, n;
        (t = r(0)),
          r(29),
          r(4),
          r(5),
          r(30),
          r(1),
          r(8),
          r(31),
          r(32),
          r(33),
          (n = {
            script: [
              ["lang", /coffee(script)?/, "coffeescript"],
              [
                "type",
                /^(?:text|application)\/(?:x-)?coffee(?:script)?$/,
                "coffeescript"
              ],
              ["lang", /^babel$/, "javascript"],
              ["type", /^text\/babel$/, "javascript"],
              ["type", /^text\/ecmascript-\d+$/, "javascript"]
            ],
            style: [
              ["lang", /^stylus$/i, "stylus"],
              ["lang", /^sass$/i, "sass"],
              ["lang", /^less$/i, "text/x-less"],
              ["lang", /^scss$/i, "text/x-scss"],
              ["type", /^(text\/)?(x-)?styl(us)?$/i, "stylus"],
              ["type", /^text\/sass/i, "sass"],
              ["type", /^(text\/)?(x-)?scss$/i, "text/x-scss"],
              ["type", /^(text\/)?(x-)?less$/i, "text/x-less"]
            ],
            template: [
              ["lang", /^vue-template$/i, "vue"],
              ["lang", /^pug$/i, "pug"],
              ["lang", /^handlebars$/i, "handlebars"],
              ["type", /^(text\/)?(x-)?pug$/i, "pug"],
              ["type", /^text\/x-handlebars-template$/i, "handlebars"],
              [null, null, "vue-template"]
            ]
          }),
          t.defineMode("vue-template", function (e, r) {
            return t.overlayMode(t.getMode(e, r.backdrop || "text/html"), {
              token: function (e) {
                if (e.match(/^\{\{.*?\}\}/)) return "meta mustache";
                for (; e.next() && !e.match("{{", !1); );
                return null;
              }
            });
          }),
          t.defineMode(
            "vue",
            function (e) {
              return t.getMode(e, { name: "htmlmixed", tags: n });
            },
            "htmlmixed",
            "xml",
            "javascript",
            "coffeescript",
            "css",
            "sass",
            "stylus",
            "pug",
            "handlebars"
          ),
          t.defineMIME("script/x-vue", "vue"),
          t.defineMIME("text/x-vue", "vue");
      })();
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        e.overlayMode = function (t, r, n) {
          return {
            startState: function () {
              return {
                base: e.startState(t),
                overlay: e.startState(r),
                basePos: 0,
                baseCur: null,
                overlayPos: 0,
                overlayCur: null,
                streamSeen: null
              };
            },
            copyState: function (n) {
              return {
                base: e.copyState(t, n.base),
                overlay: e.copyState(r, n.overlay),
                basePos: n.basePos,
                baseCur: null,
                overlayPos: n.overlayPos,
                overlayCur: null
              };
            },
            token: function (e, i) {
              return (
                (e != i.streamSeen ||
                  Math.min(i.basePos, i.overlayPos) < e.start) &&
                  ((i.streamSeen = e), (i.basePos = i.overlayPos = e.start)),
                e.start == i.basePos &&
                  ((i.baseCur = t.token(e, i.base)), (i.basePos = e.pos)),
                e.start == i.overlayPos &&
                  ((e.pos = e.start),
                  (i.overlayCur = r.token(e, i.overlay)),
                  (i.overlayPos = e.pos)),
                (e.pos = Math.min(i.basePos, i.overlayPos)),
                null == i.overlayCur
                  ? i.baseCur
                  : (null != i.baseCur && i.overlay.combineTokens) ||
                    (n && null == i.overlay.combineTokens)
                  ? i.baseCur + " " + i.overlayCur
                  : i.overlayCur
              );
            },
            indent:
              t.indent &&
              function (e, r, n) {
                return t.indent(e.base, r, n);
              },
            electricChars: t.electricChars,
            innerMode: function (e) {
              return { state: e.base, mode: t };
            },
            blankLine: function (e) {
              var i, o;
              return (
                t.blankLine && (i = t.blankLine(e.base)),
                r.blankLine && (o = r.blankLine(e.overlay)),
                null == o ? i : n && null != i ? i + " " + o : o
              );
            }
          };
        };
      })(r(0));
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        e.defineMode("coffeescript", function (e, t) {
          var r = "error";
          function n(e) {
            return new RegExp("^((" + e.join(")|(") + "))\\b");
          }
          var i =
              /^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/,
            o = /^(?:[()\[\]{},:`=;]|\.\.?\.?)/,
            a = /^[_A-Za-z$][_A-Za-z$0-9]*/,
            l = /^@[_A-Za-z$][_A-Za-z$0-9]*/,
            s = n([
              "and",
              "or",
              "not",
              "is",
              "isnt",
              "in",
              "instanceof",
              "typeof"
            ]),
            c = [
              "for",
              "while",
              "loop",
              "if",
              "unless",
              "else",
              "switch",
              "try",
              "catch",
              "finally",
              "class"
            ],
            u = n(
              c.concat([
                "break",
                "by",
                "continue",
                "debugger",
                "delete",
                "do",
                "in",
                "of",
                "new",
                "return",
                "then",
                "this",
                "@",
                "throw",
                "when",
                "until",
                "extends"
              ])
            );
          c = n(c);
          var d = /^('{3}|\"{3}|['\"])/,
            p = /^(\/{3}|\/)/,
            f = n([
              "Infinity",
              "NaN",
              "undefined",
              "null",
              "true",
              "false",
              "on",
              "off",
              "yes",
              "no"
            ]);
          function m(e, t) {
            if (e.sol()) {
              null === t.scope.align && (t.scope.align = !1);
              var n = t.scope.offset;
              if (e.eatSpace()) {
                var c = e.indentation();
                return c > n && "coffee" == t.scope.type
                  ? "indent"
                  : c < n
                  ? "dedent"
                  : null;
              }
              n > 0 && b(e, t);
            }
            if (e.eatSpace()) return null;
            var m = e.peek();
            if (e.match("####")) return e.skipToEnd(), "comment";
            if (e.match("###")) return (t.tokenize = g), t.tokenize(e, t);
            if ("#" === m) return e.skipToEnd(), "comment";
            if (e.match(/^-?[0-9\.]/, !1)) {
              var v = !1;
              if (
                (e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i) && (v = !0),
                e.match(/^-?\d+\.\d*/) && (v = !0),
                e.match(/^-?\.\d+/) && (v = !0),
                v)
              )
                return "." == e.peek() && e.backUp(1), "number";
              var y = !1;
              if (
                (e.match(/^-?0x[0-9a-f]+/i) && (y = !0),
                e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/) && (y = !0),
                e.match(/^-?0(?![\dx])/i) && (y = !0),
                y)
              )
                return "number";
            }
            if (e.match(d))
              return (
                (t.tokenize = h(e.current(), !1, "string")), t.tokenize(e, t)
              );
            if (e.match(p)) {
              if ("/" != e.current() || e.match(/^.*\//, !1))
                return (
                  (t.tokenize = h(e.current(), !0, "string-2")),
                  t.tokenize(e, t)
                );
              e.backUp(1);
            }
            return e.match(i) || e.match(s)
              ? "operator"
              : e.match(o)
              ? "punctuation"
              : e.match(f)
              ? "atom"
              : e.match(l) || (t.prop && e.match(a))
              ? "property"
              : e.match(u)
              ? "keyword"
              : e.match(a)
              ? "variable"
              : (e.next(), r);
          }
          function h(e, n, i) {
            return function (o, a) {
              for (; !o.eol(); )
                if ((o.eatWhile(/[^'"\/\\]/), o.eat("\\"))) {
                  if ((o.next(), n && o.eol())) return i;
                } else {
                  if (o.match(e)) return (a.tokenize = m), i;
                  o.eat(/['"\/]/);
                }
              return (
                n && (t.singleLineStringErrors ? (i = r) : (a.tokenize = m)), i
              );
            };
          }
          function g(e, t) {
            for (; !e.eol(); ) {
              if ((e.eatWhile(/[^#]/), e.match("###"))) {
                t.tokenize = m;
                break;
              }
              e.eatWhile("#");
            }
            return "comment";
          }
          function v(t, r, n) {
            n = n || "coffee";
            for (var i = 0, o = !1, a = null, l = r.scope; l; l = l.prev)
              if ("coffee" === l.type || "}" == l.type) {
                i = l.offset + e.indentUnit;
                break;
              }
            "coffee" !== n
              ? ((o = null), (a = t.column() + t.current().length))
              : r.scope.align && (r.scope.align = !1),
              (r.scope = {
                offset: i,
                type: n,
                prev: r.scope,
                align: o,
                alignOffset: a
              });
          }
          function b(e, t) {
            if (t.scope.prev) {
              if ("coffee" === t.scope.type) {
                for (
                  var r = e.indentation(), n = !1, i = t.scope;
                  i;
                  i = i.prev
                )
                  if (r === i.offset) {
                    n = !0;
                    break;
                  }
                if (!n) return !0;
                for (; t.scope.prev && t.scope.offset !== r; )
                  t.scope = t.scope.prev;
                return !1;
              }
              return (t.scope = t.scope.prev), !1;
            }
          }
          var y = {
            startState: function (e) {
              return {
                tokenize: m,
                scope: {
                  offset: e || 0,
                  type: "coffee",
                  prev: null,
                  align: !1
                },
                prop: !1,
                dedent: 0
              };
            },
            token: function (e, t) {
              var n = null === t.scope.align && t.scope;
              n && e.sol() && (n.align = !1);
              var i = (function (e, t) {
                var n = t.tokenize(e, t),
                  i = e.current();
                "return" === i && (t.dedent = !0),
                  ((("->" === i || "=>" === i) && e.eol()) || "indent" === n) &&
                    v(e, t);
                var o = "[({".indexOf(i);
                if (
                  (-1 !== o && v(e, t, "])}".slice(o, o + 1)),
                  c.exec(i) && v(e, t),
                  "then" == i && b(e, t),
                  "dedent" === n && b(e, t))
                )
                  return r;
                if (-1 !== (o = "])}".indexOf(i))) {
                  for (; "coffee" == t.scope.type && t.scope.prev; )
                    t.scope = t.scope.prev;
                  t.scope.type == i && (t.scope = t.scope.prev);
                }
                return (
                  t.dedent &&
                    e.eol() &&
                    ("coffee" == t.scope.type &&
                      t.scope.prev &&
                      (t.scope = t.scope.prev),
                    (t.dedent = !1)),
                  n
                );
              })(e, t);
              return (
                i &&
                  "comment" != i &&
                  (n && (n.align = !0),
                  (t.prop = "punctuation" == i && "." == e.current())),
                i
              );
            },
            indent: function (e, t) {
              if (e.tokenize != m) return 0;
              var r = e.scope,
                n = t && "])}".indexOf(t.charAt(0)) > -1;
              if (n) for (; "coffee" == r.type && r.prev; ) r = r.prev;
              var i = n && r.type === t.charAt(0);
              return r.align
                ? r.alignOffset - (i ? 1 : 0)
                : (i ? r.prev : r).offset;
            },
            lineComment: "#",
            fold: "indent"
          };
          return y;
        }),
          e.defineMIME("application/vnd.coffeescript", "coffeescript"),
          e.defineMIME("text/x-coffeescript", "coffeescript"),
          e.defineMIME("text/coffeescript", "coffeescript");
      })(r(0));
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        e.defineMode("stylus", function (e) {
          for (
            var f,
              g,
              v,
              b,
              y = e.indentUnit,
              x = "",
              k = h(t),
              w = /^(a|b|i|s|col|em)$/i,
              _ = h(o),
              C = h(a),
              S = h(c),
              M = h(s),
              L = h(r),
              T = m(r),
              z = h(i),
              A = h(n),
              D = h(l),
              E = /^\s*([.]{2,3}|&&|\|\||\*\*|[?!=:]?=|[-+*\/%<>]=?|\?:|\~)/,
              F = m(u),
              N = h(d),
              O = new RegExp(/^\-(moz|ms|o|webkit)-/i),
              q = h(p),
              I = "",
              P = {};
            x.length < y;

          )
            x += " ";
          function j(e, t) {
            for (var r, n = !1; null != (r = e.next()); ) {
              if (n && "/" == r) {
                t.tokenize = null;
                break;
              }
              n = "*" == r;
            }
            return ["comment", "comment"];
          }
          function B(e) {
            return function (t, r) {
              for (var n, i = !1; null != (n = t.next()); ) {
                if (n == e && !i) {
                  ")" == e && t.backUp(1);
                  break;
                }
                i = !i && "\\" == n;
              }
              return (
                (n == e || (!i && ")" != e)) && (r.tokenize = null),
                ["string", "string"]
              );
            };
          }
          function W(e, t) {
            return (
              e.next(),
              e.match(/\s*[\"\')]/, !1)
                ? (t.tokenize = null)
                : (t.tokenize = B(")")),
              [null, "("]
            );
          }
          function R(e, t, r, n) {
            (this.type = e),
              (this.indent = t),
              (this.prev = r),
              (this.line = n || { firstWord: "", indent: 0 });
          }
          function H(e, t, r, n) {
            return (
              (n = n >= 0 ? n : y),
              (e.context = new R(r, t.indentation() + n, e.context)),
              r
            );
          }
          function $(e, t) {
            var r = e.context.indent - y;
            return (
              (t = t || !1),
              (e.context = e.context.prev),
              t && (e.context.indent = r),
              e.context.type
            );
          }
          function U(e, t, r, n) {
            for (var i = n || 1; i > 0; i--) r.context = r.context.prev;
            return (function (e, t, r) {
              return P[r.context.type](e, t, r);
            })(e, t, r);
          }
          function V(e) {
            return e.toLowerCase() in k;
          }
          function K(e) {
            return (e = e.toLowerCase()) in _ || e in D;
          }
          function G(e) {
            return e.toLowerCase() in N;
          }
          function X(e) {
            return e.toLowerCase().match(O);
          }
          function Z(e) {
            var t = e.toLowerCase(),
              r = "variable-2";
            return (
              V(e)
                ? (r = "tag")
                : G(e)
                ? (r = "block-keyword")
                : K(e)
                ? (r = "property")
                : t in S || t in q
                ? (r = "atom")
                : "return" == t || t in M
                ? (r = "keyword")
                : e.match(/^[A-Z]/) && (r = "string"),
              r
            );
          }
          function Y(e, t) {
            return (
              (te(t) &&
                ("{" == e || "]" == e || "hash" == e || "qualifier" == e)) ||
              "block-mixin" == e
            );
          }
          function Q(e, t) {
            return "{" == e && t.match(/^\s*\$?[\w-]+/i, !1);
          }
          function J(e, t) {
            return ":" == e && t.match(/^[a-z-]+/, !1);
          }
          function ee(e) {
            return (
              e.sol() ||
              e.string.match(
                new RegExp(
                  "^\\s*" +
                    e.current().replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
                )
              )
            );
          }
          function te(e) {
            return e.eol() || e.match(/^\s*$/, !1);
          }
          function re(e) {
            var t = /^\s*[-_]*[a-z0-9]+[\w-]*/i,
              r = "string" == typeof e ? e.match(t) : e.string.match(t);
            return r ? r[0].replace(/^\s*/, "") : "";
          }
          return (
            (P.block = function (e, t, r) {
              if (
                ("comment" == e && ee(t)) ||
                ("," == e && te(t)) ||
                "mixin" == e
              )
                return H(r, t, "block", 0);
              if (Q(e, t)) return H(r, t, "interpolation");
              if (
                te(t) &&
                "]" == e &&
                !/^\s*(\.|#|:|\[|\*|&)/.test(t.string) &&
                !V(re(t))
              )
                return H(r, t, "block", 0);
              if (Y(e, t)) return H(r, t, "block");
              if ("}" == e && te(t)) return H(r, t, "block", 0);
              if ("variable-name" == e)
                return t.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/) || G(re(t))
                  ? H(r, t, "variableName")
                  : H(r, t, "variableName", 0);
              if ("=" == e)
                return te(t) || G(re(t))
                  ? H(r, t, "block")
                  : H(r, t, "block", 0);
              if ("*" == e && (te(t) || t.match(/\s*(,|\.|#|\[|:|{)/, !1)))
                return (b = "tag"), H(r, t, "block");
              if (J(e, t)) return H(r, t, "pseudo");
              if (/@(font-face|media|supports|(-moz-)?document)/.test(e))
                return H(r, t, te(t) ? "block" : "atBlock");
              if (/@(-(moz|ms|o|webkit)-)?keyframes$/.test(e))
                return H(r, t, "keyframes");
              if (/@extends?/.test(e)) return H(r, t, "extend", 0);
              if (e && "@" == e.charAt(0))
                return t.indentation() > 0 && K(t.current().slice(1))
                  ? ((b = "variable-2"), "block")
                  : /(@import|@require|@charset)/.test(e)
                  ? H(r, t, "block", 0)
                  : H(r, t, "block");
              if ("reference" == e && te(t)) return H(r, t, "block");
              if ("(" == e) return H(r, t, "parens");
              if ("vendor-prefixes" == e) return H(r, t, "vendorPrefixes");
              if ("word" == e) {
                var n = t.current();
                if ("property" == (b = Z(n)))
                  return ee(t) ? H(r, t, "block", 0) : ((b = "atom"), "block");
                if ("tag" == b) {
                  if (/embed|menu|pre|progress|sub|table/.test(n) && K(re(t)))
                    return (b = "atom"), "block";
                  if (
                    t.string.match(
                      new RegExp("\\[\\s*" + n + "|" + n + "\\s*\\]")
                    )
                  )
                    return (b = "atom"), "block";
                  if (
                    w.test(n) &&
                    ((ee(t) && t.string.match(/=/)) ||
                      (!ee(t) &&
                        !t.string.match(/^(\s*\.|#|\&|\[|\/|>|\*)/) &&
                        !V(re(t))))
                  )
                    return (
                      (b = "variable-2"),
                      G(re(t)) ? "block" : H(r, t, "block", 0)
                    );
                  if (te(t)) return H(r, t, "block");
                }
                if ("block-keyword" == b)
                  return (
                    (b = "keyword"),
                    t.current(/(if|unless)/) && !ee(t)
                      ? "block"
                      : H(r, t, "block")
                  );
                if ("return" == n) return H(r, t, "block", 0);
                if (
                  "variable-2" == b &&
                  t.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/)
                )
                  return H(r, t, "block");
              }
              return r.context.type;
            }),
            (P.parens = function (e, t, r) {
              if ("(" == e) return H(r, t, "parens");
              if (")" == e)
                return "parens" == r.context.prev.type
                  ? $(r)
                  : (t.string.match(/^[a-z][\w-]*\(/i) && te(t)) ||
                    G(re(t)) ||
                    /(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(re(t)) ||
                    (!t.string.match(/^-?[a-z][\w-\.\[\]\'\"]*\s*=/) &&
                      V(re(t)))
                  ? H(r, t, "block")
                  : t.string.match(/^[\$-]?[a-z][\w-\.\[\]\'\"]*\s*=/) ||
                    t.string.match(/^\s*(\(|\)|[0-9])/) ||
                    t.string.match(/^\s+[a-z][\w-]*\(/i) ||
                    t.string.match(/^\s+[\$-]?[a-z]/i)
                  ? H(r, t, "block", 0)
                  : te(t)
                  ? H(r, t, "block")
                  : H(r, t, "block", 0);
              if (
                (e &&
                  "@" == e.charAt(0) &&
                  K(t.current().slice(1)) &&
                  (b = "variable-2"),
                "word" == e)
              ) {
                var n = t.current();
                "tag" == (b = Z(n)) && w.test(n) && (b = "variable-2"),
                  ("property" != b && "to" != n) || (b = "atom");
              }
              return "variable-name" == e
                ? H(r, t, "variableName")
                : J(e, t)
                ? H(r, t, "pseudo")
                : r.context.type;
            }),
            (P.vendorPrefixes = function (e, t, r) {
              return "word" == e
                ? ((b = "property"), H(r, t, "block", 0))
                : $(r);
            }),
            (P.pseudo = function (e, t, r) {
              return K(re(t.string))
                ? U(e, t, r)
                : (t.match(/^[a-z-]+/),
                  (b = "variable-3"),
                  te(t) ? H(r, t, "block") : $(r));
            }),
            (P.atBlock = function (e, t, r) {
              if ("(" == e) return H(r, t, "atBlock_parens");
              if (Y(e, t)) return H(r, t, "block");
              if (Q(e, t)) return H(r, t, "interpolation");
              if ("word" == e) {
                var n = t.current().toLowerCase();
                if (
                  "tag" ==
                    (b = /^(only|not|and|or)$/.test(n)
                      ? "keyword"
                      : L.hasOwnProperty(n)
                      ? "tag"
                      : A.hasOwnProperty(n)
                      ? "attribute"
                      : z.hasOwnProperty(n)
                      ? "property"
                      : C.hasOwnProperty(n)
                      ? "string-2"
                      : Z(t.current())) &&
                  te(t)
                )
                  return H(r, t, "block");
              }
              return (
                "operator" == e &&
                  /^(not|and|or)$/.test(t.current()) &&
                  (b = "keyword"),
                r.context.type
              );
            }),
            (P.atBlock_parens = function (e, t, r) {
              if ("{" == e || "}" == e) return r.context.type;
              if (")" == e)
                return te(t) ? H(r, t, "block") : H(r, t, "atBlock");
              if ("word" == e) {
                var n = t.current().toLowerCase();
                return (
                  (b = Z(n)),
                  /^(max|min)/.test(n) && (b = "property"),
                  "tag" == b && (b = w.test(n) ? "variable-2" : "atom"),
                  r.context.type
                );
              }
              return P.atBlock(e, t, r);
            }),
            (P.keyframes = function (e, t, r) {
              return "0" == t.indentation() &&
                (("}" == e && ee(t)) ||
                  "]" == e ||
                  "hash" == e ||
                  "qualifier" == e ||
                  V(t.current()))
                ? U(e, t, r)
                : "{" == e
                ? H(r, t, "keyframes")
                : "}" == e
                ? ee(t)
                  ? $(r, !0)
                  : H(r, t, "keyframes")
                : "unit" == e && /^[0-9]+\%$/.test(t.current())
                ? H(r, t, "keyframes")
                : "word" == e && "block-keyword" == (b = Z(t.current()))
                ? ((b = "keyword"), H(r, t, "keyframes"))
                : /@(font-face|media|supports|(-moz-)?document)/.test(e)
                ? H(r, t, te(t) ? "block" : "atBlock")
                : "mixin" == e
                ? H(r, t, "block", 0)
                : r.context.type;
            }),
            (P.interpolation = function (e, t, r) {
              return (
                "{" == e && $(r) && H(r, t, "block"),
                "}" == e
                  ? t.string.match(/^\s*(\.|#|:|\[|\*|&|>|~|\+|\/)/i) ||
                    (t.string.match(/^\s*[a-z]/i) && V(re(t)))
                    ? H(r, t, "block")
                    : !t.string.match(/^(\{|\s*\&)/) || t.match(/\s*[\w-]/, !1)
                    ? H(r, t, "block", 0)
                    : H(r, t, "block")
                  : "variable-name" == e
                  ? H(r, t, "variableName", 0)
                  : ("word" == e &&
                      "tag" == (b = Z(t.current())) &&
                      (b = "atom"),
                    r.context.type)
              );
            }),
            (P.extend = function (e, t, r) {
              return "[" == e || "=" == e
                ? "extend"
                : "]" == e
                ? $(r)
                : "word" == e
                ? ((b = Z(t.current())), "extend")
                : $(r);
            }),
            (P.variableName = function (e, t, r) {
              return "string" == e ||
                "[" == e ||
                "]" == e ||
                t.current().match(/^(\.|\$)/)
                ? (t.current().match(/^\.[\w-]+/i) && (b = "variable-2"),
                  "variableName")
                : U(e, t, r);
            }),
            {
              startState: function (e) {
                return {
                  tokenize: null,
                  state: "block",
                  context: new R("block", e || 0, null)
                };
              },
              token: function (e, t) {
                return !t.tokenize && e.eatSpace()
                  ? null
                  : ((g = (
                      t.tokenize ||
                      function (e, t) {
                        if (
                          ((I = e.string.match(
                            /(^[\w-]+\s*=\s*$)|(^\s*[\w-]+\s*=\s*[\w-])|(^\s*(\.|#|@|\$|\&|\[|\d|\+|::?|\{|\>|~|\/)?\s*[\w-]*([a-z0-9-]|\*|\/\*)(\(|,)?)/
                          )),
                          (t.context.line.firstWord = I
                            ? I[0].replace(/^\s*/, "")
                            : ""),
                          (t.context.line.indent = e.indentation()),
                          (f = e.peek()),
                          e.match("//"))
                        )
                          return e.skipToEnd(), ["comment", "comment"];
                        if (e.match("/*")) return (t.tokenize = j), j(e, t);
                        if ('"' == f || "'" == f)
                          return (
                            e.next(), (t.tokenize = B(f)), t.tokenize(e, t)
                          );
                        if ("@" == f)
                          return (
                            e.next(),
                            e.eatWhile(/[\w\\-]/),
                            ["def", e.current()]
                          );
                        if ("#" == f) {
                          if (
                            (e.next(),
                            e.match(
                              /^[0-9a-f]{3}([0-9a-f]([0-9a-f]{2}){0,2})?\b/i
                            ))
                          )
                            return ["atom", "atom"];
                          if (e.match(/^[a-z][\w-]*/i))
                            return ["builtin", "hash"];
                        }
                        return e.match(O)
                          ? ["meta", "vendor-prefixes"]
                          : e.match(/^-?[0-9]?\.?[0-9]/)
                          ? (e.eatWhile(/[a-z%]/i), ["number", "unit"])
                          : "!" == f
                          ? (e.next(),
                            [
                              e.match(/^(important|optional)/i)
                                ? "keyword"
                                : "operator",
                              "important"
                            ])
                          : "." == f && e.match(/^\.[a-z][\w-]*/i)
                          ? ["qualifier", "qualifier"]
                          : e.match(T)
                          ? ("(" == e.peek() && (t.tokenize = W),
                            ["property", "word"])
                          : e.match(/^[a-z][\w-]*\(/i)
                          ? (e.backUp(1), ["keyword", "mixin"])
                          : e.match(/^(\+|-)[a-z][\w-]*\(/i)
                          ? (e.backUp(1), ["keyword", "block-mixin"])
                          : e.string.match(/^\s*&/) &&
                            e.match(/^[-_]+[a-z][\w-]*/)
                          ? ["qualifier", "qualifier"]
                          : e.match(/^(\/|&)(-|_|:|\.|#|[a-z])/)
                          ? (e.backUp(1), ["variable-3", "reference"])
                          : e.match(/^&{1}\s*$/)
                          ? ["variable-3", "reference"]
                          : e.match(F)
                          ? ["operator", "operator"]
                          : e.match(/^\$?[-_]*[a-z0-9]+[\w-]*/i)
                          ? e.match(/^(\.|\[)[\w-\'\"\]]+/i, !1) &&
                            !V(e.current())
                            ? (e.match(/\./), ["variable-2", "variable-name"])
                            : ["variable-2", "word"]
                          : e.match(E)
                          ? ["operator", e.current()]
                          : /[:;,{}\[\]\(\)]/.test(f)
                          ? (e.next(), [null, f])
                          : (e.next(), [null, null]);
                      }
                    )(e, t)) &&
                      "object" == typeof g &&
                      ((v = g[1]), (g = g[0])),
                    (b = g),
                    (t.state = P[t.state](v, e, t)),
                    b);
              },
              indent: function (e, t, r) {
                var n = e.context,
                  i = t && t.charAt(0),
                  o = n.indent,
                  a = re(t),
                  l = r.match(/^\s*/)[0].replace(/\t/g, x).length,
                  s = e.context.prev ? e.context.prev.line.firstWord : "",
                  c = e.context.prev ? e.context.prev.line.indent : l;
                return (
                  n.prev &&
                  (("}" == i &&
                    ("block" == n.type ||
                      "atBlock" == n.type ||
                      "keyframes" == n.type)) ||
                    (")" == i &&
                      ("parens" == n.type || "atBlock_parens" == n.type)) ||
                    ("{" == i && "at" == n.type))
                    ? (o = n.indent - y)
                    : /(\})/.test(i) ||
                      (/@|\$|\d/.test(i) ||
                      /^\{/.test(t) ||
                      /^\s*\/(\/|\*)/.test(t) ||
                      /^\s*\/\*/.test(s) ||
                      /^\s*[\w-\.\[\]\'\"]+\s*(\?|:|\+)?=/i.test(t) ||
                      /^(\+|-)?[a-z][\w-]*\(/i.test(t) ||
                      /^return/.test(t) ||
                      G(a)
                        ? (o = l)
                        : /(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(i) || V(a)
                        ? (o = /\,\s*$/.test(s)
                            ? c
                            : /^\s+/.test(r) &&
                              (/(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(s) || V(s))
                            ? l <= c
                              ? c
                              : c + y
                            : l)
                        : /,\s*$/.test(r) ||
                          (!X(a) && !K(a)) ||
                          (o = G(s)
                            ? l <= c
                              ? c
                              : c + y
                            : /^\{/.test(s)
                            ? l <= c
                              ? l
                              : c + y
                            : X(s) || K(s)
                            ? l >= c
                              ? c
                              : l
                            : /^(\.|#|:|\[|\*|&|@|\+|\-|>|~|\/)/.test(s) ||
                              /=\s*$/.test(s) ||
                              V(s) ||
                              /^\$[\w-\.\[\]\'\"]/.test(s)
                            ? c + y
                            : l)),
                  o
                );
              },
              electricChars: "}",
              lineComment: "//",
              fold: "indent"
            }
          );
        });
        var t = [
            "a",
            "abbr",
            "address",
            "area",
            "article",
            "aside",
            "audio",
            "b",
            "base",
            "bdi",
            "bdo",
            "bgsound",
            "blockquote",
            "body",
            "br",
            "button",
            "canvas",
            "caption",
            "cite",
            "code",
            "col",
            "colgroup",
            "data",
            "datalist",
            "dd",
            "del",
            "details",
            "dfn",
            "div",
            "dl",
            "dt",
            "em",
            "embed",
            "fieldset",
            "figcaption",
            "figure",
            "footer",
            "form",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hgroup",
            "hr",
            "html",
            "i",
            "iframe",
            "img",
            "input",
            "ins",
            "kbd",
            "keygen",
            "label",
            "legend",
            "li",
            "link",
            "main",
            "map",
            "mark",
            "marquee",
            "menu",
            "menuitem",
            "meta",
            "meter",
            "nav",
            "nobr",
            "noframes",
            "noscript",
            "object",
            "ol",
            "optgroup",
            "option",
            "output",
            "p",
            "param",
            "pre",
            "progress",
            "q",
            "rp",
            "rt",
            "ruby",
            "s",
            "samp",
            "script",
            "section",
            "select",
            "small",
            "source",
            "span",
            "strong",
            "style",
            "sub",
            "summary",
            "sup",
            "table",
            "tbody",
            "td",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "time",
            "tr",
            "track",
            "u",
            "ul",
            "var",
            "video"
          ],
          r = ["domain", "regexp", "url", "url-prefix"],
          n = [
            "all",
            "aural",
            "braille",
            "handheld",
            "print",
            "projection",
            "screen",
            "tty",
            "tv",
            "embossed"
          ],
          i = [
            "width",
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height",
            "device-width",
            "min-device-width",
            "max-device-width",
            "device-height",
            "min-device-height",
            "max-device-height",
            "aspect-ratio",
            "min-aspect-ratio",
            "max-aspect-ratio",
            "device-aspect-ratio",
            "min-device-aspect-ratio",
            "max-device-aspect-ratio",
            "color",
            "min-color",
            "max-color",
            "color-index",
            "min-color-index",
            "max-color-index",
            "monochrome",
            "min-monochrome",
            "max-monochrome",
            "resolution",
            "min-resolution",
            "max-resolution",
            "scan",
            "grid"
          ],
          o = [
            "align-content",
            "align-items",
            "align-self",
            "alignment-adjust",
            "alignment-baseline",
            "anchor-point",
            "animation",
            "animation-delay",
            "animation-direction",
            "animation-duration",
            "animation-fill-mode",
            "animation-iteration-count",
            "animation-name",
            "animation-play-state",
            "animation-timing-function",
            "appearance",
            "azimuth",
            "backface-visibility",
            "background",
            "background-attachment",
            "background-clip",
            "background-color",
            "background-image",
            "background-origin",
            "background-position",
            "background-repeat",
            "background-size",
            "baseline-shift",
            "binding",
            "bleed",
            "bookmark-label",
            "bookmark-level",
            "bookmark-state",
            "bookmark-target",
            "border",
            "border-bottom",
            "border-bottom-color",
            "border-bottom-left-radius",
            "border-bottom-right-radius",
            "border-bottom-style",
            "border-bottom-width",
            "border-collapse",
            "border-color",
            "border-image",
            "border-image-outset",
            "border-image-repeat",
            "border-image-slice",
            "border-image-source",
            "border-image-width",
            "border-left",
            "border-left-color",
            "border-left-style",
            "border-left-width",
            "border-radius",
            "border-right",
            "border-right-color",
            "border-right-style",
            "border-right-width",
            "border-spacing",
            "border-style",
            "border-top",
            "border-top-color",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-top-style",
            "border-top-width",
            "border-width",
            "bottom",
            "box-decoration-break",
            "box-shadow",
            "box-sizing",
            "break-after",
            "break-before",
            "break-inside",
            "caption-side",
            "clear",
            "clip",
            "color",
            "color-profile",
            "column-count",
            "column-fill",
            "column-gap",
            "column-rule",
            "column-rule-color",
            "column-rule-style",
            "column-rule-width",
            "column-span",
            "column-width",
            "columns",
            "content",
            "counter-increment",
            "counter-reset",
            "crop",
            "cue",
            "cue-after",
            "cue-before",
            "cursor",
            "direction",
            "display",
            "dominant-baseline",
            "drop-initial-after-adjust",
            "drop-initial-after-align",
            "drop-initial-before-adjust",
            "drop-initial-before-align",
            "drop-initial-size",
            "drop-initial-value",
            "elevation",
            "empty-cells",
            "fit",
            "fit-position",
            "flex",
            "flex-basis",
            "flex-direction",
            "flex-flow",
            "flex-grow",
            "flex-shrink",
            "flex-wrap",
            "float",
            "float-offset",
            "flow-from",
            "flow-into",
            "font",
            "font-feature-settings",
            "font-family",
            "font-kerning",
            "font-language-override",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-synthesis",
            "font-variant",
            "font-variant-alternates",
            "font-variant-caps",
            "font-variant-east-asian",
            "font-variant-ligatures",
            "font-variant-numeric",
            "font-variant-position",
            "font-weight",
            "grid",
            "grid-area",
            "grid-auto-columns",
            "grid-auto-flow",
            "grid-auto-position",
            "grid-auto-rows",
            "grid-column",
            "grid-column-end",
            "grid-column-start",
            "grid-row",
            "grid-row-end",
            "grid-row-start",
            "grid-template",
            "grid-template-areas",
            "grid-template-columns",
            "grid-template-rows",
            "hanging-punctuation",
            "height",
            "hyphens",
            "icon",
            "image-orientation",
            "image-rendering",
            "image-resolution",
            "inline-box-align",
            "justify-content",
            "left",
            "letter-spacing",
            "line-break",
            "line-height",
            "line-stacking",
            "line-stacking-ruby",
            "line-stacking-shift",
            "line-stacking-strategy",
            "list-style",
            "list-style-image",
            "list-style-position",
            "list-style-type",
            "margin",
            "margin-bottom",
            "margin-left",
            "margin-right",
            "margin-top",
            "marker-offset",
            "marks",
            "marquee-direction",
            "marquee-loop",
            "marquee-play-count",
            "marquee-speed",
            "marquee-style",
            "max-height",
            "max-width",
            "min-height",
            "min-width",
            "move-to",
            "nav-down",
            "nav-index",
            "nav-left",
            "nav-right",
            "nav-up",
            "object-fit",
            "object-position",
            "opacity",
            "order",
            "orphans",
            "outline",
            "outline-color",
            "outline-offset",
            "outline-style",
            "outline-width",
            "overflow",
            "overflow-style",
            "overflow-wrap",
            "overflow-x",
            "overflow-y",
            "padding",
            "padding-bottom",
            "padding-left",
            "padding-right",
            "padding-top",
            "page",
            "page-break-after",
            "page-break-before",
            "page-break-inside",
            "page-policy",
            "pause",
            "pause-after",
            "pause-before",
            "perspective",
            "perspective-origin",
            "pitch",
            "pitch-range",
            "play-during",
            "position",
            "presentation-level",
            "punctuation-trim",
            "quotes",
            "region-break-after",
            "region-break-before",
            "region-break-inside",
            "region-fragment",
            "rendering-intent",
            "resize",
            "rest",
            "rest-after",
            "rest-before",
            "richness",
            "right",
            "rotation",
            "rotation-point",
            "ruby-align",
            "ruby-overhang",
            "ruby-position",
            "ruby-span",
            "shape-image-threshold",
            "shape-inside",
            "shape-margin",
            "shape-outside",
            "size",
            "speak",
            "speak-as",
            "speak-header",
            "speak-numeral",
            "speak-punctuation",
            "speech-rate",
            "stress",
            "string-set",
            "tab-size",
            "table-layout",
            "target",
            "target-name",
            "target-new",
            "target-position",
            "text-align",
            "text-align-last",
            "text-decoration",
            "text-decoration-color",
            "text-decoration-line",
            "text-decoration-skip",
            "text-decoration-style",
            "text-emphasis",
            "text-emphasis-color",
            "text-emphasis-position",
            "text-emphasis-style",
            "text-height",
            "text-indent",
            "text-justify",
            "text-outline",
            "text-overflow",
            "text-shadow",
            "text-size-adjust",
            "text-space-collapse",
            "text-transform",
            "text-underline-position",
            "text-wrap",
            "top",
            "transform",
            "transform-origin",
            "transform-style",
            "transition",
            "transition-delay",
            "transition-duration",
            "transition-property",
            "transition-timing-function",
            "unicode-bidi",
            "vertical-align",
            "visibility",
            "voice-balance",
            "voice-duration",
            "voice-family",
            "voice-pitch",
            "voice-range",
            "voice-rate",
            "voice-stress",
            "voice-volume",
            "volume",
            "white-space",
            "widows",
            "width",
            "will-change",
            "word-break",
            "word-spacing",
            "word-wrap",
            "z-index",
            "clip-path",
            "clip-rule",
            "mask",
            "enable-background",
            "filter",
            "flood-color",
            "flood-opacity",
            "lighting-color",
            "stop-color",
            "stop-opacity",
            "pointer-events",
            "color-interpolation",
            "color-interpolation-filters",
            "color-rendering",
            "fill",
            "fill-opacity",
            "fill-rule",
            "image-rendering",
            "marker",
            "marker-end",
            "marker-mid",
            "marker-start",
            "shape-rendering",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "text-rendering",
            "baseline-shift",
            "dominant-baseline",
            "glyph-orientation-horizontal",
            "glyph-orientation-vertical",
            "text-anchor",
            "writing-mode",
            "font-smoothing",
            "osx-font-smoothing"
          ],
          a = [
            "scrollbar-arrow-color",
            "scrollbar-base-color",
            "scrollbar-dark-shadow-color",
            "scrollbar-face-color",
            "scrollbar-highlight-color",
            "scrollbar-shadow-color",
            "scrollbar-3d-light-color",
            "scrollbar-track-color",
            "shape-inside",
            "searchfield-cancel-button",
            "searchfield-decoration",
            "searchfield-results-button",
            "searchfield-results-decoration",
            "zoom"
          ],
          l = [
            "font-family",
            "src",
            "unicode-range",
            "font-variant",
            "font-feature-settings",
            "font-stretch",
            "font-weight",
            "font-style"
          ],
          s = [
            "aliceblue",
            "antiquewhite",
            "aqua",
            "aquamarine",
            "azure",
            "beige",
            "bisque",
            "black",
            "blanchedalmond",
            "blue",
            "blueviolet",
            "brown",
            "burlywood",
            "cadetblue",
            "chartreuse",
            "chocolate",
            "coral",
            "cornflowerblue",
            "cornsilk",
            "crimson",
            "cyan",
            "darkblue",
            "darkcyan",
            "darkgoldenrod",
            "darkgray",
            "darkgreen",
            "darkkhaki",
            "darkmagenta",
            "darkolivegreen",
            "darkorange",
            "darkorchid",
            "darkred",
            "darksalmon",
            "darkseagreen",
            "darkslateblue",
            "darkslategray",
            "darkturquoise",
            "darkviolet",
            "deeppink",
            "deepskyblue",
            "dimgray",
            "dodgerblue",
            "firebrick",
            "floralwhite",
            "forestgreen",
            "fuchsia",
            "gainsboro",
            "ghostwhite",
            "gold",
            "goldenrod",
            "gray",
            "grey",
            "green",
            "greenyellow",
            "honeydew",
            "hotpink",
            "indianred",
            "indigo",
            "ivory",
            "khaki",
            "lavender",
            "lavenderblush",
            "lawngreen",
            "lemonchiffon",
            "lightblue",
            "lightcoral",
            "lightcyan",
            "lightgoldenrodyellow",
            "lightgray",
            "lightgreen",
            "lightpink",
            "lightsalmon",
            "lightseagreen",
            "lightskyblue",
            "lightslategray",
            "lightsteelblue",
            "lightyellow",
            "lime",
            "limegreen",
            "linen",
            "magenta",
            "maroon",
            "mediumaquamarine",
            "mediumblue",
            "mediumorchid",
            "mediumpurple",
            "mediumseagreen",
            "mediumslateblue",
            "mediumspringgreen",
            "mediumturquoise",
            "mediumvioletred",
            "midnightblue",
            "mintcream",
            "mistyrose",
            "moccasin",
            "navajowhite",
            "navy",
            "oldlace",
            "olive",
            "olivedrab",
            "orange",
            "orangered",
            "orchid",
            "palegoldenrod",
            "palegreen",
            "paleturquoise",
            "palevioletred",
            "papayawhip",
            "peachpuff",
            "peru",
            "pink",
            "plum",
            "powderblue",
            "purple",
            "rebeccapurple",
            "red",
            "rosybrown",
            "royalblue",
            "saddlebrown",
            "salmon",
            "sandybrown",
            "seagreen",
            "seashell",
            "sienna",
            "silver",
            "skyblue",
            "slateblue",
            "slategray",
            "snow",
            "springgreen",
            "steelblue",
            "tan",
            "teal",
            "thistle",
            "tomato",
            "turquoise",
            "violet",
            "wheat",
            "white",
            "whitesmoke",
            "yellow",
            "yellowgreen"
          ],
          c = [
            "above",
            "absolute",
            "activeborder",
            "additive",
            "activecaption",
            "afar",
            "after-white-space",
            "ahead",
            "alias",
            "all",
            "all-scroll",
            "alphabetic",
            "alternate",
            "always",
            "amharic",
            "amharic-abegede",
            "antialiased",
            "appworkspace",
            "arabic-indic",
            "armenian",
            "asterisks",
            "attr",
            "auto",
            "avoid",
            "avoid-column",
            "avoid-page",
            "avoid-region",
            "background",
            "backwards",
            "baseline",
            "below",
            "bidi-override",
            "binary",
            "bengali",
            "blink",
            "block",
            "block-axis",
            "bold",
            "bolder",
            "border",
            "border-box",
            "both",
            "bottom",
            "break",
            "break-all",
            "break-word",
            "bullets",
            "button",
            "button-bevel",
            "buttonface",
            "buttonhighlight",
            "buttonshadow",
            "buttontext",
            "calc",
            "cambodian",
            "capitalize",
            "caps-lock-indicator",
            "caption",
            "captiontext",
            "caret",
            "cell",
            "center",
            "checkbox",
            "circle",
            "cjk-decimal",
            "cjk-earthly-branch",
            "cjk-heavenly-stem",
            "cjk-ideographic",
            "clear",
            "clip",
            "close-quote",
            "col-resize",
            "collapse",
            "column",
            "compact",
            "condensed",
            "contain",
            "content",
            "contents",
            "content-box",
            "context-menu",
            "continuous",
            "copy",
            "counter",
            "counters",
            "cover",
            "crop",
            "cross",
            "crosshair",
            "currentcolor",
            "cursive",
            "cyclic",
            "dashed",
            "decimal",
            "decimal-leading-zero",
            "default",
            "default-button",
            "destination-atop",
            "destination-in",
            "destination-out",
            "destination-over",
            "devanagari",
            "disc",
            "discard",
            "disclosure-closed",
            "disclosure-open",
            "document",
            "dot-dash",
            "dot-dot-dash",
            "dotted",
            "double",
            "down",
            "e-resize",
            "ease",
            "ease-in",
            "ease-in-out",
            "ease-out",
            "element",
            "ellipse",
            "ellipsis",
            "embed",
            "end",
            "ethiopic",
            "ethiopic-abegede",
            "ethiopic-abegede-am-et",
            "ethiopic-abegede-gez",
            "ethiopic-abegede-ti-er",
            "ethiopic-abegede-ti-et",
            "ethiopic-halehame-aa-er",
            "ethiopic-halehame-aa-et",
            "ethiopic-halehame-am-et",
            "ethiopic-halehame-gez",
            "ethiopic-halehame-om-et",
            "ethiopic-halehame-sid-et",
            "ethiopic-halehame-so-et",
            "ethiopic-halehame-ti-er",
            "ethiopic-halehame-ti-et",
            "ethiopic-halehame-tig",
            "ethiopic-numeric",
            "ew-resize",
            "expanded",
            "extends",
            "extra-condensed",
            "extra-expanded",
            "fantasy",
            "fast",
            "fill",
            "fixed",
            "flat",
            "flex",
            "footnotes",
            "forwards",
            "from",
            "geometricPrecision",
            "georgian",
            "graytext",
            "groove",
            "gujarati",
            "gurmukhi",
            "hand",
            "hangul",
            "hangul-consonant",
            "hebrew",
            "help",
            "hidden",
            "hide",
            "higher",
            "highlight",
            "highlighttext",
            "hiragana",
            "hiragana-iroha",
            "horizontal",
            "hsl",
            "hsla",
            "icon",
            "ignore",
            "inactiveborder",
            "inactivecaption",
            "inactivecaptiontext",
            "infinite",
            "infobackground",
            "infotext",
            "inherit",
            "initial",
            "inline",
            "inline-axis",
            "inline-block",
            "inline-flex",
            "inline-table",
            "inset",
            "inside",
            "intrinsic",
            "invert",
            "italic",
            "japanese-formal",
            "japanese-informal",
            "justify",
            "kannada",
            "katakana",
            "katakana-iroha",
            "keep-all",
            "khmer",
            "korean-hangul-formal",
            "korean-hanja-formal",
            "korean-hanja-informal",
            "landscape",
            "lao",
            "large",
            "larger",
            "left",
            "level",
            "lighter",
            "line-through",
            "linear",
            "linear-gradient",
            "lines",
            "list-item",
            "listbox",
            "listitem",
            "local",
            "logical",
            "loud",
            "lower",
            "lower-alpha",
            "lower-armenian",
            "lower-greek",
            "lower-hexadecimal",
            "lower-latin",
            "lower-norwegian",
            "lower-roman",
            "lowercase",
            "ltr",
            "malayalam",
            "match",
            "matrix",
            "matrix3d",
            "media-controls-background",
            "media-current-time-display",
            "media-fullscreen-button",
            "media-mute-button",
            "media-play-button",
            "media-return-to-realtime-button",
            "media-rewind-button",
            "media-seek-back-button",
            "media-seek-forward-button",
            "media-slider",
            "media-sliderthumb",
            "media-time-remaining-display",
            "media-volume-slider",
            "media-volume-slider-container",
            "media-volume-sliderthumb",
            "medium",
            "menu",
            "menulist",
            "menulist-button",
            "menulist-text",
            "menulist-textfield",
            "menutext",
            "message-box",
            "middle",
            "min-intrinsic",
            "mix",
            "mongolian",
            "monospace",
            "move",
            "multiple",
            "myanmar",
            "n-resize",
            "narrower",
            "ne-resize",
            "nesw-resize",
            "no-close-quote",
            "no-drop",
            "no-open-quote",
            "no-repeat",
            "none",
            "normal",
            "not-allowed",
            "nowrap",
            "ns-resize",
            "numbers",
            "numeric",
            "nw-resize",
            "nwse-resize",
            "oblique",
            "octal",
            "open-quote",
            "optimizeLegibility",
            "optimizeSpeed",
            "oriya",
            "oromo",
            "outset",
            "outside",
            "outside-shape",
            "overlay",
            "overline",
            "padding",
            "padding-box",
            "painted",
            "page",
            "paused",
            "persian",
            "perspective",
            "plus-darker",
            "plus-lighter",
            "pointer",
            "polygon",
            "portrait",
            "pre",
            "pre-line",
            "pre-wrap",
            "preserve-3d",
            "progress",
            "push-button",
            "radial-gradient",
            "radio",
            "read-only",
            "read-write",
            "read-write-plaintext-only",
            "rectangle",
            "region",
            "relative",
            "repeat",
            "repeating-linear-gradient",
            "repeating-radial-gradient",
            "repeat-x",
            "repeat-y",
            "reset",
            "reverse",
            "rgb",
            "rgba",
            "ridge",
            "right",
            "rotate",
            "rotate3d",
            "rotateX",
            "rotateY",
            "rotateZ",
            "round",
            "row-resize",
            "rtl",
            "run-in",
            "running",
            "s-resize",
            "sans-serif",
            "scale",
            "scale3d",
            "scaleX",
            "scaleY",
            "scaleZ",
            "scroll",
            "scrollbar",
            "scroll-position",
            "se-resize",
            "searchfield",
            "searchfield-cancel-button",
            "searchfield-decoration",
            "searchfield-results-button",
            "searchfield-results-decoration",
            "semi-condensed",
            "semi-expanded",
            "separate",
            "serif",
            "show",
            "sidama",
            "simp-chinese-formal",
            "simp-chinese-informal",
            "single",
            "skew",
            "skewX",
            "skewY",
            "skip-white-space",
            "slide",
            "slider-horizontal",
            "slider-vertical",
            "sliderthumb-horizontal",
            "sliderthumb-vertical",
            "slow",
            "small",
            "small-caps",
            "small-caption",
            "smaller",
            "solid",
            "somali",
            "source-atop",
            "source-in",
            "source-out",
            "source-over",
            "space",
            "spell-out",
            "square",
            "square-button",
            "start",
            "static",
            "status-bar",
            "stretch",
            "stroke",
            "sub",
            "subpixel-antialiased",
            "super",
            "sw-resize",
            "symbolic",
            "symbols",
            "table",
            "table-caption",
            "table-cell",
            "table-column",
            "table-column-group",
            "table-footer-group",
            "table-header-group",
            "table-row",
            "table-row-group",
            "tamil",
            "telugu",
            "text",
            "text-bottom",
            "text-top",
            "textarea",
            "textfield",
            "thai",
            "thick",
            "thin",
            "threeddarkshadow",
            "threedface",
            "threedhighlight",
            "threedlightshadow",
            "threedshadow",
            "tibetan",
            "tigre",
            "tigrinya-er",
            "tigrinya-er-abegede",
            "tigrinya-et",
            "tigrinya-et-abegede",
            "to",
            "top",
            "trad-chinese-formal",
            "trad-chinese-informal",
            "translate",
            "translate3d",
            "translateX",
            "translateY",
            "translateZ",
            "transparent",
            "ultra-condensed",
            "ultra-expanded",
            "underline",
            "up",
            "upper-alpha",
            "upper-armenian",
            "upper-greek",
            "upper-hexadecimal",
            "upper-latin",
            "upper-norwegian",
            "upper-roman",
            "uppercase",
            "urdu",
            "url",
            "var",
            "vertical",
            "vertical-text",
            "visible",
            "visibleFill",
            "visiblePainted",
            "visibleStroke",
            "visual",
            "w-resize",
            "wait",
            "wave",
            "wider",
            "window",
            "windowframe",
            "windowtext",
            "words",
            "x-large",
            "x-small",
            "xor",
            "xx-large",
            "xx-small",
            "bicubic",
            "optimizespeed",
            "grayscale",
            "row",
            "row-reverse",
            "wrap",
            "wrap-reverse",
            "column-reverse",
            "flex-start",
            "flex-end",
            "space-between",
            "space-around",
            "unset"
          ],
          u = [
            "in",
            "and",
            "or",
            "not",
            "is not",
            "is a",
            "is",
            "isnt",
            "defined",
            "if unless"
          ],
          d = ["for", "if", "else", "unless", "from", "to"],
          p = [
            "null",
            "true",
            "false",
            "href",
            "title",
            "type",
            "not-allowed",
            "readonly",
            "disabled"
          ],
          f = t.concat(r, n, i, o, a, s, c, l, u, d, p, [
            "@font-face",
            "@keyframes",
            "@media",
            "@viewport",
            "@page",
            "@host",
            "@supports",
            "@block",
            "@css"
          ]);
        function m(e) {
          return (
            (e = e.sort(function (e, t) {
              return t > e;
            })),
            new RegExp("^((" + e.join(")|(") + "))\\b")
          );
        }
        function h(e) {
          for (var t = {}, r = 0; r < e.length; ++r) t[e[r]] = !0;
          return t;
        }
        e.registerHelper("hintWords", "stylus", f),
          e.defineMIME("text/x-styl", "stylus");
      })(r(0));
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        e.defineMode(
          "pug",
          function (t) {
            var r = "keyword",
              n = "meta",
              i = "builtin",
              o = "qualifier",
              a = { "{": "}", "(": ")", "[": "]" },
              l = e.getMode(t, "javascript");
            function s() {
              (this.javaScriptLine = !1),
                (this.javaScriptLineExcludesColon = !1),
                (this.javaScriptArguments = !1),
                (this.javaScriptArgumentsDepth = 0),
                (this.isInterpolating = !1),
                (this.interpolationNesting = 0),
                (this.jsState = e.startState(l)),
                (this.restOfLine = ""),
                (this.isIncludeFiltered = !1),
                (this.isEach = !1),
                (this.lastTag = ""),
                (this.scriptType = ""),
                (this.isAttrs = !1),
                (this.attrsNest = []),
                (this.inAttributeName = !0),
                (this.attributeIsType = !1),
                (this.attrValue = ""),
                (this.indentOf = 1 / 0),
                (this.indentToken = ""),
                (this.innerMode = null),
                (this.innerState = null),
                (this.innerModeForLine = !1);
            }
            function c(e, t) {
              if (e.match("#{"))
                return (
                  (t.isInterpolating = !0),
                  (t.interpolationNesting = 0),
                  "punctuation"
                );
            }
            function u(r, n) {
              var i;
              if (r.match(/^:([\w\-]+)/))
                return (
                  t &&
                    t.innerModes &&
                    (i = t.innerModes(r.current().substring(1))),
                  i || (i = r.current().substring(1)),
                  "string" == typeof i && (i = e.getMode(t, i)),
                  d(r, n, i),
                  "atom"
                );
            }
            function d(r, n, i) {
              (i = e.mimeModes[i] || i),
                (i = (t.innerModes && t.innerModes(i)) || i),
                (i = e.mimeModes[i] || i),
                (i = e.getMode(t, i)),
                (n.indentOf = r.indentation()),
                i && "null" !== i.name
                  ? (n.innerMode = i)
                  : (n.indentToken = "string");
            }
            function p(t, r, n) {
              if (
                t.indentation() > r.indentOf ||
                (r.innerModeForLine && !t.sol()) ||
                n
              )
                return r.innerMode
                  ? (r.innerState ||
                      (r.innerState = r.innerMode.startState
                        ? e.startState(r.innerMode, t.indentation())
                        : {}),
                    t.hideFirstChars(r.indentOf + 2, function () {
                      return r.innerMode.token(t, r.innerState) || !0;
                    }))
                  : (t.skipToEnd(), r.indentToken);
              t.sol() &&
                ((r.indentOf = 1 / 0),
                (r.indentToken = null),
                (r.innerMode = null),
                (r.innerState = null));
            }
            return (
              (s.prototype.copy = function () {
                var t = new s();
                return (
                  (t.javaScriptLine = this.javaScriptLine),
                  (t.javaScriptLineExcludesColon =
                    this.javaScriptLineExcludesColon),
                  (t.javaScriptArguments = this.javaScriptArguments),
                  (t.javaScriptArgumentsDepth = this.javaScriptArgumentsDepth),
                  (t.isInterpolating = this.isInterpolating),
                  (t.interpolationNesting = this.interpolationNesting),
                  (t.jsState = e.copyState(l, this.jsState)),
                  (t.innerMode = this.innerMode),
                  this.innerMode &&
                    this.innerState &&
                    (t.innerState = e.copyState(
                      this.innerMode,
                      this.innerState
                    )),
                  (t.restOfLine = this.restOfLine),
                  (t.isIncludeFiltered = this.isIncludeFiltered),
                  (t.isEach = this.isEach),
                  (t.lastTag = this.lastTag),
                  (t.scriptType = this.scriptType),
                  (t.isAttrs = this.isAttrs),
                  (t.attrsNest = this.attrsNest.slice()),
                  (t.inAttributeName = this.inAttributeName),
                  (t.attributeIsType = this.attributeIsType),
                  (t.attrValue = this.attrValue),
                  (t.indentOf = this.indentOf),
                  (t.indentToken = this.indentToken),
                  (t.innerModeForLine = this.innerModeForLine),
                  t
                );
              }),
              {
                startState: function () {
                  return new s();
                },
                copyState: function (e) {
                  return e.copy();
                },
                token: function (t, s) {
                  var f =
                    p(t, s) ||
                    (function (e, t) {
                      if ((e.sol() && (t.restOfLine = ""), t.restOfLine)) {
                        e.skipToEnd();
                        var r = t.restOfLine;
                        return (t.restOfLine = ""), r;
                      }
                    })(t, s) ||
                    (function (e, t) {
                      if (t.isInterpolating) {
                        if ("}" === e.peek()) {
                          if (
                            (t.interpolationNesting--,
                            t.interpolationNesting < 0)
                          )
                            return (
                              e.next(), (t.isInterpolating = !1), "punctuation"
                            );
                        } else "{" === e.peek() && t.interpolationNesting++;
                        return l.token(e, t.jsState) || !0;
                      }
                    })(t, s) ||
                    (function (e, t) {
                      if (t.isIncludeFiltered) {
                        var r = u(e, t);
                        return (
                          (t.isIncludeFiltered = !1),
                          (t.restOfLine = "string"),
                          r
                        );
                      }
                    })(t, s) ||
                    (function (e, t) {
                      if (t.isEach) {
                        if (e.match(/^ in\b/))
                          return (t.javaScriptLine = !0), (t.isEach = !1), r;
                        if (e.sol() || e.eol()) t.isEach = !1;
                        else if (e.next()) {
                          for (; !e.match(/^ in\b/, !1) && e.next(); );
                          return "variable";
                        }
                      }
                    })(t, s) ||
                    (function t(r, n) {
                      if (n.isAttrs) {
                        if (
                          (a[r.peek()] && n.attrsNest.push(a[r.peek()]),
                          n.attrsNest[n.attrsNest.length - 1] === r.peek())
                        )
                          n.attrsNest.pop();
                        else if (r.eat(")"))
                          return (n.isAttrs = !1), "punctuation";
                        if (n.inAttributeName && r.match(/^[^=,\)!]+/))
                          return (
                            ("=" !== r.peek() && "!" !== r.peek()) ||
                              ((n.inAttributeName = !1),
                              (n.jsState = e.startState(l)),
                              "script" === n.lastTag &&
                              "type" === r.current().trim().toLowerCase()
                                ? (n.attributeIsType = !0)
                                : (n.attributeIsType = !1)),
                            "attribute"
                          );
                        var i = l.token(r, n.jsState);
                        if (
                          (n.attributeIsType &&
                            "string" === i &&
                            (n.scriptType = r.current().toString()),
                          0 === n.attrsNest.length &&
                            ("string" === i ||
                              "variable" === i ||
                              "keyword" === i))
                        )
                          try {
                            return (
                              Function(
                                "",
                                "var x " +
                                  n.attrValue
                                    .replace(/,\s*$/, "")
                                    .replace(/^!/, "")
                              ),
                              (n.inAttributeName = !0),
                              (n.attrValue = ""),
                              r.backUp(r.current().length),
                              t(r, n)
                            );
                          } catch (e) {}
                        return (n.attrValue += r.current()), i || !0;
                      }
                    })(t, s) ||
                    (function (e, t) {
                      if (
                        (e.sol() &&
                          ((t.javaScriptLine = !1),
                          (t.javaScriptLineExcludesColon = !1)),
                        t.javaScriptLine)
                      ) {
                        if (t.javaScriptLineExcludesColon && ":" === e.peek())
                          return (
                            (t.javaScriptLine = !1),
                            void (t.javaScriptLineExcludesColon = !1)
                          );
                        var r = l.token(e, t.jsState);
                        return e.eol() && (t.javaScriptLine = !1), r || !0;
                      }
                    })(t, s) ||
                    (function (e, t) {
                      if (t.javaScriptArguments) {
                        if (
                          0 === t.javaScriptArgumentsDepth &&
                          "(" !== e.peek()
                        )
                          return void (t.javaScriptArguments = !1);
                        if (
                          ("(" === e.peek()
                            ? t.javaScriptArgumentsDepth++
                            : ")" === e.peek() && t.javaScriptArgumentsDepth--,
                          0 === t.javaScriptArgumentsDepth)
                        )
                          return void (t.javaScriptArguments = !1);
                        var r = l.token(e, t.jsState);
                        return r || !0;
                      }
                    })(t, s) ||
                    (function (e, t) {
                      if (t.mixinCallAfter)
                        return (
                          (t.mixinCallAfter = !1),
                          e.match(/^\( *[-\w]+ *=/, !1) ||
                            ((t.javaScriptArguments = !0),
                            (t.javaScriptArgumentsDepth = 0)),
                          !0
                        );
                    })(t, s) ||
                    (function (e) {
                      if (e.match(/^yield\b/)) return "keyword";
                    })(t) ||
                    (function (e) {
                      if (e.match(/^(?:doctype) *([^\n]+)?/)) return n;
                    })(t) ||
                    c(t, s) ||
                    (function (e, t) {
                      if (e.match(/^case\b/)) return (t.javaScriptLine = !0), r;
                    })(t, s) ||
                    (function (e, t) {
                      if (e.match(/^when\b/))
                        return (
                          (t.javaScriptLine = !0),
                          (t.javaScriptLineExcludesColon = !0),
                          r
                        );
                    })(t, s) ||
                    (function (e) {
                      if (e.match(/^default\b/)) return r;
                    })(t) ||
                    (function (e, t) {
                      if (e.match(/^extends?\b/))
                        return (t.restOfLine = "string"), r;
                    })(t, s) ||
                    (function (e, t) {
                      if (e.match(/^append\b/))
                        return (t.restOfLine = "variable"), r;
                    })(t, s) ||
                    (function (e, t) {
                      if (e.match(/^prepend\b/))
                        return (t.restOfLine = "variable"), r;
                    })(t, s) ||
                    (function (e, t) {
                      if (e.match(/^block\b *(?:(prepend|append)\b)?/))
                        return (t.restOfLine = "variable"), r;
                    })(t, s) ||
                    (function (e, t) {
                      if (e.match(/^include\b/))
                        return (t.restOfLine = "string"), r;
                    })(t, s) ||
                    (function (e, t) {
                      if (
                        e.match(/^include:([a-zA-Z0-9\-]+)/, !1) &&
                        e.match("include")
                      )
                        return (t.isIncludeFiltered = !0), r;
                    })(t, s) ||
                    (function (e, t) {
                      if (e.match(/^mixin\b/))
                        return (t.javaScriptLine = !0), r;
                    })(t, s) ||
                    (function (e, t) {
                      return e.match(/^\+([-\w]+)/)
                        ? (e.match(/^\( *[-\w]+ *=/, !1) ||
                            ((t.javaScriptArguments = !0),
                            (t.javaScriptArgumentsDepth = 0)),
                          "variable")
                        : e.match(/^\+#{/, !1)
                        ? (e.next(), (t.mixinCallAfter = !0), c(e, t))
                        : void 0;
                    })(t, s) ||
                    (function (e, t) {
                      if (e.match(/^(if|unless|else if|else)\b/))
                        return (t.javaScriptLine = !0), r;
                    })(t, s) ||
                    (function (e, t) {
                      if (e.match(/^(- *)?(each|for)\b/))
                        return (t.isEach = !0), r;
                    })(t, s) ||
                    (function (e, t) {
                      if (e.match(/^while\b/))
                        return (t.javaScriptLine = !0), r;
                    })(t, s) ||
                    (function (e, t) {
                      var r;
                      if ((r = e.match(/^(\w(?:[-:\w]*\w)?)\/?/)))
                        return (
                          (t.lastTag = r[1].toLowerCase()),
                          "script" === t.lastTag &&
                            (t.scriptType = "application/javascript"),
                          "tag"
                        );
                    })(t, s) ||
                    u(t, s) ||
                    (function (e, t) {
                      if (e.match(/^(!?=|-)/))
                        return (t.javaScriptLine = !0), "punctuation";
                    })(t, s) ||
                    (function (e) {
                      if (e.match(/^#([\w-]+)/)) return i;
                    })(t) ||
                    (function (e) {
                      if (e.match(/^\.([\w-]+)/)) return o;
                    })(t) ||
                    (function (e, t) {
                      if ("(" == e.peek())
                        return (
                          e.next(),
                          (t.isAttrs = !0),
                          (t.attrsNest = []),
                          (t.inAttributeName = !0),
                          (t.attrValue = ""),
                          (t.attributeIsType = !1),
                          "punctuation"
                        );
                    })(t, s) ||
                    (function (e, t) {
                      if (e.match(/^&attributes\b/))
                        return (
                          (t.javaScriptArguments = !0),
                          (t.javaScriptArgumentsDepth = 0),
                          "keyword"
                        );
                    })(t, s) ||
                    (function (e) {
                      if (e.sol() && e.eatSpace()) return "indent";
                    })(t) ||
                    (function (e, t) {
                      return e.match(/^(?:\| ?| )([^\n]+)/)
                        ? "string"
                        : e.match(/^(<[^\n]*)/, !1)
                        ? (d(e, t, "htmlmixed"),
                          (t.innerModeForLine = !0),
                          p(e, t, !0))
                        : void 0;
                    })(t, s) ||
                    (function (e, t) {
                      if (e.match(/^ *\/\/(-)?([^\n]*)/))
                        return (
                          (t.indentOf = e.indentation()),
                          (t.indentToken = "comment"),
                          "comment"
                        );
                    })(t, s) ||
                    (function (e) {
                      if (e.match(/^: */)) return "colon";
                    })(t) ||
                    (function (e, t) {
                      if (e.eat(".")) {
                        var r = null;
                        return (
                          "script" === t.lastTag &&
                          -1 != t.scriptType.toLowerCase().indexOf("javascript")
                            ? (r = t.scriptType
                                .toLowerCase()
                                .replace(/"|'/g, ""))
                            : "style" === t.lastTag && (r = "css"),
                          d(e, t, r),
                          "dot"
                        );
                      }
                    })(t, s) ||
                    (function (e) {
                      return e.next(), null;
                    })(t);
                  return !0 === f ? null : f;
                }
              }
            );
          },
          "javascript",
          "css",
          "htmlmixed"
        ),
          e.defineMIME("text/x-pug", "pug"),
          e.defineMIME("text/x-jade", "pug");
      })(r(0), r(5), r(1), r(6));
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        e.defineSimpleMode("handlebars-tags", {
          start: [
            { regex: /\{\{\{/, push: "handlebars_raw", token: "tag" },
            { regex: /\{\{!--/, push: "dash_comment", token: "comment" },
            { regex: /\{\{!/, push: "comment", token: "comment" },
            { regex: /\{\{/, push: "handlebars", token: "tag" }
          ],
          handlebars_raw: [{ regex: /\}\}\}/, pop: !0, token: "tag" }],
          handlebars: [
            { regex: /\}\}/, pop: !0, token: "tag" },
            { regex: /"(?:[^\\"]|\\.)*"?/, token: "string" },
            { regex: /'(?:[^\\']|\\.)*'?/, token: "string" },
            { regex: />|[#\/]([A-Za-z_]\w*)/, token: "keyword" },
            { regex: /(?:else|this)\b/, token: "keyword" },
            { regex: /\d+/i, token: "number" },
            { regex: /=|~|@|true|false/, token: "atom" },
            { regex: /(?:\.\.\/)*(?:[A-Za-z_][\w\.]*)+/, token: "variable-2" }
          ],
          dash_comment: [
            { regex: /--\}\}/, pop: !0, token: "comment" },
            { regex: /./, token: "comment" }
          ],
          comment: [
            { regex: /\}\}/, pop: !0, token: "comment" },
            { regex: /./, token: "comment" }
          ],
          meta: { blockCommentStart: "{{--", blockCommentEnd: "--}}" }
        }),
          e.defineMode("handlebars", function (t, r) {
            var n = e.getMode(t, "handlebars-tags");
            return r && r.base
              ? e.multiplexingMode(e.getMode(t, r.base), {
                  open: "{{",
                  close: /\}\}\}?/,
                  mode: n,
                  parseDelimiters: !0
                })
              : n;
          }),
          e.defineMIME("text/x-handlebars-template", "handlebars");
      })(r(0), r(7), r(34));
    },
    function (e, t, r) {
      !(function (e) {
        "use strict";
        e.multiplexingMode = function (t) {
          var r = Array.prototype.slice.call(arguments, 1);
          function n(e, t, r, n) {
            if ("string" == typeof t) {
              var i = e.indexOf(t, r);
              return n && i > -1 ? i + t.length : i;
            }
            var o = t.exec(r ? e.slice(r) : e);
            return o ? o.index + r + (n ? o[0].length : 0) : -1;
          }
          return {
            startState: function () {
              return { outer: e.startState(t), innerActive: null, inner: null };
            },
            copyState: function (r) {
              return {
                outer: e.copyState(t, r.outer),
                innerActive: r.innerActive,
                inner: r.innerActive && e.copyState(r.innerActive.mode, r.inner)
              };
            },
            token: function (i, o) {
              if (o.innerActive) {
                var a = o.innerActive,
                  l = i.string;
                if (!a.close && i.sol())
                  return (o.innerActive = o.inner = null), this.token(i, o);
                var s = a.close ? n(l, a.close, i.pos, a.parseDelimiters) : -1;
                if (s == i.pos && !a.parseDelimiters)
                  return (
                    i.match(a.close),
                    (o.innerActive = o.inner = null),
                    a.delimStyle && a.delimStyle + " " + a.delimStyle + "-close"
                  );
                s > -1 && (i.string = l.slice(0, s));
                var c = a.mode.token(i, o.inner);
                return (
                  s > -1 && (i.string = l),
                  s == i.pos &&
                    a.parseDelimiters &&
                    (o.innerActive = o.inner = null),
                  a.innerStyle &&
                    (c = c ? c + " " + a.innerStyle : a.innerStyle),
                  c
                );
              }
              for (var u = 1 / 0, l = i.string, d = 0; d < r.length; ++d) {
                var p = r[d],
                  s = n(l, p.open, i.pos);
                if (s == i.pos) {
                  p.parseDelimiters || i.match(p.open), (o.innerActive = p);
                  var f = 0;
                  if (t.indent) {
                    var m = t.indent(o.outer, "", "");
                    m !== e.Pass && (f = m);
                  }
                  return (
                    (o.inner = e.startState(p.mode, f)),
                    p.delimStyle && p.delimStyle + " " + p.delimStyle + "-open"
                  );
                }
                -1 != s && s < u && (u = s);
              }
              u != 1 / 0 && (i.string = l.slice(0, u));
              var h = t.token(i, o.outer);
              return u != 1 / 0 && (i.string = l), h;
            },
            indent: function (r, n, i) {
              var o = r.innerActive ? r.innerActive.mode : t;
              return o.indent
                ? o.indent(r.innerActive ? r.inner : r.outer, n, i)
                : e.Pass;
            },
            blankLine: function (n) {
              var i = n.innerActive ? n.innerActive.mode : t;
              if (
                (i.blankLine && i.blankLine(n.innerActive ? n.inner : n.outer),
                n.innerActive)
              )
                "\n" === n.innerActive.close &&
                  (n.innerActive = n.inner = null);
              else
                for (var o = 0; o < r.length; ++o) {
                  var a = r[o];
                  "\n" === a.open &&
                    ((n.innerActive = a),
                    (n.inner = e.startState(
                      a.mode,
                      i.indent ? i.indent(n.outer, "", "") : 0
                    )));
                }
            },
            electricChars: t.electricChars,
            innerMode: function (e) {
              return e.inner
                ? { state: e.inner, mode: e.innerActive.mode }
                : { state: e.outer, mode: t };
            }
          };
        };
      })(r(0));
    }
  ]);
});
