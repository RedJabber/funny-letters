/**
 * @author Andrew.Arefyev@gmail.com
 * Date: 04.05.2017
 * Time: 1:06
 */
define(["jquery", "jquery-ui", "./LetterGenerator", "./AcceptArea", "./ScoresArea", "tmpl!./playground-template"],
    ($, initDrugnDropSupport, LetterGenerator, AcceptArea, ScoresArea, ) => {
        let letterGenerator = new LetterGenerator({el: '#letterCreationArea'});
        letterGenerator.render();
        letterGenerator.generateLetter();

        let AcceptAreaView = AcceptArea.View.extend({
            afterLetterAccept: ({success}) => {
                letterGenerator.clear();
                letterGenerator.blink(success)
                    .then(() => {
                        letterGenerator.generateLetter();
                    });
            }
        });
        const counter = new ScoresArea.Model();

        const ConsonantLetterModel = AcceptArea.Model.extend({
            isMine: letter => !!~'йцкнгшщзхфвпрлджчсмтб'.indexOf(letter.toLowerCase()),
            counter
        });

        new ScoresArea.View({
            el: '#scoresArea',
            model: counter
        }).render();

        new AcceptAreaView({
            el: '#consonantLetterLanding',
            model: new ConsonantLetterModel(),
        }).render();

        const VowelModel = AcceptArea.Model.extend({
            isMine: letter => !!~'уеёыаоэяию'.indexOf(letter.toLowerCase()),
            counter
        });
        new AcceptAreaView({
            el: '#vowelLanding',
            model: new VowelModel(),
        }).render();


    });