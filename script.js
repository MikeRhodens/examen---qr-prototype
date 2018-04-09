$(document).ready(function () {
    var video =
        document.getElementById('camera');

    var testdata = '{ "child-data" :{  "name":"Boris de Fries" , "age":"11" , "talents":{"talent1":"natuur talent","talent2":"beeld talent","talent3":"mens talent"}}}';
    var name= document.getElementsByClassName('name')[0];
    var age =document.getElementsByClassName('age')[0];
    var talent1 = document.getElementsByClassName('talent')[0];
    var talent2 = document.getElementsByClassName('talent')[1];
    var talent3 = document.getElementsByClassName('talent')[2];

    QCodeDecoder()
        .decodeFromCamera(video, function (er, res) {
            console.log(res);
            var obj = JSON.parse(testdata);
            name.innerHTML = "naam : " + obj["child-data"]['name'];
            age.innerHTML = "leeftijd : " + obj["child-data"]['age'];
            talent1.innerHTML = obj["child-data"]['talents']['talent1'];
            talent2.innerHTML = obj["child-data"]['talents']['talent2'];
            talent3.innerHTML = obj["child-data"]['talents']['talent3'];
        });


});
