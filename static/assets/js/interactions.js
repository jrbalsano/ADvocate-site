$(document).ready(function() {
    $.get('/sponsors').then(function(results) {
        const $templateResult = $('#template-result');
        results.forEach(function(result) {
            const $resultElement = $templateResult.clone();
            const { host, urls, paths } = result;
            $resultElement.attr('hidden', false);
            $resultElement.find('.hostname-container').text(host);
            $resultElement.find('.url-container').text(urls[0]);
            $resultElement.find('.path-count-container').text(paths.length);
            $resultElement.find('.hostname-link').attr('href', host);
            $('#all-results').append($resultElement);
        });
        $('#search').focus();
        $('.activate-group').click(function() {
            $('.tabs-header li').removeClass('active');
            $('.tabs-group li').hide();
            $('.details-tab').addClass('active');
            $('.details-panel').show();
            $('.ad-details').slideUp();
            $('.result-group').removeClass('dropshadow');
            $(this).parent().addClass('dropshadow');
            $(this).siblings('.ad-details').slideDown();
        });
        $('.tabs-header li').click(function() {
            $('.tabs-header li').removeClass('active');
            $(this).addClass('active');
        });
        $('.details-tab').click(function() {
            $('.tabs-group li').hide();
            $('.details-panel').show()
        });
        $('.involved-tab').click(function() {
            $('.tabs-group li').hide();
            $('.involved-panel').show()
        });
    });
})
