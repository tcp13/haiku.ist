const outage = true;

$("#go").click(function(){

    if(outage){
        $("#results").html("Oops! GPT-3 (the AI engine this website runs on) is currently experiencing technical issues. Please try again later, or monitor <a href='https://status.openai.com' target='_blank' style='color:var(--black);'>status.openai.com</a> for status updates.");
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