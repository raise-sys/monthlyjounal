window.journalScroll = {
    scrollToDay: function (elementId) {
        const findTarget = () => {
            const mobile = document.getElementById(elementId + "-mobile");
            const desktop = document.getElementById(elementId);

            const isVisible = (element) => {
                if (!element) {
                    return false;
                }

                const rect = element.getBoundingClientRect();
                return rect.width > 0 && rect.height > 0;
            };

            if (isVisible(mobile)) {
                return mobile;
            }

            if (isVisible(desktop)) {
                return desktop;
            }

            return mobile || desktop;
        };

        const scroll = () => {
            const element = findTarget();
            if (!element) {
                return false;
            }

            element.scrollIntoView({ behavior: "smooth", block: "center" });
            return true;
        };

        if (scroll()) {
            return;
        }

        requestAnimationFrame(() => {
            if (!scroll()) {
                window.setTimeout(scroll, 100);
            }
        });
    }
};
