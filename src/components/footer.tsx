import footerimg from '../assets/Group-footer.jpg';
function Footer () {
    return (
        <footer>
            <div className="line mt-1 mb-1 w-full bg-gray-600" style={{height: "1px"}}></div>
            <img src={footerimg} alt="" />
        </footer>
    )
}
export default Footer;