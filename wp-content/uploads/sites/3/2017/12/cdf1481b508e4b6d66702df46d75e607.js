/**handles:yith-wrvp-frontend**/
!function(t,i,s){"use strict";var e=t(s).find(".yith-similar-products");t.fn.yith_wrvp_slider=function(){var i=t(this);i.each(function(){var i=1==t(this).data("slider"),s=1==t(this).data("autoplay"),e=t(this).data("autoplayspeed"),a=t(this).data("columns");i&&t(this).find(".products").slick({infinite:!0,autoplay:s,speed:"300",autoplaySpeed:e,slidesToShow:a,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})})},"undefined"!=typeof ywrvp&&t(".yith-wrvp-filters-cat").on("click","a.cat-link",function(i){i.preventDefault();var e=t(this),a=t(this).closest(".filter-cat"),o=t(".yith-similar-products"),n=t(".woocommerce-pagination"),l=a.hasClass("active")?"0":e.data("cat_id"),r={ywrvp_cat_id:l,context:"frontend"};t.ajax({url:ywrvp.url,type:"GET",data:r,dataType:"html",success:function(i){o.html(t(i).find(".yith-similar-products")),n.html(t(i).find(".woocommerce-pagination")),a.toggleClass("active").siblings().removeClass("active"),t(s).trigger("yith-wrvp-product-changed")}})}),t(s).on("ready",function(){e.yith_wrvp_slider()})}(jQuery,window,document);