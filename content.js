! function(e) {
    var t = {};
    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 1)
}([, function(e, t) {
    const n = document.querySelector.bind(document);
    document.createElement.bind(document);
    chrome.runtime.sendMessage({
        __ga: !0,
        category: "usage",
        action: "visit-website",
        label: location.href
    });
    try {
        const e = document.location.href.match(/\.[^/]+\/[^/]+\/([^/]+)/);
        if (null !== e && e.length > 1) {
            const t = e[1];
            document.querySelector("h6") && document.querySelector("h6")
                .textContent.indexOf("We can't find the file you are looking for") ? chrome.runtime.sendMessage({
                    __ga: !0,
                    category: "video",
                    action: "removed",
                    label: t
                }) : (chrome.runtime.sendMessage({
                    __ga: !0,
                    category: "video",
                    action: "front",
                    label: t
                }), chrome.runtime.sendMessage({
                    action: "POSSIBLE_VIDEO",
                    vid: t
                }))
        }
    } catch (e) {
        ! function(e) {
            chrome.runtime.sendMessage({
                __ga: !0,
                category: "internal",
                action: "error",
                label: e.stack
            })
        }(e)
    }
    function o() {
        let e = n("[id^=streamur]");
        if (null === e && (e = document.querySelector("#mediaspace_wrapper > div:last-child > p:last-child")), null === e && (e = document.querySelector("#main p:last-child")), null === e) return !0;
        const t = e.textContent;
        return !/(HERE IS THE LINK)|(enough for anybody)/.test(t) && (function(e) {
            window.location.replace(e)
        }(`/stream/${t}?mime=true`), !0)
    }!1 === o() && setInterval(o, 1e3)
}]);
