(function() {

  function init() {
    $(".table-awesome").dataTable({
      "bPaginate": false,
      "bInfo": true
    });
  }

  $(document).ready(init);

})(this);
