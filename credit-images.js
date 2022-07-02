/**
 * Credit Images 0.9
 * oxterisk.com
 * oxterisk@protonmail.com
 * oxterisk@proton.me
 */

const imagesToCredit = document.querySelectorAll( 'img[data-credits]' );

if ( imagesToCredit.length > 0 ) {

    const imageCopyright = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5 9.17071C13.1872 9.06015 12.8506 9 12.5 9C10.8431 9 9.5 10.3431 9.5 12C9.5 13.6569 10.8431 15 12.5 15C12.8506 15 13.1872 14.9398 13.5 14.8293" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

    const creditsCss = `
.image-with-credits {
    position: relative;
    width: fit-content;
    display: block;
}
.image-with-credits .credits-image-box {
    position: absolute;
    background-color: #f6f6f6;
    border-radius: 24px;
    opacity: .6;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    padding: 4px 4px 0 4px;
}
.image-with-credits .credits-image-box.top {
    top: 12px;
    left: 10px;
    margin-right: 10px;
}
.image-with-credits .credits-image-box.bottom {
    bottom: 12px;
    left: 10px;
    margin-right: 10px;
}
.image-with-credits .credits-image-box .credits-image-cc {
    color: #666;
}
.image-with-credits .credits-image-box .credits-image-text {
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 0 12px 2px 6px;
    display: none;
}
.image-with-credits .credits-image-box:hover,
.image-with-credits .credits-image-box:active {
    opacity: 1;
}
.image-with-credits .credits-image-box:hover .credits-image-text,
.image-with-credits .credits-image-box:active .credits-image-text  {
    display: block;
}`;

    const creditsStyleSheet = document.createElement('style');
    creditsStyleSheet.innerHTML = creditsCss;
    document.head.appendChild( creditsStyleSheet );

    for ( let i = 0; i < imagesToCredit.length; i++ ) {

        if ( imagesToCredit[i].dataset.credits != '' ) {

            let position = imagesToCredit[i].dataset.creditsPos && imagesToCredit[i].dataset.creditsPos == 'bottom' ? 'bottom' : 'top';
            let style = '';

            if ( imagesToCredit[i].dataset.creditsMargin && imagesToCredit[i].dataset.creditsMargin != '' ) {
                if ( position == 'top' ) { style += `top:${imagesToCredit[i].dataset.creditsMargin};left:${imagesToCredit[i].dataset.creditsMargin};margin-right:${imagesToCredit[i].dataset.creditsMargin};`; }
                if ( position == 'bottom' ) { style += `bottom:${imagesToCredit[i].dataset.creditsMargin};left:${imagesToCredit[i].dataset.creditsMargin};margin-right:${imagesToCredit[i].dataset.creditsMargin};`; }
            }

            if ( imagesToCredit[i].dataset.creditsBg && imagesToCredit[i].dataset.creditsBg != '' ) {
                style += `background-color:${imagesToCredit[i].dataset.creditsBg};`;
            }

            if ( imagesToCredit[i].dataset.creditsColor && imagesToCredit[i].dataset.creditsColor != '' ) {
                style += `color:${imagesToCredit[i].dataset.creditsColor};`;
            }

            let div = document.createElement( 'div' );
            div.classList.add( 'credits-image-box' );
            div.classList.add( position );
            if ( style != '' ) { div.setAttribute( 'style', style ); }

            div.innerHTML = `<div class="credits-image-cc">${imageCopyright}</div><div class="credits-image-text">${imagesToCredit[i].dataset.credits}</div>`;

            imagesToCredit[i].parentNode.insertBefore( div, imagesToCredit[i].nextSibling );

        }

    }

}
