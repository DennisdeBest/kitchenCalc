$(document).ready(function () {
    function createInputs(amount) {
        var htmlLeft = "";
        var htmlRight= "";
        var htmlLabels = "";
        for (var i =0 ; i <= amount; i++){
            htmlLeft += "<input type='text' id='"+i+"_left' class='left'/>";
            htmlRight += "<input type='text' id='"+i+"_right' class='right'/>";
            htmlLabels += "<select><option>Eggs</option>" +
                "<option>Flour</option>" +
                "<option>Sugar</option>" +
                "<option>Butter</option>" +
                "<option>Chocolat</option></select>"
        }
        $('#columnLeft').append(htmlLeft);
        $('#columnRight').append(htmlRight);
        //$('#labels').append(htmlLabels);

        //callback;
    }

    $.when(createInputs(10)).then(calcValues());

    function calcValues() {
        $('.right').on("input", function () {
            var id = $(this).attr('id');
            id = id.replace('_right', '');
            var changedId = id;
            console.log(id);
            var leftValue = parseInt($('#'+id+'_left').val());
            var scale = parseInt($(this).val()) / leftValue;
            console.log(scale)

            $('.left').each(function () {
                if(!($(this).attr('id') == changedId+'_left'))
                {
                    var id = $(this).attr('id');
                    id = id.replace('_left', '');
                    var leftValue = parseInt($('#'+id+'_left').val());
                    if($.isNumeric(leftValue)){
                        $('#'+id+'_right').val((Math.round(leftValue*scale*100)/100).toFixed(2));
                    }
                }

            })
        })
    }

})