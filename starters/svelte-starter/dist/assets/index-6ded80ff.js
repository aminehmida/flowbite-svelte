(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === 'childList')
        for (const o of i.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(n) {
    const i = {};
    return (
      n.integrity && (i.integrity = n.integrity),
      n.referrerpolicy && (i.referrerPolicy = n.referrerpolicy),
      n.crossorigin === 'use-credentials'
        ? (i.credentials = 'include')
        : n.crossorigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = l(n);
    fetch(n.href, i);
  }
})();
function K() {}
function x(t, e) {
  for (const l in e) t[l] = e[l];
  return t;
}
function kt(t) {
  return t();
}
function Ze() {
  return Object.create(null);
}
function ge(t) {
  t.forEach(kt);
}
function pe(t) {
  return typeof t == 'function';
}
function G(t, e) {
  return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
let Ce;
function fe(t, e) {
  return Ce || (Ce = document.createElement('a')), (Ce.href = e), t === Ce.href;
}
function Ut(t) {
  return Object.keys(t).length === 0;
}
function Vt(t, ...e) {
  if (t == null) return K;
  const l = t.subscribe(...e);
  return l.unsubscribe ? () => l.unsubscribe() : l;
}
function $(t, e, l, r) {
  if (t) {
    const n = pt(t, e, l, r);
    return t[0](n);
  }
}
function pt(t, e, l, r) {
  return t[1] && r ? x(l.ctx.slice(), t[1](r(e))) : l.ctx;
}
function ee(t, e, l, r) {
  if (t[2] && r) {
    const n = t[2](r(l));
    if (e.dirty === void 0) return n;
    if (typeof n == 'object') {
      const i = [],
        o = Math.max(e.dirty.length, n.length);
      for (let a = 0; a < o; a += 1) i[a] = e.dirty[a] | n[a];
      return i;
    }
    return e.dirty | n;
  }
  return e.dirty;
}
function te(t, e, l, r, n, i) {
  if (n) {
    const o = pt(e, l, r, i);
    t.p(o, n);
  }
}
function le(t) {
  if (t.ctx.length > 32) {
    const e = [],
      l = t.ctx.length / 32;
    for (let r = 0; r < l; r++) e[r] = -1;
    return e;
  }
  return -1;
}
function ie(t) {
  const e = {};
  for (const l in t) l[0] !== '$' && (e[l] = t[l]);
  return e;
}
function re(t, e) {
  const l = {};
  e = new Set(e);
  for (const r in t) !e.has(r) && r[0] !== '$' && (l[r] = t[r]);
  return l;
}
function wt(t) {
  const e = {};
  for (const l in t) e[l] = !0;
  return e;
}
function Pe(t) {
  return t && pe(t.destroy) ? t.destroy : K;
}
function w(t, e) {
  t.appendChild(e);
}
function N(t, e, l) {
  t.insertBefore(e, l || null);
}
function A(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function yt(t, e) {
  for (let l = 0; l < t.length; l += 1) t[l] && t[l].d(e);
}
function P(t) {
  return document.createElement(t);
}
function ke(t) {
  return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function B(t) {
  return document.createTextNode(t);
}
function M() {
  return B(' ');
}
function ce() {
  return B('');
}
function q(t, e, l, r) {
  return t.addEventListener(e, l, r), () => t.removeEventListener(e, l, r);
}
function vt(t) {
  return function (e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function d(t, e, l) {
  l == null ? t.removeAttribute(e) : t.getAttribute(e) !== l && t.setAttribute(e, l);
}
function ne(t, e) {
  const l = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const r in e)
    e[r] == null
      ? t.removeAttribute(r)
      : r === 'style'
      ? (t.style.cssText = e[r])
      : r === '__value'
      ? (t.value = t[r] = e[r])
      : l[r] && l[r].set
      ? (t[r] = e[r])
      : d(t, r, e[r]);
}
function Se(t, e) {
  Object.keys(e).forEach((l) => {
    Zt(t, l, e[l]);
  });
}
function Zt(t, e, l) {
  e in t ? (t[e] = typeof t[e] == 'boolean' && l === '' ? !0 : l) : d(t, e, l);
}
function Yt(t) {
  return Array.from(t.childNodes);
}
function W(t, e) {
  (e = '' + e), t.wholeText !== e && (t.data = e);
}
function Ye(t, e) {
  t.value = e ?? '';
}
function Xt(t, e, { bubbles: l = !1, cancelable: r = !1 } = {}) {
  const n = document.createEvent('CustomEvent');
  return n.initCustomEvent(t, l, r, e), n;
}
function Ae(t, e) {
  return new t(e);
}
let ye;
function we(t) {
  ye = t;
}
function ve() {
  if (!ye) throw new Error('Function called outside component initialization');
  return ye;
}
function Gt(t) {
  ve().$$.on_mount.push(t);
}
function Kt(t) {
  ve().$$.after_update.push(t);
}
function Wt(t) {
  ve().$$.on_destroy.push(t);
}
function Jt() {
  const t = ve();
  return (e, l, { cancelable: r = !1 } = {}) => {
    const n = t.$$.callbacks[e];
    if (n) {
      const i = Xt(e, l, { cancelable: r });
      return (
        n.slice().forEach((o) => {
          o.call(t, i);
        }),
        !i.defaultPrevented
      );
    }
    return !0;
  };
}
function Le(t) {
  return ve().$$.context.get(t);
}
function R(t, e) {
  const l = t.$$.callbacks[e.type];
  l && l.slice().forEach((r) => r.call(this, e));
}
const _e = [],
  Oe = [],
  De = [],
  Xe = [],
  Ct = Promise.resolve();
let qe = !1;
function Dt() {
  qe || ((qe = !0), Ct.then(St));
}
function Et() {
  return Dt(), Ct;
}
function Me(t) {
  De.push(t);
}
const je = new Set();
let he = 0;
function St() {
  if (he !== 0) return;
  const t = ye;
  do {
    try {
      for (; he < _e.length; ) {
        const e = _e[he];
        he++, we(e), Qt(e.$$);
      }
    } catch (e) {
      throw ((_e.length = 0), (he = 0), e);
    }
    for (we(null), _e.length = 0, he = 0; Oe.length; ) Oe.pop()();
    for (let e = 0; e < De.length; e += 1) {
      const l = De[e];
      je.has(l) || (je.add(l), l());
    }
    De.length = 0;
  } while (_e.length);
  for (; Xe.length; ) Xe.pop()();
  (qe = !1), je.clear(), we(t);
}
function Qt(t) {
  if (t.fragment !== null) {
    t.update(), ge(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Me);
  }
}
const Ee = new Set();
let me;
function se() {
  me = { r: 0, c: [], p: me };
}
function ae() {
  me.r || ge(me.c), (me = me.p);
}
function C(t, e) {
  t && t.i && (Ee.delete(t), t.i(e));
}
function j(t, e, l, r) {
  if (t && t.o) {
    if (Ee.has(t)) return;
    Ee.add(t),
      me.c.push(() => {
        Ee.delete(t), r && (l && t.d(1), r());
      }),
      t.o(e);
  } else r && r();
}
function de(t, e) {
  const l = {},
    r = {},
    n = { $$scope: 1 };
  let i = t.length;
  for (; i--; ) {
    const o = t[i],
      a = e[i];
    if (a) {
      for (const s in o) s in a || (r[s] = 1);
      for (const s in a) n[s] || ((l[s] = a[s]), (n[s] = 1));
      t[i] = a;
    } else for (const s in o) n[s] = 1;
  }
  for (const o in r) o in l || (l[o] = void 0);
  return l;
}
function At(t) {
  return typeof t == 'object' && t !== null ? t : {};
}
function X(t) {
  t && t.c();
}
function Z(t, e, l, r) {
  const { fragment: n, after_update: i } = t.$$;
  n && n.m(e, l),
    r ||
      Me(() => {
        const o = t.$$.on_mount.map(kt).filter(pe);
        t.$$.on_destroy ? t.$$.on_destroy.push(...o) : ge(o), (t.$$.on_mount = []);
      }),
    i.forEach(Me);
}
function Y(t, e) {
  const l = t.$$;
  l.fragment !== null &&
    (ge(l.on_destroy), l.fragment && l.fragment.d(e), (l.on_destroy = l.fragment = null), (l.ctx = []));
}
function $t(t, e) {
  t.$$.dirty[0] === -1 && (_e.push(t), Dt(), t.$$.dirty.fill(0)), (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function J(t, e, l, r, n, i, o, a = [-1]) {
  const s = ye;
  we(t);
  const u = (t.$$ = {
    fragment: null,
    ctx: [],
    props: i,
    update: K,
    not_equal: n,
    bound: Ze(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    callbacks: Ze(),
    dirty: a,
    skip_bound: !1,
    root: e.target || s.$$.root
  });
  o && o(u.root);
  let f = !1;
  if (
    ((u.ctx = l
      ? l(t, e.props || {}, (c, m, ...g) => {
          const b = g.length ? g[0] : m;
          return (
            u.ctx &&
              n(u.ctx[c], (u.ctx[c] = b)) &&
              (!u.skip_bound && u.bound[c] && u.bound[c](b), f && $t(t, c)),
            m
          );
        })
      : []),
    u.update(),
    (f = !0),
    ge(u.before_update),
    (u.fragment = r ? r(u.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const c = Yt(e.target);
      u.fragment && u.fragment.l(c), c.forEach(A);
    } else u.fragment && u.fragment.c();
    e.intro && C(t.$$.fragment), Z(t, e.target, e.anchor, e.customElement), St();
  }
  we(s);
}
class Q {
  $destroy() {
    Y(this, 1), (this.$destroy = K);
  }
  $on(e, l) {
    if (!pe(l)) return K;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      r.push(l),
      () => {
        const n = r.indexOf(l);
        n !== -1 && r.splice(n, 1);
      }
    );
  }
  $set(e) {
    this.$$set && !Ut(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const be = [];
function Lt(t, e) {
  return { subscribe: Pt(t, e).subscribe };
}
function Pt(t, e = K) {
  let l;
  const r = new Set();
  function n(a) {
    if (G(t, a) && ((t = a), l)) {
      const s = !be.length;
      for (const u of r) u[1](), be.push(u, t);
      if (s) {
        for (let u = 0; u < be.length; u += 2) be[u][0](be[u + 1]);
        be.length = 0;
      }
    }
  }
  function i(a) {
    n(a(t));
  }
  function o(a, s = K) {
    const u = [a, s];
    return (
      r.add(u),
      r.size === 1 && (l = e(n) || K),
      a(t),
      () => {
        r.delete(u), r.size === 0 && (l(), (l = null));
      }
    );
  }
  return { set: n, update: i, subscribe: o };
}
function Nt(t, e, l) {
  const r = !Array.isArray(t),
    n = r ? [t] : t,
    i = e.length < 2;
  return Lt(l, (o) => {
    let a = !1;
    const s = [];
    let u = 0,
      f = K;
    const c = () => {
        if (u) return;
        f();
        const g = e(r ? s[0] : s, o);
        i ? o(g) : (f = pe(g) ? g : K);
      },
      m = n.map((g, b) =>
        Vt(
          g,
          (E) => {
            (s[b] = E), (u &= ~(1 << b)), a && c();
          },
          () => {
            u |= 1 << b;
          }
        )
      );
    return (
      (a = !0),
      c(),
      function () {
        ge(m), f();
      }
    );
  });
}
function el(t, e) {
  if (t instanceof RegExp) return { keys: !1, pattern: t };
  var l,
    r,
    n,
    i,
    o = [],
    a = '',
    s = t.split('/');
  for (s[0] || s.shift(); (n = s.shift()); )
    (l = n[0]),
      l === '*'
        ? (o.push('wild'), (a += '/(.*)'))
        : l === ':'
        ? ((r = n.indexOf('?', 1)),
          (i = n.indexOf('.', 1)),
          o.push(n.substring(1, ~r ? r : ~i ? i : n.length)),
          (a += ~r && !~i ? '(?:/([^/]+?))?' : '/([^/]+?)'),
          ~i && (a += (~r ? '?' : '') + '\\' + n.substring(i)))
        : (a += '/' + n);
  return { keys: o, pattern: new RegExp('^' + a + (e ? '(?=$|/)' : '/?$'), 'i') };
}
function tl(t) {
  let e, l, r;
  const n = [t[2]];
  var i = t[0];
  function o(a) {
    let s = {};
    for (let u = 0; u < n.length; u += 1) s = x(s, n[u]);
    return { props: s };
  }
  return (
    i && ((e = Ae(i, o())), e.$on('routeEvent', t[7])),
    {
      c() {
        e && X(e.$$.fragment), (l = ce());
      },
      m(a, s) {
        e && Z(e, a, s), N(a, l, s), (r = !0);
      },
      p(a, s) {
        const u = s & 4 ? de(n, [At(a[2])]) : {};
        if (i !== (i = a[0])) {
          if (e) {
            se();
            const f = e;
            j(f.$$.fragment, 1, 0, () => {
              Y(f, 1);
            }),
              ae();
          }
          i
            ? ((e = Ae(i, o())),
              e.$on('routeEvent', a[7]),
              X(e.$$.fragment),
              C(e.$$.fragment, 1),
              Z(e, l.parentNode, l))
            : (e = null);
        } else i && e.$set(u);
      },
      i(a) {
        r || (e && C(e.$$.fragment, a), (r = !0));
      },
      o(a) {
        e && j(e.$$.fragment, a), (r = !1);
      },
      d(a) {
        a && A(l), e && Y(e, a);
      }
    }
  );
}
function ll(t) {
  let e, l, r;
  const n = [{ params: t[1] }, t[2]];
  var i = t[0];
  function o(a) {
    let s = {};
    for (let u = 0; u < n.length; u += 1) s = x(s, n[u]);
    return { props: s };
  }
  return (
    i && ((e = Ae(i, o())), e.$on('routeEvent', t[6])),
    {
      c() {
        e && X(e.$$.fragment), (l = ce());
      },
      m(a, s) {
        e && Z(e, a, s), N(a, l, s), (r = !0);
      },
      p(a, s) {
        const u = s & 6 ? de(n, [s & 2 && { params: a[1] }, s & 4 && At(a[2])]) : {};
        if (i !== (i = a[0])) {
          if (e) {
            se();
            const f = e;
            j(f.$$.fragment, 1, 0, () => {
              Y(f, 1);
            }),
              ae();
          }
          i
            ? ((e = Ae(i, o())),
              e.$on('routeEvent', a[6]),
              X(e.$$.fragment),
              C(e.$$.fragment, 1),
              Z(e, l.parentNode, l))
            : (e = null);
        } else i && e.$set(u);
      },
      i(a) {
        r || (e && C(e.$$.fragment, a), (r = !0));
      },
      o(a) {
        e && j(e.$$.fragment, a), (r = !1);
      },
      d(a) {
        a && A(l), e && Y(e, a);
      }
    }
  );
}
function rl(t) {
  let e, l, r, n;
  const i = [ll, tl],
    o = [];
  function a(s, u) {
    return s[1] ? 0 : 1;
  }
  return (
    (e = a(t)),
    (l = o[e] = i[e](t)),
    {
      c() {
        l.c(), (r = ce());
      },
      m(s, u) {
        o[e].m(s, u), N(s, r, u), (n = !0);
      },
      p(s, [u]) {
        let f = e;
        (e = a(s)),
          e === f
            ? o[e].p(s, u)
            : (se(),
              j(o[f], 1, 1, () => {
                o[f] = null;
              }),
              ae(),
              (l = o[e]),
              l ? l.p(s, u) : ((l = o[e] = i[e](s)), l.c()),
              C(l, 1),
              l.m(r.parentNode, r));
      },
      i(s) {
        n || (C(l), (n = !0));
      },
      o(s) {
        j(l), (n = !1);
      },
      d(s) {
        o[e].d(s), s && A(r);
      }
    }
  );
}
function Ge() {
  const t = window.location.href.indexOf('#/');
  let e = t > -1 ? window.location.href.substr(t + 1) : '/';
  const l = e.indexOf('?');
  let r = '';
  return l > -1 && ((r = e.substr(l + 1)), (e = e.substr(0, l))), { location: e, querystring: r };
}
const Ue = Lt(null, function (e) {
  e(Ge());
  const l = () => {
    e(Ge());
  };
  return (
    window.addEventListener('hashchange', l, !1),
    function () {
      window.removeEventListener('hashchange', l, !1);
    }
  );
});
Nt(Ue, (t) => t.location);
Nt(Ue, (t) => t.querystring);
const Ke = Pt(void 0);
async function nl() {
  await Et(), window.history.back();
}
function il(t, e) {
  if (((e = Je(e)), !t || !t.tagName || t.tagName.toLowerCase() != 'a'))
    throw Error('Action "link" can only be used with <a> tags');
  return (
    We(t, e),
    {
      update(l) {
        (l = Je(l)), We(t, l);
      }
    }
  );
}
function sl(t) {
  t ? window.scrollTo(t.__svelte_spa_router_scrollX, t.__svelte_spa_router_scrollY) : window.scrollTo(0, 0);
}
function We(t, e) {
  let l = e.href || t.getAttribute('href');
  if (l && l.charAt(0) == '/') l = '#' + l;
  else if (!l || l.length < 2 || l.slice(0, 2) != '#/')
    throw Error('Invalid value for "href" attribute: ' + l);
  t.setAttribute('href', l),
    t.addEventListener('click', (r) => {
      r.preventDefault(), e.disabled || al(r.currentTarget.getAttribute('href'));
    });
}
function Je(t) {
  return t && typeof t == 'string' ? { href: t } : t || {};
}
function al(t) {
  history.replaceState(
    {
      ...history.state,
      __svelte_spa_router_scrollX: window.scrollX,
      __svelte_spa_router_scrollY: window.scrollY
    },
    void 0
  ),
    (window.location.hash = t);
}
function ol(t, e, l) {
  let { routes: r = {} } = e,
    { prefix: n = '' } = e,
    { restoreScrollState: i = !1 } = e;
  class o {
    constructor(_, S) {
      if (!S || (typeof S != 'function' && (typeof S != 'object' || S._sveltesparouter !== !0)))
        throw Error('Invalid component object');
      if (
        !_ ||
        (typeof _ == 'string' && (_.length < 1 || (_.charAt(0) != '/' && _.charAt(0) != '*'))) ||
        (typeof _ == 'object' && !(_ instanceof RegExp))
      )
        throw Error('Invalid value for "path" argument - strings must start with / or *');
      const { pattern: I, keys: F } = el(_);
      (this.path = _),
        typeof S == 'object' && S._sveltesparouter === !0
          ? ((this.component = S.component),
            (this.conditions = S.conditions || []),
            (this.userData = S.userData),
            (this.props = S.props || {}))
          : ((this.component = () => Promise.resolve(S)), (this.conditions = []), (this.props = {})),
        (this._pattern = I),
        (this._keys = F);
    }
    match(_) {
      if (n) {
        if (typeof n == 'string')
          if (_.startsWith(n)) _ = _.substr(n.length) || '/';
          else return null;
        else if (n instanceof RegExp) {
          const U = _.match(n);
          if (U && U[0]) _ = _.substr(U[0].length) || '/';
          else return null;
        }
      }
      const S = this._pattern.exec(_);
      if (S === null) return null;
      if (this._keys === !1) return S;
      const I = {};
      let F = 0;
      for (; F < this._keys.length; ) {
        try {
          I[this._keys[F]] = decodeURIComponent(S[F + 1] || '') || null;
        } catch {
          I[this._keys[F]] = null;
        }
        F++;
      }
      return I;
    }
    async checkConditions(_) {
      for (let S = 0; S < this.conditions.length; S++) if (!(await this.conditions[S](_))) return !1;
      return !0;
    }
  }
  const a = [];
  r instanceof Map
    ? r.forEach((k, _) => {
        a.push(new o(_, k));
      })
    : Object.keys(r).forEach((k) => {
        a.push(new o(k, r[k]));
      });
  let s = null,
    u = null,
    f = {};
  const c = Jt();
  async function m(k, _) {
    await Et(), c(k, _);
  }
  let g = null,
    b = null;
  i &&
    ((b = (k) => {
      k.state && (k.state.__svelte_spa_router_scrollY || k.state.__svelte_spa_router_scrollX)
        ? (g = k.state)
        : (g = null);
    }),
    window.addEventListener('popstate', b),
    Kt(() => {
      sl(g);
    }));
  let E = null,
    v = null;
  const p = Ue.subscribe(async (k) => {
    E = k;
    let _ = 0;
    for (; _ < a.length; ) {
      const S = a[_].match(k.location);
      if (!S) {
        _++;
        continue;
      }
      const I = {
        route: a[_].path,
        location: k.location,
        querystring: k.querystring,
        userData: a[_].userData,
        params: S && typeof S == 'object' && Object.keys(S).length ? S : null
      };
      if (!(await a[_].checkConditions(I))) {
        l(0, (s = null)), (v = null), m('conditionsFailed', I);
        return;
      }
      m('routeLoading', Object.assign({}, I));
      const F = a[_].component;
      if (v != F) {
        F.loading
          ? (l(0, (s = F.loading)),
            (v = F),
            l(1, (u = F.loadingParams)),
            l(2, (f = {})),
            m('routeLoaded', Object.assign({}, I, { component: s, name: s.name, params: u })))
          : (l(0, (s = null)), (v = null));
        const U = await F();
        if (k != E) return;
        l(0, (s = (U && U.default) || U)), (v = F);
      }
      S && typeof S == 'object' && Object.keys(S).length ? l(1, (u = S)) : l(1, (u = null)),
        l(2, (f = a[_].props)),
        m('routeLoaded', Object.assign({}, I, { component: s, name: s.name, params: u })).then(() => {
          Ke.set(u);
        });
      return;
    }
    l(0, (s = null)), (v = null), Ke.set(void 0);
  });
  Wt(() => {
    p(), b && window.removeEventListener('popstate', b);
  });
  function L(k) {
    R.call(this, t, k);
  }
  function y(k) {
    R.call(this, t, k);
  }
  return (
    (t.$$set = (k) => {
      'routes' in k && l(3, (r = k.routes)),
        'prefix' in k && l(4, (n = k.prefix)),
        'restoreScrollState' in k && l(5, (i = k.restoreScrollState));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 32 && (history.scrollRestoration = i ? 'manual' : 'auto');
    }),
    [s, u, f, r, n, i, L, y]
  );
}
class ul extends Q {
  constructor(e) {
    super(), J(this, e, ol, rl, G, { routes: 3, prefix: 4, restoreScrollState: 5 });
  }
}
var Re = {},
  fl = {
    get exports() {
      return Re;
    },
    set exports(t) {
      Re = t;
    }
  };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (t) {
  (function () {
    var e = {}.hasOwnProperty;
    function l() {
      for (var r = [], n = 0; n < arguments.length; n++) {
        var i = arguments[n];
        if (i) {
          var o = typeof i;
          if (o === 'string' || o === 'number') r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var a = l.apply(null, i);
              a && r.push(a);
            }
          } else if (o === 'object') {
            if (
              i.toString !== Object.prototype.toString &&
              !i.toString.toString().includes('[native code]')
            ) {
              r.push(i.toString());
              continue;
            }
            for (var s in i) e.call(i, s) && i[s] && r.push(s);
          }
        }
      }
      return r.join(' ');
    }
    t.exports ? ((l.default = l), (t.exports = l)) : (window.classNames = l);
  })();
})(fl);
const ue = Re;
function cl(t) {
  let e;
  const l = t[13].default,
    r = $(l, t, t[12], null);
  return {
    c() {
      r && r.c();
    },
    m(n, i) {
      r && r.m(n, i), (e = !0);
    },
    p(n, i) {
      r && r.p && (!e || i & 4096) && te(r, l, n, n[12], e ? ee(l, n[12], i, null) : le(n[12]), null);
    },
    i(n) {
      e || (C(r, n), (e = !0));
    },
    o(n) {
      j(r, n), (e = !1);
    },
    d(n) {
      r && r.d(n);
    }
  };
}
function dl(t) {
  let e, l;
  const r = t[13].default,
    n = $(r, t, t[12], null);
  return {
    c() {
      (e = P('span')), n && n.c(), d(e, 'class', t[5]);
    },
    m(i, o) {
      N(i, e, o), n && n.m(e, null), (l = !0);
    },
    p(i, o) {
      n && n.p && (!l || o & 4096) && te(n, r, i, i[12], l ? ee(r, i[12], o, null) : le(i[12]), null),
        (!l || o & 32) && d(e, 'class', i[5]);
    },
    i(i) {
      l || (C(n, i), (l = !0));
    },
    o(i) {
      j(n, i), (l = !1);
    },
    d(i) {
      i && A(e), n && n.d(i);
    }
  };
}
function Te(t) {
  let e, l, r, n, i, o, a;
  const s = [dl, cl],
    u = [];
  function f(g, b) {
    return g[0] && g[1] ? 0 : 1;
  }
  (l = f(t)), (r = u[l] = s[l](t));
  let c = [{ type: (n = t[2] ? void 0 : t[3]) }, { href: t[2] }, t[6], { class: t[4] }],
    m = {};
  for (let g = 0; g < c.length; g += 1) m = x(m, c[g]);
  return {
    c() {
      (e = P(t[2] ? 'a' : 'button')), r.c(), /-/.test(t[2] ? 'a' : 'button') ? Se(e, m) : ne(e, m);
    },
    m(g, b) {
      N(g, e, b),
        u[l].m(e, null),
        (i = !0),
        o ||
          ((a = [
            q(e, 'click', t[14]),
            q(e, 'change', t[15]),
            q(e, 'keydown', t[16]),
            q(e, 'keyup', t[17]),
            q(e, 'mouseenter', t[18]),
            q(e, 'mouseleave', t[19])
          ]),
          (o = !0));
    },
    p(g, b) {
      let E = l;
      (l = f(g)),
        l === E
          ? u[l].p(g, b)
          : (se(),
            j(u[E], 1, 1, () => {
              u[E] = null;
            }),
            ae(),
            (r = u[l]),
            r ? r.p(g, b) : ((r = u[l] = s[l](g)), r.c()),
            C(r, 1),
            r.m(e, null)),
        (m = de(c, [
          (!i || (b & 12 && n !== (n = g[2] ? void 0 : g[3]))) && { type: n },
          (!i || b & 4) && { href: g[2] },
          b & 64 && g[6],
          (!i || b & 16) && { class: g[4] }
        ])),
        /-/.test(g[2] ? 'a' : 'button') ? Se(e, m) : ne(e, m);
    },
    i(g) {
      i || (C(r), (i = !0));
    },
    o(g) {
      j(r), (i = !1);
    },
    d(g) {
      g && A(e), u[l].d(), (o = !1), ge(a);
    }
  };
}
function gl(t) {
  let e = t[2] ? 'a' : 'button',
    l,
    r,
    n = (t[2] ? 'a' : 'button') && Te(t);
  return {
    c() {
      n && n.c(), (l = ce());
    },
    m(i, o) {
      n && n.m(i, o), N(i, l, o), (r = !0);
    },
    p(i, [o]) {
      i[2],
        e
          ? G(e, i[2] ? 'a' : 'button')
            ? (n.d(1), (n = Te(i)), n.c(), n.m(l.parentNode, l))
            : n.p(i, o)
          : ((n = Te(i)), n.c(), n.m(l.parentNode, l)),
        (e = i[2] ? 'a' : 'button');
    },
    i(i) {
      r || (C(n), (r = !0));
    },
    o(i) {
      j(n), (r = !1);
    },
    d(i) {
      i && A(l), n && n.d(i);
    }
  };
}
function ml(t, e, l) {
  const r = ['pill', 'outline', 'gradient', 'size', 'href', 'btnClass', 'type', 'color', 'shadow'];
  let n = re(e, r),
    { $$slots: i = {}, $$scope: o } = e;
  const a = Le('group');
  let { pill: s = !1 } = e,
    { outline: u = !1 } = e,
    { gradient: f = !1 } = e,
    { size: c = a ? 'sm' : 'md' } = e,
    { href: m = void 0 } = e,
    { btnClass: g = void 0 } = e,
    { type: b = 'button' } = e,
    { color: E = a ? (u ? 'dark' : 'alternative') : 'blue' } = e,
    { shadow: v = null } = e;
  const p = {
      blue: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
      dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
      alternative:
        'text-gray-900 bg-white border border-gray-200 dark:border-gray-600 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 hover:text-blue-700 focus:text-blue-700 dark:focus:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700',
      light:
        'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
      green:
        'text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
      red: 'text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
      yellow:
        'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900',
      primary:
        'text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800',
      purple:
        'text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
    },
    L = {
      blue: 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 ',
      green:
        'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800',
      cyan: 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800',
      teal: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800',
      lime: 'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800',
      red: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800',
      pink: 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800',
      purple:
        'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800',
      purpleToBlue:
        'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800',
      cyanToBlue:
        'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800',
      greenToBlue:
        'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800',
      purpleToPink:
        'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800',
      pinkToOrange:
        'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800',
      tealToLime:
        'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-lime-200 dark:focus:ring-teal-700',
      redToYellow:
        'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400'
    },
    y = {
      blue: 'shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80',
      green: 'shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80',
      cyan: 'shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80',
      teal: 'shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 ',
      lime: 'shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80',
      red: 'shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 ',
      pink: 'shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80',
      purple: 'shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80'
    },
    k = {
      blue: 'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800',
      light:
        'text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-400',
      dark: 'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white focus:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800',
      green:
        'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800',
      red: 'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900',
      yellow:
        'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900',
      purple:
        'text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'
    },
    _ = {
      xs: 'px-3 py-2 text-xs',
      sm: 'px-4 py-2 text-sm',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-5 py-3 text-base',
      xl: 'px-6 py-3.5 text-base'
    };
  function S(O = !1) {
    return a
      ? s
        ? 'first:rounded-l-full last:rounded-r-full'
        : O
        ? 'first:rounded-l-md last:rounded-r-md'
        : 'first:rounded-l-lg last:rounded-r-lg'
      : s
      ? 'rounded-full'
      : O
      ? 'rounded-md'
      : 'rounded-lg';
  }
  const I = () => u || E === 'alternative' || E === 'light';
  let F, U;
  function V(O) {
    R.call(this, t, O);
  }
  function D(O) {
    R.call(this, t, O);
  }
  function T(O) {
    R.call(this, t, O);
  }
  function h(O) {
    R.call(this, t, O);
  }
  function H(O) {
    R.call(this, t, O);
  }
  function oe(O) {
    R.call(this, t, O);
  }
  return (
    (t.$$set = (O) => {
      l(28, (e = x(x({}, e), ie(O)))),
        l(6, (n = re(e, r))),
        'pill' in O && l(7, (s = O.pill)),
        'outline' in O && l(0, (u = O.outline)),
        'gradient' in O && l(1, (f = O.gradient)),
        'size' in O && l(8, (c = O.size)),
        'href' in O && l(2, (m = O.href)),
        'btnClass' in O && l(9, (g = O.btnClass)),
        'type' in O && l(3, (b = O.type)),
        'color' in O && l(10, (E = O.color)),
        'shadow' in O && l(11, (v = O.shadow)),
        '$$scope' in O && l(12, (o = O.$$scope));
    }),
    (t.$$.update = () => {
      l(
        4,
        (F =
          g ||
          ue(
            'text-center font-medium',
            a ? 'focus:ring-2' : 'focus:ring-4',
            a && 'focus:z-10',
            a || 'focus:outline-none',
            u && f ? 'p-0.5' : 'inline-flex items-center justify-center ' + _[c],
            f ? L[E] : u ? k[E] : p[E],
            E === 'alternative' &&
              (a
                ? 'dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600'
                : 'dark:bg-transparent dark:border-gray-800 dark:hover:border-gray-700'),
            u &&
              E === 'dark' &&
              (a ? 'dark:text-white dark:border-white' : 'dark:text-gray-400 dark:border-gray-700'),
            I() && a && 'border-l-0 first:border-l',
            S(!1),
            v && y[v],
            e.disabled && 'cursor-not-allowed opacity-50',
            e.class
          ))
      ),
        t.$$.dirty & 256 &&
          l(
            5,
            (U = ue(
              'inline-flex items-center justify-center',
              _[c],
              S(!0),
              'bg-white text-gray-900 dark:bg-gray-900 dark:text-white',
              'transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit'
            ))
          );
    }),
    (e = ie(e)),
    [u, f, m, b, F, U, n, s, c, g, E, v, o, i, V, D, T, h, H, oe]
  );
}
class Ne extends Q {
  constructor(e) {
    super(),
      J(this, e, ml, gl, G, {
        pill: 7,
        outline: 0,
        gradient: 1,
        size: 8,
        href: 2,
        btnClass: 9,
        type: 3,
        color: 10,
        shadow: 11
      });
  }
}
const hl = (t) => ({}),
  Qe = (t) => ({}),
  bl = (t) => ({}),
  $e = (t) => ({});
function _l(t) {
  let e, l;
  return {
    c() {
      (e = ke('svg')),
        (l = ke('path')),
        d(
          l,
          'd',
          `M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z`
        ),
        d(l, 'fill-rule', 'evenodd'),
        d(l, 'clip-rule', 'evenodd'),
        d(e, 'class', 'w-5 h-5'),
        d(e, 'fill', 'currentColor'),
        d(e, 'viewBox', '0 0 20 20'),
        d(e, 'xmlns', 'http://www.w3.org/2000/svg');
    },
    m(r, n) {
      N(r, e, n), w(e, l);
    },
    p: K,
    d(r) {
      r && A(e);
    }
  };
}
function kl(t) {
  let e, l;
  return {
    c() {
      (e = ke('svg')),
        (l = ke('path')),
        d(l, 'd', 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'),
        d(e, 'class', 'w-5 h-5'),
        d(e, 'fill', 'currentColor'),
        d(e, 'viewBox', '0 0 20 20'),
        d(e, 'xmlns', 'http://www.w3.org/2000/svg');
    },
    m(r, n) {
      N(r, e, n), w(e, l);
    },
    p: K,
    d(r) {
      r && A(e);
    }
  };
}
function pl(t) {
  let e, l, r, n, i, o, a, s, u, f;
  const c = t[5].lightIcon,
    m = $(c, t, t[4], $e),
    g = m || _l(),
    b = t[5].darkIcon,
    E = $(b, t, t[4], Qe),
    v = E || kl();
  let p = [{ 'aria-label': 'Dark mode' }, { type: 'button' }, t[2], { class: (a = ue(t[0], t[3].class)) }],
    L = {};
  for (let y = 0; y < p.length; y += 1) L = x(L, p[y]);
  return {
    c() {
      (e = P('script')),
        (e.textContent = `if (window) {
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? window.document.documentElement.classList.add('dark')
        : window.document.documentElement.classList.remove('dark');
    }`),
        (l = M()),
        (r = P('button')),
        (n = P('span')),
        g && g.c(),
        (i = M()),
        (o = P('span')),
        v && v.c(),
        d(n, 'class', 'hidden dark:block'),
        d(o, 'class', 'dark:hidden'),
        ne(r, L);
    },
    m(y, k) {
      w(document.head, e),
        N(y, l, k),
        N(y, r, k),
        w(r, n),
        g && g.m(n, null),
        w(r, i),
        w(r, o),
        v && v.m(o, null),
        r.autofocus && r.focus(),
        (s = !0),
        u || ((f = q(r, 'click', t[1])), (u = !0));
    },
    p(y, [k]) {
      m && m.p && (!s || k & 16) && te(m, c, y, y[4], s ? ee(c, y[4], k, bl) : le(y[4]), $e),
        E && E.p && (!s || k & 16) && te(E, b, y, y[4], s ? ee(b, y[4], k, hl) : le(y[4]), Qe),
        ne(
          r,
          (L = de(p, [
            { 'aria-label': 'Dark mode' },
            { type: 'button' },
            k & 4 && y[2],
            (!s || (k & 9 && a !== (a = ue(y[0], y[3].class)))) && { class: a }
          ]))
        );
    },
    i(y) {
      s || (C(g, y), C(v, y), (s = !0));
    },
    o(y) {
      j(g, y), j(v, y), (s = !1);
    },
    d(y) {
      A(e), y && A(l), y && A(r), g && g.d(y), v && v.d(y), (u = !1), f();
    }
  };
}
function wl(t, e, l) {
  const r = ['btnClass'];
  let n = re(e, r),
    { $$slots: i = {}, $$scope: o } = e,
    {
      btnClass:
        a = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5'
    } = e;
  const s = () => {
    const u = window.document.documentElement.classList.toggle('dark');
    localStorage.setItem('color-theme', u ? 'dark' : 'light');
  };
  return (
    (t.$$set = (u) => {
      l(3, (e = x(x({}, e), ie(u)))),
        l(2, (n = re(e, r))),
        'btnClass' in u && l(0, (a = u.btnClass)),
        '$$scope' in u && l(4, (o = u.$$scope));
    }),
    (e = ie(e)),
    [a, s, n, e, o, i]
  );
}
class yl extends Q {
  constructor(e) {
    super(), J(this, e, wl, pl, G, { btnClass: 0 });
  }
}
function vl(t) {
  let e;
  const l = t[5].default,
    r = $(l, t, t[4], null);
  return {
    c() {
      r && r.c();
    },
    m(n, i) {
      r && r.m(n, i), (e = !0);
    },
    p(n, i) {
      r && r.p && (!e || i & 16) && te(r, l, n, n[4], e ? ee(l, n[4], i, null) : le(n[4]), null);
    },
    i(n) {
      e || (C(r, n), (e = !0));
    },
    o(n) {
      j(r, n), (e = !1);
    },
    d(n) {
      r && r.d(n);
    }
  };
}
function Cl(t) {
  let e = t[0],
    l,
    r,
    n = t[0] && ze(t);
  return {
    c() {
      n && n.c(), (l = ce());
    },
    m(i, o) {
      n && n.m(i, o), N(i, l, o), (r = !0);
    },
    p(i, o) {
      i[0]
        ? e
          ? G(e, i[0])
            ? (n.d(1), (n = ze(i)), n.c(), n.m(l.parentNode, l))
            : n.p(i, o)
          : ((n = ze(i)), n.c(), n.m(l.parentNode, l))
        : e && (n.d(1), (n = null)),
        (e = i[0]);
    },
    i(i) {
      r || (C(n), (r = !0));
    },
    o(i) {
      j(n), (r = !1);
    },
    d(i) {
      i && A(l), n && n.d(i);
    }
  };
}
function ze(t) {
  let e, l, r, n;
  const i = t[5].default,
    o = $(i, t, t[4], null);
  let a = [t[3]],
    s = {};
  for (let u = 0; u < a.length; u += 1) s = x(s, a[u]);
  return {
    c() {
      (e = P(t[0])), o && o.c(), /-/.test(t[0]) ? Se(e, s) : ne(e, s);
    },
    m(u, f) {
      N(u, e, f), o && o.m(e, null), (l = !0), r || ((n = Pe(t[2].call(null, e))), (r = !0));
    },
    p(u, f) {
      o && o.p && (!l || f & 16) && te(o, i, u, u[4], l ? ee(i, u[4], f, null) : le(u[4]), null),
        (s = de(a, [f & 8 && u[3]])),
        /-/.test(u[0]) ? Se(e, s) : ne(e, s);
    },
    i(u) {
      l || (C(o, u), (l = !0));
    },
    o(u) {
      j(o, u), (l = !1);
    },
    d(u) {
      u && A(e), o && o.d(u), (r = !1), n();
    }
  };
}
function Dl(t) {
  let e, l, r, n;
  const i = [Cl, vl],
    o = [];
  function a(s, u) {
    return s[1] ? 0 : 1;
  }
  return (
    (e = a(t)),
    (l = o[e] = i[e](t)),
    {
      c() {
        l.c(), (r = ce());
      },
      m(s, u) {
        o[e].m(s, u), N(s, r, u), (n = !0);
      },
      p(s, [u]) {
        let f = e;
        (e = a(s)),
          e === f
            ? o[e].p(s, u)
            : (se(),
              j(o[f], 1, 1, () => {
                o[f] = null;
              }),
              ae(),
              (l = o[e]),
              l ? l.p(s, u) : ((l = o[e] = i[e](s)), l.c()),
              C(l, 1),
              l.m(r.parentNode, r));
      },
      i(s) {
        n || (C(l), (n = !0));
      },
      o(s) {
        j(l), (n = !1);
      },
      d(s) {
        o[e].d(s), s && A(r);
      }
    }
  );
}
function El(t, e, l) {
  const r = ['tag', 'show', 'use'];
  let n = re(e, r),
    { $$slots: i = {}, $$scope: o } = e,
    { tag: a = 'div' } = e,
    { show: s } = e,
    { use: u = () => {} } = e;
  return (
    (t.$$set = (f) => {
      (e = x(x({}, e), ie(f))),
        l(3, (n = re(e, r))),
        'tag' in f && l(0, (a = f.tag)),
        'show' in f && l(1, (s = f.show)),
        'use' in f && l(2, (u = f.use)),
        '$$scope' in f && l(4, (o = f.$$scope));
    }),
    [a, s, u, n, o, i]
  );
}
class Sl extends Q {
  constructor(e) {
    super(), J(this, e, El, Dl, G, { tag: 0, show: 1, use: 2 });
  }
}
function Al(t) {
  let e;
  const l = t[7].default,
    r = $(l, t, t[6], null);
  return {
    c() {
      r && r.c();
    },
    m(n, i) {
      r && r.m(n, i), (e = !0);
    },
    p(n, i) {
      r && r.p && (!e || i & 64) && te(r, l, n, n[6], e ? ee(l, n[6], i, null) : le(n[6]), null);
    },
    i(n) {
      e || (C(r, n), (e = !0));
    },
    o(n) {
      j(r, n), (e = !1);
    },
    d(n) {
      r && r.d(n);
    }
  };
}
function Ll(t) {
  let e, l;
  const r = t[7].default,
    n = $(r, t, t[6], null);
  let i = [t[3], { class: t[2] }],
    o = {};
  for (let a = 0; a < i.length; a += 1) o = x(o, i[a]);
  return {
    c() {
      (e = P('label')), n && n.c(), ne(e, o);
    },
    m(a, s) {
      N(a, e, s), n && n.m(e, null), t[8](e), (l = !0);
    },
    p(a, s) {
      n && n.p && (!l || s & 64) && te(n, r, a, a[6], l ? ee(r, a[6], s, null) : le(a[6]), null),
        ne(e, (o = de(i, [s & 8 && a[3], (!l || s & 4) && { class: a[2] }])));
    },
    i(a) {
      l || (C(n, a), (l = !0));
    },
    o(a) {
      j(n, a), (l = !1);
    },
    d(a) {
      a && A(e), n && n.d(a), t[8](null);
    }
  };
}
function Pl(t) {
  let e, l, r, n;
  const i = [Ll, Al],
    o = [];
  function a(s, u) {
    return s[0] ? 0 : 1;
  }
  return (
    (e = a(t)),
    (l = o[e] = i[e](t)),
    {
      c() {
        l.c(), (r = ce());
      },
      m(s, u) {
        o[e].m(s, u), N(s, r, u), (n = !0);
      },
      p(s, [u]) {
        let f = e;
        (e = a(s)),
          e === f
            ? o[e].p(s, u)
            : (se(),
              j(o[f], 1, 1, () => {
                o[f] = null;
              }),
              ae(),
              (l = o[e]),
              l ? l.p(s, u) : ((l = o[e] = i[e](s)), l.c()),
              C(l, 1),
              l.m(r.parentNode, r));
      },
      i(s) {
        n || (C(l), (n = !0));
      },
      o(s) {
        j(l), (n = !1);
      },
      d(s) {
        o[e].d(s), s && A(r);
      }
    }
  );
}
function Nl(t, e, l) {
  let r;
  const n = ['color', 'defaultClass', 'show'];
  let i = re(e, n),
    { $$slots: o = {}, $$scope: a } = e,
    { color: s = 'gray' } = e,
    { defaultClass: u = 'text-sm font-medium block' } = e,
    { show: f = !0 } = e,
    c;
  const m = {
    gray: 'text-gray-900 dark:text-gray-300',
    green: 'text-green-700 dark:text-green-500',
    red: 'text-red-700 dark:text-red-500',
    disabled: 'text-gray-400 dark:text-gray-500'
  };
  function g(b) {
    Oe[b ? 'unshift' : 'push'](() => {
      (c = b), l(1, c);
    });
  }
  return (
    (t.$$set = (b) => {
      l(10, (e = x(x({}, e), ie(b)))),
        l(3, (i = re(e, n))),
        'color' in b && l(4, (s = b.color)),
        'defaultClass' in b && l(5, (u = b.defaultClass)),
        'show' in b && l(0, (f = b.show)),
        '$$scope' in b && l(6, (a = b.$$scope));
    }),
    (t.$$.update = () => {
      if (t.$$.dirty & 18) {
        const b = c == null ? void 0 : c.control;
        l(4, (s = b != null && b.disabled ? 'disabled' : s));
      }
      l(2, (r = ue(u, m[s], e.class)));
    }),
    (e = ie(e)),
    [f, c, r, i, s, u, a, o, g]
  );
}
class Ve extends Q {
  constructor(e) {
    super(), J(this, e, Nl, Pl, G, { color: 4, defaultClass: 5, show: 0 });
  }
}
const jl = {
    red: 'text-red-600 focus:ring-red-500 dark:focus:ring-red-600',
    green: 'text-green-600 focus:ring-green-500 dark:focus:ring-green-600',
    purple: 'text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600',
    teal: 'text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600',
    yellow: 'text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600',
    orange: 'text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600',
    blue: 'text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600'
  },
  et = (t, e) => ue(t ? 'inline-flex' : 'flex', 'items-center', e),
  tt = (t, e, l, r, n) =>
    ue(
      'w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2',
      n === !0 && 'mr-2',
      r ? 'dark:bg-gray-600 dark:border-gray-500' : 'dark:bg-gray-700 dark:border-gray-600',
      t && 'sr-only peer',
      l && 'rounded',
      jl[e],
      n
    );
function Tl(t) {
  let e,
    l,
    r,
    n,
    i,
    o,
    a = [
      { type: 'checkbox' },
      { __value: t[5] },
      t[11],
      { class: (l = tt(t[3], t[2], !0, t[6], t[10].default || t[9].class)) }
    ],
    s = {};
  for (let c = 0; c < a.length; c += 1) s = x(s, a[c]);
  const u = t[12].default,
    f = $(u, t, t[25], null);
  return {
    c() {
      (e = P('input')), f && f.c(), ne(e, s);
    },
    m(c, m) {
      N(c, e, m),
        e.autofocus && e.focus(),
        (e.checked = t[1]),
        f && f.m(c, m),
        (n = !0),
        i ||
          ((o = [
            Pe((r = t[7].call(null, e, t[0]))),
            q(e, 'change', t[24]),
            q(e, 'keyup', t[13]),
            q(e, 'keydown', t[14]),
            q(e, 'keypress', t[15]),
            q(e, 'focus', t[16]),
            q(e, 'blur', t[17]),
            q(e, 'click', t[18]),
            q(e, 'mouseover', t[19]),
            q(e, 'mouseenter', t[20]),
            q(e, 'mouseleave', t[21]),
            q(e, 'paste', t[22]),
            q(e, 'change', t[8]),
            q(e, 'change', t[23])
          ]),
          (i = !0));
    },
    p(c, m) {
      ne(
        e,
        (s = de(a, [
          { type: 'checkbox' },
          (!n || m & 32) && { __value: c[5] },
          m & 2048 && c[11],
          (!n || (m & 1548 && l !== (l = tt(c[3], c[2], !0, c[6], c[10].default || c[9].class)))) && {
            class: l
          }
        ]))
      ),
        r && pe(r.update) && m & 1 && r.update.call(null, c[0]),
        m & 2 && (e.checked = c[1]),
        f && f.p && (!n || m & 33554432) && te(f, u, c, c[25], n ? ee(u, c[25], m, null) : le(c[25]), null);
    },
    i(c) {
      n || (C(f, c), (n = !0));
    },
    o(c) {
      j(f, c), (n = !1);
    },
    d(c) {
      c && A(e), f && f.d(c), (i = !1), ge(o);
    }
  };
}
function zl(t) {
  let e, l;
  return (
    (e = new Ve({
      props: {
        class: et(t[4], t[9].class),
        show: !!t[10].default,
        $$slots: { default: [Tl] },
        $$scope: { ctx: t }
      }
    })),
    {
      c() {
        X(e.$$.fragment);
      },
      m(r, n) {
        Z(e, r, n), (l = !0);
      },
      p(r, [n]) {
        const i = {};
        n & 528 && (i.class = et(r[4], r[9].class)),
          n & 1024 && (i.show = !!r[10].default),
          n & 33558063 && (i.$$scope = { dirty: n, ctx: r }),
          e.$set(i);
      },
      i(r) {
        l || (C(e.$$.fragment, r), (l = !0));
      },
      o(r) {
        j(e.$$.fragment, r), (l = !1);
      },
      d(r) {
        Y(e, r);
      }
    }
  );
}
function Il(t, e, l) {
  const r = ['color', 'custom', 'inline', 'group', 'value', 'checked'];
  let n = re(e, r),
    { $$slots: i = {}, $$scope: o } = e;
  const a = wt(i);
  let { color: s = 'blue' } = e,
    { custom: u = !1 } = e,
    { inline: f = !1 } = e,
    { group: c = [] } = e,
    { value: m = '' } = e,
    { checked: g = void 0 } = e,
    b = Le('background');
  function E(h, H) {
    return (
      g === void 0 && l(1, (g = H.includes(m))),
      v(),
      {
        update(oe) {
          l(1, (g = oe.includes(m)));
        }
      }
    );
  }
  function v() {
    const h = c.indexOf(m);
    g === void 0 && l(1, (g = h >= 0)),
      g ? h < 0 && (c.push(m), l(0, c)) : h >= 0 && (c.splice(h, 1), l(0, c));
  }
  function p(h) {
    R.call(this, t, h);
  }
  function L(h) {
    R.call(this, t, h);
  }
  function y(h) {
    R.call(this, t, h);
  }
  function k(h) {
    R.call(this, t, h);
  }
  function _(h) {
    R.call(this, t, h);
  }
  function S(h) {
    R.call(this, t, h);
  }
  function I(h) {
    R.call(this, t, h);
  }
  function F(h) {
    R.call(this, t, h);
  }
  function U(h) {
    R.call(this, t, h);
  }
  function V(h) {
    R.call(this, t, h);
  }
  function D(h) {
    R.call(this, t, h);
  }
  function T() {
    (g = this.checked), l(1, g);
  }
  return (
    (t.$$set = (h) => {
      l(9, (e = x(x({}, e), ie(h)))),
        l(11, (n = re(e, r))),
        'color' in h && l(2, (s = h.color)),
        'custom' in h && l(3, (u = h.custom)),
        'inline' in h && l(4, (f = h.inline)),
        'group' in h && l(0, (c = h.group)),
        'value' in h && l(5, (m = h.value)),
        'checked' in h && l(1, (g = h.checked)),
        '$$scope' in h && l(25, (o = h.$$scope));
    }),
    (e = ie(e)),
    [c, g, s, u, f, m, b, E, v, e, a, n, i, p, L, y, k, _, S, I, F, U, V, D, T, o]
  );
}
class Ol extends Q {
  constructor(e) {
    super(), J(this, e, Il, zl, G, { color: 2, custom: 3, inline: 4, group: 0, value: 5, checked: 1 });
  }
}
const ql = (t) => ({ props: t[0] & 36 }),
  lt = (t) => ({ props: { ...t[5], class: t[2] } }),
  Ml = (t) => ({ props: t[0] & 36 }),
  rt = (t) => ({ props: { ...t[5], class: t[2] } }),
  Rl = (t) => ({ props: t[0] & 36 }),
  nt = (t) => ({ props: { ...t[5], class: t[2] } });
function it(t) {
  let e, l;
  const r = t[10].left,
    n = $(r, t, t[25], nt);
  return {
    c() {
      (e = P('div')), n && n.c(), d(e, 'class', jt + ' left-0 pl-2.5 pointer-events-none');
    },
    m(i, o) {
      N(i, e, o), n && n.m(e, null), (l = !0);
    },
    p(i, o) {
      n && n.p && (!l || o[0] & 33554468) && te(n, r, i, i[25], l ? ee(r, i[25], o, Rl) : le(i[25]), nt);
    },
    i(i) {
      l || (C(n, i), (l = !0));
    },
    o(i) {
      j(n, i), (l = !1);
    },
    d(i) {
      i && A(e), n && n.d(i);
    }
  };
}
function Fl(t) {
  let e,
    l,
    r,
    n,
    i = [t[5], { class: t[2] }],
    o = {};
  for (let a = 0; a < i.length; a += 1) o = x(o, i[a]);
  return {
    c() {
      (e = P('input')), ne(e, o);
    },
    m(a, s) {
      N(a, e, s),
        e.autofocus && e.focus(),
        Ye(e, t[0]),
        r ||
          ((n = [
            q(e, 'input', t[24]),
            q(e, 'blur', t[11]),
            q(e, 'change', t[12]),
            q(e, 'click', t[13]),
            q(e, 'contextmenu', t[14]),
            q(e, 'focus', t[15]),
            q(e, 'keydown', t[16]),
            q(e, 'keypress', t[17]),
            q(e, 'keyup', t[18]),
            q(e, 'mouseover', t[19]),
            q(e, 'mouseenter', t[20]),
            q(e, 'mouseleave', t[21]),
            q(e, 'paste', t[22]),
            q(e, 'input', t[23]),
            Pe((l = t[3].call(null, e, t[1])))
          ]),
          (r = !0));
    },
    p(a, s) {
      ne(e, (o = de(i, [s[0] & 32 && a[5], s[0] & 4 && { class: a[2] }]))),
        s[0] & 1 && e.value !== a[0] && Ye(e, a[0]),
        l && pe(l.update) && s[0] & 2 && l.update.call(null, a[1]);
    },
    d(a) {
      a && A(e), (r = !1), ge(n);
    }
  };
}
function st(t) {
  let e, l;
  const r = t[10].right,
    n = $(r, t, t[25], lt);
  return {
    c() {
      (e = P('div')), n && n.c(), d(e, 'class', jt + ' right-0 pr-2.5');
    },
    m(i, o) {
      N(i, e, o), n && n.m(e, null), (l = !0);
    },
    p(i, o) {
      n && n.p && (!l || o[0] & 33554468) && te(n, r, i, i[25], l ? ee(r, i[25], o, ql) : le(i[25]), lt);
    },
    i(i) {
      l || (C(n, i), (l = !0));
    },
    o(i) {
      j(n, i), (l = !1);
    },
    d(i) {
      i && A(e), n && n.d(i);
    }
  };
}
function Bl(t) {
  let e,
    l,
    r,
    n,
    i = t[4].left && it(t);
  const o = t[10].default,
    a = $(o, t, t[25], rt),
    s = a || Fl(t);
  let u = t[4].right && st(t);
  return {
    c() {
      i && i.c(), (e = M()), s && s.c(), (l = M()), u && u.c(), (r = ce());
    },
    m(f, c) {
      i && i.m(f, c), N(f, e, c), s && s.m(f, c), N(f, l, c), u && u.m(f, c), N(f, r, c), (n = !0);
    },
    p(f, c) {
      f[4].left
        ? i
          ? (i.p(f, c), c[0] & 16 && C(i, 1))
          : ((i = it(f)), i.c(), C(i, 1), i.m(e.parentNode, e))
        : i &&
          (se(),
          j(i, 1, 1, () => {
            i = null;
          }),
          ae()),
        a
          ? a.p && (!n || c[0] & 33554468) && te(a, o, f, f[25], n ? ee(o, f[25], c, Ml) : le(f[25]), rt)
          : s && s.p && (!n || c[0] & 39) && s.p(f, n ? c : [-1, -1]),
        f[4].right
          ? u
            ? (u.p(f, c), c[0] & 16 && C(u, 1))
            : ((u = st(f)), u.c(), C(u, 1), u.m(r.parentNode, r))
          : u &&
            (se(),
            j(u, 1, 1, () => {
              u = null;
            }),
            ae());
    },
    i(f) {
      n || (C(i), C(s, f), C(u), (n = !0));
    },
    o(f) {
      j(i), j(s, f), j(u), (n = !1);
    },
    d(f) {
      i && i.d(f), f && A(e), s && s.d(f), f && A(l), u && u.d(f), f && A(r);
    }
  };
}
function Hl(t) {
  let e, l;
  return (
    (e = new Sl({
      props: {
        class: 'relative w-full',
        show: t[4].left || t[4].right,
        $$slots: { default: [Bl] },
        $$scope: { ctx: t }
      }
    })),
    {
      c() {
        X(e.$$.fragment);
      },
      m(r, n) {
        Z(e, r, n), (l = !0);
      },
      p(r, n) {
        const i = {};
        n[0] & 16 && (i.show = r[4].left || r[4].right),
          n[0] & 33554487 && (i.$$scope = { dirty: n, ctx: r }),
          e.$set(i);
      },
      i(r) {
        l || (C(e.$$.fragment, r), (l = !0));
      },
      o(r) {
        j(e.$$.fragment, r), (l = !1);
      },
      d(r) {
        Y(e, r);
      }
    }
  );
}
function xl(t) {
  return t && t === 'xs' ? 'sm' : t === 'xl' ? 'lg' : t;
}
let jt = 'flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400';
function Ul(t, e, l) {
  let r;
  const n = ['type', 'value', 'size', 'defaultClass', 'color'];
  let i = re(e, n),
    { $$slots: o = {}, $$scope: a } = e;
  const s = wt(o);
  let { type: u = 'text' } = e,
    { value: f = '' } = e,
    { size: c = void 0 } = e,
    { defaultClass: m = 'block w-full disabled:cursor-not-allowed disabled:opacity-50' } = e,
    { color: g = 'base' } = e;
  const b = {
      base: 'border-gray-300 dark:border-gray-600',
      tinted: 'border-gray-300 dark:border-gray-500',
      green: 'border-green-500 dark:border-green-400',
      red: 'border-red-500 dark:border-red-400'
    },
    E = {
      base: 'focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500',
      green:
        'focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500',
      red: 'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500'
    },
    v = {
      base: 'bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400',
      tinted: 'bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400',
      green:
        'bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700',
      red: 'bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700'
    };
  let p = Le('background'),
    L = Le('group');
  const y = (z, Ht) => (
      (z.type = Ht),
      {
        update(xt) {
          z.type = xt;
        }
      }
    ),
    k = { sm: 'sm:text-xs', md: 'text-sm', lg: 'sm:text-base' },
    _ = { sm: 'pl-9', md: 'pl-10', lg: 'pl-11' },
    S = { sm: 'pr-9', md: 'pr-10', lg: 'pr-11' },
    I = { sm: 'p-2', md: 'p-2.5', lg: 'p-4' };
  let F;
  function U(z) {
    R.call(this, t, z);
  }
  function V(z) {
    R.call(this, t, z);
  }
  function D(z) {
    R.call(this, t, z);
  }
  function T(z) {
    R.call(this, t, z);
  }
  function h(z) {
    R.call(this, t, z);
  }
  function H(z) {
    R.call(this, t, z);
  }
  function oe(z) {
    R.call(this, t, z);
  }
  function O(z) {
    R.call(this, t, z);
  }
  function Ot(z) {
    R.call(this, t, z);
  }
  function qt(z) {
    R.call(this, t, z);
  }
  function Mt(z) {
    R.call(this, t, z);
  }
  function Rt(z) {
    R.call(this, t, z);
  }
  function Ft(z) {
    R.call(this, t, z);
  }
  function Bt() {
    (f = this.value), l(0, f);
  }
  return (
    (t.$$set = (z) => {
      l(35, (e = x(x({}, e), ie(z)))),
        l(5, (i = re(e, n))),
        'type' in z && l(1, (u = z.type)),
        'value' in z && l(0, (f = z.value)),
        'size' in z && l(6, (c = z.size)),
        'defaultClass' in z && l(7, (m = z.defaultClass)),
        'color' in z && l(8, (g = z.color)),
        '$$scope' in z && l(25, (a = z.$$scope));
    }),
    (t.$$.update = () => {
      t.$$.dirty[0] & 64 && l(9, (r = c || xl(L == null ? void 0 : L.size) || 'md'));
      {
        const z = g === 'base' && p ? 'tinted' : g;
        l(
          2,
          (F = ue(
            m,
            s.left && _[r],
            s.right && S[r],
            E[g],
            v[z],
            b[z],
            I[r],
            k[r],
            L || 'rounded-lg',
            L && 'first:rounded-l-lg last:rounded-r-lg',
            L && 'border-l-0 first:border-l last:border-r',
            e.class
          ))
        );
      }
    }),
    (e = ie(e)),
    [f, u, F, y, s, i, c, m, g, r, o, U, V, D, T, h, H, oe, O, Ot, qt, Mt, Rt, Ft, Bt, a]
  );
}
class Vl extends Q {
  constructor(e) {
    super(),
      J(this, e, Ul, Hl, G, { type: 1, value: 0, size: 6, defaultClass: 7, color: 8 }, null, [-1, -1]);
  }
}
function Zl(t) {
  let e, l, r;
  const n = t[6].default,
    i = $(n, t, t[5], null);
  let o = [t[3], { href: t[0] }, { class: (l = ue(t[2], t[1], t[4].class)) }],
    a = {};
  for (let s = 0; s < o.length; s += 1) a = x(a, o[s]);
  return {
    c() {
      (e = P('a')), i && i.c(), ne(e, a);
    },
    m(s, u) {
      N(s, e, u), i && i.m(e, null), (r = !0);
    },
    p(s, [u]) {
      i && i.p && (!r || u & 32) && te(i, n, s, s[5], r ? ee(n, s[5], u, null) : le(s[5]), null),
        ne(
          e,
          (a = de(o, [
            u & 8 && s[3],
            (!r || u & 1) && { href: s[0] },
            (!r || (u & 22 && l !== (l = ue(s[2], s[1], s[4].class)))) && { class: l }
          ]))
        );
    },
    i(s) {
      r || (C(i, s), (r = !0));
    },
    o(s) {
      j(i, s), (r = !1);
    },
    d(s) {
      s && A(e), i && i.d(s);
    }
  };
}
function Yl(t, e, l) {
  const r = ['href', 'color', 'aClass'];
  let n = re(e, r),
    { $$slots: i = {}, $$scope: o } = e,
    { href: a = '#' } = e,
    { color: s = 'text-blue-600 dark:text-blue-500' } = e,
    { aClass: u = 'inline-flex items-center hover:underline' } = e;
  return (
    (t.$$set = (f) => {
      l(4, (e = x(x({}, e), ie(f)))),
        l(3, (n = re(e, r))),
        'href' in f && l(0, (a = f.href)),
        'color' in f && l(1, (s = f.color)),
        'aClass' in f && l(2, (u = f.aClass)),
        '$$scope' in f && l(5, (o = f.$$scope));
    }),
    (e = ie(e)),
    [a, s, u, n, e, o, i]
  );
}
class Xl extends Q {
  constructor(e) {
    super(), J(this, e, Yl, Zl, G, { href: 0, color: 1, aClass: 2 });
  }
}
function Gl(t) {
  let e, l;
  const r = t[15].default,
    n = $(r, t, t[14], null);
  let i = [t[1], { class: t[0] }],
    o = {};
  for (let a = 0; a < i.length; a += 1) o = x(o, i[a]);
  return {
    c() {
      (e = P('p')), n && n.c(), ne(e, o);
    },
    m(a, s) {
      N(a, e, s), n && n.m(e, null), (l = !0);
    },
    p(a, [s]) {
      n && n.p && (!l || s & 16384) && te(n, r, a, a[14], l ? ee(r, a[14], s, null) : le(a[14]), null),
        ne(e, (o = de(i, [s & 2 && a[1], { class: a[0] }])));
    },
    i(a) {
      l || (C(n, a), (l = !0));
    },
    o(a) {
      j(n, a), (l = !1);
    },
    d(a) {
      a && A(e), n && n.d(a);
    }
  };
}
function Kl(t, e, l) {
  const r = [
    'color',
    'height',
    'align',
    'justify',
    'italic',
    'firstupper',
    'upperClass',
    'opacity',
    'whitespace',
    'size',
    'space',
    'weight'
  ];
  let n = re(e, r),
    { $$slots: i = {}, $$scope: o } = e,
    { color: a = 'text-gray-900 dark:text-white' } = e,
    { height: s = 'normal' } = e,
    { align: u = 'left' } = e,
    { justify: f = !1 } = e,
    { italic: c = !1 } = e,
    { firstupper: m = !1 } = e,
    {
      upperClass:
        g = 'first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left'
    } = e,
    { opacity: b = void 0 } = e,
    { whitespace: E = 'normal' } = e,
    { size: v = 'base' } = e,
    { space: p = void 0 } = e,
    { weight: L = 'normal' } = e;
  const y = {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl'
    },
    k = {
      thin: 'font-thin',
      extralight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black'
    },
    _ = {
      tighter: 'tracking-tighter',
      tight: 'tracking-tight',
      normal: 'tracking-normal',
      wide: 'tracking-wide',
      wider: 'tracking-wider',
      widest: 'tracking-widest'
    },
    S = { normal: 'leading-normal', relaxed: 'leading-relaxed', loose: 'leading-loose' },
    I = { left: 'text-left', center: 'text-center', right: 'text-right' },
    F = {
      normal: 'whitespace-normal',
      nowrap: 'whitespace-nowrap',
      pre: 'whitespace-pre',
      preline: 'whitespace-pre-line',
      prewrap: 'whitespace-pre-wrap'
    };
  let U = a
      .split(' ')
      .map((D) => D.trim())
      .map((D) => D + '/' + String(b))
      .join(' '),
    V = ue(
      v && y[v],
      (b && U) || (a && a),
      s && S[s],
      L && k[L],
      p && _[p],
      u && I[u],
      f && 'text-justify',
      c && 'italic',
      m && g,
      E && F[E],
      e.class
    );
  return (
    (t.$$set = (D) => {
      l(23, (e = x(x({}, e), ie(D)))),
        l(1, (n = re(e, r))),
        'color' in D && l(2, (a = D.color)),
        'height' in D && l(3, (s = D.height)),
        'align' in D && l(4, (u = D.align)),
        'justify' in D && l(5, (f = D.justify)),
        'italic' in D && l(6, (c = D.italic)),
        'firstupper' in D && l(7, (m = D.firstupper)),
        'upperClass' in D && l(8, (g = D.upperClass)),
        'opacity' in D && l(9, (b = D.opacity)),
        'whitespace' in D && l(10, (E = D.whitespace)),
        'size' in D && l(11, (v = D.size)),
        'space' in D && l(12, (p = D.space)),
        'weight' in D && l(13, (L = D.weight)),
        '$$scope' in D && l(14, (o = D.$$scope));
    }),
    (e = ie(e)),
    [V, n, a, s, u, f, c, m, g, b, E, v, p, L, o, i]
  );
}
class Tt extends Q {
  constructor(e) {
    super(),
      J(this, e, Kl, Gl, G, {
        color: 2,
        height: 3,
        align: 4,
        justify: 5,
        italic: 6,
        firstupper: 7,
        upperClass: 8,
        opacity: 9,
        whitespace: 10,
        size: 11,
        space: 12,
        weight: 13
      });
  }
}
var Wl = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
function Jl(t, e) {
  if (e === 0) return ['just now', 'right now'];
  var l = Wl[Math.floor(e / 2)];
  return t > 1 && (l += 's'), [t + ' ' + l + ' ago', 'in ' + t + ' ' + l];
}
var Ql = ['秒', '分钟', '小时', '天', '周', '个月', '年'];
function $l(t, e) {
  if (e === 0) return ['刚刚', '片刻后'];
  var l = Ql[~~(e / 2)];
  return [t + ' ' + l + '前', t + ' ' + l + '后'];
}
var Fe = {},
  zt = function (t, e) {
    Fe[t] = e;
  },
  er = function (t) {
    return Fe[t] || Fe.en_US;
  },
  Ie = [60, 60, 24, 7, 365 / 7 / 12, 12];
function at(t) {
  return t instanceof Date
    ? t
    : !isNaN(t) || /^\d+$/.test(t)
    ? new Date(parseInt(t))
    : ((t = (t || '')
        .trim()
        .replace(/\.\d+/, '')
        .replace(/-/, '/')
        .replace(/-/, '/')
        .replace(/(\d)T(\d)/, '$1 $2')
        .replace(/Z/, ' UTC')
        .replace(/([+-]\d\d):?(\d\d)/, ' $1$2')),
      new Date(t));
}
function tr(t, e) {
  var l = t < 0 ? 1 : 0;
  t = Math.abs(t);
  for (var r = t, n = 0; t >= Ie[n] && n < Ie.length; n++) t /= Ie[n];
  return (
    (t = Math.floor(t)),
    (n *= 2),
    t > (n === 0 ? 9 : 1) && (n += 1),
    e(t, n, r)[l].replace('%s', t.toString())
  );
}
function lr(t, e) {
  var l = e ? at(e) : new Date();
  return (+l - +at(t)) / 1e3;
}
var Be = function (t, e, l) {
  var r = lr(t, l && l.relativeDate);
  return tr(r, er(e));
};
zt('en_US', Jl);
zt('zh_CN', $l);
const rr = function (t, e) {
    return t.join(e).toLowerCase();
  },
  nr = '(?:[a-z](?=[A-Z])|[A-Z](?=[A-Z][a-z]))';
function ir(t, e) {
  for (let l = 0, r = t.length; l < r; l++) {
    const n = t[l],
      i = e[n];
    if (i !== void 0) {
      t = t.substr(0, l) + i + t.substr(l + 1);
      const o = String(i).length - 1;
      (l += o), (r += o);
    }
  }
  return t;
}
const sr = /[\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF]+/g,
  ar = /[A-Za-z\d]+/g,
  or = new RegExp('[A-Za-z\\d]*?' + nr + '|[A-Za-z\\d]+', 'g');
function He(t, e) {
  e = e || {};
  const l = e.camelCase !== void 0 ? e.camelCase : !0,
    r = e.separator !== void 0 ? e.separator : '-',
    n = e.transformer !== void 0 ? e.transformer : rr,
    i = (e.dictionary ? ir(String(t), e.dictionary) : String(t))
      .normalize('NFKD')
      .replace(sr, '')
      .match(l ? or : ar);
  return i ? (n ? n(i, r) : i.join(r)) : '';
}
function ot(t) {
  let e, l, r;
  return {
    c() {
      (e = P('p')), (l = B('Published: ')), (r = B(t[3])), d(e, 'class', 'text-lg dark:text-white');
    },
    m(n, i) {
      N(n, e, i), w(e, l), w(e, r);
    },
    p(n, i) {
      i & 8 && W(r, n[3]);
    },
    d(n) {
      n && A(e);
    }
  };
}
function ur(t) {
  let e,
    l,
    r,
    n,
    i,
    o,
    a,
    s,
    u,
    f,
    c,
    m = t[1].substring(0, 180) + '',
    g,
    b,
    E,
    v,
    p,
    L = t[3] && ot(t);
  return {
    c() {
      (e = P('div')),
        (l = P('img')),
        (n = M()),
        (i = P('div')),
        (o = P('h2')),
        (a = P('a')),
        (s = B(t[0])),
        (f = M()),
        (c = P('p')),
        (g = B(m)),
        (b = B('...')),
        (E = M()),
        L && L.c(),
        fe(l.src, (r = t[2])) || d(l, 'src', r),
        d(l, 'alt', 'img'),
        d(l, 'class', 'rounded-md max-w-xs mr-4'),
        d(a, 'href', (u = `/article/${He(t[0])}`)),
        d(o, 'class', 'mb-2 text-2xl font-medium dark:text-white'),
        d(c, 'class', 'my-2 text-lg dark:text-white'),
        d(e, 'class', 'flex py-8 px-4');
    },
    m(y, k) {
      N(y, e, k),
        w(e, l),
        w(e, n),
        w(e, i),
        w(i, o),
        w(o, a),
        w(a, s),
        w(i, f),
        w(i, c),
        w(c, g),
        w(c, b),
        w(i, E),
        L && L.m(i, null),
        v || ((p = Pe(il.call(null, a))), (v = !0));
    },
    p(y, [k]) {
      k & 4 && !fe(l.src, (r = y[2])) && d(l, 'src', r),
        k & 1 && W(s, y[0]),
        k & 1 && u !== (u = `/article/${He(y[0])}`) && d(a, 'href', u),
        k & 2 && m !== (m = y[1].substring(0, 180) + '') && W(g, m),
        y[3] ? (L ? L.p(y, k) : ((L = ot(y)), L.c(), L.m(i, null))) : L && (L.d(1), (L = null));
    },
    i: K,
    o: K,
    d(y) {
      y && A(e), L && L.d(), (v = !1), p();
    }
  };
}
function fr(t, e, l) {
  let { title: r, description: n, image: i, publishDate: o } = e;
  return (
    (t.$$set = (a) => {
      'title' in a && l(0, (r = a.title)),
        'description' in a && l(1, (n = a.description)),
        'image' in a && l(2, (i = a.image)),
        'publishDate' in a && l(3, (o = a.publishDate));
    }),
    [r, n, i, o]
  );
}
class cr extends Q {
  constructor(e) {
    super(), J(this, e, fr, ur, G, { title: 0, description: 1, image: 2, publishDate: 3 });
  }
}
const xe = [
  {
    title: '17 Awesome Places to Visit in Germany',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://picsum.photos/id/1040/800/400',
    publishDate: '2021/12/12'
  },
  {
    title: '21 Essential Backpack Items for Hiking',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://picsum.photos/id/1018/800/400',
    publishDate: '2021/11/17'
  },
  {
    title: '10 Safety Tips Every Traveller Should Know',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://picsum.photos/id/206/800/400',
    publishDate: '2021/09/06'
  }
];
function ut(t, e, l) {
  const r = t.slice();
  return (r[0] = e[l]), (r[2] = l), r;
}
function ft(t) {
  let e, l;
  return (
    (e = new cr({
      props: {
        title: t[0].title,
        description: t[0].content,
        image: t[0].image,
        publishDate: Be(t[0].publishDate)
      }
    })),
    {
      c() {
        X(e.$$.fragment);
      },
      m(r, n) {
        Z(e, r, n), (l = !0);
      },
      p: K,
      i(r) {
        l || (C(e.$$.fragment, r), (l = !0));
      },
      o(r) {
        j(e.$$.fragment, r), (l = !1);
      },
      d(r) {
        Y(e, r);
      }
    }
  );
}
function dr(t) {
  let e,
    l,
    r,
    n,
    i,
    o,
    a = xe,
    s = [];
  for (let f = 0; f < a.length; f += 1) s[f] = ft(ut(t, a, f));
  const u = (f) =>
    j(s[f], 1, 1, () => {
      s[f] = null;
    });
  return {
    c() {
      (e = P('h1')),
        (e.textContent = 'Svelte Starter'),
        (l = M()),
        (r = P('p')),
        (r.textContent = 'Svelte + Vite + TailwindCSS + Flowbite-Svelte + Svelte-Spa-Router'),
        (n = M());
      for (let f = 0; f < s.length; f += 1) s[f].c();
      (i = ce()), d(e, 'class', 'text-3xl dark:text-white mb-4'), d(r, 'class', 'text-xl dark:text-white');
    },
    m(f, c) {
      N(f, e, c), N(f, l, c), N(f, r, c), N(f, n, c);
      for (let m = 0; m < s.length; m += 1) s[m].m(f, c);
      N(f, i, c), (o = !0);
    },
    p(f, [c]) {
      if (c & 0) {
        a = xe;
        let m;
        for (m = 0; m < a.length; m += 1) {
          const g = ut(f, a, m);
          s[m]
            ? (s[m].p(g, c), C(s[m], 1))
            : ((s[m] = ft(g)), s[m].c(), C(s[m], 1), s[m].m(i.parentNode, i));
        }
        for (se(), m = a.length; m < s.length; m += 1) u(m);
        ae();
      }
    },
    i(f) {
      if (!o) {
        for (let c = 0; c < a.length; c += 1) C(s[c]);
        o = !0;
      }
    },
    o(f) {
      s = s.filter(Boolean);
      for (let c = 0; c < s.length; c += 1) j(s[c]);
      o = !1;
    },
    d(f) {
      f && A(e), f && A(l), f && A(r), f && A(n), yt(s, f), f && A(i);
    }
  };
}
class gr extends Q {
  constructor(e) {
    super(), J(this, e, null, dr, G, {});
  }
}
function mr(t) {
  let e;
  return {
    c() {
      e = B(t[1]);
    },
    m(l, r) {
      N(l, e, r);
    },
    p(l, r) {
      r & 2 && W(e, l[1]);
    },
    d(l) {
      l && A(e);
    }
  };
}
function hr(t) {
  let e, l, r, n;
  return {
    c() {
      (e = ke('svg')),
        (l = ke('path')),
        (r = M()),
        (n = B(t[3])),
        d(l, 'fill-rule', 'evenodd'),
        d(
          l,
          'd',
          'M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
        ),
        d(l, 'clip-rule', 'evenodd'),
        d(e, 'class', 'mr-2 -ml-1 w-5 h-5'),
        d(e, 'fill', 'currentColor'),
        d(e, 'viewBox', '0 0 20 20'),
        d(e, 'xmlns', 'http://www.w3.org/2000/svg');
    },
    m(i, o) {
      N(i, e, o), w(e, l), N(i, r, o), N(i, n, o);
    },
    p(i, o) {
      o & 8 && W(n, i[3]);
    },
    d(i) {
      i && A(e), i && A(r), i && A(n);
    }
  };
}
function br(t) {
  let e, l, r, n, i, o, a, s, u, f, c, m, g, b, E;
  return (
    (m = new Tt({
      props: {
        class: 'mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400',
        $$slots: { default: [mr] },
        $$scope: { ctx: t }
      }
    })),
    (b = new Ne({ props: { href: t[4], $$slots: { default: [hr] }, $$scope: { ctx: t } } })),
    {
      c() {
        (e = P('main')),
          (l = P('div')),
          (r = P('div')),
          (n = P('img')),
          (a = M()),
          (s = P('div')),
          (u = P('h1')),
          (f = B(t[0])),
          (c = M()),
          X(m.$$.fragment),
          (g = M()),
          X(b.$$.fragment),
          fe(n.src, (i = t[2].src)) || d(n, 'src', i),
          d(n, 'alt', (o = t[2].alt)),
          d(r, 'class', 'block md:max-w-lg'),
          d(u, 'class', t[7]),
          d(s, 'class', 'text-center xl:max-w-4xl'),
          d(l, 'class', t[6]),
          d(e, 'class', t[5]);
      },
      m(v, p) {
        N(v, e, p),
          w(e, l),
          w(l, r),
          w(r, n),
          w(l, a),
          w(l, s),
          w(s, u),
          w(u, f),
          w(s, c),
          Z(m, s, null),
          w(s, g),
          Z(b, s, null),
          (E = !0);
      },
      p(v, [p]) {
        (!E || (p & 4 && !fe(n.src, (i = v[2].src)))) && d(n, 'src', i),
          (!E || (p & 4 && o !== (o = v[2].alt))) && d(n, 'alt', o),
          (!E || p & 1) && W(f, v[0]),
          (!E || p & 128) && d(u, 'class', v[7]);
        const L = {};
        p & 258 && (L.$$scope = { dirty: p, ctx: v }), m.$set(L);
        const y = {};
        p & 16 && (y.href = v[4]),
          p & 264 && (y.$$scope = { dirty: p, ctx: v }),
          b.$set(y),
          (!E || p & 64) && d(l, 'class', v[6]),
          (!E || p & 32) && d(e, 'class', v[5]);
      },
      i(v) {
        E || (C(m.$$.fragment, v), C(b.$$.fragment, v), (E = !0));
      },
      o(v) {
        j(m.$$.fragment, v), j(b.$$.fragment, v), (E = !1);
      },
      d(v) {
        v && A(e), Y(m), Y(b);
      }
    }
  );
}
function _r(t, e, l) {
  let { title: r = 'Page not found' } = e,
    {
      description:
        n = 'Oops! Looks like you followed a bad link. If you think this is a problem with us, please	tell us.'
    } = e,
    {
      image: i = {
        src: 'https://flowbite-admin-dashboard.vercel.app/images/illustrations/404.svg',
        alt: 'astronaut'
      }
    } = e,
    { btnTitle: o = 'Go back home' } = e,
    { btnLink: a = 'https://flowbite-svelte-admin-dashboard.vercel.app/' } = e,
    { mainClass: s = 'bg-gray-50 dark:bg-gray-900' } = e,
    {
      mainDivClass:
        u = 'flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900'
    } = e,
    {
      h1Class:
        f = 'mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white'
    } = e;
  return (
    (t.$$set = (c) => {
      'title' in c && l(0, (r = c.title)),
        'description' in c && l(1, (n = c.description)),
        'image' in c && l(2, (i = c.image)),
        'btnTitle' in c && l(3, (o = c.btnTitle)),
        'btnLink' in c && l(4, (a = c.btnLink)),
        'mainClass' in c && l(5, (s = c.mainClass)),
        'mainDivClass' in c && l(6, (u = c.mainDivClass)),
        'h1Class' in c && l(7, (f = c.h1Class));
    }),
    [r, n, i, o, a, s, u, f]
  );
}
class It extends Q {
  constructor(e) {
    super(),
      J(this, e, _r, br, G, {
        title: 0,
        description: 1,
        image: 2,
        btnTitle: 3,
        btnLink: 4,
        mainClass: 5,
        mainDivClass: 6,
        h1Class: 7
      });
  }
}
function kr(t) {
  let e, l;
  return (
    (e = new It({})),
    {
      c() {
        X(e.$$.fragment);
      },
      m(r, n) {
        Z(e, r, n), (l = !0);
      },
      p: K,
      i(r) {
        l || (C(e.$$.fragment, r), (l = !0));
      },
      o(r) {
        j(e.$$.fragment, r), (l = !1);
      },
      d(r) {
        Y(e, r);
      }
    }
  );
}
function pr(t) {
  let e,
    l,
    r = t[0].title + '',
    n,
    i,
    o,
    a,
    s = Be(t[0].publishDate) + '',
    u,
    f,
    c,
    m,
    g,
    b,
    E = t[0].content + '',
    v,
    p,
    L,
    y;
  return (
    (L = new Ne({ props: { class: 'my-4', $$slots: { default: [wr] }, $$scope: { ctx: t } } })),
    L.$on('click', nl),
    {
      c() {
        (e = P('div')),
          (l = P('h1')),
          (n = B(r)),
          (i = M()),
          (o = P('p')),
          (a = B('Published: ')),
          (u = B(s)),
          (f = M()),
          (c = P('img')),
          (g = M()),
          (b = P('p')),
          (v = B(E)),
          (p = M()),
          X(L.$$.fragment),
          d(l, 'class', 'text-3xl dark:text-white mb-4'),
          d(o, 'class', 'text-lg dark:text-white'),
          fe(c.src, (m = t[0].image)) || d(c, 'src', m),
          d(c, 'alt', 'img'),
          d(c, 'class', 'mx-auto m-4'),
          d(b, 'class', 'text-lg dark:text-white'),
          d(e, 'class', 'p-4');
      },
      m(k, _) {
        N(k, e, _),
          w(e, l),
          w(l, n),
          w(e, i),
          w(e, o),
          w(o, a),
          w(o, u),
          w(e, f),
          w(e, c),
          w(e, g),
          w(e, b),
          w(b, v),
          w(e, p),
          Z(L, e, null),
          (y = !0);
      },
      p(k, _) {
        (!y || _ & 1) && r !== (r = k[0].title + '') && W(n, r),
          (!y || _ & 1) && s !== (s = Be(k[0].publishDate) + '') && W(u, s),
          (!y || (_ & 1 && !fe(c.src, (m = k[0].image)))) && d(c, 'src', m),
          (!y || _ & 1) && E !== (E = k[0].content + '') && W(v, E);
        const S = {};
        _ & 4 && (S.$$scope = { dirty: _, ctx: k }), L.$set(S);
      },
      i(k) {
        y || (C(L.$$.fragment, k), (y = !0));
      },
      o(k) {
        j(L.$$.fragment, k), (y = !1);
      },
      d(k) {
        k && A(e), Y(L);
      }
    }
  );
}
function wr(t) {
  let e;
  return {
    c() {
      e = B('Back');
    },
    m(l, r) {
      N(l, e, r);
    },
    d(l) {
      l && A(e);
    }
  };
}
function yr(t) {
  let e, l, r, n;
  const i = [pr, kr],
    o = [];
  function a(s, u) {
    return s[0] ? 0 : 1;
  }
  return (
    (e = a(t)),
    (l = o[e] = i[e](t)),
    {
      c() {
        l.c(), (r = ce());
      },
      m(s, u) {
        o[e].m(s, u), N(s, r, u), (n = !0);
      },
      p(s, [u]) {
        let f = e;
        (e = a(s)),
          e === f
            ? o[e].p(s, u)
            : (se(),
              j(o[f], 1, 1, () => {
                o[f] = null;
              }),
              ae(),
              (l = o[e]),
              l ? l.p(s, u) : ((l = o[e] = i[e](s)), l.c()),
              C(l, 1),
              l.m(r.parentNode, r));
      },
      i(s) {
        n || (C(l), (n = !0));
      },
      o(s) {
        j(l), (n = !1);
      },
      d(s) {
        o[e].d(s), s && A(r);
      }
    }
  );
}
function vr(t, e, l) {
  let { params: r = {} } = e,
    n;
  return (
    xe.forEach((i, o) => {
      r.title === He(i.title) && l(0, (n = i));
    }),
    (t.$$set = (i) => {
      'params' in i && l(1, (r = i.params));
    }),
    [n, r]
  );
}
class Cr extends Q {
  constructor(e) {
    super(), J(this, e, vr, yr, G, { params: 1 });
  }
}
function Dr(t) {
  let e, l, r;
  return {
    c() {
      (e = P('h1')),
        (e.textContent = 'About'),
        (l = M()),
        (r = P('p')),
        (r.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu nibh,
  interdum eu semper sed, viverra eu nulla. Duis aliquam, nisi non vulputate
  mattis, libero elit hendrerit nulla, vitae tristique sem urna eu tellus.
  Suspendisse potenti. Vestibulum sodales neque erat, sit amet tristique nibh
  mattis non. Sed sit amet augue et mauris ultricies faucibus. Phasellus euismod
  risus tellus, laoreet congue lacus ultrices id. Nam at dignissim lorem. Duis
  et viverra felis. Praesent imperdiet iaculis orci vitae finibus. Praesent eget
  ex eu felis aliquam varius. Vestibulum varius, velit malesuada ultricies
  auctor, eros lacus tristique nisi, eleifend lobortis velit sapien in dui.
  Maecenas vel enim vitae ligula tempor tempor. Mauris ut arcu odio. Nunc ac
  neque a neque scelerisque accumsan. Sed facilisis arcu at pharetra posuere.`),
        d(e, 'class', 'text-4xl dark:text-white'),
        d(r, 'class', 'text-xl dark:text-white');
    },
    m(n, i) {
      N(n, e, i), N(n, l, i), N(n, r, i);
    },
    p: K,
    i: K,
    o: K,
    d(n) {
      n && A(e), n && A(l), n && A(r);
    }
  };
}
class Er extends Q {
  constructor(e) {
    super(), J(this, e, null, Dr, G, {});
  }
}
function ct(t) {
  let e,
    l,
    r,
    n = t[2] && dt(t),
    i = t[3] && gt(t);
  return {
    c() {
      (e = P('div')), n && n.c(), (l = M()), i && i.c(), d(e, 'class', 'flex items-start');
    },
    m(o, a) {
      N(o, e, a), n && n.m(e, null), w(e, l), i && i.m(e, null), (r = !0);
    },
    p(o, a) {
      o[2]
        ? n
          ? a & 4 && C(n, 1)
          : ((n = dt(o)), n.c(), C(n, 1), n.m(e, l))
        : n &&
          (se(),
          j(n, 1, 1, () => {
            n = null;
          }),
          ae()),
        o[3]
          ? i
            ? (i.p(o, a), a & 8 && C(i, 1))
            : ((i = gt(o)), i.c(), C(i, 1), i.m(e, null))
          : i &&
            (se(),
            j(i, 1, 1, () => {
              i = null;
            }),
            ae());
    },
    i(o) {
      r || (C(n), C(i), (r = !0));
    },
    o(o) {
      j(n), j(i), (r = !1);
    },
    d(o) {
      o && A(e), n && n.d(), i && i.d();
    }
  };
}
function dt(t) {
  let e, l, r, n, i, o;
  return (
    (l = new Ol({ props: { id: 'remember', 'aria-describedby': 'remember', name: 'remember', value: 1 } })),
    (i = new Ve({ props: { for: 'remember', $$slots: { default: [Sr] }, $$scope: { ctx: t } } })),
    {
      c() {
        (e = P('div')),
          X(l.$$.fragment),
          (r = M()),
          (n = P('div')),
          X(i.$$.fragment),
          d(e, 'class', 'flex items-center h-5'),
          d(n, 'class', 'ml-3 text-sm');
      },
      m(a, s) {
        N(a, e, s), Z(l, e, null), N(a, r, s), N(a, n, s), Z(i, n, null), (o = !0);
      },
      i(a) {
        o || (C(l.$$.fragment, a), C(i.$$.fragment, a), (o = !0));
      },
      o(a) {
        j(l.$$.fragment, a), j(i.$$.fragment, a), (o = !1);
      },
      d(a) {
        a && A(e), Y(l), a && A(r), a && A(n), Y(i);
      }
    }
  );
}
function Sr(t) {
  let e;
  return {
    c() {
      e = B('Remember me');
    },
    m(l, r) {
      N(l, e, r);
    },
    d(l) {
      l && A(e);
    }
  };
}
function gt(t) {
  let e, l;
  return (
    (e = new Xl({
      props: { href: t[5], aClass: 'ml-auto text-sm', $$slots: { default: [Ar] }, $$scope: { ctx: t } }
    })),
    {
      c() {
        X(e.$$.fragment);
      },
      m(r, n) {
        Z(e, r, n), (l = !0);
      },
      p(r, n) {
        const i = {};
        n & 32 && (i.href = r[5]), n & 131072 && (i.$$scope = { dirty: n, ctx: r }), e.$set(i);
      },
      i(r) {
        l || (C(e.$$.fragment, r), (l = !0));
      },
      o(r) {
        j(e.$$.fragment, r), (l = !1);
      },
      d(r) {
        Y(e, r);
      }
    }
  );
}
function Ar(t) {
  let e;
  return {
    c() {
      e = B('Lost Password?');
    },
    m(l, r) {
      N(l, e, r);
    },
    d(l) {
      l && A(e);
    }
  };
}
function Lr(t) {
  let e;
  return {
    c() {
      e = B(t[6]);
    },
    m(l, r) {
      N(l, e, r);
    },
    p(l, r) {
      r & 64 && W(e, l[6]);
    },
    d(l) {
      l && A(e);
    }
  };
}
function mt(t) {
  let e, l, r, n;
  return {
    c() {
      (e = P('div')),
        (l = B('Not registered? ')),
        (r = P('a')),
        (n = B(t[8])),
        d(r, 'href', t[7]),
        d(r, 'class', 'text-primary-700 hover:underline dark:text-primary-500'),
        d(e, 'class', 'text-sm font-medium text-gray-500 dark:text-gray-400');
    },
    m(i, o) {
      N(i, e, o), w(e, l), w(e, r), w(r, n);
    },
    p(i, o) {
      o & 256 && W(n, i[8]), o & 128 && d(r, 'href', i[7]);
    },
    d(i) {
      i && A(e);
    }
  };
}
function Pr(t) {
  let e,
    l,
    r,
    n,
    i,
    o,
    a,
    s,
    u = t[1].name + '',
    f,
    c,
    m,
    g,
    b,
    E,
    v,
    p,
    L,
    y,
    k,
    _,
    S,
    I,
    F;
  const U = t[15].default,
    V = $(U, t, t[17], null);
  let D = (t[2] || t[3]) && ct(t);
  k = new Ne({ props: { type: 'submit', $$slots: { default: [Lr] }, $$scope: { ctx: t } } });
  let T = t[4] && mt(t);
  return {
    c() {
      (e = P('main')),
        (l = P('div')),
        (r = P('a')),
        (n = P('img')),
        (a = M()),
        (s = P('span')),
        (f = B(u)),
        (m = M()),
        (g = P('div')),
        (b = P('h1')),
        (E = B(t[0])),
        (v = M()),
        (p = P('form')),
        V && V.c(),
        (L = M()),
        D && D.c(),
        (y = M()),
        X(k.$$.fragment),
        (_ = M()),
        T && T.c(),
        fe(n.src, (i = t[1].img)) || d(n, 'src', i),
        d(n, 'class', t[12]),
        d(n, 'alt', (o = t[1].imgAlt)),
        d(r, 'href', (c = t[1].link)),
        d(r, 'class', t[11]),
        d(b, 'class', t[14]),
        d(p, 'class', 'mt-8 space-y-6'),
        d(g, 'class', t[13]),
        d(l, 'class', t[10]),
        d(e, 'class', t[9]);
    },
    m(h, H) {
      N(h, e, H),
        w(e, l),
        w(l, r),
        w(r, n),
        w(r, a),
        w(r, s),
        w(s, f),
        w(l, m),
        w(l, g),
        w(g, b),
        w(b, E),
        w(g, v),
        w(g, p),
        V && V.m(p, null),
        w(p, L),
        D && D.m(p, null),
        w(p, y),
        Z(k, p, null),
        w(p, _),
        T && T.m(p, null),
        (S = !0),
        I || ((F = q(p, 'submit', vt(t[16]))), (I = !0));
    },
    p(h, [H]) {
      (!S || (H & 2 && !fe(n.src, (i = h[1].img)))) && d(n, 'src', i),
        (!S || H & 4096) && d(n, 'class', h[12]),
        (!S || (H & 2 && o !== (o = h[1].imgAlt))) && d(n, 'alt', o),
        (!S || H & 2) && u !== (u = h[1].name + '') && W(f, u),
        (!S || (H & 2 && c !== (c = h[1].link))) && d(r, 'href', c),
        (!S || H & 2048) && d(r, 'class', h[11]),
        (!S || H & 1) && W(E, h[0]),
        (!S || H & 16384) && d(b, 'class', h[14]),
        V && V.p && (!S || H & 131072) && te(V, U, h, h[17], S ? ee(U, h[17], H, null) : le(h[17]), null),
        h[2] || h[3]
          ? D
            ? (D.p(h, H), H & 12 && C(D, 1))
            : ((D = ct(h)), D.c(), C(D, 1), D.m(p, y))
          : D &&
            (se(),
            j(D, 1, 1, () => {
              D = null;
            }),
            ae());
      const oe = {};
      H & 131136 && (oe.$$scope = { dirty: H, ctx: h }),
        k.$set(oe),
        h[4] ? (T ? T.p(h, H) : ((T = mt(h)), T.c(), T.m(p, null))) : T && (T.d(1), (T = null)),
        (!S || H & 8192) && d(g, 'class', h[13]),
        (!S || H & 1024) && d(l, 'class', h[10]),
        (!S || H & 512) && d(e, 'class', h[9]);
    },
    i(h) {
      S || (C(V, h), C(D), C(k.$$.fragment, h), (S = !0));
    },
    o(h) {
      j(V, h), j(D), j(k.$$.fragment, h), (S = !1);
    },
    d(h) {
      h && A(e), V && V.d(h), D && D.d(), Y(k), T && T.d(), (I = !1), F();
    }
  };
}
function Nr(t, e, l) {
  let { $$slots: r = {}, $$scope: n } = e,
    { title: i = 'Sign in to platform' } = e,
    {
      site: o = {
        name: 'Flowbite',
        img: 'https://flowbite-admin-dashboard.vercel.app/images/logo.svg',
        link: 'https://flowbite-admin-dashboard.vercel.app/',
        imgAlt: 'FlowBite Logo'
      }
    } = e,
    { rememberMe: a = !0 } = e,
    { lostPassword: s = !0 } = e,
    { createAccount: u = !0 } = e,
    { lostPasswordLink: f = '' } = e,
    { loginTitle: c = 'Login to your account' } = e,
    { registerLink: m = '' } = e,
    { createAccountTitle: g = 'Create account' } = e,
    { mainClass: b = 'bg-gray-50 dark:bg-gray-900' } = e,
    {
      mainDivClass:
        E = 'flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900'
    } = e,
    {
      siteLinkClass:
        v = 'flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white'
    } = e,
    { siteImgClass: p = 'mr-4 h-11' } = e,
    { cardDivClass: L = 'w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800' } =
      e,
    { cardH1Class: y = 'text-2xl font-bold text-gray-900 dark:text-white' } = e;
  function k(_) {
    R.call(this, t, _);
  }
  return (
    (t.$$set = (_) => {
      'title' in _ && l(0, (i = _.title)),
        'site' in _ && l(1, (o = _.site)),
        'rememberMe' in _ && l(2, (a = _.rememberMe)),
        'lostPassword' in _ && l(3, (s = _.lostPassword)),
        'createAccount' in _ && l(4, (u = _.createAccount)),
        'lostPasswordLink' in _ && l(5, (f = _.lostPasswordLink)),
        'loginTitle' in _ && l(6, (c = _.loginTitle)),
        'registerLink' in _ && l(7, (m = _.registerLink)),
        'createAccountTitle' in _ && l(8, (g = _.createAccountTitle)),
        'mainClass' in _ && l(9, (b = _.mainClass)),
        'mainDivClass' in _ && l(10, (E = _.mainDivClass)),
        'siteLinkClass' in _ && l(11, (v = _.siteLinkClass)),
        'siteImgClass' in _ && l(12, (p = _.siteImgClass)),
        'cardDivClass' in _ && l(13, (L = _.cardDivClass)),
        'cardH1Class' in _ && l(14, (y = _.cardH1Class)),
        '$$scope' in _ && l(17, (n = _.$$scope));
    }),
    [i, o, a, s, u, f, c, m, g, b, E, v, p, L, y, r, k, n]
  );
}
class jr extends Q {
  constructor(e) {
    super(),
      J(this, e, Nr, Pr, G, {
        title: 0,
        site: 1,
        rememberMe: 2,
        lostPassword: 3,
        createAccount: 4,
        lostPasswordLink: 5,
        loginTitle: 6,
        registerLink: 7,
        createAccountTitle: 8,
        mainClass: 9,
        mainDivClass: 10,
        siteLinkClass: 11,
        siteImgClass: 12,
        cardDivClass: 13,
        cardH1Class: 14
      });
  }
}
function Tr(t) {
  let e;
  return {
    c() {
      e = B(t[3]);
    },
    m(l, r) {
      N(l, e, r);
    },
    p(l, r) {
      r & 8 && W(e, l[3]);
    },
    d(l) {
      l && A(e);
    }
  };
}
function zr(t) {
  let e;
  return {
    c() {
      e = B(t[2]);
    },
    m(l, r) {
      N(l, e, r);
    },
    p(l, r) {
      r & 4 && W(e, l[2]);
    },
    d(l) {
      l && A(e);
    }
  };
}
function Ir(t) {
  let e,
    l,
    r,
    n,
    i,
    o,
    a,
    s,
    u = t[1].name + '',
    f,
    c,
    m,
    g,
    b,
    E,
    v,
    p,
    L,
    y,
    k,
    _,
    S,
    I,
    F,
    U;
  L = new Tt({
    props: {
      class: 'text-base font-normal text-gray-500 dark:text-gray-400',
      $$slots: { default: [Tr] },
      $$scope: { ctx: t }
    }
  });
  const V = t[11].default,
    D = $(V, t, t[13], null);
  return (
    (S = new Ne({ props: { type: 'submit', $$slots: { default: [zr] }, $$scope: { ctx: t } } })),
    {
      c() {
        (e = P('main')),
          (l = P('div')),
          (r = P('a')),
          (n = P('img')),
          (a = M()),
          (s = P('span')),
          (f = B(u)),
          (m = M()),
          (g = P('div')),
          (b = P('div')),
          (E = P('h1')),
          (v = B(t[0])),
          (p = M()),
          X(L.$$.fragment),
          (y = M()),
          (k = P('form')),
          D && D.c(),
          (_ = M()),
          X(S.$$.fragment),
          fe(n.src, (i = t[1].img)) || d(n, 'src', i),
          d(n, 'class', t[7]),
          d(n, 'alt', (o = t[1].imgAlt)),
          d(r, 'href', (c = t[1].link)),
          d(r, 'class', t[6]),
          d(E, 'class', t[9]),
          d(k, 'class', 'mt-8 space-y-6'),
          d(b, 'class', t[10]),
          d(g, 'class', t[8]),
          d(l, 'class', t[5]),
          d(e, 'class', t[4]);
      },
      m(T, h) {
        N(T, e, h),
          w(e, l),
          w(l, r),
          w(r, n),
          w(r, a),
          w(r, s),
          w(s, f),
          w(l, m),
          w(l, g),
          w(g, b),
          w(b, E),
          w(E, v),
          w(b, p),
          Z(L, b, null),
          w(b, y),
          w(b, k),
          D && D.m(k, null),
          w(k, _),
          Z(S, k, null),
          (I = !0),
          F || ((U = q(k, 'submit', vt(t[12]))), (F = !0));
      },
      p(T, [h]) {
        (!I || (h & 2 && !fe(n.src, (i = T[1].img)))) && d(n, 'src', i),
          (!I || h & 128) && d(n, 'class', T[7]),
          (!I || (h & 2 && o !== (o = T[1].imgAlt))) && d(n, 'alt', o),
          (!I || h & 2) && u !== (u = T[1].name + '') && W(f, u),
          (!I || (h & 2 && c !== (c = T[1].link))) && d(r, 'href', c),
          (!I || h & 64) && d(r, 'class', T[6]),
          (!I || h & 1) && W(v, T[0]),
          (!I || h & 512) && d(E, 'class', T[9]);
        const H = {};
        h & 8200 && (H.$$scope = { dirty: h, ctx: T }),
          L.$set(H),
          D && D.p && (!I || h & 8192) && te(D, V, T, T[13], I ? ee(V, T[13], h, null) : le(T[13]), null);
        const oe = {};
        h & 8196 && (oe.$$scope = { dirty: h, ctx: T }),
          S.$set(oe),
          (!I || h & 1024) && d(b, 'class', T[10]),
          (!I || h & 256) && d(g, 'class', T[8]),
          (!I || h & 32) && d(l, 'class', T[5]),
          (!I || h & 16) && d(e, 'class', T[4]);
      },
      i(T) {
        I || (C(L.$$.fragment, T), C(D, T), C(S.$$.fragment, T), (I = !0));
      },
      o(T) {
        j(L.$$.fragment, T), j(D, T), j(S.$$.fragment, T), (I = !1);
      },
      d(T) {
        T && A(e), Y(L), D && D.d(T), Y(S), (F = !1), U();
      }
    }
  );
}
function Or(t, e, l) {
  let { $$slots: r = {}, $$scope: n } = e,
    { title: i = 'Forgot your password?' } = e,
    {
      site: o = {
        name: 'Flowbite',
        img: 'https://flowbite-admin-dashboard.vercel.app/images/logo.svg',
        link: 'https://flowbite-admin-dashboard.vercel.app/',
        imgAlt: 'FlowBite Logo'
      }
    } = e,
    { btnTitle: a = 'Reset password' } = e,
    {
      pageDescription:
        s = "Don't fret! Just type in your email and we will send you a code to reset your password!"
    } = e,
    { mainClass: u = 'bg-gray-50 dark:bg-gray-900' } = e,
    {
      mainDivClass:
        f = 'flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900'
    } = e,
    {
      siteLinkClass:
        c = 'flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white'
    } = e,
    { siteImgClass: m = 'mr-4 h-11' } = e,
    { cardDivClass: g = 'w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800' } =
      e,
    { cardH1Class: b = 'mb-3 text-2xl font-bold text-gray-900 dark:text-white' } = e,
    { cardDiv2Class: E = 'w-full p-6 sm:p-8' } = e;
  function v(p) {
    R.call(this, t, p);
  }
  return (
    (t.$$set = (p) => {
      'title' in p && l(0, (i = p.title)),
        'site' in p && l(1, (o = p.site)),
        'btnTitle' in p && l(2, (a = p.btnTitle)),
        'pageDescription' in p && l(3, (s = p.pageDescription)),
        'mainClass' in p && l(4, (u = p.mainClass)),
        'mainDivClass' in p && l(5, (f = p.mainDivClass)),
        'siteLinkClass' in p && l(6, (c = p.siteLinkClass)),
        'siteImgClass' in p && l(7, (m = p.siteImgClass)),
        'cardDivClass' in p && l(8, (g = p.cardDivClass)),
        'cardH1Class' in p && l(9, (b = p.cardH1Class)),
        'cardDiv2Class' in p && l(10, (E = p.cardDiv2Class)),
        '$$scope' in p && l(13, (n = p.$$scope));
    }),
    [i, o, a, s, u, f, c, m, g, b, E, r, v, n]
  );
}
class qr extends Q {
  constructor(e) {
    super(),
      J(this, e, Or, Ir, G, {
        title: 0,
        site: 1,
        btnTitle: 2,
        pageDescription: 3,
        mainClass: 4,
        mainDivClass: 5,
        siteLinkClass: 6,
        siteImgClass: 7,
        cardDivClass: 8,
        cardH1Class: 9,
        cardDiv2Class: 10
      });
  }
}
function Mr(t) {
  let e;
  return {
    c() {
      e = B('Your email');
    },
    m(l, r) {
      N(l, e, r);
    },
    d(l) {
      l && A(e);
    }
  };
}
function Rr(t) {
  let e, l, r, n, i;
  return (
    (l = new Ve({
      props: { for: 'email', class: 'mb-2', $$slots: { default: [Mr] }, $$scope: { ctx: t } }
    })),
    (n = new Vl({
      props: { type: 'email', name: 'email', id: 'email', placeholder: 'name@company.com', required: !0 }
    })),
    {
      c() {
        (e = P('div')), X(l.$$.fragment), (r = M()), X(n.$$.fragment);
      },
      m(o, a) {
        N(o, e, a), Z(l, e, null), w(e, r), Z(n, e, null), (i = !0);
      },
      p(o, a) {
        const s = {};
        a & 2 && (s.$$scope = { dirty: a, ctx: o }), l.$set(s);
      },
      i(o) {
        i || (C(l.$$.fragment, o), C(n.$$.fragment, o), (i = !0));
      },
      o(o) {
        j(l.$$.fragment, o), j(n.$$.fragment, o), (i = !1);
      },
      d(o) {
        o && A(e), Y(l), Y(n);
      }
    }
  );
}
function Fr(t) {
  let e, l;
  return (
    (e = new qr({ props: { $$slots: { default: [Rr] }, $$scope: { ctx: t } } })),
    e.$on('submit', t[0]),
    {
      c() {
        X(e.$$.fragment);
      },
      m(r, n) {
        Z(e, r, n), (l = !0);
      },
      p(r, [n]) {
        const i = {};
        n & 2 && (i.$$scope = { dirty: n, ctx: r }), e.$set(i);
      },
      i(r) {
        l || (C(e.$$.fragment, r), (l = !0));
      },
      o(r) {
        j(e.$$.fragment, r), (l = !1);
      },
      d(r) {
        Y(e, r);
      }
    }
  );
}
function Br(t) {
  return [
    (l) => {
      const r = new FormData(l.target),
        n = {};
      for (const i of r.entries()) {
        const [o, a] = i;
        n[o] = a;
      }
      console.log(n);
    }
  ];
}
class Hr extends Q {
  constructor(e) {
    super(), J(this, e, Br, Fr, G, {});
  }
}
const xr = {
  '/': gr,
  '/about': Er,
  '/forgot-password': Hr,
  '/article/:title': Cr,
  '/auth/login': jr,
  '*': It
};
function ht(t, e, l) {
  const r = t.slice();
  return (r[1] = e[l][0]), (r[2] = e[l][1]), r;
}
function bt(t) {
  let e,
    l,
    r,
    n = Object.entries(t[0]),
    i = [];
  for (let o = 0; o < n.length; o += 1) i[o] = _t(ht(t, n, o));
  return {
    c() {
      (e = P('p')), (e.textContent = 'Data:'), (l = M()), (r = P('ul'));
      for (let o = 0; o < i.length; o += 1) i[o].c();
    },
    m(o, a) {
      N(o, e, a), N(o, l, a), N(o, r, a);
      for (let s = 0; s < i.length; s += 1) i[s].m(r, null);
    },
    p(o, a) {
      if (a & 1) {
        n = Object.entries(o[0]);
        let s;
        for (s = 0; s < n.length; s += 1) {
          const u = ht(o, n, s);
          i[s] ? i[s].p(u, a) : ((i[s] = _t(u)), i[s].c(), i[s].m(r, null));
        }
        for (; s < i.length; s += 1) i[s].d(1);
        i.length = n.length;
      }
    },
    d(o) {
      o && A(e), o && A(l), o && A(r), yt(i, o);
    }
  };
}
function _t(t) {
  let e,
    l = t[1] + '',
    r,
    n,
    i = t[2] + '',
    o;
  return {
    c() {
      (e = P('li')), (r = B(l)), (n = B(': ')), (o = B(i));
    },
    m(a, s) {
      N(a, e, s), w(e, r), w(e, n), w(e, o);
    },
    p(a, s) {
      s & 1 && l !== (l = a[1] + '') && W(r, l), s & 1 && i !== (i = a[2] + '') && W(o, i);
    },
    d(a) {
      a && A(e);
    }
  };
}
function Ur(t) {
  let e, l, r, n, i, o;
  (e = new yl({})), (n = new ul({ props: { routes: xr } }));
  let a = t[0] && bt(t);
  return {
    c() {
      X(e.$$.fragment),
        (l = M()),
        (r = P('div')),
        X(n.$$.fragment),
        (i = M()),
        a && a.c(),
        d(r, 'class', 'p-8 overflow-hidden bg-gray-50 dark:bg-gray-900');
    },
    m(s, u) {
      Z(e, s, u), N(s, l, u), N(s, r, u), Z(n, r, null), w(r, i), a && a.m(r, null), (o = !0);
    },
    p(s, [u]) {
      s[0] ? (a ? a.p(s, u) : ((a = bt(s)), a.c(), a.m(r, null))) : a && (a.d(1), (a = null));
    },
    i(s) {
      o || (C(e.$$.fragment, s), C(n.$$.fragment, s), (o = !0));
    },
    o(s) {
      j(e.$$.fragment, s), j(n.$$.fragment, s), (o = !1);
    },
    d(s) {
      Y(e, s), s && A(l), s && A(r), Y(n), a && a.d();
    }
  };
}
function Vr(t, e, l) {
  let r;
  if ({}.VITE_API_ENDPOINT) {
    async function n() {
      const i = await fetch({}.VITE_API_ENDPOINT);
      l(0, (r = await i.json()));
    }
    Gt(n);
  }
  return [r];
}
class Zr extends Q {
  constructor(e) {
    super(), J(this, e, Vr, Ur, G, {});
  }
}
new Zr({ target: document.getElementById('app') });
