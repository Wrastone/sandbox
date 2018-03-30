// $("#btnAddLine").click(function () {
//     alert(ViewModel.Lines().length)
//     var line = new Line($("#txtNewNod").val(),("#txtNewHoe").val(),("#txtNewHok").val())
//     ViewModel.Lines.push(line)
//
// })
// document.getElementById("btnAddLine").addEventListener("click", function () {
//     alert(ViewModel.Lines.length)
//     var line = new Line()
//     ViewModel.Lines.push(line)
// })


var Line = function () {
    this.nameOfDiscipline = ko.observable(""),
        this.codOfDirection = ko.observable(""),
        this.numOfGroup = ko.observable("0"),
        this.hoursOfLections = ko.observable("0"),
        this.hoursOfPractice = ko.observable("0"),
        this.hoursOfLabs = ko.observable("0"),
        this.hoursOfKursprojects = ko.observable("0"),
        this.hoursOfKonsult = ko.observable("0"),
        this.hoursOfZachet = ko.observable("0"),
        this.hoursOfExams = ko.observable("0"),
        this.hoursOfKontr = ko.observable("0"),
        this.totalHours = ko.computed(function () {
            return Number(this.hoursOfLections()) + Number(this.hoursOfPractice()) + Number(this.hoursOfLabs()) +
                Number(this.hoursOfKursprojects()) + Number(this.hoursOfKonsult()) + Number(this.hoursOfZachet()) +
                Number(this.hoursOfExams()) + Number(this.hoursOfKontr())
        }, this)
}

function ViewModel() {

    var self = this;
    self.addLine = function () {
        self.Lines.push(new Line());
    };

    self.removeLine = function (subj) {
        self.Lines.remove(subj);
    };

    self.totalOfKontr = ko.pureComputed(function () {
        var total = 0;
        for (var i = 0; i < this.Lines().length; i++) {
            total += Number(this.Lines()[i].hoursOfKontr());
        }
        return total;
    }, this)

    this.Lines = ko.observableArray([new Line()]);
}


var lineViewModel = new ViewModel();



ko.applyBindings(lineViewModel);
