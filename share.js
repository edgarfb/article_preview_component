(function main() {
    let d = document,
    share = d.getElementById('share')
    tooltip = d.getElementById('tooltip'),
    tooltipSm = d.getElementById('tooltip-sm'),
    shareClose = d.getElementById('share-close');


    
    if(window.innerWidth > 600) {
        share.addEventListener('click', function shareClick() {
            tooltip.classList.toggle('fadeIn');
            tooltip.classList.toggle('fadeOut');
            
        })
    }

    share.addEventListener('click', function shareClickSm() {

        tooltipSm.classList.remove('down');
        tooltipSm.classList.add('up');
    })
    shareClose.addEventListener('click', function shareCloseClick() {
        tooltipSm.classList.remove('up');
        tooltipSm.classList.add('down');
    })


})();