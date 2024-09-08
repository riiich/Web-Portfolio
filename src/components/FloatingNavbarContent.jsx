const FloatingNavbarContent = () => {
  return (
    <div className="flex justify-center gap-4">
        <a href="#about" className="border border-slate-400 rounded-full px-2 hover:bg-slate-700">About</a>
        <a href="#tech" className="border border-slate-400 rounded-full px-2">Technologies</a>
        <a href="#projects" className="border border-slate-400 rounded-full px-2">Projects</a>
        <a href="#experience" className="border border-slate-400 rounded-full px-2">Experience</a>
        <a href="#contact" className="border border-slate-400 rounded-full px-2">Contact Me</a>
    </div>
  )
}   

export default FloatingNavbarContent