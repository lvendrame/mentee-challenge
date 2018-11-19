(function (params) {
    "use strict";

    var _currentState;
    var _cloneState;
    var _data;
    var _idProp;

    function setData(data, idProp) {
        _data = data;
        _idProp = idProp;
    }

    function setCurrentState(id) {
        if(id){
            _currentState = _data.find(function (item) {
                return item[_idProp] === id;
            });
            _cloneState = cloneObject(_currentState);
        }else{
            _currentState = {};
            _cloneState = {};
        }
    }

    function cloneObject(obj) {
        return copyObject(obj, {});
    }

    function copyObject(source, target) {
        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key];
            }
        }
        return target;
    }

    function saveState() {
        if(_cloneState[_idProp]){
            copyObject(_cloneState, _currentState);
        }else{
            _cloneState[_idProp] = Math.floor(Math.random() * 10000);
            _data.push(_cloneState);
        }
    }

    function setInputState(input, prop) {
        input.onchange = function (event) {
            _cloneState[prop] = event.target.value;
        };

        return setInputStateValue(input, prop);
    }

    function setInputStateValue(input, prop) {
        if(_cloneState && _cloneState[prop]){
            input.value = _cloneState[prop];
        }else{
            input.value = "";
        }
        return input;
    }

    window.dataStateControl = {
        setData: setData,
        setCurrentState: setCurrentState,
        saveState: saveState,
        setInputState: setInputState,
        setInputStateValue: setInputStateValue
    };
})();