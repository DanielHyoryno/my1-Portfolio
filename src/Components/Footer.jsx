

const Footer = () => {
    return(
        <div id="Footer" className="py-4 bg-gray-900  text-white text-center lg:px-36">
            <div className="p-4 py-6 lg:py-8 md:flex md:justify-between">

                <div className="mb-6 md:mb-0">
                    <a className="flex justify-center items-center" href="">
                        <span className=" text-2xl font-semibold whitespace-normal">Portofolio</span></a>
                </div>

                <div className="flex gap-5 my-2 justify-center">
                    <a className="hover:underline" href="">Github</a>
                    <a className="hover:underline" href="">Discord</a>
                    <a className="hover:underline" href="">LinkedIn</a>
                </div>
            </div>
            <hr />
            <span>&copy; Daniel Hyoryno Thenaka @2024</span>
        </div>
    );
}

export default Footer;