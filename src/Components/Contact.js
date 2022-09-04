const Contact = () => {
    return (
        <section className="contact">
 		 <div className="submission">
            <form action="#" className="">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name">
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Email">
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Subject">
              </div>
              <div className="form-group">
                <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
              </div>
              <div className="form-group">
                <input type="submit" value="Send Message" className="">
              </div>
            </form>
          </div>

          <div className="map">
          	<div id="map">
          		<img src="images/map.png" alt="map">
          	</div>
          </div>

      </div>
    </section>
    )
}

export default Contact
