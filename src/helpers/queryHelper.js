class queryHelper {
    static getParameterByName(name, url) {
        //Not my code. Thank you internet!
        if (!url) 
            url = window.location.href;
        name = name.replace(/[[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) 
            return null;
        if (!results[2]) 
            return null;
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
}

//This layer is where you really want to make sure you have unit tests.

export default queryHelper;