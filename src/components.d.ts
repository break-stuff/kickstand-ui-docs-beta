/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  IBreadcrumbs,
} from './scripts/components/breadcrumbs/breadcrumbs';

export namespace Components {
  interface CAlert {
    'cssClass': string;
    'header': string;
    'note': boolean;
    'type': string;
  }
  interface CBadge {
    'cssClass': string;
    'hollow': boolean;
    'type': string;
  }
  interface CBreadcrumbs {
    'breadcrumbs': IBreadcrumbs[];
    'cssClass': string;
  }
  interface CButton {
    'cssClass': string;
    'hollow': boolean;
    'icon': string;
    'iconDirection': string;
    'size': string;
    'type': string;
    'url': string;
  }
  interface CCard {
    'alt': string;
    'cssClass': string;
    'imgDirection': string;
    'imgSrc': string;
    'lazy': boolean;
    'threshold': number;
  }
  interface CCardBody {
    'cardSubtitle': string;
    'cardTitle': string;
  }
  interface CCardFooter {}
  interface CCarousel {
    'autoplay': boolean;
    'cssClass': string;
    'showControls': boolean;
    'showIndicators': boolean;
    'thumbnails': boolean;
    'timer': number;
  }
  interface CCarouselSlide {
    'alt': string;
    'cssClass': string;
    'lazy': boolean;
    'src': string;
    'threshold': number;
  }
  interface CImg {
    'alt': string;
    'cssClass': string;
    'lazy': boolean;
    'src': string;
    'threshold': number;
  }
  interface COverlay {
    'absolute': boolean;
    'hideOverlay': () => Promise<void>;
    'show': boolean;
    'showOverlay': () => Promise<void>;
    'theme': string;
  }
}

declare global {


  interface HTMLCAlertElement extends Components.CAlert, HTMLStencilElement {}
  var HTMLCAlertElement: {
    prototype: HTMLCAlertElement;
    new (): HTMLCAlertElement;
  };

  interface HTMLCBadgeElement extends Components.CBadge, HTMLStencilElement {}
  var HTMLCBadgeElement: {
    prototype: HTMLCBadgeElement;
    new (): HTMLCBadgeElement;
  };

  interface HTMLCBreadcrumbsElement extends Components.CBreadcrumbs, HTMLStencilElement {}
  var HTMLCBreadcrumbsElement: {
    prototype: HTMLCBreadcrumbsElement;
    new (): HTMLCBreadcrumbsElement;
  };

  interface HTMLCButtonElement extends Components.CButton, HTMLStencilElement {}
  var HTMLCButtonElement: {
    prototype: HTMLCButtonElement;
    new (): HTMLCButtonElement;
  };

  interface HTMLCCardElement extends Components.CCard, HTMLStencilElement {}
  var HTMLCCardElement: {
    prototype: HTMLCCardElement;
    new (): HTMLCCardElement;
  };

  interface HTMLCCardBodyElement extends Components.CCardBody, HTMLStencilElement {}
  var HTMLCCardBodyElement: {
    prototype: HTMLCCardBodyElement;
    new (): HTMLCCardBodyElement;
  };

  interface HTMLCCardFooterElement extends Components.CCardFooter, HTMLStencilElement {}
  var HTMLCCardFooterElement: {
    prototype: HTMLCCardFooterElement;
    new (): HTMLCCardFooterElement;
  };

  interface HTMLCCarouselElement extends Components.CCarousel, HTMLStencilElement {}
  var HTMLCCarouselElement: {
    prototype: HTMLCCarouselElement;
    new (): HTMLCCarouselElement;
  };

  interface HTMLCCarouselSlideElement extends Components.CCarouselSlide, HTMLStencilElement {}
  var HTMLCCarouselSlideElement: {
    prototype: HTMLCCarouselSlideElement;
    new (): HTMLCCarouselSlideElement;
  };

  interface HTMLCImgElement extends Components.CImg, HTMLStencilElement {}
  var HTMLCImgElement: {
    prototype: HTMLCImgElement;
    new (): HTMLCImgElement;
  };

  interface HTMLCOverlayElement extends Components.COverlay, HTMLStencilElement {}
  var HTMLCOverlayElement: {
    prototype: HTMLCOverlayElement;
    new (): HTMLCOverlayElement;
  };
  interface HTMLElementTagNameMap {
    'c-alert': HTMLCAlertElement;
    'c-badge': HTMLCBadgeElement;
    'c-breadcrumbs': HTMLCBreadcrumbsElement;
    'c-button': HTMLCButtonElement;
    'c-card': HTMLCCardElement;
    'c-card-body': HTMLCCardBodyElement;
    'c-card-footer': HTMLCCardFooterElement;
    'c-carousel': HTMLCCarouselElement;
    'c-carousel-slide': HTMLCCarouselSlideElement;
    'c-img': HTMLCImgElement;
    'c-overlay': HTMLCOverlayElement;
  }
}

declare namespace LocalJSX {
  interface CAlert extends JSXBase.HTMLAttributes<HTMLCAlertElement> {
    'cssClass'?: string;
    'header'?: string;
    'note'?: boolean;
    'type'?: string;
  }
  interface CBadge extends JSXBase.HTMLAttributes<HTMLCBadgeElement> {
    'cssClass'?: string;
    'hollow'?: boolean;
    'type'?: string;
  }
  interface CBreadcrumbs extends JSXBase.HTMLAttributes<HTMLCBreadcrumbsElement> {
    'breadcrumbs'?: IBreadcrumbs[];
    'cssClass'?: string;
  }
  interface CButton extends JSXBase.HTMLAttributes<HTMLCButtonElement> {
    'cssClass'?: string;
    'hollow'?: boolean;
    'icon'?: string;
    'iconDirection'?: string;
    'size'?: string;
    'type'?: string;
    'url'?: string;
  }
  interface CCard extends JSXBase.HTMLAttributes<HTMLCCardElement> {
    'alt'?: string;
    'cssClass'?: string;
    'imgDirection'?: string;
    'imgSrc'?: string;
    'lazy'?: boolean;
    'threshold'?: number;
  }
  interface CCardBody extends JSXBase.HTMLAttributes<HTMLCCardBodyElement> {
    'cardSubtitle'?: string;
    'cardTitle'?: string;
  }
  interface CCardFooter extends JSXBase.HTMLAttributes<HTMLCCardFooterElement> {}
  interface CCarousel extends JSXBase.HTMLAttributes<HTMLCCarouselElement> {
    'autoplay'?: boolean;
    'cssClass'?: string;
    'showControls'?: boolean;
    'showIndicators'?: boolean;
    'thumbnails'?: boolean;
    'timer'?: number;
  }
  interface CCarouselSlide extends JSXBase.HTMLAttributes<HTMLCCarouselSlideElement> {
    'alt'?: string;
    'cssClass'?: string;
    'lazy'?: boolean;
    'src'?: string;
    'threshold'?: number;
  }
  interface CImg extends JSXBase.HTMLAttributes<HTMLCImgElement> {
    'alt'?: string;
    'cssClass'?: string;
    'lazy'?: boolean;
    'src'?: string;
    'threshold'?: number;
  }
  interface COverlay extends JSXBase.HTMLAttributes<HTMLCOverlayElement> {
    'absolute'?: boolean;
    'show'?: boolean;
    'theme'?: string;
  }

  interface IntrinsicElements {
    'c-alert': CAlert;
    'c-badge': CBadge;
    'c-breadcrumbs': CBreadcrumbs;
    'c-button': CButton;
    'c-card': CCard;
    'c-card-body': CCardBody;
    'c-card-footer': CCardFooter;
    'c-carousel': CCarousel;
    'c-carousel-slide': CCarouselSlide;
    'c-img': CImg;
    'c-overlay': COverlay;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


