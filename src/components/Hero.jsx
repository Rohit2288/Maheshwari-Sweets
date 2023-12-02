import styles from "./Hero.module.css";

const Hero = () => {
    return (
    //     <div className={styles.Hero}>
    //         <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
    //   <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
    //     <h1 class="display-4 fw-bold lh-1 text-body-emphasis">Wide Variety of Products to choose from</h1>
    //     <p className="lead">Making Every Occasion Memorable with a Personal Touch</p>
    //     <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
    //       <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
    //     </div>
    //   </div>
    // </div>
    //     </div>

    <div className={styles.Hero}>
      <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
       
      </div>
      <div class=" col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3 ">Wide Variety of Products to choose from</h1>
        <p class="lead ">
        At Maheshwari Sweets, we believe in creating moments of joy through the artistry of sweetness. Nestled in the heart of Navlakha Indore our sweet haven is a delightful destination.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Explore</button>
        </div>
      </div>
    </div>
  </div>
    </div>
    );
}

export default Hero;