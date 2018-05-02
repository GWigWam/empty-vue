function registerAsyncComponentTemplate(name, templateUrl, createComponent) {
    Vue.component(name, (resolve, reject) => {
        fetch(templateUrl)
            .then(resp => resp.text())
            .then(txt => {
                var comp = createComponent();
                comp.template = txt;
                resolve(comp);
            })
            .catch(reject);
    });
}
