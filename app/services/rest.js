let pendingRequests = 0;

function toQueryString(obj) {
    let parts = [],
        i;
    for (i in obj) {
        if (obj.hasOwnProperty(i) && obj[i]) {
            parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
        }
    }
    return parts.join("&");
}

function request(obj) {

    return new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();
        let link = '';
        let data;

        if (obj.queryParams) {
            obj.url += '?' + toQueryString(obj.queryParams);
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                pendingRequests--;
                if (pendingRequests === 0) {
                    document.dispatchEvent(new Event('stopWaiting'));
                }
                if (xhr.status > 199 && xhr.status < 300) {
                    let d = [];
                    d.push(xhr.responseText);
                    if(xhr.getResponseHeader('link')) {
                        d.push(xhr.getResponseHeader('link'));
                    }
                    resolve(d ? d : undefined);
                } else {
                    reject(xhr.responseText);
                }
            }
        };

        xhr.open(obj.method, obj.url, true);
        if(obj.contentType) {
            xhr.setRequestHeader("Content-Type", obj.contentType);
        }

        if(obj.accept) {
            xhr.setRequestHeader("Accept", obj.accept);
        }

        xhr.send(obj.data ? JSON.stringify(obj.data) : undefined);
        pendingRequests++;
        if (pendingRequests === 1) {
            document.dispatchEvent(new Event('startWaiting'));
        }

        //xhr.onreadystatechange = function () {
            //if (xhr.readyState === 4 || xhr.readyState === 3) {
                //if (xhr.status > 199 && xhr.status < 300) {
                    //if(xhr.responseText !== "") {
                        //resolve(xhr.responseText ? JSON.parse(xhr.responseText) : undefined);
                    //}
                //} 
            //}
        //};

        //xhr.timeout = 3000;
        //xhr.ontimeout = function () {
            //let r = {};
            //r.errorMessage = "Task time out after 3.00 seconds";
            //resolve(r);
        //}

        //xhr.open(obj.method, obj.url, true);
        //if(obj.contentType)
            //xhr.setRequestHeader("Content-Type", obj.contentType);
            

        //xhr.send(obj.data ? JSON.stringify(obj.data) : undefined);
    });

}

//export let get = (url, needToken) => request({method: "GET", url, needToken});
export let get = async(url, queryParams) => request({method: "GET", url, queryParams});

export let getHTML = async(url, queryParams) => request({method: "GET", accept: "application/vnd.github.VERSION.html", url, queryParams});


export let post = (url, data) => request({method: "POST", contentType: "application/json", url, data});

export let put = (url, data) => request({method: "PUT", contentType: "application/json", url, data});

export let del = (url) => request({method: "DELETE", url});
