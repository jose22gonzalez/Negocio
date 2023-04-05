

const Footer = () => {

    return (
        <footer className="bg-gray-800 py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* <div className="text-gray-400 text-sm">&copy; 2023 Mi Empresa, Inc. Todos los derechos reservados.</div> */}
                <div className="flex items-center">
                    <div className="mr-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>
                    <div className="mr-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                    <div className="mr-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    <div>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer