/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'preloadAudio': false
};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'goalper-text',
                type: 'text',
                rect: ['165px', '114px','306px','140px','auto', 'auto'],
                text: "目標達成度合いに関する評価です。<br>",
                align: "left",
                font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'goal-text',
                type: 'text',
                rect: ['165px', '114px','240px','140px','auto', 'auto'],
                text: "保護者様からの評価です。",
                align: "left",
                font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'study-text',
                type: 'text',
                rect: ['165px', '130px','240px','140px','auto', 'auto'],
                text: "お子様からの評価です。<br>評価基準<br>　・指導がわかりやすいか<br>　・身についたか",
                align: "left",
                font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'rate1',
                display: 'block',
                type: 'ellipse',
                rect: ['38px', '164px','31px','31px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.7,
                fill: ["rgba(127,227,94,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'rate2',
                display: 'block',
                type: 'ellipse',
                rect: ['38px', '164px','31px','31px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.7,
                fill: ["rgba(249,199,50,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'rate3',
                display: 'block',
                type: 'ellipse',
                rect: ['38px', '164px','31px','31px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.7,
                fill: ["rgba(255,92,87,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'pencil',
                display: 'block',
                type: 'image',
                rect: ['69px', '157px','50px','50px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"pencil2.png",'0px','0px']
            },
            {
                id: 'goal',
                display: 'block',
                type: 'image',
                rect: ['202px', '147px','50px','70px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"goal.png",'0px','0px']
            },
            {
                id: 'user',
                display: 'block',
                type: 'image',
                rect: ['332px', '147px','61px','70px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"user.png",'0px','0px']
            },
            {
                id: 'rate1-text',
                display: 'block',
                type: 'text',
                rect: ['56px', '245px','76px','36px','auto', 'auto'],
                cursor: ['pointer'],
                text: "勉強面",
                align: "left",
                font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif', 24, "rgba(127,227,94,1.00)", "400", "none", "normal"]
            },
            {
                id: 'rate2-text',
                display: 'block',
                type: 'text',
                rect: ['164px', '245px','125px','36px','auto', 'auto'],
                cursor: ['pointer'],
                text: "目標達成率",
                align: "left",
                font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif', 24, "rgba(249,199,50,1.00)", "400", "none", "normal"]
            },
            {
                id: 'rate3-text',
                display: 'block',
                type: 'text',
                rect: ['336px', '245px','52px','36px','auto', 'auto'],
                cursor: ['pointer'],
                text: "目標",
                align: "left",
                font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif', 24, "rgba(255,92,87,1.00)", "400", "none", "normal"]
            },
            {
                id: 'clickevent',
                type: 'text',
                rect: ['70px', '297px','315px','36px','auto', 'auto'],
                text: "見たい項目を選んでください",
                align: "center",
                font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif', 20, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['100px', '44px','255px','70px','auto', 'auto'],
                text: "先生の評価が３つの指標で<br>３ヶ月毎に評価されます。",
                align: "center",
                font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif', 20, "rgba(0,0,0,1)", "400", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_goal-text}": [
                ["style", "font-size", '20px'],
                ["style", "opacity", '0.000000']
            ],
            "${_rate1}": [
                ["color", "background-color", 'rgba(127,227,94,1.00)'],
                ["style", "top", '164px'],
                ["style", "left", '38px'],
                ["style", "display", 'block'],
                ["style", "height", '31px'],
                ["style", "opacity", '0.699999988079071'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '31px']
            ],
            "${_rate3-text}": [
                ["color", "color", 'rgba(255,92,87,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '52px'],
                ["style", "top", '245px'],
                ["style", "height", '36px'],
                ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
                ["style", "display", 'block'],
                ["style", "left", '336px']
            ],
            "${_Text2}": [
                ["style", "height", '70px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '100px'],
                ["style", "top", '58px']
            ],
            "${_goal}": [
                ["style", "top", '147px'],
                ["style", "display", 'block'],
                ["style", "left", '202px'],
                ["style", "height", '70px'],
                ["style", "opacity", '0.000000'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '50px']
            ],
            "${_clickevent}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '70px'],
                ["style", "width", '315px'],
                ["style", "top", '297px'],
                ["style", "text-align", 'center'],
                ["style", "height", '36px'],
                ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif'],
                ["style", "font-size", '20px']
            ],
            "${_study-textCopy}": [
                ["style", "opacity", '0.000000']
            ],
            "${_rate2-text}": [
                ["color", "color", 'rgba(249,199,50,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '125px'],
                ["style", "top", '245px'],
                ["style", "height", '36px'],
                ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif'],
                ["style", "display", 'block'],
                ["style", "left", '164px']
            ],
            "${_user}": [
                ["style", "top", '147px'],
                ["style", "display", 'block'],
                ["style", "left", '332px'],
                ["style", "height", '70px'],
                ["style", "opacity", '0.000000'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '61px']
            ],
            "${_rate2}": [
                ["color", "background-color", 'rgba(249,199,50,1.00)'],
                ["style", "top", '164px'],
                ["style", "left", '38px'],
                ["style", "display", 'block'],
                ["style", "height", '31px'],
                ["style", "opacity", '0.699999988079071'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '31px']
            ],
            "${_study-text}": [
                ["style", "top", '130px'],
                ["style", "opacity", '0.000000'],
                ["style", "width", 'auto'],
                ["style", "font-size", '20px']
            ],
            "${_Text}": [
                ["style", "top", '47px'],
                ["style", "font-size", '24px'],
                ["style", "height", '278px'],
                ["style", "opacity", '1'],
                ["style", "left", '176px'],
                ["style", "width", '241px']
            ],
            "${_rate1-text}": [
                ["color", "color", 'rgba(127,227,94,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '76px'],
                ["style", "top", '245px'],
                ["style", "height", '36px'],
                ["style", "font-family", '\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif'],
                ["style", "display", 'block'],
                ["style", "left", '56px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '200px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '360px'],
                ["style", "width", '450px']
            ],
            "${_pencil}": [
                ["style", "top", '157px'],
                ["style", "display", 'block'],
                ["style", "left", '69px'],
                ["style", "height", '50px'],
                ["style", "opacity", '0.000000'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '50px']
            ],
            "${_goalper-text}": [
                ["style", "opacity", '0.000000'],
                ["style", "width", '306px'],
                ["style", "font-size", '16px']
            ],
            "${_rate3}": [
                ["color", "background-color", 'rgba(255,92,87,1.00)'],
                ["style", "top", '164px'],
                ["style", "left", '38px'],
                ["style", "display", 'block'],
                ["style", "height", '31px'],
                ["style", "opacity", '0.699999988079071'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '31px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 22000,
            autoPlay: true,
            labels: {
                "study": 5000,
                "goalper": 11000,
                "goal": 17000
            },
            timeline: [
                { id: "eid244", tween: [ "style", "${_user}", "left", '51px', { fromValue: '332px'}], position: 17500, duration: 500 },
                { id: "eid256", tween: [ "style", "${_user}", "left", '332px', { fromValue: '51px'}], position: 21000, duration: 1000 },
                { id: "eid82", tween: [ "style", "${_rate2}", "opacity", '0', { fromValue: '0.699999988079071'}], position: 5000, duration: 1000 },
                { id: "eid125", tween: [ "style", "${_rate2}", "opacity", '0.6', { fromValue: '0'}], position: 9000, duration: 1000 },
                { id: "eid234", tween: [ "style", "${_rate2}", "opacity", '0', { fromValue: '0.6000000238418579'}], position: 17000, duration: 1000 },
                { id: "eid273", tween: [ "style", "${_rate2}", "opacity", '0.6', { fromValue: '0'}], position: 21000, duration: 1000 },
                { id: "eid41", tween: [ "style", "${_goal}", "opacity", '1', { fromValue: '0.000000'}], position: 1250, duration: 500 },
                { id: "eid79", tween: [ "style", "${_goal}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 1000 },
                { id: "eid128", tween: [ "style", "${_goal}", "opacity", '1', { fromValue: '0.000000'}], position: 9000, duration: 1000 },
                { id: "eid206", tween: [ "style", "${_goal}", "opacity", '1', { fromValue: '1'}], position: 15000, duration: 0 },
                { id: "eid231", tween: [ "style", "${_goal}", "opacity", '0', { fromValue: '1'}], position: 17000, duration: 1000 },
                { id: "eid266", tween: [ "style", "${_goal}", "opacity", '1', { fromValue: '0'}], position: 21000, duration: 1000 },
                { id: "eid148", tween: [ "style", "${_rate1}", "opacity", '0', { fromValue: '0.699999988079071'}], position: 11000, duration: 1000 },
                { id: "eid215", tween: [ "style", "${_rate1}", "opacity", '0.6', { fromValue: '0'}], position: 15000, duration: 1000 },
                { id: "eid232", tween: [ "style", "${_rate1}", "opacity", '0', { fromValue: '0.6000000238418579'}], position: 17000, duration: 1000 },
                { id: "eid272", tween: [ "style", "${_rate1}", "opacity", '0.6', { fromValue: '0'}], position: 21000, duration: 1000 },
                { id: "eid44", tween: [ "style", "${_user}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 500 },
                { id: "eid80", tween: [ "style", "${_user}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 1000 },
                { id: "eid127", tween: [ "style", "${_user}", "opacity", '1', { fromValue: '0.000000'}], position: 9000, duration: 1000 },
                { id: "eid152", tween: [ "style", "${_user}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 1000 },
                { id: "eid211", tween: [ "style", "${_user}", "opacity", '1', { fromValue: '0.000000'}], position: 15000, duration: 1000 },
                { id: "eid33", tween: [ "style", "${_rate1}", "width", '100px', { fromValue: '31px'}], position: 750, duration: 250 },
                { id: "eid276", tween: [ "style", "${_goal}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid282", tween: [ "style", "${_goal}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid302", tween: [ "style", "${_goal}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid308", tween: [ "style", "${_goal}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid32", tween: [ "style", "${_rate3}", "width", '100px', { fromValue: '31px'}], position: 750, duration: 250 },
                { id: "eid8", tween: [ "style", "${_rate2}", "left", '139px', { fromValue: '38px'}], position: 0, duration: 500 },
                { id: "eid17", tween: [ "style", "${_rate2}", "left", '177px', { fromValue: '139px'}], position: 500, duration: 500 },
                { id: "eid163", tween: [ "style", "${_rate2}", "left", '31px', { fromValue: '177px'}], position: 11500, duration: 500 },
                { id: "eid199", tween: [ "style", "${_rate2}", "left", '177px', { fromValue: '31px'}], position: 15000, duration: 1000 },
                { id: "eid108", tween: [ "style", "${_pencil}", "top", '139px', { fromValue: '157px'}], position: 5500, duration: 500 },
                { id: "eid138", tween: [ "style", "${_pencil}", "top", '157px', { fromValue: '139px'}], position: 9000, duration: 1000 },
                { id: "eid243", tween: [ "style", "${_rate3-text}", "left", '55px', { fromValue: '336px'}], position: 17500, duration: 500 },
                { id: "eid255", tween: [ "style", "${_rate3-text}", "left", '336px', { fromValue: '55px'}], position: 21000, duration: 1000 },
                { id: "eid290", tween: [ "style", "${_pencil}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid296", tween: [ "style", "${_pencil}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid303", tween: [ "style", "${_pencil}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid309", tween: [ "style", "${_pencil}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid9", tween: [ "style", "${_rate3}", "left", '274px', { fromValue: '38px'}], position: 0, duration: 500 },
                { id: "eid18", tween: [ "style", "${_rate3}", "left", '312px', { fromValue: '274px'}], position: 500, duration: 500 },
                { id: "eid242", tween: [ "style", "${_rate3}", "left", '31px', { fromValue: '312px'}], position: 17500, duration: 500 },
                { id: "eid254", tween: [ "style", "${_rate3}", "left", '312px', { fromValue: '31px'}], position: 21000, duration: 1000 },
                { id: "eid218", tween: [ "style", "${_goalper-text}", "opacity", '1', { fromValue: '0.000000'}], position: 12000, duration: 500 },
                { id: "eid219", tween: [ "style", "${_goalper-text}", "opacity", '0', { fromValue: '1'}], position: 14500, duration: 500 },
                { id: "eid279", tween: [ "style", "${_rate2}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid285", tween: [ "style", "${_rate2}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid304", tween: [ "style", "${_rate2}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid310", tween: [ "style", "${_rate2}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid107", tween: [ "style", "${_rate1-text}", "top", '227px', { fromValue: '245px'}], position: 5500, duration: 500 },
                { id: "eid136", tween: [ "style", "${_rate1-text}", "top", '245px', { fromValue: '227px'}], position: 9000, duration: 1000 },
                { id: "eid114", tween: [ "style", "${_study-text}", "opacity", '1', { fromValue: '0.000000'}], position: 6000, duration: 500 },
                { id: "eid116", tween: [ "style", "${_study-text}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 500 },
                { id: "eid162", tween: [ "style", "${_rate2-text}", "left", '18px', { fromValue: '164px'}], position: 11500, duration: 500 },
                { id: "eid198", tween: [ "style", "${_rate2-text}", "left", '164px', { fromValue: '18px'}], position: 15000, duration: 1000 },
                { id: "eid4", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0.000000'}], position: 2250, duration: 750 },
                { id: "eid25", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 1000 },
                { id: "eid27", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 1000 },
                { id: "eid29", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 1000 },
                { id: "eid37", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 15000, duration: 1000 },
                { id: "eid39", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 17000, duration: 1000 },
                { id: "eid43", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 21000, duration: 1000 },
                { id: "eid50", tween: [ "style", "${_rate2-text}", "opacity", '1', { fromValue: '0.000000'}], position: 1250, duration: 500 },
                { id: "eid83", tween: [ "style", "${_rate2-text}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 1000 },
                { id: "eid126", tween: [ "style", "${_rate2-text}", "opacity", '1', { fromValue: '0.000000'}], position: 9000, duration: 1000 },
                { id: "eid233", tween: [ "style", "${_rate2-text}", "opacity", '0', { fromValue: '1'}], position: 17000, duration: 1000 },
                { id: "eid267", tween: [ "style", "${_rate2-text}", "opacity", '1', { fromValue: '0'}], position: 21000, duration: 1000 },
                { id: "eid291", tween: [ "style", "${_rate1-text}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid297", tween: [ "style", "${_rate1-text}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid301", tween: [ "style", "${_rate1-text}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid307", tween: [ "style", "${_rate1-text}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid288", tween: [ "style", "${_rate1}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid294", tween: [ "style", "${_rate1}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid305", tween: [ "style", "${_rate1}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid311", tween: [ "style", "${_rate1}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid12", tween: [ "style", "${_rate1}", "top", '104px', { fromValue: '164px'}], position: 0, duration: 250 },
                { id: "eid15", tween: [ "style", "${_rate1}", "top", '164px', { fromValue: '104px'}], position: 250, duration: 250 },
                { id: "eid21", tween: [ "style", "${_rate1}", "top", '124px', { fromValue: '164px'}], position: 500, duration: 250 },
                { id: "eid24", tween: [ "style", "${_rate1}", "top", '132px', { fromValue: '124px'}], position: 750, duration: 250 },
                { id: "eid109", tween: [ "style", "${_rate1}", "top", '114px', { fromValue: '132px'}], position: 5500, duration: 500 },
                { id: "eid140", tween: [ "style", "${_rate1}", "top", '132px', { fromValue: '114px'}], position: 9000, duration: 1000 },
                { id: "eid281", tween: [ "style", "${_rate3-text}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid287", tween: [ "style", "${_rate3-text}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid293", tween: [ "style", "${_rate3-text}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid299", tween: [ "style", "${_rate3-text}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid247", tween: [ "style", "${_user}", "top", '129px', { fromValue: '147px'}], position: 17500, duration: 500 },
                { id: "eid259", tween: [ "style", "${_user}", "top", '147px', { fromValue: '129px'}], position: 21000, duration: 1000 },
                { id: "eid35", tween: [ "style", "${_rate3}", "height", '100px', { fromValue: '31px'}], position: 750, duration: 250 },
                { id: "eid278", tween: [ "style", "${_rate3}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid284", tween: [ "style", "${_rate3}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid289", tween: [ "style", "${_rate3}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid295", tween: [ "style", "${_rate3}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid10", tween: [ "style", "${_rate2}", "top", '104px', { fromValue: '164px'}], position: 0, duration: 250 },
                { id: "eid13", tween: [ "style", "${_rate2}", "top", '164px', { fromValue: '104px'}], position: 250, duration: 250 },
                { id: "eid19", tween: [ "style", "${_rate2}", "top", '124px', { fromValue: '164px'}], position: 500, duration: 250 },
                { id: "eid22", tween: [ "style", "${_rate2}", "top", '132px', { fromValue: '124px'}], position: 750, duration: 250 },
                { id: "eid166", tween: [ "style", "${_rate2}", "top", '114px', { fromValue: '132px'}], position: 11500, duration: 500 },
                { id: "eid202", tween: [ "style", "${_rate2}", "top", '132px', { fromValue: '114px'}], position: 15000, duration: 1000 },
                { id: "eid111", tween: [ "style", "${_pencil}", "left", '58px', { fromValue: '69px'}], position: 5500, duration: 500 },
                { id: "eid137", tween: [ "style", "${_pencil}", "left", '64px', { fromValue: '58px'}], position: 9000, duration: 1000 },
                { id: "eid5", tween: [ "style", "${_Text2}", "top", '58px', { fromValue: '58px'}], position: 3500, duration: 0 },
                { id: "eid78", tween: [ "style", "${_rate3}", "opacity", '0', { fromValue: '0.699999988079071'}], position: 5000, duration: 1000 },
                { id: "eid124", tween: [ "style", "${_rate3}", "opacity", '0.6', { fromValue: '0'}], position: 9000, duration: 1000 },
                { id: "eid154", tween: [ "style", "${_rate3}", "opacity", '0', { fromValue: '0.6000000238418579'}], position: 11000, duration: 1000 },
                { id: "eid214", tween: [ "style", "${_rate3}", "opacity", '0.6', { fromValue: '0'}], position: 15000, duration: 1000 },
                { id: "eid274", tween: [ "style", "${_goal-text}", "opacity", '1', { fromValue: '0.000000'}], position: 18000, duration: 500 },
                { id: "eid275", tween: [ "style", "${_goal-text}", "opacity", '0', { fromValue: '1'}], position: 20500, duration: 500 },
                { id: "eid34", tween: [ "style", "${_rate2}", "height", '100px', { fromValue: '31px'}], position: 750, duration: 250 },
                { id: "eid11", tween: [ "style", "${_rate3}", "top", '104px', { fromValue: '164px'}], position: 0, duration: 250 },
                { id: "eid14", tween: [ "style", "${_rate3}", "top", '164px', { fromValue: '104px'}], position: 250, duration: 250 },
                { id: "eid20", tween: [ "style", "${_rate3}", "top", '124px', { fromValue: '164px'}], position: 500, duration: 250 },
                { id: "eid23", tween: [ "style", "${_rate3}", "top", '132px', { fromValue: '124px'}], position: 750, duration: 250 },
                { id: "eid245", tween: [ "style", "${_rate3}", "top", '114px', { fromValue: '132px'}], position: 17500, duration: 500 },
                { id: "eid257", tween: [ "style", "${_rate3}", "top", '132px', { fromValue: '114px'}], position: 21000, duration: 1000 },
                { id: "eid110", tween: [ "style", "${_rate1-text}", "left", '45px', { fromValue: '56px'}], position: 5500, duration: 500 },
                { id: "eid135", tween: [ "style", "${_rate1-text}", "left", '51px', { fromValue: '45px'}], position: 9000, duration: 1000 },
                { id: "eid71", tween: [ "style", "${_clickevent}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 500 },
                { id: "eid85", tween: [ "style", "${_clickevent}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 1000 },
                { id: "eid142", tween: [ "style", "${_clickevent}", "opacity", '1', { fromValue: '0.000000'}], position: 9000, duration: 1000 },
                { id: "eid168", tween: [ "style", "${_clickevent}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 1000 },
                { id: "eid221", tween: [ "style", "${_clickevent}", "opacity", '1', { fromValue: '0.000000'}], position: 15000, duration: 1000 },
                { id: "eid229", tween: [ "style", "${_clickevent}", "opacity", '0', { fromValue: '1'}], position: 17000, duration: 1000 },
                { id: "eid268", tween: [ "style", "${_clickevent}", "opacity", '1', { fromValue: '0.000000'}], position: 21000, duration: 1000 },
                { id: "eid40", tween: [ "style", "${_pencil}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 500 },
                { id: "eid147", tween: [ "style", "${_pencil}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 1000 },
                { id: "eid209", tween: [ "style", "${_pencil}", "opacity", '1', { fromValue: '0'}], position: 15000, duration: 1000 },
                { id: "eid235", tween: [ "style", "${_pencil}", "opacity", '0', { fromValue: '1'}], position: 17000, duration: 1000 },
                { id: "eid269", tween: [ "style", "${_pencil}", "opacity", '1', { fromValue: '0'}], position: 21000, duration: 1000 },
                { id: "eid7", tween: [ "style", "${_rate1}", "left", '40px', { fromValue: '38px'}], position: 0, duration: 500 },
                { id: "eid16", tween: [ "style", "${_rate1}", "left", '42px', { fromValue: '40px'}], position: 500, duration: 500 },
                { id: "eid112", tween: [ "style", "${_rate1}", "left", '31px', { fromValue: '42px'}], position: 5500, duration: 500 },
                { id: "eid139", tween: [ "style", "${_rate1}", "left", '37px', { fromValue: '31px'}], position: 9000, duration: 1000 },
                { id: "eid48", tween: [ "style", "${_rate1-text}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 500 },
                { id: "eid146", tween: [ "style", "${_rate1-text}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 1000 },
                { id: "eid208", tween: [ "style", "${_rate1-text}", "opacity", '1', { fromValue: '0'}], position: 15000, duration: 1000 },
                { id: "eid230", tween: [ "style", "${_rate1-text}", "opacity", '0', { fromValue: '1'}], position: 17000, duration: 1000 },
                { id: "eid265", tween: [ "style", "${_rate1-text}", "opacity", '1', { fromValue: '0'}], position: 21000, duration: 1000 },
                { id: "eid36", tween: [ "style", "${_rate1}", "height", '100px', { fromValue: '31px'}], position: 750, duration: 250 },
                { id: "eid165", tween: [ "style", "${_rate2-text}", "top", '227px', { fromValue: '245px'}], position: 11500, duration: 500 },
                { id: "eid201", tween: [ "style", "${_rate2-text}", "top", '245px', { fromValue: '227px'}], position: 15000, duration: 1000 },
                { id: "eid280", tween: [ "style", "${_rate2-text}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid286", tween: [ "style", "${_rate2-text}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid300", tween: [ "style", "${_rate2-text}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid306", tween: [ "style", "${_rate2-text}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid49", tween: [ "style", "${_rate3-text}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 500 },
                { id: "eid81", tween: [ "style", "${_rate3-text}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 1000 },
                { id: "eid123", tween: [ "style", "${_rate3-text}", "opacity", '1', { fromValue: '0.000000'}], position: 9000, duration: 1000 },
                { id: "eid153", tween: [ "style", "${_rate3-text}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 1000 },
                { id: "eid210", tween: [ "style", "${_rate3-text}", "opacity", '1', { fromValue: '0.000000'}], position: 15000, duration: 1000 },
                { id: "eid277", tween: [ "style", "${_user}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid283", tween: [ "style", "${_user}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid292", tween: [ "style", "${_user}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid298", tween: [ "style", "${_user}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid164", tween: [ "style", "${_goal}", "top", '129px', { fromValue: '147px'}], position: 11500, duration: 500 },
                { id: "eid200", tween: [ "style", "${_goal}", "top", '147px', { fromValue: '129px'}], position: 15000, duration: 1000 },
                { id: "eid161", tween: [ "style", "${_goal}", "left", '56px', { fromValue: '202px'}], position: 11500, duration: 500 },
                { id: "eid197", tween: [ "style", "${_goal}", "left", '202px', { fromValue: '56px'}], position: 15000, duration: 1000 },
                { id: "eid246", tween: [ "style", "${_rate3-text}", "top", '227px', { fromValue: '245px'}], position: 17500, duration: 500 },
                { id: "eid258", tween: [ "style", "${_rate3-text}", "top", '245px', { fromValue: '227px'}], position: 21000, duration: 1000 },
                { id: "eid2", tween: [ "style", "${_study-text}", "font-size", '20px', { fromValue: '20px'}], position: 6500, duration: 0 },
                { id: "eid31", tween: [ "style", "${_rate2}", "width", '100px', { fromValue: '31px'}], position: 750, duration: 250 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-2656702");
