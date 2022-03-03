(function(g) {
    var window = this;
    'use strict';
    var h6 = function(a, b) {
            var c = this;
            this.Y = a;
            this.api = b;
            this.N = new g.pv;
            this.u = new g.$Q(function() {
                return XZa(c)
            }, function() {
                YZa(c)
            }, this.api.zm(), this.api.S.bind(this.api));
            this.B = new g.ZQ(this.api);
            this.C = new g.bk;
            g.aR(this.u)
        },
        XZa = function(a) {
            return g.B(function(b) {
                a.api.Qa("onOrchestrationBecameLeader");
                a.j && a.D || ZZa(a).then(a.C.resolve).catch(a.C.reject);
                var c = a.C.promise;
                return g.A(b, c, 0)
            })
        },
        ZZa = function(a) {
            var b, c, d;
            return g.B(function(e) {
                if (1 == e.j) return g.A(e, g.NL(), 2);
                if (3 != e.j) {
                    b = e.u;
                    if (!b) return g.LQ("PES is undefined"), e.return();
                    a.j = new g.gR(b, a.api, a.u, a.B);
                    c = a.kF(b);
                    d = a;
                    return g.A(e, g.rGa(b, c, a.u, a.B), 3)
                }
                d.D = e.u;
                return g.A(e, $Za(a), 0)
            })
        },
        $Za = function(a) {
            var b;
            return g.B(function(c) {
                switch (c.j) {
                    case 1:
                        if (!a.j) return g.LQ("transferManager is undefined"), c.return();
                        if (!a.api.S("woffle_orch_init_killswitch") && a.j.j) {
                            c.eb(2);
                            break
                        }
                        return g.A(c, g.iR(a.j), 2);
                    case 2:
                        return g.A(c, a.Wm(), 4);
                    case 4:
                        return a.J = g.es(function() {
                            a.Wm()
                        }, 9E5), g.xs(g.zs(), function() {
                            a.j && g.WGa(a.j)
                        }), g.A(c, g.NL(), 5);
                    case 5:
                        return b = c.u, g.A(c, g.CGa(b), 6);
                    case 6:
                        g.FGa(a.u), g.ta(c)
                }
            })
        },
        YZa = function(a) {
            var b, c;
            g.B(function(d) {
                if (1 == d.j) return a.j || a.D ? g.A(d, a.C.promise, 2) : d.return();
                void 0 !== a.J && (g.gs(a.J), a.J = void 0);
                null === (b = a.j) || void 0 === b ? void 0 : b.dispose();
                a.j = void 0;
                null === (c = a.D) || void 0 === c ? void 0 : c.dispose();
                a.D = void 0;
                a.api.Qa("onOrchestrationLostLeader");
                a.C = new g.bk;
                g.ta(d)
            })
        },
        a_a = function() {
            var a, b, c, d, e, f;
            return g.B(function(k) {
                switch (k.j) {
                    case 1:
                        return g.A(k, g.NL(), 2);
                    case 2:
                        a = k.u;
                        if (!a) return k.return([]);
                        b = Date.now() / 1E3;
                        return g.A(k, g.LL(a, "offlineVideoPolicy"), 3);
                    case 3:
                        c = k.u, d = g.q(c), e = d.next();
                    case 4:
                        if (e.done) {
                            k.eb(6);
                            break
                        }
                        f = e.value;
                        if (!(f.expirationTimestamp && Number(f.expirationTimestamp) < b)) {
                            k.eb(5);
                            break
                        }
                        f.action = "OFFLINE_VIDEO_POLICY_ACTION_DISABLE";
                        return g.A(k, g.IL(a, f, "offlineVideoPolicy"), 5);
                    case 5:
                        e = d.next();
                        k.eb(4);
                        break;
                    case 6:
                        return k.return(c.map(function(l) {
                            return l.key
                        }))
                }
            })
        },
        i6 = function(a, b, c, d, e) {
            var f, k, l;
            return g.B(function(m) {
                if (1 == m.j) return g.A(m, g.NL(), 2);
                f = m.u;
                if (!f) return m.return([]);
                k = b.map(function(n) {
                    var p = g.pL(n, c);
                    p = {
                        actionType: d,
                        entityKey: p,
                        actionMetadata: Object.assign(Object.assign({}, g.QQ()), e)
                    };
                    "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH" !== d && (p.actionMetadata.priority = 0);
                    n = new g.RQ(c, n, p);
                    return g.SQ(n)
                });
                l = g.JL(f, k);
                g.aR(a.u);
                return m.return(l)
            })
        },
        j6 = function() {
            h6.apply(this, arguments);
            this.K = "ytMainDownloadedVideoEntity"
        },
        k6 = function() {
            g.sM.apply(this, arguments)
        };
    g.h = h6.prototype;
    g.h.kF = function(a) {
        var b = {};
        return b.playbackData = new g.NQ(a, this.Y, this.B), b.transfer = new g.PQ(a), b
    };
    g.h.isOrchestrationLeader = function() {
        return this.u.j
    };
    g.h.Jx = function(a) {
        g.DGa(this.B, a)
    };
    g.h.qr = function(a) {
        var b, c;
        return g.B(function(d) {
            if (1 == d.j) return g.A(d, g.NL(), 2);
            b = d.u;
            if (!b) return d.return();
            c = g.pL(a, "transfer");
            return g.A(d, g.GL(b, {
                mode: "readwrite",
                Ic: !0
            }, function(e) {
                return g.yL(e, c, "transfer").then(function(f) {
                    return f && "TRANSFER_STATE_PAUSED_BY_USER" === f.transferState ? (f.transferState = "TRANSFER_STATE_TRANSFER_IN_QUEUE", g.BL(e, f, "transfer").then(function() {
                        g.IFa({
                            videoId: a,
                            gi: f
                        });
                        return g.pu.resolve(null)
                    })) : g.pu.resolve(null)
                })
            }), 0)
        })
    };
    g.h.Wm = function(a) {
        a = void 0 === a ? 43200 : a;
        var b = this,
            c, d, e, f, k, l, m, n;
        return g.B(function(p) {
            if (1 == p.j) return b.N.Ae() ? g.A(p, g.NL(), 2) : p.return(a_a());
            if (3 != p.j) {
                c = p.u;
                if (!c) return p.return([]);
                d = Date.now() / 1E3;
                return g.A(p, g.LL(c, "offlineVideoPolicy"), 3)
            }
            e = p.u;
            f = [];
            k = g.q(e);
            for (l = k.next(); !l.done; l = k.next()) m = l.value, Number(m.lastUpdatedTimestampSeconds) + a <= d && (n = g.oL(m.key).entityId, f.push(n));
            return f.length ? p.return(i6(b, f, b.K, "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH")) : p.return([])
        })
    };
    g.h.deleteAll = function() {
        return i6(this, ["!*$_ALL_VIDEOS_!*$"], this.K, "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE")
    };
    g.w(j6, h6);
    j6.prototype.kF = function(a) {
        var b = h6.prototype.kF.call(this, a);
        b.ytMainDownloadedVideoEntity = new g.MQ(a, this.Y, this.B);
        return b
    };
    g.w(k6, g.sM);
    g.h = k6.prototype;
    g.h.create = function() {
        var a = this.player.V();
        g.xD(a) && (this.Ne = new j6(a, this.player))
    };
    g.h.Zh = function() {
        return !1
    };
    g.h.uH = function(a, b, c, d) {
        var e = this;
        return g.B(function(f) {
            return e.Ne ? f.return(i6(e.Ne, a, b, c, d)) : f.return(Promise.reject())
        })
    };
    g.h.deleteAll = function() {
        return this.Ne.deleteAll()
    };
    g.h.Wm = function(a) {
        return this.Ne.Wm(a)
    };
    g.h.Jx = function(a) {
        this.Ne.Jx(a)
    };
    g.h.qr = function(a) {
        return this.Ne.qr(a)
    };
    g.h.isOrchestrationLeader = function() {
        return this.Ne.isOrchestrationLeader()
    };
    g.rM("offline", k6);
})(_yt_player);