const outage = true;

$("#go").click(function(){

    if(outage){
        $("#results").text("Oops! GPT-3 (the AI engine this website runs on) is experiencing technical issues. Please come back later!");
        return;
    }

    $("#results").text("");
    $("#thinking").show();
    $.get("https://haikuist-eys2j63jla-uk.a.run.app/?haiku=" + $("#query").val(), function(data){
        $("#thinking").hide();
        $("#results").html(data.haikus.replace(/\n/g, "<br>"));
        $("#share").show();
        $("#share a[href*='twitter']").attr("href", "https://twitter.com/intent/tweet?text=" + $("#query").val() + "%20(written%20by%20AI%20via%20haiku.ist)%0A%0A%0A" + data.haikus.replace(/\n/g, "%0A"));
    })
});

$("#prompt input").on('keypress', function (e) {
    if(e.which === 13){
        $("#go").click();
    }
});