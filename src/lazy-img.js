(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.LazyImg = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {

    class LazyImg {
        constructor(targets) {
            if(typeof targets === 'string') {
                this.targets = targets ? [targets] : ['img'];
            }
            else {
                throw new Error('Target must be a string')
            }

            this.init();
        }

        init() {
            let that = this;

            let observer = new IntersectionObserver(
                function(entries, observer) {
                    entries.forEach((entry) => {
                        if(entry.isIntersecting) {
                            entry.target.src = entry.target.dataset.src;
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    rootMargin: '0px',
                    threshold: 0,
                });

            let targets = document.querySelectorAll(that.targets);
            targets.forEach(function(target) {
                observer.observe(target);
            });
        }
    }

    LazyImg.init = function(targets) {
        return new LazyImg(targets)
    };

    window.LazyImg = LazyImg;

    return LazyImg;
}));