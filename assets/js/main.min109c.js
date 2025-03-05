((o) => {
  (window.qodef = {}),
    (qodef.body = o("body")),
    (qodef.html = o("html")),
    (qodef.windowWidth = o(window).width()),
    (qodef.windowHeight = o(window).height()),
    (qodef.scroll = 0),
    o(document).ready(function () {
      (qodef.scroll = o(window).scrollTop()),
        t.init(),
        y.init(),
        n.init(),
        d.init(),
        i.init();
    }),
    o(window).on("load", function () {
      e.init();
    }),
    o(window).resize(function () {
      (qodef.windowWidth = o(window).width()),
        (qodef.windowHeight = o(window).height());
    }),
    o(window).scroll(function () {
      qodef.scroll = o(window).scrollTop();
    }),
    o(document).on("hendon_trigger_get_new_posts", function () {
      y.init(), n.init();
    });
  var t = {
      init: function () {
        t.addBodyClassName();
      },
      isBrowser: function (e) {
        var i = !1;
        switch (e) {
          case "chrome":
            i =
              /Chrome/.test(navigator.userAgent) &&
              /Google Inc/.test(navigator.vendor);
            break;
          case "safari":
            i =
              /Safari/.test(navigator.userAgent) &&
              /Apple Computer/.test(navigator.vendor);
            break;
          case "firefox":
            i = -1 < navigator.userAgent.toLowerCase().indexOf("firefox");
            break;
          case "ie":
            i =
              0 < window.navigator.userAgent.indexOf("MSIE ") ||
              !!navigator.userAgent.match(/Trident.*rv\:11\./);
            break;
          case "edge":
            i = /Edge\/\d./i.test(navigator.userAgent);
        }
        return i;
      },
      addBodyClassName: function () {
        o.each(["chrome", "safari", "firefox", "ie", "edge"], function (e, i) {
          t.isBrowser(i) &&
            void 0 !== qodef.body &&
            ("ie" === i && (i = "ms-explorer"),
            qodef.body.addClass("qodef-browser--" + i));
        });
      },
    },
    e = {
      init: function () {
        var e = o(
          ".qodef-instagram-list .sbi_photo, .qodef-social-share.qodef-layout--list li a, #qodef-author-info .qodef-m-social-icons a, .qodef-social-share.qodef-layout--dropdown .qodef-social-share-dropdown li a, .qodef-social-share-dropdown-opener"
        );
        e.length &&
          e.each(function () {
            o(this).append(
              '<svg class="qodef-svg-circle"><circle cx="50%" cy="50%" r="49%"></circle></svg>'
            );
          });
      },
    },
    y = {
      init: function (e) {
        (this.holder = o(".qodef-swiper-container")),
          o.extend(this.holder, e),
          this.holder.length &&
            this.holder.each(function () {
              y.createSlider(o(this));
            });
      },
      createSlider: function (e) {
        var i = y.getOptions(e),
          t = y.getEvents(e);
        new Swiper(e[0], Object.assign(i, t));
      },
      getOptions: function (e) {
        var i = void 0 !== e.data("options") ? e.data("options") : {},
          t =
            void 0 !== i.direction && "" !== i.direction
              ? i.direction
              : "horizontal",
          n =
            void 0 !== i.reverseDirection &&
            "" !== i.reverseDirection &&
            i.reverseDirection,
          o =
            void 0 !== i.spaceBetween && "" !== i.spaceBetween
              ? i.spaceBetween
              : 0,
          a =
            void 0 !== i.slidesPerView && "" !== i.slidesPerView
              ? i.slidesPerView
              : 1,
          d =
            void 0 !== i.centeredSlides &&
            "" !== i.centeredSlides &&
            i.centeredSlides,
          r = void 0 === i.loop || "" === i.loop || i.loop,
          s = void 0 === i.autoplay || "" === i.autoplay || i.autoplay,
          l =
            void 0 !== i.speed && "" !== i.speed ? parseInt(i.speed, 10) : 3e3,
          f =
            void 0 !== i.speedAnimation && "" !== i.speedAnimation
              ? parseInt(i.speedAnimation, 10)
              : 800,
          c =
            void 0 !== i.slideAnimation && "" !== i.slideAnimation
              ? i.slideAnimation
              : "",
          h =
            void 0 !== i.customStages &&
            "" !== i.customStages &&
            i.customStages,
          g = void 0 !== i.outsideNavigation && "yes" === i.outsideNavigation,
          u = g
            ? ".swiper-button-next-" + i.unique
            : e.children(".swiper-button-next").length
            ? e.children(".swiper-button-next")[0]
            : null,
          g = g
            ? ".swiper-button-prev-" + i.unique
            : e.children(".swiper-button-prev").length
            ? e.children(".swiper-button-prev")[0]
            : null,
          p = e.children(".swiper-pagination").length
            ? e.children(".swiper-pagination")[0]
            : null,
          m =
            void 0 !== i.loopedSlides && "" !== i.loopedSlides
              ? parseInt(i.loopedSlides)
              : null,
          n =
            (!0 === s &&
              ((s = { disableOnInteraction: !1, reverseDirection: n }),
              5e3 !== l) &&
              (s.delay = l),
            void 0 !== i.slidesPerView1440 && "" !== i.slidesPerView1440
              ? i.slidesPerView1440
              : 5),
          l =
            void 0 !== i.slidesPerView1366 && "" !== i.slidesPerView1366
              ? i.slidesPerView1366
              : 4,
          w =
            void 0 !== i.slidesPerView1024 && "" !== i.slidesPerView1024
              ? i.slidesPerView1024
              : 3,
          v =
            void 0 !== i.slidesPerView768 && "" !== i.slidesPerView768
              ? i.slidesPerView768
              : 2,
          q =
            void 0 !== i.slidesPerView680 && "" !== i.slidesPerView680
              ? i.slidesPerView680
              : 1,
          h =
            (h ||
              (a < 2
                ? (v = w = l = n = a)
                : a < 3
                ? (w = l = n = a)
                : a < 4
                ? (l = n = a)
                : a < 5 && (n = a)),
            {
              direction: t,
              slidesPerView: a,
              centeredSlides: d,
              spaceBetween: o,
              autoplay: s,
              loop: r,
              loopedSlides: m,
              speed: f,
              navigation: { nextEl: u, prevEl: g },
              pagination: { el: p, clickable: !0 },
              breakpoints: {
                0: {
                  slidesPerView:
                    void 0 !== i.slidesPerView480 && "" !== i.slidesPerView480
                      ? i.slidesPerView480
                      : 1,
                },
                481: { slidesPerView: q },
                681: { slidesPerView: v },
                769: { slidesPerView: w },
                1025: { slidesPerView: l },
                1367: { slidesPerView: n },
                1441: { slidesPerView: a },
              },
            });
        return (
          c.length &&
            "fade" === c &&
            ((h.effect = "fade"), (h.fadeEffect = { crossFade: !0 })),
          Object.assign(h, y.getSliderDatas(e))
        );
      },
      getSliderDatas: function (e) {
        var i,
          t = e.data(),
          n = {};
        for (i in t)
          t.hasOwnProperty(i) &&
            "options" !== i &&
            void 0 !== t[i] &&
            "" !== t[i] &&
            (n[i] = t[i]);
        return n;
      },
      getEvents: function (e) {
        return {
          on: {
            init: function () {
              e.addClass("qodef-swiper--initialized"),
                e
                  .parent()
                  .find(".swiper-button-prev")
                  .append(
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="74px" height="40px" viewBox="0 0 74 40" enable-background="new 0 0 74 40" xml:space="preserve"><g><circle opacity="0.5" fill="none" stroke="#C28562" cx="71%" cy="50%" r="24%" style=""></circle><circle fill="none" stroke="#C28562" cx="71%" cy="50%" r="24%"></circle></g><polygon fill="#C28562" points="49.525,14.265 48.898,15.044 54.481,19.541 6.444,19.541 6.444,20.541 54.464,20.541 48.901,24.954 49.522,25.737 56.7,20.044 "></polygon></svg>'
                  ),
                e
                  .parent()
                  .find(".swiper-button-next")
                  .append(
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="74px" height="40px" viewBox="0 0 74 40" enable-background="new 0 0 74 40" xml:space="preserve"><g><circle opacity="0.5" fill="none" stroke="#C28562" cx="71%" cy="50%" r="24%" style=""></circle><circle fill="none" stroke="#C28562" cx="71%" cy="50%" r="24%"></circle></g><polygon fill="#C28562" points="49.525,14.265 48.898,15.044 54.481,19.541 6.444,19.541 6.444,20.541 54.464,20.541 48.901,24.954 49.522,25.737 56.7,20.044 "></polygon></svg>'
                  );
            },
          },
        };
      },
    },
    n =
      ((qodef.qodefSwiper = y),
      {
        init: function (e) {
          (this.holder = o(".qodef-magnific-popup")),
            o.extend(this.holder, e),
            this.holder.length &&
              this.holder.each(function () {
                var e = o(this);
                e.hasClass("qodef-popup-item")
                  ? n.initSingleImagePopup(e)
                  : e.hasClass("qodef-popup-gallery") && n.initGalleryPopup(e);
              });
        },
        initSingleImagePopup: function (e) {
          var i = e.data("type");
          e.magnificPopup({
            type: i,
            titleSrc: "title",
            image: { cursor: null },
          });
        },
        initGalleryPopup: function (e) {
          var e = e.find(".qodef-popup-item"),
            i = n.generateGalleryItems(e);
          e.each(function (e) {
            o(this).magnificPopup({
              items: i,
              gallery: { enabled: !0 },
              index: e,
              type: "image",
              image: { cursor: null },
            });
          });
        },
        generateGalleryItems: function (e) {
          var i = [];
          return (
            e.length &&
              e.each(function () {
                var e = o(this),
                  e = {
                    src: e.attr("href"),
                    title: e.attr("title"),
                    type: e.data("type"),
                  };
                i.push(e);
              }),
            i
          );
        },
      }),
    i =
      ((qodef.qodefMagnificPopup = n),
      (qodef.qodefGetRandomIntegerInRange = {
        init: function (e, i) {
          return (
            (e = Math.ceil(e)),
            (i = Math.floor(i)),
            Math.floor(Math.random() * (i - e)) + e
          );
        },
      }),
      (qodef.qodefSplitTextToSpans = {
        init: function (i) {
          var e;
          i.length &&
            ((e = i.text().trim().split("")),
            i.empty(),
            e.forEach(function (e) {
              i.append("<span>" + e + "</span>");
            }));
        },
      }),
      {
        init: function () {
          [
            [
              ".qodef-banner.qodef-layout--with-custom-icon",
              ".qodef-m-content",
              0,
              0,
              "ascending",
            ],
            [
              ".qodef-icon-with-text.qodef-layout--top",
              "svg",
              600,
              0,
              "random",
            ],
            [
              ".qodef-clients-list.qodef-item-layout--image-only.qodef-hover-animation--fade-in",
              ".qodef-e",
              500,
              0,
              "random",
            ],
            [
              ".qodef-video-button.qodef--has-img",
              ".qodef-m-image",
              0,
              0,
              "ascending",
            ],
            [
              ".qodef-image-with-text.qodef-image-outline.qodef-image-outline-top-right",
              ".qodef-m-image",
              0,
              0,
              "ascending",
            ],
          ].forEach(function (n) {
            var e,
              i,
              t = o(n[0]);
            t.length &&
              (e = t.find(n[1])).length &&
              ((i = n[3]),
              t.offset().top > 0.8 * qodef.windowHeight &&
                t.offset().top < 2 * qodef.windowHeight &&
                (i = -200),
              t.appear(
                function () {
                  e.each(function (e) {
                    var i,
                      t = o(this);
                    "random" === n[4]
                      ? (i = qodef.qodefGetRandomIntegerInRange.init(0, n[2]))
                      : "ascending" === n[4] && (i = e * n[2]),
                      setTimeout(function () {
                        t.addClass("qodef--appear");
                      }, i);
                  });
                },
                { accX: 0, accY: i }
              ));
          });
        },
      }),
    d = {
      items: "",
      init: function (e) {
        (this.holder = o(".qodef-anchor")),
          o.extend(this.holder, e),
          this.holder.length &&
            ((d.items = this.holder),
            d.clickTrigger(),
            o(window).on("load", function () {
              d.checkAnchorOnScroll(), d.checkAnchorOnLoad();
            }));
      },
      clickTrigger: function () {
        d.items.on("click", function (e) {
          var i = d.getAnchorItem(this),
            t = i.attr("href"),
            n = i.prop("hash").split("#")[1],
            o = window.location.href,
            a = -1 < o.indexOf("#") ? o.split("#")[1] : 0;
          (t.indexOf("http") < 0 ||
            t === o ||
            (0 !== a &&
              t.substring(0, t.length - n.length - 1) ===
                o.substring(0, o.length - a.length - 1)) ||
            (0 === a && t.substring(0, t.length - n.length - 1) === o)) &&
            e.preventDefault(),
            d.animateScroll(i, n);
        });
      },
      checkAnchorOnLoad: function () {
        var i = window.location.hash.split("#")[1];
        void 0 !== i &&
          "" !== i &&
          d.items.length &&
          d.items.each(function () {
            var e = d.getAnchorItem(this);
            -1 < e.attr("href").indexOf(i) && d.animateScroll(e, i);
          });
      },
      checkAnchorOnScroll: function () {
        var e;
        1024 < qodef.windowWidth &&
          (e = o("#qodef-page-inner *[id]")).length &&
          e.each(function () {
            var e = o(this),
              i = o('[href*="#' + e.attr("id") + '"]');
            i.length &&
              (d.isTargetInView(e) && d.setActiveState(i),
              o(window).scroll(function () {
                d.isTargetInView(e)
                  ? d.setActiveState(i)
                  : i.removeClass(d.getItemClasses(i));
              }));
          });
      },
      isTargetInView: function (e) {
        var e = e[0].getBoundingClientRect(),
          i = window.innerHeight || document.documentElement.clientHeight;
        return !(
          Math.floor(100 - ((0 <= e.top ? 0 : e.top) / -+e.height) * 100) <
            20 || Math.floor(100 - ((e.bottom - i) / e.height) * 100) < 20
        );
      },
      getAnchorItem: function (e) {
        return "A" === e.tagName ? o(e) : o(e).children("a");
      },
      animateScroll: function (e, i) {
        var t = "" !== i ? o('[id="' + i + '"]') : "";
        if (t.length)
          return (
            (t =
              t.offset().top -
              d.getHeaderHeight() -
              qodefGlobal.vars.adminBarHeight),
            d.setActiveState(e),
            qodef.html
              .stop()
              .animate({ scrollTop: Math.round(t) }, 1e3, function () {
                history.pushState && history.pushState(null, "", "#" + i);
              }),
            !1
          );
      },
      getHeaderHeight: function () {
        var e = 0;
        return (e =
          1024 < qodef.windowWidth &&
          null !== qodefGlobal.vars.headerHeight &&
          "" !== qodefGlobal.vars.headerHeight
            ? parseInt(qodefGlobal.vars.headerHeight, 10)
            : e);
      },
      setActiveState: function (e) {
        var i = !e.parent().hasClass("qodef-anchor"),
          t = d.getItemClasses(e);
        d.items.removeClass(t), (i ? e : e.parent()).addClass(t);
      },
      getItemClasses: function (e) {
        return (
          "qodef-anchor--active" +
          (e.parents("#qodef-page-header")
            ? " current-menu-item current_page_item"
            : "")
        );
      },
    };
  qodef.qodefAnchor = d;
})(jQuery),
  ((n) => {
    n(document).ready(function () {
      o.init();
    }),
      n(window).on("resize", function () {
        o.init();
      }),
      n(document).on("hendon_trigger_get_new_posts", function (e, i) {
        i.hasClass("qodef-blog") && (t.init(i), o.resize(i));
      });
    var t = {
        init: function (e) {
          e = e
            .find(".wp-video-shortcode, .wp-audio-shortcode")
            .not(".mejs-container");
          e.length &&
            e.each(function () {
              var e = n(this);
              "function" == typeof e.mediaelementplayer &&
                e.mediaelementplayer();
            });
        },
      },
      o = {
        init: function () {
          var e = n(".qodef-blog");
          e.length && o.resize(e);
        },
        resize: function (e) {
          e = e.find(".qodef-e-media iframe");
          e.length &&
            e.each(function () {
              var e = n(this),
                i = e.attr("width"),
                t = e.attr("height"),
                i = (e.width() / i) * t;
              e.css("height", i);
            });
        },
      };
  })(jQuery),
  ((c) => {
    c(document).ready(function () {
      h.init();
    }),
      c(document).on("hendon_trigger_get_new_posts", function (e, i) {
        i.hasClass("qodef-filter--on") &&
          h.setVisibility(i, i.find(".qodef-m-filter-item.qodef--active"), !0);
      });
    var h = {
      init: function (e) {
        (this.holder = c(".qodef-filter--on")),
          c.extend(this.holder, e),
          this.holder.length &&
            this.holder.each(function () {
              var e = c(this),
                i = e.find(".qodef-m-filter-item");
              h.extendListHTML(e), h.clickEvent(e, i);
            });
      },
      extendListHTML: function (e) {
        e.children(".qodef-hidden-filter-items").length ||
          h.isMasonryLayout(e) ||
          e.append('<div class="qodef-hidden-filter-items"></div>');
      },
      clickEvent: function (i, t) {
        t.on("click", function (e) {
          e.preventDefault();
          e = c(this);
          e.hasClass("qodef--active") ||
            (i.addClass("qodef--filter-loading"),
            t.removeClass("qodef--active"),
            e.addClass("qodef--active"),
            h.setVisibility(i, e));
        });
      },
      setVisibility: function (e, i, t) {
        var n = e.children(".qodef-hidden-filter-items"),
          o = n.length,
          a = o ? n.children(".qodef-grid-item") : "",
          d = e.find(".qodef-grid-inner"),
          r = d.children(".qodef-grid-item"),
          s = i.data("taxonomy"),
          i = i.data("filter"),
          l = "*" === i,
          f = l ? i : s + "-" + i,
          s = r.hasClass(f);
        o && !s && a.hasClass(f) && (s = !0),
          (t && l) ||
            (l || s || !h.hasLoadMore(e)
              ? (h.isMasonryLayout(e)
                  ? d.isotope({ filter: l ? "" : "." + f })
                  : (l ||
                      r.each(function () {
                        var e = c(this);
                        -1 === e.attr("class").indexOf(f) &&
                          e.hide(300, "linear", function () {
                            e.appendTo(n);
                          });
                      }),
                    a.length &&
                      a.each(function () {
                        var e = c(this),
                          i = e.attr("class");
                        (!l && -1 === i.indexOf(f)) ||
                          e.appendTo(d).show(300, "linear");
                      })),
                e.removeClass("qodef--filter-loading"))
              : qodef.body.trigger("hendon_trigger_load_more", [e]));
      },
      isMasonryLayout: function (e) {
        return e.hasClass("qodef-layout--masonry");
      },
      hasLoadMore: function (e) {
        return e.hasClass("qodef-pagination-type--load-more");
      },
    };
    qodef.qodefFilter = h;
  })(jQuery),
  ((r) => {
    r(document).ready(function () {
      i.init();
    }),
      r(document).on("hendon_trigger_get_new_posts", function () {
        i.init();
      });
    var i = {
      init: function () {
        var e = r(".qodef-layout--justified-gallery");
        e.length &&
          e.each(function () {
            i.setJustifyGallery(r(this));
          });
      },
      setJustifyGallery: function (e) {
        var i = e.data("options"),
          t = e.children(".qodef-grid-inner"),
          n =
            void 0 !== i.justified_gallery_row_height &&
            "" !== i.justified_gallery_row_height
              ? i.justified_gallery_row_height
              : 150,
          o =
            void 0 !== i.justified_gallery_row_height_max &&
            "" !== i.justified_gallery_row_height_max &&
            i.justified_gallery_row_height_max,
          a = 2 * i.space_value,
          d =
            void 0 !== i.justified_gallery_treshold &&
            "" !== i.justified_gallery_treshold
              ? i.justified_gallery_treshold
              : 0.75;
        t.waitForImages(function () {
          "function" == typeof t.justifiedGallery &&
            t
              .justifiedGallery({
                captions: !1,
                rowHeight: n,
                maxRowHeight: o,
                margins: a,
                border: 0,
                lastRow: "nojustify",
                justifyThreshold: d,
                selector: ".qodef-grid-item",
              })
              .on("jg.complete jg.rowflush", function () {
                var i = r(this),
                  t = !1;
                i.find(".qodef-grid-item")
                  .addClass("show")
                  .each(function () {
                    var e = r(this);
                    e.height(Math.round(e.height())),
                      t ||
                        0 !== e.width() ||
                        (i.height(i.height() - e.height() - a), (t = !0));
                  });
              }),
            e.addClass("qodef--justified-gallery-init");
        });
      },
    };
    qodef.qodefJustifiedGallery = i;
  })(jQuery),
  ((i) => {
    i(document).ready(function () {
      o.init();
    }),
      i(document).on("hendon_trigger_get_new_posts", function (e, i) {
        i.hasClass("qodef-layout--masonry") && o.init();
      });
    var o = {
      init: function (e) {
        (this.holder = i(".qodef-layout--masonry")),
          i.extend(this.holder, e),
          this.holder.length &&
            this.holder.each(function () {
              o.createMasonry(i(this));
            });
      },
      createMasonry: function (i) {
        var t = i.find(".qodef-grid-inner"),
          n = t.find(".qodef-grid-item");
        t.waitForImages(function () {
          var e;
          "function" == typeof t.isotope &&
            (t.isotope({
              layoutMode: "packery",
              itemSelector: ".qodef-grid-item",
              percentPosition: !0,
              masonry: {
                columnWidth: ".qodef-grid-masonry-sizer",
                gutter: ".qodef-grid-masonry-gutter",
              },
            }),
            i.hasClass("qodef-items--fixed") &&
              ((e = o.getFixedImageSize(t, n)),
              o.setFixedImageProportionSize(t, n, e)),
            t.isotope("layout")),
            t.addClass("qodef--masonry-init");
        });
      },
      getFixedImageSize: function (e, i) {
        var t,
          n = e.find(".qodef-item--square");
        return n.length
          ? (t = (n = n.find("img")).width()) !== (n = n.height())
            ? n
            : t
          : e.find(".qodef-grid-masonry-sizer").width() -
              2 * parseInt(i.css("paddingLeft"), 10);
      },
      setFixedImageProportionSize: function (e, i, t) {
        var n = parseInt(i.css("paddingLeft"), 10),
          o = (e.find(".qodef-item--square"), e.find(".qodef-item--landscape")),
          a = e.find(".qodef-item--portrait"),
          e = e.find(".qodef-item--huge-square"),
          d = qodef.windowWidth <= 680;
        i.css("height", t),
          o.length && o.css("height", Math.round(t / 2)),
          a.length && a.css("height", Math.round(2 * (t + n))),
          d ||
            (o.length && o.css("height", t),
            e.length && e.css("height", Math.round(2 * (t + n))));
      },
    };
    qodef.qodefMasonryLayout = o;
  })(jQuery),
  ((i) => {
    i(document).ready(function () {
      t.init();
    });
    var t = {
      init: function () {
        var e = i("#qodef-page-mobile-header");
        e.length && (t.initMobileHeaderOpener(e), t.initDropDownMobileMenu());
      },
      initMobileHeaderOpener: function (e) {
        var i,
          t = e.find(".qodef-mobile-header-opener");
        t.length &&
          ((i = e.find(".qodef-mobile-header-navigation")),
          t.on("tap click", function (e) {
            e.preventDefault(),
              i.is(":visible")
                ? (i.slideUp(450), t.removeClass("qodef--opened"))
                : (i.slideDown(450), t.addClass("qodef--opened"));
          }));
      },
      initDropDownMobileMenu: function () {
        var e = i(
          ".qodef-mobile-header-navigation .menu-item-has-children > a"
        );
        e.length &&
          e.each(function () {
            var n = i(this);
            n.on("tap click", function (e) {
              e.preventDefault();
              var i,
                e = n.parent(),
                t = e.siblings(".menu-item-has-children");
              e.hasClass("menu-item-has-children") &&
                ((i = e.find("ul.sub-menu").first()).is(":visible")
                  ? (i.slideUp(450), e.removeClass("qodef--opened"))
                  : (e.addClass("qodef--opened"),
                    (0 === t.length
                      ? e
                      : e.siblings().removeClass("qodef--opened")
                    )
                      .find(".sub-menu")
                      .slideUp(400, function () {
                        i.slideDown(400);
                      })));
            });
          });
      },
    };
  })(jQuery),
  ((d) => {
    d(document).ready(function () {
      e.init();
    });
    var e = {
      init: function () {
        var e = d(
          ".qodef-header-navigation.qodef-header-navigation-initial > ul > li.qodef-menu-item--narrow.menu-item-has-children"
        );
        e.length &&
          e.each(function (e) {
            var i,
              t = d(this),
              n = t.offset().left,
              o = t.find(" > ul"),
              a = o.outerWidth(),
              n = d(window).width() - n;
            0 < t.find("li.menu-item-has-children").length && (i = n - a),
              o.removeClass("qodef-drop-down--right"),
              (n < a || i < a) && o.addClass("qodef-drop-down--right");
          });
      },
    };
  })(jQuery),
  ((a) => {
    a(document).ready(function () {
      d.init();
    }),
      a(window).scroll(function () {
        d.scroll();
      }),
      a(document).on("hendon_trigger_load_more", function (e, i, t) {
        d.triggerLoadMore(i, t);
      });
    var d = {
      init: function (e) {
        (this.holder = a(".qodef-pagination--on")),
          a.extend(this.holder, e),
          this.holder.length &&
            this.holder.each(function () {
              var e = a(this);
              d.initPaginationType(e);
            });
      },
      scroll: function (e) {
        (this.holder = a(".qodef-pagination--on")),
          a.extend(this.holder, e),
          this.holder.length &&
            this.holder.each(function () {
              var e = a(this);
              e.hasClass("qodef-pagination-type--infinite-scroll") &&
                d.initInfiniteScroll(e);
            });
      },
      initPaginationType: function (e) {
        e.hasClass("qodef-pagination-type--standard")
          ? d.initStandard(e)
          : e.hasClass("qodef-pagination-type--load-more")
          ? d.initLoadMore(e)
          : e.hasClass("qodef-pagination-type--infinite-scroll") &&
            d.initInfiniteScroll(e);
      },
      initStandard: function (n) {
        var e,
          i = n.find(".qodef-m-pagination-items");
        i.length &&
          ((e = n.data("options")),
          i.children().each(function () {
            var i = a(this),
              t = i.children("a");
            d.changeStandardState(n, e.max_pages_num, 1),
              t.on("click", function (e) {
                e.preventDefault(),
                  i.hasClass("qodef--active") ||
                    d.getNewPosts(n, t.data("paged"));
              });
          }));
      },
      changeStandardState: function (e, i, t) {
        var n, o;
        e.hasClass("qodef-pagination-type--standard") &&
          ((n = (e = e.find(".qodef-m-pagination-items")).children(
            ".qodef--number"
          )),
          (o = e.children(".qodef--prev")),
          (e = e.children(".qodef--next")),
          n
            .removeClass("qodef--active")
            .eq(t - 1)
            .addClass("qodef--active"),
          o.children().data("paged", t - 1),
          1 < t ? o.show() : o.hide(),
          e.children().data("paged", t + 1),
          t === i ? e.hide() : e.show());
      },
      initLoadMore: function (i) {
        i.find(".qodef-load-more-button").on("click", function (e) {
          e.preventDefault(), d.getNewPosts(i);
        });
      },
      triggerLoadMore: function (e, i) {
        d.getNewPosts(e, i);
      },
      hideLoadMoreButton: function (e, i) {
        e.hasClass("qodef-pagination-type--load-more") &&
          i.next_page > i.max_pages_num &&
          e.find(".qodef-load-more-button").hide();
      },
      initInfiniteScroll: function (e) {
        var i = e.outerHeight() + e.offset().top,
          t = qodef.scroll + qodef.windowHeight,
          n = e.data("options");
        !e.hasClass("qodef--loading") &&
          i < t &&
          n.max_pages_num >= n.next_page &&
          d.getNewPosts(e);
      },
      getNewPosts: function (i, t) {
        i.addClass("qodef--loading");
        var n = i.children(".qodef-grid-inner"),
          o = i.data("options");
        d.setNextPageValue(o, t, !1),
          a.ajax({
            type: "GET",
            url:
              qodefGlobal.vars.restUrl + qodefGlobal.vars.paginationRestRoute,
            data: { options: o },
            beforeSend: function (e) {
              e.setRequestHeader("X-WP-Nonce", qodefGlobal.vars.restNonce);
            },
            success: function (e) {
              "success" === e.status
                ? (d.setNextPageValue(o, t, !0),
                  d.changeStandardState(i, o.max_pages_num, t),
                  n.waitForImages(function () {
                    d.addPosts(n, e.data.html, t),
                      d.reInitMasonryPosts(i, n),
                      qodef.body.trigger("hendon_trigger_get_new_posts", [
                        i,
                        e.data,
                        t,
                      ]);
                  }),
                  i.hasClass("qodef-pagination-type--standard") &&
                    a("html, body").animate(
                      { scrollTop: i.offset().top - 100 },
                      500
                    ),
                  d.hideLoadMoreButton(i, o))
                : console.log(e.message);
            },
            complete: function () {
              i.removeClass("qodef--loading");
            },
          });
      },
      setNextPageValue: function (e, i, t) {
        void 0 === i || "" === i || t
          ? t && (e.next_page = parseInt(e.next_page, 10) + 1)
          : (e.next_page = i);
      },
      addPosts: function (e, i, t) {
        void 0 !== t && "" !== t ? e.html(i) : e.append(i);
      },
      reInitMasonryPosts: function (e, i) {
        e.hasClass("qodef-layout--masonry") &&
          (i.isotope("reloadItems").isotope({ sortBy: "original-order" }),
          setTimeout(function () {
            i.isotope("layout");
          }, 200));
      },
    };
    qodef.qodefPagination = d;
  })(jQuery);
