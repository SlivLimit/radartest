function AddHud() {
    let hudStyleElement;
    let loadingNotification;
    function showLoadingNotification() {
        if (document.getElementById('loadingNotification')) return;
        loadingNotification = document.createElement('div');
        loadingNotification.id = 'loadingNotification';
        loadingNotification.style.position = 'fixed';
        loadingNotification.style.bottom = '10%';
        loadingNotification.style.left = '50%';
        loadingNotification.style.transform = 'translateX(-50%)';
        loadingNotification.style.display = 'flex';
        loadingNotification.style.alignItems = 'center';
        loadingNotification.style.padding = '10px 20px';
        loadingNotification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        loadingNotification.style.color = '#fff';
        loadingNotification.style.fontFamily = 'Arial, sans-serif';
        loadingNotification.style.fontSize = '16px';
        loadingNotification.style.borderRadius = '8px';
        loadingNotification.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        loadingNotification.style.opacity = '0';
        loadingNotification.style.transition = 'opacity 2.5s';
        loadingNotification.style.zIndex = '1000';
        const spinner = document.createElement('div');
        spinner.style.width = '20px';
        spinner.style.height = '20px';
        spinner.style.border = '3px solid rgba(255, 255, 255, 0.3)';
        spinner.style.borderTop = '3px solid #fff';
        spinner.style.borderRadius = '50%';
        spinner.style.marginRight = '10px';
        spinner.style.animation = 'spin 1s linear infinite';
        const text = document.createElement('span');
        text.textContent = 't.me/limitmods';
        loadingNotification.appendChild(spinner);
        loadingNotification.appendChild(text);
        document.body.appendChild(loadingNotification);
        const loadingStyle = document.createElement('style');
        loadingStyle.textContent = `
            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        `;
        document.head.appendChild(loadingStyle);
        setTimeout(() => {
            loadingNotification.style.opacity = '1';
        }, 10);
    }
    showLoadingNotification();
    window.mazzx = window.mazzx || {};
    function formatNumberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
    let notificationContainer;
    function createContainer() {
        if (!notificationContainer) {
            notificationContainer = document.createElement('div');
            notificationContainer.id = 'mazzxNotificationContainer';
            notificationContainer.style.position = 'fixed';
            notificationContainer.style.bottom = '14%';
            notificationContainer.style.left = '50%';
            notificationContainer.style.transform = 'translateX(-50%)';
            notificationContainer.style.zIndex = '1000';
            notificationContainer.style.display = 'flex';
            notificationContainer.style.flexDirection = 'column';
            notificationContainer.style.alignItems = 'center';
            document.body.appendChild(notificationContainer);
        }
    }
    mazzx.addLabel = function (message) {
        createContainer();
        const notification = document.createElement('div');
        notification.className = 'mazzx-notification';
        notification.style.position = 'relative';
        notification.style.padding = '10px 20px';
        notification.style.marginBottom = '10px';
        notification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        notification.style.color = '#fff';
        notification.style.fontFamily = 'Arial, sans-serif';
        notification.style.fontSize = '16px';
        notification.style.borderRadius = '8px';
        notification.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 2.5s';
        notification.style.display = 'flex';
        notification.style.justifyContent = 'center';
        notification.style.alignItems = 'center';
        const icon = document.createElement('img');
        icon.src = 'https://i.imgur.com/rBjM3OW.png';
        icon.style.width = '20px';
        icon.style.height = '20px';
        icon.style.marginRight = '10px';
        const text = document.createElement('span');
        text.textContent = message;
        notification.appendChild(icon);
        notification.appendChild(text);
        notificationContainer.appendChild(notification);
        setTimeout(() => {
            notification.style.opacity = '1';
        }, 10);
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification) {
                    notification.remove();
                }
                if (notificationContainer && notificationContainer.children.length === 0) {
                    notificationContainer.remove();
                    notificationContainer = null;
                }
            }, 2500);
        }, 6000);
    };
    mazzx.addLabel("")
    const hudScript = document.currentScript;
    const hudElements = [];
const oldRadmirConfig = {
    icons: {
        "active_wanted": "",
        "armour": "",
        "breath": "",
        "cash": "",
        "circle": "",
        "health": "",
        "hunger": "",
        "inactive_wanted": "",
        "wanted_back": "",
        "weapon_back": "",
        "zone": ""
    },
    weapon: {
        "0": "",
	"1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
        "6": "",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": "",
        "13": "",
        "14": "",
        "15": "",
        "16": "",
        "17": "",
        "18": "",
        "19": "",
        "20": "",
        "22": "",
        "23": "",
        "24": "",
        "25": "",
        "26": "",
        "27": "",
        "28": "",
        "29": "",
        "30": "",
        "31": "",
        "32": "",
        "33": "",
        "34": "",
        "35": "",
        "36": "",
        "37": "",
        "38": "",
        "39": "",
        "40": "",
        "41": "",
        "42": "",
        "43": "",
        "44": "",
        "46": ""
    },
    logo: {
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
        "6": "",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": "",
        "13": "",
        "14": "",
        "15": "",
        "16": "",
        "17": "",
        "18": "",
        "19": "",
        "20": "",
        "21": ""
    },
};
    function createHud() {
        hudStyleElement = document.createElement("style");
        hudStyleElement.id = "hudStyles";
        hudStyleElement.innerHTML = `
@font-face{font-family:'GothamPro Light';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro_light.ttf') format('truetype');font-weight:300;font-style:normal}@font-face{font-family:'GothamPro Light Italic';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro_lightitalic.ttf') format('truetype');font-weight:300;font-style:italic}@font-face{font-family:'GothamPro Regular';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro.ttf') format('truetype');font-weight:400;font-style:normal}@font-face{font-family:'GothamPro Italic';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro_italic.ttf') format('truetype');font-weight:400;font-style:italic}@font-face{font-family:'GothamPro Medium';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro_medium.ttf') format('truetype');font-weight:500;font-style:normal}@font-face{font-family:'GothamPro Medium Italic';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro_mediumitalic.ttf') format('truetype');font-weight:500;font-style:italic}@font-face{font-family:'GothamPro Bold';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro_bold.ttf') format('truetype');font-weight:700;font-style:normal}@font-face{font-family:'GothamPro Bold Italic';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro_bolditalic.ttf') format('truetype');font-weight:700;font-style:italic}@font-face{font-family:'GothamPro Black';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro_black.ttf') format('truetype');font-weight:900;font-style:normal}@font-face{font-family:'GothamPro Black Italic';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro_blackitalic.ttf') format('truetype');font-weight:900;font-style:italic}
      .Old-Fixed-Hud,
      .Old-Fixed-HudTop,
      .Old-Fixed-Logo,
      .Old-Fixed-Main,
      .Old-Fixed-Params,
      .Old-Fixed-Cash,
      .Old-Fixed-Params__all,
      .Old-Fixed-Param,
      .Old-Fixed-Weapon,
      .Old-Fixed-Wanted,
      .Old-Fixed-HudBottom{
      z-index: -1;
      }
      #app .hud-radmir-wanted {
        display: none;
      }
      body #app .hud-radmir-info {display: none}
      .hud-hassle-map .map-mask{
       display: none;
      }
      .Old-Fixed-Logo img,.Old-Fixed-HudTop{
       transform-origin:top right
      }
      .Ammo-in-clip{
       font-family:'GothamPro Bold Italic';
       font-weight:900;
       font-style:italic
      }
      .Old-Fixed-HudTop{
       position:absolute;
       right:1.4vw;
       top:3.4vh;
       display:flex;
       flex-direction:column;
       align-items:flex-end
      }
      .Old-Fixed-Logo{
       position:relative;
       margin-bottom:3vh
      }
/* Лого */
      .Old-Fixed-Logo img{
       width:20.52vh;
       height:6.2vh;
       margin-right:2vh
      }
      .Old-Fixed-Bonus{
       background: radial-gradient(93.1% 93.1% at 126.72% 6.9%, #eb00ff 0, #eb00ff00 100%), linear-gradient(129.39deg, #f5be09 30.88%, #e9651b 98.06%);
       width: 32px;
       height: 32px;
       display: flex;
       align-items: center;
       justify-content: center;
       font-size: 16px;
       color: #fff;
       font-weight: 700;
       position: absolute;
       bottom: -5px;
       right: -2px;
       border-radius: 50%;
       font-family:'GothamPro Bold Italic';
       font-weight:900;
       font-size:1.3vh
      }
      .Old-Fixed-Main,.Old-Fixed-Cash,.Wanted_row{
       align-items:center;
       display:flex
      }
      .Old-Fixed-Main{
       margin-top:.46vh;
       margin-right:3.46vh
      }
      .Old-Fixed-Weapon{
       width:16.6vh;
       height:16.6vh;
       position:relative;
       display:flex;
       justify-content:flex-end;
       margin-left:-.93vh;
       margin-right:.46vh
      }
      .Ammo-in-clip,.old-param__icon{
       margin-right:1.11vh
      }
      .Old-Fixed-Weapon_back{
       position:absolute;
       right:-1.4vh;
       top:-1.6vh;
       z-index:-1
      }
      .Old-Fixed-Weapon_icon{
       width:37vh;
       height:16.6vh
      }
      .Old-Fixed-Weapon_ammo{
       position:absolute;
       bottom:3.6vh;
       right:5vh;
       display:flex;
       align-items:flex-end;
       color: #fff;
      }
      .Ammo-in-clip{
       font-size:2.31vh;
       line-height:1;
       text-shadow:0 0 .46vh #00000080
      }
      .Ammo-full{
       font-family:'GothamPro Light Italic';
       font-weight:300;
       font-style:italic;
       font-size:1.67vh;
       text-shadow:0 0 .46vh #000000b3
      }
      .Old-Fixed-Params{
       height:13.5vh;
       position:relative;
       z-index:1
      }
      .Old-Fixed-Cash{
       justify-content:flex-end;
       color: white;
       font-family:"GothamPro Black Italic";
       font-style:italic;
       font-size:2.59vh;
       text-shadow:0 0 .46vh #00000080
      }
      .Old-Fixed-Cash img{
       margin-right: 13px;
       margin-top: 1px
      }
      .Old-Fixed-Params__all{
       margin-top:1vh
      }
      .Old-Fixed-Param{
       display:flex;
       align-items:center;
       margin-top:.95vh
      }
      .Old-Fixed-Param.health{
        margin-top:0;
        margin-left:1.85vh
      }
      .Old-Fixed-Param.armour,.Old-Param-Values{
       margin-left:1vh
      }
      .Old-Param-Progress,.Old-Progress__Values{
       width:9.40vh;
       height:.46vh;
       background-color:#0000004d;
       border-radius:.46vh
      }
      .Old-Progress__Values{
       display:flex;
       justify-content:flex-end
      }
      .Old-Progress__Values .circle{
       width:.85vh;
       height:.93vh;
       margin-top:-.25vh;
       margin-right:-.28vh
      }
      .Old-Param-Values{
       font-family:"GothamPro Light Italic";
       font-weight:300;
       font-style:italic;
       color: white;
       width:3.24vh;
       font-size:1.67vh;
       text-shadow:0 0 .46vh #000000b3
      }
      .Old-Fixed-Freeze_text{
        margin-right:1vh;
      }
      .Old-Fixed-Freeze_value, .Old-Fixed-Freeze_text{
       font-family:"GothamPro Bold";
       font-weight:900;
       color:#c0ccec;
       font-size:2vh;
       text-shadow:0 0 2vh #000
      }
      .Old-Fixed-Param.hunger{
       margin-left:.09vh
      }
      .Old-Fixed-Param.breath{
       margin-left: 3px
      }
      .Old-Fixed-Param.health .Old-Progress__Values{
       background-color:#ed2e2e;
       box-shadow:#ed2e2e80 0 0 .46vh 0
      }
      .Old-Fixed-Param.armour .Old-Progress__Values{
       background-color:#526ee6;
       box-shadow:#526ee680 0 0 .46vh 0
      }
      .Old-Fixed-Param.hunger .Old-Progress__Values{
       width: 50%;
       box-shadow: hsl(26deg 100% 59% / 30%) 0 0 5px 0;
       background-color: #ff872e
      }
      .Old-Fixed-Param.breath .Old-Progress__Values{
        width: 99%;
        background-color: #fff;
        box-shadow: rgba(255, 255, 255, .5) 0 0 5px 0
      }
      .Old-Fixed-Param.health .old-param__icon{
       margin-left: 20px
      }
      .Old-Fixed-Param.armour .old-param__icon{
       margin-left: 14px
      }
      .Old-Fixed-Param.hunger .old-param__icon{
       margin-left: 1px
      }
      .Old-Fixed-Param.breath .old-param__icon{
       width:1.7vh;
       height:1.7vh
      }
      .Old-Fixed-Wanted{
       position:relative;
       margin-right:6vh;
       margin-top:-1.6vh
      }
      .Old-Fixed-Wanted_back{
       position:absolute;
       right:-1.2vh;
       top:-.66vh;
       z-index:-1
      }
      .Wanted_row img{
       width: 3.3vh;
       height:3.3vh;
       padding:.19vh .28vh
      }
      .Old-Fixed-HudBottom{
        transform-origin: right bottom;
        position: absolute;
        right: 0;
        top: 20px;
      }
      .Old-Fixed-ZZ{
       position:absolute;
       left:21.3vh;
       bottom:-98.9vh
      }
      .Old-Fixed-ZZ_icon{
       width:4.5vh;
       height:4.5vh
      }
      .Old-Fixed-Freeze {
        position: absolute;
        background: hsl(190deg 63% 66% / 40%);
        width: 26.1111vh;
        height: 0.65vh;
        border-radius: 1vh;
        outline: hsl(0deg 0% 0% / 20%) 0.2vh solid;
        outline-offset: 0.1vh;
        overflow: hidden;
        left: 11.1620vh;
        bottom: 2.7778vh;
      }
      #app .hud-radmir-radar__map { width: 26.3vh !important; height: 16.9vh !important; overflow: hidden; display: flex; justify-content: center; align-items: center; border-radius: 100%; border: none } body #app .hud-radmir-radar__map { transition: .3s } #app .hud-hassle-map { width: 32vh !important; height: 32vh !important } #app .hud-radmir-radar__radar { width: 26.3vh } #app .hud-radmir-radar { left: 7.3vh; bottom: 4.03vh }
      body .OLD-RADMIR-logo__bonus {
    background: #000000c5
}
#app .fuel__button .text:before { background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMyAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMS40NTEgMUw0LjQ4NCA3Ljg0OEwxIDQuNDI0IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPg0KPC9zdmc+DQo=) center/contain no-repeat !important } #app .fuel__container:before { opacity: 0 } #app .fuel__container { padding: 3.33vh 2.96vh } #app .fuel__title { font-size: 2.04vh; line-height: 1.94vh; color: #fff; text-align: left } #app .fuel__close { left: auto !important; top: -.5vh !important; right: 0; display: flex; flex-direction: row-reverse; gap: .5vh } #app .fuel__close:hover img { filter: drop-shadow(0 0 8px #ffffff80) !important } #app .fuel__container { background: #000000cc } #app .fuel__fill .range-slider-fill { background-color: #fff !important } #app .fuel__fill .range-slider-knob { background: #fff !important } #app .fuel__fill-data .text { color: hsla(0, 0%, 100%, .65) !important } #app .fuel__fill-data .value { color: #fff !important } #app .fuel__class-col.selected, .fuel__class-col:hover { background: #fff !important; box-shadow: 0 12px 22px #ffffff14 !important; color: #000 !important } #app .fuel__button { background: linear-gradient(185.93deg, #fff -22.13%, #e6e6e6 122.51%) !important; color: #000 !important } #app .fuel__button:hover { box-shadow: 0 6px 20px #ffffff40 !important } /* ---------- без сознания ----------*/ #app .death-waves { background-image: none } #app .death_mobile .death-bg-lines_danger { background-image: none } #app .death_mobile .death-bg-lines { background-image: none } #app .death { font-style: italic; background: #000000ba !important } #app .death-timer { font-style: italic }
body .info-card { background: rgb(0 0 0 / 70%); border-radius: 31px !important } body .info-card__data { background: rgb(0 0 0 / 60%); border-radius: 31px } body .info-card .text { color: #cfcfcf }
#app .player-interaction__icon { fill: white }
#app .vue3-slider .track-filled, .vue3-slider .handle { background-color: #ffffff !important }
#app .container { background: rgb(0 0 0 / 80%) }
#app .player-interaction-favorite:hover { background: rgba(63, 63, 63, .8) }
#app .player-interaction-favorite { background: rgb(0 0 0 / 80%) }
#app .player-interaction__title, .player-interaction__title_active { color: #ffffff !important } #app .player-interaction__container:after, .player-interaction__container:before { background: 0 0 !important }
#app .player-interaction__icon, .player-interaction__icon_active { fill: white !important }
#app .player-interaction__container { background: rgb(0 0 0 / 80%); border: none }
#app .player-interaction-layer { background: rgb(0 0 0 / 80%); border: none }
#app .player-interaction__inner { background: #00000080; border: .09vh solid #000000c2 }
#app .player-interaction-layer { background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIwIiBoZWlnaHQ9IjkyMCIgdmlld0JveD0iMCAwIDkyMCA5MjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNDYwLjgwMyAwTDQ2MC41NTUgMTQyTTkxOS45OTggNDYwLjgwM0w3NzkgNDYwLjU1N003ODQuNjk5IDc4NS44MzZMNjg1LjIxMSA2ODZNNzg1LjgzNiAxMzUuMjk5TDY4NS41IDIzNS4yODVNNjM2Ljc2MSAzNS4zMTY5TDU4Mi4zNjggMTY2TTg4NC42ODEgNjM2Ljc2Mkw3NTQuNSA1ODIuNTc3TTYzNS4zMDUgODg1LjI4NUw1ODEuMzk1IDc1NC41TTg4NS4yODUgMjg0LjY5M0w3NTUgMzM4LjM5OCIgc3Ryb2tlPSIjRjRGMUUxIiBzdHJva2Utb3BhY2l0eT0iMC4yNSIvPg0KPHBhdGggZD0iTTQ2MC44MDMgOTE5Ljk5OEw0NjAuNTU1IDc3Ny45OTlNLTAuMDAwMjQ0MTQxIDQ2MC44MDJMMTQwLjk5OCA0NjAuNTU2TTEzNS4yOTkgNzg1LjgzNkwyMzQuNzg3IDY4NS45OTlNMTM0LjE2MiAxMzUuMjk4TDIzNC40OTggMjM1LjI4NU0yODMuMjM3IDM1LjMxNjRMMzM3LjYzIDE2NS45OTlNMzUuMzE2OCA2MzYuNzYxTDE2NS40OTggNTgyLjU3Nk0yODQuNjkzIDg4NS4yODRMMzM4LjYwNCA3NTQuNDk5TTM0LjcxMzYgMjg0LjY5M0wxNjQuOTk4IDMzOC4zOTciIHN0cm9rZT0iI0Y0RjFFMSIgc3Ryb2tlLW9wYWNpdHk9IjAuMjUiLz4NCjwvc3ZnPg0K) center/contain no-repeat }
#app .player-interaction_mobile .player-interaction__container:before { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABP4AAAQ4CAYAAACZsRJpAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAXIaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0ODgsIDIwMjAvMDcvMTAtMjI6MDY6NTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDgtMjhUMTk6NTI6MjErMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTEyLTIwVDExOjE5OjE1KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTEyLTIwVDExOjE5OjE1KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowODdmY2M4NS1mYWJlLTQxNGMtYmExMy0zNjk1NWFmOTgxMzYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkNzhlY2ViYi01NWY4LTFjNDMtOGZkOS02N2RlNjgzYTYzZGIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5MDFhNDIxYS1mYjI4LWJlNDQtOGZiMS1hMDE0OGJlOTZkNjAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjkwMWE0MjFhLWZiMjgtYmU0NC04ZmIxLWEwMTQ4YmU5NmQ2MCIgc3RFdnQ6d2hlbj0iMjAyNC0wOC0yOFQxOTo1MjoyMSswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowODdmY2M4NS1mYWJlLTQxNGMtYmExMy0zNjk1NWFmOTgxMzYiIHN0RXZ0OndoZW49IjIwMjQtMTItMjBUMTE6MTk6MTUrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5+HzAqAAAetElEQVR4nO3YwQkAIBDAMHX/nc8lBKEkE/TdPTMLAAAAAGg5vwMAAAAAgPeMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDoAuM8C22WmIJlAAAAAElFTkSuQmCC) center/cover no-repeat }
#app .player-interaction__container { background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkwIiBoZWlnaHQ9IjU5MCIgdmlld0JveD0iMCAwIDU5MCA1OTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNDE2LjYwNyAxLjE2Nzk3TDM2Mi4zNzEgMTMyLjIxNU0xNzMuMzk0IDU4OC44MjdMMjI3LjY4OSA0NTcuNjM2TTEuMTcwOSAxNzMuMzkxTDEzMi4yNDIgMjI3LjYzN001ODguNzU4IDE3My4yMThMNDU3LjgxOCAyMjcuNU0xLjI0MjUxIDQxNi43NzdMMTMyLjQ5OSAzNjIuMzY0TTE3My4yMjEgMS4yMzk1NkwyMjcuNjM2IDEzMi41IiBzdHJva2U9IiNGNEYxRTEiIHN0cm9rZS1vcGFjaXR5PSIwLjQiLz4NCjxwYXRoIGQ9Ik01ODguODMxIDQxNi42MDVMNDU3Ljc2MyAzNjIuMzU5TTQxNi43ODIgNTg4Ljc1NkwzNjIuNDQ5IDQ1Ny42OTQiIHN0cm9rZT0iI0Y0RjFFMSIgc3Ryb2tlLW9wYWNpdHk9IjAuNCIvPg0KPC9zdmc+DQo=) center/cover no-repeat }
#app .player-interaction__container:before { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABP4AAAQ4CAYAAACZsRJpAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAXIaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0ODgsIDIwMjAvMDcvMTAtMjI6MDY6NTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDgtMjhUMTk6NTI6MTgrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTEyLTIwVDExOjE4OjI4KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTEyLTIwVDExOjE4OjI4KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxOWY0ODBiNi1iM2EyLTRkNDctYjY3Yy0wY2I5NDY5YWIwZTkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0MzY0MTFmZS0yMzJlLTNlNGItYmY3Zi00Nzg5NDk2NjBlMmIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3YTg0YzYzNS00ZjdhLTllNGUtYTA4ZS0wOTI3M2I3OGE5YTciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjdhODRjNjM1LTRmN2EtOWU0ZS1hMDhlLTA5MjczYjc4YTlhNyIgc3RFdnQ6d2hlbj0iMjAyNC0wOC0yOFQxOTo1MjoxOCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOWY0ODBiNi1iM2EyLTRkNDctYjY3Yy0wY2I5NDY5YWIwZTkiIHN0RXZ0OndoZW49IjIwMjQtMTItMjBUMTE6MTg6MjgrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4baN+oAAAetElEQVR4nO3YwQkAIBDAMHX/nc8lBKEkE/TdPTMLAAAAAGg5vwMAAAAAgPeMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDoAuM8C22WmIJlAAAAAElFTkSuQmCC) center/cover no-repeat }
#app .trade-items { background: none } #app .trade-items__container { border-radius: 10px; height: 613px; width: 1283px; background: #000000ba !important } #app .trade-items-main { right: -1.2vw; top: -2vh }
#app .radmir-chat-input__input input::selection { background-color: #00ddff40 } #app .radmir-chat__before { position: fixed; width: 100vw; height: 41.66vw; background: 0 0 !important; left: 0; top: 0; z-index: -1; opacity: 0; transition: all .2s ease; pointer-events: none } #app .radmir-chat-input__input { background: rgb(0 0 0 / 80%) !important; border-radius: 11px !important } #app .radmir-chat-input__input input { margin-left: .9vh !important } #app .radmir-chat-input__input-lang { margin-right: 1vh !important } #app .controls-button { border-radius: .5vh }
#app .modal-container-wrapper { background: rgba(0, 0, 0, 0.8) !important; border: 0.19vh solid #ffffff0d; border-radius: 2.5vh !important; } #app .modal_violet .modal-container { border-top: none !important; } #app .modal-light__light { background: none !important; } #app .modal-light__light_second { background: none !important; } #app .modal-light__light { background: none !important; } #app .modal-light__light_second { background: none !important; } #app .modal-overlay { background: none !important; } @media (platform:mobile) { #app .modal_blue .modal-container-wrapper { box-shadow: none !important; } #app .modal_blue .modal-container { border-width: 0.3704vh } } #app .modal_orange .modal-container { border-top: none !important; } #app .modal_orange .modal-container-wrapper { box-shadow: none !important; } @media (platform:mobile) { #app .modal_orange .modal-container-wrapper { box-shadow: none !important; } #app .modal_orange .modal-container { border-width: 0.3704vh } } #app .modal_violet .modal-container-wrapper { box-shadow: none !important; } @media (platform:mobile) { #app .modal_violet .modal-container-wrapper { box-shadow: none !important; } #app .modal_violet .modal-container { border-width: 0.3704vh } } #app .modal_green .modal-container { border-top: none !important; } #app .modal_green .modal-container-wrapper { box-shadow: none !important; } @media (platform:mobile) { #app .modal_green .modal-container-wrapper { box-shadow: none !important; } #app .modal_green .modal-container { border-width: 0.3704vh } } #app .modal_red .modal-container { border-top: none !important; } #app .modal_red .modal-container-wrapper { box-shadow: none !important; } @media (platform:mobile) { #app .modal_red .modal-container-wrapper { box-shadow: none !important; } #app .modal_red .modal-container { border-width: 0.3704vh } } #app .modal_dark-orange .modal-container { border-top: none !important; } #app .modal_dark-orange .modal-container-wrapper { box-shadow: none !important; } @media (platform:mobile) { #app .modal_dark-orange .modal-container-wrapper { box-shadow: none !important; } #app .modal_dark-orange .modal-container { border-width: 0.3704vh } } #app .modal_overlay-violet-blue .modal-overlay { background: none !important; } body .window-bg { background-image: none; } body .window__before { background-image: none; } body .window__title { text-align: center; color: #ffffff; } body .window-table__item { color: #fff; border-radius: 2vh; border: .09vh solid #ffffff00; transition: .25s } body .window-table__item:before { border-radius: 3vh; background: linear-gradient(rgba(59, 59, 59, 0.161), rgba(59, 59, 59, 0.161)) } body .window-table__item:after { background: rgba(59, 59, 59, 0.161); border-radius: 3vh; } body .window-table__item.selected { background: #ffffff; color: #000000cd; border: .09vh solid #f4f1e100 } body .window-button { border-radius: 2vh; color: #ffffff; background: rgba(59, 59, 59, 0.161); } body .window-table__item:hover { background: #ffffff50; border-color: none } body .window-table__item.selected:hover { background: #ffffff; color: #000000cd; border: 0.09vh solid #f4f1e100; } #app .window-button:hover { color: #000000cd; background: #fff } #app .window-button:first-child:hover { background: #fff !important; } #app .window-button:first-child { background: #fff !important; } .graffiti-pattern__image[data-v-38ff9a6b] { background: none !important; }
#app .inventory { background: none } #app .inventory-container__info__container { background: linear-gradient(45deg, #000000ef) !important; } #app .inventory-action__modal, #app .inventory-extra__container, #app .inventory-main { background: linear-gradient(45deg, #000000ef); } #app .inventory-main__after, #app .inventory-main__before { display: none } #app .inventory-extra__container, #app .inventory-main { padding: 2vh; background: rgb(0 0 0 / 80%); border-radius: 1.1vh; border: 0; } #app .inventory-player { border: none; } #app .inventory-extra { margin-bottom: 0; margin-left: 1vh } #app .inventory__container, #app .inventory__controls { justify-content: center; } #app .inventory-capacity, #app .inventory-container__box { border-radius: 1vh; border: .1vh solid #ffffff26; background: radial-gradient(#00000003, #ffffff26 150%); } #app .inventory-container__slot { border-radius: 1vh; background: radial-gradient(#00000003, #ffffff33); } #app .inventory-capacity__bar__fill, #app .inventory-wear__bar__fill { border-radius: 1vh; } #app .inventory-capacity__bar, #app .inventory-wear__bar { background: #f4f1e133; border-radius: 1vh; width: 100%; left: 1.5vh; bottom: 1vh; } #app .inventory-extra__content { padding-bottom: .833vw; } #app .inventory-container__slot:before { border-radius: 1vh; border: .1vh solid #f4f1e1; background: radial-gradient(#00000003, #ffffffcc 150%); } .inventory-container__info__container { border: none !important; padding-top: .8vh !important; background: rgb(0 0 0 / 80%) !important; border-radius: 1.1vh !important; overflow: hidden; } .inventory-item-value, .inventory-wear { height: 4vh !important; border-radius: 1vh !important; border: .1vh solid #ffffff26 !important; background: radial-gradient(#00000003, #ffffff26) !important; } #app .inventory-wear__bar { bottom: .8vh; } #app .inventory-action__modal { padding: 2vh; background: rgb(0 0 0 / 80%); border-radius: 1.1vh; } #app .inventory-action__item__icon { border-radius: 1vh; } #app .inventory-wear__content { margin: .5vh 1vh 0; } #app .inventory-item-value { padding: 0 2vh; } #app .inventory-container__count, #app .inventory-container__slot-image { z-index: 1; } #app .inventory-container__actions { border-bottom-left-radius: .8vh; border-bottom-right-radius: .8vh; overflow: hidden; }
body .authorization{background:0 0}#app .authorization{background-image:url();background-size:auto 100vh}
      `;
      document.head.appendChild(hudStyleElement);
      const hudElement = document.createElement("div");
      hudElement.id = 'OldHudContainer';
      hudElement.innerHTML = `
      <div class="Old-Fixed-Hud">
      <div class="Old-Fixed-HudTop">
        <div class="Old-Fixed-Logo">
           <img src="${oldRadmirConfig.logo[1]}">
           <div class="Old-Fixed-Bonus">x3</div>
        </div>
        <div class="Old-Fixed-Main">
           <div class="Old-Fixed-Params">
              <div class="Old-Fixed-Cash"><img src="${oldRadmirConfig.icons.cash}"><span>0</span></div>
              <div class="Old-Fixed-Params__all">
                 <div class="Old-Fixed-Param health">
                    <img src="${oldRadmirConfig.icons.health}" class="old-param__icon">
                    <div class="Old-Param-Progress">
                       <div class="Old-Progress__Values" style="width:100%"><img src="${oldRadmirConfig.icons.circle}" class="circle"></div>
                    </div>
                    <span class="Old-Param-Values">100</span>
                 </div>
                 <div class="Old-Fixed-Param armour">
                    <img src="${oldRadmirConfig.icons.armour}" class="old-param__icon">
                    <div class="Old-Param-Progress">
                       <div class="Old-Progress__Values" style="width:100%"><img src="${oldRadmirConfig.icons.circle}" class="circle"></div>
                    </div>
                    <span class="Old-Param-Values">100</span>
                 </div>
                 <div class="Old-Fixed-Param hunger">
                    <img src="${oldRadmirConfig.icons.hunger}" class="old-param__icon">
                    <div class="Old-Param-Progress">
                       <div class="Old-Progress__Values" style="width:100%"><img src="${oldRadmirConfig.icons.circle}" class="circle"></div>
                    </div>
                    <span class="Old-Param-Values">100</span>
                 </div>
                 <div class="Old-Fixed-Param breath">
                    <img src="${oldRadmirConfig.icons.breath}" class="old-param__icon">
                    <div class="Old-Param-Progress">
                       <div class="Old-Progress__Values" style="width:100%"><img src="${oldRadmirConfig.icons.circle}" class="circle"></div>
                    </div>
                    <span class="Old-Param-Values">100</span>
                 </div>
              </div>
           </div>
           <div class="Old-Fixed-Weapon">
              <img src="${oldRadmirConfig.icons.wanted_back}" class="Old-Fixed-Weapon_back"> <img src="${oldRadmirConfig.weapon[0]}" class="Old-Fixed-Weapon_icon">
              <div class="Old-Fixed-Weapon_ammo"><span class="Ammo-in-clip">1</span><span class="Ammo-full">1</span></div>
           </div>
        </div>
        <div class="Old-Fixed-Wanted">
           <img src="${oldRadmirConfig.icons.weapon_back}" class="Old-Fixed-Wanted_back">
           <div class="Wanted_row"><img src="${oldRadmirConfig.icons.inactive_wanted}" class="wanted-innactive"> <img src="${oldRadmirConfig.icons.inactive_wanted}" class="wanted-innactive"> <img src="${oldRadmirConfig.icons.inactive_wanted}" class="wanted-innactive"> <img src="${oldRadmirConfig.icons.active_wanted}" class="wanted-active"> <img src="${oldRadmirConfig.icons.active_wanted}" class="wanted-active"> <img src="${oldRadmirConfig.icons.active_wanted}" class="wanted-active"></div>
        </div>
      </div>
      <div class="Old-Fixed-HudBottom">
      <div class="Old-Fixed-ZZ"><img src="${oldRadmirConfig.icons.zone}" class="Old-Fixed-ZZ_icon"></div>
      <div class="Old-Fixed-Freeze">
      <span class="Old-Fixed-Freeze_text">Freeze:</span>
      <span class="Old-Fixed-Freeze_value">100</span>
      </div></div>
      `;
      document.body.appendChild(hudElement);
      hudElements.push(OldHudContainer);
    }
    const updateFunctions = {
        show: (value) => {
            const hudEl = document.querySelector(".Old-Fixed-Hud");
            if (hudEl) hudEl.style.display = +value >= 1 ? "" : "none";
        },
        showBars: (value) => {
            updateFunctions.show(value);
        },
        weapon: (value) => {
            const weaponIcon = document.querySelector(".Old-Fixed-Weapon_icon");
            if (weaponIcon) {
                const weaponSrc = oldRadmirConfig.weapon[value];
                if (weaponSrc) {
                    weaponIcon.src = weaponSrc;
                }
            }
            const ammoEls = document.querySelectorAll(".Old-Fixed-Weapon_ammo span");
            ammoEls.forEach(el => {
                if (el) el.style.display = value >= 16 ? "" : "none";
            });
        },
        health: (value) => {
            updateParam("health", value);
        },
        armour: (value) => {
            updateParam("armour", value);
        },
        hunger: (value) => {
            updateParam("hunger", value);
        },
        breath: (value) => {
            const breathWrapper = document.querySelector(".Old-Fixed-Param.breath .Old-Param-Progress")?.parentElement;
            if (breathWrapper) breathWrapper.style.display = value < 99 ? "" : "none";
            updateParam("breath", value);
        },
        bonus: (bonusValue) => {
            const bonusEl = document.querySelector(".Old-Fixed-Bonus");
            if (bonusEl) {
                if (bonusValue <= 1) {
                    bonusEl.style.display = "none";
                } else {
                    bonusEl.style.display = "";
                    bonusEl.textContent = `x${bonusValue}`;
                }
            }
        },
        server: (serverId) => {
            const serverWrapper = document.querySelector(".Old-Fixed-Logo img");
            if (serverWrapper) {
                if (serverId <= 0) {
                    serverWrapper.style.display = "none";
                } else {
                    serverWrapper.style.display = "";
                    const serverLogo = oldRadmirConfig.logo[serverId];
                    if (serverLogo) {
                        serverWrapper.src = serverLogo;
                    }
                }
            }
        },
        money: (value) => {
            const moneyEl = document.querySelector(".Old-Fixed-Cash span");
            if (moneyEl) moneyEl.textContent = formatNumberWithDots(value);
        },
        wanted: (value) => {
            updateWanted(value);
            const wantedWrapper = document.querySelector(".Old-Fixed-Wanted");
            if (wantedWrapper) {
                if (value === 0 && !oldRadmirConfig.wantedAlwaysShow) {
                    wantedWrapper.style.display = "none";
                    return;
                }
                wantedWrapper.style.display = "";
            }
            const wantedEls = document.querySelectorAll(".Wanted_row img");
            wantedEls.forEach((el, index) => {
                if (el) {
                    if ((5 - index) / value >= 1 || (5 - index === 0 && value === 0)) {
                        el.src = oldRadmirConfig.icons.inactive_wanted;
                        el.className = "wanted-innactive";
                    } else {
                        el.src = oldRadmirConfig.icons.active_wanted;
                        el.className = "wanted-active";
                    }
                }
            });
        },
        ammoInClip: (value) => {
            const inClipEl = document.querySelector(".Ammo-in-clip");
            if (inClipEl) inClipEl.textContent = value;
        },
        totalAmmo: (value) => {
            const totalAmmoEl = document.querySelector(".Ammo-full");
            if (totalAmmoEl) totalAmmoEl.textContent = "/" + value;
        },
        freeze: (value) => {
            const freezeValueEl = document.querySelector(".Old-Fixed-Freeze_value");
            if (freezeValueEl) {
                const formattedValue = String(value).padStart(3, '0');
                freezeValueEl.textContent = formattedValue;
            }
        },
        /*freeze2: () => {
            const freezeEl = document.querySelector(".Old-Fixed-Freeze");
            const isVisible = window.interface("Hud").isNewYear;
            if (freezeEl) {
                freezeEl.style.display = isVisible ? "" : "none";
            }
        },*/
        greenZone: (isVisible) => {
            const greenZoneEl = document.querySelector(".Old-Fixed-ZZ");
            if (greenZoneEl) {
                greenZoneEl.style.display = isVisible ? "" : "none";
            }
        },
    };
    function onInfoChange(type, value) {
        setTimeout(() => {
            loadingNotification.style.opacity = '0';
            setTimeout(() => {
                if (loadingNotification) {
                    loadingNotification.remove();
                }
            }, 2500);
        }, 1000);
        if (updateFunctions[type]) {
            updateFunctions[type](value);
        }
        const hudInfo = window.interface("Hud").info;
        Object.entries(updateFunctions).forEach(([key, func]) => {
            if (typeof func === "function" && hudInfo.hasOwnProperty(key)) {
                func(hudInfo[key]);
            }
        });
    }
    function updateParam(paramClass, value) {
        const paramElement = document.querySelector(`.Old-Fixed-Param.${paramClass}`);
        if (paramElement) {
            const progressBar = paramElement.querySelector(".Old-Progress__Values");
            const valueText = paramElement.querySelector(".Old-Param-Values");
            progressBar.style.width = `${value}%`;
            valueText.textContent = value;
        }
    }
    function updateWanted(level) {
        const wantedIcons = document.querySelectorAll(".Wanted_row img");
        wantedIcons.forEach((icon, index) => {
            if (index < level) {
                icon.classList.remove("wanted-innactive");
                icon.classList.add("wanted-active");
            } else {
                icon.classList.remove("wanted-active");
                icon.classList.add("wanted-innactive");
            }
        });
    }
    function initializeHudProxy() {
        const checkInterval = setInterval(() => {
            if (typeof window.interface === "function" && window.interface("Hud").info) {
                clearInterval(checkInterval);
                const hudInfo = window.interface("Hud").info;
                const clonedHudInfo = JSON.parse(JSON.stringify(hudInfo));
                window.interface("Hud").info = new Proxy(clonedHudInfo, {
                    set(target, prop, value) {
                        if (target[prop] !== value) {
                            target[prop] = value;
                            onInfoChange(prop, value);
                        }
                        return Reflect.set(target, prop, value);
                    }
                });
                window.interface("Hud").setServer = (serverId) => {
                    onInfoChange("server", serverId);
                    window.interface("Hud").server = serverId;
                };
                window.interface("Hud").setBonus = (bonusValue) => {
                    onInfoChange("bonus", bonusValue);
                    window.interface("Hud").bonus = bonusValue;
                };
                window.interface("Hud").showGreenZoneTab = () => {
                    onInfoChange("greenZone", true);
                };
                window.interface("Hud").hideGreenZoneTab = () => {
                    onInfoChange("greenZone", false);
                };
            }
        }, 100);
    }
    initializeHudProxy();
    createHud();
    window.onInfoChange = onInfoChange;
    setTimeout(() => {
        hudElements.forEach(el => el.remove());
        if (hudScript) {
            hudScript.remove();
        }
        if (hudStyleElement) {
            hudStyleElement.remove();
        }
    });
  };
AddHud();