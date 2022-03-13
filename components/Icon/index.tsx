import React from "react";

type IconsType = {
    [key: string]: string;
};

const icons: IconsType = {
    bonding:
        "M18 12a1 1 0 0 1 1 1h0v3a2 2 0 0 1 2 2h0v1a2 2 0 0 1-2 2h0H5a2 2 0 0 1-2-2h0v-1a2 2 0 0 1 2-2h0v-3a1 1 0 1 1 2 0h0v3h2v-3a1 1 0 1 1 2 0h0v3h2v-3a1 1 0 1 1 2 0h0v3h2v-3a1 1 0 0 1 1-1zm-5.345-8.894l7 2.427A2 2 0 0 1 21 7.423V8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-.577a2 2 0 0 1 1.345-1.89l7-2.427a2 2 0 0 1 1.31 0z",
    "chevron-down":
        "M6.293 8.793a1 1 0 0 1 1.32-.083l.094.083L12 13.085l4.293-4.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094-5 5a1 1 0 0 1-1.32.083l-.094-.083-5-5a1 1 0 0 1 0-1.414z",
    close: "M6.446 5.397l.084.073L12 10.939l5.47-5.469a.75.75 0 0 1 1.133.977l-.073.084L13.061 12l5.469 5.47a.75.75 0 0 1-.977 1.133l-.084-.073L12 13.061 6.53 18.53a.75.75 0 0 1-1.133-.977l.073-.084L10.939 12 5.47 6.53a.75.75 0 0 1 .977-1.133z",
    "credit-card":
        "M22 16a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4h20zM18 4a4 4 0 0 1 4 4v6H2V8a4 4 0 0 1 4-4h12zM7 7H6a1 1 0 1 0 0 2h0 1a1 1 0 1 0 0-2h0zm11 0h-6a1 1 0 1 0 0 2h0 6a1 1 0 1 0 0-2h0z",
    discord:
        "M9.825 10.068c-.334.027-.646.18-.873.427a1.34 1.34 0 0 0-.353.906c0 .336.126.659.353.905a1.34 1.34 0 0 0 .873.427c.168-.006.334-.046.487-.116s.29-.171.405-.294a1.26 1.26 0 0 0 .26-.427 1.28 1.28 0 0 0 .076-.494 1.27 1.27 0 0 0-1.227-1.332zm4.38 0a1.34 1.34 0 0 0-.771.17c-.234.133-.422.333-.54.575s-.16.513-.122.78.157.514.34.712a1.34 1.34 0 0 0 .682.397 1.33 1.33 0 0 0 .787-.057 1.34 1.34 0 0 0 .618-.491c.152-.222.233-.485.233-.754a1.28 1.28 0 0 0-.334-.921 1.27 1.27 0 0 0-.404-.295 1.28 1.28 0 0 0-.486-.117h-.003zM20.04 0H3.96c-.324.001-.645.065-.944.19a2.46 2.46 0 0 0-.799.537 2.48 2.48 0 0 0-.532.802c-.123.299-.186.621-.185.945v16.221a2.47 2.47 0 0 0 .717 1.747 2.46 2.46 0 0 0 .799.537 2.45 2.45 0 0 0 .944.19h13.608l-.636-2.22 1.536 1.425 1.452 1.344L22.5 24V2.475a2.47 2.47 0 0 0-.184-.945 2.47 2.47 0 0 0-.532-.802 2.47 2.47 0 0 0-.799-.537 2.45 2.45 0 0 0-.944-.19h0zm-4.632 15.675l-.792-.975c.87-.203 1.641-.708 2.175-1.425a6.89 6.89 0 0 1-1.38.708 7.9 7.9 0 0 1-1.74.516c-1.028.189-2.082.185-3.108-.012a10.13 10.13 0 0 1-1.764-.516 7.2 7.2 0 0 1-1.374-.711 3.73 3.73 0 0 0 2.1 1.416l-.804.996a4.35 4.35 0 0 1-3.66-1.824 16.07 16.07 0 0 1 1.725-6.996 5.93 5.93 0 0 1 3.375-1.26l.12.144a8.09 8.09 0 0 0-3.156 1.572l.708-.348a9.01 9.01 0 0 1 2.727-.756 1.16 1.16 0 0 1 .204-.024c.804-.105 1.618-.113 2.424-.024A9.78 9.78 0 0 1 16.8 7.308c-.877-.714-1.895-1.233-2.988-1.524l.168-.192a5.93 5.93 0 0 1 3.375 1.26 16.07 16.07 0 0 1 1.725 6.996 4.38 4.38 0 0 1-1.609 1.369 4.39 4.39 0 0 1-2.063.458z",
    facebook:
        "M9.347 23.25V13.5H6V9h3.347V5.857c0-3.423 2.167-5.107 5.221-5.107 1.463 0 2.72.109 3.086.158v3.577l-2.118.001c-1.661 0-2.036.789-2.036 1.947V9H18l-1.5 4.5h-3v9.75H9.347z",
    instagram:
        "M12 15.8a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0-3.291 5.7A3.8 3.8 0 0 0 12 15.8h0zM16.749.6h-9.5A6.66 6.66 0 0 0 .6 7.251v9.5A6.66 6.66 0 0 0 7.251 23.4h9.5a6.66 6.66 0 0 0 6.649-6.651v-9.5A6.66 6.66 0 0 0 16.749.6zM12 17.7A5.71 5.71 0 0 1 6.3 12 5.71 5.71 0 0 1 12 6.3a5.71 5.71 0 0 1 5.7 5.7 5.71 5.71 0 0 1-5.7 5.7zm6.65-11.4a.95.95 0 0 1 0-1.9.95.95 0 1 1 0 1.9z",
    investor:
        "M10.002 4.006c.549-.061.998.392.998.945h0v7a1 1 0 0 0 1 1h0 7c.552 0 1.006.449.944.998a9 9 0 0 1-5.5 7.317 9 9 0 0 1-9.808-1.951 9 9 0 0 1-1.951-9.808 9 9 0 0 1 7.317-5.5zM13.89 2l.108.006a9 9 0 0 1 5.366 2.581 9 9 0 0 1 1.951 2.92c.325.783.536 1.607.63 2.446.061.549-.392.998-.944.998h0-7a1 1 0 0 1-1-1h0v-7c0-.552.449-1.006.998-.945z",
    lock: "M12 2.25l.405.006.382.018c2.475.161 3.471 1.184 3.811 4.163l.046.462.02.242.033.507.024.539.009.281.013.587.006.647c2.937.751 4.001 2.507 4.001 5.797 0 3.945-1.531 5.685-5.989 6.13h0l-.561.048-.59.036h0l-.621.023-.322.007h0L12 21.75l-.668-.006-.322-.007h0l-.621-.023-.59-.036h0l-.561-.048c-4.458-.445-5.989-2.185-5.989-6.13 0-3.289 1.064-5.045 4-5.796v-.027l.006-.621.013-.587.02-.555.028-.523.017-.25.041-.477c.315-3.155 1.298-4.225 3.835-4.391l.382-.018L12 2.25zm0 8.5l-.622.004-.587.013-.553.022-.264.014h0l-.505.036-.24.022h0l-.458.052c-2.802.364-3.792 1.392-3.984 3.636h0l-.024.365-.013.586h0l.001.201.012.385h0l.024.365c.192 2.244 1.182 3.272 3.984 3.636h0l.458.052.489.042h0l.521.031.553.022.587.013.622.004.622-.004.587-.013.553-.022.264-.014h0l.505-.036.24-.022h0l.458-.052c2.802-.364 3.792-1.392 3.984-3.636h0l.024-.365.007-.19h0l.006-.396-.006-.396-.007-.19h0l-.024-.365c-.192-2.244-1.182-3.272-3.984-3.636h0l-.458-.052-.489-.042h0l-.521-.031-.553-.022-.587-.013L12 10.75zm0 2.5a.75.75 0 0 1 .743.648l.007.102v3a.75.75 0 0 1-1.493.102L11.25 17v-3a.75.75 0 0 1 .75-.75zm.157-9.499h-.313l-.298.007-.142.006-.269.019-.128.013-.242.034-.224.046c-1.007.244-1.462.908-1.656 2.552l-.038.367-.031.399-.024.431-.025.71-.013.79-.002.299.487-.055h0l.561-.048.59-.036h0l.621-.023L12 9.25h0l.338.001.652.011h0l.621.023.59.036h0l.561.048.487.055-.002-.299-.008-.536-.021-.736-.01-.228-.024-.431-.031-.399-.038-.367c-.195-1.644-.65-2.308-1.656-2.552l-.224-.046-.242-.034-.26-.024-.137-.008-.288-.011-.152-.002z",
    partner:
        "M9.996 3.999c.311.002.597.016.875.083a3 3 0 0 1 .867.359c.244.15.455.342.677.561l.998.997h4.732l1.049.03c.395.032.789.104 1.167.296a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167A13.87 13.87 0 0 1 22 9.853v5.985l-.031 1.356c-.032.395-.104.789-.296 1.167a3 3 0 0 1-1.311 1.311c-.378.193-.772.264-1.167.296-.3.024-.651.029-1.049.03H5.854l-1.049-.03c-.395-.032-.789-.104-1.167-.296a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167-.024-.3-.029-.651-.03-1.049V7.853l.03-1.049c.032-.395.104-.789.296-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296a13.84 13.84 0 0 1 1.049-.03h4.143zM12 9a3 3 0 0 0-3 3c0 .675.223 1.298.6 1.8-.971.73-1.6 1.892-1.6 3.2a1 1 0 1 0 2 0 2 2 0 1 1 4 0 1 1 0 1 0 2 0c0-1.309-.628-2.47-1.6-3.2.377-.501.6-1.125.6-1.8a3 3 0 0 0-3-3zm0 2a1 1 0 1 1 0 2 1 1 0 1 1 0-2z",
    reddit: "M24 11.775a2.85 2.85 0 0 0-2.85-2.85c-.675 0-1.35.225-1.8.675-1.725-1.125-3.975-1.8-6.375-1.875L14.25 3.75l3.375.75c.075 1.275 1.125 2.25 2.4 2.25 1.35 0 2.4-1.05 2.4-2.4s-1.05-2.4-2.4-2.4c-.9 0-1.725.525-2.175 1.275l-3.975-.975a.67.67 0 0 0-.75.45L11.55 7.575c-2.55.075-5.025.75-6.9 1.875-.525-.375-1.125-.6-1.8-.6A2.85 2.85 0 0 0 0 11.7c0 .975.525 1.875 1.275 2.4 0 .225-.075.45-.075.675 0 2.025 1.125 3.825 3.225 5.175 2.025 1.35 4.65 2.025 7.5 2.025s5.475-.75 7.5-2.025c2.1-1.35 3.225-3.225 3.225-5.175 0-.225 0-.45-.075-.6.9-.45 1.425-1.35 1.425-2.4zm-3.975-8.55c.6 0 1.125.525 1.125 1.125s-.525 1.125-1.125 1.125S18.9 4.95 18.9 4.35s.525-1.125 1.125-1.125zm-13.2 10.35c0-.9.75-1.65 1.65-1.65s1.65.75 1.65 1.65-.75 1.65-1.65 1.65-1.65-.75-1.65-1.65zm9.15 4.8c-.825.825-2.1 1.275-3.975 1.275-1.8 0-3.075-.375-3.975-1.275-.225-.225-.225-.675 0-.9s.675-.225.9 0c.6.6 1.575.825 3 .825s2.4-.3 3-.825c.225-.225.675-.225.9 0 .375.225.375.6.15.9zm-.375-3.15c-.9 0-1.65-.75-1.65-1.65s.75-1.65 1.65-1.65 1.65.75 1.65 1.65-.75 1.65-1.65 1.65z",
    staking:
        "M5 12l.001.759c.004 1.316.038 2.037.326 2.603a3 3 0 0 0 1.311 1.311c.604.308 1.384.326 2.874.327H9.8h4.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311c.308-.604.326-1.384.327-2.874V12c.988.001 1.506.013 1.908.218a2 2 0 0 1 .874.874c.202.397.217.909.218 1.876V18.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 22 19.92 22 18.8 22H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.187-.367-.214-.831-.217-1.661v-4.494c.004-.83.031-1.294.217-1.661a2 2 0 0 1 .874-.874c.402-.205.92-.217 1.908-.218zm7-5a5 5 0 0 1 5 5 4.98 4.98 0 0 1-1 3.001h0-8A4.98 4.98 0 0 1 7 12a5 5 0 0 1 5-5zm0-5c2.209 0 4 1.741 4 3.889 0 .133-.007.264-.02.393a6.82 6.82 0 0 0-7.96-.003 3.83 3.83 0 0 1-.02-.39C8 3.741 9.791 2 12 2z",
    twitter:
        "M24.075 4.325c-.9.375-1.8.675-2.85.75 1.05-.6 1.8-1.575 2.175-2.7-.975.6-2.025.975-3.15 1.2C19.35 2.6 18.075 2 16.725 2c-2.7 0-4.95 2.175-4.95 4.95 0 .375.075.75.15 1.125C7.8 7.85 4.2 5.9 1.725 2.9a4.72 4.72 0 0 0-.675 2.475c0 1.725.9 3.225 2.175 4.125-.825 0-1.575-.225-2.25-.6v.075c0 2.4 1.725 4.35 3.975 4.8-.45.075-.825.15-1.275.15-.3 0-.6 0-.9-.075.6 1.95 2.475 3.375 4.575 3.45-1.65 1.35-3.825 2.1-6.15 2.1-.375 0-.825 0-1.2-.075 2.25 1.35 4.875 2.175 7.65 2.175 9.075 0 14.025-7.5 14.025-14.025v-.6c.9-.75 1.725-1.575 2.4-2.55z",
    telegram:
        "M23.602 2.034a1.8 1.8 0 0 0-.944.068S1.63 9.659.43 10.496c-.259.18-.346.284-.389.408-.208.595.439.858.439.858l5.42 1.766a.6.6 0 0 0 .274-.017l13.05-8.07c.101-.031.176 0 .16.075-.264.905-9.911 9.478-9.964 9.53a.2.2 0 0 0-.059.079c-.013.031-.018.064-.016.098l-.504 5.288s-.211 1.65 1.435 0c1.168-1.169 2.288-2.137 2.85-2.607 1.864 1.286 3.869 2.709 4.734 3.45a1.5 1.5 0 0 0 1.098.424c.825-.031 1.05-.934 1.05-.934s3.831-15.416 3.96-17.483c.012-.203.029-.332.031-.471.007-.161-.009-.322-.047-.478-.04-.179-.173-.324-.35-.378z",
    linkedin:
        "M22.807 0c.596 0 1.043.45 1.193 1.05h0v21.9A1.02 1.02 0 0 1 22.957 24h0H1.043C.447 24 0 23.55 0 23.1h0V1.05A1.02 1.02 0 0 1 1.043 0h0zM15.95 8.7c-1.64 0-2.832.9-3.28 1.8h0V9H9.242v11.55h3.578v-5.7c0-1.5.298-3 2.087-3 1.665 0 1.78 1.43 1.788 2.717l.001 5.833h3.429v-6.3c0-3-.596-5.4-4.174-5.4zM7.155 9H3.578v11.4h3.578V9zM5.366 3.3A2.04 2.04 0 0 0 3.28 5.4c0 1.05.894 2.1 2.087 2.1 1.043 0 1.938-1.05 2.087-2.1a2.04 2.04 0 0 0-2.087-2.1z",
    play: "M17.604 9.414c1.972 1.16 1.972 4.012 0 5.172l-8.083 4.755C7.521 20.517 5 19.075 5 16.755V7.245c0-2.32 2.521-3.762 4.521-2.586l8.083 4.755z",
    usd: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 1 0 0 18 9 9 0 1 0 0-18zm0 2a1 1 0 0 1 .993.883L13 6l.001.339c.978.251 1.831.829 2.343 1.633a1 1 0 0 1-1.619 1.169l-.068-.095C13.34 8.549 12.655 8.2 11.9 8.2c-1.086 0-1.9.727-1.9 1.618 0 .088.05.308.199.524.255.371.732.62 1.595.654L12 11c1.63 0 2.786.56 3.449 1.524.414.602.551 1.2.551 1.657 0 1.753-1.285 3.155-2.999 3.523L13 18a1 1 0 0 1-1.993.117L11 18v-.338c-.978-.251-1.832-.829-2.344-1.634a1 1 0 0 1 1.619-1.169l.068.095c.317.497 1.002.846 1.756.846 1.086 0 1.9-.727 1.9-1.618 0-.088-.05-.308-.199-.524-.255-.371-.732-.62-1.595-.654L12 13c-1.63 0-2.786-.56-3.449-1.524-.414-.602-.551-1.2-.551-1.657 0-1.753 1.286-3.155 3-3.523V6a1 1 0 0 1 1-1z",
    edit: "M12.317 4.701c2.252-2.252 5.284-2.205 7.235-.253s1.998 4.984-.253 7.236h0l-5.936 5.922-.847.851-.803.813c-1.606 1.638-7.346 2.298-8.31 1.177-.915-1.065-.243-6.549 1.311-8.143h0l.475-.485L7.339 9.66zM19 19a1 1 0 0 1 .117 1.993L19 21h-5a1 1 0 0 1-.117-1.993L14 19h5zM12.213 7.626l-4.776 4.766-1.29 1.308c-.46.472-.856 1.712-1.042 3.228a13.12 13.12 0 0 0-.102 1.819h0l.009.234.204.013c.516.021 1.173-.006 1.832-.082 1.529-.176 2.783-.577 3.238-1.041h0l.26-.264 2.617-2.628 3.21-3.201-.079-.069-4.08-4.081zm5.925-1.764c-1.18-1.18-2.946-1.208-4.408.254h0l-.101.098 4.078 4.078.072.082.106-.105c1.408-1.409 1.433-3.101.375-4.279z",
    "users-two":
        "M9.5 14c3.637 0 7 1.557 7 3.917 0 1.705-2.199 2.702-5.118 2.993h0l-.522.044L9.5 21a25.07 25.07 0 0 1-.298-.002h0l-.583-.014C4.987 20.85 2.5 19.862 2.5 17.917 2.5 15.416 5.706 14 9.5 14zm0 2c-2.81 0-5 .967-4.998 1.922h0l.027.034.077.074c.176.155.482.316.903.46.957.326 2.359.51 3.99.51 1.409 0 2.806-.19 3.819-.516.474-.152.835-.326 1.052-.494h0l.108-.085c.018-.012.021-.008.021.011h0l-.007-.079C14.354 17.015 12.08 16 9.5 16zm6.979-3.452l.117.004c2.776.267 4.904 1.498 4.904 3.369 0 1.17-.831 1.979-2.227 2.375a1 1 0 0 1-.545-1.924c.366-.104.601-.225.717-.337.048-.046.056-.066.056-.114 0-.489-1.224-1.198-3.096-1.378a1 1 0 0 1 .075-1.995zM9.5 3a5 5 0 1 1 0 10 5 5 0 1 1 0-10zm7 2a3.5 3.5 0 1 1 0 7 1 1 0 0 1-.117-1.993L16.5 10a1.5 1.5 0 0 0 .144-2.993L16.5 7a1 1 0 1 1 0-2zm-7 0a3 3 0 1 0 0 6 3 3 0 1 0 0-6z",
    like: "M12.592 2.752c-1.333-.048-2.386.977-2.819 2.708l-.053.279-.073.327-.047.187c-.143.547-.331 1.092-.566 1.594-.621 1.322-1.406 2.023-2.372 1.993H5.293c-1.375 0-2.543 1.166-2.543 2.541v4.93c0 1.451 1.142 2.643 2.543 2.643l.928.004.367.006.453.016.25.016.218.022.195.027.18.034.088.02.175.045c.396.109.814.291 1.397.611.481.264 1.227.396 2.264.456l.543.024.29.008 2.799-.043.3-.016c2.681.002 3.791-.923 4.412-3.652l1.032-4.948.028-.228c.24-2.33-1.103-3.749-2.755-3.749l-3.118-.001-.01-.623-.022-.737-.027-.612-.016-.283-.039-.516-.104-.824-.014-.064c-.307-1.227-1.333-2.152-2.515-2.195zm.011 2.011c.198.051.413.252.523.54l.034.11.033.222.036.335.031.397.027.452.022.5.021.71.011.667.003.4a1.48 1.48 0 0 0 1.514 1.511h3.599c.51 0 .926.457.758 1.632l-1.017 4.868-.085.354c-.309 1.221-.624 1.598-1.631 1.696l-.292.02-.16.006-.395.006-.551.026-.515.019-.761.016-.248.002-.715-.003-.447-.01-.416-.017-.379-.024-.174-.015-.314-.034c-.289-.038-.502-.087-.612-.148-.708-.388-1.262-.629-1.826-.785l-.232-.061-.226-.051-.229-.042-.118-.018-.25-.03-.275-.023-.309-.017-.545-.016-.926-.008h-.275c-.276 0-.543-.278-.543-.643v-4.93c0-.269.272-.541.543-.541H6.63c1.906.06 3.291-1.177 4.214-3.142.292-.623.519-1.281.691-1.938l.079-.318.084-.389.034-.193c.207-.81.522-1.117.788-1.107l.084.013z",
    plus: "M12 6.25a.75.75 0 0 1 .743.648L12.75 7v4.25H17a.75.75 0 0 1 .102 1.493L17 12.75h-4.25V17a.75.75 0 0 1-1.493.102L11.25 17v-4.25H7a.75.75 0 0 1-.102-1.493L7 11.25h4.25V7a.75.75 0 0 1 .75-.75z",
};

type IconProps = {
    className?: string;
    name: string;
    size?: number | string;
};

const Icon = ({ className, name, size }: IconProps) => {
    return (
        <svg
            className={className}
            width={size || 24}
            height={size || 24}
            viewBox="0 0 24 24"
        >
            <path d={icons[name]}></path>
        </svg>
    );
};

export default Icon;
