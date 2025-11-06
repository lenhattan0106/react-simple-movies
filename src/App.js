function App() {
  return (
    <>
      <header className="flex items-center justify-center py-10 mb-10 text-white header gap-x-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[500px] page-container mb-20">
        <div className="relative w-full h-full rounded-lg">
          <div className="absolute inset-0 overlay bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e9c02b45-78f5-4244-a527-9c7ab905eab0/d52kxyp-ad74fb13-2e06-459c-9d26-419d20c3dedd.jpg/v1/fill/w_900,h_563,q_75,strp/the_avengers_wallpaper_by_devanthenoob_d52kxyp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6IlwvZlwvZTljMDJiNDUtNzhmNS00MjQ0LWE1MjctOWM3YWI5MDVlYWIwXC9kNTJreHlwLWFkNzRmYjEzLTJlMDYtNDU5Yy05ZDI2LTQxOWQyMGMzZGVkZC5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.u6wXuhN1nXBmpUVVDurpeNLKGj3aYGI02LNUJ0gt9BQ"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute w-full mb-10 text-white content left-5 bottom-5">
             <h2 className="mb-5 text-3xl font-bold">Avenger: Endgame</h2>
             <div className="flex items-center mb-8 gap-x-3">
               <span className="px-4 py-2 border border-white rounded-md">Adventure</span>
               <span className="px-4 py-2 border border-white rounded-md">Adventure</span>
                <span className="px-4 py-2 border border-white rounded-md">Adventure</span>
             </div>
             <button className="px-6 py-3 font-medium rounded-lg bg-primary">Watch Now</button>
          </div>
        </div>
      </section>
      <section className="pb-20 movies-layout page-container">
         <h2 className="mb-10 text-3xl font-bold text-white capitalize">Now Playing</h2>
         <div className="grid grid-cols-4 gap-10 movies-list">
             <div className="p-3 text-white rounded-lg movies-cart bg-slate-800">
                <img src="https://tse1.mm.bing.net/th/id/OIP.8-3tz7AdzJHIZy75mulCFgHaF7?rs=1&pid=ImgDetMain&o=7&rm=3" className="w-full h-[250px] object-cover rounded-lg mb-5" alt="" />
                 <h3 className="mb-3 text-xl font-bold ">Spider man: Homecoming</h3>
                 <div className="flex items-center justify-between mb-10 text-sm opacity-50">
                   <span>2017</span>
                   <span>7.4</span>
                 </div>
                 <button className="w-full px-6 py-3 font-medium capitalize rounded-lg bg-primary">Watch Now</button>
             </div>
         </div>
      </section>
        <section className="pb-20 movies-layout page-container">
         <h2 className="mb-10 text-3xl font-bold text-white capitalize">Top Rated</h2>
         <div className="grid grid-cols-4 gap-10 movies-list">
             <div className="p-3 text-white rounded-lg movies-cart bg-slate-800">
                <img src="https://tse1.mm.bing.net/th/id/OIP.8-3tz7AdzJHIZy75mulCFgHaF7?rs=1&pid=ImgDetMain&o=7&rm=3" className="w-full h-[250px] object-cover rounded-lg mb-5" alt="" />
                 <h3 className="mb-3 text-xl font-bold ">Spider man: Homecoming</h3>
                 <div className="flex items-center justify-between mb-10 text-sm opacity-50">
                   <span>2017</span>
                   <span>7.4</span>
                 </div>
                 <button className="w-full px-6 py-3 font-medium capitalize rounded-lg bg-primary">Watch Now</button>
             </div>
         </div>
      </section>
        <section className="pb-20 movies-layout page-container">
         <h2 className="mb-10 text-3xl font-bold text-white capitalize">Trending</h2>
         <div className="grid grid-cols-4 gap-10 movies-list">
             <div className="p-3 text-white rounded-lg movies-cart bg-slate-800">
                <img src="https://tse1.mm.bing.net/th/id/OIP.8-3tz7AdzJHIZy75mulCFgHaF7?rs=1&pid=ImgDetMain&o=7&rm=3" className="w-full h-[250px] object-cover rounded-lg mb-5" alt="" />
                 <h3 className="mb-3 text-xl font-bold ">Spider man: Homecoming</h3>
                 <div className="flex items-center justify-between mb-10 text-sm opacity-50">
                   <span>2017</span>
                   <span>7.4</span>
                 </div>
                 <button className="w-full px-6 py-3 font-medium capitalize rounded-lg bg-primary">Watch Now</button>
             </div>
         </div>
      </section>
    </>
  );
}

export default App;
