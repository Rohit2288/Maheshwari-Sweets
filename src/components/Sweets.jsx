import styles from "./Sweets.module.css";


import kajukatli from "../assets/kajukatli.jpg"
import gulabjamun from "../assets/gulabjamun2.jpg"
import rasmalai from "../assets/rasmalai.jpg"
import rasgulla from "../assets/rasgulla.jpg"
import rabri from "../assets/rabri2.jpg"
import jalebi from "../assets/jalebi2.jpg"
import gajarhalwa from "../assets/gajarhalwa.jpg"
import motichur from "../assets/Motichur.jpg"
import bengalisweet from "../assets/bengalisweets.jpg"
import soanpapdi from "../assets/soanpapdi.jpg"
import kesarpeda from "../assets/kesarpeda.jpg"
import dryfruitladoo from "../assets/DryFruitLadoo.jpg"

const Sweets = () =>{
    return(
        <div className={styles.Sweet}>
            <div class="album py-5 ">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <img className={styles.SweetImg} src={kajukatli}/>
            <div class="card-body">
            <h3 class="card-heading">Kaju Katli </h3>
                <h5 class="card-heading">
                Price:
                </h5>
              <p class="card-text">Shelf-life:10 Days</p>
              
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Add To Cart</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img className={styles.SweetImg} src={jalebi} alt="" />
            <div class="card-body">
            <h3 class="card-heading">Jalebi </h3>
                <h5 class="card-heading">
                Price:
                </h5>
              <p class="card-text">Shelf-life:2 Days</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img className={styles.SweetImg} src={rasmalai} alt="" />
            <div class="card-body">
            <h3 class="card-heading">RasMalai </h3>
                <h5 class="card-heading">
                Price:
                </h5>
              <p class="card-text">Shelf-life:2 Days</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img className={styles.SweetImg} src={gajarhalwa} alt="" />
            <div class="card-body">
            <h3 class="card-heading">Gajar Halwa </h3>
                <h5 class="card-heading">
                Price:
                </h5>
              <p class="card-text">Shelf-life:4 Days</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img className={styles.SweetImg} src={motichur} alt="" />
            <div class="card-body">
            <h3 class="card-heading">MotiChur Ladoo </h3>
                <h5 class="card-heading">
                Price:
                </h5>
              <p class="card-text">Shelf-life:3 Days</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img className={styles.SweetImg} src={rabri} alt="" />
            <div class="card-body">
            <h3 class="card-heading">Rabri </h3>
                <h5 class="card-heading">
                Price:
                </h5>
              <p class="card-text">Shelf-life:2 Days</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img className={styles.SweetImg} src={rasgulla} alt="" />
            <div class="card-body">
            <h3 class="card-heading">Rasgulla </h3>
                <h5 class="card-heading">
                Price:
                </h5>
              <p class="card-text">Shelf-life:2 Days</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img className={styles.SweetImg} src={gulabjamun} alt="" />
            <div class="card-body">
            <h3 class="card-heading">Gulab Jamun </h3>
                <h5 class="card-heading">
                Price:
                </h5>
              <p class="card-text">Shelf-life:2 Days</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img className={styles.SweetImg} src={bengalisweet} alt="" />
            <div class="card-body">
            <h3 class="card-heading">Bengali Sweets </h3>
                <h5 class="card-heading">
                Price:
                </h5>
              <p class="card-text">Shelf-life:1 Day</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img className={styles.SweetImg} src={kesarpeda} alt="" />
            <div class="card-body">
            <h3 class="card-heading">Kesar Peda </h3>
                <h5 class="card-heading">
                Price:
                </h5>
              <p class="card-text">Shelf-life:3 Days</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card shadow-sm">
            <img className={styles.SweetImg} src={soanpapdi} alt="" />
            <div class="card-body">
            <h3 class="card-heading">Soan Papdi </h3>
                <h5 class="card-heading">
                Price:
                </h5>
              <p class="card-text">Shelf-life:10 Days</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card shadow-sm">
            <img className={styles.SweetImg} src={dryfruitladoo} alt="" />
            <div class="card-body">
            <h3 class="card-heading">Dry Fruit Ladoo </h3>
                <h5 class="card-heading">
                Price:
                </h5>
              <p class="card-text">Shelf-life:15 Days</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
      
 



        </div>
    );
}

export default Sweets;