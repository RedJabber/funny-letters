/**
 * @author Andrew.Arefyev@gmail.com
 * Date: 04.05.2017
 * Time: 1:04
 */
define(['backbone', "jquery-ui"], function (Backbone, $) {
    var LetterWidget = Backbone.BaseView.extend({
        className: "fl__letter-widget new",
        template: "@{{: letter}}",
        afterRender() {
            this.$el.draggable({
                parent: 'body',
                revert: "invalid",
                // cursor: "pointer",
                cursorAt: {top: 25, left: 25},
                start: (e, {helper}) => {
                    // console.log(, h);
                    let $el = $(e.currentTarget);
                    $el.css('cursor', 'none');
                    helper.data('letter', this.model.get('letter'))
                },
                stop: (e) => {
                    let $el = $(e.currentTarget);
                    $el.css('cursor', null);
                }
            })
        }
    });
    return Backbone.BaseView.extend({
        className: "fl__creation-area",
        template: '@<div class="fl__letter-widget-shadow">{{: letter }}</div>',
        construct() {
            this.model = new Backbone.BaseModel({letter: '!'});
        },
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
        generateLetter() {
            let letters = ('цкнгшщзхфвпрлджчсмтб'+'йуеыаоэяию').split('');
            let letter = letters[Math.floor(Math.random()*letters.length)].toUpperCase();
            this.addChild(new LetterWidget({model: this.model}));
            this.model.set({letter});

        }
    });
});