define(["backbone", "jquery", "jquery-ui"], function (Backbone, $, initDrugnDropSupport) {
    const silent = true;


    return {
        View: Backbone.BaseView.extend({
            events: {
                'drop': 'acceptLetter'
            },
            template: `@<div class="ok-letters-set"></div><div class="fl__counters_group consonant-letters"></div>`,
            construct({}){
                this.$el.droppable({
                    accept: '.fl__letter-widget.new',
                    classes: {
                        "ui-droppable-hover": "letter-widget-hover"
                    },
                });

                this.okLetters = new Backbone.BaseCollection([], {comparator: 'letter', model: LetterModel});
                this.addChildAtElement('.ok-letters-set',new LettersList({
                    collection: this.okLetters
                }),true);
                // this.addChildAtElement('.fail-letters-set',new LettersList(),true);
            },
            acceptLetter(e, {helper}) {
                let letter = helper.data('letter');
                let isSuccess = this.model.isMine(letter);
                if (isSuccess) {
                    let letterItem = this.okLetters.get(letter);
                    if (!letterItem) {
                        this.model.counter.incScore(5);
                        this.okLetters.add(new LetterModel({letter}));
                    } else {
                        this.model.counter.incScore();
                    }
                } else {
                    let lives = this.model.counter.decLife();
                    if (!lives) {
                        //todo make game over
                    }
                }
                //todo cleanup widget or store it in some bar
                this.afterLetterAccept({success: isSuccess});
            },
            afterLetterAccept: null
        }),
        Model: Backbone.BaseModel.extend({
            isMine: null,
            incSuccess(){
                let counter = this.get('success') || 0;
                //todo переделать на шаблон
                this.set('success', ++counter, {silent});
                return counter;
            },
            incFail(){
                let counter = this.get('fails') || 0;
                //todo переделать на шаблон
                this.set('fails', ++counter, {silent});
                return counter;
            },
            counter: null
        })
    }
});