

export default function Footer() {
    return (

        <footer className='border-t-2 border-gray-500 flex items-center justify-between  m-2 text-white min-w-[90%]'>
            <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-slate-100">D</div>
                        <div>
                            <div className="font-semibold text-slate-100">DevTrack</div>
                            <div className="text-xs text-slate-400">© {new Date().getFullYear()} DevTrack, Inc</div>
                        </div>
                    </div>
            <div className="flex items-baseline justify-center">
<div className="text-slate-300 mt-1">Connect Me:<a 
                            href="https://paramjitsaikia001.github.io/PRMJTS/"
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold text-cyan-300 transition-all duration-400 cursor-pointer hover:underline hover:bg-slate-100/20 hover:px-2 hover:py-1">Paramjit Saikia</a></div>
                         
            </div>
        </footer>
    )
}