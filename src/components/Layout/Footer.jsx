import pbw from '../../assets/pbw.jpg'

export default function Footer() {
    return (
        <footer className="w-full py-6 bg-white flex justify-center items-center">
            <div className="flex flex-wrap items-center justify-center text-[15px] text-gray-600 font-sans">
                <span>
                    Copyright &copy; <span className="font-semibold text-gray-800">Concretions.net</span>{new Date().getFullYear()} | Powered by Your Company
                </span>

                {/* CSS Rebuilt Logo */}
                <a
                    href="https://premiumbusinesswebsites.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-col items-center justify-center ml-1.5 align-middle hover:opacity-80 transition-opacity"
                    aria-label="Premium Business Websites"
                >
                    <img src={pbw} alt="" className="w-30 bg-gray-800 rounded-[5px]" />
                </a>
                <span className="ml-[2px] text-gray-600">.</span>
            </div>
        </footer>
    )
}