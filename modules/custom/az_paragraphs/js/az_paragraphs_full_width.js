/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, window, document) {
  function calculateScrollbarWidth() {
    document.documentElement.style.setProperty('--scrollbar-width', "".concat(window.innerWidth - document.documentElement.clientWidth, "px"));
  }

  function pushSidebarsDown() {
    var contentRegion = document.querySelector('main.main-content');
    var allFullWidthElements = contentRegion.querySelectorAll('.paragraph.full-width-background');
    var lastFullWidthElement = allFullWidthElements[allFullWidthElements.length - 1];
    var contentRegionPosition = contentRegion.getBoundingClientRect();
    var style = allFullWidthElements[0].currentStyle || window.getComputedStyle(lastFullWidthElement, '');
    var bottomMargin = parseFloat(style.marginBottom);
    var contentRegionTop = contentRegionPosition.top;
    var lastFullWidthElementPosition = lastFullWidthElement.getBoundingClientRect();
    var lastFullWidthElementBottom = lastFullWidthElementPosition.bottom;
    var sidebarTopMargin = lastFullWidthElementBottom - contentRegionTop + bottomMargin;

    if (sidebarTopMargin) {
      document.documentElement.style.setProperty('--sidebar-top-margin', "".concat(sidebarTopMargin, "px"));
    }
  }

  function calculateFullWidthNegativeMargins() {
    var contentRegion = document.querySelectorAll('.block-system-main-block');
    var contentRegionPosition = contentRegion[0].getBoundingClientRect();
    var distanceFromLeft = contentRegionPosition.left;
    var distanceFromRight = contentRegionPosition.right;
    var negativeLeftMargin = 0 - distanceFromLeft;
    var negativeRightMargin = 0 - distanceFromRight;
    document.documentElement.style.setProperty('--full-width-left-distance', "".concat(negativeLeftMargin, "px"));
    document.documentElement.style.setProperty('--full-width-right-distance', "".concat(negativeRightMargin, "px"));
  }

  Drupal.behaviors.azParagraphsFullWidthElements = {
    attach: function attach() {
      calculateScrollbarWidth();
      calculateFullWidthNegativeMargins();
      pushSidebarsDown();
    }
  };
  window.addEventListener('resize', function () {
    calculateScrollbarWidth();
    calculateFullWidthNegativeMargins();
    pushSidebarsDown();
  });
  window.addEventListener('azVideoPlay', function () {
    calculateScrollbarWidth();
    calculateFullWidthNegativeMargins();
    pushSidebarsDown();
  });
})(Drupal, this, this.document);