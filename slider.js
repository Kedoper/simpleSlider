class Slider {
    constructor(target, photos, settings) {
        this.target__wrap = document.querySelector(target);
        this.photo_list = photos;
        this.active_slide = 0;
        this.max_slider_id = this.photo_list.length - 1;
        this.min_slider_id = 0;
        this.settings = {
            linked: settings.linked || false,
            duration: settings.duration || 600,
            auto: {
                active: settings.auto.active || false,
                timeout: settings.auto.timeout || 3500
            }
        };
        console.log(this.settings);
        this.createSlider();
        if (this.settings.auto.active) {
            setInterval(() => {
                this.actionNext();
            }, this.settings.auto.timeout)
        }
    }

    createSlider() {
        let container = document.createElement('div'),
            img_container = document.createElement('div'),
            imgs_slider = document.createElement('div'),
            imgs_items = document.createElement('ul'),
            controls_next_wrap = document.createElement('div'),
            controls_back_wrap = document.createElement('div'),
            controls_next_btn = document.createElement('button'),
            controls_back_btn = document.createElement('button');

        // Wrapper
        container.classList.add('k-wrap');
        // Img
        img_container.classList.add('k-img_box');
        imgs_slider.classList.add('k-img_box__slider');
        imgs_items.classList.add('k-img_box__slider-items');
        imgs_items.style.transitionDuration = `${this.settings.duration}ms`;
        imgs_slider.append(imgs_items);
        img_container.append(imgs_slider);

        // Buttons wrap
        controls_next_wrap.classList.add('k-controls', 'k-controls__next');
        controls_back_wrap.classList.add('k-controls', 'k-controls__back');
        // Buttons
        controls_next_btn.classList.add('k-button', 'k-button__next');
        controls_back_btn.classList.add('k-button', 'k-button__back');

        controls_next_btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5   c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z   "/></g></svg>`;
        controls_back_btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5   c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z   "/></g></svg>`;

        controls_back_btn.addEventListener('click', this.actionBack);
        controls_next_btn.addEventListener('click', this.actionNext);

        controls_next_wrap.append(controls_next_btn);
        controls_back_wrap.append(controls_back_btn);

        container.append(controls_back_wrap, img_container, controls_next_wrap);
        /*
        *  CODE
        * */

        this.target__wrap.append(container);

        this.initSliderItems();
    }

    initSliderItems() {
        let par = document.querySelector('.k-img_box__slider-items');
        par.dataset.activeSlider = 0;
        par.style.left = 0;
        this.photo_list.map(value => {
            let item = document.createElement('li'),
                img = new Image();
            img.src = value;
            item.classList.add('k-slider-items', 'k-slider-items__item');
            item.append(img);
            par.append(item);

        })
    }

    actionNext = () => {
        let par = document.querySelector('.k-img_box__slider-items'),
            new_slide_id = parseInt(par.dataset.activeSlider) + 1,
            now_position = par.style.left.replace('px', ''),
            next_position;
        if (new_slide_id > this.max_slider_id) {
            next_position = 0;
            par.dataset.activeSlider = 0;
        } else {
            next_position = parseInt(now_position) - 900;
            par.dataset.activeSlider = new_slide_id;
        }
        par.style.left = `${next_position}px`;
    };

    actionBack = () => {
        let par = document.querySelector('.k-img_box__slider-items'),
            new_slide_id = parseInt(par.dataset.activeSlider) - 1,
            now_position = par.style.left.replace('px', ''),
            next_position;

        if (new_slide_id < 0) {
            next_position = -parseInt(par.offsetWidth) * this.max_slider_id;
            par.dataset.activeSlider = this.max_slider_id;
        } else {
            next_position = parseInt(now_position) + 900;
            par.dataset.activeSlider = new_slide_id;
        }
        par.style.left = `${next_position}px`;
    }
}
