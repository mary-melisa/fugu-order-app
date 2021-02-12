import LoadingComponent from './index';

const modal = {};
modal.install = function (Vue, options) {
    const Loading = Vue.extend(LoadingComponent);
    const Profile = new Loading({
        el: document.createElement('div')
    })
    document.body.appendChild(Profile.$el);
    if (options) {
        if (options.message) {
            Profile.message = options.message
        }
    }
    const loadingMethod = {
        open(message) {
            Profile.show = true;
            if (message) {
                Profile.message = message;
            }
        },
        hide() {
            Profile.show = false;
        }
    }
    Vue.prototype.$loading = loadingMethod;
}

export default modal;
