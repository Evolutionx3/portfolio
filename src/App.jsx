import './App.css'

function App() {

  return (
    <div className="App container max-w-screen-lg mx-auto">
      <nav className='nav mx-auto'>
        <div class="mx-auto py-6 max-w-7xl flex justify-between items-center">
          <div class="flex items-center">
            <a a href="#" class="text-white font-semibold text-lg">dm<span className='text-red'>.</span></a>
          </div>
          <div class="hidden lg:flex lg:items-center lg:w-auto">
           <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Link 1</a>
            <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Link 2</a>
            <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Link 3</a>
          </div>
        </div>
      </nav>
      <div className='container mx-auto'>
        <div className='min-h-screen flex justify-center flex-col'>
          <h2 className='text-lg tracking-wider text-red'>Hi, my name is</h2>
          <h2 className='text-7xl font-bold tracking-wide leading-tight text-lightGray'>Dawid Malec.</h2>
          <h3 className='text-7xl font-bold tracking-wide text-gray mb-6'>I create digital experiences.</h3>
          <p className='text-base text-gray leading-6 max-w-screen-md mb-6'>I am a front-end developer with a focus on building user-friendly websites and applications. I have a passion for creating seamless digital experiences and enjoy designing webpages as well. Currently, I am expanding my skills in React.js to build more dynamic applications. My goal is to create exceptional digital products that are visually appealing, accessible, and intuitive to use.</p>
          <div className='flex gap-x-4'>
            <button className='rounded-lg duration-300 bg-red hover:bg-redDark   py-3 px-6'>View my job</button>
            <button className='py-3 px-6 relative duration-300 hover:text-gray'>Get in touch ➜</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
