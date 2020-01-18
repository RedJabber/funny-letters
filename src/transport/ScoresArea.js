/**
 * @author Andrew.Arefyev@gmail.com
 * Date: 08.05.2017
 * Time: 18:55
 */
define(["backbone"], function (Backbone) {
    const ANIMATION_TIME = 400;
    const STAR_SCORES_STEP = 50;
    const silent = true;
    var StarsCollection = Backbone.BaseCollection.extend({
        initialize(){
            // this.stars = new Backbone.BaseCollection([]);
        },
        incStars(){
            if (this.isEmpty()) {
                this.add({silver: true});
            } else if (this.at(-1).get('silver')) {
                this.at(-1).set('silver', false);
                //todo animate silver to gold
            } else {
                this.add({silver: true});
            }
        },

    });

    const LivesCounter = Backbone.BaseCollection.extend({
        initialize(arr, {lives}){

            for (let i = 0; i < lives; i++) arr.push({});
        },
        decLife(){
            this.pop();
            return this.length;

        },
        addLife(){
            this.add({});
        }
    });

    const ScoresView = Backbone.BaseView.extend({
        className: "fl__score-counter",
        template: "@{{: scores }}"
    });

    const LivesCounterView = Backbone.BaseListView.extend({
        className: "fl__lives-counter",
        itemViewType: Backbone.BaseView.extend({
            className: 'fl__stars-area-star',
            template: `@<img src="{{:~cp}}/images/heart.svg" width="30" height="30"/>`
        }),
    });
    const ScoresDiffView = Backbone.BaseView.extend({
        className: "fl__score-counter-diff",
        template: "",
        modelEvents: {
            'change': 'render',
            'destroy': 'dispose',
            'inc': 'animateInc',
        },
        animateInc(incValue){
            incValue = incValue || 1;
            this.$el.html(incValue);
            this.$el.addClass('inc-animate');

            setTimeout(() => this.$el.removeClass('inc-animate'), ANIMATION_TIME)
        },
    });
    const StarsView = Backbone.BaseListView.extend({
        className: "fl__stars-area",
        itemViewType: Backbone.BaseView.extend({
            className: 'fl__stars-area-star',
            template: `@<img src="{{: ~cp}}/images/{{if silver}}silver-{{/if}}star.svg" width="30" height="30" />`
        })
    });
    return {
        View: Backbone.BaseView.extend({
            className: "fl__score-area",
            construct(){
                this.addChild(new ScoresView({
                    model: this.model.scoresModel
                }));
                this.addChild(new ScoresDiffView({
                    model: this.model.scoresDiffModel
                }));
                this.addChild(new LivesCounterView({
                    collection: this.model.lives
                }));
                this.addChild(new StarsView({
                    collection: this.model.stars
                }));
            }

        }),
        Model: Backbone.BaseModel.extend({
            initialize() {
                this.scoresModel = new Backbone.BaseModel({scores: 0, starsBorder: 0});
                this.scoresDiffModel = new Backbone.BaseModel();

                this.lives = new LivesCounter([], {lives: 10});
                this.stars = new StarsCollection([]);
            },
            incScore(count){
                count = count || 1;
                let scores = this.scoresModel.get('scores');
                let starsBorder = this.scoresModel.get('starsBorder');
                scores += count;

                if (scores - starsBorder >= STAR_SCORES_STEP) {
                    this.stars.incStars();
                    this.lives.addLife();
                    starsBorder += STAR_SCORES_STEP;
                    this.scoresModel.set('starsBorder', starsBorder, {silent});
                }
                this.scoresModel.set('scores', scores);
                this.scoresDiffModel.trigger('inc', count)
            },
            decLife(){
                return this.lives.decLife()
            },
        })
    };
});