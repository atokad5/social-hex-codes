let styles = `
<style>

  dialog {
    width: 800px;
  }

  .flex-parent {
    height: 500px !important;
    overflow-y: scroll !important;
  }

  .box {
    height: 40px !important;
    overflow: hidden;
    width: 40px;
    border-radius: 100px;
    margin-bottom: 10px;
  }

  .color-item {
    width: 100%;
  }


  .available-colors {
    width: 100% !important;
  }
  
  .color-nest {
    display: flex;
    flex-wrap: wrap;
  }

  .color-item {
    width: 24.5%;
    margin-right: 0.5%;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    padding: 1em;
  }

  label {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    margin-left: 5px;
  }

  label img {
    position: absolute;
    top: 20%;
    left: 10%;
    transform: translate(-50%, -50%);
    display: none;
    width: 80%;
  }

  .color-swatch {
    position: absolute; left: -110%;
  }

  p {
    font-size: 16px;
    margin-left: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left !important;
  }

  .text-hex {
    font-size: 16px;
  }
  .social-form {
    padding: 14px 0px;
  }
  .button-parent {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  .select-colors {
    padding: 15px 0px;
    width: 180px;
    color: white;
    cursor: pointer;
    background: green;
    font-size: 20px;
    text-align: center;
  }
  
</style>

`;

module.exports = styles 