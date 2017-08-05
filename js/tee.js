(function () {
            var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
            var clientWidth = document.documentElement.clientWidth;
            var timer;
            function setRem() {
                clientWidth = document.documentElement.clientWidth;
                var nowPX = clientWidth / 320 * 100;
                document.documentElement.style.fontSize = nowPX + 'px';
            }
            clientWidth !== 320 && setRem();
            window.addEventListener(supportsOrientationChange, function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    setRem();
                }, 300);
            }, false);
        })();