(function() {

  function init() {
    $(".table-awesome").dataTable({
      "bPaginate": false,
      "bInfo": false
    });
  }

  $(document).ready(init);

})(this);
