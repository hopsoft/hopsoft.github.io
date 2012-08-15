(function() {

  function init() {
    initBreadcrumbs();
    initImages();
    initTables();
  }

  function initBreadcrumbs() {
    var
      $breadcrumb = $(".breadcrumb"),
      $h1 = $("h1");

    // TODO: update to use a template
    if ($breadcrumb.length === 0 && $h1.length > 0) {
      $($(".container")[1]).prepend("<ul class='breadcrumb'><li><a href='http://hopsoft.github.com/'>Home</a> <span class='divider'>/</span></li><li class='active'>" + $h1.html() + "</li></ul>");
    }
  }

  function initImages() {
    $("img").each(function(i, img) {
      var
        $img = $(img),
        isThumbnail = $img.hasClass("thumbnail");

      isThumbnail = isThumbnail || $img.parents(".thumbnail").length > 0;
      if (!isThumbnail) {
        if ($img.attr("src").indexOf("forkme") === -1) {
          $img.addClass("thumbnail");
        }
      }
    });
  }

  function initTables() {
    $(".table-awesome").dataTable({
      "bPaginate": false,
      "bInfo": true
    });
  }

  $(document).ready(init);

})(this);
