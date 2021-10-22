const { server_url: base_url } = process.env;
const newsLetter = (data) => {
  const { email, content, title, barner } = data;

  return `  
  <div
  class="container__cover"
  style="
    background-color: #150f40;
    max-width: 600px;
    min-height: 200px;
    margin: auto;
    display: flex;
    flex-direction: column;
  "
>
  <div class="logo__wrap" style="width: 200px; margin: 48px auto">
    <img src="${base_url}mailassets/afen.png" alt="" width="100%" />
  </div>
  <div
    class="content__wrap"
    style="
      border-radius: 5px;
      background-color: white;
      padding: 18px;
      margin: 38px;
      margin-top: 0;
    "
  >
    ${
      barner
        ? `
        <div
      class="image__container"
      style="
        margin: auto;
        min-height: 300px;
        background-color: #d2b12a;
        border-radius: 5px;
      "
    >
      <img src="${barner}" alt="" width="100%" />
    </div>`
        : ""
    }
    <h1
      style="
        color: #595959;
        font-size: 36px;
        text-transform: uppercase;
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
          sans-serif;
      "
    >
      ${title}
    </h1>
    <div
      class="message"
      style="
        font-size: 22px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
          sans-serif;
        font-weight: 300;
        color: #595959;
      "
    >
      ${content}
    </div>
  </div>
  <div
    class="social__links"
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 39px auto;
    "
  >
    <a
      href="mailto:afen@afengroup.com?subject=Reply to afen"
      target="__blank"
      style="
        width: 48px;
        padding: 5px;
        border: 1px solid #ffe260;
        border-radius: 5px;
        margin: 0 36px;
        display: block;
      "
    >
      <img src="${base_url}mailassets/mail.png" alt="" width="100%" />
    </a>
    <a
      href="https://twitter.com/afenblockchain?s=21"
      target="__blank"
      style="
        width: 48px;
        padding: 5px;
        border: 1px solid #ffe260;
        border-radius: 5px;
        margin: 0 36px;
        display: block;
      "
    >
      <img src="${base_url}mailassets/twitter.png" alt="" width="100%" />
    </a>
    <a
      href="https://instagram.com/afenblockchain?utm_medium=copy_link"
      target="__blank"
      style="
        width: 48px;
        padding: 5px;
        border: 1px solid #ffe260;
        border-radius: 5px;
        margin: 0 36px;
        display: block;
      "
    >
      <img src="${base_url}mailassets/instagram.png" alt="" width="100%" />
    </a>
  </div>
  <div class="why__receive">
    <p
      style="
        color: white;
        font-size: 22px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
          sans-serif;
        text-align: center;
      "
    >
      You are receiving this mail because you subscribed to AFEN Newsletter,
      To stop receiving mails from us,
      <a
        href="https://blogserver.afengroup.com/unsubscribe"
        style="color: #ffe260; text-decoration: none"
        target="__blank"
        >Unsubscribe</a
      >
    </p>
    <p
      style="
        color: white;
        font-size: 22px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
          sans-serif;
        text-align: center;
        font-weight: 200;

        padding-bottom: 20px;
      "
    >
      All rights reserved. Afen Group
    </p>
  </div>
</div>`;
};

module.exports = {
  newsLetter,
};
