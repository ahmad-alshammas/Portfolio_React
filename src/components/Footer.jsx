function Footer(){
    return(
        <>
                {/* <!-- section eight: contact me--> */}
         <footer className="footersection" id="page-contactme">
            <div className="footercontent">
                <h2><span>Ahmad</span> Azzam</h2>
                <p>If you would like to work with me, you can contact me by filling out my form.</p>
                <p className="end"> &copy; CopyRight By Ahmad Azzam</p>
            </div>
            <div className="formcontactus">
                <fieldset>
                    <legend>Contact Me</legend>
                <form action="submit" method="post">
                    <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="ahmad azzam" />
                    </div>

                    <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="ahmad....@" />
                    </div>

                    <div className="textarea-padding">
                    <textarea name="contact" id="contact" cols="20" rows="5" placeholder="write message"></textarea>
                    </div>
                    <div className="textarea-padding">
                        <input type="submit" className="btn-submit" />
                    </div>
                </form>
            </fieldset>
            </div>
         </footer>  
        </>
    )
}


export default Footer;