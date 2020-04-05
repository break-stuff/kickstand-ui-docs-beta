import { Component, h, Element, Prop, Host, ComponentInterface } from '@stencil/core';


@Component({
    tag: 'c-carousel-slide'
})
export class CarouselSlide implements ComponentInterface {
    $link: HTMLAnchorElement;
    $content: HTMLElement;

    @Element() el: HTMLElement;

    @Prop() src: string;
    @Prop() alt: string;
    @Prop() url: string;
    @Prop() align: 'start' | 'center' | 'end' = 'center';
    @Prop() position: 'start' | 'center' | 'end' = 'center';
    @Prop() clickable: boolean;
    @Prop() lazy: boolean;
    @Prop() threshold: number = 300;

    componentDidLoad() {
        if (this.clickable)
            this.$content.addEventListener('click', () => this.$link.click());
    }

    render() {
        let classes = {
            'slide': true,
            'pointer': this.clickable && this.url !== '' && this.url !== undefined
        };

        let contentClasses = {
            'content': true,
            'flex-layout': true,
            'flex-column': true,
            [`align-${this.align}`]: true,
            [`justify-${this.position}`]: true
        };

        return (
            <Host class={classes}>
                {this.src && <c-img class="slide-image" alt={this.alt} lazy={this.lazy} src={this.src} threshold={this.threshold} />}
                <div class={contentClasses} ref={el => this.$content = el}>
                    <slot />
                </div>
                {(this.clickable && this.url) && <a href={this.url} class="sr-only" ref={el => this.$link = el}>link to {this.url}</a>}
            </Host>
        );
    }
}