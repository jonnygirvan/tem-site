<template>
  <section id="certsContainer">
    <div class="certsInner">
      <div class="engineeringContainer">
        <h2>Engineering</h2>
        <p>Our skilled engineers make use of the following software</p>
        <div class="softwareContainer">
          <a href="https://www.autodesk.com/products/autocad/overview" target="_blank" class="software">
            <img src="/img/software/autocad.png" alt="Autocad icon">
            <p>AutoCad</p>
          </a>
          <a href="http://www.smartcamcnc.com/index.php" target="_blank" class="software">
            <img src="/img/software/smartCAM.png" alt="SmartCAM icon">
            <p>SmartCAM</p>
          </a>
          <a href="https://www.3dsystems.com/software/cimatron" target="_blank" class="software">
            <img src="/img/software/cimatron.png" alt="Cimatron icon">
            <p>Cimatron</p>
          </a>
          <a href="https://bobcad.com/" target="_blank" class="software">
            <img src="/img/software/bobcad.png" alt="BobCAD icon">
            <p>BobCAD</p>
          </a>
        </div>
      </div>
      <div class="qualityContainer">
        <h2>Quality Control</h2>
        <p>TEM INC. strives is committed to providing high quality services</p>
        <div class="certContainer">
          <a href="/certs/TEM-INC-AS9100-CERT.pdf" target="_blank" class="cert">
            <img src="/img/certs/isoqar.png" alt="Isoqar icon">
            <p>ISO 9001:2015 /AS9100</p>
          </a>
          <a href="/certs/GE-Aviation-GT193.pdf" target="_blank" class="cert">
            <img src="/img/certs/ge_aviation.png" alt="GE aviation icon">
            <p>GE Aviation GT 193</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Certs',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #certsContainer {
    padding: 80px 0;
    background: rgb(13,39,71);
    background: linear-gradient(331deg, rgb(19, 79, 152) 4%, rgb(17, 19, 78) 50%, rgba(5,3,34,1) 79%);
    text-align: left;
  }

  .certsInner {
    position: relative;
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    color: #fff;
  }

  .certsInner h2 {
    position: relative;
    margin-bottom: 24px;
  }

  .certsInner h2:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 12px;
    background: rgb(242, 97, 1);
    z-index: 0;
    transform: skewX(-20deg);
    top: 0;
    left: -28px;
    border-radius: 2px;
  }

  .engineeringContainer, .qualityContainer {
    position: relative;
    flex: 0 0 50%;
  }

  .softwareContainer, .certContainer {
    display: flex;
    flex-wrap: wrap;
    margin-top: 24px;
  }

  .software, .cert {
    color: #fff;
    text-decoration: none;
    transition: 200ms ease-out;
    display: flex;
    margin: 12px;
    padding: 16px;
    flex: 0 0 calc(50% - 24px);
    text-align: center;
    position: relative;
    transition: 200ms ease-out;
    border-radius: 4px;
    font-size: 18px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  .software:hover, .cert:hover {
    transform: translateY(-12px);
    background: rgba(255,255,255,0.2);
    text-decoration: underline;
    color: rgb(242, 97, 1);
  }

  .software img, .cert img {
    position: relative;
    max-height: 64px;
    max-width: 100%;
    margin-bottom: 24px;
  }

  .sofware:visited, .cert:visited {
    color: #fff;
  }

  .softwareContainer {
    padding-right: 48px;
  }

  .qualityContainer {
    padding-left: 48px;
  }
</style>
