const certificate = {

  content: 
    `<!DOCTYPE html>` +
    `<html lang="en">`  +
      `<head>` +
        `<meta charset="UTF-8">` +
        `<meta name="viewport" content="width=device-width, initial-scale=1.0">` +
        `<meta http-equiv="X-UA-Compatible" content="ie=edge">` +
        `<title>Study Certificate</title>` +
        `<style>` +
          `body {` +
            `font-family: 'Open Sans','Times New Roman';` +
          `}` +
          `p {` +
            `line-height: 1.6rem;` +
          `}` +
          `.hide {` +
            `display: none !important;` +
          `}` +
          `.btn {` +
            `width: 100px;` +
            `height: 2rem;` +
            `line-height: 2rem;` +
            `box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.4);` +
            `background-color: #2196f3;` +
            `display: inline-block;` +
            `color: white;` +
            `letter-spacing: 1.5px;` +
            `cursor: pointer;` +
          `}` +
          `@media print {` +
            `.no-print, .no-print * {` +
              `display: none !important;` +
            `}` +
            `html, page {` +
              `width: 210mm;` +
              `height: 297mm;` +
            `}` +
          `}` +
          `@page {` +
            `size: A4;` +
          `}` +
        `</style>` +
      `</head>` +
      `<body>` +
        `<h1 style="text-align:center;text-decoration:underline;">STUDY CERTIFICATE</h1>` +
        `<h2 style="text-align:center;text-decoration:underline;">S.M.A.P. SCHOOL, GANDHI NAGAR, CHIRALA</h2>` +
        `<h3 style="text-align:center;text-decoration:underline;">R.C.No. 3168/C4/85, Dated: 09-09-1985</h3>` +
        `<p style="text-indent: 2rem;">Registration Number: <b class='reg-number'></b></p>` +
        `<p style="text-indent: 2rem; text-align: justify; padding: 2rem; line-spacing">` +
          `This is to certify that Mr. / Ms. <b class="name"></b>, ` +
          `S/O / D/O <b class="parent-name"></b> has studied in our institution ` +
          `from <b class="from-class"></b> standard to <b class="to-class"></b> standard ` +
          `during the academic years from <b class="joining-date"></b> to <b class="tc-issue-date"></b>.` +
        `</p>` +
        `<p style="padding-left: 2rem;">` +
          `Place: Chirala<br />` +
          `Date: ${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()} <br />` +
        `</p>` +
        `<p style="text-align: right; padding-right: 2rem;">` +
          `Signature of the H.M.` +
        `</p>` +
        `<div style="text-align:center;">` +
          `<div onclick="window.print()" class="btn no-print"> Print </div>` +
        `</div>` +
      `</body>` +
    `</html>`
};

export default certificate;