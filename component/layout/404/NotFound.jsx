
export default function NotFound() {
    return (
        <section>
            <div className="container py-20">
                <div className="text-center">
                    <img src="/images/404.svg" alt="" className="inline-block mb-7" />
                    <h2 className="text-2xl font-bold mb-8">Page not found</h2>
                    <a href="/" className="btn btn--blackborder">
                        Go to Homepage
                        <svg
                            className="btn__arrow"
                            width="14"
                            height="9"
                            fill="#000"
                            viewBox="0 0 14 9"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M13.794 3.862L10.119.205a.703.703 0 00-.992.997l2.467 2.454H.704a.703.703 0 100 1.406h10.89L9.127 7.518a.703.703 0 10.992.997l3.674-3.656a.705.705 0 000-.996z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
