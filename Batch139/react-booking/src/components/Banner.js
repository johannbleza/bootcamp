

export default function Banner(){

    return(
        <div className="container-fluid">
            <div className="row justify-content-center mt-2">
                <div className="col-10 col-md-8">
                    {/* jumbotron */}
                    <div className="jumbotron">
                        <h1>Welcome to React-Booking App!</h1>
                        <p>Opportunities for everyone, everywhere!</p>
                        <button className="btn btn-primary">Enroll</button>
                    </div>
                </div>
            </div>
        </div>
    )
}