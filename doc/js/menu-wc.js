'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@angular-material-extensions/core documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/MatCoreModule.html" data-type="entity-link">MatCoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MatCoreModule-7c42638790ee30ff75b5b6861a14800d"' : 'data-target="#xs-components-links-module-MatCoreModule-7c42638790ee30ff75b5b6861a14800d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MatCoreModule-7c42638790ee30ff75b5b6861a14800d"' :
                                            'id="xs-components-links-module-MatCoreModule-7c42638790ee30ff75b5b6861a14800d"' }>
                                            <li class="link">
                                                <a href="components/MatLanguageMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MatLanguageMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MatDialogsModule.html" data-type="entity-link">MatDialogsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MatDialogsModule-020a9d2f005eb43950c55e73ce46ea3a"' : 'data-target="#xs-components-links-module-MatDialogsModule-020a9d2f005eb43950c55e73ce46ea3a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MatDialogsModule-020a9d2f005eb43950c55e73ce46ea3a"' :
                                            'id="xs-components-links-module-MatDialogsModule-020a9d2f005eb43950c55e73ce46ea3a"' }>
                                            <li class="link">
                                                <a href="components/MatAlertDialog.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MatAlertDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatAsyncDialog.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MatAsyncDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatConfirmDialog.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MatConfirmDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatInputDialog.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MatInputDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatLoadingDialog.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MatLoadingDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatRadioDialog.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MatRadioDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatSelectDialog.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MatSelectDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatTimerDialog.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MatTimerDialog</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/MatSplashScreenService.html" data-type="entity-link">MatSplashScreenService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Language.html" data-type="entity-link">Language</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatAlertDialogData.html" data-type="entity-link">MatAlertDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatAsyncDialogData.html" data-type="entity-link">MatAsyncDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatConfirmDialogData.html" data-type="entity-link">MatConfirmDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatInputDialogData.html" data-type="entity-link">MatInputDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatLoadingDialogData.html" data-type="entity-link">MatLoadingDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatRadioDialogData.html" data-type="entity-link">MatRadioDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatSelectDialogData.html" data-type="entity-link">MatSelectDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatTimerDialogData.html" data-type="entity-link">MatTimerDialogData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});