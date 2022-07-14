import Hero from "./hero";

const Home=()=>{
    return(
        <>
        <Hero text="welcome to Home page"/>
        
        <div className="ccontainer">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 my-5">
                    <p className="Lead">
                    “Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data. Often, developers use third-party services to generate “Lorem ipsum” text, but now you can do that right in your editor. Just expand lorem or lipsum abbreviations to get the following snippet:
                    </p>
                </div>
            </div>
        </div>
        </>
        )
}

export default Home;