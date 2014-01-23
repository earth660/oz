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
          ["english","other","japanese","society","science","mathematica"] 
    ];

    for (var i = 0; i < subjects.length; i++) {
        setDoughnutToCanvs(subjects[i], i);
    }
    
})();
