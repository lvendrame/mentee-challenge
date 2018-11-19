(function(){
    "use strict";

    function modal() {
        var m = document.getElementById('editForm');

        modal = function () {
            m.classList.toggle('open');
        }

        modal();
    }

    function createContainer(state){
        return domUtils.createElement('div', null, 'contanier', null, [
            domUtils.createElement('h1', state.title),
            createSections(state.sections)
        ]);
    }

    function createSections(sections){
        return domUtils.createElement('section', null, 'sections', null,
            sections.map(createSection)
        );
    }

    function createSection(section) {
        return section.type === 'cartoon' ? createCartoon(section) : createData(section)
    }

    function createCartoon(section){
        return domUtils.createElement('article', null, null, null, [
            domUtils.createElement('h2', section.title),
            domUtils.createElement('p', section.description),
            createCharacters(section.characters)
        ]);
    }

    function createCharacters(characters){
        return domUtils.createElement('ul', null, null, null,
            characters.map(createCharacter));
    }

    function createCharacter(character){
        return domUtils.createElement('li', null, null, null, [
            domUtils.createElement('strong', character.name),
            ': ',
            domUtils.createElement('span', character.gender)
        ]);
    }

    function createData(section){
        return domUtils.createElement('article', null, null, null, [
            domUtils.createElement('h2', section.title),
            createDataItems(section.data),
            createAddButton(section.data)
        ]);
    }

    function createDataItems(data){
        dataStateControl.setData(data, '_id');

        return domUtils.createElement('div', null, 'data', null,
            data.map(createDataItem)
        );
    }

    function createDataItem(dataItem){

        return domUtils.createElement('div', null, 'card', null, [
            domUtils.createElement('img', null, null, {src: dataItem.picture}),
            domUtils.createElement('span', dataItem.name),
            domUtils.createElement('span', dataItem.age),
            domUtils.createElement('span', dataItem.gender),
            domUtils.createElement('span', dataItem.company),
            domUtils.createElement('span', dataItem.email),
            domUtils.createElement('span', dataItem.phone),
            domUtils.createElement('p', dataItem.about),
            createEditItemButton(dataItem)
        ]);
    }

    function createEditItemButton(dataItem){
        return domUtils.createButton('Edit', function () {
            showForm();
            setStateToEditForm(dataItem._id);
            console.log('userid', dataItem._id);
        }, true);
    }

    function createAddButton(data) {
        return domUtils.createButton('Add new', function () {
            showForm();
            setStateToEditForm();
            console.log('userid', 'new');
        }, true);
    }

    function showForm() {
        domUtils.tryReplaceFirstChild(
            document.getElementById('main'), 
            createEditForm());

        modal();
    }

    var formDefinition = [
        { el: null, type: 'hidden', label: '', name: '_id', options: [] },
        { el: null, type: 'hidden', label: '', name: 'picture', options: [] },
        { el: null, type: 'text', label: 'Name', name: 'name', options: [] },
        { el: null, type: 'text', label: 'Age', name: 'age', options: [] },
        { el: null, type: 'select', label: 'Gender', name: 'gender', options: [
            {text:'male', value: 'male'},
            {text:'female', value: 'female'}
        ]},
        { el: null, type: 'text', label: 'Company', name: 'company', options: [] },
        { el: null, type: 'text', label: 'E-Mail', name: 'email', options: [] },
        { el: null, type: 'text', label: 'Telephone', name: 'phone', options: [] },
        { el: null, type: 'textarea', label: 'About', name: 'about', options: [] },
    ];

    function createEditForm() {
        return domUtils.createElement('form', null, null, null, [
            formDefinition.map(createEditFormInput),
            createCloseButton(),
            createSaveButton()
        ]);
    }

    function createEditFormInput(def){
        def.el = domUtils.createInput(def.type, def.options);
        dataStateControl.setInputState(def.el, def.name);

        return domUtils.createLabelToInput(def.label, def.el);
    }

    function createSaveButton() {
        return domUtils.createButton('Save', function () {

            modal();
            dataStateControl.saveState();
            start();

        }, true);
    }

    function createCloseButton() {
        return domUtils.createButton('Close', function() {
            modal();
        }, true);
    }

    function setStateToEditForm(id) {
        dataStateControl.setCurrentState(id);
        formDefinition.forEach(function(def){
            dataStateControl.setInputStateValue(def.el, def.name);
        });
    }

    function start(){
        start.contanier = domUtils.tryReplaceChild(
            document.body,
            start.contanier, 
            createContainer(initialState));
    }

    start();

})();