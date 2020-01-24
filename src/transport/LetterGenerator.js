/**
 * @author Andrew.Arefyev@gmail.com
 * Date: 04.05.2017
 * Time: 1:04
 */
define(['backbone', "jquery-ui"], function (Backbone, $) {
    return Backbone.BaseView.extend({
        className: "fl__creation-area",
        template: '@<div class="fl__letter-widget-shadow">{{: letter }}</div>',
        blink(success) {
            let dfd = $.Deferred();
            this.$el
                .toggleClass('blink-ok', success)
                .toggleClass('blink-fail', !success);
            setTimeout(() => {
                this.$el
                    .removeClass('blink-ok')
                    .removeClass('blink-fail');
                dfd.resolve();
            }, 450);
            return dfd.promise();
        },
    });
});