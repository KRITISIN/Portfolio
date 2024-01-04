import './Navbar.css'

function Navbar(){
    return(
        <div className='nav'>
            <div className="nav_div"><h1 className='h11'>KS</h1></div>
            <div className="nav_div">Home</div>
            <div className="nav_div">About</div>
            <div className="nav_div">Contact</div>
            <div className="nav_div"><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-linkedin"></i><i class="fa-brands fa-facebook"></i></div>
        </div>
    )

}export default Navbar