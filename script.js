document.addEventListener('DOMContentLoaded', function(e) {

  var onProjectClick = function(e) {
    this.innerHTML = 'This is a project!';
  };

  var projects = document.getElementsByClassName('project');
  for (var i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', onProjectClick);
  }

});

jQuery.githubUser = function(username, callback) {
   jQuery.getJSON('https://api.github.com/users/'+username+'/repos?callback=?',callback)
}

jQuery.fn.loadRepositories = function(username) {
    this.html("<span>Querying GitHub for " + username +"'s repositories...</span>");

    var target = this;
    $.githubUser(username, function(data) {
        var repos = data.data; // JSON Parsing
        sortByName(repos);

        var list = $('<dl/>');
        target.empty().append(list);
        $(repos).each(function() {
            if (this.name != (username.toLowerCase()+'.github.io') && this.name != "hello-world" && this.name != "learning-area") {
                list.append('<dt><a href="'+ (this.homepage?this.homepage:this.html_url) +'">' + this.name + '</a> <em>'+(this.language?('('+this.language+')'):'')+'</em></dt>');
                list.append('<dd>' + this.description +'</dd>');
            }
        });
      });

    function sortByName(repos) {
        repos.sort(function(a,b) {
        return a.name - b.name;
       });
    }
};

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("resumeOverlay").style.width = "100%";
    console.log("function called");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("resumeOverlay").style.width = "0%";
}

$('.circle').fadeOut(000).delay(1000).fadeIn(1500);


$(".circle").hover(function(){
if ( !$(this).data("bouncing") ){
      $(this).effect("bounce", { direction: 'up', distance: 10, times: 1 })
             .data("bouncing", true);
}
},function () {
     $(this).data("bouncing", false);
});
