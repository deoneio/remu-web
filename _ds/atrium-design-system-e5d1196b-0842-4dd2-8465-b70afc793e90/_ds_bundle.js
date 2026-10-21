/* @ds-bundle: {"format":4,"namespace":"AtriumDesignSystem_e5d119","components":[{"name":"ArrowLink","sourcePath":"components/core/ArrowLink.jsx"},{"name":"BrandBadge","sourcePath":"components/core/BrandBadge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Label","sourcePath":"components/core/Label.jsx"},{"name":"LangToggle","sourcePath":"components/core/LangToggle.jsx"},{"name":"AddressBlock","sourcePath":"components/layout/AddressBlock.jsx"},{"name":"ColumnRules","sourcePath":"components/layout/ColumnRules.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer.jsx"},{"name":"NavBar","sourcePath":"components/layout/NavBar.jsx"},{"name":"Statement","sourcePath":"components/layout/Statement.jsx"},{"name":"Wordmark","sourcePath":"components/layout/Wordmark.jsx"},{"name":"ArchCluster","sourcePath":"components/media/ArchCluster.jsx"},{"name":"ArchMedia","sourcePath":"components/media/ArchMedia.jsx"},{"name":"MediaBand","sourcePath":"components/media/MediaBand.jsx"}],"sourceHashes":{"components/core/ArrowLink.jsx":"508bb21ecb79","components/core/BrandBadge.jsx":"ea6068565efe","components/core/Button.jsx":"b5c8b6c5acd6","components/core/Label.jsx":"758848574526","components/core/LangToggle.jsx":"b49e1dfbd7bf","components/layout/AddressBlock.jsx":"56d5851021f6","components/layout/ColumnRules.jsx":"8b1c7755527f","components/layout/Footer.jsx":"915dae3f720e","components/layout/NavBar.jsx":"9833d0ce5ce9","components/layout/Statement.jsx":"f33ce9ee989f","components/layout/Wordmark.jsx":"6adb27bfb86c","components/media/ArchCluster.jsx":"947090dd7a09","components/media/ArchMedia.jsx":"e8344f7f3a24","components/media/MediaBand.jsx":"4935933e73bd","ui_kits/site/App.jsx":"2b3817f88724","ui_kits/site/Chrome.jsx":"3b70e31d6588","ui_kits/site/Home.jsx":"ce0688376545","ui_kits/site/Project.jsx":"d0679d9dce8e","ui_kits/site/Projects.jsx":"d4a79622b814","ui_kits/site/Studio.jsx":"f09949950030","ui_kits/site/data.js":"15494b04cad8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AtriumDesignSystem_e5d119 = window.AtriumDesignSystem_e5d119 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ArrowLink({
  children,
  href = "#",
  direction = "diagonal",
  size = "sm",
  underline = false,
  tone = "default",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const glyph = {
    diagonal: "\u2197",
    chevron: "\u203A",
    up: "\u02C4",
    down: "\u02C5"
  }[direction];
  const shift = {
    diagonal: "translate(1px,-1px)",
    chevron: "translateX(2px)",
    up: "translateY(-1px)",
    down: "translateY(1px)"
  }[direction];
  return /*#__PURE__*/React.createElement("a", _extends({}, rest, {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 5,
      fontFamily: "var(--font-text)",
      fontSize: size === "xs" ? "var(--type-micro-size)" : size === "md" ? "var(--type-body-size)" : "var(--type-small-size)",
      lineHeight: 1.2,
      color: tone === "muted" ? "var(--text-muted)" : tone === "inverse" ? "var(--text-inverse)" : "var(--text-body)",
      textDecoration: "none",
      borderBottom: underline ? "1px solid currentColor" : "1px solid transparent",
      paddingBottom: underline ? 2 : 0,
      opacity: hover ? "var(--hover-opacity)" : 1,
      transition: "var(--transition-hover)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", null, children), /*#__PURE__*/React.createElement("span", {
    style: {
      transform: hover ? shift : "none",
      transition: "transform var(--dur-fast) var(--ease-out-expo)"
    }
  }, glyph));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/core/BrandBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BrandBadge({
  initials = "at",
  size = 28,
  tone = "neutral",
  href,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: "var(--paper-300)",
      color: "var(--paper-000)"
    },
    ink: {
      background: "var(--ink-900)",
      color: "var(--paper-000)"
    },
    paper: {
      background: "var(--paper-000)",
      color: "var(--ink-900)"
    }
  };
  const Tag = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: href,
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-avatar)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: size * 0.36,
      letterSpacing: "-0.03em",
      textDecoration: "none",
      ...tones[tone],
      ...style
    }
  }), initials);
}
Object.assign(__ds_scope, { BrandBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BrandBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  sm: "6px 12px 7px",
  md: "9px 16px 10px",
  lg: "13px 22px 14px"
};
const FS = {
  sm: 12,
  md: 13,
  lg: 15
};
function Button({
  children,
  variant = "solid",
  size = "md",
  icon = "none",
  href,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const skins = {
    solid: {
      background: hover ? "var(--action-solid-hover)" : "var(--action-solid)",
      color: "var(--action-on-solid)",
      border: "1px solid transparent"
    },
    outline: {
      background: hover ? "var(--action-quiet-hover)" : "transparent",
      color: "var(--text-body)",
      border: "1px solid var(--line-rule)"
    },
    quiet: {
      background: "transparent",
      color: "var(--text-body)",
      border: "1px solid transparent",
      opacity: hover ? "var(--hover-opacity)" : 1,
      padding: 0
    },
    inverse: {
      background: hover ? "rgba(255,255,255,.86)" : "var(--paper-000)",
      color: "var(--ink-900)",
      border: "1px solid transparent"
    }
  };
  const glyph = icon === "chevron" ? "\u203A" : icon === "diagonal" ? "\u2197" : icon === "up" ? "\u02C4" : null;
  const base = {
    display: "inline-flex",
    alignItems: "baseline",
    gap: size === "sm" ? 6 : 8,
    font: "inherit",
    fontFamily: "var(--font-text)",
    fontSize: FS[size],
    lineHeight: 1,
    letterSpacing: "-0.005em",
    padding: PAD[size],
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "var(--transition-hover)",
    opacity: disabled ? 0.32 : 1,
    ...skins[variant],
    ...style
  };
  const Tag = href && !disabled ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: base
  }), /*#__PURE__*/React.createElement("span", null, children), glyph && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.05em",
      transform: "translateY(-0.02em)"
    }
  }, glyph));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Label({
  children,
  as = "span",
  tone = "default",
  mono = false,
  size = "label",
  style,
  ...rest
}) {
  const Tag = as;
  const sizes = {
    micro: "var(--type-micro-size)",
    label: "var(--type-label-size)",
    small: "var(--type-small-size)"
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      fontFamily: mono ? "var(--font-mono)" : "var(--font-text)",
      fontSize: mono ? "var(--type-mono-size)" : sizes[size],
      fontWeight: "var(--type-label-weight)",
      letterSpacing: mono ? "var(--type-mono-tracking)" : "var(--type-label-tracking)",
      textTransform: mono ? "none" : "var(--type-label-transform)",
      lineHeight: 1.3,
      color: tone === "muted" ? "var(--text-muted)" : tone === "subtle" ? "var(--text-subtle)" : tone === "inverse" ? "var(--text-inverse)" : "var(--text-body)",
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Label.jsx", error: String((e && e.message) || e) }); }

// components/core/LangToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LangToggle({
  languages = ["Fr", "En"],
  value,
  onChange,
  tone = "default",
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(languages[0]);
  const active = value ?? internal;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      gap: 14,
      ...style
    }
  }), languages.map(lang => {
    const on = lang === active;
    return /*#__PURE__*/React.createElement("button", {
      key: lang,
      onClick: () => {
        setInternal(lang);
        onChange && onChange(lang);
      },
      style: {
        background: "none",
        border: "none",
        padding: "0 0 2px",
        cursor: "pointer",
        fontFamily: "var(--font-text)",
        fontSize: "var(--type-small-size)",
        lineHeight: 1.2,
        color: tone === "inverse" ? "var(--text-inverse)" : on ? "var(--text-body)" : "var(--text-muted)",
        borderBottom: on ? "1px solid currentColor" : "1px solid transparent",
        transition: "var(--transition-hover)"
      }
    }, lang);
  }));
}
Object.assign(__ds_scope, { LangToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LangToggle.jsx", error: String((e && e.message) || e) }); }

// components/layout/AddressBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AddressBlock({
  city,
  lines = [],
  phone,
  mapHref = "#",
  mapLabel = "voir sur maps",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Label, {
    style: {
      textTransform: "none"
    }
  }, city), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--type-small-size)",
      lineHeight: 1.5,
      color: "var(--text-body)"
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l)), phone && /*#__PURE__*/React.createElement("div", null, phone)), /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    href: mapHref,
    direction: "chevron",
    size: "xs"
  }, mapLabel));
}
Object.assign(__ds_scope, { AddressBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/AddressBlock.jsx", error: String((e && e.message) || e) }); }

// components/layout/ColumnRules.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ColumnRules({
  count = 4,
  from = "50%",
  tone = "hairline",
  children,
  style,
  ...rest
}) {
  const color = tone === "strong" ? "var(--line-rule)" : "var(--line-hairline)";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: "relative",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      left: from,
      display: "grid",
      gridTemplateColumns: `repeat(${count},1fr)`,
      pointerEvents: "none"
    }
  }, Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderLeft: `1px solid ${color}`,
      borderRight: i === count - 1 ? `1px solid ${color}` : "none"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, children));
}
Object.assign(__ds_scope, { ColumnRules });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ColumnRules.jsx", error: String((e && e.message) || e) }); }

// components/layout/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  initials = "at",
  items = [],
  action = "menu",
  onAction,
  columnsFrom = "46%",
  tone = "default",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 24,
      padding: "var(--gutter-page)",
      position: "relative",
      zIndex: 3,
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.BrandBadge, {
    initials: initials,
    tone: tone === "inverse" ? "paper" : "neutral"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "absolute",
      left: columnsFrom,
      right: 96,
      top: 0,
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.label,
    href: it.href || "#",
    onClick: it.onClick ? e => {
      e.preventDefault();
      it.onClick();
    } : undefined,
    style: {
      textDecoration: "none",
      padding: "16px 0 0 12px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Label, {
    tone: tone === "inverse" ? "inverse" : "default"
  }, it.label)))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: tone === "inverse" ? "inverse" : "solid",
    size: "sm",
    onClick: onAction,
    style: {
      marginTop: 2
    }
  }, action));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/layout/Statement.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Statement({
  children,
  size = "lead",
  measure = "16ch",
  align = "left",
  tone = "default",
  as = "p",
  style,
  ...rest
}) {
  const Tag = as;
  const sizes = {
    lead: "var(--type-lead-size)",
    display: "var(--type-display-size)",
    body: "var(--type-body-size)"
  };
  const isLead = size !== "body";
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      fontFamily: isLead ? "var(--text-lead-font)" : "var(--font-text)",
      fontSize: sizes[size],
      fontWeight: isLead ? "var(--type-lead-weight)" : 400,
      letterSpacing: isLead ? "var(--type-lead-tracking)" : "var(--type-body-tracking)",
      lineHeight: isLead ? "var(--type-lead-leading)" : "var(--type-body-leading)",
      maxWidth: measure,
      textAlign: align,
      textWrap: "pretty",
      color: tone === "muted" ? "var(--text-muted)" : tone === "inverse" ? "var(--text-inverse)" : "var(--text-body)",
      margin: 0,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Statement });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Statement.jsx", error: String((e && e.message) || e) }); }

// components/layout/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Wordmark({
  children = "atrium",
  as = "div",
  size,
  weight,
  align = "left",
  tone = "ink",
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: size || "var(--type-wordmark-size)",
      fontWeight: weight || "var(--type-wordmark-weight)",
      letterSpacing: "var(--type-wordmark-tracking)",
      lineHeight: "var(--type-wordmark-leading)",
      textTransform: "lowercase",
      color: tone === "inverse" ? "var(--text-inverse)" : "var(--text-display)",
      textAlign: align,
      margin: 0,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Footer({
  wordmark = "atrium",
  socialLabel = "nous suivre",
  social = [],
  languages = ["Fr", "En"],
  action = "nous contacter",
  onAction,
  offices = [],
  legal = "mentions légales",
  copyright = "© 2026 Atrium",
  topLabel = "retour en haut",
  onTop,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({}, rest, {
    style: {
      background: "var(--surface-page)",
      padding: "0 var(--gutter-page) var(--space-4)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32,
      padding: "var(--space-6) 36px var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Label, {
    tone: "muted"
  }, socialLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40
    }
  }, social.map(s => /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    key: s.label,
    href: s.href
  }, s.label)))), /*#__PURE__*/React.createElement(__ds_scope.LangToggle, {
    languages: languages
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "solid",
    size: "md",
    icon: "chevron",
    onClick: onAction
  }, action)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 24,
      padding: "var(--space-7) 36px var(--space-9)"
    }
  }, offices.map(o => /*#__PURE__*/React.createElement(__ds_scope.AddressBlock, _extends({
    key: o.city
  }, o)))), /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    style: {
      padding: "0 0 var(--space-4)",
      fontSize: "clamp(80px,15.5vw,280px)"
    }
  }, wordmark), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      paddingBottom: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    href: "#",
    direction: "chevron",
    size: "xs",
    tone: "muted"
  }, legal), /*#__PURE__*/React.createElement(__ds_scope.Label, {
    tone: "muted",
    size: "micro"
  }, copyright), /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    href: "#",
    direction: "up",
    size: "xs",
    tone: "muted",
    onClick: onTop
  }, topLabel)));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer.jsx", error: String((e && e.message) || e) }); }

// components/media/ArchMedia.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ArchMedia({
  src,
  alt = "",
  shape = "arch",
  width = 120,
  height = 300,
  offsetY = 0,
  tint = "var(--tint-concrete)",
  caption,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const radius = shape === "capsule" ? "var(--radius-capsule)" : shape === "arch" ? "var(--radius-arch)" : "var(--radius-0)";
  return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
    style: {
      margin: 0,
      width,
      transform: `translateY(${offsetY}px)`,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: "100%",
      height,
      borderRadius: radius,
      overflow: "hidden",
      background: tint,
      position: "relative"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hover ? "scale(var(--media-hover-scale))" : "none",
      transition: "var(--transition-media)"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      background: `linear-gradient(150deg,${"var(--paper-150)"} 0%,${tint} 55%,var(--paper-200) 100%)`,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--type-mono-size)",
      letterSpacing: "var(--type-mono-tracking)",
      color: "var(--text-subtle)"
    }
  }, "image")), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 10,
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-micro-size)",
      color: "var(--text-muted)"
    }
  }, caption));
}
Object.assign(__ds_scope, { ArchMedia });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/ArchMedia.jsx", error: String((e && e.message) || e) }); }

// components/media/ArchCluster.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ArchCluster({
  items = [],
  overlap = 18,
  height = 300,
  itemWidth = 112,
  align = "center",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      alignItems: align === "center" ? "center" : align === "top" ? "flex-start" : "flex-end",
      marginLeft: overlap,
      ...style
    }
  }), items.map((it, i) => /*#__PURE__*/React.createElement(__ds_scope.ArchMedia, {
    key: i,
    src: it.src,
    alt: it.alt,
    caption: it.caption,
    tint: it.tint,
    shape: it.shape || "capsule",
    width: it.width || itemWidth,
    height: it.height || height,
    offsetY: it.offsetY || 0,
    style: {
      marginLeft: -overlap
    }
  })));
}
Object.assign(__ds_scope, { ArchCluster });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/ArchCluster.jsx", error: String((e && e.message) || e) }); }

// components/media/MediaBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MediaBand({
  src,
  alt = "",
  height = 260,
  tint = "var(--tint-concrete)",
  scrim = "none",
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({}, rest, {
    style: {
      position: "relative",
      height,
      overflow: "hidden",
      background: src ? tint : `linear-gradient(115deg,var(--paper-200) 0%,var(--paper-050) 38%,${tint} 62%,var(--paper-150) 100%)`,
      ...style
    }
  }), src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), scrim !== "none" && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: scrim === "top" ? "var(--scrim-top)" : "var(--scrim-bottom)"
    }
  }), children && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, children));
}
Object.assign(__ds_scope, { MediaBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/MediaBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/App.jsx
try { (() => {
function App() {
  const [view, setView] = React.useState("home");
  const [projectId, setProjectId] = React.useState("halles");
  const [menu, setMenu] = React.useState(false);
  const onNavigate = (v, id) => {
    if (id) setProjectId(id);
    setView(v);
    window.scrollTo({
      top: 0
    });
  };
  const onMenu = () => setMenu(true);
  const screens = {
    home: /*#__PURE__*/React.createElement(window.Home, {
      onNavigate: onNavigate,
      onMenu: onMenu
    }),
    projects: /*#__PURE__*/React.createElement(window.Projects, {
      onNavigate: onNavigate,
      onMenu: onMenu
    }),
    project: /*#__PURE__*/React.createElement(window.Project, {
      id: projectId,
      onNavigate: onNavigate,
      onMenu: onMenu
    }),
    studio: /*#__PURE__*/React.createElement(window.Studio, {
      onNavigate: onNavigate,
      onMenu: onMenu
    })
  };
  return /*#__PURE__*/React.createElement("div", null, screens[view], /*#__PURE__*/React.createElement(window.SiteFooter, {
    onTop: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }), /*#__PURE__*/React.createElement(window.MenuOverlay, {
    open: menu,
    onClose: () => setMenu(false),
    onNavigate: onNavigate
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Chrome.jsx
try { (() => {
const {
  NavBar,
  Footer,
  MediaBand,
  Button,
  Label,
  ArrowLink
} = window.AtriumDesignSystem_e5d119;
function SiteNav({
  onNavigate,
  onMenu,
  tone
}) {
  const D = window.ATRIUM_DATA;
  return /*#__PURE__*/React.createElement(NavBar, {
    initials: "at",
    tone: tone,
    columnsFrom: "46%",
    action: "menu",
    onAction: onMenu,
    items: D.nav.map(n => ({
      label: n.label,
      href: "#",
      onClick: () => onNavigate(n.view)
    }))
  });
}
function MenuOverlay({
  open,
  onClose,
  onNavigate
}) {
  const items = [{
    label: "accueil",
    view: "home"
  }, {
    label: "projets",
    view: "projects"
  }, {
    label: "agence",
    view: "studio"
  }, {
    label: "contact",
    view: "studio"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 20,
      background: "var(--surface-inverse)",
      color: "var(--text-inverse)",
      padding: "var(--gutter-page)",
      opacity: open ? 1 : 0,
      pointerEvents: open ? "auto" : "none",
      transition: "opacity var(--dur-mid) var(--ease-standard)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "sm",
    onClick: onClose
  }, "fermer")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      paddingLeft: 24
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("a", {
    key: it.label,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate(it.view);
      onClose();
    },
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: "clamp(44px,7vw,96px)",
      letterSpacing: "-0.04em",
      lineHeight: 1,
      color: "var(--text-inverse)",
      textDecoration: "none",
      transform: open ? "none" : "translateY(18px)",
      opacity: open ? 1 : 0,
      transition: `transform var(--dur-reveal) var(--ease-out-expo) ${60 * i}ms, opacity var(--dur-slow) var(--ease-standard) ${60 * i}ms`
    }
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 36,
      paddingLeft: 24,
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement(ArrowLink, {
    tone: "inverse"
  }, "Instagram"), /*#__PURE__*/React.createElement(ArrowLink, {
    tone: "inverse"
  }, "LinkedIn")));
}
function SiteFooter({
  onTop
}) {
  const D = window.ATRIUM_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MediaBand, {
    height: 300,
    tint: "var(--tint-glass)"
  }), /*#__PURE__*/React.createElement(Footer, {
    wordmark: "atrium",
    social: [{
      label: "Instagram",
      href: "#"
    }, {
      label: "LinkedIn",
      href: "#"
    }],
    offices: D.offices,
    action: "nous contacter",
    copyright: "\xA9 2026 Atrium",
    onTop: onTop
  }));
}
Object.assign(window, {
  SiteNav,
  MenuOverlay,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Home.jsx
try { (() => {
const {
  ColumnRules,
  Wordmark,
  Statement,
  ArchCluster,
  ArchMedia,
  Label,
  ArrowLink,
  Button
} = window.AtriumDesignSystem_e5d119;
function Home({
  onNavigate,
  onMenu
}) {
  const D = window.ATRIUM_DATA;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ColumnRules, {
    count: 4,
    from: "46%",
    style: {
      background: "var(--surface-sunken)",
      minHeight: 500,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement(window.SiteNav, {
    onMenu: onMenu,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 400
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "40%",
      top: 20
    }
  }, /*#__PURE__*/React.createElement(ArchCluster, {
    overlap: 26,
    itemWidth: 104,
    items: [{
      height: 300,
      offsetY: 18,
      tint: "var(--tint-concrete)"
    }, {
      height: 260,
      offsetY: -34,
      tint: "var(--tint-timber)"
    }, {
      height: 330,
      offsetY: 30,
      tint: "var(--tint-glass)"
    }, {
      height: 270,
      offsetY: -12,
      tint: "var(--tint-clay)"
    }]
  })), /*#__PURE__*/React.createElement(Wordmark, {
    as: "h1",
    style: {
      position: "absolute",
      left: 22,
      top: 96,
      fontSize: "clamp(90px,15vw,210px)"
    }
  }, "atrium"), /*#__PURE__*/React.createElement(Statement, {
    size: "body",
    measure: "15ch",
    style: {
      position: "absolute",
      left: 26,
      bottom: 8,
      fontSize: 19,
      lineHeight: 1.2
    }
  }, "Architectes d'un monde en mouvement"))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      padding: "var(--space-9) var(--space-7) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(ArchMedia, {
    shape: "square",
    width: "100%",
    height: 420,
    tint: "var(--tint-concrete)",
    caption: "Halles Rambaud \xB7 Lyon \xB7 2025"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 40,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(Statement, {
    size: "lead",
    measure: "26ch"
  }, "Nous sommes un groupe d'architecture structur\xE9 et pluridisciplinaire avec quatre filiales d\xE9di\xE9es \xE0 l'architecture, \xE0 l'architecture d'int\xE9rieur, \xE0 la sant\xE9 et \xE0 la conduite de chantier."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      maxWidth: "46ch"
    }
  }, /*#__PURE__*/React.createElement(Label, {
    tone: "muted"
  }, "depuis 1998"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.45
    }
  }, "Quatre-vingt-dix architectes, ing\xE9nieurs et conducteurs de travaux r\xE9partis entre Lyon, Annecy, Paris et Gen\xE8ve. Nous dessinons des b\xE2timents qui vieillissent bien.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    icon: "chevron",
    onClick: () => onNavigate("studio")
  }, "d\xE9couvrir l'agence")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 var(--space-7) var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      borderBottom: "1px solid var(--line-hairline)",
      paddingBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Label, {
    tone: "muted"
  }, "projets r\xE9cents"), /*#__PURE__*/React.createElement(ArrowLink, {
    direction: "chevron",
    onClick: e => {
      e.preventDefault();
      onNavigate("projects");
    }
  }, "tous les projets")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 28,
      paddingTop: 36
    }
  }, D.projects.slice(0, 4).map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: p.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("project", p.id);
    },
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(ArchMedia, {
    shape: p.shape,
    width: "100%",
    height: i % 2 ? 300 : 340,
    tint: p.tint,
    offsetY: i % 2 ? 28 : 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "flex",
      flexDirection: "column",
      gap: 5,
      transform: i % 2 ? "translateY(28px)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, p.title), /*#__PURE__*/React.createElement(Label, {
    tone: "muted",
    size: "micro"
  }, p.place, " \xB7 ", p.year)))))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Project.jsx
try { (() => {
const {
  ColumnRules,
  Statement,
  Label,
  ArchMedia,
  MediaBand,
  ArrowLink,
  Button
} = window.AtriumDesignSystem_e5d119;
function Project({
  id,
  onNavigate,
  onMenu
}) {
  const D = window.ATRIUM_DATA;
  const p = D.projects.find(x => x.id === id) || D.projects[0];
  const i = D.projects.indexOf(p);
  const next = D.projects[(i + 1) % D.projects.length];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ColumnRules, {
    count: 4,
    from: "46%",
    style: {
      background: "var(--surface-sunken)",
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement(window.SiteNav, {
    onMenu: onMenu,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-7) 22px var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(ArrowLink, {
    direction: "chevron",
    size: "xs",
    tone: "muted",
    onClick: e => {
      e.preventDefault();
      onNavigate("projects");
    }
  }, "tous les projets"), /*#__PURE__*/React.createElement(Statement, {
    size: "display",
    measure: "20ch",
    as: "h1"
  }, p.title))), /*#__PURE__*/React.createElement(MediaBand, {
    height: 420,
    tint: p.tint
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: 72,
      padding: "var(--space-9) var(--space-7) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 0
    }
  }, [["lieu", p.place], ["année", p.year], ["surface", p.area], ["mission", p.type], ["maître d'ouvrage", "privé"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "13px 0",
      borderBottom: "1px solid var(--line-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Label, {
    tone: "muted"
  }, k), /*#__PURE__*/React.createElement(Label, {
    mono: true
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Statement, {
    size: "lead",
    measure: "24ch"
  }, p.brief), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.45,
      maxWidth: "50ch"
    }
  }, "Le projet reprend la trame existante pour y glisser des volumes simples, \xE9clair\xE9s par le haut. Les mat\xE9riaux restent bruts : b\xE9ton, bois massif, verre clair. Rien n'est peint."))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "flex",
      gap: 26,
      alignItems: "flex-end",
      padding: "0 var(--space-7) var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement(ArchMedia, {
    shape: "arch",
    width: "24%",
    height: 360,
    tint: "var(--tint-concrete)",
    caption: "fa\xE7ade sud"
  }), /*#__PURE__*/React.createElement(ArchMedia, {
    shape: "capsule",
    width: "24%",
    height: 300,
    tint: p.tint,
    caption: "patio"
  }), /*#__PURE__*/React.createElement(ArchMedia, {
    shape: "square",
    width: "46%",
    height: 340,
    tint: "var(--tint-glass)",
    caption: "hall d'accueil"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: "1px solid var(--line-hairline)",
      padding: "var(--space-7) var(--space-7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Label, {
    tone: "muted"
  }, "projet suivant"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      letterSpacing: "-0.025em"
    }
  }, next.title)), /*#__PURE__*/React.createElement(Button, {
    icon: "chevron",
    onClick: () => onNavigate("project", next.id)
  }, "voir le projet")));
}
Object.assign(window, {
  Project
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Project.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Projects.jsx
try { (() => {
const {
  ColumnRules,
  Statement,
  Label,
  ArchMedia,
  ArrowLink
} = window.AtriumDesignSystem_e5d119;
function Projects({
  onNavigate,
  onMenu
}) {
  const D = window.ATRIUM_DATA;
  const [filter, setFilter] = React.useState("tous");
  const [hover, setHover] = React.useState(null);
  const types = ["tous", "architecture", "intérieur", "santé", "chantier"];
  const rows = D.projects.filter(p => filter === "tous" || p.type === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ColumnRules, {
    count: 4,
    from: "46%",
    style: {
      background: "var(--surface-sunken)",
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement(window.SiteNav, {
    onMenu: onMenu,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-8) 22px var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Statement, {
    size: "display",
    measure: "18ch",
    as: "h1"
  }, "projets"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 30,
      padding: "var(--space-6) var(--space-7)",
      borderBottom: "1px solid var(--line-hairline)"
    }
  }, types.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setFilter(t),
    style: {
      background: "none",
      border: "none",
      padding: "0 0 3px",
      cursor: "pointer",
      fontFamily: "var(--font-text)",
      fontSize: 13,
      textTransform: "lowercase",
      color: filter === t ? "var(--text-body)" : "var(--text-muted)",
      borderBottom: filter === t ? "1px solid var(--line-strong)" : "1px solid transparent",
      transition: "var(--transition-hover)"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--space-7) var(--space-9)"
    }
  }, rows.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("project", p.id);
    },
    onMouseEnter: () => setHover(p.id),
    onMouseLeave: () => setHover(null),
    style: {
      display: "grid",
      gridTemplateColumns: "52px 1fr 160px 120px 90px 24px",
      alignItems: "center",
      gap: 16,
      padding: "22px 0",
      borderBottom: "1px solid var(--line-hairline)",
      textDecoration: "none",
      opacity: hover && hover !== p.id ? 0.45 : 1,
      transition: "opacity var(--dur-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 46,
      borderRadius: p.shape === "arch" ? "999px 999px 0 0" : "999px",
      background: p.tint,
      width: 26
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      letterSpacing: "-0.02em"
    }
  }, p.title), /*#__PURE__*/React.createElement(Label, {
    tone: "muted"
  }, p.type), /*#__PURE__*/React.createElement(Label, {
    tone: "muted",
    style: {
      textTransform: "none"
    }
  }, p.place), /*#__PURE__*/React.createElement(Label, {
    mono: true,
    tone: "muted"
  }, p.year), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      transform: hover === p.id ? "translateX(3px)" : "none",
      transition: "transform var(--dur-fast) var(--ease-out-expo)"
    }
  }, "\u203A")))));
}
Object.assign(window, {
  Projects
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Studio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  ColumnRules,
  Statement,
  Label,
  ArchCluster,
  ArchMedia,
  AddressBlock,
  Button,
  LangToggle
} = window.AtriumDesignSystem_e5d119;
function Studio({
  onNavigate,
  onMenu
}) {
  const D = window.ATRIUM_DATA;
  const filiales = [{
    name: "atrium architecture",
    note: "Équipements publics, logement, tertiaire. Concours et maîtrise d'œuvre complète."
  }, {
    name: "atrium intérieur",
    note: "Aménagement, scénographie, mobilier sur mesure."
  }, {
    name: "atrium santé",
    note: "Hôpitaux, cliniques, EHPAD. Programmation et phasage en site occupé."
  }, {
    name: "atrium chantier",
    note: "OPC et maîtrise d'œuvre d'exécution."
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ColumnRules, {
    count: 4,
    from: "46%",
    style: {
      background: "var(--surface-sunken)",
      paddingBottom: 44
    }
  }, /*#__PURE__*/React.createElement(window.SiteNav, {
    onMenu: onMenu,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "var(--space-7) 22px var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Statement, {
    size: "display",
    measure: "14ch",
    as: "h1"
  }, "l'agence"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 24,
      top: 0
    }
  }, /*#__PURE__*/React.createElement(ArchCluster, {
    overlap: 18,
    itemWidth: 72,
    items: [{
      height: 190,
      offsetY: 12,
      tint: "var(--tint-moss)"
    }, {
      height: 220,
      offsetY: -18,
      tint: "var(--tint-concrete)"
    }, {
      height: 170,
      offsetY: 22,
      tint: "var(--tint-timber)"
    }]
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-9) var(--space-7) var(--space-8)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 72
    }
  }, /*#__PURE__*/React.createElement(Statement, {
    size: "lead",
    measure: "22ch"
  }, "Une agence structur\xE9e en quatre filiales, une seule culture de projet : le dessin d'abord, la mise en \u0153uvre ensuite."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, filiales.map(fl => /*#__PURE__*/React.createElement("div", {
    key: fl.name,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.2fr",
      gap: 24,
      padding: "20px 0",
      borderBottom: "1px solid var(--line-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      letterSpacing: "-0.02em"
    }
  }, fl.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.45,
      color: "var(--text-muted)"
    }
  }, fl.note))))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "flex",
      gap: 24,
      padding: "0 var(--space-7) var(--space-9)",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(ArchMedia, {
    shape: "square",
    width: "50%",
    height: 380,
    tint: "var(--tint-concrete)",
    caption: "atelier, Lyon"
  }), /*#__PURE__*/React.createElement(ArchMedia, {
    shape: "arch",
    width: "22%",
    height: 300,
    tint: "var(--tint-glass)",
    caption: "maquettes"
  }), /*#__PURE__*/React.createElement(ArchMedia, {
    shape: "capsule",
    width: "22%",
    height: 260,
    tint: "var(--tint-clay)",
    caption: "chantier Annecy"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: "1px solid var(--line-hairline)",
      padding: "var(--space-7) var(--space-7) var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Label, {
    tone: "muted"
  }, "nous rencontrer"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(LangToggle, null), /*#__PURE__*/React.createElement(Button, {
    icon: "chevron"
  }, "nous contacter"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 24
    }
  }, D.offices.map(o => /*#__PURE__*/React.createElement(AddressBlock, _extends({
    key: o.city
  }, o))))));
}
Object.assign(window, {
  Studio
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Studio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/data.js
try { (() => {
window.ATRIUM_DATA = {
  nav: [{
    label: "architecture",
    view: "projects"
  }, {
    label: "intérieur",
    view: "projects"
  }, {
    label: "santé",
    view: "projects"
  }, {
    label: "chantier",
    view: "projects"
  }],
  offices: [{
    city: "Lyon",
    lines: ["14, quai Rambaud", "69002 Lyon • France"],
    phone: "+33 (0)4 78 92 14 07"
  }, {
    city: "Annecy",
    lines: ["8, chemin des Fins", "74000 Annecy • France"],
    phone: "+33 (0)4 50 11 63 28"
  }, {
    city: "Paris",
    lines: ["22, rue de la Fontaine au Roi", "75011 Paris • France"],
    phone: "+33 (0)1 53 17 91 00"
  }, {
    city: "Genève",
    lines: ["12, quai du Rhône", "1204 Genève • Suisse"],
    phone: "+41 22 518 04 12"
  }],
  projects: [{
    id: "halles",
    title: "Halles Rambaud",
    place: "Lyon",
    year: "2025",
    type: "architecture",
    area: "4 200 m²",
    tint: "var(--tint-concrete)",
    shape: "capsule",
    brief: "Requalification d'une halle ferroviaire en marché couvert et bureaux, charpente conservée, toiture en shed refaite en polycarbonate."
  }, {
    id: "clinique",
    title: "Clinique des Fins",
    place: "Annecy",
    year: "2024",
    type: "santé",
    area: "9 800 m²",
    tint: "var(--tint-glass)",
    shape: "arch",
    brief: "Un hôpital de jour organisé autour de trois patios plantés, façade en béton matricé et brise-soleil bois."
  }, {
    id: "atelier",
    title: "Atelier Vignoles",
    place: "Paris",
    year: "2024",
    type: "intérieur",
    area: "610 m²",
    tint: "var(--tint-timber)",
    shape: "capsule",
    brief: "Aménagement d'un atelier d'ébénisterie en studio de création : cloisons vitrées, sol béton ciré, mobilier sur mesure."
  }, {
    id: "ecole",
    title: "École du Salève",
    place: "Genève",
    year: "2023",
    type: "architecture",
    area: "3 150 m²",
    tint: "var(--tint-moss)",
    shape: "arch",
    brief: "Groupe scolaire à structure bois, préau en voûtes basses, préfabrication intégrale en atelier."
  }, {
    id: "thermes",
    title: "Thermes de Drumettaz",
    place: "Savoie",
    year: "2023",
    type: "chantier",
    area: "2 400 m²",
    tint: "var(--tint-clay)",
    shape: "capsule",
    brief: "Maîtrise d'œuvre d'exécution d'un centre thermal : 18 mois de chantier en site occupé."
  }, {
    id: "sieges",
    title: "Siège Rhône Est",
    place: "Lyon",
    year: "2022",
    type: "architecture",
    area: "11 400 m²",
    tint: "var(--tint-concrete)",
    shape: "arch",
    brief: "Immeuble de bureaux bas carbone, structure poteau-dalle et façade unitaire aluminium recyclé."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.BrandBadge = __ds_scope.BrandBadge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.LangToggle = __ds_scope.LangToggle;

__ds_ns.AddressBlock = __ds_scope.AddressBlock;

__ds_ns.ColumnRules = __ds_scope.ColumnRules;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Statement = __ds_scope.Statement;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.ArchCluster = __ds_scope.ArchCluster;

__ds_ns.ArchMedia = __ds_scope.ArchMedia;

__ds_ns.MediaBand = __ds_scope.MediaBand;

})();
