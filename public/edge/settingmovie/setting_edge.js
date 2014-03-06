/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
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
                id: 'subject',
                type: 'image',
                rect: ['170px', '125px','109px','109px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"subject.png",'0px','0px']
            },
            {
                id: 'etc',
                type: 'ellipse',
                rect: ['245px', '54px','58px','61px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0,
                fill: ["rgba(163,94,205,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'etc-text',
                type: 'text',
                rect: ['251px', '74px','49px','20px','auto', 'auto'],
                opacity: 0,
                text: "その他",
                font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif', 15, "rgba(255,255,255,1.00)", "900", "none", ""]
            },
            {
                id: 'english',
                type: 'ellipse',
                rect: ['303px', '149px','58px','61px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0,
                fill: ["rgba(255,111,207,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'english-text',
                type: 'text',
                rect: ['312px', '165px','42px','28px','auto', 'auto'],
                opacity: 0,
                text: "英語",
                font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif', 20, "rgba(255,255,255,1.00)", "900", "none", ""]
            },
            {
                id: 'japanese',
                type: 'ellipse',
                rect: ['245px', '243px','58px','61px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0,
                fill: ["rgba(255,92,87,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'japanese-text',
                type: 'text',
                rect: ['255px', '259px','42px','28px','auto', 'auto'],
                opacity: 0,
                text: "国語",
                font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif', 20, "rgba(255,255,255,1.00)", "900", "none", ""]
            },
            {
                id: 'society',
                type: 'ellipse',
                rect: ['146px', '243px','58px','61px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0,
                fill: ["rgba(249,199,50,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'society-text',
                type: 'text',
                rect: ['156px', '259px','42px','28px','auto', 'auto'],
                opacity: 0,
                text: "社会",
                font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif', 20, "rgba(255,255,255,1.00)", "900", "none", ""]
            },
            {
                id: 'science',
                type: 'ellipse',
                rect: ['88px', '148px','58px','61px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0,
                fill: ["rgba(127,227,94,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'science-text',
                type: 'text',
                rect: ['97px', '164px','42px','28px','auto', 'auto'],
                opacity: 0,
                text: "理科",
                font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif', 20, "rgba(255,255,255,1.00)", "900", "none", ""]
            },
            {
                id: 'math',
                type: 'ellipse',
                rect: ['146px', '54px','58px','61px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0,
                fill: ["rgba(111,201,216,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'math-text',
                type: 'text',
                rect: ['155px', '70px','42px','28px','auto', 'auto'],
                opacity: 0,
                text: "数学",
                font: ['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif', 20, "rgba(255,255,255,1.00)", "900", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_society}": [
                ["style", "top", '243px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '146px'],
                ["color", "background-color", 'rgba(249,199,50,1.00)']
            ],
            "${_society-text}": [
                ["style", "top", '259px'],
                ["style", "opacity", '0.000000'],
                ["style", "width", '42px'],
                ["style", "height", '28px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '900'],
                ["style", "left", '156px'],
                ["style", "font-size", '20px']
            ],
            "${_subject}": [
                ["style", "top", '125px'],
                ["style", "height", '109px'],
                ["style", "left", '170px'],
                ["style", "width", '109px']
            ],
            "${_etc}": [
                ["style", "top", '54px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '245px'],
                ["color", "background-color", 'rgba(163,94,205,1.00)']
            ],
            "${_science-text}": [
                ["style", "top", '164px'],
                ["style", "opacity", '0.000000'],
                ["style", "font-size", '20px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '28px'],
                ["style", "font-weight", '900'],
                ["style", "left", '97px'],
                ["style", "width", '42px']
            ],
            "${_english}": [
                ["style", "top", '149px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '303px'],
                ["color", "background-color", 'rgba(255,111,207,1.00)']
            ],
            "${_math-text}": [
                ["style", "top", '70px'],
                ["style", "opacity", '0.000000'],
                ["style", "font-size", '20px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '28px'],
                ["style", "font-weight", '900'],
                ["style", "left", '155px'],
                ["style", "width", '42px']
            ],
            "${_etc-text}": [
                ["style", "top", '74px'],
                ["style", "opacity", '0.000000'],
                ["style", "font-size", '15px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '20px'],
                ["style", "font-weight", '900'],
                ["style", "left", '251px'],
                ["style", "width", '49px']
            ],
            "${_science}": [
                ["style", "top", '148px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '88px'],
                ["color", "background-color", 'rgba(127,227,94,1.00)']
            ],
            "${_japanese-text}": [
                ["style", "top", '259px'],
                ["style", "opacity", '0.000000'],
                ["style", "font-size", '20px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '28px'],
                ["style", "font-weight", '900'],
                ["style", "left", '255px'],
                ["style", "width", '42px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '200px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '360px'],
                ["style", "width", '450px']
            ],
            "${_japanese}": [
                ["style", "top", '243px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '245px'],
                ["color", "background-color", 'rgba(255,92,87,1.00)']
            ],
            "${_math}": [
                ["style", "top", '54px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '146px'],
                ["color", "background-color", 'rgba(111,201,216,1.00)']
            ],
            "${_english-text}": [
                ["style", "top", '165px'],
                ["style", "opacity", '0.000000'],
                ["style", "width", '42px'],
                ["style", "height", '28px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '900'],
                ["style", "left", '312px'],
                ["style", "font-size", '20px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1750,
            autoPlay: true,
            timeline: [
                { id: "eid19", tween: [ "style", "${_science-text}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 500 },
                { id: "eid11", tween: [ "style", "${_japanese-text}", "opacity", '1', { fromValue: '0.000000'}], position: 500, duration: 500 },
                { id: "eid24", tween: [ "style", "${_math-text}", "opacity", '1', { fromValue: '0.000000'}], position: 1250, duration: 500 },
                { id: "eid20", tween: [ "style", "${_science}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 500 },
                { id: "eid8", tween: [ "style", "${_english}", "opacity", '1', { fromValue: '0.000000'}], position: 250, duration: 500 },
                { id: "eid23", tween: [ "style", "${_math}", "opacity", '1', { fromValue: '0.000000'}], position: 1250, duration: 500 },
                { id: "eid15", tween: [ "style", "${_society-text}", "opacity", '1', { fromValue: '0.000000'}], position: 750, duration: 500 },
                { id: "eid12", tween: [ "style", "${_japanese}", "opacity", '1', { fromValue: '0.000000'}], position: 500, duration: 500 },
                { id: "eid16", tween: [ "style", "${_society}", "opacity", '1', { fromValue: '0.000000'}], position: 750, duration: 500 },
                { id: "eid3", tween: [ "style", "${_etc}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid4", tween: [ "style", "${_etc-text}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid7", tween: [ "style", "${_english-text}", "opacity", '1', { fromValue: '0.000000'}], position: 250, duration: 500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-13021044");
