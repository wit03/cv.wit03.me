import React from 'react'

const Profile: React.FC = () => {
  return (
    <section className='text-gray-700 body-font dark:text-gray-400 dark:bg-gray-900'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center min-h-screen'>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-full shadow-2xl'>
          <picture>
            <source
              srcSet={require(`public/img/profile.jpg?webp`)}
              type='image/webp'
            />
            <source
              srcSet={require(`public/img/profile.jpg`)}
              type='image/jpeg'
            />
            <img
              className='object-cover object-center rounded-full h-600 w-600'
              src={require(`public/img/profile.jpg`)}
              loading='lazy'
              alt='content'
            />
          </picture>
        </div>
        <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white'>
            Hi, I'm wit03
            <br className='hidden lg:inline-block'>Hi I'm wit03</br>
          </h1>
          <p className='mb-8 leading-relaxed'>
            An ordinary 16 years old software developer. I started coding since
            I was 11 from building minecraft plug-in. Right now I'm passioness
            with #WebDevelopment #IoT #Microcontroller and #MachineLearning
          </p>
          <div className='flex justify-center'>
            <button className='rounded-full inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              Learn More
            </button>
            <button className='rounded-full ml-4 inline-flex text-gray-700 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg'>
              PDF CV
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
