<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.js"  crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
<!-- Data Table -->
<script src="https://cdn.datatables.net/1.10.18/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.18/js/dataTables.bootstrap4.min.js"></script>

<script type="text/javascript">
    $('#sortTable').DataTable({
        "paging":   true,
        "info":     true,
        "searching":   true,
        "lengthMenu": [ [20, 50, 100, -1], [20, 50, 100, "Todos"] ],
        "stateSave": true,
        "language": {
            decimal: ",",
            search:         "Buscar", 
            lengthMenu:    "Exibindo _MENU_ registros",
            info:           "Registros de _START_ a _END_. Total de _TOTAL_",
            emptyTable:     "Sem dados registrados",
            infoEmpty:      "",
            paginate: {
                first:      "Primeiro",
                previous:   "Anterior",
                next:       "Próximo",
                last:       "Último"
            },
        }
    });

    $('#sortTable2').DataTable({
        "paging":   true,
        "info":     true,
        "searching":   true,
        "lengthMenu": [ [20, 50, 100, -1], [20, 50, 100, "Todos"] ],
        "stateSave": true,
        "language": {
            decimal: ",",
            search:         "Buscar", 
            lengthMenu:    "Exibindo _MENU_ registros",
            info:           "Registros de _START_ a _END_. Total de _TOTAL_",
            emptyTable:     "Sem dados registrados",
            infoEmpty:      "",
            paginate: {
                first:      "Primeiro",
                previous:   "Anterior",
                next:       "Próximo",
                last:       "Último"
            },
        }
    });
</script>


<script>
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $("#filter-toggle").click(function(e) {
        e.preventDefault();
        $("#filter").toggleClass("toggled");
    });
    $('[data-toggle="popover"]').popover({
        placement : 'top',
        html : true,
        title : '<a href="#" class="close" data-dismiss="alert">&times;</a>',
        content : 'body'
    });
    $(document).on("click", ".popover .close" , function(){
        $(this).parents(".popover").popover('hide');
    });
    
</script>

<!-- Multiselect -->
{{-- <script src="{{ $js }}/fastselect/build.min.js"></script> --}}
{{-- <script src="{{ $js }}/fastselect/fastselect.standalone.js"></script> --}}
{{-- <script type="text/javascript">
    $('.multipleSelect').fastselect();
</script> --}}

{{-- <script src="https://code.jquery.com/ui/1.10.3/jquery-ui.js"></script> --}}

<!-- Custom -->
{{-- <script src="{{ $js }}/custom.js"></script> --}}

<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="https://unpkg.com/feather-icons/dist/feather.min.js"></script>
<script>
    feather.replace()
</script>

<!-- Flash Messages -->
<script> 
    // $('#flash-overlay-modal').modal(); 
    $('div.alert').not('.alert-important').delay(3000).fadeOut(350); 
</script>

{{-- <script src="https://cdn.bootcss.com/cropper/4.0.0-beta/cropper.js"></script> --}}
<script src="{{ asset('js/cropper.js') }}"></script>

