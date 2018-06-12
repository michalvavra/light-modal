({
    open: function(component) {
        component.set('v.isActive', true);

        if (component.get('v.allowClose')) {
            this.createEventListeners(component);
        }

        this.toggleStyles(component);
    },

    close: function(component) {
        this.toggleStyles(component);

        if (component.get('v.allowClose')) {
            this.removeEventListeners();
        }

        component.set('v.isActive', false);
    },

    createEventListeners: function(component) {
        this.escapeListener = this.listener.onEscape.bind(component);
        this.outsideClickListener = this.listener.onOutsideClick.bind(component);

        document.addEventListener(this.listener.KEYUP, this.escapeListener);
        document.addEventListener(this.listener.CLICK, this.outsideClickListener);
    },

    removeEventListeners: function() {
        document.removeEventListener(this.listener.KEYUP, this.escapeListener);
        document.removeEventListener(this.listener.CLICK, this.outsideClickListener);
    },

    listener: {
        KEYUP: 'keyup',
        CLICK: 'click',

        onEscape: function(domEvent, component) {
            if (domEvent.keyCode === 27) {
                this.close(component);
            }
        },

        onOutsideClick: function(domEvent, component) {
            var element = domEvent.target;

            if (!$A.util.isUndefined(element.tagName)) {
                var elementName = element.tagName.toLowerCase();
                if (elementName === 'section' ||
                        elementName === 'div' && domEvent.target.classList.contains('slds-modal__container')) {
                    this.close(component);
                }
            }
        }
    },

    findElement: function(component, auraId) {
        var selectedComponent = component;
        var element = selectedComponent.find(auraId);

        while ($A.util.isUndefined(element)) {
            selectedComponent = selectedComponent.getSuper();
            element = selectedComponent.find(auraId);
        }

        return element;
    },

    toggleStyles: function(component) {
        var modal = this.findElement(component, 'modal');

        this.toggleBackdrop(component);
        this.toggleFadeIn(component, modal);
        this.toggleSize(component, modal);
    },

    toggleFadeIn: function(component, modal) {
        $A.util.toggleClass(modal, 'slds-fade-in-open');
    },

    toggleSize: function(component, modal) {
        if (component.get('v.isLarge')) {
            $A.util.addClass(modal, 'slds-modal_large');
        } else {
            $A.util.removeClass(modal, 'slds-modal_large');
        }
    },

    toggleBackdrop: function(component) {
        var backdrop = this.findElement(component, 'backdrop');
        $A.util.toggleClass(backdrop, 'slds-backdrop_open');
    }
})// eslint-disable-line semi
