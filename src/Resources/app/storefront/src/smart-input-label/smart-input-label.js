import Plugin from 'src/plugin-system/plugin.class';

export default class FroshSmartInputLabel extends Plugin {

    init() {
        const groups = document.querySelectorAll('.form-group, .input-group');

        groups.forEach(group => this._eventListener(group))
    }

    _eventListener(group) {
        let me = this,
            element = group.querySelector('input');

        if (element) {
            element.addEventListener('input', function () {
                me._checkValue(element, group);
            });

            // IE11 not support focus within
            if ( !!window.MSInputMethodContext && !!document.documentMode ) {
                element.addEventListener('focus', function (e) {
                    group.classList.add('has-focus');
                });

                element.addEventListener('blur', function (e) {
                    group.classList.remove('has-focus');
                });
            }
        } else if ( group.querySelector('select') ) {
            group.classList.add('is-select');
        }

    }

    _checkValue(element, group) {
        if (element.value) {
            group.classList.add('has-value')
        } else {
            group.classList.remove('has-value');
        }
    }
}
