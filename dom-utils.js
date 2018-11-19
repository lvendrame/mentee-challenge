(function (window) {
    "use strict"

        function createElement(type, text, className, attrs, children) {
            var element;
            if(type){
                element = document.createElement(type)
            }else if(children){
                element = document.createDocumentFragment();
            }else{
                return document.createTextNode(text);
            }

            return updateElement(element, text, className, attrs, children);
        }

        function updateElement(el, text, className, attrs, children) {
            if (text) el.innerText = text;

            if (className) el.className = className;

            if (attrs) Object.keys(attrs).forEach(function (attr) {
                el.setAttribute(attr, attrs[attr]);
            });

            updateElementChildren(el, children);

            return el;
        }

        function updateElementChildren(el, children) {
            if (children) {
                Array.prototype.slice.call(el.children).forEach(function (old) {
                    old.remove();
                });

                el.appendChild(
                    updateFragmentChild(document.createDocumentFragment(), children)
                );
            }
        }

        function updateFragmentChildren(fragment, children) {
            return children.reduce(updateFragmentChild,
                fragment);
        }

        function updateFragmentChild(fragment, child) {
            if(Array.isArray(child)){
                return updateFragmentChildren(fragment, child);
            }

            var tp = typeof (child);
            if (tp === "string" || tp === "number") {
                child = createElement(null, child);
            }

            if (child) {
                fragment.appendChild(child);
            }
            
            return fragment;
        }

        function createInput(type, options, attrs) {
            switch (type) {
                case 'textarea':
                    return createTextArea(attrs);
                case 'select':
                    return createSelect(options, attrs);
                default:
                    return createRegularInput(type, attrs);
            }
        }

        function createRegularInput(type, attrs) {
            attrs = attrs || {};
            attrs.type = type;
            return createElement('input', null, null, attrs);
        }

        function createTextArea(attrs) {
            return createElement('textarea', null, null, attrs);
        }

        function createSelect(options, attrs) {
            return createElement('select', null, null, attrs,
                options.map(createOption)
            );
        }

        function createOption(option) {
            return createElement('option', option.text, null, {
                value: option.value
            });
        }

        function createButton(text, fn, preventDefault) {
            var button = createElement('button', text);

            button.addEventListener('click', preventDefault ?
                function (event) {
                    event.preventDefault();
                    fn(event);
                } : 
                fn);

            return button;
        }

        function createLabel(text, children) {
            return createElement('label', text, null, null, children);
        }

        function createLabelToInput(text, input) {
            if(!input && input.type === 'hidden'){
                return input;
            }

            return createLabel(text, input);
        }

        function tryReplaceChild(parent, oldChild, newChild){
            if(oldChild){
                parent.replaceChild(newChild, oldChild);
            }else{
                parent.appendChild(newChild);
            }

            return newChild;
        }

        function tryReplaceFirstChild(parent, newChild) {
            return tryReplaceChild(parent, parent.firstChild, newChild);
        }

        window.domUtils = {
            createElement: createElement,
            updateElement: updateElement,
            updateElementChildren: updateElementChildren,
            createInput: createInput,
            createLabel: createLabel,
            createLabelToInput: createLabelToInput,
            createButton: createButton,
            tryReplaceChild: tryReplaceChild,
            tryReplaceFirstChild: tryReplaceFirstChild
        };

})(window);