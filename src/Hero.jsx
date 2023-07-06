import heroImg2 from "./assets/hero2.svg"


const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-center">
        <div className="hero-title">
            <h1>Contentful CMS</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit adipisci unde voluptas id perferendis delectus nemo voluptate velit magnam. Repudiandae tempora ducimus animi hic nostrum, ipsam provident! Nihil, labore quidem.
            </p>
        </div>
        <div className="img-container">
            <img src={heroImg2} alt="" className='img' />
        </div>
      </div>
    </section>
  )
}

export default Hero
