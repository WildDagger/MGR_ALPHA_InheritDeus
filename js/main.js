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
        $modalPageContent.load($self.attr('href') + ' .scene', function(response, status, xhr) {
            if (status == 'error') {
                console.log('發生錯誤: ' + xhr.statusText)
                window.location = $self.attr('href')
                return
            }
            $modal.find('.modal-title').text($self.text())
            $modal.find('.modal-body').scrollTop()
            $modal.modal()
        })
    })

    $('.card-chara .btn.btn-primary').on('click', function(e) {
        e.preventDefault()

        var $self = $(this)
        $modalPageContent.load($self.attr('href') + ' .chara', function(response, status, xhr) {
            if (status == 'error') {
                console.log('發生錯誤: ' + xhr.statusText)
                window.location = $self.attr('href')
                return
            }
            $modal.find('.modal-title').text($self.data('title'))
            $modal.find('.modal-body').scrollTop()
            $modal.modal()
        })
    })
})