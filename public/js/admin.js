jQuery(document).ready(function(a) {
    0 !== a("#woocommerce_mailerlite_group").length && a('<span id="woo-ml-refresh-groups" class="woo-ml-icon-refresh" data-woo-ml-refresh-groups="true"></span>').insertAfter("#woocommerce_mailerlite_group");
    var b = !1;
    a(document).on("click", "[data-woo-ml-refresh-groups]", function(c) {
        if (c.preventDefault(), !b) {
            var d = a(this);
            d.removeClass("error"), d.addClass("running"), b = !0, jQuery.ajax({
                url: woo_ml_post.ajax_url,
                type: "post",
                data: {
                    action: "post_woo_ml_refresh_groups"
                },
                success: function(a) {
                    a.indexOf("success") >= 0 && d.removeClass("running"), a ? location.reload() : d.addClass("error"), 
                    b = !1;
                }
            });
        }
    });
});