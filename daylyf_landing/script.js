$('#playButton').click(() => {
    if ($('#videoArea')[0].paused){
        $('#videoArea').trigger('play');
        $('#visibleButton').addClass('hidden');
    }
    else {
        $('#videoArea').trigger('pause');
        $('#visibleButton').removeClass('hidden');
    }
})