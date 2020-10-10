$(function(){
    var $modal = $('#modal')
    var $modalPageContent = $('#modal .page-content')

    function goToByScroll(id) {
        // Remove "link" from the ID
        id = id.replace("link", "");
        // Scroll
        $('html,body').animate({
            scrollTop: $("#" + id).offset().top
        }, 'slow');
    }

    $('.nav-main-header .nav-link').on('click', function(e) {
        var link = $(this).data('link')
        if (!(link != '' && link != undefined && link != null)) return

        e.preventDefault()
        goToByScroll(link)
    })

    $('#epList .list-group-item-action').on('click', function(e) {
        e.preventDefault()

        var $self = $(this)
        $modalPageContent.load($self.data('link') + ' .scene', function() {
            $modal.find('.modal-title').text($self.text())
            $modal.modal()
        })
    })
})