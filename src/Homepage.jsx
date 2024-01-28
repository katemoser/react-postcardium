
/** Homepage renders welcome message */
function Homepage() {

    return (
      <div className="Homepage mx-auto mx-auto mt-5" >
        <h1>Welcome to Postcardium</h1>
        <div className="">
          <p>This is some text to see what it would look like on the page</p>
          <div className="" >
            <button type="button" className="btn btn-primary">
              Check it out!
            </button>
            <button type="button" className="btn btn-outline-secondary">
              Make your own!
            </button>
          </div>
        </div>
      </div>
    )
  }

  export default Homepage