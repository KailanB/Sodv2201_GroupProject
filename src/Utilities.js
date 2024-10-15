



export const GetCookieByName = (name) =>
{
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieValues = decodedCookie.split(";");
    let cookieVal = '';
    for (let i = 0; i < cookieValues.length ; i++)
    {
        
        let c = cookieValues[i];
        // remove any whitespace
        while (c.charAt(0) === ' ')
        {
            c = c.substring(1);
            
        }
        // get index of name 
        if (c.indexOf(name) === 0)
        {
            // return cookie by making a substring after name=
            cookieVal = c.substring(name.length, c.length);
        }
        

    }
    return cookieVal;
};

        
        
        // myEmail = decodedCookie.substring(cookieName.length);
        // alert(myEmail);
        