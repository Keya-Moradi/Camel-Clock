window.onload = app;

function app() {
    var clock = document.querySelector('h1');

    function count() {
        var Keya = new Date(),
            H = Keya.getHours(),
            M = Keya.getMinutes(),
            S = Keya.getSeconds();


        // pass in h,m,s, get back [r,g,b]
        var rgb = rgbConversion(H, M, S);
        // turn [r,g,b] into string -> 'rgb('+r+','+g+','+b+')'
        // to put into the CSS
        var rgbString = 'rgb(' + rgb.join(',') + ')';
        // put RGB string into document.body's style
        // MODIFY DOM
        document.body.style['background-color'] = rgbString;

        // make digits less than 10 a 2+ digit string
        H = showDigits(H);
        M = showDigits(M);
        S = showDigits(S);

        var times = [H, M, S];

        // set the text
        // MODIFY DOM
        clock.innerText = times.join(":");
    }

    /**
     * input: integer
     * output: 2+ digit integer
     */
    function showDigits(H) {
        if (H < 10) {
            return "0" + H;
        }
        return H;
    }

    /**
     * inputs are as follows:
     * H, M, and S are numbered components of time
     * (hours, minutes, and seconds)
     *
     * output: [r,g,b] - array of rgb values
     */
    function rgbConversion(H, M, S) {
        var R = Math.round(H / 24 * 255);
        var G = Math.round(M / 60 * 255);
        var B = Math.round(S / 60 * 255);
        return [R, G, B];
    }




    setInterval(count, 1000);
    // same as window.setInterval(count, 1000);
    // 
}
