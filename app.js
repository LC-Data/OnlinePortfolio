$(document).foundation()


$(document).ready(function(){
	$("#pyLogo").click(function(){
        $("#moreInfoBox").text("Python is featured in both the Twitterbot and the top r/programming post projects that are on display!");
    });
    $("#htmlLogo").click(function(){
        $("#moreInfoBox").text("HTML has obviously been heavily implemented and modified for this website to even work! The Foundation framework has been a boon in ensuring complete responsiveness!");
    });
    $("#javaLogo").click(function(){
        $("#moreInfoBox").text("To be implemented");
    });
    $("#rubyLogo").click(function(){
        $("#moreInfoBox").text("Ruby helps compile and interpret Scss aspects of the Foundation framework for easy customization and complete control over the design and content of this website. ");
    });
    $("#phpLogo").click(function(){
        $("#moreInfoBox").text("PHP has been featured in the r/programming top post project and helps this website communicate with our MySQL server in order to retrieve and deliver fresh content daily!");
    });
    $("#cLogo").click(function(){
        $("#moreInfoBox").text("ACTUALLY CHANGE THIS OUT TO BE A JAVASCRIPT LOGO AND INFO...");
    });
    
});
