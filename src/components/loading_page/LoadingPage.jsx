const LoadingPage = ({text}) => {
    return (
        <div className="fixed inset-0 bg-black/40 flex flex-col items-center justify-center">
            <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            <div className="font-roboto-slab text-3xl text-white mt-5">{text}</div>
        </div>
    )
}

export default LoadingPage;