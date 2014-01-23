(function() {
    var doughnutColorSet = function(colors) {
        var doughnutData = [];
        for (var i = 0; i < colors.length; i++) {
            doughnutData.push({
                value : 10,
                color : colors[i]
            });
        };

        return doughnutData;
    };

    var setDoughnutToCanvs = function(subject, num) {
        var color = {
            english : "#FF6FCF",
            other : "#a35ecd",
            japanese : "#ff5c57",
            society : "#f9c732",
            science : "#7fe35e",
            mathematica : "#6FC9D8"
        };
        
        for (var i = 0; i < subject.length; i++) {
            subject[i] = color[subject[i]];
        }

        var canvases = document.getElementsByTagName('canvas');
        new Chart(canvases[num].getContext("2d")).Doughnut(doughnutColorSet(subject));

    };

    var subjects = [
        ["mathematica","english"],
        ["society", "mathematica"],
        ["english", "japanese"],
        ["mathematica"],
        ["other"],
        ["science", "society"],
        ["english"],
        ["english", "society"],
        ["japanese","society"],
        ["mathematica", "english"],
        ["science"],
        ["society", "science"]
/*         ["english","other","japanese","society","science","mathematica"] */
    ];
  
/*
    
    var teachers = [
    ["1.jpg","yamada","kyoto univ.","math","Kyoto st","I have car","message"],
    ["2.jpg","yamada","kyoto","math","Kyoto st","I have car","message"],
    ["3.jpg","yamada","kyoto","math","Kyoto st","I have car","message"],
    ["4.jpg","yamada","kyoto","math","Kyoto st","I have car","message"],
    ["5.jpg","yamada","kyoto","math","Kyoto st","I have car","message"],
    ["6.jpg","yamada","kyoto","math","Kyoto st","I have car","message"],
    ["7.jpg","yamada","kyoto","math","Kyoto st","I have car","message"],
    ["8.jpg","yamada","kyoto","math","Kyoto st","I have car","message"]
    ];		
*/


    for (var i = 0; i < subjects.length; i++) {
        setDoughnutToCanvs(subjects[i], i);
    }
    
})();
