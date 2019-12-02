import { Component, h, Prop, State, Element } from '@stencil/core';
import componentUtils from '../../utils/componentUtils';

@Component({
    tag: 'c-navbar'
})
export class Navbar {
    private navbarId = componentUtils.uniqueId();

    @Element() $el: HTMLElement;

    @Prop() logoUrl: string;
    @Prop() altText: string;
    @Prop() tagline: string;
    @Prop() collapseAt: string = 'sm';

    @State() expanded = false;

    private toggleMenu() {
        this.expanded = !this.expanded;

        if (this.expanded)
            this.setDropdownFocus();
    }

    private setDropdownFocus() {
        let navbarContent: any = this.$el.querySelector('.navbar-content');
        navbarContent.focus();
    }

    render() {
        return (
            <nav class={`navbar collapse-${this.collapseAt}`} role="navigation">
                {(this.logoUrl || this.tagline) &&
                    <a href="/" class="navbar-branding">
                        {this.logoUrl && <img class="logo" src={this.logoUrl} alt={this.altText} />}
                        {this.tagline && <span class="tagline">{this.tagline}</span>}
                    </a>
                }
                <button class="button navbar-toggler" onClick={this.toggleMenu.bind(this)} aria-haspopup="true" aria-expanded={`${this.expanded}`} aria-controls={`navbar-content-${this.navbarId}`}>
                    <span class="sr-only">toggle menu</span>
                    <i class="fas fa-bars"></i>
                </button>
                <div class="navbar-content" id={`navbar-content-${this.navbarId}`} tabindex="-1">
                    <scope />
                </div>
            </nav>
        );
    }
}