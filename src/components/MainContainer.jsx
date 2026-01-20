function MainContainer({children}){
    return (
        <main className="flex flex-1 bg-white/60 mt-4 overflow-y-auto">
            {children}
        </main>
    )
}

export default MainContainer;